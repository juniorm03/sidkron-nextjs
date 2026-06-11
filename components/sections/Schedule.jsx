'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, ArrowRight, ShieldAlert, Building2, User, Mail, Phone, ShieldCheck, AlertTriangle } from 'lucide-react';

/* 
  Removido o import do Supabase para simulação puramente em memória (Local)
*/

const QUESTOES = [
  {
    id: "backups",
    text: "Como funciona a rotina de backups da empresa?",
    options: [
      { text: "Diário, automatizado e armazenado em nuvem segura", score: 3 },
      { text: "Esporadicamente, de forma manual", score: 1 },
      { text: "Não temos uma rotina de backups", score: 0 }
    ]
  },
  {
    id: "antivirus",
    text: "Os computadores possuem antivírus corporativo gerenciado?",
    options: [
      { text: "Sim, centralizado com monitoramento ativo", score: 3 },
      { text: "Sim, mas cada um usa versão gratuita/de escolha individual", score: 1 },
      { text: "Não", score: 0 }
    ]
  },
  {
    id: "mfa",
    text: "A Autenticação de Multifator (MFA) é usada nos acessos dos colaboradores?",
    options: [
      { text: "Sim, em todas as contas e ferramentas", score: 3 },
      { text: "Apenas em contas críticas", score: 1 },
      { text: "Não utilizamos MFA", score: 0 }
    ]
  },
  {
    id: "lgpd",
    text: "A empresa possui políticas ativas de conformidade com a LGPD?",
    options: [
      { text: "Sim, mapeando processos de segurança", score: 3 },
      { text: "Iniciamos o processo, mas não concluímos", score: 1 },
      { text: "Não possuímos ou desconhecemos", score: 0 }
    ]
  },
];

