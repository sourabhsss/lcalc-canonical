
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ShieldAlert, LifeBuoy, Users } from 'lucide-react';

const PoolSafetyGuide: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Pool Safety Guide</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-red-500" />
              Essential Safety Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium">Fencing and Barriers</p>
                  <p className="text-sm text-muted-foreground">Install a fence at least 4 feet (1.2 meters) high around the entire pool with self-closing, self-latching gates.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium">Pool Alarms</p>
                  <p className="text-sm text-muted-foreground">Use alarms on doors, gates, and in the pool to alert you when someone enters the water unexpectedly.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium">Safety Covers</p>
                  <p className="text-sm text-muted-foreground">Install a safety cover that meets ASTM standards when the pool is not in use.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <p className="font-medium">Rescue Equipment</p>
                  <p className="text-sm text-muted-foreground">Keep a life ring, reaching pole, and first aid kit easily accessible.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              Pool Rules and Supervision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium">Active Supervision</p>
                  <p className="text-sm text-muted-foreground">Designate a responsible adult as a "water watcher" when children are swimming.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium">Swimming Lessons</p>
                  <p className="text-sm text-muted-foreground">Ensure all family members learn to swim from qualified instructors.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium">CPR Training</p>
                  <p className="text-sm text-muted-foreground">Learn CPR and basic water rescue skills.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <p className="font-medium">No Solo Swimming</p>
                  <p className="text-sm text-muted-foreground">Enforce a "no swimming alone" rule, even for adults.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <LifeBuoy className="h-10 w-10 text-blue-600 shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Did You Know?</h3>
                <p className="text-blue-700">
                  According to the U.S. Consumer Product Safety Commission, about 390 children under age 15 drown in pools and spas each year.
                  Installing proper barriers and alarms can reduce these incidents by up to 50%. Proper pool safety isn't just recommended—it's essential.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PoolSafetyGuide;
