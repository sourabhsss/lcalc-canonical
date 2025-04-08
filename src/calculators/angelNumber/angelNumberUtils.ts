
// Angel Number meanings and interpretations
export const angelNumberMeanings: Record<string, {
  title: string;
  meaning: string;
  guidance: string;
  lifeAreas: string[];
}> = {
  "111": {
    title: "New Beginnings",
    meaning: "The number 111 represents new opportunities and the power of manifestation. It's a sign that your thoughts are manifesting quickly into reality.",
    guidance: "Focus on positive thoughts and intentions. Be mindful of what you're thinking as it may materialize faster than usual.",
    lifeAreas: ["Career", "Personal Growth", "Spirituality"]
  },
  "222": {
    title: "Balance and Harmony",
    meaning: "The number 222 signifies balance, harmony, and alignment. It suggests that you are on the right path and things are falling into place.",
    guidance: "Trust the process and maintain faith in your journey. Seek balance in all aspects of your life.",
    lifeAreas: ["Relationships", "Work-Life Balance", "Health"]
  },
  "333": {
    title: "Divine Support",
    meaning: "The number 333 indicates that ascended masters and divine beings are near you, offering guidance and support.",
    guidance: "Connect with your creative energy and express yourself. The universe is supporting your personal growth.",
    lifeAreas: ["Creativity", "Self-Expression", "Spiritual Connection"]
  },
  "444": {
    title: "Protection and Stability",
    meaning: "The number 444 symbolizes protection, stability, and divine support. Angels are surrounding you with their loving energy.",
    guidance: "Feel secure in your path. Take practical steps toward your goals with the knowledge that you are protected.",
    lifeAreas: ["Security", "Foundation Building", "Long-term Goals"]
  },
  "555": {
    title: "Significant Change",
    meaning: "The number 555 represents major life changes and transformation. It signals that big shifts are coming your way.",
    guidance: "Embrace change rather than resist it. Be adaptable and open to new opportunities that arise from these transitions.",
    lifeAreas: ["Personal Transformation", "Life Direction", "Adventure"]
  },
  "666": {
    title: "Balance Material and Spiritual",
    meaning: "The number 666 suggests a need to balance material concerns with spiritual aspects of life. It's often misunderstood but actually calls for harmony.",
    guidance: "Reassess your priorities regarding material possessions and spiritual growth. Seek equilibrium between the two.",
    lifeAreas: ["Finances", "Material Possessions", "Spiritual Values"]
  },
  "777": {
    title: "Spiritual Awakening",
    meaning: "The number 777 signifies spiritual enlightenment, intuition, and inner wisdom. It's a highly spiritual number indicating you're on the right spiritual path.",
    guidance: "Trust your intuition and inner guidance. Continue spiritual practices that resonate with you.",
    lifeAreas: ["Spiritual Development", "Intuition", "Inner Wisdom"]
  },
  "888": {
    title: "Abundance and Success",
    meaning: "The number 888 represents financial abundance, success, and achievement. It's associated with the law of cause and effect and karmic rewards.",
    guidance: "Be open to receiving abundance. Your hard work and positive energy are being recognized and rewarded.",
    lifeAreas: ["Financial Prosperity", "Career Success", "Personal Achievement"]
  },
  "999": {
    title: "Completion and Fulfillment",
    meaning: "The number 999 signifies completion, fulfillment, and the end of a significant life phase. It prepares you for what comes next.",
    guidance: "Tie up loose ends and prepare for new beginnings. Release what no longer serves you to make space for new opportunities.",
    lifeAreas: ["Life Transitions", "Completion", "New Chapters"]
  },
  "000": {
    title: "Infinite Potential",
    meaning: "The number 000 represents infinite potential and oneness with the universe. It's a powerful sign of spiritual wholeness.",
    guidance: "Recognize your connection to the universal energy. You are at a point where limitless possibilities are available to you.",
    lifeAreas: ["Spiritual Connection", "Universal Oneness", "Potential"]
  },
  "1010": {
    title: "Divine Timing",
    meaning: "The number 1010 signifies that everything is happening according to divine timing. It's a reminder to stay positive and trust the process.",
    guidance: "Pay attention to your thoughts and maintain a positive outlook. The universe is supporting your highest good.",
    lifeAreas: ["Life Purpose", "Divine Timing", "Positive Thinking"]
  },
  "1111": {
    title: "Awakening and Alignment",
    meaning: "The number 1111 is a powerful wake-up call and sign of spiritual awakening. It represents alignment with your higher self and soul purpose.",
    guidance: "Be aware of your thoughts as they are manifesting rapidly. Set clear intentions for what you want to create in your life.",
    lifeAreas: ["Spiritual Awakening", "Manifestation", "Soul Purpose"]
  },
  "1212": {
    title: "Spiritual Growth and Evolution",
    meaning: "The number 1212 signifies spiritual growth and stepping into your divine life purpose. It's a sign that old cycles are ending and new ones beginning.",
    guidance: "Maintain faith in your journey. The universe is guiding you toward your highest path and purpose.",
    lifeAreas: ["Life Purpose", "Spiritual Evolution", "Divine Guidance"]
  },
  "1234": {
    title: "Progress and Forward Movement",
    meaning: "The number 1234 represents progression, simplicity, and forward movement in life. It suggests that things are moving in the right sequence.",
    guidance: "Continue taking steps forward in your endeavors. Trust that you are progressing exactly as you should be.",
    lifeAreas: ["Personal Growth", "Career Advancement", "Life Journey"]
  },
  "2020": {
    title: "Balance and Cooperation",
    meaning: "The number 2020 represents balance, harmony, and cooperative relationships. It suggests diplomacy and partnership in various life areas.",
    guidance: "Focus on creating harmonious relationships. Work with others to achieve common goals.",
    lifeAreas: ["Partnerships", "Diplomacy", "Teamwork"]
  }
};

