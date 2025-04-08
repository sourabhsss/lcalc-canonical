
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Car, RotateCcw } from 'lucide-react';
import { TowingEstimateInputs, VehicleType, TowingServiceType, TimeOfDay } from './towingEstimateUtils';

interface TowingEstimateFormProps {
  onCalculate: (inputs: TowingEstimateInputs) => void;
  onReset: () => void;
}

const TowingEstimateForm: React.FC<TowingEstimateFormProps> = ({ onCalculate, onReset }) => {
  const [distance, setDistance] = useState<number>(10);
  const [vehicleType, setVehicleType] = useState<VehicleType>('sedan');
  const [serviceType, setServiceType] = useState<TowingServiceType>('standard');
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
  const [isUrban, setIsUrban] = useState<boolean>(true);
  const [includeWinching, setIncludeWinching] = useState<boolean>(false);
  const [includeOffRoad, setIncludeOffRoad] = useState<boolean>(false);
  const [includeStorageDays, setIncludeStorageDays] = useState<number>(0);
  const [includeLabor, setIncludeLabor] = useState<number>(0);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (isNaN(distance) || distance <= 0) {
      errors.distance = "Please enter a valid distance greater than 0";
    }
    
    if (includeStorageDays < 0) {
      errors.storage = "Storage days cannot be negative";
    }
    
    if (includeLabor < 0) {
      errors.labor = "Labor hours cannot be negative";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const inputs: TowingEstimateInputs = {
      distance,
      vehicleType,
      serviceType,
      timeOfDay,
      isUrban,
      includeWinching,
      includeOffRoad,
      includeStorageDays,
      includeLabor
    };
    
    onCalculate(inputs);
  };

  const handleReset = () => {
    setDistance(10);
    setVehicleType('sedan');
    setServiceType('standard');
    setTimeOfDay('day');
    setIsUrban(true);
    setIncludeWinching(false);
    setIncludeOffRoad(false);
    setIncludeStorageDays(0);
    setIncludeLabor(0);
    setFormErrors({});
    onReset();
  };

  return (
    <Card className="p-6 bg-white border rounded-lg shadow-sm">
      <form onSubmit={handleCalculate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Distance */}
          <div className="space-y-2">
            <Label htmlFor="distance">Towing Distance (miles)</Label>
            <Input
              id="distance"
              type="number"
              min="0.1"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
              className={formErrors.distance ? "border-red-500" : ""}
            />
            {formErrors.distance && <p className="text-red-500 text-sm">{formErrors.distance}</p>}
          </div>

          {/* Vehicle Type */}
          <div className="space-y-2">
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Select
              value={vehicleType}
              onValueChange={(value) => setVehicleType(value as VehicleType)}
            >
              <SelectTrigger id="vehicleType">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan/Small Car</SelectItem>
                <SelectItem value="suv">SUV/Crossover</SelectItem>
                <SelectItem value="truck">Pickup Truck</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="rv">RV/Motorhome</SelectItem>
                <SelectItem value="heavy-duty">Heavy Duty Vehicle</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="serviceType">Towing Service Type</Label>
            <Select
              value={serviceType}
              onValueChange={(value) => setServiceType(value as TowingServiceType)}
            >
              <SelectTrigger id="serviceType">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Tow</SelectItem>
                <SelectItem value="flatbed">Flatbed Tow</SelectItem>
                <SelectItem value="motorcycle">Motorcycle Transport</SelectItem>
                <SelectItem value="long-distance">Long Distance Tow</SelectItem>
                <SelectItem value="heavy-duty">Heavy Duty Tow</SelectItem>
                <SelectItem value="emergency">Emergency/Rush Service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Time of Day */}
          <div className="space-y-2">
            <Label>Time of Service</Label>
            <RadioGroup 
              value={timeOfDay} 
              onValueChange={(value) => setTimeOfDay(value as TimeOfDay)}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="day" />
                <Label htmlFor="day" className="cursor-pointer">Weekday (9am-5pm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="night" id="night" />
                <Label htmlFor="night" className="cursor-pointer">Night (5pm-9am)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekend" id="weekend" />
                <Label htmlFor="weekend" className="cursor-pointer">Weekend</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="holiday" id="holiday" />
                <Label htmlFor="holiday" className="cursor-pointer">Holiday</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Location Type */}
          <div className="space-y-2">
            <Label>Location Type</Label>
            <div className="flex items-center space-x-2">
              <Switch 
                id="location-type" 
                checked={isUrban}
                onCheckedChange={setIsUrban}
              />
              <Label htmlFor="location-type" className="cursor-pointer">
                {isUrban ? "Urban Area" : "Rural Area"}
              </Label>
            </div>
            <p className="text-sm text-muted-foreground">
              {isUrban 
                ? "Urban areas typically have standard rates" 
                : "Rural areas may incur additional charges"}
            </p>
          </div>

          {/* Additional Services */}
          <div className="space-y-3 md:col-span-2">
            <Label className="text-lg font-medium">Additional Services</Label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="winching" 
                  checked={includeWinching}
                  onCheckedChange={setIncludeWinching}
                />
                <Label htmlFor="winching" className="cursor-pointer">Winching Required</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="offroad" 
                  checked={includeOffRoad}
                  onCheckedChange={setIncludeOffRoad}
                />
                <Label htmlFor="offroad" className="cursor-pointer">Off-Road Recovery</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storage">Storage (days)</Label>
                <Input
                  id="storage"
                  type="number"
                  min="0"
                  value={includeStorageDays}
                  onChange={(e) => setIncludeStorageDays(parseInt(e.target.value))}
                  className={formErrors.storage ? "border-red-500" : ""}
                />
                {formErrors.storage && <p className="text-red-500 text-sm">{formErrors.storage}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="labor">Additional Labor (hours)</Label>
                <Input
                  id="labor"
                  type="number"
                  min="0"
                  step="0.5"
                  value={includeLabor}
                  onChange={(e) => setIncludeLabor(parseFloat(e.target.value))}
                  className={formErrors.labor ? "border-red-500" : ""}
                />
                {formErrors.labor && <p className="text-red-500 text-sm">{formErrors.labor}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button type="submit" className="flex-1" size="lg">
            <Car className="mr-2 h-4 w-4" />
            Calculate Towing Estimate
          </Button>
          <Button type="button" variant="outline" onClick={handleReset} size="lg">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TowingEstimateForm;
