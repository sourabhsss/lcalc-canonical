
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

interface AsphaltFormProps {
  onCalculate: (
    length: number,
    width: number,
    depth: number,
    pricePerTon: number,
    areaUnit: 'ft' | 'm',
    depthUnit: 'in' | 'cm' | 'mm',
    weightUnit: 'metric' | 'us'
  ) => void;
  onReset: () => void;
}

const AsphaltForm: React.FC<AsphaltFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerTon, setPricePerTon] = useState<string>('');
  const [areaUnit, setAreaUnit] = useState<'ft' | 'm'>('ft');
  const [depthUnit, setDepthUnit] = useState<'in' | 'cm' | 'mm'>('in');
  const [weightUnit, setWeightUnit] = useState<'metric' | 'us'>('us');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const depthValue = parseFloat(depth);
    const priceValue = parseFloat(pricePerTon) || 0;
    
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
      weightUnit
    );
  };

  const handleReset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setPricePerTon('');
    setAreaUnit('ft');
    setDepthUnit('in');
    setWeightUnit('us');
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
          <Label htmlFor="price">Price per {weightUnit === 'metric' ? 'Metric Tonne' : 'US Ton'} ($)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={pricePerTon}
            onChange={(e) => setPricePerTon(e.target.value)}
            placeholder="Optional"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="areaUnit">Area Unit</Label>
          <Select
            value={areaUnit}
            onValueChange={(value) => setAreaUnit(value as 'ft' | 'm')}
          >
            <SelectTrigger id="areaUnit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ft">Feet (ft)</SelectItem>
              <SelectItem value="m">Meters (m)</SelectItem>
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
            onValueChange={(value) => setWeightUnit(value as 'metric' | 'us')}
          >
            <SelectTrigger id="weightUnit" className="mt-1">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">US Tons</SelectItem>
              <SelectItem value="metric">Metric Tonnes</SelectItem>
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
          Calculate Asphalt
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default AsphaltForm;
