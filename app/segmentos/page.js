'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tractor, Factory, Landmark, HeartPulse, Cpu } from 'lucide-react';

const SEGMENTOS_DATA = [
    { id: 'agro', label: 'Agro', icon: Tractor, info: 'Agro Agro Agro Agro' },
    { id: 'industria', label: 'Indústria', icon: Factory, info: 'Indústria Indústria Indústria Indústria' },
    { id: 'cartorios', label: 'Cartórios', icon: Landmark, info: 'Cartórios Cartórios Cartórios Cartórios' },
    { id: 'saude', label: 'Saúde', icon: HeartPulse, info: 'Saúde Saúde Saúde Saúde' },
    { id: 'tech', label: 'Tecnologia', icon: Cpu, info: 'Tecnologia Tecnologia Tecnologia Tecnologia' },
];

export default function Segmentos() {
    const [ativo, setAtivo] = useState(SEGMENTOS_DATA[0]);
    const scrollRef = useRef(null);

    return (
        <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <main>
                <section className="pt-24 md:pt-32  relative sm:pt-24 pb-6 sm:pb-12 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-brand-accent/10 to-transparent -z-10" />
                    <div className="container mx-auto px-4 max-w-7xl text-center">
                        <div className="max-w-2xl md:max-w-3xl mx-auto border-b-2 border-brand-accent pb-6 sm:pb-10">
                            <motion.h1 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight"
                            >
                                Segmentos que atendemos
                            </motion.h1>
                        </div>
                    </div>
                </section>

                <section className="pb-20">
                    <div className="container mx-auto px-4 max-w-7xl">
                        
                        <div 
                            ref={scrollRef}
                            className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 no-scrollbar snap-x snap-mandatory scroll-px-4 mb-8 sm:mb-12"
                        >
                            {SEGMENTOS_DATA.map((item) => {
                                const IconeComp = item.icon;
                                
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setAtivo(item)}
                                        className={`
                                            flex-none w-35 sm:w-auto snap-center
                                            relative flex flex-col gap-3 items-center justify-center p-4 sm:p-8 rounded-xl border transition-all duration-300
                                            ${ativo.id === item.id 
                                                ? 'bg-brand-accent border-brand-accent shadow-glow scale-105 z-10' 
                                                : 'bg-brand-card/50 border-brand-border hover:border-brand-accent/30'}
                                        `}
                                    >
                                        <IconeComp className={`size-5 sm:size-7 transition-colors ${
                                            ativo.id === item.id ? 'text-white' : 'text-brand-accent'
                                        }`} />

                                        <span className={`text-xs sm:text-lg font-bold transition-colors ${
                                            ativo.id === item.id ? 'text-white' : 'text-brand-accent'
                                        }`}>
                                            {item.label}
                                        </span>

                                        {ativo.id === item.id && (
                                            <motion.div 
                                                layoutId="segmento-ativo"
                                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full z-20"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="p-6 sm:p-12 min-h-80 flex items-center justify-center text-center relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={ativo.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-2xl flex flex-col items-center"
                                >
                                    <div className="mb-6 p-4 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                                        {React.createElement(ativo.icon, { 
                                            className: "size-10 sm:size-16 text-brand-accent" 
                                        })}
                                    </div>

                                    <h3 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight">
                                        {ativo.label}
                                    </h3>
                                    <p className="text-sm sm:text-xl text-brand-muted leading-relaxed">
                                        {ativo.info}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
