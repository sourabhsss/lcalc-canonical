
export type PetType = 'dog' | 'cat';

export interface PetFormData {
  petType: PetType;
  petAge: number;
  ownerAge: number;
}

export interface PetResultData {
  petAgeInHumanYears: number;
  petAgeLapDay: number;
  ownerAgeLapDay: number;
  yearsUntilLapDay: number;
}
