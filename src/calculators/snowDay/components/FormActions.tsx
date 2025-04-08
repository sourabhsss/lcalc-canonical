
import React from 'react';
import { Button } from '@/components/ui/button';

interface FormActionsProps {
  onReset: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <Button type="submit" className="px-8">
        Calculate Snow Day Chances
      </Button>
      <Button type="button" variant="outline" onClick={onReset} className="px-8">
        Reset
      </Button>
    </div>
  );
};

export default FormActions;
