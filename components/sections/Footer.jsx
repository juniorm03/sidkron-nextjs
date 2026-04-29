'use client';

import React from 'react';
import SafeIcon from '@/components/SafeIcon';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#050813] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-2 text-brand-text font-bold text-2xl tracking-tighter mb-6">
              <Image
                src="/logos/logo_horizontal_fundo_azul-sem-nome.png"
                alt="Logo Sidkron"
                width={150}
                height={40}
                style={{
                  height: "auto",
                  paddingTop: "2px",
                  paddingBottom: "2px"
                }}
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-brand-text mb-4">
              Segurança cibernética com gestão contínua de risco
            </h3>
            <p className="text-brand-muted leading-relaxed max-w-sm mx-auto">
              A Sidkron estrutura programas anuais de gestão de risco cibernético, com foco em governança, priorização e evolução contínua.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-6">EMPRESA</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Insights</a></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-6">SERVIÇOS</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">O Programa</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Segmentos</a></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-6">COMPLIANCE</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-4 gap-x-10 text-brand-muted text-sm">
            <a href="mailto:contato@sidkron.com.br" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <SafeIcon name="Mail" size={16} /> contato@sidkron.com.br
            </a>
            <a href="tel:+5562994035858" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <SafeIcon name="Phone" size={16} /> +55 62 99403-5858
            </a>
            <a href="tel:+5511974804832" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <SafeIcon name="Phone" size={16} /> +55 11 97480-4832
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 text-brand-muted text-sm text-center">
            <div className="flex items-center gap-2">
              <SafeIcon name="MapPin" size={16} />
              <span>Goiânia - GO | Brasil</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 text-brand-accent text-base font-medium">
              Atendimento remoto para o Brasil e exterior
            </div>
          </div>

          <div className="text-center text-[10px] sm:text-xs text-brand-muted/40 uppercase tracking-widest">
            <p>2020-2026 © Todos os direitos reservados a Sidkron Cyber Security Ltda</p>
            <p className="mt-1">CNPJ nº 39.701.434/0001-54</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;