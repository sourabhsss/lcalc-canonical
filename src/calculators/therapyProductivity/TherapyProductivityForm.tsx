import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useTherapyProductivityStore } from './therapyProductivityStore';
import { calculateProductivity } from './therapyProductivityUtils';
import { formSchema, FormValues } from './therapyProductivitySchema';
import {
  TargetBillableHoursField,
  ActualBillableHoursField,
  TotalWorkingHoursField,
  HourlyRateField,
  NonBillableHoursField,
  CancellationRateField,
} from './components/FormFields';
import SubmitButton from './components/SubmitButton';

const TherapyProductivityForm: React.FC = () => {
  const { setTherapistData, setResults } = useTherapyProductivityStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetBillableHours: 30,
      actualBillableHours: 25,
      totalWorkingHours: 40,
      hourlyRate: 100,
      nonBillableHours: 10,
      cancellationRate: 5,
    },
  });

  const onSubmit = (values: FormValues) => {
    // Ensure all required properties are present by explicitly constructing the object
    const therapistData = {
      targetBillableHours: values.targetBillableHours,
      actualBillableHours: values.actualBillableHours,
      totalWorkingHours: values.totalWorkingHours,
      hourlyRate: values.hourlyRate,
      nonBillableHours: values.nonBillableHours,
      cancellationRate: values.cancellationRate,
      totalHours: values.totalWorkingHours,
      billableHours: values.actualBillableHours,
      administrativeHours: Math.floor(values.nonBillableHours * 0.4),
      supervisionHours: Math.floor(values.nonBillableHours * 0.3),
      documentationHours: Math.floor(values.nonBillableHours * 0.2),
      otherHours: Math.floor(values.nonBillableHours * 0.1),
    };
    
    setTherapistData(therapistData);
    const results = calculateProductivity(therapistData);
    setResults(results);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TargetBillableHoursField form={form} />
          <ActualBillableHoursField form={form} />
          <TotalWorkingHoursField form={form} />
          <HourlyRateField form={form} />
          <NonBillableHoursField form={form} />
          <CancellationRateField form={form} />
        </div>
        <SubmitButton />
      </form>
    </Form>
  );
};

export default TherapyProductivityForm;
