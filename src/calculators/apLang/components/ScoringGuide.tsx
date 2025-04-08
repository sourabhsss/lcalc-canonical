
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Star, Sigma, TrendingUp } from 'lucide-react';

const ScoringGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          AP Lang Scoring System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 text-sm">
          <p className="text-muted-foreground">
            The AP English Language and Composition exam uses a weighted scoring system that combines your 
            performance on both the multiple-choice and free-response sections to determine your final AP score 
            on a 1-5 scale.
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Sigma className="h-4 w-4 text-primary" />
              How Your Composite Score is Calculated
            </h3>
            <div className="p-4 border rounded-md">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>Multiple-Choice Section (45%):</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Each correct answer is worth 1 raw point</li>
                    <li>There's no penalty for incorrect answers</li>
                    <li>Maximum raw score: 45 points</li>
                    <li>This section accounts for 45% of your total score</li>
                  </ul>
                </li>
                <li>
                  <strong>Free-Response Section (55%):</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Each essay is scored on a 0-6 scale by trained AP readers</li>
                    <li>Maximum raw score: 18 points (6 points per essay × 3 essays)</li>
                    <li>This section accounts for 55% of your total score</li>
                  </ul>
                </li>
                <li>
                  <strong>Composite Score Calculation:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Multiple-choice points are weighted at 45%</li>
                    <li>Free-response points are weighted at 55%</li>
                    <li>The weighted scores are combined to create a composite score out of 100</li>
                  </ul>
                </li>
                <li>
                  <strong>Conversion to AP Score (1-5):</strong>
                  <p className="ml-6 mt-1">
                    The composite score is converted to the 1-5 AP scale using a conversion chart that may vary slightly each year.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              AP Score Ranges (Approximate)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-accent/20">
                    <th className="border p-2 text-left">AP Score</th>
                    <th className="border p-2 text-left">Approximate Composite Score Range</th>
                    <th className="border p-2 text-left">College Board Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">68-100</td>
                    <td className="border p-2">Extremely well qualified</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">55-67</td>
                    <td className="border p-2">Well qualified</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">40-54</td>
                    <td className="border p-2">Qualified</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">25-39</td>
                    <td className="border p-2">Possibly qualified</td>
                  </tr>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">0-24</td>
                    <td className="border p-2">No recommendation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Note: These ranges are approximate and may vary slightly from year to year based on exam difficulty.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Score Distribution Statistics
            </h3>
            <div className="p-4 border rounded-md bg-accent/10">
              <p className="text-muted-foreground mb-3">
                According to recent College Board data, the AP Lang score distribution typically follows this pattern:
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-muted-foreground">
                    <span>Score 5</span>
                    <span>~10.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '10.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-muted-foreground">
                    <span>Score 4</span>
                    <span>~17.8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '17.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-muted-foreground">
                    <span>Score 3</span>
                    <span>~25.4%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '25.4%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-muted-foreground">
                    <span>Score 2</span>
                    <span>~28.7%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '28.7%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-muted-foreground">
                    <span>Score 1</span>
                    <span>~17.9%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '17.9%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Based on these statistics, approximately 53.4% of students earn a passing score (3 or higher) on the AP Lang exam.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoringGuide;
