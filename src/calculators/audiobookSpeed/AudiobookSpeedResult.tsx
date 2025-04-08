
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, FastForward, Headphones } from 'lucide-react';
import { formatTime, formatDateTime } from './audiobookSpeedUtils';
import { useAudiobookSpeedStore } from './audiobookSpeedStore';

const AudiobookSpeedResult: React.FC = () => {
  const { audiobookData } = useAudiobookSpeedStore();
  
  if (!audiobookData) {
    return null;
  }
  
  const {
    originalLength,
    adjustedLength, 
    timeSaved,
    playbackSpeed,
    bookTitle,
    finishTime
  } = audiobookData;
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Results</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Headphones className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium">Original Length</h3>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">1.0x</span>
            </div>
            <p className="text-2xl font-bold">{formatTime(originalLength.hours, originalLength.minutes)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FastForward className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium">Adjusted Length</h3>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">{playbackSpeed}x</span>
            </div>
            <p className="text-2xl font-bold">{formatTime(adjustedLength.hours, adjustedLength.minutes)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium">Time Saved</h3>
              </div>
            </div>
            <p className="text-2xl font-bold text-green-600">{formatTime(timeSaved.hours, timeSaved.minutes)}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-3">Summary</h3>
          <p className="text-muted-foreground">
            At <span className="font-medium">{playbackSpeed}x speed</span>, you'll finish <span className="font-medium">{bookTitle}</span> in <span className="font-medium">{formatTime(adjustedLength.hours, adjustedLength.minutes)}</span> instead of <span className="font-medium">{formatTime(originalLength.hours, originalLength.minutes)}</span>, saving <span className="font-medium text-green-600">{formatTime(timeSaved.hours, timeSaved.minutes)}</span> of listening time.
          </p>
          <div className="mt-3 p-3 bg-background rounded-md">
            <p className="text-sm font-medium">If you start listening now, you'll finish at:</p>
            <p className="text-xl font-bold mt-1">{formatDateTime(finishTime)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AudiobookSpeedResult;
