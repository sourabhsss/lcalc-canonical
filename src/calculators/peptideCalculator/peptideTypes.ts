
export interface AminoAcid {
  code: string;
  name: string;
  formula: string;
  molecularWeight: number;
  charge: {
    positive: boolean;
    negative: boolean;
    neutral: boolean;
  };
  hydrophobicity: number;
  pKa?: {
    alphaNH3?: number;
    alphaCOOH?: number;
    sideChain?: number;
  };
  extinction280nm?: number;
}

export interface PeptideData {
  sequence: string;
  name?: string;
  description?: string;
}

export interface CalculatedPeptideProperties {
  molecularWeight: number;
  aminoAcidCount: number;
  aminoAcidComposition: Record<string, {count: number, percentage: number}>;
  isoelectricPoint: number;
  netCharge: {
    atPh7: number;
    atPhCustom?: number;
    customPh?: number;
  };
  extinctionCoefficient: number;
  absorbance: number;
  hydrophobicityIndex: number;
  instabilityIndex: number;
  halfLife: {
    mammalian: string;
    yeast: string;
    ecoli: string;
  };
  solubility: string;
  sequence: {
    original: string;
    oneLetterCodes: string;
    threeLetterCodes: string;
  };
}
