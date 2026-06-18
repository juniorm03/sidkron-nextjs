'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, ArrowRight, ShieldAlert, Building2, User, Mail, Phone, ShieldCheck, AlertTriangle } from 'lucide-react';

const QUESTOES = [
  { id: "backups", text: "Como funciona a rotina de backups da empresa?", options: [{ text: "Diário, automatizado e armazenado em nuvem segura", score: 3 }, { text: "Esporadicamente, de forma manual", score: 1 }, { text: "Não temos uma rotina de backups", score: 0 }] },
  { id: "antivirus", text: "Os computadores possuem antivírus corporativo gerenciado?", options: [{ text: "Sim, centralizado com monitoramento ativo", score: 3 }, { text: "Sim, mas cada um usa versão gratuita/de escolha individual", score: 1 }, { text: "Não", score: 0 }] },
  { id: "mfa", text: "A Autenticação de Multifator (MFA) é usada nos acessos dos colaboradores?", options: [{ text: "Sim, em todas as contas e ferramentas", score: 3 }, { text: "Apenas em contas críticas", score: 1 }, { text: "Não utilizamos MFA", score: 0 }] },
  { id: "lgpd", text: "A empresa possui políticas ativas de conformidade com a LGPD?", options: [{ text: "Sim, mapeando processos de segurança", score: 3 }, { text: "Iniciamos o processo, mas não concluímos", score: 1 }, { text: "Não possuímos ou desconhecemos", score: 0 }] },
];

const ESTADO_INICIAL = { step: 1, currentQuestion: 0, status: 'idle', riskLevel: null, answers: {}, formData: { nome: "", email: "", telefone: "", empresa: "" } };

