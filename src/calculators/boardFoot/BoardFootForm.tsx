
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BoardFootFormProps {
  onCalculate: (
    thickness: number,
    width: number,
    length: number,
    quantity: number,
    pricePerBoardFoot: number,
    unit: 'in' | 'ft' | 'cm' | 'm'
  ) => void;
  onReset: () => void;
}

const BoardFootForm: React.FC<BoardFootFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [thickness, setThickness] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');
  const [pricePerBoardFoot, setPricePerBoardFoot] = useState<string>('');
  const [unit, setUnit] = useState<'in' | 'ft' | 'cm' | 'm'>('in');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const thicknessValue = parseFloat(thickness);
    const widthValue = parseFloat(width);
    const lengthValue = parseFloat(length);
    const quantityValue = parseInt(quantity) || 1;
    const priceValue = parseFloat(pricePerBoardFoot) || 0;
    
    if (isNaN(thicknessValue) || isNaN(widthValue) || isNaN(lengthValue)) {
      setError('Please enter valid dimensions.');
      return;
    }
    
    if (thicknessValue <= 0 || widthValue <= 0 || lengthValue <= 0) {
      setError('Dimensions must be greater than zero.');
      return;
    }
    
    if (quantityValue < 1) {
      setError('Quantity must be at least 1.');
      return;
    }
    
    setError(null);
    onCalculate(
      thicknessValue,
      widthValue,
      lengthValue,
      quantityValue,
      priceValue,
      unit
    );
  };

  const handleReset = () => {
    setThickness('');
    setWidth('');
    setLength('');
    setQuantity('1');
    setPricePerBoardFoot('');
    setUnit('in');
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="thickness">Thickness</Label>
          <div className="flex mt-1">
            <Input
              id="thickness"
              type="number"
              step="0.01"
              min="0.01"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
              placeholder="Thickness"
              className="rounded-r-none"
            />
            <div className="bg-muted text-muted-foreground px-3 flex items-center border border-l-0 rounded-r-md">
              {unit}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="width">Width</Label>
          <div className="flex mt-1">
            <Input
              id="width"
              type="number"
              step="0.01"
              min="0.01"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Width"
              className="rounded-r-none"
            />
            <div className="bg-muted text-muted-foreground px-3 flex items-center border border-l-0 rounded-r-md">
              {unit}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="length">Length</Label>
          <div className="flex mt-1">
            <Input
              id="length"
              type="number"
              step="0.01"
              min="0.01"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Length"
              className="rounded-r-none"
            />
            <div className="bg-muted text-muted-foreground px-3 flex items-center border border-l-0 rounded-r-md">
              {unit}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="price">Price per Board Foot ($)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={pricePerBoardFoot}
            onChange={(e) => setPricePerBoardFoot(e.target.value)}
            placeholder="Optional"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="unit">Unit</Label>
          <Select
            value={unit}
            onValueChange={(value) => setUnit(value as 'in' | 'ft' | 'cm' | 'm')}
          >
            <SelectTrigger id="unit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">Inches (in)</SelectItem>
              <SelectItem value="ft">Feet (ft)</SelectItem>
              <SelectItem value="cm">Centimeters (cm)</SelectItem>
              <SelectItem value="m">Meters (m)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive mt-2">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button type="submit" className="px-8">
          Calculate Board Feet
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default BoardFootForm;
