
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CashBackData } from './cashBackTypes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DollarSign, Percent, CreditCard, Calculator } from 'lucide-react';

const formSchema = z.object({
  purchaseAmount: z.number().min(0, {
    message: "Monthly spending must be a positive number",
  }),
  cashBackRate: z.number().min(0, {
    message: "Cash back rate must be a positive number",
  }).max(100, {
    message: "Cash back rate cannot exceed 100%",
  }),
  annualFee: z.number().min(0, {
    message: "Annual fee must be a positive number",
  }).optional(),
  otherBenefits: z.number().min(0, {
    message: "Other benefits value must be a positive number",
  }).optional(),
});

interface CashBackFormProps {
  onCalculate: (data: CashBackData) => void;
  onReset: () => void;
  showResult: boolean;
}

const CashBackForm: React.FC<CashBackFormProps> = ({ onCalculate, onReset, showResult }) => {
  const form = useForm<CashBackData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchaseAmount: 1000,
      cashBackRate: 2,
      annualFee: 0,
      otherBenefits: 0,
    },
  });

  const handleSubmit = (data: CashBackData) => {
    onCalculate(data);
  };

  const handleReset = () => {
    form.reset({
      purchaseAmount: 1000,
      cashBackRate: 2,
      annualFee: 0,
      otherBenefits: 0,
    });
    onReset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="purchaseAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly spending ($)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="1000"
                      className="pl-10"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Your average monthly spending on this card
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cashBackRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cash back rate (%)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Percent className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="2"
                      step="0.1"
                      className="pl-10"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Your card's cash back percentage
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="annualFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual fee ($)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="0"
                      className="pl-10"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Any annual fees for this card (optional)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherBenefits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Value of other benefits ($)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="0"
                      className="pl-10"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Estimated annual value of additional card benefits (optional)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleReset}
            disabled={!showResult}
          >
            Reset
          </Button>
          <Button type="submit">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Cash Back
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CashBackForm;
