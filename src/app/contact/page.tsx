import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us - LCalculator',
  description: 'Get in touch with the LCalculator team. We\'d love to hear from you!',
  alternates: {
    canonical: 'https://lcalculator.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
} 