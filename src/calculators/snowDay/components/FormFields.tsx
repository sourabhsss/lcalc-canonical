
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Numeric input field with unit
export const NumericFieldWithUnit: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  unit: string;
  step?: string;
  min?: string;
}> = ({ id, label, value, onChange, placeholder, unit, step = "1", min }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <div className="flex mt-1">
      <Input
        id={id}
        type="number"
        step={step}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-r-none"
      />
      <div className="bg-muted text-muted-foreground px-3 flex items-center border border-l-0 rounded-r-md">
        {unit}
      </div>
    </div>
  </div>
);

// Select field component
export const SelectField: React.FC<{
  id: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
}> = ({ id, label, value, onValueChange, options }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger id={id} className="mt-1">
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
