import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <img src="/imagens/logo.png" alt="ART Engenharia" className="h-10 mb-8 grayscale opacity-80" />
            <p className="text-on-surface-variant text-xs leading-relaxed tracking-wider uppercase opacity-60">
              Especializada em engenharia e locação de máquinas pesadas. Excelência técnica e compromisso com o resultado na região de Ilhéus, Bahia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-xs font-headline font-bold tracking-[0.2em] uppercase">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-xs text-on-surface-variant hover:text-white transition-colors">HOME</Link>
              <Link to="/catalogo" className="text-xs text-on-surface-variant hover:text-white transition-colors">EQUIPAMENTOS</Link>
              <Link to="/servicos" className="text-xs text-on-surface-variant hover:text-white transition-colors">SERVIÇOS</Link>
              <Link to="/sobre-nos" className="text-xs text-on-surface-variant hover:text-white transition-colors">SOBRE NÓS</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-xs font-headline font-bold tracking-[0.2em] uppercase">Contato</h4>
            <div className="flex flex-col gap-4 text-xs text-on-surface-variant">
              <a href="https://wa.me/557332232191" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span>(73) 3223-2191</span>
              </a>
              <a href="mailto:artengenhariaelocacoes@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span>artengenhariaelocacoes@gmail.com</span>
              </a>
              <a href="https://instagram.com/artengenharia.locacoes" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Instagram size={14} className="text-primary" />
                </div>
                <span>@artengenharia.locacoes</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-xs font-headline font-bold tracking-[0.2em] uppercase">Localização</h4>
            <div className="flex items-start gap-3 text-xs text-on-surface-variant">
              <MapPin size={16} className="text-primary shrink-0" />
              <p className="leading-relaxed">
                Ilhéus, Bahia<br />
                Atendimento em toda região sul.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-40">
            © 2026 ART ENGENHARIA & LOCAÇÕES. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[9px] text-on-surface-variant uppercase tracking-widest opacity-40">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
