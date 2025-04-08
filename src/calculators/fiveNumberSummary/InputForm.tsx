
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2 } from 'lucide-react';
import { exampleDatasets } from './fiveNumberSummaryUtils';

interface InputFormProps {
  inputNumbers: string;
  setInputNumbers: (value: string) => void;
  activeTab: string;
  handleTabChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleClear: () => void;
}

const InputForm = ({
  inputNumbers,
  setInputNumbers,
  activeTab,
  handleTabChange,
  handleSubmit,
  handleClear
}: InputFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="numbers" className="block text-sm font-medium mb-1">
          Enter Numbers
        </label>
        <textarea
          id="numbers"
          rows={4}
          value={inputNumbers}
          onChange={(e) => setInputNumbers(e.target.value)}
          placeholder="Enter numbers separated by commas or spaces (e.g., 1, 2, 3, 4, 5)"
          className="w-full min-h-24 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Enter at least 4 numbers separated by commas or spaces
        </p>
      </div>
      
      {/* Quartile calculation method selection */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Quartile Calculation Method
        </label>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="inclusive">Inclusive</TabsTrigger>
            <TabsTrigger value="nearest">Nearest Rank</TabsTrigger>
          </TabsList>
          <TabsContent value="standard" className="text-xs text-muted-foreground">
            Excludes the median when calculating Q1 and Q3 for odd-length data sets.
          </TabsContent>
          <TabsContent value="inclusive" className="text-xs text-muted-foreground">
            Uses linear interpolation between values for more precise quartiles.
          </TabsContent>
          <TabsContent value="nearest" className="text-xs text-muted-foreground">
            Uses the nearest rank method for quartile calculations.
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Example datasets */}
      <div>
        <p className="text-sm font-medium mb-2">Try with example datasets:</p>
        <div className="flex flex-wrap gap-2">
          {exampleDatasets.map((dataset, index) => (
            <Button
              key={index}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setInputNumbers(dataset.data)}
              className="text-xs"
            >
              {dataset.name}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          <BarChart2 className="h-4 w-4 mr-2" />
          Calculate
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
