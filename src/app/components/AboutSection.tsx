import { useState } from "react";
import { Trophy, Users, Heart, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";

export function AboutSection() {
  const { ref, isInView } = useInView();
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  const features = [
    {
      icon: Trophy,
      title: "Competição Saudável",
      description: "Futebol intenso com espírito académico e fair-play",
    },
    {
      icon: Users,
      title: "Comunidade IPLUSO",
      description: "Une estudantes de todos os cursos num só evento",
    },
    {
      icon: Heart,
      title: "Convívio e Memórias",
      description: "Mais do que um jogo, uma experiência para recordar",
    },
    {
      icon: Zap,
      title: "Energia e Diversão",
      description: "Música, bar, bifanas e muita animação",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Mais do que <span className="text-[#D90429]">futebol</span>
          </h2>
          <p className="hidden sm:block text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A IPLUSO Cup 2026 nasce para unir os alunos através do desporto, do convívio e do
            espírito académico. Um evento criado para viver futebol, criar memórias e fortalecer a
            comunidade IPLUSO.
          </p>
          <p className="block sm:hidden text-base text-gray-600 max-w-xl mx-auto">
            Futebol, convívio e espírito académico
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-[#D90429] hover:shadow-[0_0_30px_rgba(217,4,41,0.15)] transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] transition-all duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="block md:hidden space-y-3" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.button
                onClick={() => setOpenMobile(openMobile === index ? null : index)}
                whileTap={{ scale: 0.98 }}
                animate={{
                  rotateY: openMobile === index ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-left hover:border-[#D90429] transition-all duration-300 shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <motion.div
                      style={{ transform: "translateZ(30px)" }}
                      className="w-12 h-12 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-lg flex items-center justify-center flex-shrink-0 shadow-xl"
                    >
                      <feature.icon size={24} className="text-white" />
                    </motion.div>
                    <h3 className="font-bold text-[#111111] text-base">{feature.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openMobile === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-[#D90429] flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openMobile === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
