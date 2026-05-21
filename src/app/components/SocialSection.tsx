import { Instagram, MessageCircle, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function SocialSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Partilha o <span className="text-[#D90429]">momento</span>
          </h2>
          <p className="hidden sm:block text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Acompanha todas as novidades da IPLUSO CUP através das redes sociais.
          </p>
          <div className="block sm:hidden mb-8"></div>

          {/* Hashtag */}
          <motion.div
            initial={{ rotateX: -20, opacity: 0 }}
            animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              display: "inline-block",
            }}
            className="mb-12"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotateZ: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-gradient-to-r from-[#D90429] to-[#8D021F] px-8 py-4 rounded-full shadow-2xl"
            >
              <motion.span
                style={{ transform: "translateZ(20px)", display: "inline-block" }}
                className="text-white font-black text-xl sm:text-2xl md:text-3xl tracking-wide"
              >
                #IPLUSOCupLisboa
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#D90429] hover:shadow-[0_0_30px_rgba(217,4,41,0.2)] transition-all duration-300 shadow-lg">
              <motion.div
                style={{ transform: "translateZ(40px)" }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <Instagram size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm">
                Segue-nos para fotos, reels e stories exclusivos
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#D90429] hover:shadow-[0_0_30px_rgba(217,4,41,0.2)] transition-all duration-300 shadow-lg">
              <motion.div
                style={{ transform: "translateZ(40px)" }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <MessageCircle size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">
                Junta-te ao grupo oficial do evento
              </p>
            </div>
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "IPLUSO CUP 2026",
                  text: "Vem jogar na IPLUSO CUP 2026! #IPLUSOCupLisboa",
                  url: window.location.href,
                });
              }
            }}
            className="group w-full"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#D90429] hover:shadow-[0_0_30px_rgba(217,4,41,0.2)] transition-all duration-300 shadow-lg">
              <motion.div
                style={{ transform: "translateZ(40px)" }}
                className="w-16 h-16 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <Share2 size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Partilhar</h3>
              <p className="text-gray-600 text-sm">
                Espalha a palavra com os teus amigos
              </p>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
