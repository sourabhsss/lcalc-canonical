
import React from 'react';
import FAQSection from '@/components/FAQSection';

const GravelFAQ = () => {
  const faqs = [
    {
      question: "How much gravel do I need for my driveway?",
      answer: "For a standard driveway, you'll need gravel at a depth of 4-6 inches (10-15 cm). To calculate the amount, measure your driveway's length and width in feet, multiply them together to get square footage, then multiply by your desired depth in feet (e.g., 4 inches = 0.33 feet). This gives you the volume in cubic feet. For a typical 24' x 24' driveway at 4 inches deep, you'd need about 192 cubic feet of gravel, which converts to approximately 7.1 cubic yards or 9.6 tons of standard gravel. Add 5-10% extra for compaction and settling."
    },
    {
      question: "What's the difference between gravel, crushed stone, and pea gravel?",
      answer: "These terms are often used interchangeably but have technical differences. Gravel traditionally refers to naturally rounded stone fragments (usually 1/4 inch to 3 inches in size) that have been smoothed by water erosion. Crushed stone is mechanically broken rock with angular, irregular shapes that interlock when compacted, making it ideal for driveways and base layers. Pea gravel is a specific type of small, rounded gravel (typically 1/8 to 3/8 inch in diameter) named for its pea-sized pieces, commonly used for decorative landscaping, walkways, and playgrounds due to its smooth texture and attractive appearance."
    },
    {
      question: "How is gravel typically sold and priced?",
      answer: "Gravel is commonly sold by weight (tons) or volume (cubic yards). Prices typically range from $10-50 per ton or $15-75 per cubic yard, depending on the type, quality, and your location. Decorative gravels like river rock or marble chips tend to be at the higher end of the price range. Most suppliers charge delivery fees that vary based on distance, typically $50-150 per delivery. Small quantities can also be purchased in bags (usually 0.5 cubic feet) from home improvement stores for around $3-7 per bag, though this is significantly more expensive per unit than bulk purchases."
    },
    {
      question: "How do I convert between cubic yards and tons for gravel?",
      answer: "The conversion between cubic yards and tons depends on the gravel's density. On average, standard gravel weighs about 1.4-1.7 tons per cubic yard. For quick estimates: 1 cubic yard of standard gravel ≈ 1.5 tons, 1 ton of standard gravel ≈ 0.67 cubic yards. Different gravel types have different densities: Pea gravel is lighter at around 1.3-1.4 tons per cubic yard, while river rock can be heavier at 1.6-1.8 tons per cubic yard. Our calculator accounts for these differences when providing weight estimates for various gravel types."
    },
    {
      question: "What depth of gravel should I use for different applications?",
      answer: "Recommended gravel depths vary by application: For driveways, use 4-6 inches (10-15 cm) of gravel over a 4-inch compacted base; for walkways and garden paths, 2-3 inches (5-7.5 cm) is typically sufficient; for decorative landscaping, 1-2 inches (2.5-5 cm) provides good coverage; for drainage areas, 3-4 inches (7.5-10 cm) allows proper water flow; and for play areas, 4-5 inches (10-12.5 cm) provides adequate cushioning. These depths may need adjustment based on soil conditions, climate, and intended use. In areas with freeze-thaw cycles or poor drainage, increase depth by 1-2 inches."
    },
    {
      question: "Do I need landscape fabric under my gravel?",
      answer: "Landscape fabric is recommended under gravel in most applications, especially paths, decorative areas, and driveways. The primary benefits include: weed suppression (creating a barrier against weeds); improved drainage while preventing gravel from mixing with soil below; reduced maintenance and extended lifespan of your gravel installation; and stabilization that helps maintain an even surface. Choose a permeable, professional-grade landscape fabric that allows water through while blocking weeds. For heavy-use areas like driveways, consider using a heavier-grade geotextile fabric specifically designed for load-bearing applications."
    },
    {
      question: "How do I keep gravel from spreading or washing away?",
      answer: "To prevent gravel migration: Install edging (plastic, metal, wood, or stone) around the perimeter; use larger stones at the bottom and smaller ones on top for increased stability; ensure proper drainage to prevent water from washing away material; consider stabilization products like gravel grid systems or resin-bound gravel for high-traffic areas; maintain a slight crown or slope for water runoff without erosion; and compact the gravel properly during installation. For steep areas, create 'check dams' or terraces to slow water flow, and consider using angular gravel that interlocks better than rounded types."
    },
    {
      question: "What equipment do I need to install gravel myself?",
      answer: "For a DIY gravel installation, you'll need: measuring tools (tape measure, stakes, and string); excavation tools (shovels, picks, and possibly a rented mini-excavator for larger areas); a rake and a tamper or plate compactor for leveling and compacting; a wheelbarrow for moving material; landscape fabric and cutting tools; edging materials and installation tools; safety equipment (gloves, eye protection, dust mask); and a level and/or slope gauge to ensure proper drainage. For large projects, consider renting equipment like a skid-steer loader or power wheelbarrow to move material efficiently. Most home improvement centers offer equipment rentals by the day or week."
    },
    {
      question: "How long does gravel last, and what maintenance is required?",
      answer: "With proper installation, gravel can last indefinitely, though it will require periodic maintenance. Regular maintenance tasks include: raking to redistribute material every 2-3 months for high-traffic areas; adding fresh gravel every 1-3 years to maintain proper depth (typically 10-15% of the original amount); weeding as needed, especially in spring and summer; addressing drainage issues promptly to prevent erosion; and redefining edges annually. In regions with snow, use caution when shoveling or plowing to minimize gravel displacement. Expect more frequent maintenance for driveways and less for decorative areas."
    },
    {
      question: "Is gravel environmentally friendly?",
      answer: "Gravel has several environmental advantages over impermeable surfaces like concrete or asphalt: It allows water infiltration, reducing runoff and supporting groundwater recharge; requires less energy to produce and install than manufactured pavements; reflects heat better than dark surfaces, reducing the heat island effect; and can often be sourced locally, reducing transportation emissions. However, there are environmental considerations: Quarrying can disrupt habitats and landscapes; dust from gravel surfaces can affect air quality; and without proper edging, gravel can spread into natural areas. To maximize environmental benefits, consider recycled gravel alternatives, install proper drainage, and use natural weed control methods instead of chemicals."
    }
  ];

  return <FAQSection faqs={faqs} title="Gravel Calculator: Frequently Asked Questions" />;
};

export default GravelFAQ;
