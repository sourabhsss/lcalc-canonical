import { addBusinessDays, addDays, format, isWeekend, parse, isBefore } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Types for our calculator
export type DeadlineType = 'calendar' | 'business' | 'court';
export type FilingMethod = 'inPerson' | 'electronic' | 'mail';
export type CourtType = 'federal' | 'state' | 'local';

export interface Holiday {
  date: Date;
  name: string;
}

export interface CourtDeadlineInputs {
  filingDate: Date;
  deadlineDays: number;
  deadlineType: DeadlineType;
  courtType: CourtType;
  filingMethod: FilingMethod;
  state: string;
  includeHolidays: boolean;
  customHolidays: Holiday[];
}

export interface CourtDeadlineResults {
  deadlineDate: Date;
  formattedDeadlineDate: string;
  description: string;
  businessDaysCount: number;
  calendarDaysCount: number;
  holidaysCount: number;
  weekendsCount: number;
}

// Federal holidays for the current year
export const getFederalHolidays = (year: number): Holiday[] => {
  return [
    { date: new Date(year, 0, 1), name: "New Year's Day" },
    { date: new Date(year, 0, 15), name: "Martin Luther King Jr. Day" }, // Third Monday in January
    { date: new Date(year, 1, 19), name: "Presidents' Day" }, // Third Monday in February
    { date: new Date(year, 4, 29), name: "Memorial Day" }, // Last Monday in May
    { date: new Date(year, 5, 19), name: "Juneteenth" }, // June 19
    { date: new Date(year, 6, 4), name: "Independence Day" }, // July 4
    { date: new Date(year, 8, 4), name: "Labor Day" }, // First Monday in September
    { date: new Date(year, 9, 9), name: "Columbus Day" }, // Second Monday in October
    { date: new Date(year, 10, 11), name: "Veterans Day" }, // November 11
    { date: new Date(year, 10, 23), name: "Thanksgiving Day" }, // Fourth Thursday in November
    { date: new Date(year, 11, 25), name: "Christmas Day" }, // December 25
  ];
};

// Helper function to check if a date is a holiday
export const isDateHoliday = (date: Date, holidays: Holiday[]): boolean => {
  return holidays.some(holiday => 
    date.getDate() === holiday.date.getDate() && 
    date.getMonth() === holiday.date.getMonth() && 
    date.getFullYear() === holiday.date.getFullYear()
  );
};

// Function to get day counting method description based on deadline type
export const getDeadlineTypeDescription = (deadlineType: DeadlineType): string => {
  switch (deadlineType) {
    case 'calendar':
      return 'Calendar days (includes weekends and holidays)';
    case 'business':
      return 'Business days (excludes weekends and holidays)';
    case 'court':
      return 'Court days (excludes weekends, holidays, and follows specific court rules)';
    default:
      return 'Calendar days';
  }
};

// Function to get filing method additional time if applicable
export const getFilingMethodAdditionalDays = (filingMethod: FilingMethod): number => {
  switch (filingMethod) {
    case 'mail':
      return 3; // Typically mail adds 3 days in many jurisdictions
    case 'electronic':
      return 0; // Often no additional days for electronic filing
    case 'inPerson':
      return 0; // No additional days for in-person filing
    default:
      return 0;
  }
};

// Get state-specific court holidays
export const getStateHolidays = (state: string, year: number): Holiday[] => {
  const baseHolidays = getFederalHolidays(year);
  
  // Add state-specific holidays
  switch (state) {
    case 'CA':
      return [
        ...baseHolidays,
        { date: new Date(year, 2, 31), name: "César Chávez Day" },
      ];
    case 'TX':
      return [
        ...baseHolidays,
        { date: new Date(year, 2, 2), name: "Texas Independence Day" },
        { date: new Date(year, 3, 21), name: "San Jacinto Day" },
      ];
    case 'NY':
      return [
        ...baseHolidays,
        { date: new Date(year, 1, 12), name: "Lincoln's Birthday" },
        { date: new Date(year, 10, 2), name: "Election Day" },
      ];
    // Add more states as needed
    default:
      return baseHolidays;
  }
};