const Schedule = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", empresa: "" });
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [status, setStatus] = useState('idle');
  const [riskLevel, setRiskLevel] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.empresa) return;
    setStep(2);
  };

  const handleSelectAnswer = (value) => {
    const currentQ = QUESTOES[currentQuestion];
    const selectedOption = currentQ.options.find(opt => opt.text === value);

    if (!selectedOption) return;

    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: { text: selectedOption.text, score: selectedOption.score }
    }));
  };

  const advanceOrSubmit = async () => {
    const questionId = QUESTOES[currentQuestion].id;
    if (!answers[questionId]) return;

    if (currentQuestion < QUESTOES.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      await processDiagnostic(answers);
    }
  };

  const processDiagnostic = async (finalAnswers) => {
    setStatus("loading");

    const totalScore = Object.values(finalAnswers).reduce((acc, curr) => acc + curr.score, 0);
    const maxScore = QUESTOES.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    let level = {
      title: "Crítico",
      color: "text-brand-error",
      bg: "bg-brand-error/10",
      border: "border-brand-error/20",
      desc: "Sua infraestrutura apresenta vulnerabilidades severas que exigem mitigação urgente para evitar vazamentos ou sequestro de dados (Ransomware).",
      icon: ShieldAlert
    };

    if (percentage > 70) {
      level = {
        title: "Seguro",
        color: "text-brand-success",
        bg: "bg-brand-success/10",
        border: "border-brand-success/20",
        desc: "Sua empresa segue ótimas práticas essenciais, mas o cenário de ameaças evolui diariamente. Vale uma auditoria fina.",
        icon: ShieldCheck
      };
    } else if (percentage >= 40) {
      level = {
        title: "Moderado",
        color: "text-brand-warning",
        bg: "bg-brand-warning/10",
        border: "border-brand-warning/20",
        desc: "Existem brechas importantes de controle de acessos e monitoramento que colocam a operação em risco parcial.",
        icon: AlertTriangle
      };
    }

    setRiskLevel(level);

    // SIMULAÇÃO DE ENVIO AO BANCO DE DADOS (Delay artificial de 1.5 segundos)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simula o payload que iria para o banco no seu terminal
      console.log("Mock DB Save - Lead Cadastrado:", {
        ...formData,
        diagnostico: finalAnswers,
        score_obtido: totalScore,
        nivel_risco: level.title,
        criado_em: new Date().toISOString()
      });

      setStatus("success");
      setStep(3);
    } catch (error) {
      console.error("Erro simulado:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const progressPercentage = ((currentQuestion) / QUESTOES.length) * 100;
  const currentQuestionId = QUESTOES[currentQuestion].id;
  const hasAnsweredCurrent = !!answers[currentQuestionId];
  const RiskIcon = riskLevel?.icon || ShieldAlert;

  return (
    <section id="agendar" className="py-24 bg-brand-dark relative border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Subitituído <Card> por <div> para eliminar o ReferenceError */}
        <div className="shadow-2xl min-h-[460px] bg-brand-card border border-brand-border text-brand-text flex flex-col justify-between overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">

            {/* PASSO 1: FORMULÁRIO DE LEADS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 flex flex-col h-full justify-between flex-1"
              >
                <div>
                  <div className="flex flex-col space-y-1.5 p-6 px-0 pt-0">
                    <h3 className="text-2xl text-brand-text font-bold leading-none tracking-tight">Diagnóstico de Segurança</h3>
                    <p className="text-sm text-brand-muted">
                      Descubra o nível de maturidade digital da sua empresa em menos de 2 minutos.
                    </p>
                  </div>

                  <form onSubmit={handleNextStep} className="space-y-4 mt-2">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
                      <input name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-brand-dark/50 border border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
                      <input name="email" type="email" placeholder="E-mail corporativo" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-brand-dark/50 border border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary" />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
                      <input name="telefone" placeholder="Telefone / WhatsApp" value={formData.telefone} onChange={handleChange} className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-brand-dark/50 border border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary" />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
                      <input name="empresa" placeholder="Nome da Empresa" value={formData.empresa} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-brand-dark/50 border border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary" />
                    </div>

                    <button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-text font-semibold mt-4 transition-colors py-2 px-4 rounded-md text-sm flex items-center justify-center gap-2 cursor-pointer">
                      Iniciar Avaliação <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* PASSO 2: COMPONENTE DE PERGUNTAS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 flex flex-col h-full justify-between flex-1"
              >
                <div>
                  <div className="w-full bg-brand-dark h-2 rounded-full mb-6 overflow-hidden">
                    <motion.div
                      className="bg-brand-secondary h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5 p-6 px-0 pt-0">
                    <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wider">Pergunta {currentQuestion + 1} de {QUESTOES.length}</span>
                    <h3 className="text-xl text-brand-text font-bold mt-1">{QUESTOES[currentQuestion].text}</h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {QUESTOES[currentQuestion].options.map((opt, idx) => {
                      const isSelected = answers[currentQuestionId]?.text === opt.text;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectAnswer(opt.text)}
                          className={`w-full text-left p-4 rounded-lg border text-sm transition-all cursor-pointer ${isSelected
                              ? 'bg-brand-accent/20 border-brand-secondary text-brand-text font-medium'
                              : 'bg-brand-dark/40 border-brand-border text-brand-muted hover:border-brand-muted/50 hover:text-brand-text'
                            }`}
                        >
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={advanceOrSubmit}
                    disabled={!hasAnsweredCurrent || status === 'loading'}
                    className="bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-brand-text font-semibold px-6 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    {status === 'loading' ? (
                      <Loader className="h-4 w-4 animate-spin" />
                    ) : currentQuestion === QUESTOES.length - 1 ? (
                      "Finalizar Diagnóstico"
                    ) : (
                      <>Avançar <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* PASSO 3: TELA DE RESULTADO / SUCESSO */}
            {step === 3 && riskLevel && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 flex flex-col items-center text-center justify-center flex-1 space-y-6"
              >
                <div className={`p-4 rounded-full ${riskLevel.bg} ${riskLevel.border} border-2`}>
                  <RiskIcon className={`h-12 w-12 ${riskLevel.color}`} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-brand-muted uppercase tracking-widest">Nível de Risco Identificado</h3>
                  <h2 className={`text-4xl font-black mt-1 ${riskLevel.color}`}>{riskLevel.title}</h2>
                </div>

                <p className="text-brand-text/90 max-w-md text-sm leading-relaxed bg-brand-dark/30 p-4 rounded-xl border border-brand-border-light">
                  {riskLevel.desc}
                </p>

                <div className="w-full pt-4 border-t border-brand-border-light">
                  <p className="text-xs text-brand-muted mb-4">Nossa equipe comercial especializada analisará suas respostas e entrará em contato.</p>
                  <button
                    onClick={() => { setStep(1); setAnswers({}); setCurrentQuestion(0); setFormData({ nome: "", email: "", telefone: "", empresa: "" }); setRiskLevel(null); setStatus('idle'); }}
                    className="w-full bg-brand-dark hover:bg-brand-dark/80 border border-brand-border text-brand-text font-medium py-2 rounded-md text-sm cursor-pointer transition-colors"
                  >
                    Refazer Teste
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
