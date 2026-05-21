import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-06-05T17:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1774916927099-5b0c72f2a683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGZvb3RiYWxsJTIwc3RhZGl1bSUyMHJlZCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzkzMTI5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8D021F]/90 via-[#8D021F]/70 to-[#111111]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,4,41,0.3),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotateZ: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl"
            >
              <motion.span
                style={{ transform: "translateZ(10px)", display: "inline-block" }}
                className="text-white font-semibold text-sm tracking-wide"
              >
                5 DE JUNHO 2026 • BRAÇO DE PRATA
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
          >
            <motion.div
              initial={{ rotateX: -20, opacity: 0, z: -50 }}
              animate={{ rotateX: 0, opacity: 1, z: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transform: "translateZ(30px)" }}
            >
              IPLUSO CUP
            </motion.div>
            <motion.span
              initial={{ rotateX: 20, opacity: 0, scale: 0.8 }}
              animate={{ rotateX: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: "block",
                transform: "translateZ(60px)",
              }}
              className="text-[#D90429] mt-2 drop-shadow-[0_0_30px_rgba(217,4,41,0.8)]"
            >
              2026
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mb-4 max-w-4xl mx-auto">
            Torneio de futebol 5x5
          </p>

          {/* Description - Hidden on mobile */}
          <p className="hidden sm:block text-base sm:text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Forma a tua equipa, entra em campo e vive uma experiência de futebol, música,
            competição e convívio académico.
          </p>
          <div className="block sm:hidden mb-8"></div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <div className="flex justify-center gap-3 sm:gap-6 flex-wrap" style={{ perspective: "1000px" }}>
              {[
                { value: timeLeft.days, label: "Dias" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Minutos" },
                { value: timeLeft.seconds, label: "Segundos" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ rotateX: -20, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] shadow-lg hover:shadow-[0_0_30px_rgba(217,4,41,0.3)] transition-all duration-300"
                >
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transform: "translateZ(20px)" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1"
                  >
                    {String(item.value).padStart(2, "0")}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-white/70 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ perspective: "1000px" }}>
            <motion.button
              onClick={() => scrollToSection("registration")}
              initial={{ rotateX: -20, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotateY: 5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="px-8 py-4 bg-gradient-to-r from-[#D90429] to-[#8D021F] text-white font-bold text-lg rounded-lg shadow-[0_0_40px_rgba(217,4,41,0.6)] transition-all duration-300 w-full sm:w-auto"
            >
              <motion.span style={{ transform: "translateZ(10px)", display: "inline-block" }}>
                INSCREVER EQUIPA
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("schedule")}
              initial={{ rotateX: -20, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotateY: -5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#D90429] transition-all duration-300 w-full sm:w-auto"
            >
              <motion.span style={{ transform: "translateZ(10px)", display: "inline-block" }}>
                VER HORÁRIOS
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown size={40} className="text-white/60 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
