
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  calculateArea,
  calculateVolume,
  convertVolume,
  calculateWeight,
  calculateBags,
  calculateCost,
  GRAVEL_DENSITY
} from './gravelUtils';

interface GravelResultProps {
  length: number;
  width: number;
  depth: number;
  pricePerUnit: number;
  areaUnit: 'ft' | 'm' | 'yd';
  depthUnit: 'in' | 'cm' | 'mm';
  gravelType: keyof typeof GRAVEL_DENSITY;
  weightUnit: 'tons' | 'tonnes';
}

const GravelResult: React.FC<GravelResultProps> = ({ 
  length, 
  width, 
  depth, 
  pricePerUnit,
  areaUnit,
  depthUnit,
  gravelType,
  weightUnit
}) => {
  // Calculate area
  const area = calculateArea(length, width, areaUnit);
  
  // Calculate volume
  const volume = calculateVolume(area, depth, depthUnit, areaUnit);
  
  // Convert volume to cubic feet for bag calculation
  const volumeInCubicFeet = convertVolume(volume, areaUnit, 'ft');
  
  // Calculate volume in cubic yards (common unit for gravel)
  const volumeInCubicYards = convertVolume(volume, areaUnit, 'yd');
  
  // Calculate weight
  const { tons, metricTonnes } = calculateWeight(volume, areaUnit, gravelType);
  
  // Determine which weight to use based on user preference
  const selectedWeight = weightUnit === 'tons' ? tons : metricTonnes;
  
  // Calculate number of 50lb bags
  const bagsNeeded = calculateBags(volumeInCubicFeet);
  
  // Calculate cost if price is provided
  const totalCost = pricePerUnit > 0 ? calculateCost(selectedWeight, pricePerUnit) : null;
  
  // Format area unit display
  const areaUnitDisplay = areaUnit === 'ft' ? 'ft²' : areaUnit === 'm' ? 'm²' : 'yd²';
  
  // Format volume unit display
  const volumeUnitDisplay = areaUnit === 'ft' ? 'ft³' : areaUnit === 'm' ? 'm³' : 'yd³';
  
  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Gravel Calculation Results</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Area</div>
              <div className="text-2xl font-bold text-primary">{area.toFixed(2)} {areaUnitDisplay}</div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Volume</div>
              <div className="text-2xl font-bold text-primary">{volume.toFixed(2)} {volumeUnitDisplay}</div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Weight ({weightUnit === 'tons' ? 'US Tons' : 'Metric Tonnes'})</div>
              <div className="text-2xl font-bold text-primary">{selectedWeight.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Volume (Cubic Yards)</div>
              <div className="text-xl font-bold">{volumeInCubicYards.toFixed(2)} yd³</div>
              <div className="text-xs text-muted-foreground mt-1">
                Common unit for ordering bulk gravel
              </div>
            </div>
            
            <div className="p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">50lb Bags Needed</div>
              <div className="text-xl font-bold">{bagsNeeded}</div>
              <div className="text-xs text-muted-foreground mt-1">
                For small projects using bagged gravel
              </div>
            </div>
          </div>
          
          {totalCost !== null && (
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Estimated Cost</div>
              <div className="text-2xl font-bold text-secondary">${totalCost.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground mt-1">
                At ${pricePerUnit.toFixed(2)} per {weightUnit === 'tons' ? 'US ton' : 'metric tonne'}
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
                  <td className="py-1 text-muted-foreground">Gravel Type:</td>
                  <td className="py-1 capitalize">{gravelType} Gravel</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Weight in US Tons:</td>
                  <td className="py-1">{tons.toFixed(2)} tons</td>
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
        <h3 className="font-medium mb-2">Tips for Your Gravel Project:</h3>
        <ul className="text-sm space-y-2 text-muted-foreground">
          <li>• Add 5-10% extra material to account for settling and spreading.</li>
          <li>• For driveways, a depth of 4-6 inches (10-15 cm) is typically recommended.</li>
          <li>• For garden paths, 2-3 inches (5-7.5 cm) is usually sufficient.</li>
          <li>• Bulk orders (by the cubic yard) are more cost-effective than buying bagged gravel for large projects.</li>
        </ul>
      </div>
    </div>
  );
};

export default GravelResult;
