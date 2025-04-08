
import React from 'react';
import { useForm } from 'react-hook-form';
import { LcmHcfFormData } from './lcmHcfTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  numbers: z
    .string()
    .min(1, { message: 'Please enter at least one number' })
    .refine(
      (val) => {
        // Match comma-separated numbers (allows spaces and negative numbers)
        return /^-?\d+(\s*,\s*-?\d+)*$/.test(val);
      },
      { message: 'Please enter comma-separated integers (e.g., 12, 18, 24)' }
    ),
  calculationType: z.enum(['lcm', 'hcf']),
  showSteps: z.boolean().default(true),
});

interface LcmHcfFormProps {
  onCalculate: (data: LcmHcfFormData) => void;
}

const LcmHcfForm: React.FC<LcmHcfFormProps> = ({ onCalculate }) => {
  const form = useForm<LcmHcfFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numbers: '12, 18, 24',
      calculationType: 'lcm',
      showSteps: true,
    },
  });

  const onSubmit = (data: LcmHcfFormData) => {
    onCalculate(data);
  };

  return (
    <Card className="w-full mb-6">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="numbers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter numbers (separated by commas)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 12, 18, 24"
                      {...field}
                      className="font-mono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="calculationType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Calculation Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="lcm" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          LCM (Least Common Multiple)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="hcf" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          HCF / GCD (Highest Common Factor)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showSteps"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="cursor-pointer">
                      Show step-by-step solution
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full sm:w-auto"
              size="lg"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LcmHcfForm;
