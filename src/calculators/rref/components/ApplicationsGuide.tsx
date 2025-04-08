
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const ApplicationsGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Applications of RREF
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 text-sm">
          <div>
            <h3 className="font-medium mb-1">Solving Linear Equations</h3>
            <p className="text-muted-foreground">
              RREF transforms complex systems of equations into a form where the solutions are easily readable. 
              This is especially valuable in engineering and physics for solving circuit equations, force balances, 
              and constraint problems.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Computer Graphics</h3>
            <p className="text-muted-foreground">
              3D transformations, projections, and camera systems in computer graphics rely on matrix operations 
              where RREF helps determine linear dependencies and inverses of transformation matrices.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Economic Models</h3>
            <p className="text-muted-foreground">
              Input-output models in economics use matrices to represent relationships between different sectors. 
              RREF helps analyze these relationships and find equilibrium conditions.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Network Analysis</h3>
            <p className="text-muted-foreground">
              Circuit analysis, traffic flow, and communication networks all involve matrices representing 
              connections. RREF helps identify critical paths and redundancies in these networks.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Machine Learning</h3>
            <p className="text-muted-foreground">
              Feature selection, dimensionality reduction, and multicollinearity detection in regression 
              models use RREF to identify linearly dependent features.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Cryptography</h3>
            <p className="text-muted-foreground">
              Some encryption schemes use matrix operations where RREF helps in analyzing the security of 
              the system and finding decryption keys.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Linear Programming</h3>
            <p className="text-muted-foreground">
              Optimization problems often involve matrix representations where RREF helps determine feasible 
              regions and optimal solutions.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsGuide;
