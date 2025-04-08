
import React, { useState } from 'react';
import { Ruler } from 'lucide-react';
import BoardFootForm from './BoardFootForm';
import BoardFootResult from './BoardFootResult';

const BoardFootCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<{
    thickness: number;
    width: number;
    length: number;
    quantity: number;
    pricePerBoardFoot: number;
    unit: 'in' | 'ft' | 'cm' | 'm';
  } | null>(null);

  const handleCalculate = (
    thickness: number,
    width: number,
    length: number,
    quantity: number,
    pricePerBoardFoot: number,
    unit: 'in' | 'ft' | 'cm' | 'm'
  ) => {
    setDimensions({ thickness, width, length, quantity, pricePerBoardFoot, unit });
    setCalculating(true);
  };

  const handleReset = () => {
    setDimensions(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Ruler className="text-primary" />
          <h2 className="text-xl font-semibold">Board Foot Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the number of board feet in lumber based on dimensions. A board foot is a volume 
            measurement equal to 144 cubic inches, or a piece of wood measuring 1 foot × 1 foot × 1 inch.
          </p>
          
          <BoardFootForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && dimensions && (
            <BoardFootResult {...dimensions} />
          )}
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium text-lg mb-2">About Board Foot Calculation</h3>
            <p className="text-muted-foreground text-sm">
              A board foot (BF) is a unit of volume for measuring lumber in North America. 
              It is defined as the volume of a one-foot length of a board, one foot wide and one inch thick.
              Board footage is calculated by multiplying the thickness (in inches) by the width (in inches) 
              by the length (in feet), then dividing by 12.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              This calculator converts all dimensions to inches first if they are provided in other units, then applies 
              the formula: (Thickness × Width × Length) ÷ 144 × Quantity. This is useful for estimating the amount of 
              lumber needed for woodworking projects and calculating material costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardFootCalculator;
