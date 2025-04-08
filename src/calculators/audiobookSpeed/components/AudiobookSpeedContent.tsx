
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BookAudio, Clock, FastForward, Headphones } from 'lucide-react';
import { popularAudiobooks, audiobookSpeedBenefits } from '../audiobookSpeedUtils';
import { calculateListeningStats } from '../audiobookSpeedUtils';

const AudiobookSpeedContent: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">The Science of Audiobook Speed Listening</h2>
        <p className="text-muted-foreground mb-4">
          Audiobook speed listening has become increasingly popular as listeners seek to consume more content in less time. Research from the Journal of Educational Psychology suggests that most people can comprehend speech at rates significantly faster than the normal speaking rate of 150-160 words per minute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-primary" />
                Comprehension Research
              </h3>
              <p className="text-muted-foreground">
                Studies have shown that most listeners can comprehend content at 1.5x speed without significant loss in understanding. A 2018 study published in the Journal of Media Psychology found that while comprehension remained strong at speeds up to 2x, retention began to decrease at speeds above 2.5x.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <FastForward className="mr-2 h-5 w-5 text-primary" />
                The "Time Compression" Effect
              </h3>
              <p className="text-muted-foreground">
                Our brains process accelerated speech differently than normal speech. "Time compression" allows us to process information more efficiently, as our minds stay actively engaged with the content. This helps prevent mind-wandering, which is common when listening at normal speeds.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Audiobooks and Their Listening Times</h2>
        <p className="text-muted-foreground mb-4">
          Here's a comparison of listening times for some popular audiobooks at different speeds. Notice how increasing the playback speed can dramatically reduce the time investment needed to finish these titles.
        </p>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Audiobook</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Normal Length (1x)</TableHead>
                <TableHead>At 1.5x Speed</TableHead>
                <TableHead>At 2x Speed</TableHead>
                <TableHead>Time Saved at 2x</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {popularAudiobooks.map((book, index) => {
                const stats1_5x = calculateListeningStats(book.length.hours, book.length.minutes, 1.5);
                const stats2x = calculateListeningStats(book.length.hours, book.length.minutes, 2);
                
                return (
                  <TableRow key={index} className={book.recommended ? "bg-primary/5" : ""}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.length.hours}h {book.length.minutes}m</TableCell>
                    <TableCell>{stats1_5x.adjustedTime.hours}h {stats1_5x.adjustedTime.minutes}m</TableCell>
                    <TableCell>{stats2x.adjustedTime.hours}h {stats2x.adjustedTime.minutes}m</TableCell>
                    <TableCell className="text-green-600">
                      {stats2x.savedTime.hours}h {stats2x.savedTime.minutes}m
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits of Different Playback Speeds</h2>
        <p className="text-muted-foreground mb-4">
          Finding the optimal playback speed depends on your listening experience, the complexity of the content, and your purpose for listening. Here's a guide to the benefits of different speeds:
        </p>
        <div className="grid grid-cols-1 gap-4">
          {audiobookSpeedBenefits.map((item, index) => (
            <Card key={index} className={index === 1 ? "bg-primary/5 border-primary" : ""}>
              <CardContent className="py-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                  {item.speed}x
                </div>
                <div>
                  <p className="text-muted-foreground">{item.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How to Train Your Brain for Speed Listening</h2>
        <p className="text-muted-foreground mb-4">
          Speed listening is a skill that can be developed with practice. Here's a progressive training approach to help you increase your comprehension at higher speeds:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Gradual Speed Increases</h3>
            <p className="text-muted-foreground">
              Start at 1.1x speed and listen for at least 30 minutes. Once comfortable, increase to 1.2x for another audiobook or chapter. Gradually work your way up in increments of 0.1x until you reach your desired speed. Most listeners find their sweet spot between 1.5x and 2x.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">2. Choose Familiar Content First</h3>
            <p className="text-muted-foreground">
              Begin speed listening with familiar genres or authors. Your prior knowledge of the subject matter will help you stay oriented while adapting to the faster pace. Nonfiction with clear structure often works well for beginners.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">3. Active Listening Techniques</h3>
            <p className="text-muted-foreground">
              Practice visualization of the content, take mental notes, and periodically summarize what you've heard. These active listening techniques improve retention and comprehension at higher speeds. Some listeners find that light physical activity (walking, etc.) helps maintain focus.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">4. Adjust Based on Content Type</h3>
            <p className="text-muted-foreground">
              Vary your speed based on content complexity. Simple fiction might be enjoyable at 2x, while dense philosophical works might require 1.3x. Technical materials with unfamiliar terminology often benefit from slower speeds.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reading Statistics and Audiobook Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">Annual Reading Statistics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• The average American reads 12 books per year</li>
                <li>• Audiobook listeners complete an average of 15-20 books annually</li>
                <li>• Speed listeners (1.5x+) report finishing 30+ books per year</li>
                <li>• 54% of audiobook listeners are under the age of 45</li>
                <li>• Audiobook sales grew 12% in 2022, reaching $1.8 billion</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">Common Listening Speeds</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 12% of listeners use normal speed (1.0x)</li>
                <li>• 32% use slight acceleration (1.1x-1.3x)</li>
                <li>• 41% prefer moderate speeds (1.4x-1.8x)</li>
                <li>• 15% use high speeds (1.9x-3.0x)</li>
                <li>• Average preferred speed across all listeners: 1.6x</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">Source: AudioFile Magazine Survey, 2023</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-muted-foreground">
          With the growing popularity of audiobooks, speed listening has become an important tool for knowledge workers, students, and avid readers. According to a 2023 Pew Research study, audiobook usage has increased by 46% since 2018, with speed listening features cited as a major factor in user adoption.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tips for Optimal Audiobook Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-primary" />
                Equipment Considerations
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use high-quality headphones for better comprehension</li>
                <li>• Enable "Voice Boost" features when available</li>
                <li>• Consider bone-conduction headphones for awareness</li>
                <li>• Use sleep timers for bedtime listening</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <BookAudio className="mr-2 h-5 w-5 text-primary" />
                Content Selection
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Choose professional narrations for better clarity</li>
                <li>• Sample narrators before committing to long books</li>
                <li>• Consider abridged versions for very dense works</li>
                <li>• Multi-voice performances often require slower speeds</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Listening Habits
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Schedule dedicated listening time for complex material</li>
                <li>• Take breaks every 45-60 minutes when learning</li>
                <li>• Combine with note-taking for better retention</li>
                <li>• Try "read-along" with e-book for difficult content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AudiobookSpeedContent;
