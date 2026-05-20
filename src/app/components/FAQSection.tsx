import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";

export function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quem pode participar?",
      answer: "Apenas alunos do IPLUSO devidamente matriculados podem participar no torneio.",
    },
    {
      question: "A inscrição é paga?",
      answer: "Não. A entrada no torneio é completamente gratuita para todos os participantes.",
    },
    {
      question: "Posso inscrever-me sozinho?",
      answer: "Sim. Podes inscrever-te individualmente e serás integrado numa equipa, ou podes inscrever-te com a tua equipa já formada.",
    },
    {
      question: "Quantos jogadores tem cada equipa?",
      answer: "Cada equipa é composta por 5 jogadores em campo, com possibilidade de ter suplentes disponíveis.",
    },
    {
      question: "Até quando posso inscrever-me?",
      answer: "As inscrições estão abertas até 31 de maio de 2026. Não percas esta oportunidade!",
    },
    {
      question: "Onde será realizado o torneio?",
      answer: "O torneio realiza-se no Ringue do Braço de Prata, em Lisboa.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Perguntas <span className="text-[#D90429]">Frequentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Esclarece as tuas dúvidas sobre o torneio.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border-2 border-gray-100 rounded-2xl p-6 text-left hover:border-[#D90429] transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D90429] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#D90429] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
