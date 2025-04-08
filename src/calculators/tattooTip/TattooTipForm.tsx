
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { TattooTipFormData } from './tattooTipTypes';

interface TattooTipFormProps {
  onCalculate: (data: TattooTipFormData) => void;
}

const TattooTipForm: React.FC<TattooTipFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<TattooTipFormData>({
    tattooPrice: '',
    quality: 'good',
    complexity: 'medium',
    duration: 'half-day',
    satisfactionLevel: 5,
    additionalServices: false,
  });
  
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (value: number[]) => {
    setFormData({
      ...formData,
      satisfactionLevel: value[0],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate the price input
    const price = parseFloat(String(formData.tattooPrice));
    if (isNaN(price) || price <= 0) {
      setError("Please enter a valid tattoo price");
      return;
    }
    
    // Update the form data with the parsed price value
    const validatedData = {
      ...formData,
      tattooPrice: price
    };
    
    setError(null);
    onCalculate(validatedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="tattooPrice">Tattoo Price ($)</Label>
          <Input
            id="tattooPrice"
            name="tattooPrice"
            type="number"
            placeholder="Enter the total cost of your tattoo"
            value={String(formData.tattooPrice)}
            onChange={handleInputChange}
            className="mt-1"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div>
          <Label htmlFor="quality">Quality of Work</Label>
          <Select
            value={formData.quality}
            onValueChange={(value) => handleSelectChange('quality', value)}
          >
            <SelectTrigger id="quality" className="w-full mt-1">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent - Exceptional artistry and detail</SelectItem>
              <SelectItem value="good">Good - Above average work</SelectItem>
              <SelectItem value="average">Average - Met expectations</SelectItem>
              <SelectItem value="below-average">Below Average - Needs improvement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="complexity">Tattoo Complexity</Label>
          <Select
            value={formData.complexity}
            onValueChange={(value) => handleSelectChange('complexity', value)}
          >
            <SelectTrigger id="complexity" className="w-full mt-1">
              <SelectValue placeholder="Select complexity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High - Intricate design with many details</SelectItem>
              <SelectItem value="medium">Medium - Moderate detail and complexity</SelectItem>
              <SelectItem value="low">Low - Simple design with minimal detail</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="duration">Session Duration</Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => handleSelectChange('duration', value)}
          >
            <SelectTrigger id="duration" className="w-full mt-1">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multi-session">Multiple Sessions</SelectItem>
              <SelectItem value="full-day">Full Day (6+ hours)</SelectItem>
              <SelectItem value="half-day">Half Day (3-6 hours)</SelectItem>
              <SelectItem value="hour-or-less">Quick Session (1 hour or less)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Satisfaction Level</Label>
          <div className="pt-2">
            <Slider
              defaultValue={[5]}
              max={10}
              min={1}
              step={1}
              value={[formData.satisfactionLevel]}
              onValueChange={handleSliderChange}
            />
            <div className="flex justify-between mt-1 text-sm text-muted-foreground">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Current satisfaction level: {formData.satisfactionLevel}/10
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="additionalServices"
            name="additionalServices"
            checked={formData.additionalServices}
            onCheckedChange={(checked) => handleSelectChange('additionalServices', checked.toString())}
          />
          <Label htmlFor="additionalServices">
            Artist provided additional services (touch-ups, design revisions, etc.)
          </Label>
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive">{error}</div>
      )}

      <Button type="submit" className="w-full">Calculate Tip</Button>
    </form>
  );
};

export default TattooTipForm;
