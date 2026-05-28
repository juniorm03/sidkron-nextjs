'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SobrePage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            
            <main>
                <section className="pt-24 md:pt-32 relative sm:pt-24 pb-10 sm:pb-16 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-brand-accent/10 to-transparent -z-10" />
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight"
                        >
                            Sobre Nós
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl md:max-w-3xl mx-auto leading-relaxed border-b-3 border-brand-accent pb-6 md:pb-10"
                        >
                            Protegendo empresas contra ameaças digitais há mais de 15 anos com presença internacional no Brasil, Paraguai e Portugal.
                        </motion.p>
                    </div>
                </section>

                <section className="py-8 sm:py-10 bg-brand-dark/50">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl border-b-3 border-brand-accent pb-6 sm:pb-8">
                        <div className="flex flex-col gap-8 sm:gap-12">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full border-b-3 border-brand-accent pb-6 sm:pb-10">
                                {[
                                    { num: '15+', label: 'Anos de experiência' },
                                    { num: '500+', label: 'Clientes protegidos' },
                                    { num: '98%', label: 'Satisfação' },
                                    { num: '24/7', label: 'Monitoramento' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-brand-card p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-brand-border hover:border-brand-accent/30 transition-all duration-300 text-center group">
                                        <span className="block text-2xl sm:text-3xl font-bold text-brand-accent mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{stat.num}</span>
                                        <span className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest font-medium leading-tight">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-justify space-y-3 sm:space-y-4 max-w-4xl mx-auto px-2 sm:px-0">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-brand-accent pl-4 sm:pl-6 text-left">Quem somos</h2>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    A Sidkron Cyber Security nasceu do encontro de duas forças que se complementam, experiência profunda e visão estratégica. Criada por Cleyton Salomé, profissional com mais de 30 anos dedicados à Tecnologia da Informação, e por Denise Rasmussen, profissional que conecta Tecnologia, Comunicação e Desenvolvimento Humano, a Sidkron surgiu movida por um propósito claro, proteger pessoas e negócios e fortalecer a confiança nas relações que conectam o mundo digital.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    Desde o início, a Sidkron se lançou ao desafio de responder à crescente necessidade de conformidade com a Lei Geral de Proteção de Dados. Seu primeiro grande passo foi transformar a complexidade da segurança digital em clareza e direção, por meio do seu produto principal, a Auditoria de Segurança através do Pentest. Durante quatro anos, atuando de forma sólida no modelo White Label, a empresa colocou seu conhecimento a serviço de parceiros estratégicos que confiavam plenamente na sua competência técnica e no seu rigor metodológico. Era o começo de uma jornada movida por compromisso e excelência.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    Em 2025, a Sidkron abriu um novo capítulo. Com presença cada vez mais viva no mercado goiano, começou a ocupar palcos importantes, eventos, programas de aceleração focados em inovação e tecnologia. Passou a se posicionar como uma voz relevante no ecossistema digital. Era a expansão natural de quem já carregava consigo consistência e visão de futuro.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    Em 2026, a Sidkron lançou o Programa de Gestão de Risco Cibernético. Atualmente, a Sidkron Cyber Security se consolida como muito mais que uma empresa de tecnologia. Ela é parceira estratégica de quem busca segurança, integridade e sustentabilidade no ambiente digital. Sua história é feita de coragem, de construção e de uma visão apaixonada por um mundo onde pessoas, negócios e tecnologia convivem em harmonia e proteção.
                                </p>
                                
                            </div>                            
                            
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 border-b-3 border-brand-accent pb-8 sm:pb-10 md:pb-12">
                            <div className="bg-brand-card/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-border">
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-text">Missão</h3>
                                <p className="text-justify text-brand-muted leading-relaxed text-xs sm:text-sm">
                                    Proteger organizações oferecendo serviços personalizados de cibersegurança que garantem a integridade, confidencialidade e disponibilidade de seus dados, reduzindo riscos de incidentes e fortalecendo a confiança em seus negócios.
                                </p>
                            </div>
                            <div className="bg-brand-card/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-border">
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-text">Valores</h3>
                                <ul className="space-y-1 sm:space-y-2 text-brand-muted text-xs sm:text-sm">
                                    {['Integridade', 'Colaboração', 'Excelência técnica', 'Segurança e confiança', 'Compromisso com a excelência', 'Evolução contínua'].map((v, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> {v}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-brand-card/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-border">
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-text">Atuamos com:</h3>
                                <ul className="space-y-1 sm:space-y-2 text-brand-muted text-xs sm:text-sm">
                                    {['Gestão de Risco Cibernético', 'Segurança Cibernética', 'Gestão de Vulnerabilidades', 'Pentest', 'Gestão de Riscos Humanos', 'Consultoria e Treinamentos', 'Compliance e Governança'].map((v, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> {v}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-justify space-y-3 sm:space-y-4 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-brand-accent pl-4 sm:pl-6 text-left">Posicionamento</h2>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    A Sidkron se posiciona como uma autoridade em segurança cibernética que une rigor técnico, inovação contínua e compromisso real com a proteção de pessoas e negócios. Somos a empresa que transforma segurança digital em clareza, confiança e resultados concretos.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    Para os clientes, somos mais que uma fornecedora. Somos a parceira estratégica que simplifica o complexo, antecipa riscos e entrega soluções que fortalecem o crescimento com tranquilidade e previsibilidade. Quando pensam em segurança, queremos que pensem em confiança, eficiência e visão de futuro, exatamente o que entregamos.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    Para os concorrentes, buscamos ser reconhecidos como referência. Uma empresa sólida, com processos maduros, metodologia consistente e tecnologia própria, que puxa o mercado para cima e estabelece novos padrões de excelência e responsabilidade.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
                                    A Sidkron escolhe estar entre as empresas que fazem diferente, que entregam acima do esperado e que constroem um ecossistema digital mais seguro, ético e sustentável. Somos a marca que inspira respeito, gera confiança e impulsiona evolução em cada relacionamento.
                                </p>
                                
                            </div>

            </main>

        </div>
    );
}
