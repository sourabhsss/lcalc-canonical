import React from 'react';
import Link from 'next/link';

const SwimPaceContent: React.FC = () => {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Understanding Swim Pace Calculations</h2>
      
      <p>
        Swimming pace is a crucial metric for swimmers of all levels, from beginners to elite athletes. 
        Understanding your swim pace helps you track progress, set realistic goals, and develop effective 
        training strategies. Our swim pace calculator simplifies this process by providing accurate pace calculations 
        and additional metrics to enhance your swimming performance.
      </p>
      
      <h3>What is Swim Pace?</h3>
      
      <p>
        Swim pace refers to the time it takes to swim a specific distance, typically measured in minutes and seconds 
        per 100 meters or 100 yards. It's similar to pace in running, but specific to swimming disciplines. Pace is 
        particularly important in swimming because it helps athletes maintain consistent energy expenditure throughout 
        a race or training session, preventing early fatigue and optimizing performance.
      </p>
      
      <p>
        Different swimming events and training purposes require different pace calculations:
      </p>
      
      <ul>
        <li><strong>Sprint pace:</strong> Short, high-intensity efforts (50m, 100m)</li>
        <li><strong>Middle-distance pace:</strong> Balanced speed and endurance (200m, 400m)</li>
        <li><strong>Distance pace:</strong> Endurance-focused (800m, 1500m, open water)</li>
        <li><strong>Threshold pace:</strong> Training at lactate threshold for endurance improvement</li>
        <li><strong>Recovery pace:</strong> Slower swimming for active recovery between intense sessions</li>
      </ul>
      
      <h3>How Does Our Swim Pace Calculator Work?</h3>
      
      <p>
        Our calculator uses the relationship between distance and time to determine various swimming metrics:
      </p>
      
      <ol>
        <li>
          <strong>Basic Pace Calculation:</strong> For swimming pace, we divide the time taken by the distance covered, then 
          multiply by the standard unit (typically 100 meters/yards).
          <br />
          <code>Pace = (Total Time ÷ Total Distance) × 100</code>
        </li>
        <li>
          <strong>Converting Between Units:</strong> Our calculator handles conversions between meters, yards, kilometers, and miles 
          automatically, making it versatile for pools of different lengths and open water swimming.
        </li>
        <li>
          <strong>Additional Metrics:</strong> Beyond basic pace, we calculate:
          <ul>
            <li>Swimming speed in different units (m/s, km/h, mph)</li>
            <li>Estimated calorie burn based on duration and typical energy expenditure</li>
            <li>Swim level classification based on 100m pace benchmarks</li>
          </ul>
        </li>
      </ol>
      
      <h3>Average Swimming Paces by Level</h3>
      
      <p>
        Swimming speeds vary widely depending on skill level, age, and technique. Here are some general benchmarks 
        for 100m freestyle pace:
      </p>
      
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Swimmer Level</th>
            <th className="border p-2">100m Pace (min:sec)</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Beginner</td>
            <td className="border p-2">2:00-3:00+</td>
            <td className="border p-2">New to swimming, still developing basic technique</td>
          </tr>
          <tr>
            <td className="border p-2">Improving</td>
            <td className="border p-2">1:40-2:00</td>
            <td className="border p-2">Comfortable in water, developing endurance</td>
          </tr>
          <tr>
            <td className="border p-2">Intermediate</td>
            <td className="border p-2">1:25-1:40</td>
            <td className="border p-2">Good technique, regular training</td>
          </tr>
          <tr>
            <td className="border p-2">Advanced</td>
            <td className="border p-2">1:10-1:25</td>
            <td className="border p-2">Strong swimmer, consistent training</td>
          </tr>
          <tr>
            <td className="border p-2">Elite</td>
            <td className="border p-2">Under 1:00</td>
            <td className="border p-2">Competitive swimmer, excellent technique</td>
          </tr>
        </tbody>
      </table>
      
      <p>
        Note that these times are for freestyle swimming. Other strokes typically have slower average paces, 
        with butterfly and breaststroke generally being the slowest, backstroke in the middle, and freestyle 
        being the fastest for most swimmers.
      </p>
      
      <h3>The Importance of Pool Length</h3>
      
      <p>
        Swimming pools come in various standard lengths, which can impact pace calculations and performance:
      </p>
      
      <ul>
        <li>
          <strong>25-meter/25-yard pools:</strong> Common for recreational and training facilities. More turns required, 
          which can either slow swimmers down (if turns are weak) or speed them up (if turns are strong with good push-offs).
        </li>
        <li>
          <strong>50-meter pools (Olympic size):</strong> Used for international competition. Fewer turns required, providing 
          a better measure of pure swimming speed and endurance.
        </li>
      </ul>
      
      <p>
        When tracking your progress, it's important to compare times in the same pool length, as times can differ 
        significantly between 25m and 50m pools, even for the same swimmer at the same effort level.
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
        alt="Olympic swimming pool" 
        className="my-6 rounded-lg w-full max-w-3xl mx-auto"
      />
      
      <h3>Practical Applications of Swim Pace</h3>
      
      <h4>Training and Improvement</h4>
      
      <p>
        Understanding your swim pace enables you to:
      </p>
      
      <ul>
        <li><strong>Set specific workout targets</strong> (e.g., "10 × 100m at 1:30 pace")</li>
        <li><strong>Track progress</strong> over time as your fitness and technique improve</li>
        <li><strong>Practice negative splitting</strong> (swimming the second half faster than the first)</li>
        <li><strong>Develop pace awareness</strong> to optimize race performance</li>
      </ul>
      
      <h4>Race Planning</h4>
      
      <p>
        For competitive swimmers, pace calculation is essential for:
      </p>
      
      <ul>
        <li>
          <strong>Setting realistic race goals</strong> based on training performance
        </li>
        <li>
          <strong>Developing race strategies</strong> for different events (e.g., a 400m race might use a different 
          pacing strategy than a 1500m)
        </li>
        <li>
          <strong>Predicting finish times</strong> for new distances based on known performances
        </li>
      </ul>
      
      <h4>Triathlon Preparation</h4>
      
      <p>
        Triathletes use swim pace calculations to:
      </p>
      
      <ul>
        <li>Estimate swim leg completion time</li>
        <li>Balance effort across swimming, cycling, and running legs</li>
        <li>Set appropriate training intensities for each discipline</li>
      </ul>
      
      <p>
        If you're training for a triathlon, you might also find our <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link> helpful 
        for understanding your daily energy expenditure and nutritional needs during intense training periods.
      </p>
      
      <h3>Techniques to Improve Your Swim Pace</h3>
      
      <p>
        Looking to get faster in the water? These strategies can help improve your swim pace:
      </p>
      
      <ol>
        <li>
          <strong>Technique refinement:</strong> Improving your stroke efficiency can lead to dramatic pace improvements 
          without requiring more physical effort. Consider video analysis or coaching.
        </li>
        <li>
          <strong>Interval training:</strong> Swimming sets with specific rest periods (e.g., 10 × 50m with 15 seconds rest) 
          helps build speed and endurance.
        </li>
        <li>
          <strong>Threshold training:</strong> Working at your lactate threshold (comfortably hard pace) improves your 
          body's ability to process lactate and maintain faster paces.
        </li>
        <li>
          <strong>Strength training:</strong> Developing core, shoulder, and leg strength supports better 
          swimming technique and power. Our <Link href="/standard-deviation-calculator" className="text-primary hover:underline">Standard Deviation Calculator</Link> can 
          help you track and analyze your strength gains over time.
        </li>
        <li>
          <strong>Recovery optimization:</strong> Proper rest between workouts allows adaptation and improvement. 
          Use our <Link href="/sleep-calculator" className="text-primary hover:underline">Sleep Calculator</Link> to ensure you're getting adequate recovery.
        </li>
      </ol>
      
      <h3>Calorie Burning and Swimming</h3>
      
      <p>
        Swimming is an excellent form of exercise that can burn a significant number of calories. The exact energy 
        expenditure depends on:
      </p>
      
      <ul>
        <li><strong>Swimming intensity and pace</strong></li>
        <li><strong>Stroke type</strong> (butterfly typically burns more calories than freestyle)</li>
        <li><strong>Swimmer's weight and body composition</strong></li>
        <li><strong>Water temperature</strong> (cooler water requires more energy)</li>
      </ul>
      
      <p>
        On average, moderate-pace swimming burns approximately 500-700 calories per hour, making it comparable to 
        other aerobic activities like jogging or cycling. For a more personalized estimate of your daily caloric needs, 
        check out our <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link>.
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
        alt="Swimmer doing freestyle stroke" 
        className="my-6 rounded-lg w-full max-w-3xl mx-auto"
      />
      
      <h3>Different Swimming Strokes and Their Paces</h3>
      
      <p>
        Each swimming stroke has its own characteristics that affect average pace:
      </p>
      
      <h4>Freestyle (Front Crawl)</h4>
      
      <p>
        The fastest and most efficient stroke for most swimmers. World-class male swimmers can maintain 
        100m paces under 50 seconds, while elite females typically achieve under 55 seconds.
      </p>
      
      <h4>Backstroke</h4>
      
      <p>
        Generally 5-10% slower than freestyle for the same swimmer. The upward body position creates 
        more drag, though it has the advantage of unrestricted breathing.
      </p>
      
      <h4>Breaststroke</h4>
      
      <p>
        Typically 15-20% slower than freestyle due to the recovery phase that creates significant 
        deceleration between propulsive movements. However, it's often the easiest stroke for beginners.
      </p>
      
      <h4>Butterfly</h4>
      
      <p>
        The most technically demanding and energy-intensive stroke, usually 5-15% slower than freestyle 
        for trained swimmers. The double arm recovery and undulating body movement require significant power.
      </p>
      
      <p>
        When using our calculator, keep in mind that different strokes will produce different paces, even 
        with the same effort level.
      </p>
      
      <h3>Open Water Swimming Considerations</h3>
      
      <p>
        Open water swimming presents unique challenges that affect pace calculations:
      </p>
      
      <ul>
        <li>
          <strong>Variable conditions:</strong> Currents, waves, and wind can significantly impact swim speed
        </li>
        <li>
          <strong>Navigation:</strong> The need to sight landmarks and stay on course adds time
        </li>
        <li>
          <strong>Temperature:</strong> Colder water requires more energy and can slow swimmers down
        </li>
        <li>
          <strong>Distance accuracy:</strong> Precise distance measurement is challenging in open water
        </li>
      </ul>
      
      <p>
        When using our calculator for open water swimming, expect actual times to be 5-15% slower than 
        equivalent pool performances. Experienced open water swimmers develop techniques to minimize these effects.
      </p>
      
      <h3>Tracking Progress Over Time</h3>
      
      <p>
        Regular use of our swim pace calculator allows you to:
      </p>
      
      <ol>
        <li>Establish your current baseline performance</li>
        <li>Set specific, measurable goals for improvement</li>
        <li>Monitor changes in your swimming efficiency over weeks and months</li>
        <li>Identify patterns in your training response</li>
      </ol>
      
      <p>
        For effective progress tracking, record your results consistently, ideally under similar conditions 
        (same time of day, same pool, similar workout context). Our <Link href="/standard-deviation-calculator" className="text-primary hover:underline">Standard Deviation Calculator</Link> can 
        help you analyze the consistency of your swim performances.
      </p>
      
      <h3>Conclusion</h3>
      
      <p>
        Whether you're a competitive swimmer looking to shave seconds off your race time, a fitness swimmer 
        tracking your progress, or a triathlete preparing for your next event, understanding and tracking 
        your swim pace is essential. Our calculator provides the tools you need to measure, analyze, and 
        improve your swimming performance.
      </p>
      
      <p>
        Remember that improvement takes time and consistent effort. Use this calculator regularly to track 
        your progress, set realistic goals, and celebrate your achievements along the way.
      </p>
      
      <p>
        For more fitness and performance tools, explore our other calculators like the <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link> for 
        energy expenditure estimates and the <Link href="/dunk-calculator" className="text-primary hover:underline">Dunk Calculator</Link> for vertical leap assessment.
      </p>
    </div>
  );
};

export default SwimPaceContent;
