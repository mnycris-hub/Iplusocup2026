import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function ScheduleSection() {
  const { ref, isInView } = useInView();

  const schedule = [
    {
      time: "17:00",
      title: "Chegada dos Jogadores",
      description: "Recepção e confirmação das equipas inscritas",
    },
    {
      time: "17:00 – 18:00",
      title: "Organização e Aquecimento",
      description: "Preparação das equipas e aquecimento pré-jogo",
    },
    {
      time: "18:00 – 18:20",
      title: "Jogo 1",
      description: "Primeira partida do torneio",
    },
    {
      time: "18:25 – 18:45",
      title: "Jogo 2",
      description: "Segunda partida do torneio",
    },
    {
      time: "18:50 – 19:10",
      title: "Jogo 3",
      description: "Terceira partida do torneio",
    },
    {
      time: "19:15 – 19:35",
      title: "Final / Desempate",
      description: "Jogo decisivo e atribuição de vencedores",
    },
    {
      time: "20:00",
      title: "Convívio Final",
      description: "Bar, música e celebração com toda a comunidade",
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Horário do <span className="text-[#D90429]">Evento</span>
          </h2>
          <p className="hidden sm:block text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Planeia o teu dia e não percas nenhum momento desta experiência única.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#D90429] via-[#8D021F] to-[#D90429] rounded-full"></div>

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(217,4,41,0.2)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="text-xs sm:text-sm font-bold text-[#D90429] uppercase tracking-wider mb-2">
                      {item.time}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
