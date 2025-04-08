
import { AminoAcid, CalculatedPeptideProperties } from './peptideTypes';

// Reference data for amino acids
export const aminoAcids: Record<string, AminoAcid> = {
  A: {
    code: 'A',
    name: 'Alanine',
    formula: 'C3H7NO2',
    molecularWeight: 89.09,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 1.8,
    pKa: { alphaNH3: 9.69, alphaCOOH: 2.34 }
  },
  C: {
    code: 'C',
    name: 'Cysteine',
    formula: 'C3H7NO2S',
    molecularWeight: 121.16,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 2.5,
    pKa: { alphaNH3: 10.78, alphaCOOH: 1.96, sideChain: 8.18 },
    extinction280nm: 120
  },
  D: {
    code: 'D',
    name: 'Aspartic Acid',
    formula: 'C4H7NO4',
    molecularWeight: 133.10,
    charge: { positive: false, negative: true, neutral: false },
    hydrophobicity: -3.5,
    pKa: { alphaNH3: 9.60, alphaCOOH: 1.88, sideChain: 3.65 }
  },
  E: {
    code: 'E',
    name: 'Glutamic Acid',
    formula: 'C5H9NO4',
    molecularWeight: 147.13,
    charge: { positive: false, negative: true, neutral: false },
    hydrophobicity: -3.5,
    pKa: { alphaNH3: 9.67, alphaCOOH: 2.19, sideChain: 4.25 }
  },
  F: {
    code: 'F',
    name: 'Phenylalanine',
    formula: 'C9H11NO2',
    molecularWeight: 165.19,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 2.8,
    pKa: { alphaNH3: 9.13, alphaCOOH: 1.83 },
    extinction280nm: 1200
  },
  G: {
    code: 'G',
    name: 'Glycine',
    formula: 'C2H5NO2',
    molecularWeight: 75.07,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -0.4,
    pKa: { alphaNH3: 9.60, alphaCOOH: 2.34 }
  },
  H: {
    code: 'H',
    name: 'Histidine',
    formula: 'C6H9N3O2',
    molecularWeight: 155.16,
    charge: { positive: true, negative: false, neutral: false },
    hydrophobicity: -3.2,
    pKa: { alphaNH3: 9.17, alphaCOOH: 1.82, sideChain: 6.00 },
    extinction280nm: 700
  },
  I: {
    code: 'I',
    name: 'Isoleucine',
    formula: 'C6H13NO2',
    molecularWeight: 131.17,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 4.5,
    pKa: { alphaNH3: 9.68, alphaCOOH: 2.36 }
  },
  K: {
    code: 'K',
    name: 'Lysine',
    formula: 'C6H14N2O2',
    molecularWeight: 146.19,
    charge: { positive: true, negative: false, neutral: false },
    hydrophobicity: -3.9,
    pKa: { alphaNH3: 8.95, alphaCOOH: 2.18, sideChain: 10.53 }
  },
  L: {
    code: 'L',
    name: 'Leucine',
    formula: 'C6H13NO2',
    molecularWeight: 131.17,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 3.8,
    pKa: { alphaNH3: 9.60, alphaCOOH: 2.36 }
  },
  M: {
    code: 'M',
    name: 'Methionine',
    formula: 'C5H11NO2S',
    molecularWeight: 149.21,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 1.9,
    pKa: { alphaNH3: 9.21, alphaCOOH: 2.28 },
    extinction280nm: 1830
  },
  N: {
    code: 'N',
    name: 'Asparagine',
    formula: 'C4H8N2O3',
    molecularWeight: 132.12,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -3.5,
    pKa: { alphaNH3: 8.80, alphaCOOH: 2.02 }
  },
  P: {
    code: 'P',
    name: 'Proline',
    formula: 'C5H9NO2',
    molecularWeight: 115.13,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -1.6,
    pKa: { alphaNH3: 10.60, alphaCOOH: 1.99 }
  },
  Q: {
    code: 'Q',
    name: 'Glutamine',
    formula: 'C5H10N2O3',
    molecularWeight: 146.15,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -3.5,
    pKa: { alphaNH3: 9.13, alphaCOOH: 2.17 }
  },
  R: {
    code: 'R',
    name: 'Arginine',
    formula: 'C6H14N4O2',
    molecularWeight: 174.20,
    charge: { positive: true, negative: false, neutral: false },
    hydrophobicity: -4.5,
    pKa: { alphaNH3: 9.04, alphaCOOH: 2.17, sideChain: 12.48 }
  },
  S: {
    code: 'S',
    name: 'Serine',
    formula: 'C3H7NO3',
    molecularWeight: 105.09,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -0.8,
    pKa: { alphaNH3: 9.15, alphaCOOH: 2.21 }
  },
  T: {
    code: 'T',
    name: 'Threonine',
    formula: 'C4H9NO3',
    molecularWeight: 119.12,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -0.7,
    pKa: { alphaNH3: 9.12, alphaCOOH: 2.63 }
  },
  V: {
    code: 'V',
    name: 'Valine',
    formula: 'C5H11NO2',
    molecularWeight: 117.15,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: 4.2,
    pKa: { alphaNH3: 9.62, alphaCOOH: 2.32 }
  },
  W: {
    code: 'W',
    name: 'Tryptophan',
    formula: 'C11H12N2O2',
    molecularWeight: 204.23,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -0.9,
    pKa: { alphaNH3: 9.39, alphaCOOH: 2.38 },
    extinction280nm: 5600
  },
  Y: {
    code: 'Y',
    name: 'Tyrosine',
    formula: 'C9H11NO3',
    molecularWeight: 181.19,
    charge: { positive: false, negative: false, neutral: true },
    hydrophobicity: -1.3,
    pKa: { alphaNH3: 9.11, alphaCOOH: 2.20, sideChain: 10.07 },
    extinction280nm: 1200
  }
};

