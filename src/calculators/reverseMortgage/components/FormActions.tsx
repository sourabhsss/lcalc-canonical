
import React from 'react';
import { Button } from '@/components/ui/button';

interface FormActionsProps {
  onSubmit: (e: React.FormEvent) => void;
}

const FormActions: React.FC<FormActionsProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Button 
      type="submit" 
      className="w-full"
      onClick={handleSubmit}
    >
      Calculate Reverse Mortgage
    </Button>
  );
};

export default FormActions;
