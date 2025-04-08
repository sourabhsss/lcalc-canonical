import { Metadata } from 'next'
import CalculatorsClient from './CalculatorsClient'

export const metadata: Metadata = {
  title: 'Calculators - LCalculator',
  description: 'Browse our collection of useful calculators',
  alternates: {
    canonical: 'https://lcalculator.com/calculators',
  },
}

export default function CalculatorsPage() {
  return <CalculatorsClient />
} 