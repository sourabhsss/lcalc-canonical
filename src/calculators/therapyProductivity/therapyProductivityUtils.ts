import { TherapistData, ProductivityResults } from './therapyProductivityStore';

export function calculateProductivity(data: TherapistData): ProductivityResults {
  const {
    actualBillableHours,
    targetBillableHours,
    hourlyRate,
    totalWorkingHours,
    cancellationRate,
    totalHours,
    billableHours,
    nonBillableHours,
    administrativeHours,
    supervisionHours,
    documentationHours,
    otherHours
  } = data;

  const productivityRate = (actualBillableHours / targetBillableHours) * 100;
  const revenueGenerated = actualBillableHours * hourlyRate;
  const potentialRevenue = targetBillableHours * hourlyRate;
  const lostRevenue = potentialRevenue - revenueGenerated;
  const effectiveHourlyRate = revenueGenerated / totalWorkingHours;
  const estimatedAnnualRevenue = revenueGenerated * 52; // Assuming 52 weeks per year
  const cancellationImpact = (cancellationRate / 100) * potentialRevenue;
  const recommendedTargetHours = Math.min(targetBillableHours * 1.1, totalWorkingHours * 0.8);

  return {
    productivityRate,
    revenueGenerated,
    potentialRevenue,
    lostRevenue,
    effectiveHourlyRate,
    estimatedAnnualRevenue,
    cancellationImpact,
    recommendedTargetHours,
    actualBillableHours,
    hourlyRate,
    totalHours,
    billableHours,
    nonBillableHours,
    administrativeHours,
    supervisionHours,
    documentationHours,
    otherHours
  };
}

export const getProductivityRating = (rate: number): string => {
  if (rate >= 95) return "Excellent";
  if (rate >= 85) return "Very Good";
  if (rate >= 75) return "Good";
  if (rate >= 65) return "Satisfactory";
  if (rate >= 55) return "Needs Improvement";
  return "Concerning";
};

export const getProductivityTips = (results: ProductivityResults): string[] => {
  const tips: string[] = [];
  
  if (results.productivityRate < 75) {
    tips.push("Consider reviewing your scheduling process to reduce gaps between sessions");
    tips.push("Implement a reminder system to decrease no-shows");
    tips.push("Analyze your cancellation patterns to identify trends");
  }
  
  if (results.cancellationImpact > results.revenueGenerated * 0.1) {
    tips.push("Implement a cancellation policy to reduce last-minute cancellations");
    tips.push("Consider offering telehealth options for clients who have transportation issues");
  }
  
  if (results.effectiveHourlyRate < results.hourlyRate * 0.7) {
    tips.push("Review your non-billable tasks and see if any can be delegated or streamlined");
    tips.push("Consider group therapy sessions to increase revenue efficiency");
  }
  
  if (tips.length === 0) {
    tips.push("Your productivity metrics look good! Continue your current practices");
    tips.push("Consider mentoring other therapists on your efficient scheduling practices");
  }
  
  return tips;
};
