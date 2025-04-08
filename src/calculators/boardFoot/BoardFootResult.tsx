
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateBoardFeet, calculateCost, convertToInches } from './boardFootUtils';

interface BoardFootResultProps {
  thickness: number;
  width: number;
  length: number;
  quantity: number;
  pricePerBoardFoot: number;
  unit: 'in' | 'ft' | 'cm' | 'm';
}

const BoardFootResult: React.FC<BoardFootResultProps> = ({ 
  thickness, 
  width, 
  length, 
  quantity, 
  pricePerBoardFoot,
  unit
}) => {
  // Convert dimensions to inches for calculation
  const thicknessInches = convertToInches(thickness, unit);
  const widthInches = convertToInches(width, unit);
  const lengthInches = convertToInches(length, unit);
  
  // Calculate board feet
  const boardFeet = calculateBoardFeet(thicknessInches, widthInches, lengthInches, quantity);
  
  // Calculate cost if price is provided
  const totalCost = pricePerBoardFoot > 0 ? calculateCost(boardFeet, pricePerBoardFoot) : null;
  
  // Calculate volume in cubic feet and cubic meters
  const cubicInches = thicknessInches * widthInches * lengthInches * quantity;
  const cubicFeet = cubicInches / 1728;
  const cubicMeters = cubicInches / 61023.7;

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Board Foot Calculation Results</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Board Feet</div>
              <div className="text-3xl font-bold text-primary">{boardFeet}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {quantity} piece{quantity !== 1 ? 's' : ''} at {boardFeet / quantity} board feet each
              </div>
            </div>
            
            {totalCost !== null && (
              <div className="p-4 bg-primary/5 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">Total Cost</div>
                <div className="text-3xl font-bold text-primary">${totalCost}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  At ${pricePerBoardFoot.toFixed(2)} per board foot
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Additional Volume Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-secondary/5 rounded-lg text-center">
                <div className="text-xs text-muted-foreground">Cubic Inches</div>
                <div className="text-lg font-medium">{cubicInches.toFixed(2)} in³</div>
              </div>
              <div className="p-3 bg-secondary/5 rounded-lg text-center">
                <div className="text-xs text-muted-foreground">Cubic Feet</div>
                <div className="text-lg font-medium">{cubicFeet.toFixed(3)} ft³</div>
              </div>
              <div className="p-3 bg-secondary/5 rounded-lg text-center">
                <div className="text-xs text-muted-foreground">Cubic Meters</div>
                <div className="text-lg font-medium">{cubicMeters.toFixed(4)} m³</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Calculation Details</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-muted-foreground">Dimensions (in inches):</td>
                  <td className="py-1">
                    {thicknessInches.toFixed(2)} × {widthInches.toFixed(2)} × {lengthInches.toFixed(2)} inches
                  </td>
                </tr>
                <tr>
                  <td className="py-1 text-muted-foreground">Formula:</td>
                  <td className="py-1">(Thickness × Width × Length) ÷ 144 × Quantity</td>
                </tr>
                <tr>
                  <td className="py-1 text-muted-foreground">Calculation:</td>
                  <td className="py-1">
                    ({thicknessInches.toFixed(2)} × {widthInches.toFixed(2)} × {lengthInches.toFixed(2)}) ÷ 144 × {quantity} = {boardFeet} board feet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardFootResult;
