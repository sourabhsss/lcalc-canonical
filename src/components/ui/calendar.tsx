
import React from "react";
import { cn } from "@/lib/utils";

export interface CalendarProps {
  className?: string;
  selected?: Date | null;
  onSelect?: (date: Date) => void;
  disabled?: boolean | ((date: Date) => boolean);
  [key: string]: any;
}

function Calendar({
  className,
  selected,
  onSelect,
  disabled,
  ...props
}: CalendarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.valueAsDate;
    if (date && onSelect) {
      onSelect(date);
    }
  };

  return (
    <div className={cn("p-3", className)}>
      <input
        type="date"
        className={cn(
          "w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary",
          className
        )}
        value={selected ? selected.toISOString().split('T')[0] : ''}
        onChange={handleChange}
        disabled={typeof disabled === 'boolean' ? disabled : false}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
