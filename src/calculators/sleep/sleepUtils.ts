
/**
 * Formats a Date object to a time string (HH:MM AM/PM)
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

/**
 * Returns quality information based on the number of sleep cycles
 */
export type CycleQuality = {
  label: string;
  color: string;
  textColor: string;
  recommended: boolean;
};

export const formatCycleQuality = (cycles: number): CycleQuality => {
  switch (cycles) {
    case 3:
      return {
        label: "Minimum sleep (not ideal)",
        color: "border-amber-300",
        textColor: "#d97706",
        recommended: false
      };
    case 4:
      return {
        label: "Short sleep (acceptable)",
        color: "border-amber-400",
        textColor: "#d97706",
        recommended: false
      };
    case 5:
      return {
        label: "Good sleep (recommended)",
        color: "border-green-400",
        textColor: "#16a34a",
        recommended: true
      };
    case 6:
      return {
        label: "Optimal sleep (most recommended)",
        color: "border-green-500",
        textColor: "#16a34a",
        recommended: true
      };
    case 7:
      return {
        label: "Long sleep (recommended)",
        color: "border-green-400",
        textColor: "#16a34a",
        recommended: true
      };
    case 8:
      return {
        label: "Very long sleep (might be too much)",
        color: "border-amber-400",
        textColor: "#d97706",
        recommended: false
      };
    default:
      return {
        label: "Custom sleep duration",
        color: "border-gray-400",
        textColor: "#525252",
        recommended: false
      };
  }
};

/**
 * Sleep FAQ data
 */
export const sleepFaqs = [
  {
    question: "How does the sleep calculator work?",
    answer: "The sleep calculator works by timing the average human sleep cycle, which lasts about 90 minutes. During each cycle, you progress through different stages of sleep, from light sleep to deep sleep, and finally REM sleep. Waking up during light sleep (at the end of a cycle) helps you feel more refreshed, while waking up during deep sleep can leave you feeling groggy. Our calculator adds 14 minutes to account for the average time it takes to fall asleep, then calculates optimal wake-up or bedtime options based on completing full 90-minute sleep cycles."
  },
  {
    question: "How many hours of sleep do I need?",
    answer: "Sleep needs vary by age and individual factors. Generally, adults need 7-9 hours of quality sleep per night (approximately 4-6 complete sleep cycles). Teenagers need 8-10 hours, school-age children 9-12 hours, and infants and toddlers need significantly more. Our calculator recommends options that provide 4.5-12 hours of sleep (3-8 complete cycles), with 6-9 hours (4-6 cycles) being optimal for most adults. Individual needs may vary based on factors like activity level, health conditions, and genetic factors."
  },
  {
    question: "Why do I wake up tired even after 8 hours of sleep?",
    answer: "Waking up tired despite getting enough sleep could be due to several factors: (1) Waking up in the middle of a deep sleep stage rather than at the end of a sleep cycle, (2) Poor sleep quality due to sleep disorders like sleep apnea, (3) Environmental factors like noise, light, or uncomfortable temperature, (4) Stress, anxiety, or depression affecting sleep quality, (5) Alcohol or caffeine consumption, (6) Certain medications, (7) Underlying health conditions. Using our sleep calculator can help time your wake-up to align with the end of a sleep cycle, potentially reducing morning grogginess."
  },
  {
    question: "Is it better to sleep fewer hours and complete cycles or more hours but wake up mid-cycle?",
    answer: "It's generally better to complete full sleep cycles, even if it means slightly less total sleep time. Waking up at the end of a sleep cycle (when you're in light sleep) typically leaves you feeling more refreshed than waking up during deep sleep, even if you've slept longer. However, consistently getting too few total hours of sleep will lead to sleep deprivation regardless of cycle timing. Ideally, you want both sufficient total sleep time (7-9 hours for most adults) AND to wake up at the end of a cycle. The sleep calculator helps you find times that achieve both goals."
  },
  {
    question: "What is sleep debt and how can I recover from it?",
    answer: "Sleep debt is the cumulative effect of not getting enough sleep, essentially the difference between the amount of sleep you should be getting and the amount you actually get. You can recover from sleep debt by: (1) Adding an extra hour or two of sleep each night, (2) Going to bed and waking up at consistent times, (3) Taking short 20-30 minute naps during the day if needed, (4) Prioritizing good sleep hygiene, (5) Gradually adjusting your schedule rather than trying to make up all lost sleep at once. Recovery time depends on the severity of sleep debt – small amounts can be recovered in a few days, while chronic sleep deprivation may take weeks or longer to fully recover from."
  },
  {
    question: "Does the calculator account for the time it takes to fall asleep?",
    answer: "Yes, our sleep calculator includes a 14-minute buffer to account for the average time it takes most people to fall asleep. This is a general estimate based on sleep research, as most healthy adults without sleep disorders typically fall asleep within 10-20 minutes of going to bed. If you know you consistently take significantly longer or shorter to fall asleep, you may want to adjust the recommended times accordingly. For example, if you typically take 30 minutes to fall asleep, you might want to go to bed 15-20 minutes earlier than the calculator suggests."
  },
  {
    question: "How can I improve my sleep quality?",
    answer: "To improve sleep quality: (1) Maintain a consistent sleep schedule, (2) Create a relaxing bedtime routine, (3) Make your bedroom dark, quiet, and cool, (4) Limit screen time before bed, (5) Avoid caffeine, alcohol, and heavy meals close to bedtime, (6) Exercise regularly, but not too close to bedtime, (7) Manage stress through relaxation techniques, (8) Ensure your mattress and pillows are comfortable, (9) Limit daytime naps to 20-30 minutes, (10) Get natural sunlight during the day. Using our sleep calculator to wake up at the end of a sleep cycle can further enhance your sleep quality and morning alertness."
  },
  {
    question: "What are the different stages of sleep?",
    answer: "Sleep progresses through several stages in each 90-minute cycle: (1) N1: Light sleep, the transition from wakefulness to sleep (1-5 minutes), (2) N2: Core sleep with reduced body temperature and heart rate (10-60 minutes), (3) N3: Deep sleep or slow-wave sleep, crucial for physical recovery and immune function (20-40 minutes), (4) REM (Rapid Eye Movement): Dream sleep, important for memory consolidation and cognitive function (10-60 minutes). Early in the night, cycles contain more deep sleep, while later cycles have more REM sleep. Our calculator helps time your wake-up to occur during lighter stages of sleep, helping you feel more refreshed."
  }
];
