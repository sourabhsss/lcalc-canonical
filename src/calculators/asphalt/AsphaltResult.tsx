
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  convertArea,
  calculateVolume,
  calculateWeight,
  calculateCost
} from './asphaltUtils';

interface AsphaltResultProps {
  length: number;
  width: number;
  depth: number;
  pricePerTon: number;
  areaUnit: 'ft' | 'm';
  depthUnit: 'in' | 'cm' | 'mm';
  weightUnit: 'metric' | 'us';
}

const AsphaltResult: React.FC<AsphaltResultProps> = ({ 
  length, 
  width, 
  depth, 
  pricePerTon,
  areaUnit,
  depthUnit,
  weightUnit
}) => {
  // Calculate area
  const area = convertArea(length, width, areaUnit);
  
  // Calculate volume
  const volume = calculateVolume(area, depth, depthUnit, areaUnit);
  
  // Calculate weight
  const { metricTonnes, usTons } = calculateWeight(volume, areaUnit);
  
  // Determine which weight to use based on user preference
  const selectedWeight = weightUnit === 'metric' ? metricTonnes : usTons;
  
  // Calculate cost if price is provided
  const totalCost = pricePerTon > 0 ? calculateCost(selectedWeight, pricePerTon) : null;

  // Format volume unit
  const volumeUnit = areaUnit === 'ft' ? 'ft³' : 'm³';
  
  // Area unit
  const areaUnitDisplay = areaUnit === 'ft' ? 'ft²' : 'm²';

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Asphalt Calculation Results</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Area</div>
              <div className="text-2xl font-bold text-primary">{area.toFixed(2)} {areaUnitDisplay}</div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Volume</div>
              <div className="text-2xl font-bold text-primary">{volume.toFixed(2)} {volumeUnit}</div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Weight ({weightUnit === 'metric' ? 'Metric Tonnes' : 'US Tons'})</div>
              <div className="text-2xl font-bold text-primary">{selectedWeight.toFixed(2)}</div>
            </div>
          </div>
          
          {totalCost !== null && (
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Estimated Cost</div>
              <div className="text-2xl font-bold text-secondary">${totalCost.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground mt-1">
                At ${pricePerTon.toFixed(2)} per {weightUnit === 'metric' ? 'metric tonne' : 'US ton'}
              </div>
            </div>
          )}
          
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Complete Measurement Details</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Dimensions:</td>
                  <td className="py-1">
                    {length} × {width} {areaUnit} area, {depth} {depthUnit} depth
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Area:</td>
                  <td className="py-1">
                    {length} × {width} = {area.toFixed(2)} {areaUnitDisplay}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Weight in US Tons:</td>
                  <td className="py-1">{usTons.toFixed(2)} tons</td>
                </tr>
                <tr>
                  <td className="py-1 text-muted-foreground">Weight in Metric Tonnes:</td>
                  <td className="py-1">{metricTonnes.toFixed(2)} tonnes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-secondary/5 rounded-lg">
        <h3 className="font-medium mb-2">Tips for Your Asphalt Project:</h3>
        <ul className="text-sm space-y-2 text-muted-foreground">
          <li>• Add 5-10% extra material to account for compaction and waste.</li>
          <li>• For driveways, a depth of 2-3 inches (5-7.5 cm) is typically recommended.</li>
          <li>• For commercial applications, consider 4+ inches (10+ cm) for durability.</li>
          <li>• Contact local suppliers to verify current prices per ton in your area.</li>
        </ul>
      </div>
    </div>
  );
};

export default AsphaltResult;
