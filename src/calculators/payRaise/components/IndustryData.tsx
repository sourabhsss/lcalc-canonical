
import React from 'react';
import { BarChart } from 'lucide-react';

const IndustryData: React.FC = () => {
  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        <BarChart className="h-5 w-5 text-primary" />
        Pay Raise Statistics and Trends
      </h3>
      
      <div className="space-y-4">
        <p>
          Understanding current salary increase trends and benchmarks can help you evaluate whether your raise is competitive and make informed career decisions. This section provides recent data on pay raises across industries and regions.
        </p>
        
        <h4 className="text-xl font-medium mt-6">Average Salary Increases by Year</h4>
        <p>
          According to data from major compensation surveys, here are the average salary increase budgets in the United States over recent years:
        </p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Year</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Average Increase</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Inflation Rate</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Real Wage Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4">2023</td>
                <td className="py-2 px-4">4.1%</td>
                <td className="py-2 px-4">3.7%</td>
                <td className="py-2 px-4">0.4%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2022</td>
                <td className="py-2 px-4">4.8%</td>
                <td className="py-2 px-4">8.0%</td>
                <td className="py-2 px-4 text-red-500">-3.2%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2021</td>
                <td className="py-2 px-4">3.0%</td>
                <td className="py-2 px-4">4.7%</td>
                <td className="py-2 px-4 text-red-500">-1.7%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2020</td>
                <td className="py-2 px-4">2.9%</td>
                <td className="py-2 px-4">1.4%</td>
                <td className="py-2 px-4">1.5%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">3.2%</td>
                <td className="py-2 px-4">1.8%</td>
                <td className="py-2 px-4">1.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Source: Data compiled from Willis Towers Watson, Salary.com, and Bureau of Labor Statistics reports.
        </p>
        
        <h4 className="text-xl font-medium mt-6">Salary Increases by Industry (2023)</h4>
        <p>
          Different industries offer varying levels of compensation growth. Here are the average salary increases by industry in 2023:
        </p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Industry</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Average Increase</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Top Performer Increase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4">Technology</td>
                <td className="py-2 px-4">4.5%</td>
                <td className="py-2 px-4">7.2%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Financial Services</td>
                <td className="py-2 px-4">4.3%</td>
                <td className="py-2 px-4">6.8%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Healthcare</td>
                <td className="py-2 px-4">4.0%</td>
                <td className="py-2 px-4">6.5%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Manufacturing</td>
                <td className="py-2 px-4">3.8%</td>
                <td className="py-2 px-4">5.9%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Retail</td>
                <td className="py-2 px-4">3.5%</td>
                <td className="py-2 px-4">5.2%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Education</td>
                <td className="py-2 px-4">3.1%</td>
                <td className="py-2 px-4">4.7%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Non-profit</td>
                <td className="py-2 px-4">3.0%</td>
                <td className="py-2 px-4">4.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Source: Data compiled from multiple compensation surveys including Willis Towers Watson and Mercer.
        </p>
        
        <h4 className="text-xl font-medium mt-6">Factors Influencing Salary Increases in 2023-2024</h4>
        <p>
          Several key trends are currently shaping compensation strategies and salary increases:
        </p>
        
        <div className="mt-4 space-y-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-1">Inflation Pressure</h5>
            <p className="text-sm">
              After high inflation in 2021-2022, companies have been making larger-than-usual adjustments to help employees maintain purchasing power. However, as inflation moderates, salary increase budgets may also stabilize.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-1">Labor Market Competition</h5>
            <p className="text-sm">
              Despite economic uncertainty, unemployment rates remain low in many sectors, and competition for skilled talent continues to drive compensation growth in key roles and industries.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-1">Shift to Variable Pay</h5>
            <p className="text-sm">
              Many organizations are allocating more compensation dollars to bonuses and variable pay rather than base salary increases, allowing more flexibility to reward top performers while managing fixed costs.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-1">Geographic Flexibility</h5>
            <p className="text-sm">
              With remote work now common, some companies are adopting location-based pay strategies that adjust compensation based on where employees live rather than where the company is headquartered.
            </p>
          </div>
        </div>
        
        <h4 className="text-xl font-medium mt-6">Promotion-Based Increases</h4>
        <p>
          Promotions typically come with more substantial salary increases than annual merit raises. Average promotion-related increases by level:
        </p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Career Level</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Average Promotion Increase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4">Entry Level to Professional</td>
                <td className="py-2 px-4">8-12%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Professional to Manager</td>
                <td className="py-2 px-4">10-15%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Manager to Director</td>
                <td className="py-2 px-4">15-20%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Director to Vice President</td>
                <td className="py-2 px-4">20-30%</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Vice President to Executive</td>
                <td className="py-2 px-4">25-40%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-5 mt-6">
          <h4 className="font-medium mb-2">Looking Beyond the Percentage</h4>
          <p className="text-sm">
            When evaluating a raise offer or planning your negotiation strategy, remember that total compensation extends beyond base salary. Consider the full package, including bonuses, equity, retirement benefits, health insurance, paid time off, professional development opportunities, and other perks that contribute to your financial well-being and work-life balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryData;
