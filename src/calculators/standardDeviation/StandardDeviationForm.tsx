
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const StandardDeviationForm: React.FC<{
  onCalculate: (data: number[]) => void;
}> = ({ onCalculate }) => {
  const [inputMethod, setInputMethod] = useState<'manual' | 'paste'>('paste');
  const [inputText, setInputText] = useState('');
  const [separator, setSeparator] = useState('auto');
  const [error, setError] = useState<string | null>(null);

  const detectSeparator = (text: string): string => {
    if (text.includes(',')) return ',';
    if (text.includes(' ')) return ' ';
    if (text.includes('\t')) return '\t';
    if (text.includes(';')) return ';';
    return ',';
  };

  const parseData = (text: string, sep: string): number[] => {
    const actualSep = sep === 'auto' ? detectSeparator(text) : sep;
    
    // Replace multiple spaces with a single space if space is the separator
    const cleanText = actualSep === ' ' ? text.replace(/\s+/g, ' ').trim() : text.trim();
    
    const items = cleanText.split(actualSep);
    
    return items
      .map(item => {
        const trimmed = item.trim();
        // Skip empty items
        if (trimmed === '') return NaN;
        
        const parsed = parseFloat(trimmed);
        if (isNaN(parsed)) {
          throw new Error(`"${trimmed}" is not a valid number`);
        }
        return parsed;
      })
      .filter(num => !isNaN(num));
  };

  const handleCalculate = () => {
    try {
      setError(null);
      if (!inputText.trim()) {
        setError('Please enter your data');
        return;
      }
      
      const data = parseData(inputText, separator);
      
      if (data.length === 0) {
        setError('No valid numbers found');
        return;
      }
      
      if (data.length < 2) {
        setError('At least 2 numbers are required to calculate standard deviation');
        return;
      }
      
      onCalculate(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input');
    }
  };

  const handleExampleData = () => {
    setInputText('23, 45, 67, 89, 21, 43, 56, 78, 91, 34, 67, 89, 45, 32, 10');
    setSeparator(',');
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-xl">Standard Deviation Calculator</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="input-method">Input Method</Label>
              <Select 
                value={inputMethod} 
                onValueChange={(value) => setInputMethod(value as 'manual' | 'paste')}
              >
                <SelectTrigger id="input-method">
                  <SelectValue placeholder="Select input method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paste">Paste multiple values</SelectItem>
                  <SelectItem value="manual">Enter values manually</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="data-input">
                {inputMethod === 'paste' 
                  ? 'Enter your data (separated by commas, spaces, or new lines)' 
                  : 'Enter your values (one per line)'}
              </Label>
              <Textarea
                id="data-input"
                placeholder={inputMethod === 'paste' 
                  ? 'e.g., 23, 45, 67, 89, 21...' 
                  : 'e.g.\n23\n45\n67\n89\n21...'}
                rows={6}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="font-mono text-sm"
              />
            </div>
            
            {inputMethod === 'paste' && (
              <div>
                <Label htmlFor="separator">Separator</Label>
                <Select value={separator} onValueChange={setSeparator}>
                  <SelectTrigger id="separator">
                    <SelectValue placeholder="Select separator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-detect</SelectItem>
                    <SelectItem value=",">Comma (,)</SelectItem>
                    <SelectItem value=" ">Space</SelectItem>
                    <SelectItem value=";">Semicolon (;)</SelectItem>
                    <SelectItem value="\t">Tab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="pt-2 space-y-2">
              <Button type="submit" className="w-full">Calculate Standard Deviation</Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleExampleData}
              >
                Use Example Data
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default StandardDeviationForm;
