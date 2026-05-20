import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Torneio", id: "tournament" },
    { label: "Horários", id: "schedule" },
    { label: "Inscrições", id: "registration" },
    { label: "Galeria", id: "gallery" },
    { label: "FAQ", id: "faq" },
    { label: "Contactos", id: "footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] transition-all duration-300">
              <span className="text-white font-bold text-xl">IC</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-[#111111]">IPLUSO CUP</div>
              <div className="text-xs text-[#D90429] font-semibold">2026</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-[#111111] hover:text-[#D90429] transition-colors duration-200 rounded-lg hover:bg-[#F5F5F5]"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("registration")}
            className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#D90429] to-[#8D021F] text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(217,4,41,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            Inscrever Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:text-[#D90429] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-[#111111] hover:text-[#D90429] hover:bg-[#F5F5F5] rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("registration")}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#D90429] to-[#8D021F] text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] transition-all duration-300 text-center"
              >
                Inscrever Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
