import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function CTASection() {
  const { ref, isInView } = useInView();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1774916927099-5b0c72f2a683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGZvb3RiYWxsJTIwc3RhZGl1bSUyMHJlZCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzkzMTI5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8D021F]/95 via-[#D90429]/90 to-[#111111]/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,4,41,0.4),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            ESTÁS PRONTO PARA
            <span className="block text-[#F5F5F5] mt-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ENTRAR EM CAMPO?
            </span>
          </h2>

          <p className="hidden sm:block text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Representa o teu curso, junta a tua equipa e faz parte da IPLUSO CUP 2026.
          </p>
          <div className="block sm:hidden mb-8"></div>

          <motion.div style={{ perspective: "1000px" }} className="inline-block">
            <motion.button
              onClick={() => scrollToSection("registration")}
              initial={{ rotateX: -15, opacity: 0 }}
              animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotateY: 5, z: 50 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#D90429] font-black text-lg sm:text-xl rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              <motion.span style={{ transform: "translateZ(20px)", display: "inline-block" }}>
                INSCREVER AGORA
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {[
              { value: "5x5", label: "Formato" },
              { value: "5 JUN", label: "Data" },
              { value: "18:00", label: "Início" },
              { value: "FREE", label: "Entrada" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
