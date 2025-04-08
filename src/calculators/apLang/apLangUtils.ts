
// AP Lang Score Calculator utility functions

// Score ranges for AP exams
export const apScores = {
  5: 'Extremely well qualified',
  4: 'Well qualified',
  3: 'Qualified',
  2: 'Possibly qualified',
  1: 'No recommendation'
};

// Constants for AP Lang exam
export const AP_LANG_CONSTANTS = {
  TOTAL_MC_QUESTIONS: 45,
  SYNTHESIS_ESSAY_MAX: 6,
  RHETORICAL_ANALYSIS_MAX: 6,
  ARGUMENT_ESSAY_MAX: 6,
  MC_WEIGHT: 0.45,
  FRQ_WEIGHT: 0.55
};

// Calculate the weighted multiple-choice score
export const calculateMCScore = (correctAnswers: number): number => {
  if (correctAnswers < 0) return 0;
  if (correctAnswers > AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) return 45;
  
  return correctAnswers;
};

// Calculate the composite score based on MC and essays
export const calculateCompositeScore = (
  mcCorrect: number,
  synthesisScore: number,
  rhetoricalScore: number,
  argumentScore: number
): number => {
  // Validate inputs
  if (mcCorrect < 0 || mcCorrect > AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) {
    throw new Error('Multiple choice score must be between 0 and 45');
  }
  
  if (synthesisScore < 0 || synthesisScore > AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX) {
    throw new Error('Synthesis essay score must be between 0 and 6');
  }
  
  if (rhetoricalScore < 0 || rhetoricalScore > AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX) {
    throw new Error('Rhetorical analysis score must be between 0 and 6');
  }
  
  if (argumentScore < 0 || argumentScore > AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX) {
    throw new Error('Argument essay score must be between 0 and 6');
  }

  // Calculate weighted multiple choice component (45% of total)
  const mcComponent = (mcCorrect / AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) * 45 * AP_LANG_CONSTANTS.MC_WEIGHT;
  
  // Calculate weighted free response component (55% of total)
  // Each essay is worth up to 6 points, and there are 3 essays
  const maxEssayPoints = AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX + 
                         AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX + 
                         AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX;
  
  const totalEssayPoints = synthesisScore + rhetoricalScore + argumentScore;
  const freeResponseComponent = (totalEssayPoints / maxEssayPoints) * 55 * AP_LANG_CONSTANTS.FRQ_WEIGHT;
  
  // Composite score is the sum of the two components
  return Math.round((mcComponent + freeResponseComponent) * 10) / 10;
};

// Convert composite score to AP score (1-5)
export const compositeToAPScore = (compositeScore: number): number => {
  // These thresholds are approximate and may vary slightly by year
  if (compositeScore >= 68) return 5;
  if (compositeScore >= 55) return 4;
  if (compositeScore >= 40) return 3;
  if (compositeScore >= 25) return 2;
  return 1;
};

// Get detailed feedback based on AP score
export const getScoreFeedback = (apScore: number): string => {
  switch(apScore) {
    case 5:
      return "Congratulations! A score of 5 indicates an extremely well-qualified student who demonstrates thorough understanding of complex concepts and excels in critical thinking. This score often qualifies for college credit at most institutions.";
    case 4:
      return "Great job! A score of 4 indicates a well-qualified student who demonstrates strong understanding of the course content. This score typically qualifies for college credit at many institutions.";
    case 3:
      return "Good work! A score of 3 indicates a qualified student who has demonstrated a basic understanding of the course content. Many colleges accept this score for credit, though policies vary by institution.";
    case 2:
      return "A score of 2 indicates a possibly qualified student who shows partial understanding of the course content. Few colleges grant credit for this score, but it represents progress in the subject area.";
    case 1:
      return "A score of 1 suggests areas for further development. This score indicates no recommendation for college credit. Consider reviewing key concepts and practicing more complex analysis.";
    default:
      return "Please enter valid scores to receive feedback.";
  }
};

// Get college credit information based on AP score
export const getCollegeCreditInfo = (apScore: number): string => {
  switch(apScore) {
    case 5:
    case 4:
      return "Most colleges and universities grant credit for scores of 4 or 5 on the AP English Language exam. Typically, this translates to 3-6 credit hours, potentially fulfilling freshman composition requirements.";
    case 3:
      return "Many colleges accept a score of 3 for credit, though policies vary. Some institutions may grant credit while others may offer placement into higher-level courses without credit.";
    case 2:
    case 1:
      return "Most institutions do not offer credit for scores of 1 or 2. However, these scores still represent valuable learning experience and can inform future study approaches.";
    default:
      return "Please enter valid scores to receive college credit information.";
  }
};

// Get study recommendations based on specific section scores
export const getStudyRecommendations = (
  mcScore: number, 
  synthesisScore: number, 
  rhetoricalScore: number, 
  argumentScore: number
): { 
  multipleChoice: string; 
  synthesis: string; 
  rhetorical: string; 
  argument: string; 
} => {
  // Multiple choice recommendations
  const mcPercentage = (mcScore / AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) * 100;
  let multipleChoice = "";
  
  if (mcPercentage >= 85) {
    multipleChoice = "Your multiple-choice performance is excellent. Continue to refine your close reading skills and practice identifying subtle rhetorical strategies.";
  } else if (mcPercentage >= 70) {
    multipleChoice = "Your multiple-choice performance is good. Focus on improving question types you find challenging and practice timing strategies.";
  } else if (mcPercentage >= 50) {
    multipleChoice = "Your multiple-choice section needs improvement. Practice reading complex texts closely and identifying rhetorical elements. Consider a structured study plan focusing on vocabulary and question types.";
  } else {
    multipleChoice = "Focus on building fundamental reading comprehension and rhetorical analysis skills. Work with a tutor or teacher to develop strategies for approaching multiple-choice questions.";
  }
  
  // Synthesis essay recommendations
  let synthesis = "";
  if (synthesisScore >= 5) {
    synthesis = "Your synthesis skills are strong. Continue refining your ability to integrate sources seamlessly.";
  } else if (synthesisScore >= 3) {
    synthesis = "Work on developing stronger synthesis of multiple sources and creating more cohesive arguments that incorporate evidence effectively.";
  } else {
    synthesis = "Focus on the fundamentals of synthesis writing. Practice identifying key points in sources and connecting them to form a coherent argument.";
  }
  
  // Rhetorical analysis recommendations
  let rhetorical = "";
  if (rhetoricalScore >= 5) {
    rhetorical = "Your rhetorical analysis skills are excellent. Continue developing nuanced analysis of complex rhetorical strategies.";
  } else if (rhetoricalScore >= 3) {
    rhetorical = "Practice identifying and analyzing a wider range of rhetorical devices and explaining their effects more thoroughly.";
  } else {
    rhetorical = "Focus on building fundamental rhetorical analysis skills. Learn to identify common rhetorical devices and practice explaining how they contribute to the author's purpose.";
  }
  
  // Argument essay recommendations
  let argument = "";
  if (argumentScore >= 5) {
    argument = "Your argumentation skills are strong. Continue refining your ability to develop sophisticated, nuanced arguments.";
  } else if (argumentScore >= 3) {
    argument = "Work on developing more complex arguments with stronger supporting evidence and addressing potential counterarguments.";
  } else {
    argument = "Focus on the fundamentals of argumentative writing. Practice developing clear thesis statements and supporting them with relevant evidence.";
  }
  
  return {
    multipleChoice,
    synthesis,
    rhetorical,
    argument
  };
};
