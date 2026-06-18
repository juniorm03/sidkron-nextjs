'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LeadPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const scrollToForm = () => {
        document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-50"
                >
                    <div className="bg-brand-card border border-brand-accent/40 p-5 rounded-2xl shadow-glow backdrop-blur-md relative">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-3 right-3 text-brand-muted hover:text-white transition-colors"
                            aria-label="Fechar"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="relative shrink-0">
                                <div className="bg-brand-accent/20 p-3 rounded-lg flex items-center justify-center">
                                    <ShieldCheck className="text-brand-accent" size={28} />
                                </div>
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                                </span>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h4 className="text-white font-bold text-sm sm:text-base mb-0.5">
                                    Sua empresa está segura?
                                </h4>
                                <p className="text-brand-muted text-xs sm:text-sm mb-3 leading-tight">
                                    Faça um diagnóstico de maturidade da sua segurança conosco!
                                </p>

                                <Button
                                    className="w-full h-9 text-[10px] sm:text-xs font-bold bg-brand-accent hover:bg-brand-accent-hover text-white flex items-center justify-center gap-2 group"
                                    onClick={scrollToForm}
                                >
                                    FAZER AGORA
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
