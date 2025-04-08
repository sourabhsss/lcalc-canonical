import { create } from 'zustand';

export interface TherapistData {
  actualBillableHours: number;
  targetBillableHours: number;
  hourlyRate: number;
  totalWorkingHours: number;
  cancellationRate: number;
  totalHours: number;
  billableHours: number;
  nonBillableHours: number;
  administrativeHours: number;
  supervisionHours: number;
  documentationHours: number;
  otherHours: number;
}

export interface ProductivityResults {
  productivityRate: number;
  revenueGenerated: number;
  potentialRevenue: number;
  lostRevenue: number;
  effectiveHourlyRate: number;
  estimatedAnnualRevenue: number;
  cancellationImpact: number;
  recommendedTargetHours: number;
  actualBillableHours: number;
  hourlyRate: number;
  totalHours: number;
  billableHours: number;
  nonBillableHours: number;
  administrativeHours: number;
  supervisionHours: number;
  documentationHours: number;
  otherHours: number;
}

interface TherapyProductivityStore {
  therapistData: TherapistData | null;
  results: ProductivityResults | null;
  setTherapistData: (data: TherapistData) => void;
  setResults: (results: ProductivityResults) => void;
}

export const useTherapyProductivityStore = create<TherapyProductivityStore>((set) => ({
  therapistData: null,
  results: null,
  setTherapistData: (data) => set({ therapistData: data }),
  setResults: (results) => set({ results: results }),
}));
