
// Calculation utility functions for the Dunk Calculator

// Standard rim height in inches and centimeters
export const RIM_HEIGHT_IN = 120; // 10 feet in inches
export const RIM_HEIGHT_CM = 305; // 10 feet in centimeters

// NBA regulation basketball dimensions
export const BASKETBALL_DIAMETER_IN = 9.43; // inches
export const BASKETBALL_DIAMETER_CM = 24; // centimeters

// Different dunk types with their vertical requirements in inches above rim
export const DUNK_TYPES = {
  'Basic Dunk': {
    name: 'Basic Dunk',
    description: 'Just enough to get the ball over the rim with one or two hands.',
    extraHeightRequired: 0, // inches above rim
    difficulty: 'Beginner',
    famousDunkers: ['Zach LaVine', 'Andrew Wiggins', 'Russell Westbrook']
  },
  'Windmill': {
    name: 'Windmill Dunk',
    description: 'Rotate your arm in a circular motion before dunking.',
    extraHeightRequired: 4, // inches above rim
    difficulty: 'Intermediate',
    famousDunkers: ['Dominique Wilkins', 'Vince Carter', 'Zach LaVine']
  },
  '360': {
    name: '360 Dunk',
    description: 'Complete a full rotation in the air before dunking.',
    extraHeightRequired: 6, // inches above rim
    difficulty: 'Advanced',
    famousDunkers: ['Vince Carter', 'Jason Richardson', 'Zach LaVine']
  },
  'Tomahawk': {
    name: 'Tomahawk Dunk',
    description: 'Extend the ball behind your head and forcefully dunk it.',
    extraHeightRequired: 3, // inches above rim
    difficulty: 'Intermediate',
    famousDunkers: ['LeBron James', 'Michael Jordan', 'Kobe Bryant']
  },
  'Between The Legs': {
    name: 'Between The Legs Dunk',
    description: 'Pass the ball underneath one leg before dunking.',
    extraHeightRequired: 8, // inches above rim
    difficulty: 'Advanced',
    famousDunkers: ['Vince Carter', 'Zach LaVine', 'Aaron Gordon']
  },
  'Double Pump': {
    name: 'Double Pump Dunk',
    description: 'Pump fake in the air before dunking.',
    extraHeightRequired: 2, // inches above rim
    difficulty: 'Intermediate',
    famousDunkers: ['Michael Jordan', 'Kobe Bryant', 'Derrick Rose']
  },
  'Alley-Oop': {
    name: 'Alley-Oop Dunk',
    description: 'Catch the ball in mid-air from a pass and dunk it.',
    extraHeightRequired: 2, // inches above rim
    difficulty: 'Intermediate',
    famousDunkers: ['DeAndre Jordan', 'Blake Griffin', 'Shaquille O\'Neal']
  },
  'Eastbay (Between The Legs Reverse)': {
    name: 'Eastbay (Between The Legs Reverse)',
    description: 'Pass the ball under one leg and dunk it with a reverse motion.',
    extraHeightRequired: 10, // inches above rim
    difficulty: 'Expert',
    famousDunkers: ['Zach LaVine', 'Aaron Gordon', 'Jason Richardson']
  }
};

// Calculate the standing reach based on height using average proportions
export const calculateStandingReach = (
  height: number, 
  unit: 'in' | 'cm'
): number => {
  // On average, standing reach is approximately 1.33 times a person's height
  const reachFactor = 1.33;
  return Math.round(height * reachFactor * 10) / 10;
};

// Calculate vertical leap needed to dunk
export const calculateVerticalLeapNeeded = (
  height: number, 
  reach: number, 
  dunkType: string,
  unit: 'in' | 'cm'
): number => {
  const rimHeight = unit === 'in' ? RIM_HEIGHT_IN : RIM_HEIGHT_CM;
  const ballDiameter = unit === 'in' ? BASKETBALL_DIAMETER_IN : BASKETBALL_DIAMETER_CM;
  
  // Ball needs to clear the rim, so add half its diameter
  const clearance = ballDiameter / 2;
  
  // Extra height required for stylish dunks (convert if using cm)
  const extraHeight = dunkType !== 'Basic Dunk' 
    ? DUNK_TYPES[dunkType as keyof typeof DUNK_TYPES].extraHeightRequired * (unit === 'cm' ? 2.54 : 1) 
    : 0;
  
  // Calculate required vertical leap
  const verticalNeeded = rimHeight + clearance + extraHeight - reach;
  
  return Math.max(0, Math.round(verticalNeeded * 10) / 10);
};

// Evaluate if the user can dunk with their current metrics
export const evaluateDunkability = (
  verticalLeap: number,
  verticalNeeded: number
): {
  canDunk: boolean;
  rating: 'Impossible' | 'Difficult' | 'Challenging' | 'Achievable' | 'Easy';
  improvementNeeded: number;
  trainingTimeEstimate: string;
} => {
  const difference = verticalLeap - verticalNeeded;
  
  // Initialize the result
  const result = {
    canDunk: difference >= 0,
    rating: 'Impossible' as 'Impossible' | 'Difficult' | 'Challenging' | 'Achievable' | 'Easy',
    improvementNeeded: Math.max(0, Math.round(Math.abs(difference) * 10) / 10),
    trainingTimeEstimate: ''
  };
  
  // Determine difficulty rating
  if (difference >= 5) {
    result.rating = 'Easy';
    result.trainingTimeEstimate = 'Already capable';
  } else if (difference >= 0) {
    result.rating = 'Achievable';
    result.trainingTimeEstimate = 'Already capable, but requires good technique';
  } else if (difference >= -3) {
    result.rating = 'Challenging';
    result.trainingTimeEstimate = '1-3 months of targeted training';
  } else if (difference >= -6) {
    result.rating = 'Difficult';
    result.trainingTimeEstimate = '3-6 months of intensive training';
  } else {
    result.rating = 'Impossible';
    result.trainingTimeEstimate = '6+ months of professional training';
  }
  
  return result;
};

