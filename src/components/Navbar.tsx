import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Calculator className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">LCalculator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/calculators" className="text-foreground font-medium hover:text-secondary transition-colors">
              Calculators
            </Link>
            <Link href="/about-us" className="text-foreground font-medium hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground font-medium hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/calculators" 
                className="text-foreground font-medium hover:text-secondary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link 
                href="/about-us" 
                className="text-foreground font-medium hover:text-secondary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-foreground font-medium hover:text-secondary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
