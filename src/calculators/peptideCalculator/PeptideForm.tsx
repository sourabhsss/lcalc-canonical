
import React, { useState } from 'react';
import { RefreshCw, FlaskConical, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { validatePeptideSequence } from './peptideCalculatorUtils';
import { PeptideData } from './peptideTypes';

interface PeptideFormProps {
  onCalculate: (data: PeptideData) => void;
}

const PeptideForm: React.FC<PeptideFormProps> = ({ onCalculate }) => {
  const [sequence, setSequence] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    
    // Process sequence: remove whitespace, convert to uppercase
    const cleanSequence = sequence.replace(/\s+/g, '').toUpperCase();
    
    // Validate the peptide sequence
    const validationResult = validatePeptideSequence(cleanSequence);
    if (!validationResult.valid) {
      setError(validationResult.message);
      setIsValidating(false);
      return;
    }
    
    setError('');
    onCalculate({
      sequence: cleanSequence,
      name: name || 'Unnamed Peptide'
    });
    setIsValidating(false);
  };

  const handleReset = () => {
    setSequence('');
    setName('');
    setError('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <FlaskConical className="text-primary h-6 w-6" />
        <h2 className="text-xl font-semibold">Peptide Properties Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="peptide-name" className="text-base">
            Peptide Name (optional)
          </Label>
          <Input
            id="peptide-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Insulin Fragment"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="peptide-sequence" className="text-base">
            Amino Acid Sequence
          </Label>
          <Textarea
            id="peptide-sequence"
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
            placeholder="Enter single-letter amino acid codes (e.g., ACDEFGHIKLMNPQRSTVWY)"
            className="mt-1 font-mono h-32"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            Use standard single-letter amino acid codes. Spaces and line breaks will be ignored.
          </p>
        </div>
        
        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="flex-1" disabled={isValidating}>
          Calculate Properties
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleReset}
          className="flex items-center gap-1"
        >
          <RefreshCw className="h-4 w-4" /> Reset
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground border-t pt-4 mt-4">
        <p className="font-medium mb-1">Example Sequences:</p>
        <ul className="space-y-1">
          <li>
            <button
              type="button"
              className="text-primary hover:underline font-mono"
              onClick={() => setSequence('YGGFMTSEKSQTPLVT')}
            >
              YGGFMTSEKSQTPLVT
            </button>
            <span className="text-xs ml-2">(Enkephalin fragment)</span>
          </li>
          <li>
            <button
              type="button"
              className="text-primary hover:underline font-mono"
              onClick={() => setSequence('GIVEQCCTSICSLYQLENYCN')}
            >
              GIVEQCCTSICSLYQLENYCN
            </button>
            <span className="text-xs ml-2">(Insulin A-chain fragment)</span>
          </li>
          <li>
            <button
              type="button"
              className="text-primary hover:underline font-mono"
              onClick={() => setSequence('ACDEFGHIKLMNPQRSTVWY')}
            >
              ACDEFGHIKLMNPQRSTVWY
            </button>
            <span className="text-xs ml-2">(All 20 standard amino acids)</span>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default PeptideForm;
