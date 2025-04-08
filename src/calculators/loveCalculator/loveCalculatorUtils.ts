
// Helper functions for Love Calculator

// Function to calculate love percentage based on names
export const calculateLovePercentage = (name1: string, name2: string): number => {
  if (!name1.trim() || !name2.trim()) {
    return 0;
  }

  // Clean the names (remove spaces, convert to lowercase)
  const cleanName1 = name1.toLowerCase().replace(/\s+/g, '');
  const cleanName2 = name2.toLowerCase().replace(/\s+/g, '');
  
  // Calculate a deterministic but seemingly random percentage based on the names
  // This ensures the same names always give the same result
  const combinedString = cleanName1 + cleanName2;
  let hash = 0;
  
  // Create a hash from the combined names
  for (let i = 0; i < combinedString.length; i++) {
    const char = combinedString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Generate a percentage between 30 and 100 based on the hash
  // We don't go below 30 to avoid extremely low results that might upset users
  const percentage = 30 + Math.abs(hash % 70);
  return percentage;
};

// Get a relationship description based on the percentage
export const getLoveDescription = (percentage: number): string => {
  if (percentage >= 90) {
    return "Extraordinary Connection! You have a rare and powerful bond that suggests deep compatibility. There's remarkable potential for a fulfilling and harmonious relationship.";
  } else if (percentage >= 80) {
    return "Strong Compatibility! Your connection shows great promise with natural harmony and mutual understanding. This relationship has excellent potential for long-term happiness.";
  } else if (percentage >= 70) {
    return "Great Potential! You share a meaningful connection with good compatibility. With effort and communication, this relationship could flourish beautifully.";
  } else if (percentage >= 60) {
    return "Positive Connection! You have a good foundation with decent compatibility. There's potential for growth if you work through differences with understanding.";
  } else if (percentage >= 50) {
    return "Moderate Compatibility! Your relationship has both strengths and challenges. With commitment and patience, you could build something meaningful together.";
  } else if (percentage >= 40) {
    return "Interesting Dynamic! You may face some challenges, but these differences could complement each other with proper understanding and compromise.";
  } else {
    return "Growing Opportunity! Your compatibility suggests some initial hurdles to overcome. The best relationships often require work and understanding - this could be an opportunity for growth.";
  }
};

// Get relationship advice based on the percentage
export const getLoveAdvice = (percentage: number): string => {
  if (percentage >= 80) {
    return "Nurture your natural connection by continuing to communicate openly and appreciate what makes your bond special.";
  } else if (percentage >= 60) {
    return "Focus on celebrating your similarities while respecting your differences. Good communication will help your connection flourish.";
  } else if (percentage >= 40) {
    return "Understanding each other's perspectives and practicing patience will be key to building a stronger connection.";
  } else {
    return "Relationships often thrive on complementary differences. Take time to understand each other and find common ground.";
  }
};

// Get relationship compatibility factors
export const getCompatibilityFactors = (): { factor: string; description: string }[] => {
  return [
    {
      factor: "Communication Style",
      description: "How well you express yourselves and understand each other"
    },
    {
      factor: "Values & Beliefs",
      description: "Alignment on core life principles and worldview"
    },
    {
      factor: "Emotional Intelligence",
      description: "Ability to understand and manage emotions in the relationship"
    },
    {
      factor: "Conflict Resolution",
      description: "How effectively you work through disagreements"
    },
    {
      factor: "Life Goals",
      description: "Compatibility of long-term aspirations and priorities"
    },
    {
      factor: "Trust & Security",
      description: "Foundation of reliability and safety in the relationship"
    }
  ];
};
