'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '@/components/SafeIcon';
import { Button } from '@/components/ui/button';


const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bgUrl = "https://sidkron.com.br/wp-content/uploads/2026/02/Industrias-e-infraestrutura-critica-o-risco-cibernetico-que-nao-aparece-nos-relatorios-operacionais.png";

  return (
    <section 
      className="pt-24 md:pt-32 relative min-h-screen flex items-center overflow-hidden bg-brand-dark"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(5, 8, 19, 0.95), rgba(5, 8, 19, 0.7)), url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-tight mb-6">
              Segurança cibernética é{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-blue-400">
                gestão contínua.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-muted mb-10 max-w-3xl mx-auto leading-relaxed">
              Gerencie o risco cibernético com visibilidade, prioridade e evolução mensurável.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-3 sm:py-1 rounded-full border border-brand-accent/30 bg-brand-dark/40 backdrop-blur-md text-brand-accent text-sm md:text-base font-medium mb-8 text-center justify-center">
              <div className="shrink-0">
                <SafeIcon name="Activity" size={20} />
              </div>
              <span className="leading-tight">
                Para organizações que tratam cibersegurança como decisão estratégica
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <Button
                variant="default"
                onClick={scrollToForm}
                className="w-full sm:w-auto h-auto px-8 py-4 rounded-md font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-glow flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover"
              >
                Fazer diagnóstico <SafeIcon name="ArrowRight" />

              </Button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
