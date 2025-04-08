
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

interface NumberInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  tooltipText?: string;
  min?: string;
  max?: string;
  error?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  label,
  value,
  onChange,
  tooltipText,
  min,
  max,
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
      <Input
        id={id}
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
};

export default NumberInput;
