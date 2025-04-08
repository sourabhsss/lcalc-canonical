import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BarChart2, Info, AlertTriangle, AlertCircle, DollarSign, Percent, Clock, TrendingUp } from 'lucide-react';
import { useTherapyProductivityStore } from './therapyProductivityStore';
import { getProductivityRating, getProductivityTips } from './therapyProductivityUtils';
import { CheckCircle } from 'lucide-react';
import { ProductivityResults } from './therapyProductivityStore';

interface TherapyProductivityResultProps {
  results: ProductivityResults;
}

const TherapyProductivityResult: React.FC<TherapyProductivityResultProps> = ({ results }) => {
  const productivityRating = getProductivityRating(results.productivityRate);
  const tips = getProductivityTips(results);

  const {
    totalHours,
    billableHours,
    productivityRate,
    nonBillableHours,
    administrativeHours,
    supervisionHours,
    documentationHours,
    otherHours
  } = results;

  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Productivity Analysis</AlertTitle>
        <AlertDescription>
          Based on your input, here's a detailed analysis of your therapy practice productivity.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productivity Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{results.productivityRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              Percentage of time spent on billable activities
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue Generated</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${results.revenueGenerated.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Based on {results.actualBillableHours} billable hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Effective Hourly Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${results.effectiveHourlyRate.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              Actual revenue per working hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${results.potentialRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              If all hours were billable at ${results.hourlyRate}/hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lost Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${results.lostRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Due to non-billable time and cancellations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Annual Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${results.estimatedAnnualRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Projected yearly earnings at current productivity
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Total Hours</h4>
                <p className="text-2xl font-bold">{totalHours}</p>
              </div>
              <div>
                <h4 className="font-medium">Billable Hours</h4>
                <p className="text-2xl font-bold text-green-600">{billableHours}</p>
              </div>
              <div>
                <h4 className="font-medium">Productivity Rate</h4>
                <p className="text-2xl font-bold text-blue-600">{productivityRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Non-Billable Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Administrative</h4>
                <p className="text-lg">{administrativeHours} hours</p>
              </div>
              <div>
                <h4 className="font-medium">Supervision</h4>
                <p className="text-lg">{supervisionHours} hours</p>
              </div>
              <div>
                <h4 className="font-medium">Documentation</h4>
                <p className="text-lg">{documentationHours} hours</p>
              </div>
              <div>
                <h4 className="font-medium">Other</h4>
                <p className="text-lg">{otherHours} hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className={`border-l-4 ${results.productivityRate >= 75 ? 'border-l-green-500' : results.productivityRate >= 55 ? 'border-l-amber-500' : 'border-l-red-500'}`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Productivity Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold">{results.productivityRate}%</span>
                <p className="text-sm text-muted-foreground mt-1">Rating: {productivityRating}</p>
              </div>
              {results.productivityRate >= 75 ? (
                <CheckCircle size={32} className="text-green-500" />
              ) : (
                <AlertCircle size={32} className={results.productivityRate >= 55 ? "text-amber-500" : "text-red-500"} />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Revenue Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">${results.revenueGenerated}</span>
            <p className="text-sm text-muted-foreground mt-1">From {results.actualBillableHours} billable hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Potential Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">${results.potentialRevenue}</span>
            <p className="text-sm text-muted-foreground mt-1">Based on target billable hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Lost Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">${results.lostRevenue}</span>
            <p className="text-sm text-muted-foreground mt-1">Due to unmet productivity targets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Effective Hourly Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">${results.effectiveHourlyRate}</span>
            <p className="text-sm text-muted-foreground mt-1">When considering all working hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Cancellation Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">${results.cancellationImpact}</span>
            <p className="text-sm text-muted-foreground mt-1">Revenue lost due to cancellations</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Estimated Annual Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="text-4xl font-bold">${results.estimatedAnnualRevenue.toLocaleString()}</span>
          <p className="text-sm text-muted-foreground mt-1">Based on 48 working weeks per year</p>
        </CardContent>
      </Card>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Recommendations</h3>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            Based on industry standards, your recommended target for billable hours is around <strong>{results.recommendedTargetHours} hours per week</strong> (approximately 70% of your total working hours).
          </p>
        </div>
      </div>
    </div>
  );
};

export default TherapyProductivityResult;
