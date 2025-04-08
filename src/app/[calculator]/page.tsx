import { Metadata } from 'next'
import CalculatorClient from './CalculatorClient'
import { routeMap } from '@/lib/routes'
import { calculatorMetadata } from '@/lib/calculatorMetadata'

type Props = {
  params: { calculator: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log('Calculator path:', params.calculator)
  
  const calculatorName = params.calculator
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Calculator', '')
    .trim()

  // Get the unique description from our metadata mapping
  // First try exact match
  let metadata = calculatorMetadata[params.calculator]
  
  // If no exact match, try to find a partial match
  if (!metadata) {
    // Try to find a key that matches the calculator name without the -calculator suffix
    const baseName = params.calculator.replace('-calculator', '')
    const calculatorKey = Object.keys(calculatorMetadata).find(key => 
      key === baseName || key.includes(baseName) || baseName.includes(key)
    )
    
    console.log('Base name:', baseName)
    console.log('Partial match key:', calculatorKey)
    
    if (calculatorKey) {
      metadata = calculatorMetadata[calculatorKey]
    }
  }

  const description = metadata?.description || 
    `Use our ${calculatorName.toLowerCase()} calculator to perform quick and accurate calculations. Free online calculator tool for ${calculatorName.toLowerCase()} calculations.`

  console.log('Final description:', description)

  // Create canonical URL
  const canonicalUrl = `https://lcalculator.com/${params.calculator}`

  return {
    title: `${calculatorName} Calculator - LCalculator`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default function CalculatorPage() {
  return <CalculatorClient />
} 