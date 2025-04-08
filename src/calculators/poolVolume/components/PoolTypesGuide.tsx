
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Droplet, Calculator } from 'lucide-react';

const PoolTypesGuide: React.FC = () => {
  const poolTypes = [
    {
      name: "In-Ground Concrete/Gunite",
      volume: "15,000-30,000+ gallons",
      description: "Custom-shaped pools built from reinforced concrete and plaster. These are highly customizable but most expensive.",
      depthRange: "3-12 feet",
      lifespanYears: "50+ years",
      maintenanceLevel: "High"
    },
    {
      name: "Fiberglass",
      volume: "10,000-16,000 gallons",
      description: "Pre-formed shells with smooth, non-porous surface. Quick installation and low maintenance.",
      depthRange: "3-8 feet",
      lifespanYears: "25+ years",
      maintenanceLevel: "Low"
    },
    {
      name: "Vinyl Liner",
      volume: "10,000-25,000 gallons",
      description: "Steel or polymer walls with vinyl liner. More affordable but liners need replacement every 5-9 years.",
      depthRange: "3-8 feet",
      lifespanYears: "6-12 years (liner)",
      maintenanceLevel: "Medium"
    },
    {
      name: "Above-Ground",
      volume: "2,500-15,000 gallons",
      description: "Temporary or permanent structures that sit above ground. Most affordable option.",
      depthRange: "4-4.5 feet",
      lifespanYears: "7-15 years",
      maintenanceLevel: "Medium"
    },
    {
      name: "Plunge Pool/Cocktail Pool",
      volume: "2,000-8,000 gallons",
      description: "Small pools designed for cooling off, not swimming. Popular for smaller yards.",
      depthRange: "4-5 feet",
      lifespanYears: "Varies by construction",
      maintenanceLevel: "Low to Medium"
    },
    {
      name: "Infinity Edge",
      volume: "15,000-30,000+ gallons",
      description: "Any pool type with one or more 'vanishing' edges, creating a visual effect.",
      depthRange: "3-8 feet",
      lifespanYears: "Depends on construction",
      maintenanceLevel: "Very High"
    }
  ];

  return (
    <div className="mt-16 mb-16">
      <h2 className="text-2xl font-bold mb-6">Common Pool Types & Typical Volumes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poolTypes.map((type, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Droplet className="h-5 w-5 text-primary" />
                <h3 className="font-bold">{type.name}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="bg-primary/10 rounded-md px-3 py-2 flex justify-between">
                  <span className="text-sm font-medium">Typical Volume:</span>
                  <span className="text-sm">{type.volume}</span>
                </div>
                <div className="rounded-md px-3 py-2 flex justify-between border">
                  <span className="text-sm font-medium">Depth Range:</span>
                  <span className="text-sm">{type.depthRange}</span>
                </div>
                <div className="rounded-md px-3 py-2 flex justify-between border">
                  <span className="text-sm font-medium">Lifespan:</span>
                  <span className="text-sm">{type.lifespanYears}</span>
                </div>
                <div className="rounded-md px-3 py-2 flex justify-between border">
                  <span className="text-sm font-medium">Maintenance:</span>
                  <span className="text-sm">{type.maintenanceLevel}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
            <CardFooter className="bg-slate-50 px-6 py-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calculator className="h-4 w-4 mr-2" />
                <span>Calculate exact volume with our calculator above</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-sm text-muted-foreground">
        <p>
          <strong>Note:</strong> Volumes are approximate and vary based on specific dimensions.
          Use our Pool Volume Calculator for precise calculations based on your pool's exact measurements.
        </p>
      </div>
    </div>
  );
};

export default PoolTypesGuide;
