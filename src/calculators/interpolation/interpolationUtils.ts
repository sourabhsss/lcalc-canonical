
export type InterpolationMethod = 'linear' | 'polynomial' | 'cubic';

export interface DataPoint {
  x: number;
  y: number;
}

export interface InterpolationData {
  points: DataPoint[];
  xValue: number;
}

// Linear interpolation between two points
const linearInterpolate = (x0: number, y0: number, x1: number, y1: number, x: number): number => {
  // Check if we're at one of the endpoints
  if (x === x0) return y0;
  if (x === x1) return y1;
  
  // Calculate interpolated value
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
};

// Polynomial interpolation using Lagrange method
const polynomialInterpolate = (points: DataPoint[], x: number): number => {
  let result = 0;
  
  for (let i = 0; i < points.length; i++) {
    let term = points[i].y;
    
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        term *= (x - points[j].x) / (points[i].x - points[j].x);
      }
    }
    
    result += term;
  }
  
  return result;
};

// Cubic spline interpolation
const cubicSplineInterpolate = (points: DataPoint[], x: number): number => {
  // Find the segment that contains the value x
  let i = 0;
  while (i < points.length - 1 && x > points[i + 1].x) {
    i++;
  }
  
  // If x is outside the range of data points, use the closest endpoint
  if (i >= points.length - 1) {
    return points[points.length - 1].y;
  }
  if (i < 0 || x < points[0].x) {
    return points[0].y;
  }
  
  // Simple case: if we only have 2 data points, use linear interpolation
  if (points.length === 2) {
    return linearInterpolate(points[0].x, points[0].y, points[1].x, points[1].y, x);
  }
  
  // For cubic spline, we'll use a simplified approach that approximates a natural cubic spline
  // For more accuracy, a full cubic spline calculation would be needed
  
  // Get the four closest points for cubic interpolation (or fewer if at the boundaries)
  const startIdx = Math.max(0, i - 1);
  const endIdx = Math.min(points.length - 1, i + 2);
  const subPoints = points.slice(startIdx, endIdx + 1);
  
  // Use polynomial interpolation on the subset of points
  return polynomialInterpolate(subPoints, x);
};

// Main interpolation function that delegates to specific methods
export const interpolateValue = (
  data: InterpolationData,
  method: InterpolationMethod
): number => {
  // Sort the points by x-value to ensure proper interpolation
  const sortedPoints = [...data.points].sort((a, b) => a.x - b.x);
  
  // Check if we have enough data points
  if (sortedPoints.length < 2) {
    throw new Error('At least two data points are required for interpolation');
  }
  
  // Check if the target x-value is within the range of data points
  const xMin = sortedPoints[0].x;
  const xMax = sortedPoints[sortedPoints.length - 1].x;
  
  // Handle extrapolation (outside the range) with a warning if needed
  if (data.xValue < xMin || data.xValue > xMax) {
    console.warn('Extrapolation: The requested x-value is outside the range of data points');
  }
  
  // For linear interpolation, find the two closest points
  if (method === 'linear') {
    // If the x-value matches an existing point, return the corresponding y-value
    const exactPoint = sortedPoints.find(p => p.x === data.xValue);
    if (exactPoint) return exactPoint.y;
    
    // Find the two points to interpolate between
    let leftIndex = 0;
    while (leftIndex < sortedPoints.length - 1 && sortedPoints[leftIndex + 1].x < data.xValue) {
      leftIndex++;
    }
    
    // Handle extrapolation cases
    if (data.xValue < sortedPoints[0].x) {
      leftIndex = 0;
    } else if (data.xValue > sortedPoints[sortedPoints.length - 1].x) {
      leftIndex = sortedPoints.length - 2;
    }
    
    const rightIndex = leftIndex + 1;
    
    // Perform linear interpolation
    return linearInterpolate(
      sortedPoints[leftIndex].x,
      sortedPoints[leftIndex].y,
      sortedPoints[rightIndex].x,
      sortedPoints[rightIndex].y,
      data.xValue
    );
  }
  
  // For polynomial interpolation
  if (method === 'polynomial') {
    return polynomialInterpolate(sortedPoints, data.xValue);
  }
  
  // For cubic spline interpolation
  if (method === 'cubic') {
    return cubicSplineInterpolate(sortedPoints, data.xValue);
  }
  
  throw new Error('Invalid interpolation method');
};

// Format the result to a reasonable number of decimal places
export const formatResult = (value: number): string => {
  // Round to 4 decimal places for display
  return value.toFixed(4);
};

// Find the method description for display
export const getMethodDescription = (method: InterpolationMethod): string => {
  switch (method) {
    case 'linear':
      return 'Linear interpolation connects data points with straight lines and estimates values along these lines.';
    case 'polynomial':
      return 'Polynomial interpolation fits a polynomial curve through all data points to find values between them.';
    case 'cubic':
      return 'Cubic spline interpolation creates smooth curves between data points using piecewise cubic polynomials.';
    default:
      return '';
  }
};

