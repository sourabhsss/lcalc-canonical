
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, AlarmClock, Brain, Zap, Heart, Coffee, Clock } from 'lucide-react';

const SleepContent: React.FC = () => {
  return (
    <div className="space-y-8 mb-12">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Understanding Sleep Cycles</h2>
          
          <p className="mb-4">
            Sleep isn't a uniform state but rather a complex cycle of different stages that your brain and body move through throughout the night. Understanding these cycles can help you optimize your sleep schedule and wake up feeling more refreshed.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">The 90-Minute Sleep Cycle</h3>
            <p className="mb-3">
              The average sleep cycle lasts approximately 90 minutes, during which you progress through different stages of sleep:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium text-primary mb-2">Stage 1: Light Sleep</h4>
                <p className="text-sm text-muted-foreground">Transition between wakefulness and sleep. Lasts 1-5 minutes. Easy to wake from.</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium text-primary mb-2">Stage 2: Core Sleep</h4>
                <p className="text-sm text-muted-foreground">Body temperature drops, heart rate slows. Makes up about 50% of total sleep time.</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium text-primary mb-2">Stage 3: Deep Sleep</h4>
                <p className="text-sm text-muted-foreground">Most restorative stage. Difficult to wake from. Physical recovery happens here.</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium text-primary mb-2">REM Sleep</h4>
                <p className="text-sm text-muted-foreground">Dreaming occurs. Brain is highly active. Important for memory consolidation and learning.</p>
              </div>
            </div>
            
            <p>
              Throughout the night, you cycle through these stages multiple times. Early sleep cycles contain more deep sleep, while later cycles have more REM sleep. Waking up during light sleep (at the end of a cycle) leaves you feeling more refreshed and alert.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Why Sleep Cycles Matter</h3>
            <p>
              Timing your sleep to complete full cycles is important because waking up during deep sleep can cause "sleep inertia" – that groggy, disoriented feeling that can last for minutes or even hours. Our Sleep Calculator helps you time your bedtime or wake-up time to align with the completion of sleep cycles, optimizing your chances of waking during light sleep and feeling refreshed.
            </p>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-900">
            <h3 className="text-lg font-semibold mb-2 text-amber-800 dark:text-amber-400">Sleep Cycle Statistics</h3>
            <ul className="list-disc list-inside text-amber-700 dark:text-amber-300 space-y-1">
              <li>The average adult completes 4-6 sleep cycles per night</li>
              <li>Each cycle lasts approximately 90 minutes (range: 80-110 minutes)</li>
              <li>Deep sleep comprises about 13-23% of total sleep in healthy adults</li>
              <li>REM sleep makes up about 20-25% of total sleep time</li>
              <li>The first REM period typically occurs about 90 minutes after falling asleep</li>
              <li>It takes the average person 10-20 minutes to fall asleep</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">The Science of Sleep</h2>
          
          <Tabs defaultValue="benefits">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="benefits">Health Benefits</TabsTrigger>
              <TabsTrigger value="deprivation">Sleep Deprivation</TabsTrigger>
              <TabsTrigger value="improvement">Sleep Improvement</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-50 rounded-full">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Cognitive Function</h3>
                  <p className="text-muted-foreground">
                    Quality sleep enhances memory consolidation, problem-solving abilities, creativity, and decision-making. Research from the National Sleep Foundation shows that well-rested individuals perform 20-30% better on cognitive tests compared to sleep-deprived peers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-50 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Physical Health</h3>
                  <p className="text-muted-foreground">
                    During sleep, your body repairs tissues, synthesizes proteins, and releases growth hormones. Studies have shown that consistent, quality sleep is associated with a 40% reduction in heart disease risk and helps maintain a healthy immune system, reducing susceptibility to illness.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-50 rounded-full">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Energy & Performance</h3>
                  <p className="text-muted-foreground">
                    Athletes who get optimal sleep show 10-30% improvements in speed, accuracy, and reaction times. Stanford University research found that basketball players who extended their sleep to 10 hours improved sprint times by 5% and free throw accuracy by 9%.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="deprivation" className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-50 rounded-full">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Cognitive Impairment</h3>
                  <p className="text-muted-foreground">
                    Just one night of poor sleep can impair cognitive function similar to having a blood alcohol concentration of 0.10% – legally drunk in most countries. After 17-19 hours without sleep, performance on cognitive tests decreases to a level equivalent to someone with a BAC of 0.05%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-50 rounded-full">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Health Risks</h3>
                  <p className="text-muted-foreground">
                    Chronic sleep deprivation increases risk of numerous health conditions: 48% increased risk of developing heart disease, 36% increased risk of colorectal cancer, 75% higher risk of developing type 2 diabetes, and a significantly weakened immune system, with studies showing sleep-deprived individuals are 3x more likely to catch a cold.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-50 rounded-full">
                  <AlarmClock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sleep Debt</h3>
                  <p className="text-muted-foreground">
                    The CDC reports that 1 in 3 Americans don't get enough sleep regularly. The effects of sleep debt are cumulative – losing just 1 hour of sleep per night for a week creates the equivalent of a full night's sleep debt. Research suggests it takes four days to fully recover from one hour of lost sleep.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="improvement" className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Consistent Schedule</h3>
                  <p className="text-muted-foreground">
                    Harvard researchers found that maintaining a regular sleep schedule strengthens circadian rhythms and improves sleep quality. Participants who kept consistent sleep times showed 50% improvement in sleep efficiency compared to those with irregular schedules. Try to go to bed and wake up at the same time every day, even on weekends.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Coffee className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sleep Hygiene</h3>
                  <p className="text-muted-foreground">
                    A National Sleep Foundation study found that people who followed proper sleep hygiene practices fell asleep 42% faster and experienced 65% fewer nighttime awakenings. Key practices include: limiting blue light exposure before bed, keeping your bedroom cool (65-68°F/18-20°C is optimal), avoiding caffeine within 6 hours of bedtime, and creating a relaxing pre-sleep routine.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Moon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sleep Environment</h3>
                  <p className="text-muted-foreground">
                    Studies show that sleep environment improvements can increase total sleep time by 35-55 minutes per night. Blackout curtains can block 99% of outside light. White noise machines can mask disruptive sounds and improve sleep quality by 25-30%. A comfortable mattress appropriate for your sleep position can reduce back pain by up to 57% and improve sleep quality by 60%.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Sleep Needs Across the Lifespan</h2>
          
          <p className="mb-6">
            Sleep requirements change throughout life. The National Sleep Foundation and American Academy of Sleep Medicine recommend the following sleep durations:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 text-left border border-border">Age Group</th>
                  <th className="p-2 text-left border border-border">Recommended Sleep</th>
                  <th className="p-2 text-left border border-border">Sleep Cycles</th>
                  <th className="p-2 text-left border border-border">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-border">Newborns (0-3 months)</td>
                  <td className="p-2 border border-border">14-17 hours</td>
                  <td className="p-2 border border-border">Different cycle structure</td>
                  <td className="p-2 border border-border">Sleep in multiple periods throughout day and night</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Infants (4-11 months)</td>
                  <td className="p-2 border border-border">12-15 hours</td>
                  <td className="p-2 border border-border">Different cycle structure</td>
                  <td className="p-2 border border-border">Includes naps, starting to develop circadian rhythms</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Toddlers (1-2 years)</td>
                  <td className="p-2 border border-border">11-14 hours</td>
                  <td className="p-2 border border-border">7-9 cycles</td>
                  <td className="p-2 border border-border">Typically includes one nap daily</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Preschoolers (3-5 years)</td>
                  <td className="p-2 border border-border">10-13 hours</td>
                  <td className="p-2 border border-border">7-9 cycles</td>
                  <td className="p-2 border border-border">May still need afternoon nap</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">School-age (6-13 years)</td>
                  <td className="p-2 border border-border">9-11 hours</td>
                  <td className="p-2 border border-border">6-7 cycles</td>
                  <td className="p-2 border border-border">Critical for learning and development</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Teenagers (14-17 years)</td>
                  <td className="p-2 border border-border">8-10 hours</td>
                  <td className="p-2 border border-border">5-7 cycles</td>
                  <td className="p-2 border border-border">Biological clock shifts, making them naturally sleep and wake later</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Young Adults (18-25 years)</td>
                  <td className="p-2 border border-border">7-9 hours</td>
                  <td className="p-2 border border-border">5-6 cycles</td>
                  <td className="p-2 border border-border">Often most sleep-deprived demographic</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Adults (26-64 years)</td>
                  <td className="p-2 border border-border">7-9 hours</td>
                  <td className="p-2 border border-border">5-6 cycles</td>
                  <td className="p-2 border border-border">Consistent schedule becomes increasingly important</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Older Adults (65+ years)</td>
                  <td className="p-2 border border-border">7-8 hours</td>
                  <td className="p-2 border border-border">4-5 cycles</td>
                  <td className="p-2 border border-border">Sleep becomes lighter and more fragmented</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            <strong>Note:</strong> Individual needs may vary. Some people naturally need more or less sleep than the recommended ranges. The most important indicator is how you feel during the day – consistently feeling well-rested and alert suggests you're getting adequate sleep.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Common Sleep Myths Debunked</h2>
          
          <div className="space-y-6">
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-lg mb-2">Myth: You can "catch up" on sleep on weekends</h3>
              <p className="text-muted-foreground">
                <strong className="text-red-500">False.</strong> While you might feel more rested after sleeping in on weekends, research shows you can't fully recover from a week of sleep deprivation with just two nights of extended sleep. A University of Colorado Boulder study found that "recovery sleep" on weekends doesn't prevent metabolic dysregulation and may actually disrupt your circadian rhythm further. Consistent sleep and wake times are much more effective than attempting to catch up.
              </p>
            </div>
            
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-lg mb-2">Myth: Older adults need less sleep</h3>
              <p className="text-muted-foreground">
                <strong className="text-red-500">Partly false.</strong> While sleep patterns and architecture change with age (less deep sleep, more awakenings), older adults still need about 7-8 hours of total sleep. The myth originates from the fact that older adults often have more difficulty obtaining quality sleep due to changes in circadian rhythm, increased medication use, and higher prevalence of sleep disorders – not because they need less sleep.
              </p>
            </div>
            
            <div className="border-b border-border pb-4">
              <h3 className="font-semibold text-lg mb-2">Myth: Alcohol helps you sleep better</h3>
              <p className="text-muted-foreground">
                <strong className="text-red-500">False.</strong> While alcohol may help you fall asleep faster, it significantly reduces sleep quality. Research shows alcohol disrupts REM sleep (the mentally restorative stage), increases sleep fragmentation, and worsens sleep apnea symptoms. Even moderate alcohol consumption can reduce sleep quality by 24% according to studies. For better sleep, avoid alcohol within 3-4 hours of bedtime.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Myth: Everyone needs 8 hours of sleep</h3>
              <p className="text-muted-foreground">
                <strong className="text-amber-500">Partly true.</strong> While 7-9 hours is recommended for most adults, individual sleep needs vary based on genetics, activity level, overall health, and age. About 5% of the population are "short sleepers" who function well on 4-6 hours, while others may require 9+ hours. The key is consistency and how you feel – if you consistently wake up refreshed without an alarm after 7 hours, that's likely your optimal duration.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepContent;
