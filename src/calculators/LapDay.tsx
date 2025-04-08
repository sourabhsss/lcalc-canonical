
import { useState } from 'react';
import { Clock } from 'lucide-react';

interface LapTime {
  hours: number;
  minutes: number;
  seconds: number;
}

interface LapDayResult {
  totalLaps: number;
  totalTime: string;
  averageLapTime: string;
}

const LapDay = () => {
  const [lapTime, setLapTime] = useState<LapTime>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [totalHours, setTotalHours] = useState<number>(24);
  const [restMinutes, setRestMinutes] = useState<number>(0);
  const [result, setResult] = useState<LapDayResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value, 10) || 0;
    
    if (name === 'totalHours') {
      setTotalHours(numValue);
    } else if (name === 'restMinutes') {
      setRestMinutes(numValue);
    } else {
      setLapTime({ ...lapTime, [name]: numValue });
    }
  };

  const calculateLapDay = () => {
    try {
      // Convert lap time to seconds
      const lapTimeInSeconds = 
        (lapTime.hours * 3600) + 
        (lapTime.minutes * 60) + 
        lapTime.seconds;
      
      if (lapTimeInSeconds <= 0) {
        setError('Lap time must be greater than zero.');
        return;
      }
      
      // Calculate total available time in seconds
      const totalTimeInSeconds = totalHours * 3600;
      
      // Calculate total rest time in seconds
      const totalRestTimeInSeconds = restMinutes * 60;
      
      // Calculate effective time for laps
      const effectiveTimeInSeconds = totalTimeInSeconds - totalRestTimeInSeconds;
      
      if (effectiveTimeInSeconds <= 0) {
        setError('Total time for laps must be greater than zero after accounting for rest time.');
        return;
      }
      
      // Calculate number of complete laps possible
      const totalLaps = Math.floor(effectiveTimeInSeconds / lapTimeInSeconds);
      
      // Format total time (including rest)
      const totalTimeFormatted = formatTime(totalTimeInSeconds);
      
      // Format average lap time
      const averageLapTimeFormatted = formatTime(lapTimeInSeconds);
      
      setResult({
        totalLaps,
        totalTime: totalTimeFormatted,
        averageLapTime: averageLapTimeFormatted
      });
      
      setError(null);
    } catch (err) {
      setError('An error occurred while calculating. Please check your inputs.');
      console.error(err);
    }
  };

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateLapDay();
  };

  const handleClear = () => {
    setLapTime({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    setTotalHours(24);
    setRestMinutes(0);
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Clock className="text-primary" />
          <h2 className="text-xl font-semibold">Lap Day Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Average Lap Time</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="hours" className="block text-sm font-medium mb-1">
                    Hours
                  </label>
                  <input
                    id="hours"
                    name="hours"
                    type="number"
                    min="0"
                    value={lapTime.hours}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="minutes" className="block text-sm font-medium mb-1">
                    Minutes
                  </label>
                  <input
                    id="minutes"
                    name="minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={lapTime.minutes}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="seconds" className="block text-sm font-medium mb-1">
                    Seconds
                  </label>
                  <input
                    id="seconds"
                    name="seconds"
                    type="number"
                    min="0"
                    max="59"
                    value={lapTime.seconds}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="totalHours" className="block text-sm font-medium mb-1">
                  Total Hours Available
                </label>
                <input
                  id="totalHours"
                  name="totalHours"
                  type="number"
                  min="1"
                  max="24"
                  value={totalHours}
                  onChange={handleInputChange}
                  className="input-field"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  How many hours in total you plan to spend (including rest time)
                </p>
              </div>
              
              <div>
                <label htmlFor="restMinutes" className="block text-sm font-medium mb-1">
                  Total Rest Time (minutes)
                </label>
                <input
                  id="restMinutes"
                  name="restMinutes"
                  type="number"
                  min="0"
                  value={restMinutes}
                  onChange={handleInputChange}
                  className="input-field"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Total minutes you plan to rest during the day
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button type="submit" className="btn-primary flex-1">
                Calculate Lap Day
              </button>
              <button 
                type="button" 
                onClick={handleClear}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
              >
                Clear
              </button>
            </div>
          </form>
          
          {error && (
            <div className="mt-6 p-4 border border-destructive/50 bg-destructive/10 rounded-md text-destructive">
              {error}
            </div>
          )}
          
          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Lap Day Results</h3>
              
              <div className="border border-primary/50 bg-primary/5 rounded-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Laps Possible</p>
                    <p className="text-3xl font-bold">{result.totalLaps}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Time</p>
                    <p className="text-xl font-medium">{result.totalTime}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Lap Time</p>
                    <p className="text-xl font-medium">{result.averageLapTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary rounded-md">
                <h4 className="text-md font-medium mb-2">What is a Lap Day?</h4>
                <p className="text-sm text-muted-foreground">
                  A Lap Day is a concept used in sports and fitness training where you calculate how many 
                  laps of a particular activity you can complete in a day, accounting for rest periods. 
                  This calculator helps athletes, swimmers, runners, and cyclists plan their training 
                  sessions efficiently.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LapDay;
