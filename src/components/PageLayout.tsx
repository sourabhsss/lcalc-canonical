'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import { Home, Calculator } from 'lucide-react'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  breadcrumbItems?: { label: string }[]
  contentClassName?: string
  canonicalUrl?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, description, breadcrumbItems, contentClassName, canonicalUrl }) => {
  const pathname = usePathname() || '/'
  const isHomePage = pathname === '/'
  
  // Check if this is a calculator page by looking for common calculator suffixes
  const isCalculatorPage = pathname.includes('-calculator') || 
                          pathname.includes('calculator-') || 
                          pathname.includes('/calculator/')
  
  // Extract calculator name from path
  const getCalculatorName = () => {
    // Remove leading slash and split by hyphens
    const pathWithoutSlash = pathname.substring(1)
    const words = pathWithoutSlash.split('-')
    
    // Capitalize each word
    return words.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {!isHomePage && (
          <nav className="bg-gray-100 py-2">
            <div className="container mx-auto px-4">
              {isCalculatorPage ? (
                <div className="flex items-center gap-2 text-sm">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <span className="text-gray-500">/</span>
                  <Link href="/calculators" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <Calculator className="h-4 w-4" />
                    All Calculators
                  </Link>
                  <span className="text-gray-500">/</span>
                  <span className="text-gray-900">{getCalculatorName()}</span>
                </div>
              ) : (
                <>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                  {' > '}
                  <span className="text-gray-900">
                    {pathname.substring(1).split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                </>
              )}
            </div>
          </nav>
        )}
        <div className={contentClassName}>
          {title && <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>}
          {description && <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