// Main calculation function
export const calculateCourtDeadline = (inputs: CourtDeadlineInputs): CourtDeadlineResults => {
  const {
    filingDate,
    deadlineDays,
    deadlineType,
    courtType,
    filingMethod,
    state,
    includeHolidays,
    customHolidays = []
  } = inputs;

  // Get holidays based on court type and state
  const year = filingDate.getFullYear();
  let holidays: Holiday[] = [];
  
  if (includeHolidays) {
    holidays = 
      courtType === 'federal' 
        ? getFederalHolidays(year)
        : getStateHolidays(state, year);
    
    // Add custom holidays
    holidays = [...holidays, ...customHolidays];
  }

  // Additional days based on filing method
  const additionalDays = getFilingMethodAdditionalDays(filingMethod);
  const totalDays = deadlineDays + additionalDays;

  // Initialize deadlineDate with filingDate as default
  let deadlineDate = new Date(filingDate);
  let businessDaysCount = 0;
  let holidaysCount = 0;
  let weekendsCount = 0;

  if (deadlineType === 'calendar') {
    // Simply add calendar days
    deadlineDate = addDays(filingDate, totalDays);
    
    // Count weekends and holidays between filing date and deadline
    let currentDate = new Date(filingDate);
    while (isBefore(currentDate, deadlineDate)) {
      currentDate = addDays(currentDate, 1);
      
      if (isWeekend(currentDate)) {
        weekendsCount++;
      } else if (includeHolidays && isDateHoliday(currentDate, holidays)) {
        holidaysCount++;
      } else {
        businessDaysCount++;
      }
    }
  } else if (deadlineType === 'business') {
    // Add business days (skipping weekends and holidays)
    deadlineDate = filingDate;
    let daysToAdd = totalDays;
    
    while (daysToAdd > 0) {
      deadlineDate = addDays(deadlineDate, 1);
      
      if (isWeekend(deadlineDate)) {
        weekendsCount++;
      } else if (includeHolidays && isDateHoliday(deadlineDate, holidays)) {
        holidaysCount++;
      } else {
        daysToAdd--;
        businessDaysCount++;
      }
    }
  } else if (deadlineType === 'court') {
    // Court days (follows specific court rules, often excludes weekends and holidays but may have specific counting methods)
    // For simplicity, we'll treat it similar to business days but with special handling
    deadlineDate = filingDate;
    let daysToAdd = totalDays;
    
    // Additional complexity: court days may have special "first day" rules
    // In many jurisdictions, the filing day doesn't count
    
    while (daysToAdd > 0) {
      deadlineDate = addDays(deadlineDate, 1);
      
      if (isWeekend(deadlineDate)) {
        weekendsCount++;
      } else if (includeHolidays && isDateHoliday(deadlineDate, holidays)) {
        holidaysCount++;
      } else {
        daysToAdd--;
        businessDaysCount++;
      }
    }
    
    // Additional complexity: if deadline falls on weekend/holiday, move to next business day
    while (isWeekend(deadlineDate) || (includeHolidays && isDateHoliday(deadlineDate, holidays))) {
      deadlineDate = addDays(deadlineDate, 1);
      
      if (isWeekend(deadlineDate)) {
        weekendsCount++;
      } else if (includeHolidays && isDateHoliday(deadlineDate, holidays)) {
        holidaysCount++;
      }
    }
  }

  // Format the deadline date
  const formattedDeadlineDate = format(deadlineDate, 'MMMM d, yyyy', { locale: enUS });
  
  // Generate description
  const description = `Deadline calculated based on ${getDeadlineTypeDescription(deadlineType)}. ${
    additionalDays > 0 ? `Additional ${additionalDays} day(s) added for ${filingMethod} filing.` : ''
  }`;

  return {
    deadlineDate,
    formattedDeadlineDate,
    description,
    businessDaysCount,
    calendarDaysCount: totalDays,
    holidaysCount,
    weekendsCount
  };
};
