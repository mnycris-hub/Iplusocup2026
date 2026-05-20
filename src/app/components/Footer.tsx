import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
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
    <footer id="footer" className="bg-[#111111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D90429] to-[#8D021F] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">IC</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">IPLUSO CUP</div>
                <div className="text-xs text-[#D90429] font-semibold">2026</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              O maior torneio universitário de futebol 5x5 do IPLUSO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Sobre", id: "about" },
                { label: "Torneio", id: "tournament" },
                { label: "Horários", id: "schedule" },
                { label: "Inscrições", id: "registration" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/70 hover:text-[#D90429] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contactos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#D90429] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">iplusocup@ipluso.pt</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#D90429] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">+351 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D90429] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Ringue do Braço de Prata, Lisboa</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Redes Sociais</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-[#D90429] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#D90429] transition-colors">
                  <Instagram size={20} />
                </div>
                <span className="text-sm">@iplusocup</span>
              </a>
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <p className="text-xs text-white/70 mb-2">Hashtag oficial:</p>
                <p className="font-bold text-[#D90429] text-sm">#IPLUSOCupLisboa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/50 text-center md:text-left">
              © 2026 IPLUSO CUP. Todos os direitos reservados.
            </p>
            <p className="text-sm text-white/50">
              Organizado com <span className="text-[#D90429]">❤</span> pelo IPLUSO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
