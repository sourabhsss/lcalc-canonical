import { Metadata } from 'next'
import TermsOfServiceClient from './TermsOfServiceClient'

export const metadata: Metadata = {
  title: 'Terms of Service - LCalculator',
  description: 'Read our terms of service to understand the rules and guidelines for using LCalculator.',
  alternates: {
    canonical: 'https://lcalculator.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />
} 