
export const formatTime = (hours: number, minutes: number): string => {
  if (hours === 0 && minutes === 0) return "0 minutes";
  
  let result = "";
  if (hours > 0) {
    result += `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }
  
  if (minutes > 0) {
    if (hours > 0) result += " and ";
    result += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }
  
  return result;
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const calculateListeningStats = (hours: number, minutes: number, speed: number) => {
  // Convert everything to minutes for calculation
  const totalMinutesAtNormalSpeed = hours * 60 + minutes;
  const totalMinutesAtSelectedSpeed = totalMinutesAtNormalSpeed / speed;
  
  // Calculate new hours and minutes
  const newHours = Math.floor(totalMinutesAtSelectedSpeed / 60);
  const newMinutes = Math.round(totalMinutesAtSelectedSpeed % 60);
  
  // Calculate time saved
  const timeSaved = totalMinutesAtNormalSpeed - totalMinutesAtSelectedSpeed;
  const savedHours = Math.floor(timeSaved / 60);
  const savedMinutes = Math.round(timeSaved % 60);
  
  return {
    adjustedTime: { hours: newHours, minutes: newMinutes, totalMinutes: totalMinutesAtSelectedSpeed },
    savedTime: { hours: savedHours, minutes: savedMinutes, totalMinutes: timeSaved }
  };
};

export const popularAudiobooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    length: { hours: 5, minutes: 35 },
    recommended: true
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    length: { hours: 5, minutes: 48 },
    recommended: false
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    length: { hours: 16, minutes: 10 },
    recommended: true
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    length: { hours: 19, minutes: 7 },
    recommended: false
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    length: { hours: 15, minutes: 17 },
    recommended: true
  }
];

export const audiobookSpeedBenefits = [
  {
    speed: 1.25,
    benefit: "A good starting point for beginners, speeding up audiobooks without losing comprehension."
  },
  {
    speed: 1.5,
    benefit: "Most popular speed setting, reducing a 10-hour audiobook to 6 hours 40 minutes."
  },
  {
    speed: 2.0,
    benefit: "Advanced listeners can finish audiobooks in half the time, doubling their reading volume."
  },
  {
    speed: 2.5,
    benefit: "Experienced listeners may use this for review or for familiar content."
  },
  {
    speed: 3.0,
    benefit: "Maximum speed on most apps, suitable only for highly experienced listeners or quick review."
  }
];
