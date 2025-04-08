import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, TrendingUp, DollarSign, Clock, Target, AlertTriangle } from 'lucide-react';
import { ProductivityResults } from '../therapyProductivityStore';

interface TherapyProductivityResultProps {
  results: ProductivityResults;
}

const TherapyProductivityResult: React.FC<TherapyProductivityResultProps> = ({ results }) => {
  const getProductivityRating = (rate: number) => {
    if (rate >= 90) return { text: 'Excellent', color: 'text-green-600' };
    if (rate >= 80) return { text: 'Good', color: 'text-green-500' };
    if (rate >= 70) return { text: 'Fair', color: 'text-yellow-500' };
    if (rate < 70) return { text: 'Needs Improvement', color: 'text-red-500' };
    return { text: 'Unknown', color: 'text-gray-500' };
  };

  const getProductivityTips = (rate: number) => {
    if (rate >= 90) return 'Keep up the great work! Consider mentoring others to share your productivity strategies.';
    if (rate >= 80) return 'You\'re doing well! Look for opportunities to optimize your workflow further.';
    if (rate >= 70) return 'Focus on reducing administrative tasks and improving time management.';
    return 'Consider reviewing your workflow and identifying areas for improvement.';
  };

  const rating = getProductivityRating(results.productivityRate);
  const tips = getProductivityTips(results.productivityRate);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Productivity Rate</h3>
            </div>
            <div className="text-3xl font-bold text-primary">{results.productivityRate.toFixed(1)}%</div>
            <div className={`text-sm font-medium ${rating.color}`}>{rating.text}</div>
            <p className="text-sm text-muted-foreground">{tips}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Revenue Generated</h3>
            </div>
            <div className="text-3xl font-bold">${results.revenueGenerated.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">
              Effective Hourly Rate: ${results.effectiveHourlyRate.toFixed(2)}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Potential Revenue</div>
            <div className="text-2xl font-bold">${results.potentialRevenue.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Lost Revenue</div>
            <div className="text-2xl font-bold text-red-500">${results.lostRevenue.toFixed(2)}</div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Time Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-sm text-muted-foreground">Billable Hours</div>
            </div>
            <div className="text-2xl font-bold">{results.billableHours.toFixed(1)} hrs</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <div className="text-sm text-muted-foreground">Recommended Target</div>
            </div>
            <div className="text-2xl font-bold">{results.recommendedTargetHours.toFixed(1)} hrs</div>
          </div>
        </div>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Your estimated annual revenue at current productivity: ${results.estimatedAnnualRevenue.toFixed(2)}
        </AlertDescription>
      </Alert>

      {results.cancellationImpact > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Cancellations are impacting your revenue by ${results.cancellationImpact.toFixed(2)} per month
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default TherapyProductivityResult; 