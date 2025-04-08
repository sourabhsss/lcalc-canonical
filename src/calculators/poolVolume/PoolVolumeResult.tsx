
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Droplet, Calculator, Info, HelpCircle } from 'lucide-react';
import { PoolVolumeResult as PoolVolumeResultType, formatCurrency, VolumeUnit } from './poolVolumeUtils';

interface PoolVolumeResultProps {
  result: PoolVolumeResultType;
  unit: VolumeUnit;
}

const PoolVolumeResult: React.FC<PoolVolumeResultProps> = ({ result, unit }) => {
  const {
    volume,
    gallons,
    liters,
    cubicMeters,
    maintenanceTips,
    chemicalNeeds,
    fillTime,
    heatTime,
    costEstimates,
    environmentalImpact
  } = result;

  // Helper function to display the volume with the appropriate unit
  const getVolumeLabel = (unit: VolumeUnit): string => {
    switch (unit) {
      case 'gallons':
        return `${gallons.toLocaleString()} gallons`;
      case 'liters':
        return `${liters.toLocaleString()} liters`;
      case 'cubicMeters':
        return `${cubicMeters.toLocaleString()} m³`;
      default:
        return `${gallons.toLocaleString()} gallons`;
    }
  };

  return (
    <div className="space-y-6 mt-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Droplet className="h-5 w-5 text-primary" />
            <span>Pool Volume Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Your Pool Volume:</p>
              <p className="text-2xl font-bold flex items-center">
                {getVolumeLabel(unit)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Also available in:</p>
              <div className="space-y-1">
                {unit !== 'gallons' && (
                  <p className="text-sm">{gallons.toLocaleString()} gallons</p>
                )}
                {unit !== 'liters' && (
                  <p className="text-sm">{liters.toLocaleString()} liters</p>
                )}
                {unit !== 'cubicMeters' && (
                  <p className="text-sm">{cubicMeters.toLocaleString()} cubic meters</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Estimated Fill Time:</p>
              <p className="text-lg font-semibold">{fillTime}</p>
              <p className="text-xs text-muted-foreground">
                (Based on standard garden hose flow rate)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Chemical Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Chlorine (initial treatment):</span>
                  <span className="font-medium">{chemicalNeeds.chlorine}</span>
                </div>
                <Progress value={75} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Alkalinity increaser:</span>
                  <span className="font-medium">{chemicalNeeds.alkalinity}</span>
                </div>
                <Progress value={60} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>pH adjuster:</span>
                  <span className="font-medium">{chemicalNeeds.phAdjustment}</span>
                </div>
                <Progress value={45} className="h-1" />
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                <p>
                  These estimates are based on typical treatments for a new pool fill.
                  Actual amounts may vary based on your water source and specific pool conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Estimated Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Water fill cost:</span>
                  <span className="font-medium">{formatCurrency(costEstimates.waterFill)}</span>
                </div>
                <Progress value={30} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Monthly heating (average):</span>
                  <span className="font-medium">{formatCurrency(costEstimates.heating)}</span>
                </div>
                <Progress value={85} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Monthly chemicals:</span>
                  <span className="font-medium">{formatCurrency(costEstimates.chemicals)}</span>
                </div>
                <Progress value={50} className="h-1" />
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                <p>
                  Cost estimates are based on national averages and may vary by location.
                  Heating costs assume a gas heater operating at typical efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Maintenance Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {maintenanceTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Calculator className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This heating time estimate assumes a standard pool heater raising water temperature by 1°F per hour per 10,000 gallons.
          Actual heating time will vary based on your heater's BTU rating, starting water temperature, desired temperature, and environmental factors.
        </AlertDescription>
      </Alert>
      
      <div className="rounded-lg border p-4 bg-amber-50 border-amber-200">
        <div className="flex items-start space-x-2">
          <HelpCircle className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800">Environmental Impact</h4>
            <p className="text-sm text-amber-700">
              {environmentalImpact}
            </p>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border p-4 bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-2">
          <Droplet className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-800">Heating Time Estimate</h4>
            <p className="text-sm text-blue-700">
              With a standard pool heater, it would take approximately {heatTime} to raise your pool temperature by 20°F.
              Using a solar cover can reduce heating costs by up to 70% and speed up the heating process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolVolumeResult;