// Validate peptide sequence
export const validatePeptideSequence = (sequence: string): { valid: boolean; message: string } => {
  if (!sequence || sequence.length === 0) {
    return { valid: false, message: 'Please enter a peptide sequence.' };
  }
  
  // Check for valid amino acid codes
  const invalidAAs = sequence.split('').filter(aa => !aminoAcids[aa]);
  
  if (invalidAAs.length > 0) {
    return { 
      valid: false, 
      message: `Invalid amino acid codes found: ${invalidAAs.join(', ')}. Please use standard single-letter codes (A,C,D,E,F,G,H,I,K,L,M,N,P,Q,R,S,T,V,W,Y).`
    };
  }
  
  if (sequence.length > 100) {
    return {
      valid: false,
      message: 'Sequence is too long. Please enter a sequence with 100 or fewer amino acids for accurate calculations.'
    };
  }
  
  return { valid: true, message: '' };
};

// Calculate peptide properties
export const calculatePeptideProperties = (sequence: string): CalculatedPeptideProperties => {
  // Count amino acids
  const aaComposition: Record<string, {count: number, percentage: number}> = {};
  let totalWeight = 0;
  let totalExtinction = 0;
  let totalHydrophobicity = 0;
  
  // Water molecular weight (for the terminal -OH and -H)
  const waterMW = 18.02;
  
  // Count and analyze each amino acid
  for (const aa of sequence) {
    if (!aaComposition[aa]) {
      aaComposition[aa] = { count: 0, percentage: 0 };
    }
    aaComposition[aa].count++;
    
    // Add molecular weight
    totalWeight += aminoAcids[aa].molecularWeight;
    
    // Add extinction coefficient at 280nm if available
    if (aminoAcids[aa].extinction280nm) {
      totalExtinction += aminoAcids[aa].extinction280nm;
    }
    
    // Add hydrophobicity
    totalHydrophobicity += aminoAcids[aa].hydrophobicity;
  }
  
  // Calculate percentages
  Object.keys(aaComposition).forEach(aa => {
    aaComposition[aa].percentage = (aaComposition[aa].count / sequence.length) * 100;
  });
  
  // Calculate molecular weight (subtract water molecules for peptide bonds)
  const molecularWeight = totalWeight - (waterMW * (sequence.length - 1));
  
  // Calculate isoelectric point (pI) - simplified approach
  const isoelectricPoint = calculateIsoelectricPoint(sequence);
  
  // Calculate net charge at pH 7
  const netChargeAtPh7 = calculateNetCharge(sequence, 7);
  
  // Calculate absorbance (A280) using extinction coefficient
  // A = E * c * l, where c is concentration in M and l is path length in cm
  // For 1 mg/ml and 1 cm path length: A = E * (1/MW)
  const absorbance = totalExtinction / molecularWeight;
  
  // Calculate instability index (simplified)
  const instabilityIndex = calculateInstabilityIndex(sequence);
  
  // Calculate average hydrophobicity
  const hydrophobicityIndex = totalHydrophobicity / sequence.length;
  
  // Generate three-letter code sequence
  const threeLetterCodes = sequence.split('').map(aa => 
    aminoAcids[aa].name.substring(0, 3)
  ).join('-');
  
  // Predict half-life
  const halfLife = predictHalfLife(sequence);
  
  // Predict solubility based on hydrophobicity
  const solubility = predictSolubility(hydrophobicityIndex, sequence);
  
  return {
    molecularWeight: parseFloat(molecularWeight.toFixed(2)),
    aminoAcidCount: sequence.length,
    aminoAcidComposition: aaComposition,
    isoelectricPoint: parseFloat(isoelectricPoint.toFixed(2)),
    netCharge: {
      atPh7: parseFloat(netChargeAtPh7.toFixed(2)),
    },
    extinctionCoefficient: totalExtinction,
    absorbance: parseFloat(absorbance.toFixed(3)),
    hydrophobicityIndex: parseFloat(hydrophobicityIndex.toFixed(2)),
    instabilityIndex: parseFloat(instabilityIndex.toFixed(2)),
    halfLife: halfLife,
    solubility: solubility,
    sequence: {
      original: sequence,
      oneLetterCodes: sequence,
      threeLetterCodes: threeLetterCodes
    }
  };
};

