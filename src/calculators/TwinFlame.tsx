
import { useState } from 'react';
import { Heart, Calendar, Users, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const TwinFlame = () => {
  const [formData, setFormData] = useState({
    name1: '',
    birthdate1: '',
    name2: '',
    birthdate2: ''
  });
  
  const [result, setResult] = useState<{
    compatibilityScore: number | null;
    interpretation: string | null;
    connectionStrengths: string[] | null;
    challenges: string[] | null;
  }>({
    compatibilityScore: null,
    interpretation: null,
    connectionStrengths: null,
    challenges: null
  });
  
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to generate a deterministic compatibility score based on name and birthdate
  const calculateTwinFlameCompatibility = () => {
    try {
      const { name1, birthdate1, name2, birthdate2 } = formData;
      
      if (!name1 || !birthdate1 || !name2 || !birthdate2) {
        setError('Please fill in all fields.');
        return;
      }

      // Parse birth dates
      const date1 = new Date(birthdate1);
      const date2 = new Date(birthdate2);
      
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        setError('Please enter valid dates.');
        return;
      }
      
      // Create a deterministic but seemingly random score based on the inputs
      // This creates an illusion of calculation while providing consistent results for the same inputs
      
      // Get numeric value from names (sum of char codes)
      const nameValue1 = Array.from(name1.toLowerCase()).reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const nameValue2 = Array.from(name2.toLowerCase()).reduce((sum, char) => sum + char.charCodeAt(0), 0);
      
      // Get numeric values from birth dates
      const dateValue1 = date1.getFullYear() + date1.getMonth() + date1.getDate();
      const dateValue2 = date2.getFullYear() + date2.getMonth() + date2.getDate();
      
      // Calculate a base score (pseudo-random but deterministic)
      const baseScore = ((nameValue1 * nameValue2) % 100) + ((dateValue1 * dateValue2) % 100);
      
      // Normalize to 1-100 range
      const normalizedScore = Math.max(30, Math.min(100, baseScore));
      
      // Round to an integer
      const finalScore = Math.round(normalizedScore);
      
      // Generate interpretation based on score ranges
      let interpretation;
      let connectionStrengths = [];
      let challenges = [];
      
      if (finalScore >= 90) {
        interpretation = "Extraordinary connection! You two share what appears to be a profound twin flame bond. Your souls seem to recognize each other at a deep level, suggesting a connection that transcends ordinary relationships.";
        connectionStrengths = [
          "Immediate soul recognition and deep understanding",
          "Powerful telepathic communication",
          "Shared spiritual purpose and growth",
          "Profound emotional resonance",
          "Complementary strengths and weaknesses"
        ];
        challenges = [
          "Managing the intensity of the connection",
          "Navigating personal growth triggers",
          "Balancing individual identity with the connection",
          "Handling the mirror effect of seeing your flaws reflected"
        ];
      } else if (finalScore >= 80) {
        interpretation = "Very strong connection! While not every twin flame exhibits the same patterns, your connection shows many of the classic signs of a twin flame relationship. You likely feel a powerful sense of recognition with each other.";
        connectionStrengths = [
          "Strong sense of familiarity upon meeting",
          "Significant spiritual growth through the relationship",
          "Meaningful synchronicities and shared experiences",
          "Deep emotional understanding",
          "Natural complementary energies"
        ];
        challenges = [
          "Working through emotional triggers and shadows",
          "Balancing togetherness with personal space",
          "Developing healthy communication during difficult periods",
          "Integrating spiritual lessons in practical ways"
        ];
      } else if (finalScore >= 70) {
        interpretation = "Strong potential! Your connection shows several characteristics of a twin flame relationship. You may experience an unusual sense of familiarity and comfort with each other.";
        connectionStrengths = [
          "Natural comfort and ease together",
          "Shared values and perspectives",
          "Mutual growth and inspiration",
          "Energetic resonance",
          "Meaningful coincidences in your connection"
        ];
        challenges = [
          "Recognizing and accepting the depth of connection",
          "Working through personal insecurities",
          "Managing periods of separation constructively",
          "Maintaining individuality within the connection"
        ];
      } else if (finalScore >= 60) {
        interpretation = "Moderate twin flame indicators. While your connection has some twin flame qualities, it may also be a strong soulmate bond. Both are meaningful connections that can lead to growth and fulfillment.";
        connectionStrengths = [
          "Supportive and nurturing energy exchange",
          "Opportunities for personal growth",
          "Comfortable communication",
          "Mutual respect and understanding",
          "Complementary life perspectives"
        ];
        challenges = [
          "Distinguishing between soulmate and twin flame energies",
          "Finding deeper purpose in your connection",
          "Building trust and vulnerability",
          "Balancing practicality with spiritual growth"
        ];
      } else if (finalScore >= 50) {
        interpretation = "Some twin flame qualities present. Your connection may be more of a soulmate relationship than a twin flame connection, but it still has significant potential for deeper meaning.";
        connectionStrengths = [
          "Mutual support and companionship",
          "Shared interests and activities",
          "Comfortable emotional exchange",
          "Potential for long-term growth together",
          "Teaching each other important life lessons"
        ];
        challenges = [
          "Developing deeper spiritual connection",
          "Finding transcendent purpose together",
          "Working through karmic patterns",
          "Expanding beyond comfort zones together"
        ];
      } else {
        interpretation = "Your connection appears to be more of a traditional relationship or perhaps a different type of soul connection. Remember that all meaningful relationships offer opportunities for growth and joy.";
        connectionStrengths = [
          "Foundation for building meaningful connection",
          "Opportunity to practice love and acceptance",
          "Learning about relationship dynamics",
          "Companionship and support in daily life",
          "Potential for developing deeper bonds over time"
        ];
        challenges = [
          "Finding deeper meaning in the connection",
          "Recognizing the purpose of your relationship",
          "Developing spiritual dimensions together",
          "Creating lasting emotional intimacy"
        ];
      }

      setResult({
        compatibilityScore: finalScore,
        interpretation,
        connectionStrengths,
        challenges
      });
      setError(null);
    } catch (err) {
      setError('An error occurred while calculating. Please check your inputs.');
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateTwinFlameCompatibility();
  };

  const handleClear = () => {
    setFormData({
      name1: '',
      birthdate1: '',
      name2: '',
      birthdate2: ''
    });
    setResult({
      compatibilityScore: null,
      interpretation: null,
      connectionStrengths: null,
      challenges: null
    });
    setError(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="mb-6 flex items-center gap-3">
            <Heart className="text-primary h-6 w-6" />
            <h2 className="text-xl font-semibold">Twin Flame Calculator</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Discover your twin flame compatibility based on your names and birth dates. Twin flames are believed 
            to be two halves of the same soul, creating an intense, transformative spiritual connection.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Person 1
                </h3>
                
                <div>
                  <Label htmlFor="name1" className="block text-sm font-medium mb-1">
                    Full Name
                  </Label>
                  <Input
                    id="name1"
                    name="name1"
                    type="text"
                    value={formData.name1}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="birthdate1" className="block text-sm font-medium mb-1">
                    Birth Date
                  </Label>
                  <Input
                    id="birthdate1"
                    name="birthdate1"
                    type="date"
                    value={formData.birthdate1}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Person 2
                </h3>
                
                <div>
                  <Label htmlFor="name2" className="block text-sm font-medium mb-1">
                    Full Name
                  </Label>
                  <Input
                    id="name2"
                    name="name2"
                    type="text"
                    value={formData.name2}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="birthdate2" className="block text-sm font-medium mb-1">
                    Birth Date
                  </Label>
                  <Input
                    id="birthdate2"
                    name="birthdate2"
                    type="date"
                    value={formData.birthdate2}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Calculate Twin Flame Compatibility
              </Button>
              <Button 
                type="button" 
                onClick={handleClear}
                variant="outline"
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" /> Clear
              </Button>
            </div>
          </form>
          
          {error && (
            <div className="mt-6 p-4 border border-destructive/50 bg-destructive/10 rounded-md text-destructive">
              {error}
            </div>
          )}
          
          {result.compatibilityScore !== null && (
            <div className="mt-8 space-y-6">
              <h3 className="text-lg font-semibold mb-4">Twin Flame Compatibility Results</h3>
              
              <div className="border border-primary/30 bg-primary/5 rounded-lg p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Your Twin Flame Compatibility Score:</p>
                  <div className="relative inline-block">
                    <div className="relative w-40 h-40 mx-auto">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-4xl font-bold text-primary">{result.compatibilityScore}%</p>
                      </div>
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="none" 
                          stroke="hsl(var(--border))" 
                          strokeWidth="8" 
                        />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="none" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth="8" 
                          strokeDasharray={`${2 * Math.PI * 40 * result.compatibilityScore / 100} ${2 * Math.PI * 40}`} 
                          strokeDashoffset={2 * Math.PI * 40 * 0.25} 
                          transform="rotate(-90 50 50)" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium mb-2">Interpretation</h4>
                    <p className="text-muted-foreground">{result.interpretation}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="text-md font-medium mb-2 flex items-center">
                        <Heart className="h-4 w-4 text-primary mr-2" />
                        Connection Strengths
                      </h4>
                      <ul className="space-y-1">
                        {result.connectionStrengths?.map((strength, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span> {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium mb-2">Growth Opportunities</h4>
                      <ul className="space-y-1">
                        {result.challenges?.map((challenge, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span> {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-md border border-border">
                <h4 className="text-md font-medium mb-2">What is a Twin Flame?</h4>
                <p className="text-sm text-muted-foreground">
                  A twin flame is believed to be a person who is your other half or your mirror soul. 
                  Unlike soulmates, which can be friends or family members, twin flames are often 
                  described as two halves of the same soul. The connection is often intense, 
                  challenging, and transformative, pushing both individuals toward spiritual growth 
                  and self-discovery.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  onClick={handleClear}
                  className="flex items-center gap-1"
                >
                  <RefreshCw className="h-4 w-4" /> Try With Different Names
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TwinFlame;
