import { Users2, Timer, Trophy, Shield, RotateCw, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TournamentSection() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Users2,
      title: "Equipas de 5 Jogadores",
      description: "Cada equipa é composta por 5 jogadores em campo com possibilidade de suplentes.",
    },
    {
      icon: Timer,
      title: "Jogos Dinâmicos",
      description: "Partidas rápidas e intensas entre 20 a 30 minutos de duração.",
    },
    {
      icon: RotateCw,
      title: "Formato Rotativo",
      description: "Sistema de rotação para garantir que todas as equipas jogam entre si.",
    },
    {
      icon: Shield,
      title: "Fair-Play Obrigatório",
      description: "Respeito e desportivismo são fundamentais para participar no torneio.",
    },
    {
      icon: Trophy,
      title: "Mínimo 3 Equipas",
      description: "O torneio realiza-se com um mínimo de 3 equipas inscritas.",
    },
    {
      icon: UserCheck,
      title: "Apenas Alunos IPLUSO",
      description: "Participação exclusiva para estudantes do IPLUSO devidamente inscritos.",
    },
  ];

  return (
    <section id="tournament" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Formato do <span className="text-[#D90429]">Torneio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema pensado para maximizar a competição, o fair-play e a diversão de todos os participantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 h-full group-hover:border-[#D90429] transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,4,41,0.5)] transition-all duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-2xl p-8 sm:p-12 text-center shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Gestão Informal e Colaborativa
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            O torneio é gerido de forma informal entre os jogadores, promovendo o espírito de
            entreajuda, respeito e autonomia. Todos são responsáveis por criar uma experiência
            positiva e memorável.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
