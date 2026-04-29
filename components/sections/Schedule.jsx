'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '@/components/SafeIcon';
import { supabase } from '@/lib/supabaseClient';

const Schedule = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', empresa: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const { error } = await supabase.from('leads').insert([formData]);
      if (error) throw error;
      setStatus('success');
      setFormData({ nome: '', email: '', telefone: '', empresa: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="agendar" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-card p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text mb-4">Agendar avaliação</h2>
            <p className="text-brand-muted">Preencha os dados abaixo para darmos o primeiro passo na gestão contínua do seu risco cibernético.</p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
              <div className="inline-flex bg-green-500/20 text-green-400 p-3 rounded-full mb-4">
                <SafeIcon name="Check" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Solicitação enviada!</h3>
              <p className="text-brand-muted">Nossa equipe entrará em contato em breve para agendar sua avaliação.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">Nome completo *</label>
                  <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">E-mail corporativo *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">Nome da empresa *</label>
                  <input required type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Nome da sua empresa" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">Telefone</label>
                  <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white py-4 rounded-md font-semibold transition-all flex justify-center items-center gap-2 disabled:opacity-70 mt-4"
              >
                {status === 'loading' ? <SafeIcon name="Loader" className="animate-spin" /> : 'Agendar avaliação'}
              </button>
              {status === 'error' && <p className="text-red-400 text-sm text-center">Ocorreu um erro. Tente novamente.</p>}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;