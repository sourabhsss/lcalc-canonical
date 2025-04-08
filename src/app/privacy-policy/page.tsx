import { Metadata } from 'next'
import PrivacyPolicyClient from './PrivacyPolicyClient'

export const metadata: Metadata = {
  title: 'Privacy Policy - LCalculator',
  description: 'Read our privacy policy to understand how we protect and handle your data.',
  alternates: {
    canonical: 'https://lcalculator.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
} 