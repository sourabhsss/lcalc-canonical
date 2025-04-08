
export interface LcmHcfFormData {
  numbers: string;
  calculationType: 'lcm' | 'hcf';
  showSteps: boolean;
}

export interface LcmHcfResult {
  result: number;
  numbers: number[];
  calculationType: 'lcm' | 'hcf';
  steps?: string[];
  factors?: number[];
  primeFactorization?: Record<number, Record<number, number>>;
}
