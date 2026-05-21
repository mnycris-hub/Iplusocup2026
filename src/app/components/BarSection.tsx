import { useRef } from "react";
import { Coffee, Music, Users2, Utensils } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "./hooks/useInView";

export function BarSection() {
  const { ref, isInView } = useInView();
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  const features = [
    {
      icon: Utensils,
      title: "Bifanas e Snacks",
      description: "Comida tradicional e petiscos para recuperar energias",
    },
    {
      icon: Coffee,
      title: "Bebidas Variadas",
      description: "Água, refrigerantes e outras bebidas disponíveis",
    },
    {
      icon: Music,
      title: "Música Ambiente",
      description: "DJ ao vivo a criar a banda sonora perfeita",
    },
    {
      icon: Users2,
      title: "Convívio Sem Hora",
      description: "Celebração até quando o grupo decidir",
    },
  ];

  return (
    <section className="py-20 bg-[#111111] text-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Futebol, música e <span className="text-[#D90429]">convívio</span>
          </h2>
          <p className="hidden sm:block text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Durante o torneio existirá uma zona de bar com snacks, bifanas, bebidas, água e música
            ambiente. Após os jogos, o convívio continua sem hora prevista de encerramento.
          </p>
          <p className="block sm:hidden text-base text-white/80 max-w-xl mx-auto">
            Bar com bifanas, bebidas e música. Convívio até quando quiserem!
          </p>
        </motion.div>

        {/* Background Image with Overlay */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          <motion.div
            style={{
              y,
              rotateX,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1635829933414-02613bc5464c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBnYXRoZXJpbmclMjBmb29kJTIwZHJpbmtzfGVufDF8fHx8MTc3OTMxMjk3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Social Gathering"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            className="absolute bottom-0 left-0 right-0 p-8 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Mais do que um jogo, uma experiência
            </h3>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D90429] transition-all duration-300 shadow-xl">
                <motion.div
                  style={{ transform: "translateZ(30px)" }}
                  className="w-14 h-14 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,4,41,0.6)] transition-all duration-300"
                >
                  <feature.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
