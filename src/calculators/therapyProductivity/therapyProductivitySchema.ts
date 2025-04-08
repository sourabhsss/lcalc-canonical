
import { z } from 'zod';

export const formSchema = z.object({
  targetBillableHours: z.coerce.number()
    .min(1, 'Must be at least 1 hour')
    .max(168, 'Cannot exceed hours in a week'),
  actualBillableHours: z.coerce.number()
    .min(0, 'Must be at least 0 hours')
    .max(168, 'Cannot exceed hours in a week'),
  totalWorkingHours: z.coerce.number()
    .min(1, 'Must be at least 1 hour')
    .max(168, 'Cannot exceed hours in a week'),
  hourlyRate: z.coerce.number()
    .min(1, 'Must be at least 1 dollar')
    .max(1000, 'Cannot exceed 1000 dollars'),
  nonBillableHours: z.coerce.number()
    .min(0, 'Must be at least 0 hours')
    .max(168, 'Cannot exceed hours in a week'),
  cancellationRate: z.coerce.number()
    .min(0, 'Must be at least 0%')
    .max(100, 'Cannot exceed 100%'),
});

export type FormValues = z.infer<typeof formSchema>;
