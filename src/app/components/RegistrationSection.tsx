import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { CheckCircle2 } from "lucide-react";

export function RegistrationSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    contact: "",
    teamName: "",
    registrationType: "individual",
    players: ["", "", "", "", ""],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        course: "",
        contact: "",
        teamName: "",
        registrationType: "individual",
        players: ["", "", "", "", ""],
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlayerChange = (index: number, value: string) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = value;
    setFormData({
      ...formData,
      players: newPlayers,
    });
  };

  return (
    <section id="registration" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Inscreve-te até <span className="text-[#D90429]">31 de maio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            As inscrições podem ser feitas individualmente ou em equipa. Garante já o teu lugar na
            IPLUSO CUP 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">
                Inscrição Enviada com Sucesso!
              </h3>
              <p className="text-green-700">
                A tua inscrição foi recebida. Em breve entraremos em contacto.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 sm:p-12 shadow-xl"
            >
              <div className="space-y-6">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D90429] focus:ring-4 focus:ring-[#D90429]/20 outline-none transition-all duration-200"
                    placeholder="O teu nome"
                  />
                </div>

                {/* Curso */}
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Curso *
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D90429] focus:ring-4 focus:ring-[#D90429]/20 outline-none transition-all duration-200"
                    placeholder="O teu curso"
                  />
                </div>

                {/* Contacto */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contacto *
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D90429] focus:ring-4 focus:ring-[#D90429]/20 outline-none transition-all duration-200"
                    placeholder="Telemóvel ou email"
                  />
                </div>

                {/* Tipo de Inscrição */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Tipo de Inscrição *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
                    <motion.label
                      className="relative cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        rotateY: formData.registrationType === "individual" ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <input
                        type="radio"
                        name="registrationType"
                        value="individual"
                        checked={formData.registrationType === "individual"}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <motion.div
                        style={{ transformStyle: "preserve-3d" }}
                        className="border-2 border-gray-200 rounded-lg p-4 text-center peer-checked:border-[#D90429] peer-checked:bg-[#D90429]/5 transition-all duration-200 shadow-md"
                      >
                        <div className="font-semibold text-gray-900">Individual</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Serás integrado numa equipa
                        </div>
                      </motion.div>
                    </motion.label>
                    <motion.label
                      className="relative cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        rotateY: formData.registrationType === "team" ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <input
                        type="radio"
                        name="registrationType"
                        value="team"
                        checked={formData.registrationType === "team"}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <motion.div
                        style={{ transformStyle: "preserve-3d" }}
                        className="border-2 border-gray-200 rounded-lg p-4 text-center peer-checked:border-[#D90429] peer-checked:bg-[#D90429]/5 transition-all duration-200 shadow-md"
                      >
                        <div className="font-semibold text-gray-900">Equipa</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Tens a tua equipa formada
                        </div>
                      </motion.div>
                    </motion.label>
                  </div>
                </div>

                {/* Nome da Equipa (conditional) */}
                {formData.registrationType === "team" && (
                  <>
                    <div>
                      <label htmlFor="teamName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome da Equipa *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        required={formData.registrationType === "team"}
                        value={formData.teamName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D90429] focus:ring-4 focus:ring-[#D90429]/20 outline-none transition-all duration-200"
                        placeholder="Nome criativo da equipa"
                      />
                    </div>

                    {/* Jogadores da Equipa */}
                    <div className="border-2 border-[#D90429]/20 rounded-lg p-6 bg-gradient-to-br from-[#D90429]/5 to-transparent">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Jogadores da Equipa (5 jogadores) *
                      </h3>
                      <div className="space-y-4">
                        {formData.players.map((player, index) => (
                          <div key={index}>
                            <label
                              htmlFor={`player-${index}`}
                              className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                              Jogador {index + 1} *
                            </label>
                            <input
                              type="text"
                              id={`player-${index}`}
                              required={formData.registrationType === "team"}
                              value={player}
                              onChange={(e) => handlePlayerChange(index, e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D90429] focus:ring-4 focus:ring-[#D90429]/20 outline-none transition-all duration-200"
                              placeholder={`Nome do jogador ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <div style={{ perspective: "1000px" }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, rotateY: 3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#D90429] to-[#8D021F] text-white font-bold text-lg rounded-lg shadow-[0_0_40px_rgba(217,4,41,0.5)] transition-all duration-300"
                  >
                    <motion.span style={{ transform: "translateZ(10px)", display: "inline-block" }}>
                      ENVIAR INSCRIÇÃO
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
