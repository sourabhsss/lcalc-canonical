'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const Footer: React.FC = () => {
  const pathname = usePathname() || '/'
  const isHomePage = pathname === '/'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Popular Calculators</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/standard-deviation-calculator" className="text-gray-600 hover:text-gray-900">
                  Standard Deviation Calculator
                </Link>
              </li>
              <li>
                <Link href="/college-gpa-calculator" className="text-gray-600 hover:text-gray-900">
                  College GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/chronological-age-calculator" className="text-gray-600 hover:text-gray-900">
                  Chronological Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/love-calculator" className="text-gray-600 hover:text-gray-900">
                  Love Calculator
                </Link>
              </li>
              <li>
                <Link href="/cash-back-calculator" className="text-gray-600 hover:text-gray-900">
                  Cash Back Calculator
                </Link>
              </li>
              <li>
                <Link href="/mortgage-calculator" className="text-gray-600 hover:text-gray-900">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/dunk-calculator" className="text-gray-600 hover:text-gray-900">
                  Dunk Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculators" className="text-gray-600 hover:text-gray-900">
                  All Calculators
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} LCalculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