// Suggest training regimen based on improvement needed
export const suggestTrainingRegimen = (
  improvementNeeded: number
): {
  exercises: string[];
  frequency: string;
  duration: string;
  intensity: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
} => {
  let regimen = {
    exercises: [] as string[],
    frequency: '',
    duration: '',
    intensity: 'Low' as 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme'
  };
  
  // Base exercises everyone should do
  const baseExercises = [
    'Squats',
    'Calf Raises',
    'Lunges',
    'Box Jumps'
  ];
  
  // Determine regimen based on improvement needed
  if (improvementNeeded <= 0) {
    regimen.exercises = baseExercises;
    regimen.frequency = '2-3 times per week';
    regimen.duration = '4-6 weeks (maintenance)';
    regimen.intensity = 'Low';
  } else if (improvementNeeded <= 3) {
    regimen.exercises = [
      ...baseExercises,
      'Depth Jumps',
      'Bulgarian Split Squats',
      'Jump Rope Intervals'
    ];
    regimen.frequency = '3-4 times per week';
    regimen.duration = '6-8 weeks';
    regimen.intensity = 'Moderate';
  } else if (improvementNeeded <= 6) {
    regimen.exercises = [
      ...baseExercises,
      'Depth Jumps',
      'Bulgarian Split Squats',
      'Jump Rope Intervals',
      'Plyometric Push-ups',
      'Weighted Squat Jumps'
    ];
    regimen.frequency = '4-5 times per week';
    regimen.duration = '8-12 weeks';
    regimen.intensity = 'High';
  } else if (improvementNeeded <= 10) {
    regimen.exercises = [
      ...baseExercises,
      'Depth Jumps',
      'Bulgarian Split Squats',
      'Jump Rope Intervals',
      'Plyometric Push-ups',
      'Weighted Squat Jumps',
      'Olympic Lifts (Clean & Jerk, Snatch)',
      'Weighted Vest Training'
    ];
    regimen.frequency = '5-6 times per week';
    regimen.duration = '12-16 weeks';
    regimen.intensity = 'Very High';
  } else {
    regimen.exercises = [
      ...baseExercises,
      'Depth Jumps',
      'Bulgarian Split Squats',
      'Jump Rope Intervals',
      'Plyometric Push-ups',
      'Weighted Squat Jumps',
      'Olympic Lifts (Clean & Jerk, Snatch)',
      'Weighted Vest Training',
      'Professional Plyometric Training',
      'Specialized Vertical Jump Program'
    ];
    regimen.frequency = '6 times per week with planned recovery';
    regimen.duration = '16-24 weeks';
    regimen.intensity = 'Extreme';
  }
  
  return regimen;
};

// NBA player data for comparison
export const NBA_VERTICAL_JUMPS = [
  { player: 'Michael Jordan', vertical: 48, height: 78, reach: 103 },
  { player: 'Vince Carter', vertical: 43, height: 78, reach: 104 },
  { player: 'Zach LaVine', vertical: 46, height: 77, reach: 103 },
  { player: 'LeBron James', vertical: 44, height: 81, reach: 106 },
  { player: 'Derrick Rose', vertical: 40, height: 75, reach: 100 },
  { player: 'Russell Westbrook', vertical: 36.5, height: 75, reach: 99 },
  { player: 'Andrew Wiggins', vertical: 44, height: 79, reach: 104 },
  { player: 'Kobe Bryant', vertical: 38, height: 78, reach: 103 },
  { player: 'Nate Robinson', vertical: 43.5, height: 69, reach: 92 },
  { player: 'Spud Webb', vertical: 46, height: 67, reach: 89 }
];

// Calculate and provide a comparison with NBA players
export const compareWithNBAPlayers = (
  height: number, 
  reach: number, 
  vertical: number,
  unit: 'in' | 'cm'
): {
  closestPlayer: {
    name: string;
    vertical: number;
    height: number;
    heightDifference: number;
    verticalDifference: number;
  };
  rankPercentile: number;
} => {
  // Convert to inches if in cm
  const heightIn = unit === 'cm' ? height / 2.54 : height;
  const reachIn = unit === 'cm' ? reach / 2.54 : reach;
  const verticalIn = unit === 'cm' ? vertical / 2.54 : vertical;
  
  // Find closest NBA player by overall similarity (weighted sum of height and vertical differences)
  let closestPlayer = NBA_VERTICAL_JUMPS[0];
  let minDifference = Infinity;
  
  NBA_VERTICAL_JUMPS.forEach(player => {
    // Weight vertical difference more than height
    const heightDiff = Math.abs(player.height - heightIn);
    const verticalDiff = Math.abs(player.vertical - verticalIn) * 1.5;
    const totalDiff = heightDiff + verticalDiff;
    
    if (totalDiff < minDifference) {
      minDifference = totalDiff;
      closestPlayer = player;
    }
  });
  
  // Calculate percentile rank compared to NBA players (simplified)
  const allVerticals = NBA_VERTICAL_JUMPS.map(p => p.vertical);
  const belowCount = allVerticals.filter(v => v < verticalIn).length;
  const rankPercentile = Math.round((belowCount / allVerticals.length) * 100);
  
  return {
    closestPlayer: {
      name: closestPlayer.player,
      vertical: closestPlayer.vertical,
      height: closestPlayer.height,
      heightDifference: Math.round((closestPlayer.height - heightIn) * 10) / 10,
      verticalDifference: Math.round((closestPlayer.vertical - verticalIn) * 10) / 10
    },
    rankPercentile
  };
};
