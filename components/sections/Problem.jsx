'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '@/components/SafeIcon';

const listItems = [
  "Ambientes híbridos e múltiplos fornecedores;",
  "Integração com cadeia de suprimentos;",
  "Exposição digital contínua;",
  "Pressões regulatórias e exigências contratuais;",
  "Risco humano como vetor silencioso e mais comum."
];

const Problem = () => {
  return (
    <section className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-justify text-3xl md:text-4xl font-bold text-brand-text mb-4">
              O maior risco é não saber onde sua empresa está exposta hoje.
            </h2>
            <p className="text-justify text-lg text-brand-muted leading-relaxed mb-2">
              A exposição muda diariamente: ativos novos entram no ar, credenciais vazam, fornecedores ampliam a superfície e pessoas erram. Sem gestão contínua, o risco reaparece — e o custo vem em forma de incidentes, paralisações e perda de confiança. Não se trata apenas de cibersegurança, mas de gestão estruturada de risco cibernético.
            </p>
            <div className="p-6 bg-brand-card rounded-lg border-l-4 border-brand-accent">
              <p className="text-justify  text-brand-text font-medium italic">
                "A cibersegurança é uma condição de existência, não uma funcionalidade." - Stephane Nappo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl"
          >
            <h3 className="text-justify text-xl font-semibold text-brand-text mb-6">
              A interação entre tecnologia, processos e pessoas amplia as possibilidades de exposição.
            </h3>
            <ul className="text-left space-y-5 md:space-y-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="flex items-center justify-center bg-brand-accent/20 p-2 rounded-full shrink-0">
                    <SafeIcon name="AlertTriangle" size={14} className="text-brand-accent" />
                  </div>
                  <span className="text-brand-muted text-base md:text-lg leading-relaxed flex-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
