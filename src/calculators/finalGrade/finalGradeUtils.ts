
// Final Grade Calculator utility functions

/**
 * Calculate the required grade on the final exam to achieve a desired overall grade
 * 
 * @param currentGrade Current grade in the course (percentage)
 * @param desiredGrade Desired final grade for the course (percentage)
 * @param finalWeight Weight of the final exam as a percentage of the overall grade
 * @returns The required grade (percentage) needed on the final exam
 */
export const calculateRequiredGrade = (
  currentGrade: number,
  desiredGrade: number,
  finalWeight: number
): number => {
  // Validate inputs
  if (finalWeight <= 0 || finalWeight >= 100) {
    throw new Error('Final exam weight must be between 0 and 100 percent');
  }
  
  if (currentGrade < 0 || currentGrade > 100) {
    throw new Error('Current grade must be between 0 and 100 percent');
  }
  
  if (desiredGrade < 0 || desiredGrade > 100) {
    throw new Error('Desired grade must be between 0 and 100 percent');
  }

  // Convert percentages to decimals
  const finalWeightDecimal = finalWeight / 100;
  const currentWeightDecimal = 1 - finalWeightDecimal;
  
  // Calculate the required grade on the final
  const requiredGrade = (desiredGrade - (currentGrade * currentWeightDecimal)) / finalWeightDecimal;
  
  // Round to two decimal places
  return Math.round(requiredGrade * 100) / 100;
};

/**
 * Determine if the required grade is achievable (not exceeding 100%)
 * 
 * @param requiredGrade The calculated required grade on the final
 * @returns Boolean indicating if the grade is achievable
 */
export const isRequiredGradeAchievable = (requiredGrade: number): boolean => {
  return requiredGrade <= 100;
};

/**
 * Convert numerical grade to letter grade (US system)
 * 
 * @param grade Numerical grade (percentage)
 * @returns Corresponding letter grade
 */
export const getLetterGrade = (grade: number): string => {
  if (grade >= 97) return 'A+';
  if (grade >= 93) return 'A';
  if (grade >= 90) return 'A-';
  if (grade >= 87) return 'B+';
  if (grade >= 83) return 'B';
  if (grade >= 80) return 'B-';
  if (grade >= 77) return 'C+';
  if (grade >= 73) return 'C';
  if (grade >= 70) return 'C-';
  if (grade >= 67) return 'D+';
  if (grade >= 63) return 'D';
  if (grade >= 60) return 'D-';
  return 'F';
};

/**
 * Get feedback based on the required grade
 * 
 * @param requiredGrade The calculated required grade on the final
 * @param isAchievable Boolean indicating if the grade is achievable
 * @returns Feedback message
 */
export const getGradeFeedback = (requiredGrade: number, isAchievable: boolean): string => {
  if (!isAchievable) {
    return "Based on your current grade and the final exam weight, it's mathematically impossible to achieve your desired grade in this course. Consider speaking with your instructor about extra credit opportunities or adjusting your grade expectations.";
  }
  
  if (requiredGrade >= 90) {
    return "You'll need to aim for an excellent performance on your final exam. Consider forming a study group, seeking tutoring, or meeting with your instructor for additional help. Start preparing well in advance and create a comprehensive study plan.";
  }
  
  if (requiredGrade >= 80) {
    return "You'll need a strong performance on your final exam. Make sure to review all course materials thoroughly, practice with sample problems, and clarify any confusing concepts with your instructor or classmates.";
  }
  
  if (requiredGrade >= 70) {
    return "You need a moderate performance on your final exam. Focus on understanding key concepts and practicing problem-solving techniques. Create a study schedule to ensure you cover all material before the exam.";
  }
  
  if (requiredGrade >= 60) {
    return "You need a passing grade on your final exam. Review the most important concepts from the course and make sure you understand the fundamentals. Don't neglect areas where you struggled during the semester.";
  }
  
  return "You're in a good position to achieve your desired grade. Even with a low score on the final, you can still reach your goal. However, it's still important to prepare adequately and do your best on the exam.";
};

