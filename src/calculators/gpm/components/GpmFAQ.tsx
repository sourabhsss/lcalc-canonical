
import React from 'react';
import FAQSection from '@/components/FAQSection';

const GpmFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What does GPM stand for and why is it important?",
      answer: "GPM stands for Gallons Per Minute, which measures the flow rate of water or other fluids. It's important because it helps determine the capacity of water systems, fixtures, and appliances. Without proper GPM calculations, you might install pipes that are too small (causing low pressure and flow) or too large (wasting money and resources). For residential homes, knowing your GPM helps ensure adequate water pressure for multiple fixtures running simultaneously. For irrigation, it ensures your sprinklers will have sufficient water to operate properly. In commercial and industrial applications, proper GPM calculations are critical for system efficiency and performance."
    },
    {
      question: "How do I determine what GPM I need for my home?",
      answer: "To determine the GPM needs for your home, consider both peak demand and average usage. Count the number of fixtures and appliances that might run simultaneously during peak usage times. As a general guideline: Small homes (1-2 people) typically need 6-12 GPM; Average homes (3-4 people) need 12-16 GPM; Large homes (5+ people) need 16-25 GPM. For specific fixtures, typical needs are: Showers (1.5-2.5 GPM), Bathroom faucets (1.0-2.2 GPM), Kitchen faucets (1.5-2.5 GPM), Dishwashers (2-3 GPM), Washing machines (4-12 GPM). Add these together for fixtures likely to be used simultaneously to determine your peak demand. Consulting with a plumbing professional can provide a more precise calculation based on your specific home layout and usage patterns."
    },
    {
      question: "What's the difference between GPM and water pressure?",
      answer: "GPM (Gallons Per Minute) and water pressure (measured in PSI - Pounds per Square Inch) are related but distinct concepts in water systems. GPM measures the volume of water flowing through a system in a given time period, while pressure measures the force exerted by the water. Think of it this way: pressure is the force pushing the water, while flow rate (GPM) is how much water actually moves as a result. You can have high pressure but low flow (like a pinhole leak in a high-pressure pipe), or high flow with relatively low pressure (like a wide-open river). In home plumbing, typical water pressure ranges from 40-80 PSI, while flow rates vary by fixture. Both measurements are important: adequate pressure ensures water reaches upper floors and distant fixtures, while sufficient flow ensures you can run multiple fixtures simultaneously."
    },
    {
      question: "How do I measure the GPM of my current water supply?",
      answer: "Measuring your current water supply's GPM is relatively simple using the container method: 1) Find a container with a known volume (like a 5-gallon bucket). 2) Turn on the water outlet fully and time how long it takes to fill the container. 3) Calculate: GPM = Container volume in gallons ÷ Time to fill in minutes. For example, if a 5-gallon bucket fills in 30 seconds, your calculation would be: 5 gallons ÷ (30 seconds ÷ 60 seconds/minute) = 5 gallons ÷ 0.5 minutes = 10 GPM. For more precise measurements, especially for whole-house flow rates, you might consider installing a flow meter on your main water line or hiring a plumber who can use professional testing equipment."
    },
    {
      question: "Why is my shower's GPM lower than the manufacturer's specification?",
      answer: "Several factors could cause your shower's actual flow rate to be lower than the manufacturer's specification: 1) Water pressure issues: Low household water pressure can't push water through the showerhead at the rated GPM. 2) Flow restrictors: Most modern showerheads include built-in flow restrictors to meet water conservation requirements. 3) Mineral buildup: Calcium and other mineral deposits can clog showerhead openings, reducing flow. 4) Plumbing restrictions: Undersized pipes, partially closed valves, or pipe corrosion can restrict flow before it reaches the shower. 5) Multiple fixtures running: Using multiple water fixtures simultaneously can reduce available flow to each fixture. To address these issues, you might try cleaning the showerhead with vinegar to remove mineral deposits, checking that all valves are fully open, or consulting a plumber to assess your home's overall water pressure and plumbing condition."
    },
    {
      question: "How can pipe diameter affect GPM?",
      answer: "Pipe diameter has an exponential effect on potential flow capacity. According to fluid dynamics principles, flow capacity increases with approximately the square of the diameter. This means doubling the pipe diameter can increase the potential flow capacity by about four times. For example, a 1/2-inch pipe typically maxes out around 10 GPM, while a 3/4-inch pipe (only 50% larger in diameter) can handle about 18 GPM (nearly double the flow). A 1-inch pipe can handle approximately 30 GPM. This exponential relationship is why even small increases in pipe diameter can significantly improve flow rates. However, larger pipes are more expensive and take up more space, so system design requires balancing adequate flow capacity with practical constraints. Using pipes that are too large can also lead to problems like water stagnation and inefficient operation."
    },
    {
      question: "What GPM do I need for an irrigation system?",
      answer: "The GPM requirements for an irrigation system depend on several factors including coverage area, sprinkler types, soil conditions, and plant water needs. For typical residential systems: Spray heads usually require 0.5-3 GPM per head, Rotor heads typically need 2-7 GPM each, Drip irrigation zones might use 0.5-4 GPM per 100 feet of tubing. To calculate total system GPM needs, determine how many sprinklers will operate simultaneously in each zone, then add their individual GPM requirements. For example, if a zone has 5 spray heads each requiring 2 GPM, that zone needs 10 GPM capacity. Design your system so that each zone's total GPM requirement doesn't exceed your available water supply's flow rate. Most residential water supplies can provide 8-20 GPM. If your calculations show higher requirements, you'll need to create more zones that operate sequentially rather than simultaneously."
    },
    {
      question: "How do GPM requirements differ for well systems versus municipal water?",
      answer: "Well systems and municipal water supplies differ significantly in how GPM is considered. For municipal water, the supply GPM is typically consistent and predetermined by your service connection size and local infrastructure. You simply need to ensure your home's plumbing can handle your usage patterns. With well systems, GPM is limited by both the pump capacity and the well's recharge rate. A well might have a pump rated for 10 GPM, but if the well only recharges at 5 GPM, sustained usage above 5 GPM will eventually deplete the well. Well systems typically include pressure tanks to provide short-term higher flow rates than the well itself can sustain continuously. When designing a well system, the pump GPM should be matched to your peak domestic needs while considering the well's recharge rate. For homes with irrigation or other high-demand applications, larger pressure tanks or separate storage systems might be necessary to accommodate flow needs above the well's sustainable yield."
    },
    {
      question: "What's the relationship between GPM and energy consumption?",
      answer: "The relationship between GPM and energy consumption is significant, particularly for pumped systems and water heating. For pumping systems, higher GPM requirements generally demand more powerful pumps, which consume more electricity. The energy required to pump water increases with both flow rate (GPM) and pressure (head). For example, doubling the flow rate typically requires more than double the pump horsepower. For water heating, higher flow rates require greater heating capacity to maintain the desired temperature. Standard tank water heaters are rated by how many GPM they can heat to a specified temperature rise. Tankless water heaters explicitly list their GPM capacity at different temperature rises. A higher flow rate through any heating system requires more energy input to maintain the same temperature. Energy-efficient systems often focus on reducing necessary GPM while maintaining functionality, such as low-flow fixtures or recirculation systems that reduce water waste while waiting for hot water to reach fixtures."
    },
    {
      question: "Can I increase the GPM in my existing plumbing system?",
      answer: "Yes, you can potentially increase the GPM in your existing plumbing system through several methods: 1) Clean or replace fixtures: Remove mineral deposits from faucet aerators and showerheads, or upgrade to higher-flow models (within legal limits). 2) Check and open valves: Ensure all supply valves are fully open, including main shutoffs and fixture stops. 3) Install a booster pump: If pressure is adequate but flow is insufficient, a booster pump can increase available GPM. 4) Upgrade critical pipe sections: Replacing smaller diameter pipes in key areas with larger ones can reduce bottlenecks. 5) Parallel piping: Adding parallel pipes for high-demand areas can increase flow capacity. 6) Pressure regulator adjustment: If pressure is artificially limited, adjusting or replacing the pressure regulator might help (but stay within safe limits for your system). Before making significant changes, consult a licensed plumber to ensure modifications are safe, code-compliant, and won't create new problems elsewhere in your system."
    }
  ];

  return (
    <FAQSection faqs={faqs} />
  );
};

export default GpmFAQ;
