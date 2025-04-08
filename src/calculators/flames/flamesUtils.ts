// Helper functions for FLAMES calculator

// FLAMES relationships data
export const flamesRelationships = [
  {
    key: 'F',
    name: 'Friends',
    description: 'A warm, supportive connection based on mutual trust and shared interests.',
    emoji: '👫'
  },
  {
    key: 'L',
    name: 'Love',
    description: 'A deep romantic connection with strong emotional attachment.',
    emoji: '❤️'
  },
  {
    key: 'A',
    name: 'Affection',
    description: 'A caring relationship with fondness and tenderness.',
    emoji: '🥰'
  },
  {
    key: 'M',
    name: 'Marriage',
    description: 'A committed partnership with potential for lifelong bonding.',
    emoji: '💍'
  },
  {
    key: 'E',
    name: 'Enemies',
    description: 'A challenging relationship with conflicts and opposing views.',
    emoji: '⚔️'
  },
  {
    key: 'S',
    name: 'Siblings',
    description: 'A familial-like bond with both support and rivalry.',
    emoji: '👯'
  }
];

// Function to count remaining characters after removing common ones
export const countRemainingChars = (name1: string, name2: string) => {
  let name1Chars = [...name1];
  let name2Chars = [...name2];
  
  // Remove common characters
  for (let i = 0; i < name1Chars.length; i++) {
    const charIndex = name2Chars.indexOf(name1Chars[i]);
    if (charIndex !== -1) {
      // Mark characters as matched
      name1Chars[i] = '';
      name2Chars[charIndex] = '';
    }
  }
  
  // Filter out empty strings and count remaining characters
  const remainingName1 = name1Chars.filter(char => char !== '');
  const remainingName2 = name2Chars.filter(char => char !== '');
  
  return remainingName1.length + remainingName2.length;
};

// Function to calculate relationship using FLAMES algorithm
export const calculateRelationship = (count: number) => {
  // FLAMES represents: Friends, Love, Affection, Marriage, Enemy, Siblings
  const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
  let currentIndex = 0;
  
  // Keep crossing out letters until only one remains
  while (flames.length > 1) {
    // Calculate the index to remove
    currentIndex = (currentIndex + count - 1) % flames.length;
    
    // Remove the letter at the current index
    flames.splice(currentIndex, 1);
    
    // If we reached the end, reset to beginning
    if (currentIndex === flames.length) {
      currentIndex = 0;
    }
  }
  
  return flames[0];
};

// Function to calculate a pseudo-compatibility percentage
export const calculateCompatibilityPercentage = (name1: string, name2: string) => {
  const totalLength = name1.length + name2.length;
  const commonChars = totalLength - countRemainingChars(name1, name2);
  
  // Calculate percentage based on common characters and name patterns
  let basePercentage = (commonChars / totalLength) * 100;
  
  // Add some randomness but keep it consistent for the same pair of names
  const seedValue = name1.length * name2.length;
  const pseudoRandom = ((seedValue * 13) % 21) - 10; // Range -10 to +10
  
  let finalPercentage = basePercentage * 0.7 + 30 + pseudoRandom;
  
  // Ensure the percentage is between 0 and 100
  finalPercentage = Math.min(Math.max(finalPercentage, 1), 99);
  
  return Math.round(finalPercentage);
};

// Main calculation function
export const calculateFLAMES = (name1: string, name2: string) => {
  if (!name1.trim() || !name2.trim()) {
    return null;
  }
  
  // Remove spaces and convert to lowercase
  const cleanName1 = name1.toLowerCase().replace(/\s/g, '');
  const cleanName2 = name2.toLowerCase().replace(/\s/g, '');
  
  // Count the remaining characters after removing common letters
  let remainingChars = countRemainingChars(cleanName1, cleanName2);
  
  // Get the relationship based on FLAMES algorithm
  const relationship = calculateRelationship(remainingChars);
  
  // Calculate a pseudo-compatibility percentage
  const compatibilityPercentage = calculateCompatibilityPercentage(cleanName1, cleanName2);
  
  const resultRelationship = flamesRelationships.find(r => r.key === relationship);
  
  if (resultRelationship) {
    return {
      relationship: resultRelationship.name,
      description: resultRelationship.description,
      emoji: resultRelationship.emoji,
      percentage: compatibilityPercentage
    };
  }
  
  return null;
};