// Calculate isoelectric point
const calculateIsoelectricPoint = (sequence: string): number => {
  // Simple binary search algorithm to find the pH where net charge is zero
  let pH = 7.0;
  let step = 3.5;
  
  // Iterate to find the isoelectric point
  for (let i = 0; i < 10; i++) {
    const charge = calculateNetCharge(sequence, pH);
    
    if (Math.abs(charge) < 0.01) {
      break; // Close enough to zero
    }
    
    // Adjust pH based on charge
    if (charge > 0) {
      pH += step;
    } else {
      pH -= step;
    }
    
    step /= 2; // Reduce step size for next iteration
  }
  
  return pH;
};

// Calculate net charge at a specific pH
const calculateNetCharge = (sequence: string, pH: number): number => {
  let netCharge = 0;
  
  // N-terminal charge
  const nTerminalAA = sequence[0];
  if (aminoAcids[nTerminalAA].pKa?.alphaNH3) {
    netCharge += 1 / (1 + Math.pow(10, pH - aminoAcids[nTerminalAA].pKa.alphaNH3));
  }
  
  // C-terminal charge
  const cTerminalAA = sequence[sequence.length - 1];
  if (aminoAcids[cTerminalAA].pKa?.alphaCOOH) {
    netCharge -= 1 / (1 + Math.pow(10, aminoAcids[cTerminalAA].pKa.alphaCOOH - pH));
  }
  
  // Side chain charges
  for (const aa of sequence) {
    if (aa === 'D' || aa === 'E') {
      // Negative charge (Asp, Glu)
      if (aminoAcids[aa].pKa?.sideChain) {
        netCharge -= 1 / (1 + Math.pow(10, aminoAcids[aa].pKa.sideChain - pH));
      }
    } else if (aa === 'K' || aa === 'R') {
      // Positive charge (Lys, Arg)
      if (aminoAcids[aa].pKa?.sideChain) {
        netCharge += 1 / (1 + Math.pow(10, pH - aminoAcids[aa].pKa.sideChain));
      }
    } else if (aa === 'H') {
      // Histidine (charge depends on pH)
      if (aminoAcids[aa].pKa?.sideChain) {
        netCharge += 1 / (1 + Math.pow(10, pH - aminoAcids[aa].pKa.sideChain));
      }
    } else if (aa === 'C' || aa === 'Y') {
      // Cysteine, Tyrosine (can be negative at high pH)
      if (aminoAcids[aa].pKa?.sideChain) {
        netCharge -= 1 / (1 + Math.pow(10, aminoAcids[aa].pKa.sideChain - pH));
      }
    }
  }
  
  return netCharge;
};

// Calculate instability index (simplified)
const calculateInstabilityIndex = (sequence: string): number => {
  // Define instability weights for dipeptides (simplified)
  const unstableAAs = ['D', 'E', 'K', 'R', 'P'];
  let instabilityScore = 0;
  
  // Score based on presence of certain amino acids
  for (let i = 0; i < sequence.length - 1; i++) {
    const dipeptide = sequence.substring(i, i + 2);
    
    // Check if dipeptide contains unstable amino acids
    if (unstableAAs.some(aa => dipeptide.includes(aa))) {
      instabilityScore += 1;
    }
    
    // Additional weight if both amino acids are unstable
    if (unstableAAs.includes(dipeptide[0]) && unstableAAs.includes(dipeptide[1])) {
      instabilityScore += 1;
    }
  }
  
  // Normalize score to a 0-100 scale
  return (instabilityScore / (sequence.length - 1)) * 100;
};

