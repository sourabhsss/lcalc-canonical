
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

interface CurrencyInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  tooltipText?: string;
  error?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  id,
  label,
  value,
  onChange,
  tooltipText,
  error,
}) => {
  // Format number with commas as thousands separator
  const formatNumber = (value: string): string => {
    // Remove any non-digit characters except decimal point
    const sanitized = value.replace(/[^\d.]/g, '');
    
    // Split by decimal point
    const parts = sanitized.split('.');
    
    // Format the whole number part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Join with decimal part if it exists
    return parts.join('.');
  };

  // Parse formatted number back to raw number for state
  const parseNumber = (formatted: string): string => {
    return formatted.replace(/,/g, '');
  };

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
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
        <Input
          id={id}
          type="text"
          value={formatNumber(value)}
          onChange={(e) => onChange(parseNumber(e.target.value))}
          className="pl-7"
        />
      </div>
      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CurrencyInput;
