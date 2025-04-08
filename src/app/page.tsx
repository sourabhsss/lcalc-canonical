import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'LCalculator - Useful Calculators for Everyday Life',
  description: 'A collection of useful calculators for everyday calculations, financial planning, and more.',
  alternates: {
    canonical: 'https://lcalculator.com',
  },
}

export default function Home() {
  return <HomeClient />
} 