export default function Schedule() {
  const [ctx, setCtx] = useState(ESTADO_INICIAL);

  const updateCtx = (key, value) => setCtx(p => ({ ...p, [key]: value }));
  const handleInput = (e) => setCtx(p => ({ ...p, formData: { ...p.formData, [e.target.name]: e.target.value } }));

  const processDiagnostic = async (answers) => {
    updateCtx('status', 'loading');
    const pct = (Object.values(answers).reduce((a, c) => a + c.score, 0) / (QUESTOES.length * 3)) * 100;
    
    const level = pct > 70 
      ? { title: "Seguro", color: "text-brand-success", bg: "bg-brand-success/10", border: "border-brand-success/20", icon: ShieldCheck, desc: "Sua empresa segue ótimas práticas essenciais, mas o cenário de ameaças evolui diariamente. Vale uma auditoria fina." }
      : pct >= 40 
        ? { title: "Moderado", color: "text-brand-warning", bg: "bg-brand-warning/10", border: "border-brand-warning/20", icon: AlertTriangle, desc: "Existem brechas importantes de controle de acessos e monitoramento que colocam a operação em risco parcial." }
        : { title: "Crítico", color: "text-brand-error", bg: "bg-brand-error/10", border: "border-brand-error/20", icon: ShieldAlert, desc: "Sua infraestrutura apresenta vulnerabilidades severas que exigem mitigação urgente para evitar vazamentos ou sequestro de dados (Ransomware)." };

    await new Promise(r => setTimeout(r, 1500));
    console.log("Mock DB Save:", { ...ctx.formData, diagnostico: answers, nivel_risco: level.title });
    setCtx(p => ({ ...p, status: 'success', step: 3, riskLevel: level }));
  };

  const currentQ = QUESTOES[ctx.currentQuestion];
  const selectedOpt = ctx.answers[currentQ.id];
  const RiskIcon = ctx.riskLevel?.icon || ShieldAlert;

  return (
    <section id="agendar" className="py-24 bg-brand-dark relative border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="shadow-2xl min-h-115 bg-brand-card border border-brand-border text-brand-text flex flex-col justify-between overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            
            {/* ETAPA 1: CADASTRO */}
            {ctx.step === 1 && (
              <motion.div key="st1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="p-6 flex flex-col h-full justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-bold">Diagnóstico de Segurança</h3>
                  <p className="text-sm text-brand-muted mb-6">Descubra o nível de maturidade digital da empresa em menos de 2 minutos.</p>
                  <form onSubmit={(e) => { e.preventDefault(); updateCtx('step', 2); }} className="space-y-4">
                    {[
                      { n: "nome", p: "Seu nome", i: User, t: "text" },
                      { n: "email", p: "E-mail corporativo", i: Mail, t: "email" },
                      { n: "telefone", p: "Telefone / WhatsApp", i: Phone, t: "text" },
                      { n: "empresa", p: "Nome da Empresa", i: Building2, t: "text" }
                    ].map(({ n, p, i: Icon, t }) => (
                      <div key={n} className="relative">
                        <Icon className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
                        <input name={n} type={t} placeholder={p} value={ctx.formData[n]} onChange={handleInput} required={n !== "telefone"} className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-brand-dark/50 border border-brand-border text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary" />
                      </div>
                    ))}
                    <button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-text font-semibold mt-4 transition-colors py-2 rounded-md text-sm flex items-center justify-center gap-2 cursor-pointer">
                      Iniciar Avaliação <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* ETAPA 2: QUESTÕES */}
            {ctx.step === 2 && (
              <motion.div key="st2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 flex flex-col h-full justify-between flex-1">
                <div>
                  <div className="w-full bg-brand-dark h-2 rounded-full mb-6 overflow-hidden">
                    <motion.div className="bg-brand-secondary h-full" initial={{ width: 0 }} animate={{ width: `${(ctx.currentQuestion / QUESTOES.length) * 100}%` }} transition={{ duration: 0.3 }} />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wider">Pergunta {ctx.currentQuestion + 1} de {QUESTOES.length}</span>
                  <h3 className="text-xl font-bold mt-1">{currentQ.text}</h3>
                  <div className="mt-6 space-y-3">
                    {currentQ.options.map((opt, idx) => (
                      <button key={idx} type="button" onClick={() => setCtx(p => ({ ...p, answers: { ...p.answers, [currentQ.id]: opt } }))} className={`w-full text-left p-4 rounded-lg border text-sm transition-all cursor-pointer ${selectedOpt?.text === opt.text ? 'bg-brand-accent/20 border-brand-secondary text-brand-text font-medium' : 'bg-brand-dark/40 border-brand-border text-brand-muted hover:border-brand-muted/50 hover:text-brand-text'}`}>
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={() => ctx.currentQuestion < QUESTOES.length - 1 ? updateCtx('currentQuestion', ctx.currentQuestion + 1) : processDiagnostic(ctx.answers)} disabled={!selectedOpt || ctx.status === 'loading'} className="bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-brand-text font-semibold px-6 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer transition-colors">
                    {ctx.status === 'loading' ? <Loader className="h-4 w-4 animate-spin" /> : ctx.currentQuestion === QUESTOES.length - 1 ? "Finalizar Diagnóstico" : <>Avançar <ArrowRight className="h-4 w-4" /></>}
                  </button>
                </div>
              </motion.div>
            )}

            {/* ETAPA 3: RESULTADO */}
            {ctx.step === 3 && ctx.riskLevel && (
              <motion.div key="st3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 flex flex-col items-center text-center justify-center flex-1 space-y-6">
                <div className={`p-4 rounded-full ${ctx.riskLevel.bg} ${ctx.riskLevel.border} border-2`}><RiskIcon className={`h-12 w-12 ${ctx.riskLevel.color}`} /></div>
                <div>
                  <h3 className="text-sm font-medium text-brand-muted uppercase tracking-widest">Nível de Risco Identificado</h3>
                  <h2 className={`text-4xl font-black mt-1 ${ctx.riskLevel.color}`}>{ctx.riskLevel.title}</h2>
                </div>
                <p className="text-brand-text/90 max-w-md text-sm leading-relaxed bg-brand-dark/30 p-4 rounded-xl border border-brand-border-light">{ctx.riskLevel.desc}</p>
                <div className="w-full pt-4 border-t border-brand-border-light">
                  <p className="text-xs text-brand-muted mb-4">Nossa equipe comercial especializada analisará suas respostas e entrará em contato.</p>
                  <button onClick={() => setCtx(ESTADO_INICIAL)} className="w-full bg-brand-dark hover:bg-brand-dark/80 border border-brand-border text-brand-text font-medium py-2 rounded-md text-sm cursor-pointer transition-colors">Refazer Teste</button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
