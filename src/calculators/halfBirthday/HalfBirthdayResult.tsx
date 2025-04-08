
import React from 'react';
import { format } from 'date-fns';
import { Cake, Calendar } from 'lucide-react';

interface HalfBirthdayResultProps {
  birthdate: Date;
  halfBirthdate: Date;
}

const HalfBirthdayResult: React.FC<HalfBirthdayResultProps> = ({ birthdate, halfBirthdate }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Your Half Birthday</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="text-primary h-5 w-5" />
            <h4 className="font-medium">Your Birthdate</h4>
          </div>
          <p className="text-2xl font-semibold">{format(birthdate, 'MMMM d, yyyy')}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {format(birthdate, 'EEEE')}
          </p>
        </div>
        
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Cake className="text-primary h-5 w-5" />
            <h4 className="font-medium">Your Half Birthday</h4>
          </div>
          <p className="text-2xl font-semibold">{format(halfBirthdate, 'MMMM d, yyyy')}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {format(halfBirthdate, 'EEEE')}
          </p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-secondary/20 rounded-md">
        <h4 className="text-md font-medium mb-2">What is a Half Birthday?</h4>
        <p className="text-sm text-muted-foreground">
          A half birthday occurs exactly six months after your birthday. It marks the halfway 
          point to your next birthday. Many people celebrate half birthdays, especially for 
          children who are born during holiday seasons or summer break when friends might be 
          away, giving them a chance to celebrate with their peers on a different date.
        </p>
      </div>
    </div>
  );
};

export default HalfBirthdayResult;
