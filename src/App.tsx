/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, MessageCircle, Globe, Zap, Briefcase, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlight = false,
  icon: Icon,
  link
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  highlight?: boolean;
  icon: any;
  link: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
      highlight 
        ? 'bg-zinc-900 text-white shadow-2xl scale-105 z-10 border-zinc-800' 
        : 'bg-white text-zinc-900 border border-zinc-100 shadow-sm hover:shadow-md'
    }`}
  >
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Melhor Custo-Benefício
      </div>
    )}
    
    <div className="mb-6">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${highlight ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
        <Icon className={`w-6 h-6 ${highlight ? 'text-emerald-400' : 'text-zinc-600'}`} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-sm ${highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{description}</p>
    </div>

    <div className="mb-8">
      <span className="text-4xl font-bold">{price}</span>
      {price !== 'Sob consulta' && <span className={`text-sm ${highlight ? 'text-zinc-500' : 'text-zinc-400'}`}>/mês</span>}
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3 text-sm">
          <Check className={`w-5 h-5 shrink-0 ${highlight ? 'text-emerald-400' : 'text-emerald-500'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-4 rounded-2xl font-semibold text-center transition-all duration-200 ${
        highlight 
          ? 'bg-emerald-500 hover:bg-emerald-400 text-white' 
          : 'bg-zinc-900 hover:bg-zinc-800 text-white'
      }`}
    >
      Quero esse plano
    </a>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="py-6 border-b border-zinc-100">
    <h4 className="text-lg font-bold mb-2">{question}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{answer}</p>
  </div>
);

export default function App() {
  const whatsappNumber = "5528999328644";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos de criação de sites.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation / Logo */}
      <nav className="max-w-7xl mx-auto px-6 py-12 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2"
        >
          {/* Using a placeholder since the blob URL is invalid in this context */}
          <div className="bg-zinc-900 p-2 rounded-xl">
            <Rocket className="w-8 h-8 text-emerald-400" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Vibe<span className="text-emerald-500">bit</span></span>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center px-6 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black tracking-tight mb-6"
        >
          Crie seu site profissional <br />
          <span className="text-emerald-500">em instantes</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-500 max-w-2xl mx-auto"
        >
          Escolha o plano ideal para o seu momento e deixe a nossa inteligência artificial fazer o trabalho pesado por você.
        </motion.p>
      </header>

      {/* Pricing Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard 
            title="Plano Start"
            price="R$ 49"
            icon={Globe}
            link="https://mpago.la/2im86kW"
            description="Ideal para quem deseja ter um site profissional em instantes."
            features={[
              "1 site profissional",
              "Edições ilimitadas",
              "Suporte via e-mail"
            ]}
          />
          
          <PricingCard 
            title="Plano Pro"
            price="R$ 67"
            icon={Zap}
            highlight={true}
            link="https://mpago.la/2RxV7iF"
            description="Melhor custo-benefício para pequenos negócios em crescimento."
            features={[
              "3 sites profissionais",
              "Edições ilimitadas",
              "Suporte prioritário",
              "Integração com WhatsApp"
            ]}
          />
          
          <PricingCard 
            title="Plano Business"
            price="R$ 147"
            icon={Briefcase}
            link="https://mpago.la/1BuYCtG"
            description="Para quem quer criar vários sites ou é agência. Ganhe vendendo sites com IA."
            features={[
              "10 sites profissionais",
              "Edições ilimitadas",
              "Painel de agência",
              "Suporte via WhatsApp"
            ]}
          />
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-4">Dúvidas Frequentes</h2>
            <p className="text-zinc-500">Tudo o que você precisa saber para começar com tranquilidade.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
            <FAQItem 
              question="É seguro realizar o pagamento?" 
              answer="Sim! Utilizamos o Mercado Pago como nossa plataforma de pagamentos, garantindo total segurança para seus dados e sua transação."
            />
            <FAQItem 
              question="Preciso de conhecimento técnico?" 
              answer="Absolutamente não. Nossa inteligência artificial cuida de toda a parte complexa. Você só precisa dizer o que quer e nós fazemos acontecer."
            />
            <FAQItem 
              question="Posso cancelar quando quiser?" 
              answer="Sim, não temos contratos de fidelidade. Você tem total liberdade para gerenciar seu plano conforme sua necessidade."
            />
            <FAQItem 
              question="Como recebo meu acesso?" 
              answer="Imediatamente! Você será direcionado para a nossa plataforma onde poderá resgatar o crédito referente ao plano adquirido. Ao resgatar o crédito, seu site será ativado instantaneamente."
            />
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center group"
      >
        <div className="absolute right-full mr-4 bg-white text-zinc-900 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Suporte
        </div>
        <MessageCircle className="w-8 h-8" />
      </motion.a>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 text-center text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} Vibebit. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
