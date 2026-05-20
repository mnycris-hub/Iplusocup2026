import { Trophy, Users, Heart, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function AboutSection() {
  const { ref, isInView } = useInView();

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
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A IPLUSO Cup 2026 nasce para unir os alunos através do desporto, do convívio e do
            espírito académico. Um evento criado para viver futebol, criar memórias e fortalecer a
            comunidade IPLUSO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