// Get the meaning of an angel number
export const getAngelNumberMeaning = (number: string): {
  title: string;
  meaning: string;
  guidance: string;
  lifeAreas: string[];
} | null => {
  // Check if this exact number exists in our database
  if (angelNumberMeanings[number]) {
    return angelNumberMeanings[number];
  }
  
  // For single digits (0-9)
  if (number.length === 1) {
    return getSingleDigitMeaning(number);
  }
  
  // For numbers not in our database, we can look for patterns
  // First check for repeating digits (e.g., 444, 555)
  if (isRepeatingDigits(number)) {
    const digit = number[0];
    
    // Look for an existing pattern with this digit (e.g., if 444 isn't found, try 444)
    const repeatingPattern = `${digit}${digit}${digit}`;
    if (angelNumberMeanings[repeatingPattern]) {
      return angelNumberMeanings[repeatingPattern];
    }
  }
  
  // If all else fails, we can provide a meaning based on digit-by-digit analysis
  return getGeneralMeaning(number);
};

// Check if a number consists of repeating digits
const isRepeatingDigits = (number: string): boolean => {
  return new Set(number.split('')).size === 1;
};

// Get meaning for single digits
// We need to export this function since it's used in AngelNumberCalculator.tsx
export const getSingleDigitMeaning = (digit: string): {
  title: string;
  meaning: string;
  guidance: string;
  lifeAreas: string[];
} => {
  const meanings: Record<string, {
    title: string;
    meaning: string;
    guidance: string;
    lifeAreas: string[];
  }> = {
    "0": {
      title: "Wholeness and Infinity",
      meaning: "The number 0 represents potential, wholeness, and the beginning of a spiritual journey. It symbolizes the void before creation.",
      guidance: "Embrace new beginnings and infinite possibilities. Listen to your intuition as you start a new phase in life.",
      lifeAreas: ["Spirituality", "New Beginnings", "Infinite Potential"]
    },
    "1": {
      title: "New Beginnings and Independence",
      meaning: "The number 1 represents new beginnings, independence, and leadership. It's a sign of taking initiative and following your own path.",
      guidance: "Trust your abilities and take the first step towards your goals. You have the strength to create your reality.",
      lifeAreas: ["Leadership", "Independence", "Creation"]
    },
    "2": {
      title: "Balance and Partnership",
      meaning: "The number 2 symbolizes duality, partnership, and harmony. It represents relationships, cooperation, and finding balance.",
      guidance: "Focus on creating harmonious relationships and finding middle ground in conflicts. Your diplomatic skills are needed now.",
      lifeAreas: ["Relationships", "Diplomacy", "Cooperation"]
    },
    "3": {
      title: "Creativity and Expression",
      meaning: "The number 3 represents creativity, self-expression, and communication. It's a sign to express your authentic self and share your ideas.",
      guidance: "Embrace your creative talents and express yourself freely. Communication is especially powerful for you now.",
      lifeAreas: ["Creativity", "Communication", "Joy"]
    },
    "4": {
      title: "Stability and Foundation",
      meaning: "The number 4 symbolizes stability, practicality, and building strong foundations. It's a sign to focus on creating structure in your life.",
      guidance: "Work diligently on building stable foundations for your future. Practical steps and organization will lead to success.",
      lifeAreas: ["Work", "Stability", "Organization"]
    },
    "5": {
      title: "Change and Freedom",
      meaning: "The number 5 represents change, freedom, and adventure. It signifies transformation and the need to embrace new experiences.",
      guidance: "Be adaptable and open to change. Seek freedom and new experiences that broaden your horizons.",
      lifeAreas: ["Freedom", "Change", "Adventure"]
    },
    "6": {
      title: "Harmony and Responsibility",
      meaning: "The number 6 symbolizes harmony, responsibility, and nurturing. It's connected to family, home, and caring for others.",
      guidance: "Focus on creating balance in your domestic life. Your nurturing abilities are needed by those around you.",
      lifeAreas: ["Family", "Home", "Responsibility"]
    },
    "7": {
      title: "Spirituality and Wisdom",
      meaning: "The number 7 represents spirituality, wisdom, and introspection. It signifies a time for inner work and spiritual growth.",
      guidance: "Take time for solitude and spiritual practices. Trust your intuition and seek deeper knowledge.",
      lifeAreas: ["Spirituality", "Analysis", "Intuition"]
    },
    "8": {
      title: "Abundance and Power",
      meaning: "The number 8 symbolizes abundance, power, and achievement. It's connected to material wealth and professional success.",
      guidance: "Take confident action toward your goals. Your efforts toward financial and professional success are supported.",
      lifeAreas: ["Finances", "Career", "Personal Power"]
    },
    "9": {
      title: "Completion and Compassion",
      meaning: "The number 9 represents completion, compassion, and universal love. It signifies the end of a cycle and higher consciousness.",
      guidance: "Practice compassion and service to others. Release what no longer serves you as you complete an important life phase.",
      lifeAreas: ["Humanitarianism", "Completion", "Universal Love"]
    }
  };
  
  return meanings[digit];
};

