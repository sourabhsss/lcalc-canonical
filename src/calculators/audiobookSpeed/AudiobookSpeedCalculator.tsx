
import React from 'react';
import AudiobookSpeedForm from './AudiobookSpeedForm';
import AudiobookSpeedResult from './AudiobookSpeedResult';
import AudiobookSpeedContent from './components/AudiobookSpeedContent';
import AudiobookSpeedFAQ from './components/AudiobookSpeedFAQ';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RelatedCalculators from './components/RelatedCalculators';
import { Separator } from '@/components/ui/separator';

const AudiobookSpeedCalculator: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="guide">How It Works</TabsTrigger>
            </TabsList>
            <TabsContent value="calculator" className="p-4 border rounded-md mt-2">
              <AudiobookSpeedForm />
            </TabsContent>
            <TabsContent value="guide" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-2">How the Audiobook Speed Calculator Works</h3>
              <p className="text-muted-foreground">
                This calculator helps you determine how long it will take to finish an audiobook at different playback speeds. 
                Simply enter the book's total length at normal speed (1x) and your preferred playback speed. 
                The calculator will show you how much time you'll save and when you'll finish listening.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">The formula we use:</h4>
                <p className="mt-1 text-sm bg-muted p-2 rounded">
                  Time at adjusted speed = Original time ÷ Playback speed
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <AudiobookSpeedResult />
          </div>
          
          <Separator className="my-8" />
          
          <AudiobookSpeedContent />
        </div>
        
        <div className="lg:col-span-1">
          <RelatedCalculators />
        </div>
      </div>
      
      <AudiobookSpeedFAQ />
    </div>
  );
};

export default AudiobookSpeedCalculator;