// Predict half-life based on N-terminal rule
const predictHalfLife = (sequence: string): { mammalian: string; yeast: string; ecoli: string } => {
  const nTerminal = sequence[0];
  
  // Simplification of the N-terminal rule
  const halfLifeTable: Record<string, { mammalian: string; yeast: string; ecoli: string }> = {
    A: { mammalian: '>20 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    R: { mammalian: '1 hour', yeast: '2 minutes', ecoli: '2 minutes' },
    N: { mammalian: '1.4 hours', yeast: '3 minutes', ecoli: '>10 hours' },
    D: { mammalian: '1.1 hours', yeast: '3 minutes', ecoli: '>10 hours' },
    C: { mammalian: '1.2 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    E: { mammalian: '1 hour', yeast: '30 minutes', ecoli: '>10 hours' },
    Q: { mammalian: '0.8 hours', yeast: '10 minutes', ecoli: '>10 hours' },
    G: { mammalian: '30 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    H: { mammalian: '3.5 hours', yeast: '10 minutes', ecoli: '>10 hours' },
    I: { mammalian: '20 hours', yeast: '30 minutes', ecoli: '>10 hours' },
    L: { mammalian: '5.5 hours', yeast: '3 minutes', ecoli: '2 minutes' },
    K: { mammalian: '1.3 hours', yeast: '3 minutes', ecoli: '2 minutes' },
    M: { mammalian: '30 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    F: { mammalian: '1.1 hours', yeast: '3 minutes', ecoli: '2 minutes' },
    P: { mammalian: '>20 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    S: { mammalian: '1.9 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    T: { mammalian: '7.2 hours', yeast: '>20 hours', ecoli: '>10 hours' },
    W: { mammalian: '2.8 hours', yeast: '3 minutes', ecoli: '2 minutes' },
    Y: { mammalian: '2.8 hours', yeast: '10 minutes', ecoli: '2 minutes' },
    V: { mammalian: '100 hours', yeast: '>20 hours', ecoli: '>10 hours' }
  };
  
  return halfLifeTable[nTerminal] || { 
    mammalian: 'Unknown', 
    yeast: 'Unknown', 
    ecoli: 'Unknown' 
  };
};

// Predict peptide solubility
const predictSolubility = (hydrophobicityIndex: number, sequence: string): string => {
  // Calculate charge per residue
  const netCharge = Math.abs(calculateNetCharge(sequence, 7));
  const chargePerResidue = netCharge / sequence.length;
  
  // Basic solubility prediction
  if (hydrophobicityIndex > 2) {
    if (chargePerResidue > 0.2) {
      return 'Moderate - Hydrophobic but charged';
    } else {
      return 'Poor - Highly hydrophobic';
    }
  } else if (hydrophobicityIndex > 0) {
    if (chargePerResidue > 0.1) {
      return 'Good - Balanced hydrophobicity and charge';
    } else {
      return 'Moderate - Moderately hydrophobic';
    }
  } else {
    if (chargePerResidue > 0.1) {
      return 'Very Good - Hydrophilic with good charge distribution';
    } else {
      return 'Good - Hydrophilic';
    }
  }
};

// Convert single-letter code to peptide name
export const getPeptideName = (sequence: string): string => {
  return sequence.split('').map(aa => 
    aminoAcids[aa] ? aminoAcids[aa].name : aa
  ).join('-');
};

// Get color for hydrophobicity visualization
export const getHydrophobicityColor = (hydrophobicityValue: number): string => {
  // Scale from blue (hydrophilic) to red (hydrophobic)
  if (hydrophobicityValue <= -3.5) return '#0066cc'; // Most hydrophilic (blue)
  if (hydrophobicityValue <= -2) return '#3399ff';
  if (hydrophobicityValue <= -0.5) return '#66ccff';
  if (hydrophobicityValue <= 0.5) return '#ffffff'; // Neutral (white)
  if (hydrophobicityValue <= 2) return '#ffcc99';
  if (hydrophobicityValue <= 3.5) return '#ff9966';
  return '#ff6600'; // Most hydrophobic (red)
};
