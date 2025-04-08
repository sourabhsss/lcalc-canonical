'use client'

import { useParams } from 'next/navigation'
import { routeMap } from '@/lib/routes'
import NotFound from '@/pages/NotFound'
import PageLayout from '@/components/PageLayout'

export default function CalculatorClient() {
  const params = useParams()
  const calculatorPath = params?.calculator ? `/${params.calculator}` : '/'
  const Component = routeMap[calculatorPath] || NotFound

  // Format calculator name for h1
  const calculatorName = typeof params?.calculator === 'string' 
    ? params.calculator
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Calculator', '')
        .trim()
    : ''

  return (
    <PageLayout>
      <h1 className="text-2xl font-bold mb-4">{calculatorName} Calculator</h1>
      <Component />
    </PageLayout>
  )
} 