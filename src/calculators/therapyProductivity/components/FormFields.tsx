
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Info } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../therapyProductivitySchema';

type FormValues = z.infer<typeof formSchema>;

interface FormFieldProps {
  form: UseFormReturn<FormValues>;
  name: keyof FormValues;
  label: string;
  tooltipText: string;
  inputType?: 'text' | 'number' | 'slider';
}

export const TargetBillableHoursField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="targetBillableHours"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Weekly Target Billable Hours</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">The number of hours you aim to bill clients per week</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const ActualBillableHoursField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="actualBillableHours"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Actual Billable Hours</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">The actual number of hours you billed in a week</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const TotalWorkingHoursField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="totalWorkingHours"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Total Working Hours</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">All hours spent working (billable + non-billable)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const HourlyRateField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="hourlyRate"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Hourly Rate ($)</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">Your standard billable rate per hour</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const NonBillableHoursField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="nonBillableHours"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Non-Billable Hours</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">Time spent on documentation, meetings, etc.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CancellationRateField: React.FC<{ form: UseFormReturn<FormValues> }> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="cancellationRate"
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>Cancellation Rate (%)</FormLabel>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-80">Percentage of scheduled sessions that get cancelled</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormControl>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[value]}
                  onValueChange={([newValue]) => onChange(newValue)}
                  className="w-full"
                />
                <span className="ml-2 w-12 text-right">{value}%</span>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
