
export interface Course {
  courseName: string;
  creditHours: number;
  grade: string;
  gradePoints: number;
}

export interface GpaResult {
  totalCreditHours: number;
  totalGradePoints: number;
  gpa: number;
  letterGrade: string;
}

// Common grading scales
export const gradingScales = {
  standardUS: {
    name: "Standard US (4.0 Scale)",
    grades: {
      "A+": 4.0,
      "A": 4.0,
      "A-": 3.7,
      "B+": 3.3,
      "B": 3.0,
      "B-": 2.7,
      "C+": 2.3,
      "C": 2.0,
      "C-": 1.7,
      "D+": 1.3,
      "D": 1.0,
      "D-": 0.7,
      "F": 0.0
    }
  },
  plusMinus: {
    name: "Plus/Minus (4.3 Scale)",
    grades: {
      "A+": 4.3,
      "A": 4.0,
      "A-": 3.7,
      "B+": 3.3,
      "B": 3.0,
      "B-": 2.7,
      "C+": 2.3,
      "C": 2.0,
      "C-": 1.7,
      "D+": 1.3,
      "D": 1.0,
      "D-": 0.7,
      "F": 0.0
    }
  }
};

// Get grades list from a grading scale
export const getGradesList = (scale: string): string[] => {
  const selectedScale = scale === "plusMinus" ? gradingScales.plusMinus : gradingScales.standardUS;
  return Object.keys(selectedScale.grades);
};

// Calculate GPA from courses
export const calculateGPA = (courses: Course[]): GpaResult => {
  // Filter out courses without both credit hours and grade points
  const validCourses = courses.filter(
    course => course.creditHours > 0 && course.gradePoints >= 0
  );

  if (validCourses.length === 0) {
    return {
      totalCreditHours: 0,
      totalGradePoints: 0,
      gpa: 0,
      letterGrade: "N/A"
    };
  }

  // Calculate total credit hours and grade points
  const totalCreditHours = validCourses.reduce(
    (sum, course) => sum + course.creditHours,
    0
  );
  
  const totalGradePoints = validCourses.reduce(
    (sum, course) => sum + (course.creditHours * course.gradePoints),
    0
  );

  // Calculate GPA
  const gpa = totalGradePoints / totalCreditHours;

  // Determine letter grade
  const letterGrade = getLetterGradeFromGPA(gpa);

  return {
    totalCreditHours,
    totalGradePoints,
    gpa,
    letterGrade
  };
};

// Get letter grade from GPA value
export const getLetterGradeFromGPA = (gpa: number): string => {
  if (gpa >= 4.0) return "A";
  if (gpa >= 3.7) return "A-";
  if (gpa >= 3.3) return "B+";
  if (gpa >= 3.0) return "B";
  if (gpa >= 2.7) return "B-";
  if (gpa >= 2.3) return "C+";
  if (gpa >= 2.0) return "C";
  if (gpa >= 1.7) return "C-";
  if (gpa >= 1.3) return "D+";
  if (gpa >= 1.0) return "D";
  if (gpa >= 0.7) return "D-";
  if (gpa >= 0) return "F";
  return "N/A";
};

// Get grade point from letter grade based on scale
export const getGradePointFromLetter = (letterGrade: string, scale: string): number => {
  const selectedScale = scale === "plusMinus" ? gradingScales.plusMinus : gradingScales.standardUS;
  return selectedScale.grades[letterGrade as keyof typeof selectedScale.grades] || 0;
};

// Get honor status based on GPA
export const getHonorStatus = (gpa: number): string => {
  if (gpa >= 3.9) return "Summa Cum Laude";
  if (gpa >= 3.7) return "Magna Cum Laude";
  if (gpa >= 3.5) return "Cum Laude";
  if (gpa >= 3.0) return "Dean's List";
  return "Good Standing";
};

// Generate empty course template
export const getEmptyCourse = (): Course => ({
  courseName: "",
  creditHours: 3,
  grade: "B",
  gradePoints: 3.0
});

// Example college GPA FAQs
export const collegeGpaFaqs = [
  {
    question: "What is a College GPA and why is it important?",
    answer: "GPA (Grade Point Average) is a standardized measure of academic achievement in college. It's calculated by averaging the grades earned across all courses, weighted by credit hours. A high GPA is important for maintaining academic scholarships, qualifying for honors, applying to graduate school, and impressing potential employers after graduation."
  },
  {
    question: "How is GPA calculated?",
    answer: "GPA is calculated by multiplying each course's credit hours by the grade points earned, adding these products together, then dividing by the total number of credit hours. For example, an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course would result in a GPA of 3.43 [(3×4.0 + 4×3.0) ÷ (3+4)]."
  },
  {
    question: "What's the difference between term GPA and cumulative GPA?",
    answer: "Term GPA only includes courses taken during a specific academic term (semester or quarter), while cumulative GPA represents your overall academic performance across all terms. This calculator can be used for either by entering only the courses for a specific term or all courses across your academic career."
  },
  {
    question: "What is considered a good GPA in college?",
    answer: "Generally, a GPA of 3.0-3.5 is considered good, 3.5-3.8 is very good, and 3.8+ is excellent. However, standards vary by institution and field of study. Some competitive graduate programs or employers may look for GPAs above 3.5, while a GPA of 2.7 or higher is typically sufficient to maintain good academic standing."
  },
  {
    question: "Can I calculate my GPA if my school uses a different grading scale?",
    answer: "Yes. This calculator offers both the standard 4.0 scale and a plus/minus 4.3 scale. If your school uses a different scale, you can convert your grades to the closest equivalent, or check your school's academic policies for conversion guidelines."
  },
  {
    question: "How can I improve my GPA?",
    answer: "To improve your GPA, focus on getting better grades in future courses with more credit hours, as these have a larger impact. Consider retaking courses with low grades if your school allows grade replacement. Also, maintain consistent study habits, use academic resources, attend office hours, and consider reducing your course load if necessary to focus on fewer classes."
  },
  {
    question: "Do all courses count toward my GPA?",
    answer: "It depends on your institution's policies. Some courses might be pass/fail and not affect GPA. Transfer credits might count toward your degree but not your GPA. Some schools also allow grade forgiveness or replacement for retaken courses. Check your school's academic policies for specific details."
  },
  {
    question: "What are Latin honors (Cum Laude, Magna Cum Laude, etc.)?",
    answer: "Latin honors are distinctions awarded to graduates who achieve high GPAs. Typically, Cum Laude requires a GPA of about 3.5-3.7, Magna Cum Laude about 3.7-3.9, and Summa Cum Laude 3.9+. However, exact GPA requirements vary by institution, and some schools use class rank rather than absolute GPA thresholds."
  }
];
