
import React from 'react';
import { TattooTipResultData } from './tattooTipTypes';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft, Info } from 'lucide-react';

interface TattooTipResultProps {
  result: TattooTipResultData;
  onReset: () => void;
}

const TattooTipResult: React.FC<TattooTipResultProps> = ({ result, onReset }) => {
  const {
    tattooPrice,
    tipAmount,
    tipPercentage,
    recommendedRangeMin,
    recommendedRangeMax,
    factors,
    totalAmount
  } = result;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Factor icons and color classes
  const getFactorIcon = (impact: 'positive' | 'neutral' | 'negative') => {
    switch (impact) {
      case 'positive':
        return '↑';
      case 'negative':
        return '↓';
      default:
        return '→';
    }
  };

  const getFactorColorClass = (impact: 'positive' | 'neutral' | 'negative') => {
    switch (impact) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-amber-600';
    }
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="bg-primary/10">
        <CardTitle className="text-2xl font-bold">Tattoo Tip Results</CardTitle>
        <CardDescription>
          Based on your inputs, here's our suggested tip amount
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-muted-foreground mb-1">Suggested Tip</h3>
            <div className="text-4xl font-bold text-primary">{formatCurrency(tipAmount)}</div>
            <p className="text-sm text-muted-foreground mt-1">
              ({tipPercentage}% of {formatCurrency(tattooPrice)})
            </p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium mb-2">Tip Range</h4>
            <div className="flex justify-between items-center">
              <span>{formatCurrency(recommendedRangeMin)}</span>
              <span className="text-xs text-muted-foreground">Recommended Range</span>
              <span>{formatCurrency(recommendedRangeMax)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-primary h-2.5 rounded-full" 
                style={{ 
                  width: `${((tipAmount - recommendedRangeMin) / (recommendedRangeMax - recommendedRangeMin)) * 100}%`,
                  maxWidth: '100%' 
                }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <span>Factors Considered</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-1 cursor-help">
                      <Info size={14} className="text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">These factors influenced your suggested tip amount</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h4>
            <div className="space-y-2">
              {factors.map((factor, index) => (
                <div key={index} className="flex justify-between text-sm p-2 bg-muted/20 rounded">
                  <span>{factor.name}</span>
                  <span className={getFactorColorClass(factor.impact)}>
                    {getFactorIcon(factor.impact)} {factor.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex justify-between font-medium">
              <span>Original Price:</span>
              <span>{formatCurrency(tattooPrice)}</span>
            </div>
            <div className="flex justify-between font-medium mt-1">
              <span>Tip Amount:</span>
              <span>{formatCurrency(tipAmount)}</span>
            </div>
            <div className="h-px bg-border my-2"></div>
            <div className="flex justify-between font-bold">
              <span>Total to Pay:</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center pt-2 pb-6">
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={onReset}
        >
          <ArrowLeft size={16} />
          <span>Recalculate</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TattooTipResult;
