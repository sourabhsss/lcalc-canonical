
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourtDeadlineResults } from './courtDeadlineUtils';
import { format, differenceInCalendarDays } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calendar, Info, AlertCircle } from 'lucide-react';

interface CourtDeadlineResultProps {
  results: CourtDeadlineResults | null;
  filingDate: Date | null;
}

const CourtDeadlineResult: React.FC<CourtDeadlineResultProps> = ({ results, filingDate }) => {
  if (!results || !filingDate) {
    return null;
  }

  const daysUntilDeadline = differenceInCalendarDays(results.deadlineDate, new Date());
  const isPastDeadline = daysUntilDeadline < 0;
  const isCloseToDeadline = daysUntilDeadline >= 0 && daysUntilDeadline <= 7;

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      <Card className="border-2 border-primary">
        <CardHeader className="bg-primary/10">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Calendar className="h-5 w-5" />
            Court Deadline Results
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Filing Date</h3>
                <p className="text-xl font-semibold">{format(filingDate, 'EEEE, MMMM d, yyyy')}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Deadline Date</h3>
                <p className="text-2xl font-bold text-primary">{results.formattedDeadlineDate}</p>
              </div>
            </div>

            {/* Deadline Alerts */}
            {isPastDeadline && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Deadline has passed!</AlertTitle>
                <AlertDescription>
                  This deadline was {Math.abs(daysUntilDeadline)} days ago. If this was a real legal deadline, you may have missed your opportunity to file.
                </AlertDescription>
              </Alert>
            )}

            {isCloseToDeadline && !isPastDeadline && (
              <Alert variant="default" className="bg-amber-50 text-amber-800 border-amber-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Deadline approaching!</AlertTitle>
                <AlertDescription>
                  This deadline is only {daysUntilDeadline} day{daysUntilDeadline !== 1 ? 's' : ''} away. Consider acting promptly.
                </AlertDescription>
              </Alert>
            )}

            {/* Details Card */}
            <Card className="bg-muted/50">
              <CardContent className="pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Calculation Details</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm">Calendar Days:</p>
                    <p className="font-semibold">{results.calendarDaysCount}</p>
                  </div>
                  <div>
                    <p className="text-sm">Business Days:</p>
                    <p className="font-semibold">{results.businessDaysCount}</p>
                  </div>
                  <div>
                    <p className="text-sm">Weekends Counted:</p>
                    <p className="font-semibold">{results.weekendsCount}</p>
                  </div>
                  <div>
                    <p className="text-sm">Holidays Counted:</p>
                    <p className="font-semibold">{results.holidaysCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="mt-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>{results.description}</p>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="mt-4 text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
              <p className="font-medium">Legal Disclaimer:</p>
              <p>This calculator provides estimates only and should not be considered legal advice. Court deadlines can vary by jurisdiction and case type. Consult a legal professional for accurate deadline information for your specific case.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourtDeadlineResult;
