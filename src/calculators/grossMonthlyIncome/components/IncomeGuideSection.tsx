import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, TrendingUp, Users, Briefcase } from 'lucide-react';

interface IndustryInsight {
  industry: string;
  insights: string;
  growthRate: string;
}

interface IncomeGuideSectionProps {
  industryInsights: IndustryInsight[];
}

const IncomeGuideSection: React.FC<IncomeGuideSectionProps> = ({ industryInsights }) => {
  return (
    <div className="mt-12 space-y-6">
      <h3 className="text-xl font-semibold">Income Guides by Industry</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industryInsights.map((insight, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                {insight.industry} Sector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{insight.insights}</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Growth Rate: {insight.growthRate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-slate-50 border rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-full shadow-sm">
            <BarChart2 className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Income Trends and Projections</h3>
            <p className="text-muted-foreground mb-4">
              According to the Bureau of Labor Statistics, median weekly earnings for full-time workers in the United States 
              were $1,037 in Q1 2023, translating to approximately $4,493 per month. Income growth varies significantly by industry, 
              education level, and geographic location. Understanding these trends can help you position yourself for better 
              income opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  Education Impact
                </h4>
                <p className="text-sm text-muted-foreground">
                  Workers with a bachelor's degree earn approximately 65% more than those with only a high school diploma. Advanced degrees 
                  can increase this premium to over 100% for professional degrees in fields like medicine and law.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  Geographic Variation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Metropolitan areas typically offer higher gross monthly incomes, with tech hubs like San Francisco, New York, and Seattle 
                  showing median incomes 30-60% above the national average. However, cost of living differences can offset these gains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeGuideSection;
