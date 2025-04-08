
export type TattooQuality = 'excellent' | 'good' | 'average' | 'below-average';
export type TattooComplexity = 'high' | 'medium' | 'low';
export type TattooDuration = 'multi-session' | 'full-day' | 'half-day' | 'hour-or-less';

export interface TattooTipFormData {
  tattooPrice: number | string;
  quality: TattooQuality;
  complexity: TattooComplexity;
  duration: TattooDuration;
  satisfactionLevel: number;
  additionalServices: boolean;
}

export interface TattooTipFactor {
  name: string;
  impact: 'positive' | 'neutral' | 'negative';
  description: string;
  effect: number; // Multiplier or flat amount to add/subtract
}

export interface TattooTipResultData {
  tattooPrice: number;
  tipAmount: number;
  tipPercentage: number;
  recommendedRangeMin: number;
  recommendedRangeMax: number;
  totalAmount: number;
  factors: Array<{
    name: string;
    impact: 'positive' | 'neutral' | 'negative';
    description: string;
  }>;
}
