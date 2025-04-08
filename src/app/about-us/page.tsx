import { Metadata } from 'next'
import AboutUsClient from './AboutUsClient'

export const metadata: Metadata = {
  title: 'About Us - LCalculator',
  description: 'Learn more about LCalculator and our mission to provide useful calculators for everyone.',
  alternates: {
    canonical: 'https://lcalculator.com/about-us',
  },
}

export default function AboutUsPage() {
  return <AboutUsClient />
} 