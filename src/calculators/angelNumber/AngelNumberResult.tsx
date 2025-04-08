
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface AngelNumberResultProps {
  result: {
    number: string;
    type: 'angel' | 'lifePath' | 'name';
    title: string;
    meaning: string;
    guidance: string;
    lifeAreas: string[];
  } | null;
}

const AngelNumberResult: React.FC<AngelNumberResultProps> = ({ result }) => {
  if (!result) return null;

  const typeLabels = {
    angel: "Angel Number",
    lifePath: "Life Path Number",
    name: "Name Number"
  };

  const getTypeColor = (type: 'angel' | 'lifePath' | 'name') => {
    switch (type) {
      case 'angel':
        return 'bg-primary/10 text-primary';
      case 'lifePath':
        return 'bg-purple-100 text-purple-800';
      case 'name':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="mt-8 p-6 bg-primary/5 shadow-md">
      <div className="flex flex-col items-center mb-6">
        <Badge className={getTypeColor(result.type)}>
          {typeLabels[result.type]}
        </Badge>
        <div className="mt-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-md">
          <span className="text-4xl font-bold text-primary">{result.number}</span>
        </div>
        <h3 className="text-xl font-bold mt-4">{result.title}</h3>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            Meaning
          </h4>
          <p className="text-muted-foreground">{result.meaning}</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            Guidance
          </h4>
          <p className="text-muted-foreground">{result.guidance}</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            Life Areas Influenced
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {result.lifeAreas.map((area, idx) => (
              <Badge key={idx} variant="outline" className="text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
        
        {result.type === 'angel' && (
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-semibold text-lg mb-2">What to Do When You See This Number</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pause and reflect</TableCell>
                  <TableCell>Acknowledge the synchronicity and be present in the moment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Journal your thoughts</TableCell>
                  <TableCell>Record your feelings and any insights when you see this number</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Meditate on the meaning</TableCell>
                  <TableCell>Connect with the energy and message of the number</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Take inspired action</TableCell>
                  <TableCell>Follow the guidance that resonates with your situation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        
        {result.type === 'lifePath' && (
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-semibold text-lg mb-2">Your Life Path Journey</h4>
            <p className="text-muted-foreground mb-4">
              Your Life Path Number {result.number} represents your core essence and life purpose.
              This number reveals the path you're meant to follow and the lessons you'll encounter.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Life Stage</TableHead>
                  <TableHead>Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Early Years</TableCell>
                  <TableCell>Developing the foundational traits of your Life Path Number</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Young Adulthood</TableCell>
                  <TableCell>Learning to navigate challenges related to your Life Path</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Maturity</TableCell>
                  <TableCell>Embracing and expressing your Life Path's highest potential</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Later Years</TableCell>
                  <TableCell>Teaching and sharing the wisdom gained from your Life Path journey</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        
        {result.type === 'name' && (
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-semibold text-lg mb-2">Expression Number Insights</h4>
            <p className="text-muted-foreground mb-4">
              Your Name Number {result.number} (also called Expression Number) represents your natural 
              talents, abilities, and the energy you express to the world through your name.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Area</TableHead>
                  <TableHead>Influence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Personal Identity</TableCell>
                  <TableCell>How you express yourself and your unique qualities</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Career Path</TableCell>
                  <TableCell>Natural talents and professional strengths</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Relationships</TableCell>
                  <TableCell>Communication style and relationship dynamics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Life Lessons</TableCell>
                  <TableCell>Challenges to overcome related to self-expression</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AngelNumberResult;
