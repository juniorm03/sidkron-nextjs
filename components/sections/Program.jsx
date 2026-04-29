'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProgramCard from '@/components/sections/ProgramCard';
import Image from 'next/image';

const programs = [
  {
    title: "Mapeamento e Diagnóstico Estruturado",
    desc: "Identificação da exposição real, ativos críticos, vulnerabilidades e fluxos organizacionais.",
    icon: "Target"
  },
  {
    title: "Priorização Baseada em Risco",
    desc: "Classificação técnica e estratégica para direcionar investimentos com critério.",
    icon: "Filter"
  },
  {
    title: "Governança e Acompanhamento Contínuo",
    desc: "Monitoramento da exposição, apoio à liderança e integração com decisões executivas.",
    icon: "BarChart2"
  },
  {
    title: "Gestão de Riscos Humanos",
    desc: "Redução da exposição associada a comportamento, cultura e falhas operacionais.",
    icon: "Users"
  }
];

const Program = () => {
  const bgUrl = "https://sidkron.com.br/wp-content/uploads/2026/02/Insights-em-seguranca-cibernetica.png";

  return (
    <section className="py-24 bg-[#080d1e] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgUrl}
          alt="Insights Background"
          fill
          className="object-cover opacity-60"
          unoptimized
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle, rgba(8, 13, 30, 0.4) 0%, rgba(8, 13, 30, 0.95) 100%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">
              Programa de Gestão de Risco Cibernético
            </h2>
            <p className="text-lg text-brand-muted">
              O GCEC é um programa contínuo que organiza, prioriza e governa o risco cibernético com visão estratégica. Não vendemos ações isoladas. Estruturamos um modelo de gestão.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <ProgramCard
              key={idx} 
              title={program.title} 
              desc={program.desc} 
              icon={program.icon} 
              delay={idx * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
