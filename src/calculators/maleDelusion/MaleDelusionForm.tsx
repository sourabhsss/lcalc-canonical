
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useForm } from 'react-hook-form';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface FormValues {
  standards: number;
  incomeExpectations: number;
  appearanceStandards: number;
  personalEffort: number;
  relationshipDynamics: number;
  selfImprovement: number;
  agePreference: number;
  rejectionHandling: number;
  compatibilityBeliefs: number;
  communicationExpectations: number;
  [key: string]: number; // Add index signature to fix the error
}

interface MaleDelusionFormProps {
  onCalculate: (results: { score: number, answers: Record<string, number> }) => void;
  onReset: () => void;
}

const MaleDelusionForm: React.FC<MaleDelusionFormProps> = ({ onCalculate, onReset }) => {
  const [isCalculating, setIsCalculating] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      standards: 5,
      incomeExpectations: 5,
      appearanceStandards: 5,
      personalEffort: 5,
      relationshipDynamics: 5,
      selfImprovement: 5,
      agePreference: 5,
      rejectionHandling: 5,
      compatibilityBeliefs: 5,
      communicationExpectations: 5
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsCalculating(true);
    
    // Calculate delusion score from values (0-100)
    // Higher score = more delusional
    const answers = { ...data };
    
    // Flip scoring for questions where higher is less delusional
    const flippedScores = {
      personalEffort: 10 - data.personalEffort,
      selfImprovement: 10 - data.selfImprovement,
      rejectionHandling: 10 - data.rejectionHandling,
      communicationExpectations: 10 - data.communicationExpectations
    };
    
    // Combine scores
    const combinedAnswers = {
      ...answers,
      ...flippedScores
    };
    
    // Calculate total (some factors weighted more heavily)
    const weightedScores = {
      standards: combinedAnswers.standards * 1.2,
      incomeExpectations: combinedAnswers.incomeExpectations * 0.8,
      appearanceStandards: combinedAnswers.appearanceStandards * 1.5,
      personalEffort: combinedAnswers.personalEffort * 1.2,
      relationshipDynamics: combinedAnswers.relationshipDynamics * 1.0,
      selfImprovement: combinedAnswers.selfImprovement * 1.0,
      agePreference: combinedAnswers.agePreference * 1.3,
      rejectionHandling: combinedAnswers.rejectionHandling * 0.8,
      compatibilityBeliefs: combinedAnswers.compatibilityBeliefs * 0.7,
      communicationExpectations: combinedAnswers.communicationExpectations * 0.7
    };
    
    const totalWeightedScore = Object.values(weightedScores).reduce((sum, val) => sum + val, 0);
    const maxPossibleScore = 10.2; // Sum of all weights
    
    // Convert to 0-100 scale
    const finalScore = Math.round((totalWeightedScore / maxPossibleScore) * 100);
    
    // Send results back to parent component
    setTimeout(() => {
      toast.success("Calculation complete!");
      onCalculate({ 
        score: finalScore,
        answers: data 
      });
      setIsCalculating(false);
    }, 800);
  };

  const handleReset = () => {
    form.reset();
    onReset();
  };

  const formatSliderValue = (value: number[]) => {
    const val = value[0];
    if (val <= 2) return "Very Low";
    if (val <= 4) return "Low";
    if (val <= 6) return "Moderate";
    if (val <= 8) return "High";
    return "Very High";
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="p-4 bg-primary/5 rounded-lg mb-6">
          <p className="text-sm text-muted-foreground">
            Answer each question honestly to assess your expectations and perspectives in dating and relationships.
            Move the sliders from 1 (lowest) to 10 (highest) based on how strongly you agree with each statement.
          </p>
        </div>
        
        <FormField
          control={form.control}
          name="standards"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Dating Standards</FormLabel>
                <FormDescription>
                  How high are your standards for potential partners compared to what you bring to the relationship?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Reasonable</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Very High</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="incomeExpectations"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Income Expectations</FormLabel>
                <FormDescription>
                  How important is it that your partner earns significantly more than average?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Not Important</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Very Important</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="appearanceStandards"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Appearance Expectations</FormLabel>
                <FormDescription>
                  How much do you prioritize physical appearance when seeking a partner?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Somewhat Important</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Extremely Important</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="personalEffort"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Personal Effort</FormLabel>
                <FormDescription>
                  How much effort do you put into self-improvement and presenting yourself well?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Minimal Effort</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Maximum Effort</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="relationshipDynamics"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Relationship Roles</FormLabel>
                <FormDescription>
                  How traditional do you believe gender roles should be in relationships?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Very Flexible</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Very Traditional</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="selfImprovement"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Growth Mindset</FormLabel>
                <FormDescription>
                  How open are you to changing your mindset and behaviors based on feedback?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Not Open</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Very Open</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="agePreference"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Age Preferences</FormLabel>
                <FormDescription>
                  How strict are you about dating people significantly younger than yourself?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Age Doesn't Matter</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Much Younger Only</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="rejectionHandling"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Rejection Response</FormLabel>
                <FormDescription>
                  How well do you handle rejection in dating situations?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Take It Personally</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Handle Gracefully</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="compatibilityBeliefs"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Compatibility Beliefs</FormLabel>
                <FormDescription>
                  How strongly do you believe in "love at first sight" or immediate perfect connections?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Relationships Take Work</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Perfect Match Exists</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <Separator />
        
        <FormField
          control={form.control}
          name="communicationExpectations"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <div>
                <FormLabel className="text-base">Communication Style</FormLabel>
                <FormDescription>
                  How willing are you to have difficult conversations and compromise in relationships?
                </FormDescription>
              </div>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Avoid Difficult Topics</span>
                    <span>{formatSliderValue([field.value])}</span>
                    <span>Always Willing to Discuss</span>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button type="submit" disabled={isCalculating} className="min-w-[150px]">
            {isCalculating ? "Calculating..." : "Calculate Score"}
          </Button>
          <Button type="button" onClick={handleReset} variant="outline" className="min-w-[150px]">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MaleDelusionForm;
