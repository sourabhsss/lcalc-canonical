
import { PetFormData, PetResultData } from './petsLapDayTypes';

// Convert pet age to human equivalent years
export const calculatePetAgeInHumanYears = (petType: 'dog' | 'cat', petAge: number): number => {
  if (petType === 'dog') {
    // Dog age calculation (average conversion)
    if (petAge <= 0) return 0;
    if (petAge <= 1) return 15 * petAge;
    if (petAge <= 2) return 15 + 9 * (petAge - 1);
    return 24 + 4 * (petAge - 2);
  } else {
    // Cat age calculation
    if (petAge <= 0) return 0;
    if (petAge <= 1) return 15 * petAge;
    if (petAge <= 2) return 15 + 9 * (petAge - 1);
    return 24 + 4 * (petAge - 2);
  }
};

// Calculate when pet's age in human years will equal owner's age
export const calculatePetLapResults = (data: PetFormData): PetResultData => {
  const { petType, petAge, ownerAge } = data;
  
  // Calculate pet's current age in human years
  const petAgeInHumanYears = calculatePetAgeInHumanYears(petType, petAge);
  
  // Calculate when the pet's age will equal the owner's age
  let lapDayPetAge = petAge;
  let currentHumanEquivalent = petAgeInHumanYears;
  
  // Increment pet age until human equivalent >= owner age
  while (currentHumanEquivalent < ownerAge) {
    lapDayPetAge += 0.1;
    currentHumanEquivalent = calculatePetAgeInHumanYears(petType, lapDayPetAge);
  }
  
  // Find more precise lap day by interpolation
  if (currentHumanEquivalent > ownerAge && lapDayPetAge > petAge + 0.1) {
    const prevHumanEquivalent = calculatePetAgeInHumanYears(petType, lapDayPetAge - 0.1);
    const ratio = (ownerAge - prevHumanEquivalent) / (currentHumanEquivalent - prevHumanEquivalent);
    lapDayPetAge = (lapDayPetAge - 0.1) + (0.1 * ratio);
  }
  
  // Calculate owner's age when lap day occurs
  const yearsUntilLapDay = lapDayPetAge - petAge;
  const ownerAgeLapDay = Math.round(ownerAge + yearsUntilLapDay);
  
  return {
    petAgeInHumanYears,
    petAgeLapDay: lapDayPetAge,
    ownerAgeLapDay,
    yearsUntilLapDay
  };
};
