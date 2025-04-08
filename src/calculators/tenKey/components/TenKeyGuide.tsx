
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Keyboard, Clock, PenTool } from 'lucide-react';

const TenKeyGuide: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Understanding the 10-Key Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Keyboard className="h-5 w-5 text-primary" />
            What is a 10-Key Calculator?
          </h3>
          <p>
            A 10-key calculator, also known as a ten-key adding machine, is a specialized calculator with a layout 
            that places the numbers 0-9 in a compact grid, traditionally with 7-8-9 on the top row, 4-5-6 in the 
            middle, and 1-2-3 on the bottom row, plus a larger 0 key. This layout is optimized for rapid data entry, 
            especially for accounting and financial calculations.
          </p>
          <p>
            The "10-key" name refers to the ten digit keys (0-9), though modern versions include additional keys for 
            operations like addition, subtraction, multiplication, division, and special functions. The layout is 
            designed so users can develop "touch typing" skills without looking at the keypad, similar to how typists
            operate a keyboard.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            History and Evolution
          </h3>
          <p>
            The 10-key layout has its roots in mechanical adding machines from the early 20th century. 
            The first electric adding machines with this layout became popular in accounting departments 
            in the 1920s and 1930s. Manufacturers like Burroughs, Monroe, and Marchant were pioneers in this field.
          </p>
          <p>
            As electronic calculators emerged in the 1960s and 1970s, the 10-key layout remained the standard for 
            financial calculations. Even today, with the prevalence of computers and spreadsheet software, dedicated 
            10-key calculators and number pads maintain this layout for efficiency in numerical data entry.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <PenTool className="h-5 w-5 text-primary" />
            Key Features of Our Online 10-Key Calculator
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Classic 10-Key Layout:</strong> Familiar arrangement for efficient data entry</li>
            <li><strong>Paper Tape:</strong> View and review your calculation history</li>
            <li><strong>Memory Functions:</strong> Store and recall values with M+, M-, MR, and MC</li>
            <li><strong>Keyboard Support:</strong> Use your computer keyboard for even faster entry</li>
            <li><strong>Responsive Design:</strong> Works on all devices from desktop to mobile</li>
            <li><strong>Clear Display:</strong> Large, easy-to-read output of calculations</li>
            <li><strong>Standard Operations:</strong> Addition, subtraction, multiplication, division</li>
            <li><strong>Additional Functions:</strong> Percentage, sign change, and decimal point</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenKeyGuide;
