import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplet, RotateCcw } from 'lucide-react';
import { PoolShape, PoolDimensions, VolumeUnit, calculatePoolVolume } from './poolVolumeUtils';

interface PoolVolumeFormProps {
  onCalculate: (volume: number, dimensions: PoolDimensions, unit: VolumeUnit) => void;
  onReset: () => void;
}

const PoolVolumeForm: React.FC<PoolVolumeFormProps> = ({ onCalculate, onReset }) => {
  // Pool shape and measurement state
  const [poolShape, setPoolShape] = useState<PoolShape>('rectangular');
  const [unit, setUnit] = useState<VolumeUnit>('gallons');
  const [measurementUnit, setMeasurementUnit] = useState<'feet' | 'meters'>('feet');
  
  // Rectangular pool dimensions
  const [rectangularDimensions, setRectangularDimensions] = useState({
    length: 20,
    width: 10,
    depth: 5,
    averageDepth: 5
  });
  
  // Circular pool dimensions
  const [circularDimensions, setCircularDimensions] = useState({
    diameter: 15,
    depth: 5,
    averageDepth: 5
  });
  
  // Oval pool dimensions
  const [ovalDimensions, setOvalDimensions] = useState({
    length: 20,
    width: 10,
    depth: 5,
    averageDepth: 5
  });
  
  // Irregular pool dimensions
  const [irregularDimensions, setIrregularDimensions] = useState({
    surfaceArea: 200,
    depth: 5,
    averageDepth: 5
  });
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let dimensions: PoolDimensions;
    
    switch (poolShape) {
      case 'rectangular':
        dimensions = {
          ...rectangularDimensions
        };
        break;
      case 'circular':
        dimensions = {
          ...circularDimensions
        };
        break;
      case 'oval':
        dimensions = {
          ...ovalDimensions
        };
        break;
      case 'irregular':
        dimensions = {
          ...irregularDimensions
        };
        break;
      default:
        dimensions = rectangularDimensions;
    }
    
    const volume = calculatePoolVolume(poolShape, dimensions, measurementUnit);
    onCalculate(volume, dimensions, unit);
  };
  
  // Handle reset
  const handleReset = () => {
    setPoolShape('rectangular');
    setUnit('gallons');
    setMeasurementUnit('feet');
    setRectangularDimensions({
      length: 20,
      width: 10,
      depth: 5,
      averageDepth: 5
    });
    setCircularDimensions({
      diameter: 15,
      depth: 5,
      averageDepth: 5
    });
    setOvalDimensions({
      length: 20,
      width: 10,
      depth: 5,
      averageDepth: 5
    });
    setIrregularDimensions({
      surfaceArea: 200,
      depth: 5,
      averageDepth: 5
    });
    onReset();
  };
  
  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Pool Shape Selector */}
          <div>
            <Label className="text-base font-semibold">Pool Shape</Label>
            <Tabs 
              defaultValue="rectangular" 
              value={poolShape}
              onValueChange={(value) => setPoolShape(value as PoolShape)}
              className="mt-2"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                <TabsTrigger value="rectangular">Rectangular</TabsTrigger>
                <TabsTrigger value="circular">Circular</TabsTrigger>
                <TabsTrigger value="oval">Oval</TabsTrigger>
                <TabsTrigger value="irregular">Irregular</TabsTrigger>
              </TabsList>
              
              {/* Rectangular Pool Form */}
              <TabsContent value="rectangular" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rectangular-length">Length ({measurementUnit})</Label>
                    <Input
                      id="rectangular-length"
                      type="number"
                      min="1"
                      step="0.1"
                      value={rectangularDimensions.length}
                      onChange={(e) => setRectangularDimensions({
                        ...rectangularDimensions,
                        length: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rectangular-width">Width ({measurementUnit})</Label>
                    <Input
                      id="rectangular-width"
                      type="number"
                      min="1"
                      step="0.1"
                      value={rectangularDimensions.width}
                      onChange={(e) => setRectangularDimensions({
                        ...rectangularDimensions,
                        width: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rectangular-depth">Average Depth ({measurementUnit})</Label>
                    <Input
                      id="rectangular-depth"
                      type="number"
                      min="1"
                      step="0.1"
                      value={rectangularDimensions.averageDepth}
                      onChange={(e) => setRectangularDimensions({
                        ...rectangularDimensions,
                        averageDepth: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                </div>
              </TabsContent>
              
              {/* Circular Pool Form */}
              <TabsContent value="circular" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="circular-diameter">Diameter ({measurementUnit})</Label>
                    <Input
                      id="circular-diameter"
                      type="number"
                      min="1"
                      step="0.1"
                      value={circularDimensions.diameter}
                      onChange={(e) => setCircularDimensions({
                        ...circularDimensions,
                        diameter: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="circular-depth">Average Depth ({measurementUnit})</Label>
                    <Input
                      id="circular-depth"
                      type="number"
                      min="1"
                      step="0.1"
                      value={circularDimensions.averageDepth}
                      onChange={(e) => setCircularDimensions({
                        ...circularDimensions,
                        averageDepth: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                </div>
              </TabsContent>
              
              {/* Oval Pool Form */}
              <TabsContent value="oval" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="oval-length">Length ({measurementUnit})</Label>
                    <Input
                      id="oval-length"
                      type="number"
                      min="1"
                      step="0.1"
                      value={ovalDimensions.length}
                      onChange={(e) => setOvalDimensions({
                        ...ovalDimensions,
                        length: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oval-width">Width ({measurementUnit})</Label>
                    <Input
                      id="oval-width"
                      type="number"
                      min="1"
                      step="0.1"
                      value={ovalDimensions.width}
                      onChange={(e) => setOvalDimensions({
                        ...ovalDimensions,
                        width: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oval-depth">Average Depth ({measurementUnit})</Label>
                    <Input
                      id="oval-depth"
                      type="number"
                      min="1"
                      step="0.1"
                      value={ovalDimensions.averageDepth}
                      onChange={(e) => setOvalDimensions({
                        ...ovalDimensions,
                        averageDepth: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                </div>
              </TabsContent>
              
              {/* Irregular Pool Form */}
              <TabsContent value="irregular" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="irregular-area">Surface Area (sq. {measurementUnit})</Label>
                    <Input
                      id="irregular-area"
                      type="number"
                      min="1"
                      step="0.1"
                      value={irregularDimensions.surfaceArea}
                      onChange={(e) => setIrregularDimensions({
                        ...irregularDimensions,
                        surfaceArea: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="irregular-depth">Average Depth ({measurementUnit})</Label>
                    <Input
                      id="irregular-depth"
                      type="number"
                      min="1"
                      step="0.1"
                      value={irregularDimensions.averageDepth}
                      onChange={(e) => setIrregularDimensions({
                        ...irregularDimensions,
                        averageDepth: parseFloat(e.target.value)
                      })}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Units Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Measurement Units</Label>
              <RadioGroup 
                value={measurementUnit}
                onValueChange={(value) => setMeasurementUnit(value as 'feet' | 'meters')}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feet" id="feet" />
                  <Label htmlFor="feet">Feet</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="meters" id="meters" />
                  <Label htmlFor="meters">Meters</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label>Volume Units</Label>
              <Select value={unit} onValueChange={(value) => setUnit(value as VolumeUnit)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select volume unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gallons">Gallons</SelectItem>
                  <SelectItem value="liters">Liters</SelectItem>
                  <SelectItem value="cubicMeters">Cubic Meters</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex gap-3">
            <Button type="submit" className="flex-1" size="lg">
              <Droplet className="mr-2 h-4 w-4" />
              Calculate Volume
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default PoolVolumeForm;
