'use client';

import React, { useState, useEffect } from 'react';
import SafeIcon from '@/components/SafeIcon';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/o-programa', label: 'O Programa' },
  { href: '/segmentos', label: 'Segmentos' },
  { href: '/insights', label: 'Insights' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('agendar');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 w-full z-50 transition-all duration-300 border-b-2 border-brand-muted/20 bg-brand-dark shadow-lg py-4">
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-brand-text font-bold text-2xl tracking-tighter">
          <Image
            src="/logos/logo_horizontal_fundo_preto.png"
            alt="Logo Sidkron"
            width={150}
            height={40}
            style={{ height: 'auto' }}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-brand-muted hover:text-brand-text transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={scrollToForm}
            className="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-300 text-sm md:text-base hidden sm:block"
          >
            Agendar avaliação
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-text p-2 sm:hidden"
          >
            <SafeIcon name={mobileMenuOpen ? 'X' : 'Menu'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-dark border-t border-brand-muted/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-muted hover:text-brand-text transition-colors text-base font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToForm();
              }}
              className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium text-center"
            >
              Agendar avaliação
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;