
import { TattooTipFormData, TattooTipResultData, TattooTipFactor } from './tattooTipTypes';

export const calculateTattooTip = (data: TattooTipFormData): TattooTipResultData => {
  const tattooPrice = typeof data.tattooPrice === 'string' 
    ? parseFloat(data.tattooPrice) 
    : data.tattooPrice;
  
  // Base tip percentage depending on quality
  let baseTipPercentage = 0;
  switch (data.quality) {
    case 'excellent':
      baseTipPercentage = 20;
      break;
    case 'good':
      baseTipPercentage = 15;
      break;
    case 'average':
      baseTipPercentage = 10;
      break;
    case 'below-average':
      baseTipPercentage = 5;
      break;
  }

  // Collect all factors that affect the tip amount
  const factors: TattooTipFactor[] = [
    {
      name: 'Quality of Work',
      impact: getQualityImpact(data.quality),
      description: getQualityDescription(data.quality),
      effect: 0 // Already accounted for in base percentage
    },
    {
      name: 'Tattoo Complexity',
      impact: getComplexityImpact(data.complexity),
      description: getComplexityDescription(data.complexity),
      effect: getComplexityEffect(data.complexity)
    },
    {
      name: 'Session Duration',
      impact: getDurationImpact(data.duration),
      description: getDurationDescription(data.duration),
      effect: getDurationEffect(data.duration)
    },
    {
      name: 'Satisfaction Level',
      impact: getSatisfactionImpact(data.satisfactionLevel),
      description: `${data.satisfactionLevel}% satisfied`,
      effect: getSatisfactionEffect(data.satisfactionLevel)
    }
  ];

  // Add additional services factor if applicable
  if (data.additionalServices) {
    factors.push({
      name: 'Additional Services',
      impact: 'positive',
      description: 'Extra services provided',
      effect: 3 // Add 3% for additional services
    });
  }

  // Calculate the adjusted tip percentage based on all factors
  let adjustedPercentage = baseTipPercentage;
  factors.forEach(factor => {
    adjustedPercentage += factor.effect;
  });

  // Ensure tip percentage is within reasonable bounds (5% to 30%)
  adjustedPercentage = Math.max(5, Math.min(30, adjustedPercentage));
  
  // Calculate tip amount
  const tipAmount = Math.round(tattooPrice * (adjustedPercentage / 100));
  
  // Calculate recommended range (±25% of the calculated tip)
  const recommendedRangeMin = Math.max(Math.round(tipAmount * 0.75), 5);
  const recommendedRangeMax = Math.round(tipAmount * 1.25);
  
  // Calculate total amount
  const totalAmount = tattooPrice + tipAmount;

  // Generate result object with simplified factors (without the effect property)
  const simplifiedFactors = factors.map(({ name, impact, description }) => ({
    name,
    impact,
    description
  }));

  return {
    tattooPrice,
    tipAmount,
    tipPercentage: Math.round(adjustedPercentage),
    recommendedRangeMin,
    recommendedRangeMax,
    totalAmount,
    factors: simplifiedFactors
  };
};

// Helper functions to determine impact and descriptions for each factor

function getQualityImpact(quality: string): 'positive' | 'neutral' | 'negative' {
  switch (quality) {
    case 'excellent':
      return 'positive';
    case 'good':
      return 'positive';
    case 'average':
      return 'neutral';
    default:
      return 'negative';
  }
}

function getQualityDescription(quality: string): string {
  switch (quality) {
    case 'excellent':
      return 'Exceptional work';
    case 'good':
      return 'Above average quality';
    case 'average':
      return 'Met expectations';
    default:
      return 'Room for improvement';
  }
}

function getComplexityImpact(complexity: string): 'positive' | 'neutral' | 'negative' {
  switch (complexity) {
    case 'high':
      return 'positive';
    case 'medium':
      return 'neutral';
    default:
      return 'neutral';
  }
}

function getComplexityDescription(complexity: string): string {
  switch (complexity) {
    case 'high':
      return 'Intricate design';
    case 'medium':
      return 'Moderate complexity';
    default:
      return 'Simple design';
  }
}

function getComplexityEffect(complexity: string): number {
  switch (complexity) {
    case 'high':
      return 2;
    case 'medium':
      return 0;
    default:
      return -1;
  }
}

function getDurationImpact(duration: string): 'positive' | 'neutral' | 'negative' {
  switch (duration) {
    case 'multi-session':
      return 'positive';
    case 'full-day':
      return 'positive';
    case 'half-day':
      return 'neutral';
    default:
      return 'neutral';
  }
}

function getDurationDescription(duration: string): string {
  switch (duration) {
    case 'multi-session':
      return 'Multiple sessions';
    case 'full-day':
      return 'Full day session';
    case 'half-day':
      return 'Half day session';
    default:
      return 'Brief session';
  }
}

function getDurationEffect(duration: string): number {
  switch (duration) {
    case 'multi-session':
      return 3;
    case 'full-day':
      return 2;
    case 'half-day':
      return 0;
    default:
      return -1;
  }
}

function getSatisfactionImpact(satisfaction: number): 'positive' | 'neutral' | 'negative' {
  if (satisfaction >= 80) return 'positive';
  if (satisfaction >= 50) return 'neutral';
  return 'negative';
}

function getSatisfactionEffect(satisfaction: number): number {
  // Convert satisfaction to effect ranging from -5 to +5
  return Math.round((satisfaction - 50) / 10);
}
