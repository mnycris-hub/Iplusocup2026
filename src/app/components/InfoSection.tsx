import { useRef } from "react";
import { MapPin, Calendar, Clock, Users, FileText, Ticket, Play, PartyPopper } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useTilt } from "../hooks/useTilt";

function InfoCard({ item, index, isInView }: { item: any; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY } = useTilt(cardRef);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.95 }}
      className="group"
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_30px_rgba(217,4,41,0.2)] transition-all duration-300 border border-gray-100"
      >
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <item.icon size={28} className="text-white" />
        </motion.div>
        <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
          {item.label}
        </div>
        <div className="text-base sm:text-lg font-bold text-[#111111]">{item.value}</div>
      </motion.div>
    </motion.div>
  );
}

export function InfoSection() {
  const { ref, isInView } = useInView();

  const info = [
    {
      icon: MapPin,
      label: "Local",
      value: "Ringue do Braço de Prata",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Calendar,
      label: "Data",
      value: "5 de junho de 2026",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      label: "Chegada",
      value: "17h00",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Play,
      label: "Jogos",
      value: "18h00",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: PartyPopper,
      label: "Convívio",
      value: "20h00",
      color: "from-lime-500 to-green-500",
    },
    {
      icon: Users,
      label: "Formato",
      value: "Futebol 5x5",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: FileText,
      label: "Inscrições",
      value: "Até 31 de maio",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Ticket,
      label: "Entrada",
      value: "Gratuita",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] mb-4">
            Informações <span className="text-[#D90429]">Essenciais</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {info.map((item, index) => (
            <InfoCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
