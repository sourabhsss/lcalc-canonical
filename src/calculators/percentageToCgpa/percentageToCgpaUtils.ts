
/**
 * Converts percentage to CGPA based on different scales and grading systems
 */

// 10-point scale conversion (common in India)
export const percentageToCgpa10Scale = (percentage: number): number => {
  // Calculate raw CGPA
  const rawCgpa = percentage / 9.5;
  // Cap the CGPA at 10.0 (the maximum for a 10-point scale)
  return Math.min(10.0, parseFloat(rawCgpa.toFixed(2)));
};

// 4-point scale conversion (common in US)
export const percentageToCgpa4Scale = (percentage: number): number => {
  if (percentage >= 90) return 4.0;
  if (percentage >= 80) return 3.0 + (percentage - 80) / 10;
  if (percentage >= 70) return 2.0 + (percentage - 70) / 10;
  if (percentage >= 60) return 1.0 + (percentage - 60) / 10;
  if (percentage >= 50) return (percentage - 50) / 10;
  return 0.0;
};

// 7-point scale conversion (used in some universities)
export const percentageToCgpa7Scale = (percentage: number): number => {
  // Calculate raw CGPA
  const rawCgpa = percentage / 100 * 7;
  // Cap the CGPA at 7.0 (the maximum for a 7-point scale)
  return Math.min(7.0, parseFloat(rawCgpa.toFixed(2)));
};

// Multiple scale conversions for comparison
export const getConversions = (percentage: number) => {
  return {
    scale10: percentageToCgpa10Scale(percentage),
    scale4: percentageToCgpa4Scale(percentage),
    scale7: percentageToCgpa7Scale(percentage)
  };
};

// Conversion from CGPA back to percentage (approximate)
export const cgpaToPercentage = (cgpa: number, scale: 4 | 7 | 10): number => {
  switch (scale) {
    case 4:
      return Math.min(100, cgpa * 25); // Approximate for 4-point scale
    case 7:
      return Math.min(100, (cgpa / 7) * 100); // 7-point scale
    case 10:
    default:
      return Math.min(100, cgpa * 9.5); // 10-point scale (common in India)
  }
};

// Get grade letter based on percentage
export const getGradeLetter = (percentage: number): string => {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  return 'F';
};
