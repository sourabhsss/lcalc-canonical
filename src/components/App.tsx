'use client'

import React, { Suspense } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from './PageLoader'

// Import pages directly since Next.js handles code splitting
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import Calculators from '@/pages/Calculators'
import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import TermsOfService from '@/pages/TermsOfService'
import PrivacyPolicy from '@/pages/PrivacyPolicy'

// Calculator pages
import LoveCalculator from '@/pages/LoveCalculator'
import FlamesCalculator from '@/pages/FlamesCalculator'
import TwinFlameCalculator from '@/pages/TwinFlameCalculator'
import APLangCalculator from '@/pages/APLangCalculator'
import FinalGradeCalculator from '@/pages/FinalGradeCalculator'
import CollegeGpaCalculator from '@/pages/CollegeGpaCalculator'
import PercentageToCgpaCalculator from '@/pages/PercentageToCgpaCalculator'
import HalfBirthdayCalculator from '@/pages/HalfBirthdayCalculator'
import LapDayCalculator from '@/pages/LapDayCalculator'
import PetsLapDayCalculator from '@/pages/PetsLapDayCalculator'
import FiveNumberSummaryCalculator from '@/pages/FiveNumberSummaryCalculator'
import MortgageCalculator from '@/pages/MortgageCalculator'
import MortgageRecastCalculator from '@/pages/MortgageRecastCalculator'
import ReverseMortgageCalculator from '@/pages/ReverseMortgageCalculator'
import StockAverageCalculator from '@/pages/StockAverageCalculator'
import GstCalculator from '@/pages/GstCalculator'
import ApyCalculator from '@/pages/ApyCalculator'
import GrossMonthlyIncomeCalculator from '@/pages/GrossMonthlyIncomeCalculator'
import PayRaiseCalculator from '@/pages/PayRaiseCalculator'
import AsphaltCalculator from '@/pages/AsphaltCalculator'
import GravelCalculator from '@/pages/GravelCalculator'
import BoardFootCalculator from '@/pages/BoardFootCalculator'
import PoolVolumeCalculator from '@/pages/PoolVolumeCalculator'
import ProratedRentCalculator from '@/pages/ProratedRentCalculator'
import AirFryerCalculator from '@/pages/AirFryerCalculator'
import AngelNumberCalculator from '@/pages/AngelNumberCalculator'
import CourtDeadlineCalculator from '@/pages/CourtDeadlineCalculator'
import PeptideCalculator from '@/pages/PeptideCalculator'
import RrefCalculator from '@/pages/RrefCalculator'
import SnowDayCalculator from '@/pages/SnowDayCalculator'
import TenKeyCalculator from '@/pages/TenKeyCalculator'
import TowingEstimateCalculator from '@/pages/TowingEstimateCalculator'
import WorkExperienceCalculator from '@/pages/WorkExperienceCalculator'
import MaleDelusionCalculator from '@/pages/MaleDelusionCalculator'
import FemaleDelusionCalculator from '@/pages/FemaleDelusionCalculator'
import ChronologicalAgeCalculator from '@/pages/ChronologicalAgeCalculator'
import InterpolationCalculator from '@/pages/InterpolationCalculator'
import SleepCalculator from '@/pages/SleepCalculator'
import StandardDrinkCalculator from '@/pages/StandardDrinkCalculator'
import DunkCalculator from '@/pages/DunkCalculator'
import TDEECalculator from '@/pages/TDEECalculator'
import StandardDeviationCalculator from '@/pages/StandardDeviationCalculator'
import CombinationsCalculator from '@/pages/CombinationsCalculator'
import PermutationsCalculator from '@/pages/PermutationsCalculator'
import PercentageIncreaseCalculator from '@/pages/PercentageIncreaseCalculator'
import CubeRootCalculator from '@/pages/CubeRootCalculator'
import PercentErrorCalculator from '@/pages/PercentErrorCalculator'
import CashBackCalculator from '@/pages/CashBackCalculator'
import LcmHcfCalculator from '@/pages/LcmHcfCalculator'
import TattooTipCalculator from '@/pages/TattooTipCalculator'
import AudiobookSpeedCalculator from '@/pages/AudiobookSpeedCalculator'
import GpmCalculator from '@/pages/GpmCalculator'
import TherapyProductivityCalculator from '@/pages/TherapyProductivityCalculator'
import SwimPaceCalculator from '@/pages/SwimPaceCalculator'

