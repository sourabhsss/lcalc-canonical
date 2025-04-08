
import React from 'react';
import { LcmHcfResult as ResultType } from './lcmHcfTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatNumber, findFactors } from './lcmHcfUtils';
import { Badge } from '@/components/ui/badge';
import { Check, Copy, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

interface LcmHcfResultProps {
  result: ResultType;
}

const LcmHcfResult: React.FC<LcmHcfResultProps> = ({ result }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.result.toString());
    setCopied(true);
    toast.success('Result copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const resultLabel = result.calculationType === 'lcm' 
    ? 'Least Common Multiple (LCM)' 
    : 'Highest Common Factor (HCF/GCD)';

  return (
    <Card className="w-full mb-8">
      <CardHeader className="bg-primary/5 pb-4">
        <CardTitle className="flex justify-between items-center flex-wrap gap-2">
          <span>{resultLabel}</span>
          <Badge variant="outline" className="font-mono text-base px-3 py-1">
            Result: {formatNumber(result.result)}
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 ml-1"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </Button>
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Input Numbers</h3>
            <div className="flex flex-wrap gap-2">
              {result.numbers.map((num, i) => (
                <Badge key={i} variant="secondary" className="font-mono">
                  {num}
                </Badge>
              ))}
            </div>
          </div>

          {result.steps && result.steps.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-sm font-medium mb-2">Step-by-Step Solution</h3>
                <div className="bg-secondary/10 rounded-md p-4 space-y-2 font-mono text-sm">
                  {result.steps.map((step, i) => (
                    <div key={i} className="flex">
                      <span className="text-primary mr-2">{i + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="bg-accent/5 rounded-md p-4 flex items-start">
            <Info className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">
                {result.calculationType === 'lcm' ? (
                  <>The LCM is the smallest positive number that is divisible by all the input numbers.</>
                ) : (
                  <>The HCF (or GCD) is the largest positive integer that divides all the input numbers without a remainder.</>
                )}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LcmHcfResult;
