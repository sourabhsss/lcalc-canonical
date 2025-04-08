
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
import { GRAVEL_DENSITY } from './gravelUtils';

interface GravelFormProps {
  onCalculate: (
    length: number,
    width: number,
    depth: number,
    pricePerUnit: number,
    areaUnit: 'ft' | 'm' | 'yd',
    depthUnit: 'in' | 'cm' | 'mm',
    gravelType: keyof typeof GRAVEL_DENSITY,
    weightUnit: 'tons' | 'tonnes'
  ) => void;
  onReset: () => void;
}

const GravelForm: React.FC<GravelFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerUnit, setPricePerUnit] = useState<string>('');
  const [areaUnit, setAreaUnit] = useState<'ft' | 'm' | 'yd'>('ft');
  const [depthUnit, setDepthUnit] = useState<'in' | 'cm' | 'mm'>('in');
  const [gravelType, setGravelType] = useState<keyof typeof GRAVEL_DENSITY>('standard');
  const [weightUnit, setWeightUnit] = useState<'tons' | 'tonnes'>('tons');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const depthValue = parseFloat(depth);
    const priceValue = parseFloat(pricePerUnit) || 0;
    
    if (isNaN(lengthValue) || isNaN(widthValue) || isNaN(depthValue)) {
      setError('Please enter valid dimensions.');
      return;
    }
    
    if (lengthValue <= 0 || widthValue <= 0 || depthValue <= 0) {
      setError('Dimensions must be greater than zero.');
      return;
    }
    
    setError(null);
    onCalculate(
      lengthValue,
      widthValue,
      depthValue,
      priceValue,
      areaUnit,
      depthUnit,
      gravelType,
      weightUnit
    );
  };

  const handleReset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setPricePerUnit('');
    setAreaUnit('ft');
    setDepthUnit('in');
    setGravelType('standard');
    setWeightUnit('tons');
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              {areaUnit}
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
              {areaUnit}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="depth">Depth</Label>
          <div className="flex mt-1">
            <Input
              id="depth"
              type="number"
              step="0.01"
              min="0.01"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
              placeholder="Depth"
              className="rounded-r-none"
            />
            <div className="bg-muted text-muted-foreground px-3 flex items-center border border-l-0 rounded-r-md">
              {depthUnit}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="gravelType">Gravel Type</Label>
          <Select
            value={gravelType}
            onValueChange={(value) => setGravelType(value as keyof typeof GRAVEL_DENSITY)}
          >
            <SelectTrigger id="gravelType" className="mt-1">
              <SelectValue placeholder="Select gravel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Gravel</SelectItem>
              <SelectItem value="pea">Pea Gravel</SelectItem>
              <SelectItem value="limestone">Crushed Limestone</SelectItem>
              <SelectItem value="slate">Slate Chips</SelectItem>
              <SelectItem value="river">River Rock</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="areaUnit">Area Unit</Label>
          <Select
            value={areaUnit}
            onValueChange={(value) => setAreaUnit(value as 'ft' | 'm' | 'yd')}
          >
            <SelectTrigger id="areaUnit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ft">Feet (ft)</SelectItem>
              <SelectItem value="m">Meters (m)</SelectItem>
              <SelectItem value="yd">Yards (yd)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="depthUnit">Depth Unit</Label>
          <Select
            value={depthUnit}
            onValueChange={(value) => setDepthUnit(value as 'in' | 'cm' | 'mm')}
          >
            <SelectTrigger id="depthUnit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">Inches (in)</SelectItem>
              <SelectItem value="cm">Centimeters (cm)</SelectItem>
              <SelectItem value="mm">Millimeters (mm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="weightUnit">Weight Unit</Label>
          <Select
            value={weightUnit}
            onValueChange={(value) => setWeightUnit(value as 'tons' | 'tonnes')}
          >
            <SelectTrigger id="weightUnit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tons">US Tons</SelectItem>
              <SelectItem value="tonnes">Metric Tonnes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="price">Price per {weightUnit === 'tons' ? 'US Ton' : 'Metric Tonne'} ($)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            placeholder="Optional"
            className="mt-1"
          />
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive mt-2">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button type="submit" className="px-8">
          Calculate Gravel
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default GravelForm;
