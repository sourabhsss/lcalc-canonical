
import React from 'react';
import FAQSection from '@/components/FAQSection';

const AsphaltFAQ = () => {
  const faqs = [
    {
      question: "How accurate is this asphalt calculator?",
      answer: "This calculator provides an estimation based on standard asphalt density values (145 pounds per cubic foot or 2.4 tonnes per cubic meter). For professional construction projects, we recommend adding 5-10% extra material to account for compaction, waste, and variations in terrain. For precise measurements, consult with a professional contractor who can assess your specific project requirements."
    },
    {
      question: "What thickness of asphalt should I use for my driveway?",
      answer: "For residential driveways with light vehicle traffic, a thickness of 2-3 inches (5-7.5 cm) is generally recommended. The base layer should be 4-6 inches (10-15 cm) of compacted gravel. For heavier traffic areas or commercial applications, consider 3-4 inches (7.5-10 cm) of asphalt over a 6-10 inch (15-25 cm) compacted gravel base. Climate factors like freeze-thaw cycles might require adjustments to these recommendations."
    },
    {
      question: "How is asphalt typically sold?",
      answer: "Asphalt is usually sold by weight rather than volume, typically in tons (US) or tonnes (metric). The price can vary significantly based on your location, current oil prices, project size, and seasonal demands. For small residential projects, you might need to order a minimum quantity (often 1-2 tons). Many suppliers also charge delivery fees based on distance."
    },
    {
      question: "What's the difference between asphalt and blacktop?",
      answer: "Asphalt and blacktop are often used interchangeably, but there are technical differences. Both contain bitumen (a byproduct of petroleum distillation) and stone aggregate. Blacktop typically has a higher stone content and is heated at higher temperatures (around 300°F/149°C) compared to asphalt (usually heated at 250°F/121°C). Blacktop is often used for residential applications, while commercial asphalt might have different composition for durability."
    },
    {
      question: "How long should I wait before using a new asphalt surface?",
      answer: "You should wait at least 24-48 hours before driving on a newly paved asphalt surface, depending on temperature and humidity conditions. For parking, it's best to wait 3-5 days. During hot weather (above 85°F/29°C), asphalt remains soft for longer, so you might need to wait additional time. Complete curing takes about 6-12 months, during which the asphalt will harden to its final strength."
    },
    {
      question: "Do I need permits to pave my driveway with asphalt?",
      answer: "Permit requirements vary by location. Many residential areas require permits for new driveways or significant modifications to existing ones. Some jurisdictions have regulations about impermeable surfaces and drainage requirements. Check with your local building department or municipal office before starting your project to ensure compliance with local codes and avoid potential fines."
    },
    {
      question: "How long does asphalt paving last?",
      answer: "With proper installation and maintenance, an asphalt driveway typically lasts 15-20 years. Commercial parking lots and roads may last 20-30 years with regular maintenance. Factors affecting longevity include installation quality, climate conditions, usage intensity, and maintenance practices. Regular sealcoating every 2-3 years can significantly extend the life of your asphalt surface."
    },
    {
      question: "What maintenance does asphalt require?",
      answer: "Asphalt requires regular maintenance for longevity: 1) Sealcoating every 2-3 years to protect from UV rays, water damage, and chemical spills; 2) Crack filling as soon as cracks appear to prevent water penetration; 3) Regular cleaning to remove debris and prevent staining; 4) Addressing drainage issues to prevent water pooling; and 5) Avoiding sharp or pointed objects that can penetrate the surface."
    },
    {
      question: "Can asphalt be installed in cold weather?",
      answer: "Asphalt installation is challenging in cold weather since the material cools rapidly, making it difficult to properly compact. Ideally, asphalt should be installed when temperatures are consistently above 50°F (10°C). Some specialized mixes can be installed at lower temperatures, but quality and longevity may be compromised. Most professional contractors avoid installation during winter months in cold climates."
    },
    {
      question: "Is asphalt environmentally friendly?",
      answer: "Asphalt is one of the most recycled materials in the construction industry, with over 80% of reclaimed asphalt pavement being recycled. Modern production methods have reduced emissions by 97% since the 1970s. Additionally, porous asphalt options allow water filtration, reducing runoff and replenishing groundwater. While asphalt production does consume energy and resources, advancements in warm-mix asphalt technology have reduced energy requirements by 20-30% compared to traditional hot-mix methods."
    }
  ];

  return <FAQSection faqs={faqs} title="Asphalt Calculator: Frequently Asked Questions" />;
};

export default AsphaltFAQ;
