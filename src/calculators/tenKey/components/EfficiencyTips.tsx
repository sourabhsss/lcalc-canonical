
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ScrollText, Timer, Award } from 'lucide-react';

const EfficiencyTips: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Mastering 10-Key Efficiency
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Timer className="h-5 w-5 text-primary" />
            Speed and Accuracy Techniques
          </h3>
          
          <p>
            Proficiency with a 10-key calculator is a valuable skill in accounting, banking, data entry, and other financial fields. 
            Professional operators can achieve remarkable speeds of 8,000 to 12,000 keystrokes per hour with high accuracy. 
            Here are key techniques to improve your 10-key proficiency:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted/30 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Proper Hand Position</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Position your middle finger on 5 (home key)</li>
                <li>Index finger handles 4, 1, and often 0</li>
                <li>Ring finger reaches for 6 and 3</li>
                <li>Pinky manages operation keys</li>
                <li>Thumb operates the large 0 or Enter key</li>
              </ul>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Training Progression</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Start by learning key positions without looking</li>
                <li>Practice single digits before moving to sequences</li>
                <li>Focus on accuracy before attempting speed</li>
                <li>Use rhythm to develop muscle memory</li>
                <li>Time yourself regularly to track improvement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary" />
            Common 10-Key Patterns and Drills
          </h3>
          
          <p>
            These common drills help develop proficiency and can be practiced using our online calculator:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted/30 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Basic Drills</h4>
              <ul className="space-y-1">
                <li><code className="bg-background px-1">123456789</code> - Forward sequence</li>
                <li><code className="bg-background px-1">987654321</code> - Reverse sequence</li>
                <li><code className="bg-background px-1">369258147</code> - Column by column</li>
                <li><code className="bg-background px-1">147258369</code> - Reverse columns</li>
                <li><code className="bg-background px-1">159357</code> - Diagonals</li>
              </ul>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md">
              <h4 className="font-semibold mb-2">Advanced Patterns</h4>
              <ul className="space-y-1">
                <li><code className="bg-background px-1">111222333444555</code> - Repeating digits</li>
                <li><code className="bg-background px-1">123+456-789×123÷456</code> - Operation sequences</li>
                <li><code className="bg-background px-1">1919.29+2929.19</code> - Decimal practice</li>
                <li><code className="bg-background px-1">25%×1200</code> - Percentage calculations</li>
                <li><code className="bg-background px-1">M+100 M+200 MR</code> - Memory function practice</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Professional Standards and Certification
          </h3>
          
          <p>
            In many financial and accounting roles, 10-key proficiency is formally measured. Here are the commonly 
            recognized proficiency levels:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border px-4 py-2 text-left">Proficiency Level</th>
                  <th className="border px-4 py-2 text-left">KPH (Keystrokes Per Hour)</th>
                  <th className="border px-4 py-2 text-left">Error Rate</th>
                  <th className="border px-4 py-2 text-left">Typical Role Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Entry Level</td>
                  <td className="border px-4 py-2">4,000 - 6,000</td>
                  <td className="border px-4 py-2">&lt; 2%</td>
                  <td className="border px-4 py-2">General office, Retail</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border px-4 py-2">Intermediate</td>
                  <td className="border px-4 py-2">6,000 - 8,000</td>
                  <td className="border px-4 py-2">&lt; 1%</td>
                  <td className="border px-4 py-2">Accounting Clerk, Bookkeeper</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Proficient</td>
                  <td className="border px-4 py-2">8,000 - 10,000</td>
                  <td className="border px-4 py-2">&lt; 0.5%</td>
                  <td className="border px-4 py-2">Accountant, Auditor</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border px-4 py-2">Expert</td>
                  <td className="border px-4 py-2">10,000+</td>
                  <td className="border px-4 py-2">&lt; 0.1%</td>
                  <td className="border px-4 py-2">Data Entry Specialist, Senior Accountant</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-muted-foreground mt-2">
            Note: KPH (Keystrokes Per Hour) is the standard measurement for 10-key proficiency. Certification tests 
            typically include both speed and accuracy components.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EfficiencyTips;
