
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useGpmStore } from './gpmStore';
import { calculateGPM } from './gpmUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const containerMethodSchema = z.object({
  containerVolume: z.coerce.number()
    .positive('Volume must be positive')
    .min(0.1, 'Volume must be at least 0.1'),
  fillTime: z.coerce.number()
    .positive('Time must be positive')
    .min(0.1, 'Time must be at least 0.1'),
  volumeUnit: z.enum(['gallons', 'liters', 'cubicFeet']),
  timeUnit: z.enum(['seconds', 'minutes']),
});

const flowRateSchema = z.object({
  diameter: z.coerce.number()
    .positive('Diameter must be positive')
    .min(0.1, 'Diameter must be at least 0.1'),
  velocity: z.coerce.number()
    .positive('Velocity must be positive')
    .min(0.1, 'Velocity must be at least 0.1'),
  diameterUnit: z.enum(['inches', 'millimeters', 'centimeters']),
  velocityUnit: z.enum(['feetPerSecond', 'metersPerSecond']),
});

const volumeTimeMethodSchema = z.object({
  volume: z.coerce.number()
    .positive('Volume must be positive')
    .min(0.1, 'Volume must be at least 0.1'),
  time: z.coerce.number()
    .positive('Time must be positive')
    .min(0.1, 'Time must be at least 0.1'),
  volumeUnit: z.enum(['gallons', 'liters', 'cubicFeet']),
  timeUnit: z.enum(['minutes', 'hours']),
});