/**
 * Get study recommendations based on the required grade
 * 
 * @param requiredGrade The calculated required grade on the final
 * @returns Study recommendations
 */
export const getStudyRecommendations = (requiredGrade: number): string[] => {
  const recommendations: string[] = [
    "Create a study schedule that covers all exam material",
    "Review your notes, textbooks, and previous assignments"
  ];
  
  if (requiredGrade >= 90) {
    recommendations.push(
      "Form a study group with high-performing classmates",
      "Meet with your instructor to review difficult concepts",
      "Complete practice exams under timed conditions",
      "Teach concepts to others to strengthen your understanding",
      "Use multiple learning methods (visual, auditory, kinesthetic)"
    );
  } else if (requiredGrade >= 80) {
    recommendations.push(
      "Focus on areas where you struggled during the semester",
      "Create summary sheets of key concepts",
      "Try practice problems similar to those expected on the exam",
      "Use flashcards for terminology and key concepts"
    );
  } else if (requiredGrade >= 70) {
    recommendations.push(
      "Focus on understanding fundamental concepts",
      "Review previous quizzes and tests",
      "Create mind maps to connect related ideas"
    );
  } else {
    recommendations.push(
      "Prioritize the most heavily weighted topics",
      "Review feedback from previous assignments to avoid repeated mistakes"
    );
  }
  
  return recommendations;
};

/**
 * Get international grading scale equivalents
 * 
 * @param grade Numerical grade (percentage)
 * @returns Object containing equivalent grades in different systems
 */
export const getInternationalGradeEquivalents = (grade: number): {
  us: string;
  uk: string;
  germany: string;
  france: string;
  australia: string;
  gpa: number;
} => {
  // US letter grade
  const us = getLetterGrade(grade);
  
  // UK grade
  let uk = '';
  if (grade >= 70) uk = 'First Class Honours';
  else if (grade >= 60) uk = 'Upper Second Class Honours (2:1)';
  else if (grade >= 50) uk = 'Lower Second Class Honours (2:2)';
  else if (grade >= 40) uk = 'Third Class Honours';
  else uk = 'Fail';
  
  // German grade
  let germany = '';
  if (grade >= 95) germany = '1.0';
  else if (grade >= 90) germany = '1.3';
  else if (grade >= 85) germany = '1.7';
  else if (grade >= 80) germany = '2.0';
  else if (grade >= 75) germany = '2.3';
  else if (grade >= 70) germany = '2.7';
  else if (grade >= 65) germany = '3.0';
  else if (grade >= 60) germany = '3.3';
  else if (grade >= 55) germany = '3.7';
  else if (grade >= 50) germany = '4.0';
  else germany = '5.0 (Fail)';
  
  // French grade
  let france = '';
  if (grade >= 90) france = '18-20';
  else if (grade >= 80) france = '16-18';
  else if (grade >= 70) france = '14-16';
  else if (grade >= 60) france = '12-14';
  else if (grade >= 50) france = '10-12';
  else france = 'Below 10 (Fail)';
  
  // Australian grade
  let australia = '';
  if (grade >= 85) australia = 'High Distinction (HD)';
  else if (grade >= 75) australia = 'Distinction (D)';
  else if (grade >= 65) australia = 'Credit (C)';
  else if (grade >= 50) australia = 'Pass (P)';
  else australia = 'Fail (F)';
  
  // GPA (4.0 scale)
  let gpa = 0;
  if (grade >= 97) gpa = 4.0;
  else if (grade >= 93) gpa = 4.0;
  else if (grade >= 90) gpa = 3.7;
  else if (grade >= 87) gpa = 3.3;
  else if (grade >= 83) gpa = 3.0;
  else if (grade >= 80) gpa = 2.7;
  else if (grade >= 77) gpa = 2.3;
  else if (grade >= 73) gpa = 2.0;
  else if (grade >= 70) gpa = 1.7;
  else if (grade >= 67) gpa = 1.3;
  else if (grade >= 63) gpa = 1.0;
  else if (grade >= 60) gpa = 0.7;
  else gpa = 0.0;
  
  return {
    us,
    uk,
    germany,
    france,
    australia,
    gpa
  };
};
