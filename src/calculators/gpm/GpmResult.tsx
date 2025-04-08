
import React from 'react';
import { useGpmStore } from './gpmStore';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const GpmResult: React.FC = () => {
  const { flowData } = useGpmStore();
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();
  
  if (!flowData) return null;

  const copyToClipboard = () => {
    const text = `GPM: ${flowData.gpm.toFixed(2)}\n` +
      `Liters per minute: ${flowData.conversions.litersPerMinute.toFixed(2)}\n` +
      `Cubic feet per minute: ${flowData.conversions.cubicFeetPerMinute.toFixed(2)}\n` +
      `Cubic meters per hour: ${flowData.conversions.cubicMetersPerHour.toFixed(2)}`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The flow rate results have been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getMethodDescription = () => {
    switch (flowData.method) {
      case 'container':
        return 'Container Method';
      case 'flowRate':
        return 'Flow Rate Method';
      case 'volumeTime':
        return 'Volume/Time Method';
      default:
        return 'Calculation Method';
    }
  };

  return (
    <Card className="mt-8 border-primary/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Flow Rate Results</h3>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1" 
            onClick={copyToClipboard}
          >
            {copied ? (
              <><Check className="h-4 w-4" /> Copied</>
            ) : (
              <><Copy className="h-4 w-4" /> Copy</>
            )}
          </Button>
        </div>
        
        <div className="bg-accent/30 p-4 rounded-md mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Flow Rate (GPM)</span>
            <span className="text-2xl font-bold text-primary">{flowData.gpm.toFixed(2)}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            Gallons Per Minute • {getMethodDescription()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-muted/40 p-3 rounded-md">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Liters per minute</span>
              <span className="font-semibold">{flowData.conversions.litersPerMinute.toFixed(2)} L/min</span>
            </div>
          </div>
          
          <div className="bg-muted/40 p-3 rounded-md">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Cubic feet per minute</span>
              <span className="font-semibold">{flowData.conversions.cubicFeetPerMinute.toFixed(4)} ft³/min</span>
            </div>
          </div>
          
          <div className="bg-muted/40 p-3 rounded-md">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Cubic meters per hour</span>
              <span className="font-semibold">{flowData.conversions.cubicMetersPerHour.toFixed(2)} m³/h</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">What these results mean:</h4>
          <p className="text-sm text-muted-foreground">
            {flowData.gpm.toFixed(2)} gallons per minute is equivalent to about {(flowData.gpm * 1440).toFixed(0)} gallons per day. 
            This flow rate is {flowData.gpm < 10 ? 'relatively low' : flowData.gpm < 50 ? 'moderate' : 'high'} and would be 
            {' '}
            {flowData.gpm < 5 
              ? 'suitable for residential faucets and fixtures' 
              : flowData.gpm < 15 
                ? 'appropriate for household appliances and small irrigation systems' 
                : flowData.gpm < 50 
                  ? 'good for larger residential and small commercial applications' 
                  : 'typical for commercial or industrial applications'}
            .
          </p>
          <div className="flex items-center mt-4 text-sm">
            <ArrowRight className="h-4 w-4 text-primary mr-2" />
            <a href="#gpm-applications" className="text-primary hover:underline">
              Learn more about GPM applications
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GpmResult;
