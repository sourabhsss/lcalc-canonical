
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { TowingEstimateResult as TowingEstimateResultType } from './towingEstimateUtils';
import { Truck, Clock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TowingEstimateResultProps {
  result: TowingEstimateResultType;
}

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const TowingEstimateResult: React.FC<TowingEstimateResultProps> = ({ result }) => {
  const {
    baseFee,
    distanceFee,
    vehicleTypeFee,
    serviceTypeFee,
    timeOfDayFee,
    locationFee,
    additionalServicesFees,
    subtotal,
    tax,
    totalEstimate,
    estimatedTimeOfArrival
  } = result;

  // Extract information needed for the UI
  const distance = result.breakdown.find(item => item.includes('Distance fee'))
    ?.match(/\((\d+\.?\d*) miles/)?.[1] || '0';
  
  const vehicleTypeMatch = result.breakdown.find(item => item.includes('Vehicle type'))
    ?.match(/\((.*?)\)/);
  const vehicleType = vehicleTypeMatch ? vehicleTypeMatch[1] : 'standard';
  
  const isNight = result.breakdown.some(item => item.includes('night'));
  const isWeekend = result.breakdown.some(item => item.includes('weekend'));
  const isHoliday = result.breakdown.some(item => item.includes('holiday'));
  const isAfterHours = isNight || isWeekend || isHoliday;
  
  const needsWinching = additionalServicesFees.winching > 0;
  const needsOffRoad = additionalServicesFees.offRoad > 0;
  const needsStorage = additionalServicesFees.storage > 0;
  
  // Extract storage days from breakdown if available
  const storageDaysMatch = result.breakdown.find(item => item.includes('storage'))
    ?.match(/\((\d+) days\)/);
  const storageDays = storageDaysMatch ? storageDaysMatch[1] : '0';

  return (
    <div className="space-y-6 mt-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Truck className="h-5 w-5 text-primary" />
            <span>Towing Estimate Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Estimated Cost:</p>
              <p className="text-2xl font-bold">
                {formatCurrency(totalEstimate)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Distance:</p>
              <p className="text-lg font-semibold">
                {distance} miles
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Base Hook-up Fee:</p>
                <p className="font-medium">{formatCurrency(baseFee)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Distance Cost ({distance} miles):</p>
                <p className="font-medium">{formatCurrency(distanceFee)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vehicle Type ({vehicleType}):</p>
                <p className="font-medium">{formatCurrency(vehicleTypeFee)}</p>
              </div>
              {serviceTypeFee > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">Service Type Fee:</p>
                  <p className="font-medium">{formatCurrency(serviceTypeFee)}</p>
                </div>
              )}
              {timeOfDayFee > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">After-Hours Fee:</p>
                  <p className="font-medium">{formatCurrency(timeOfDayFee)}</p>
                </div>
              )}
              {locationFee > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">Location Fee:</p>
                  <p className="font-medium">{formatCurrency(locationFee)}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Additional Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {needsWinching && (
                <div>
                  <p className="text-sm text-muted-foreground">Winching Service:</p>
                  <p className="font-medium">{formatCurrency(additionalServicesFees.winching)}</p>
                </div>
              )}
              {needsOffRoad && (
                <div>
                  <p className="text-sm text-muted-foreground">Off-Road Recovery:</p>
                  <p className="font-medium">{formatCurrency(additionalServicesFees.offRoad)}</p>
                </div>
              )}
              {needsStorage && (
                <div>
                  <p className="text-sm text-muted-foreground">Storage ({storageDays} days):</p>
                  <p className="font-medium">{formatCurrency(additionalServicesFees.storage)}</p>
                </div>
              )}
              {additionalServicesFees.labor > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">Additional Labor:</p>
                  <p className="font-medium">{formatCurrency(additionalServicesFees.labor)}</p>
                </div>
              )}
              {!needsWinching && !needsOffRoad && !needsStorage && additionalServicesFees.labor === 0 && (
                <div className="py-2">
                  <p className="text-muted-foreground">No additional services selected</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This is an estimate only. Actual costs may vary based on specific conditions at the time of service.
          Additional fees may apply for circumstances not accounted for in this estimate.
        </AlertDescription>
      </Alert>
      
      <div className="rounded-lg border p-4 bg-amber-50 border-amber-200">
        <div className="flex items-start space-x-2">
          <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800">Response Time Estimate</h4>
            <p className="text-sm text-amber-700">
              {isAfterHours 
                ? `Expected response time: ${Math.round(estimatedTimeOfArrival * 1.5)}-${Math.round(estimatedTimeOfArrival * 2)} minutes due to after-hours request.`
                : `Expected response time: ${Math.round(estimatedTimeOfArrival * 0.8)}-${Math.round(estimatedTimeOfArrival)} minutes during regular business hours.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TowingEstimateResult;
