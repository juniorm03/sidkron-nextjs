'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-brand-accent/20 shadow-lg' 
          : 'bg-transparent py-7 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo_horizontal_fundo_preto.png"
            alt="Logo Sidkron"
            width={180} 
            height={45}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300"
            style={{ transform: scrolled ? 'scale(0.98)' : 'scale(1)' }}
            priority
          />
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`transition-colors text-base font-bold tracking-tight ${
                scrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-brand-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE (HAMBÚRGUER) */}
        <button 
          className="md:hidden text-white p-2 transition-colors hover:text-brand-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU (OVERLAY) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-2xl border-t border-brand-accent/20 h-screen overflow-hidden">
          <div className="px-6 py-8 flex flex-col gap-2 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-text text-lg font-bold py-4 border-b border-white/5 w-full text-center active:bg-brand-accent/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