const routeMap: { [key: string]: React.ComponentType } = {
  '/': Index,
  '/calculators': Calculators,
  '/about-us': AboutUs,
  '/contact': Contact,
  '/terms-of-service': TermsOfService,
  '/privacy-policy': PrivacyPolicy,
  '/love-calculator': LoveCalculator,
  '/flames-calculator': FlamesCalculator,
  '/twin-flame-calculator': TwinFlameCalculator,
  '/ap-lang-calculator': APLangCalculator,
  '/final-grade-calculator': FinalGradeCalculator,
  '/college-gpa-calculator': CollegeGpaCalculator,
  '/percentage-to-cgpa-calculator': PercentageToCgpaCalculator,
  '/half-birthday-calculator': HalfBirthdayCalculator,
  '/lap-day-calculator': LapDayCalculator,
  '/pets-lap-day-calculator': PetsLapDayCalculator,
  '/five-number-summary-calculator': FiveNumberSummaryCalculator,
  '/mortgage-calculator': MortgageCalculator,
  '/mortgage-recast-calculator': MortgageRecastCalculator,
  '/reverse-mortgage-calculator': ReverseMortgageCalculator,
  '/stock-average-calculator': StockAverageCalculator,
  '/gst-calculator': GstCalculator,
  '/apy-calculator': ApyCalculator,
  '/gross-monthly-income-calculator': GrossMonthlyIncomeCalculator,
  '/pay-raise-calculator': PayRaiseCalculator,
  '/asphalt-calculator': AsphaltCalculator,
  '/gravel-calculator': GravelCalculator,
  '/board-foot-calculator': BoardFootCalculator,
  '/pool-volume-calculator': PoolVolumeCalculator,
  '/prorated-rent-calculator': ProratedRentCalculator,
  '/air-fryer-calculator': AirFryerCalculator,
  '/angel-number-calculator': AngelNumberCalculator,
  '/court-deadline-calculator': CourtDeadlineCalculator,
  '/peptide-calculator': PeptideCalculator,
  '/rref-calculator': RrefCalculator,
  '/snow-day-calculator': SnowDayCalculator,
  '/ten-key-calculator': TenKeyCalculator,
  '/towing-estimate-calculator': TowingEstimateCalculator,
  '/work-experience-calculator': WorkExperienceCalculator,
  '/male-delusion-calculator': MaleDelusionCalculator,
  '/female-delusion-calculator': FemaleDelusionCalculator,
  '/chronological-age-calculator': ChronologicalAgeCalculator,
  '/interpolation-calculator': InterpolationCalculator,
  '/sleep-calculator': SleepCalculator,
  '/standard-drink-calculator': StandardDrinkCalculator,
  '/dunk-calculator': DunkCalculator,
  '/tdee-calculator': TDEECalculator,
  '/standard-deviation-calculator': StandardDeviationCalculator,
  '/combinations-calculator': CombinationsCalculator,
  '/permutations-calculator': PermutationsCalculator,
  '/percentage-increase-calculator': PercentageIncreaseCalculator,
  '/cube-root-calculator': CubeRootCalculator,
  '/percent-error-calculator': PercentErrorCalculator,
  '/cash-back-calculator': CashBackCalculator,
  '/lcm-hcf-calculator': LcmHcfCalculator,
  '/tattoo-tip-calculator': TattooTipCalculator,
  '/audiobook-speed-calculator': AudiobookSpeedCalculator,
  '/gpm-calculator': GpmCalculator,
  '/therapy-productivity-calculator': TherapyProductivityCalculator,
  '/swim-pace-calculator': SwimPaceCalculator,
}

export function App() {
  const pathname = usePathname()
  const Component = pathname ? routeMap[pathname] || NotFound : NotFound

  return (
    <Suspense fallback={<PageLoader isLoading={true} />}>
      <Component />
    </Suspense>
  )
} 