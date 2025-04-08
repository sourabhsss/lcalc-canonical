import { create } from 'zustand';

export interface StandardDeviationData {
  dataPoints: number[];
  isPopulation: boolean;
}

export interface StandardDeviationResults {
  mean: number;
  standardDeviation: number;
  variance: number;
  min: number;
  max: number;
  range: number;
  sum: number;
  count: number;
  dataPoints: number[];
}

interface StandardDeviationStore {
  data: StandardDeviationData | null;
  results: StandardDeviationResults | null;
  setData: (data: StandardDeviationData) => void;
  setResults: (results: StandardDeviationResults) => void;
  clearData: () => void;
  clearResults: () => void;
}

export const useStandardDeviationStore = create<StandardDeviationStore>((set) => ({
  data: null,
  results: null,
  setData: (data) => set({ data }),
  setResults: (results) => set({ results }),
  clearData: () => set({ data: null, results: null }),
  clearResults: () => set({ results: null }),
})); 