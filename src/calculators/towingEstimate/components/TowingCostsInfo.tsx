
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nationalTowingCostData, vehicleTowingCostData, additionalServicesCostData } from '../towingEstimateUtils';

const TowingCostsInfo: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Understanding Towing Costs</h2>
      <p className="text-muted-foreground mb-8">
        Towing costs can vary significantly based on several factors including distance, vehicle type, location, and time of service. 
        The following tables provide a general overview of average towing costs across the United States.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Distance-Based Towing Costs</CardTitle>
            <CardDescription>National average towing costs by distance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Distance</TableHead>
                  <TableHead>Average Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nationalTowingCostData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.distance}</TableCell>
                    <TableCell>{item.avgCost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Type Pricing</CardTitle>
            <CardDescription>Average towing costs by vehicle type</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Average Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicleTowingCostData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.vehicleType}</TableCell>
                    <TableCell>{item.avgCost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Additional Services</CardTitle>
          <CardDescription>Average costs for common additional towing services</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Average Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {additionalServicesCostData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.service}</TableCell>
                  <TableCell>{item.avgCost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="mt-8 bg-muted/30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Factors That Influence Towing Prices</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Distance:</strong> Most companies charge a base hookup fee plus a per-mile rate.</li>
          <li><strong>Vehicle Size and Weight:</strong> Heavier vehicles require more powerful equipment and may cost more to tow.</li>
          <li><strong>Time of Day:</strong> After-hours towing (nights, weekends, holidays) typically incurs surcharges.</li>
          <li><strong>Location:</strong> Urban areas may have more competitive pricing than rural areas with fewer service providers.</li>
          <li><strong>Terrain and Conditions:</strong> Difficult terrain, bad weather, or special circumstances may increase costs.</li>
          <li><strong>Type of Tow:</strong> Flatbed towing generally costs more than standard wheel-lift towing.</li>
          <li><strong>Company Policies:</strong> Some companies have minimum fees regardless of distance.</li>
          <li><strong>Local Regulations:</strong> Some municipalities regulate towing rates, especially for non-consent tows.</li>
        </ul>
      </div>
    </section>
  );
};

export default TowingCostsInfo;
