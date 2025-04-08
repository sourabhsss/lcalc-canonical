
import React from 'react';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';

interface PaymentOptionSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentOptionSelect: React.FC<PaymentOptionSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <Label htmlFor="paymentOption">Payment Option</Label>
      <Select 
        value={value} 
        onValueChange={onChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a payment option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lump-sum">Lump Sum</SelectItem>
          <SelectItem value="tenure">Tenure (Monthly Payment)</SelectItem>
          <SelectItem value="line-of-credit">Line of Credit</SelectItem>
          <SelectItem value="modified-tenure">Modified Tenure (Partial Lump Sum + Monthly)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaymentOptionSelect;
