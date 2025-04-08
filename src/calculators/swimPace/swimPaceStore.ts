
import { create } from 'zustand';

export interface SwimPaceFormData {
  distance: number;
  unit: 'meters' | 'yards' | 'miles' | 'kilometers';
  hours: number;
  minutes: number;
  seconds: number;
  paceUnit: '100m' | '100y' | '50m' | '50y' | '25m' | '25y' | 'mile' | 'km';
}

export interface SwimPaceResults {
  totalTimeInSeconds: number;
  formattedTotalTime: string;
  pacePerUnit: number;
  formattedPaceTime: string;
  speedMetersPerSecond: number;
  speedKmPerHour: number;
  speedMilesPerHour: number;
  caloriesBurned: number;
  swimLevel: string;
}

interface SwimPaceState {
  formData: SwimPaceFormData;
  results: SwimPaceResults | null;
  showResults: boolean;
  updateFormData: (data: Partial<SwimPaceFormData>) => void;
  calculateResults: () => void;
  resetCalculator: () => void;
}

const initialFormData: SwimPaceFormData = {
  distance: 1000,
  unit: 'meters',
  hours: 0,
  minutes: 20,
  seconds: 0,
  paceUnit: '100m'
};

export const useSwimPaceStore = create<SwimPaceState>((set, get) => ({
  formData: initialFormData,
  results: null,
  showResults: false,
  
  updateFormData: (data) => {
    set((state) => ({
      formData: { ...state.formData, ...data }
    }));
  },
  
  calculateResults: () => {
    const { formData } = get();
    const { distance, unit, hours, minutes, seconds, paceUnit } = formData;
    
    // Convert time to seconds
    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    
    // Convert distance to meters for calculations
    let distanceInMeters = distance;
    if (unit === 'yards') {
      distanceInMeters = distance * 0.9144;
    } else if (unit === 'miles') {
      distanceInMeters = distance * 1609.34;
    } else if (unit === 'kilometers') {
      distanceInMeters = distance * 1000;
    }
    
    // Calculate speed in meters per second
    const speedMetersPerSecond = distanceInMeters / totalTimeInSeconds;
    
    // Calculate pace for the selected unit
    let paceUnitInMeters = 100; // Default for 100m
    if (paceUnit === '100y') paceUnitInMeters = 91.44;
    else if (paceUnit === '50m') paceUnitInMeters = 50;
    else if (paceUnit === '50y') paceUnitInMeters = 45.72;
    else if (paceUnit === '25m') paceUnitInMeters = 25;
    else if (paceUnit === '25y') paceUnitInMeters = 22.86;
    else if (paceUnit === 'mile') paceUnitInMeters = 1609.34;
    else if (paceUnit === 'km') paceUnitInMeters = 1000;
    
    const pacePerUnit = paceUnitInMeters / speedMetersPerSecond;
    
    // Format time strings
    const formattedTotalTime = formatTime(totalTimeInSeconds);
    const formattedPaceTime = formatTime(pacePerUnit);
    
    // Calculate other metrics
    const speedKmPerHour = speedMetersPerSecond * 3.6;
    const speedMilesPerHour = speedMetersPerSecond * 2.23694;
    
    // Estimate calories burned (very approximate)
    // Assumes average weight of 70kg and moderate intensity
    const minutesSwimming = totalTimeInSeconds / 60;
    const caloriesBurned = Math.round(minutesSwimming * 8.3);
    
    // Determine swim level based on 100m pace
    const pace100m = 100 / speedMetersPerSecond;
    let swimLevel = '';
    if (pace100m < 60) {
      if (pace100m < 60) swimLevel = 'Elite';
      else if (pace100m < 80) swimLevel = 'Advanced';
      else if (pace100m < 100) swimLevel = 'Intermediate';
      else if (pace100m < 120) swimLevel = 'Improving';
      else swimLevel = 'Beginner';
    }
    
    const results: SwimPaceResults = {
      totalTimeInSeconds,
      formattedTotalTime,
      pacePerUnit,
      formattedPaceTime,
      speedMetersPerSecond,
      speedKmPerHour,
      speedMilesPerHour,
      caloriesBurned,
      swimLevel
    };
    
    set({ results, showResults: true });
  },
  
  resetCalculator: () => {
    set({ formData: initialFormData, showResults: false, results: null });
  }
}));

// Helper function to format seconds into HH:MM:SS
function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  let timeString = '';
  if (hours > 0) {
    timeString += `${hours}:`;
    timeString += `${minutes.toString().padStart(2, '0')}:`;
  } else {
    timeString += `${minutes}:`;
  }
  timeString += secs.toString().padStart(2, '0');
  
  return timeString;
}
