'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calculator } from 'lucide-react'

const Logo: React.FC = () => {
  const pathname = usePathname() || '/'
  const isHomePage = pathname === '/'

  return (
    <Link href="/" className="flex items-center space-x-2">
      <Calculator className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold text-gray-900">LCalculator</span>
    </Link>
  )
}

export default Logo
