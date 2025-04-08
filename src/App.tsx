import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from '@/pages/NotFound';

// Import all calculator pages
import APLangCalculator from '@/pages/APLangCalculator';
import AsphaltCalculator from '@/pages/AsphaltCalculator';
import HalfBirthdayCalculator from '@/pages/HalfBirthdayCalculator';
import AngelNumberCalculator from '@/pages/AngelNumberCalculator';
import StockAverageCalculator from '@/pages/StockAverageCalculator';
import MaleDelusionCalculator from '@/pages/MaleDelusionCalculator';
import FemaleDelusionCalculator from '@/pages/FemaleDelusionCalculator';

const App: React.FC = () => {
  const pathname = usePathname();

  // Map routes to components
  const routes: { [key: string]: React.FC } = {
    '/ap-lang-calculator': APLangCalculator,
    '/asphalt-calculator': AsphaltCalculator,
    '/half-birthday-calculator': HalfBirthdayCalculator,
    '/angel-number-calculator': AngelNumberCalculator,
    '/stock-average-calculator': StockAverageCalculator,
    '/male-delusion-calculator': MaleDelusionCalculator,
    '/female-delusion-calculator': FemaleDelusionCalculator,
  };

  // Get the component for the current route
  const Component = routes[pathname || ''];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {Component ? <Component /> : <NotFound />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
