
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { BookAudio, FastForward } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAudiobookSpeedStore } from './audiobookSpeedStore';

const AudiobookSpeedForm: React.FC = () => {
  const { toast } = useToast();
  const { setAudiobookData } = useAudiobookSpeedStore();
  
  const [hours, setHours] = useState<string>('10');
  const [minutes, setMinutes] = useState<string>('30');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.5);
  const [bookTitle, setBookTitle] = useState<string>('');
  
  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 100)) {
      setHours(value);
    }
  };
  
  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 59)) {
      setMinutes(value);
    }
  };
  
  const handleSliderChange = (value: number[]) => {
    setPlaybackSpeed(value[0]);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hoursNum = hours ? parseInt(hours) : 0;
    const minutesNum = minutes ? parseInt(minutes) : 0;
    
    if (hoursNum === 0 && minutesNum === 0) {
      toast({
        title: "Invalid time",
        description: "Please enter the audiobook length",
        variant: "destructive"
      });
      return;
    }
    
    const totalMinutesAtNormalSpeed = hoursNum * 60 + minutesNum;
    const totalMinutesAtSelectedSpeed = totalMinutesAtNormalSpeed / playbackSpeed;
    
    const newHours = Math.floor(totalMinutesAtSelectedSpeed / 60);
    const newMinutes = Math.round(totalMinutesAtSelectedSpeed % 60);
    
    const timeSaved = totalMinutesAtNormalSpeed - totalMinutesAtSelectedSpeed;
    const savedHours = Math.floor(timeSaved / 60);
    const savedMinutes = Math.round(timeSaved % 60);
    
    // Calculate finish time if started now
    const now = new Date();
    const finishTime = new Date(now.getTime() + totalMinutesAtSelectedSpeed * 60 * 1000);
    
    setAudiobookData({
      originalLength: {
        hours: hoursNum,
        minutes: minutesNum,
        totalMinutes: totalMinutesAtNormalSpeed
      },
      adjustedLength: {
        hours: newHours,
        minutes: newMinutes,
        totalMinutes: totalMinutesAtSelectedSpeed
      },
      timeSaved: {
        hours: savedHours,
        minutes: savedMinutes,
        totalMinutes: timeSaved
      },
      playbackSpeed,
      bookTitle: bookTitle || 'your audiobook',
      finishTime
    });
    
    toast({
      title: "Calculation complete",
      description: "Scroll down to see your results"
    });
  };
  
  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="book-title" className="text-base">Audiobook Title (optional)</Label>
            <div className="mt-1.5 relative">
              <BookAudio className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="book-title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="pl-10"
                placeholder="Enter audiobook title"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="length" className="text-base">Audiobook Length at Normal Speed (1x)</Label>
            <div className="grid grid-cols-2 gap-4 mt-1.5">
              <div>
                <Label htmlFor="hours" className="text-sm">Hours</Label>
                <Input
                  id="hours"
                  value={hours}
                  onChange={handleHoursChange}
                  className="mt-1"
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="minutes" className="text-sm">Minutes</Label>
                <Input
                  id="minutes"
                  value={minutes}
                  onChange={handleMinutesChange}
                  className="mt-1"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="playback-speed" className="text-base">Playback Speed</Label>
              <span className="text-lg font-medium">{playbackSpeed.toFixed(1)}x</span>
            </div>
            <div className="mt-6 px-2">
              <Slider
                defaultValue={[1.5]}
                min={0.5}
                max={3}
                step={0.1}
                value={[playbackSpeed]}
                onValueChange={handleSliderChange}
              />
              <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                <span>0.5x</span>
                <span>1.0x</span>
                <span>1.5x</span>
                <span>2.0x</span>
                <span>2.5x</span>
                <span>3.0x</span>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6 !text-white" size="lg">
            <FastForward className="mr-2 h-4 w-4" />
            Calculate Listening Time
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AudiobookSpeedForm;
