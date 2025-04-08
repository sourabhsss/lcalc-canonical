
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import AudiobookSpeedCalculator from '@/calculators/audiobookSpeed/AudiobookSpeedCalculator';

const AudiobookSpeedCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Audiobook Speed Calculator"
      description="Calculate how much time you'll save by increasing audiobook playback speed. Find the perfect balance between listening time and comprehension."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Free online Audiobook Speed Calculator - Determine how much time you'll save at different audiobook playback speeds. Optimize your listening experience and finish more books."
    >
      <div className="py-12">
        <AudiobookSpeedCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default AudiobookSpeedCalculatorPage;