// Examples of interpolation applications by field
export const interpolationExamples = [
  {
    field: 'Engineering',
    examples: [
      'Stress analysis in material science',
      'Predicting component performance between tested values',
      'Fluid dynamics and thermodynamic calculations'
    ]
  },
  {
    field: 'Data Science',
    examples: [
      'Filling missing values in time series data',
      'Creating smooth visualizations from sparse data points',
      'Predicting intermediate values in experimental results'
    ]
  },
  {
    field: 'Finance',
    examples: [
      'Yield curve construction',
      'Option pricing between known market data points',
      'Risk assessment with varying parameters'
    ]
  },
  {
    field: 'Physics',
    examples: [
      'Predicting particle motion between measured positions',
      'Analyzing wave behavior between recorded amplitudes',
      'Estimating values between experimental measurements'
    ]
  },
  {
    field: 'Computer Graphics',
    examples: [
      'Creating smooth animations between keyframes',
      'Generating terrain from elevation data points',
      'Color gradient generation'
    ]
  }
];

// FAQ data for the interpolation calculator
export const interpolationFaqs = [
  {
    question: "What is interpolation and why is it useful?",
    answer: "Interpolation is a mathematical method used to estimate unknown values between known data points. It's useful when you have discrete data but need to fill in the gaps with reasonable estimates. For example, if you know the temperature at 9:00 AM and 11:00 AM, interpolation can help you estimate what it was at 10:00 AM. This technique is essential in engineering, statistics, economics, computer graphics, and many scientific fields."
  },
  {
    question: "What's the difference between linear, polynomial, and cubic spline interpolation?",
    answer: "Linear interpolation connects data points with straight lines, providing simple estimates but lacking smoothness at the data points. Polynomial interpolation fits a single polynomial curve through all points, creating a smooth function but potentially causing oscillation problems with many data points. Cubic spline interpolation uses piecewise cubic polynomials to create a smooth curve that passes through all data points, maintaining continuity and avoiding the oscillation issues of higher-degree polynomials. Each method has trade-offs between simplicity, accuracy, and computational complexity."
  },
  {
    question: "When should I use linear interpolation versus other methods?",
    answer: "Linear interpolation is best when: 1) Your data points are closely spaced, 2) The relationship between variables is approximately linear, 3) You need a simple, computationally efficient calculation, or 4) You're working with real-time applications where speed matters more than precision. It's commonly used in applications like simple animations, basic data visualization, and quick estimations. For more complex relationships or when greater accuracy is needed, polynomial or cubic spline methods may be more appropriate."
  },
  {
    question: "Is extrapolation (estimating beyond the data range) reliable?",
    answer: "Extrapolation is generally less reliable than interpolation because it attempts to predict values outside the range of known data. The further you extrapolate from your data, the less accurate the prediction typically becomes. Linear extrapolation can be reasonable for short distances if the trend continues, but polynomial extrapolation can be particularly unreliable, often producing wildly inaccurate values. When extrapolating, it's important to understand the underlying phenomenon and recognize the increasing uncertainty in your estimates."
  },
  {
    question: "How many data points do I need for accurate interpolation?",
    answer: "The number of data points needed depends on the complexity of the underlying relationship and the interpolation method. For linear interpolation, you need at least two points per segment of interest. For polynomial interpolation, more points generally allow for fitting more complex curves, but too many points can lead to oscillation problems. Cubic spline interpolation typically requires at least 3-4 points for reasonable results. In practice, it's best to have data points that adequately capture the pattern of change in your data, with closer spacing in regions where the data changes rapidly."
  },
  {
    question: "Can interpolation be used for multidimensional data?",
    answer: "Yes, interpolation can be extended to multidimensional data, though it becomes more complex. Bilinear and trilinear interpolation are used for 2D and 3D data respectively. These methods effectively perform linear interpolation along each dimension. More sophisticated approaches like kriging or radial basis functions can handle irregular grids of multidimensional data. Multidimensional interpolation is commonly used in fields like geographic information systems (GIS), medical imaging, and computational fluid dynamics."
  },
  {
    question: "What are the limitations of interpolation?",
    answer: "Interpolation has several limitations: 1) It assumes the data follows a continuous pattern between points, which may not be true for all phenomena, 2) It cannot accurately capture sudden changes or discontinuities unless data points are placed precisely at those locations, 3) All methods introduce some level of error in the estimates, 4) The choice of interpolation method can significantly impact results, 5) Extrapolation beyond the data range is particularly unreliable, and 6) In multiple dimensions, computational complexity increases substantially. Understanding these limitations is crucial for proper application."
  },
  {
    question: "How accurate is interpolation for scientific or engineering applications?",
    answer: "The accuracy of interpolation for scientific or engineering applications depends on several factors: the density and accuracy of your original data points, how well the chosen interpolation method matches the underlying physical behavior, the smoothness of the phenomenon being modeled, and whether there are discontinuities or rapid changes. For many engineering applications, cubic spline interpolation provides a good balance of accuracy and computational efficiency. However, domain-specific interpolation methods (like those based on physical equations) often provide better results for scientific applications."
  }
];
