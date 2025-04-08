
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

const ShortcutGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Keyboard className="h-5 w-5" />
          Keyboard Shortcuts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Use your computer keyboard for faster calculations with these shortcuts:
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span>0-9</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">0-9</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Addition</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">+</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Subtraction</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">-</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Multiplication</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">*</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Division</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">/</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Decimal</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">.</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Equals</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Clear/Reset</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">Esc</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Backspace</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">Backspace</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Percent</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">%</kbd>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortcutGuide;
