
import React from 'react';
import { format } from 'date-fns';
import { CalendarClock, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ChronologicalAgeResultProps {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  birthDate: Date;
  targetDate: Date;
}

const ChronologicalAgeResult: React.FC<ChronologicalAgeResultProps> = ({
  years,
  months,
  days,
  totalDays,
  birthDate,
  targetDate
}) => {
  const formatOrdinal = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  
  // Calculate percent of current year completed
  const getYearProgress = (): number => {
    if (years === 0) return 0;
    const monthPercent = (months / 12) * 100;
    const dayPercent = (days / 30) * (100 / 12); // rough approximation
    return Math.min(monthPercent + dayPercent, 100);
  };

  // Calculate total weeks
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;
  
  // Calculate total months (approximate)
  const totalMonthsApprox = (years * 12) + months;

  return (
    <div className="mt-8 space-y-6 animate-in fade-in duration-500">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Chronological Age Result</CardTitle>
          <CardDescription>
            From {format(birthDate, 'PPP')} to {format(targetDate, 'PPP')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium flex items-center">
                <CalendarClock className="mr-2 h-5 w-5 text-primary" />
                Exact Age
              </h3>
              <p className="text-3xl font-bold">
                {years} {years === 1 ? 'year' : 'years'}, {months} {months === 1 ? 'month' : 'months'}, {days} {days === 1 ? 'day' : 'days'}
              </p>
              
              {years > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress toward {formatOrdinal(years + 1)} birthday</span>
                    <span>{Math.round(getYearProgress())}%</span>
                  </div>
                  <Progress value={getYearProgress()} className="h-2" />
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium flex items-center mb-2">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Alternative Formats
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-medium">Decimal Years:</span> {(years + (months/12) + (days/365.25)).toFixed(2)} years</li>
                  <li><span className="font-medium">Total Months:</span> ~{totalMonthsApprox} months</li>
                  <li><span className="font-medium">Total Weeks:</span> {totalWeeks} weeks, {remainingDays} {remainingDays === 1 ? 'day' : 'days'}</li>
                  <li><span className="font-medium">Total Days:</span> {totalDays.toLocaleString()} days</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="text-sm font-medium flex items-center mb-2">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  Time Statistics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-medium">Hours:</span> ~{(totalDays * 24).toLocaleString()} hours</li>
                  <li><span className="font-medium">Minutes:</span> ~{(totalDays * 24 * 60).toLocaleString()} minutes</li>
                  <li><span className="font-medium">Seconds:</span> ~{(totalDays * 24 * 60 * 60).toLocaleString()} seconds</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChronologicalAgeResult;
