
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  calculateLifePathNumber, 
  calculateNameNumber, 
  getCommonAngelNumbers 
} from './angelNumberUtils';

interface AngelNumberFormProps {
  onCalculate: (number: string) => void;
  onCalculateLifePath: (number: string) => void;
  onCalculateNameNumber: (number: string) => void;
  onReset: () => void;
}

const AngelNumberForm: React.FC<AngelNumberFormProps> = ({
  onCalculate,
  onCalculateLifePath,
  onCalculateNameNumber,
  onReset
}) => {
  const [activeTab, setActiveTab] = useState('angel-number');
  const [angelNumber, setAngelNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');
  const [selectedCommonNumber, setSelectedCommonNumber] = useState('');
  
  const { toast } = useToast();
  const commonAngelNumbers = getCommonAngelNumbers();
  
  const handleSubmitAngelNumber = () => {
    if (!angelNumber && !selectedCommonNumber) {
      toast({
        title: "Input required",
        description: "Please enter an angel number or select a common one",
        variant: "destructive"
      });
      return;
    }
    
    const numberToCalculate = angelNumber || selectedCommonNumber;
    onCalculate(numberToCalculate);
    
    toast({
      title: "Angel number analyzed",
      description: `Interpreting the meaning of ${numberToCalculate}`
    });
  };
  
  const handleSubmitBirthdate = () => {
    if (!birthdate) {
      toast({
        title: "Birthdate required",
        description: "Please enter your birthdate to calculate your life path number",
        variant: "destructive"
      });
      return;
    }
    
    const lifePathNumber = calculateLifePathNumber(birthdate);
    onCalculateLifePath(lifePathNumber);
    
    toast({
      title: "Life path calculated",
      description: `Your life path number is ${lifePathNumber}`
    });
  };
  
  const handleSubmitName = () => {
    if (!name) {
      toast({
        title: "Name required",
        description: "Please enter your full name to calculate your name number",
        variant: "destructive"
      });
      return;
    }
    
    const nameNumber = calculateNameNumber(name);
    onCalculateNameNumber(nameNumber);
    
    toast({
      title: "Name number calculated",
      description: `Your name number is ${nameNumber}`
    });
  };
  
  const handleReset = () => {
    setAngelNumber('');
    setBirthdate('');
    setName('');
    setSelectedCommonNumber('');
    onReset();
  };
  
  return (
    <div className="space-y-6">
      <Tabs 
        defaultValue="angel-number" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="angel-number">Angel Number</TabsTrigger>
          <TabsTrigger value="life-path">Life Path Number</TabsTrigger>
          <TabsTrigger value="name-number">Name Number</TabsTrigger>
        </TabsList>
        
        <TabsContent value="angel-number" className="space-y-6">
          <div>
            <Label htmlFor="angel-number">Enter Angel Number</Label>
            <Input
              id="angel-number"
              type="text"
              value={angelNumber}
              onChange={(e) => setAngelNumber(e.target.value)}
              placeholder="Enter a number (e.g., 111, 444, 777)"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="common-number">Or Select a Common Angel Number</Label>
            <Select 
              value={selectedCommonNumber} 
              onValueChange={setSelectedCommonNumber}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a common angel number" />
              </SelectTrigger>
              <SelectContent>
                {commonAngelNumbers.map((number) => (
                  <SelectItem key={number} value={number}>
                    {number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-4 justify-center mt-8">
            <Button onClick={handleSubmitAngelNumber} className="px-8">
              Interpret Number
            </Button>
            <Button variant="outline" onClick={handleReset} className="px-8">
              Reset
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="life-path" className="space-y-6">
          <div>
            <Label htmlFor="birthdate">Enter Your Birthdate</Label>
            <Input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Your birthdate will be used to calculate your life path number, a key number in numerology.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mt-8">
            <Button onClick={handleSubmitBirthdate} className="px-8">
              Calculate Life Path
            </Button>
            <Button variant="outline" onClick={handleReset} className="px-8">
              Reset
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="name-number" className="space-y-6">
          <div>
            <Label htmlFor="full-name">Enter Your Full Name</Label>
            <Input
              id="full-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Your full name will be converted to numbers based on numerology principles.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mt-8">
            <Button onClick={handleSubmitName} className="px-8">
              Calculate Name Number
            </Button>
            <Button variant="outline" onClick={handleReset} className="px-8">
              Reset
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AngelNumberForm;
