
import React from 'react';
import { useSwimPaceStore } from './swimPaceStore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Calculator, Clock } from 'lucide-react';

const SwimPaceForm: React.FC = () => {
  const { formData, updateFormData, calculateResults } = useSwimPaceStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateResults();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Waves className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Distance</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="distance">Distance</Label>
              <Input
                id="distance"
                type="number"
                min="0"
                step="any"
                value={formData.distance}
                onChange={(e) => updateFormData({ distance: parseFloat(e.target.value) || 0 })}
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="unit">Unit</Label>
              <Select 
                value={formData.unit} 
                onValueChange={(value) => updateFormData({ 
                  unit: value as 'meters' | 'yards' | 'miles' | 'kilometers' 
                })}
              >
                <SelectTrigger id="unit" className="mt-1">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meters">Meters</SelectItem>
                  <SelectItem value="yards">Yards</SelectItem>
                  <SelectItem value="kilometers">Kilometers</SelectItem>
                  <SelectItem value="miles">Miles</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Time</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="hours">Hours</Label>
              <Input
                id="hours"
                type="number"
                min="0"
                value={formData.hours}
                onChange={(e) => updateFormData({ hours: parseInt(e.target.value) || 0 })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="minutes">Minutes</Label>
              <Input
                id="minutes"
                type="number"
                min="0"
                max="59"
                value={formData.minutes}
                onChange={(e) => updateFormData({ minutes: parseInt(e.target.value) || 0 })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="seconds">Seconds</Label>
              <Input
                id="seconds"
                type="number"
                min="0"
                max="59"
                value={formData.seconds}
                onChange={(e) => updateFormData({ seconds: parseInt(e.target.value) || 0 })}
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Pace Unit</h3>
          </div>
          
          <div>
            <Label htmlFor="paceUnit">Calculate pace per</Label>
            <Select 
              value={formData.paceUnit} 
              onValueChange={(value) => updateFormData({ 
                paceUnit: value as '100m' | '100y' | '50m' | '50y' | '25m' | '25y' | 'mile' | 'km'
              })}
            >
              <SelectTrigger id="paceUnit" className="mt-1">
                <SelectValue placeholder="Select pace unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100m">100 meters</SelectItem>
                <SelectItem value="100y">100 yards</SelectItem>
                <SelectItem value="50m">50 meters</SelectItem>
                <SelectItem value="50y">50 yards</SelectItem>
                <SelectItem value="25m">25 meters</SelectItem>
                <SelectItem value="25y">25 yards</SelectItem>
                <SelectItem value="mile">Mile</SelectItem>
                <SelectItem value="km">Kilometer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center pt-4">
        <Button type="submit" className="w-full md:w-auto">
          Calculate Swim Pace
        </Button>
      </div>
    </form>
  );
};

export default SwimPaceForm;