const GpmForm: React.FC = () => {
  const { setFlowData } = useGpmStore();

  const containerForm = useForm<z.infer<typeof containerMethodSchema>>({
    resolver: zodResolver(containerMethodSchema),
    defaultValues: {
      containerVolume: 5,
      fillTime: 30,
      volumeUnit: 'gallons',
      timeUnit: 'seconds',
    },
  });

  const flowRateForm = useForm<z.infer<typeof flowRateSchema>>({
    resolver: zodResolver(flowRateSchema),
    defaultValues: {
      diameter: 1,
      velocity: 5,
      diameterUnit: 'inches',
      velocityUnit: 'feetPerSecond',
    },
  });

  const volumeTimeForm = useForm<z.infer<typeof volumeTimeMethodSchema>>({
    resolver: zodResolver(volumeTimeMethodSchema),
    defaultValues: {
      volume: 300,
      time: 5,
      volumeUnit: 'gallons',
      timeUnit: 'minutes',
    },
  });

  const onContainerSubmit = (values: z.infer<typeof containerMethodSchema>) => {
    const result = calculateGPM.fromContainerMethod(
      values.containerVolume,
      values.fillTime,
      values.volumeUnit,
      values.timeUnit
    );
    
    setFlowData({
      gpm: result.gpm,
      method: 'container',
      inputs: {
        containerVolume: values.containerVolume,
        fillTime: values.fillTime,
        volumeUnit: values.volumeUnit,
        timeUnit: values.timeUnit
      },
      conversions: {
        litersPerMinute: result.litersPerMinute,
        cubicFeetPerMinute: result.cubicFeetPerMinute,
        cubicMetersPerHour: result.cubicMetersPerHour
      }
    });
  };

  const onFlowRateSubmit = (values: z.infer<typeof flowRateSchema>) => {
    const result = calculateGPM.fromFlowRate(
      values.diameter,
      values.velocity,
      values.diameterUnit,
      values.velocityUnit
    );
    
    setFlowData({
      gpm: result.gpm,
      method: 'flowRate',
      inputs: {
        diameter: values.diameter,
        velocity: values.velocity,
        diameterUnit: values.diameterUnit,
        velocityUnit: values.velocityUnit
      },
      conversions: {
        litersPerMinute: result.litersPerMinute,
        cubicFeetPerMinute: result.cubicFeetPerMinute,
        cubicMetersPerHour: result.cubicMetersPerHour
      }
    });
  };

  const onVolumeTimeSubmit = (values: z.infer<typeof volumeTimeMethodSchema>) => {
    const result = calculateGPM.fromVolumeTime(
      values.volume,
      values.time,
      values.volumeUnit,
      values.timeUnit
    );
    
    setFlowData({
      gpm: result.gpm,
      method: 'volumeTime',
      inputs: {
        volume: values.volume,
        time: values.time,
        volumeUnit: values.volumeUnit,
        timeUnit: values.timeUnit
      },
      conversions: {
        litersPerMinute: result.litersPerMinute,
        cubicFeetPerMinute: result.cubicFeetPerMinute,
        cubicMetersPerHour: result.cubicMetersPerHour
      }
    });
  };

  return (
    <Tabs defaultValue="container" className="w-full">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="container">Container Method</TabsTrigger>
        <TabsTrigger value="flowRate">Flow Rate Method</TabsTrigger>
        <TabsTrigger value="volumeTime">Volume/Time Method</TabsTrigger>
      </TabsList>
      
      <TabsContent value="container" className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">
          Use this method when you've measured how long it takes to fill a container of known volume.
        </p>
        
        <Form {...containerForm}>
          <form onSubmit={containerForm.handleSubmit(onContainerSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={containerForm.control}
                name="containerVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Container Volume</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={containerForm.control}
                name="volumeUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Volume Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gallons" />
                          </FormControl>
                          <FormLabel className="font-normal">Gallons</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="liters" />
                          </FormControl>
                          <FormLabel className="font-normal">Liters</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cubicFeet" />
                          </FormControl>
                          <FormLabel className="font-normal">Cubic Feet</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={containerForm.control}
                name="fillTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fill Time</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={containerForm.control}
                name="timeUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Time Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="seconds" />
                          </FormControl>
                          <FormLabel className="font-normal">Seconds</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="minutes" />
                          </FormControl>
                          <FormLabel className="font-normal">Minutes</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full">Calculate GPM</Button>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="flowRate" className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">
          Use this method when you know the pipe diameter and water velocity.
        </p>
        
        <Form {...flowRateForm}>
          <form onSubmit={flowRateForm.handleSubmit(onFlowRateSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={flowRateForm.control}
                name="diameter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pipe Diameter</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={flowRateForm.control}
                name="diameterUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Diameter Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="inches" />
                          </FormControl>
                          <FormLabel className="font-normal">Inches</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="millimeters" />
                          </FormControl>
                          <FormLabel className="font-normal">mm</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="centimeters" />
                          </FormControl>
                          <FormLabel className="font-normal">cm</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={flowRateForm.control}
                name="velocity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Water Velocity</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={flowRateForm.control}
                name="velocityUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Velocity Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="feetPerSecond" />
                          </FormControl>
                          <FormLabel className="font-normal">ft/s</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="metersPerSecond" />
                          </FormControl>
                          <FormLabel className="font-normal">m/s</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full">Calculate GPM</Button>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="volumeTime" className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">
          Use this method when you know the total volume of water and the time it took to flow.
        </p>
        
        <Form {...volumeTimeForm}>
          <form onSubmit={volumeTimeForm.handleSubmit(onVolumeTimeSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={volumeTimeForm.control}
                name="volume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Volume</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={volumeTimeForm.control}
                name="volumeUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Volume Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gallons" />
                          </FormControl>
                          <FormLabel className="font-normal">Gallons</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="liters" />
                          </FormControl>
                          <FormLabel className="font-normal">Liters</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cubicFeet" />
                          </FormControl>
                          <FormLabel className="font-normal">Cubic Feet</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={volumeTimeForm.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Time</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={volumeTimeForm.control}
                name="timeUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Time Unit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="minutes" />
                          </FormControl>
                          <FormLabel className="font-normal">Minutes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="hours" />
                          </FormControl>
                          <FormLabel className="font-normal">Hours</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full">Calculate GPM</Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
};

export default GpmForm;
