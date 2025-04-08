
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface PercentageInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  tooltipText?: string;
  min?: string;
  max?: string;
  step?: string;
  error?: string;
}

const PercentageInput: React.FC<PercentageInputProps> = ({
  id,
  label,
  value,
  onChange,
  tooltipText,
  min = "0.1",
  max = "20",
  step = "0.1",
  error,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor={id}>{label}</Label>
        {tooltipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        <Input
          id={id}
          type="number"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pr-7"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
      </div>
      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PercentageInput;
