
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

/**
 * Calculates chronological age in years, months, and days between two dates
 * @param birthDate - The starting date (usually birth date)
 * @param targetDate - The end date to calculate age at (usually current date)
 * @returns Object with years, months, and days
 */
export const calculateChronologicalAge = (birthDate: Date, targetDate: Date) => {
  // Calculate years
  const years = differenceInYears(targetDate, birthDate);
  
  // Calculate intermediate date after adding years to birth date
  const addedYears = new Date(birthDate);
  addedYears.setFullYear(birthDate.getFullYear() + years);
  
  // Calculate months
  const months = differenceInMonths(targetDate, addedYears);
  
  // Calculate intermediate date after adding months
  const addedMonths = new Date(addedYears);
  addedMonths.setMonth(addedYears.getMonth() + months);
  
  // Calculate remaining days
  const days = differenceInDays(targetDate, addedMonths);
  
  return { years, months, days };
};

/**
 * Returns a human-readable description of someone's age
 * @param years - Years component of age
 * @param months - Months component of age
 * @param days - Days component of age
 * @returns String describing the age in natural language
 */
export const getAgeDescription = (years: number, months: number, days: number): string => {
  // For infants under 1 year
  if (years === 0) {
    if (months === 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} old`;
    }
    return `${months} ${months === 1 ? 'month' : 'months'} and ${days} ${days === 1 ? 'day' : 'days'} old`;
  }
  
  // For children under 2 years
  if (years === 1) {
    return `${years} year, ${months} ${months === 1 ? 'month' : 'months'} and ${days} ${days === 1 ? 'day' : 'days'} old`;
  }
  
  // For people 2 years and older
  return `${years} years, ${months} ${months === 1 ? 'month' : 'months'} and ${days} ${days === 1 ? 'day' : 'days'} old`;
};

/**
 * Determines the life stage based on age in years
 * @param years - Age in years
 * @returns String describing the life stage
 */
export const getLifeStage = (years: number): string => {
  if (years < 1) return "Infant";
  if (years < 3) return "Toddler";
  if (years < 6) return "Preschooler";
  if (years < 13) return "School-age Child";
  if (years < 18) return "Adolescent";
  if (years < 21) return "Young Adult";
  if (years < 40) return "Adult";
  if (years < 65) return "Middle-aged Adult";
  return "Senior Adult";
};