// Calculate life path number (one of the most significant numbers in numerology)
export const calculateLifePathNumber = (birthdate: string): string => {
  // Birthdate should be in format MM/DD/YYYY or YYYY-MM-DD
  let dateComponents: string[] = [];
  
  if (birthdate.includes('/')) {
    dateComponents = birthdate.split('/');
    // If in MM/DD/YYYY format, rearrange to [YYYY, MM, DD]
    if (dateComponents.length === 3 && dateComponents[2].length === 4) {
      dateComponents = [dateComponents[2], dateComponents[0], dateComponents[1]];
    }
  } else if (birthdate.includes('-')) {
    dateComponents = birthdate.split('-');
  } else {
    return "Invalid date format";
  }
  
  if (dateComponents.length !== 3) {
    return "Invalid date format";
  }
  
  // Extract year, month, day
  const year = dateComponents[0];
  const month = dateComponents[1];
  const day = dateComponents[2];
  
  // Sum all digits
  let sum = sumDigits(month) + sumDigits(day) + sumDigits(year);
  
  // Reduce to a single digit (unless it's 11, 22, or 33, which are master numbers)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sumDigits(sum.toString());
  }
  
  return sum.toString();
};

// Sum all digits in a number
const sumDigits = (numStr: string): number => {
  return numStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
};

// Get a general meaning based on the individual digits
const getGeneralMeaning = (number: string): {
  title: string;
  meaning: string;
  guidance: string;
  lifeAreas: string[];
} => {
  // Analyze the number's digits
  const digits = number.split('');
  
  // Get the reduced form (sum of all digits)
  let sum = digits.reduce((total, digit) => total + parseInt(digit, 10), 0);
  
  // Reduce to a single digit if needed
  while (sum > 9) {
    sum = sumDigits(sum.toString());
  }
  
  // Get the meaning of the reduced number
  const reducedMeaning = getSingleDigitMeaning(sum.toString());
  
  // Create a custom meaning based on the pattern and reduced form
  return {
    title: `Custom Number Pattern (Reduces to ${sum})`,
    meaning: `Your number ${number} reduces to the essence of ${sum}: ${reducedMeaning.meaning} This sequence may represent a personalized message based on your current life circumstances.`,
    guidance: `Consider how ${reducedMeaning.guidance} While this number is unique to you, its components suggest paths for your journey.`,
    lifeAreas: reducedMeaning.lifeAreas
  };
};

// Get common angel numbers for educational purposes
export const getCommonAngelNumbers = (): string[] => {
  return Object.keys(angelNumberMeanings);
};

// Calculate numerology name number
export const calculateNameNumber = (name: string): string => {
  const nameWithoutSpaces = name.replace(/\s+/g, '').toLowerCase();
  
  // Map letters to numerology values (A=1, B=2, ..., Z=26)
  const letterValues: { [key: string]: number } = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };
  
  // Calculate sum of letter values
  let sum = 0;
  for (const letter of nameWithoutSpaces) {
    if (letterValues[letter]) {
      sum += letterValues[letter];
    }
  }
  
  // Reduce to a single digit (unless it's a master number)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sumDigits(sum.toString());
  }
  
  return sum.toString();
};
