'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '@/components/SafeIcon';

const ProgramCard = ({ title, desc, icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-brand-card p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-colors group"
    >
      <div className="mx-auto w-14 h-14 bg-brand-dark rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
        <SafeIcon name={icon} size={28} />
      </div>
      <h4 className="text-center text-xl font-semibold text-brand-text mb-4">{title}</h4>
      <p className="text-center text-brand-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default ProgramCard;