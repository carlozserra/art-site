import { useState, useEffect, useRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Hammer, Settings2, Construction, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Global Data
const PRODUCT_LIST = [
  { name: 'Betoneira 400L', category: 'Máquinas' },
  { name: 'Compactador Pula-Pula', category: 'Máquinas' },
  { name: 'Compressor de Ar', category: 'Máquinas' },
  { name: 'Gerador de Energia', category: 'Máquinas' },
  { name: 'Guincho de Coluna', category: 'Máquinas' },
  { name: 'Motobomba Gasolina', category: 'Máquinas' },
  { name: 'Motobomba Submersível', category: 'Máquinas' },
  { name: 'Perfurador de Solo', category: 'Máquinas' },
  { name: 'Placa Vibratória', category: 'Máquinas' },
  { name: 'Rompedor de Solo 30kg', category: 'Máquinas' },
  { name: 'Lavadora Alta Pressão', category: 'Ferramentas' },
  { name: 'Lixadeira Angular', category: 'Ferramentas' },
  { name: 'Martelete Perfurador 2kg', category: 'Ferramentas' },
  { name: 'Martelete Rompedor 5kg', category: 'Ferramentas' },
  { name: 'Martelo Demolidor 15kg', category: 'Ferramentas' },
  { name: 'Parafusadeira Impacto', category: 'Ferramentas' },
  { name: 'Serra Circular', category: 'Ferramentas' },
  { name: 'Serra Mármore', category: 'Ferramentas' },
  { name: 'Andaimes Tubulares', category: 'Acesso' },
  { name: 'Escoras Metálicas', category: 'Acesso' },
  { name: 'Rodízio Para Andaime', category: 'Acesso' },
  { name: 'Sapata Ajustável', category: 'Acesso' },
  { name: 'Sapata Fixa', category: 'Acesso' },
];

const CATEGORIES = [
  { id: 'Máquinas', icon: Construction },
  { id: 'Ferramentas', icon: Hammer },
  { id: 'Acesso', icon: Settings2 },
];



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Handle clicks outside dropdown to avoid stuck menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-auto">
      
      <div 
        className={`w-full transition-all duration-500 flex items-center ${
          isScrolled ? 'h-16 bg-background/90 backdrop-blur-xl border-b border-white/5' : 'h-24 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative group z-[60]">
            <img src="/imagens/logo.png" alt="ART Engenharia" className="h-10 md:h-12 w-auto opacity-100" />
            <div className="absolute -inset-2 bg-primary/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          {/* Main Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              to="/"
              className={`text-xs font-headline font-bold tracking-[0.15em] transition-all hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              HOME
            </Link>

            {/* Mega Menu Dropdown */}
            <div 
              className="relative h-full flex items-center group/nav"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <Link
                to="/catalogo"
                className={`text-xs font-headline font-bold tracking-[0.15em] transition-all hover:text-primary flex items-center gap-2 h-full py-4 ${
                  location.pathname === '/catalogo' ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                EQUIPAMENTOS
                <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[calc(100vw-40px)] max-w-5xl glass-panel p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] rounded-sm border-t-0 z-[100]"
                  >
                    <div className="grid grid-cols-3 gap-10">
                      {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="flex flex-col gap-6">
                          <h4 className="text-[10px] font-headline font-bold text-primary tracking-[0.3em] uppercase border-b border-white/10 pb-3 flex items-center gap-3">
                            <cat.icon size={14} className="opacity-50" />
                            {cat.id}
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {PRODUCT_LIST.filter(p => p.category === cat.id).map(product => (
                              <li key={product.name}>
                                <Link
                                  to={`/catalogo?search=${encodeURIComponent(product.name)}`}
                                  className="text-[11px] text-on-surface-variant hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group/item"
                                >
                                  <ChevronRight size={10} className="text-primary opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                                  {product.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center">
                      <p className="text-[9px] text-on-surface-variant uppercase tracking-[0.3em] opacity-30 italic">Infraestrutura e Locação de Frotas</p>
                      <Link to="/catalogo" className="text-[10px] font-headline font-bold text-primary hover:text-white transition-colors tracking-[0.3em] uppercase underline-offset-8 underline decoration-primary/20">Ver Catálogo Completo</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/servicos"
              className={`text-xs font-headline font-bold tracking-[0.15em] transition-all hover:text-primary ${
                location.pathname === '/servicos' ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              SERVIÇOS
            </Link>

            <Link
              to="/sobre-nos"
              className={`text-xs font-headline font-bold tracking-[0.15em] transition-all hover:text-primary ${
                location.pathname === '/sobre-nos' ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              SOBRE NÓS
            </Link>

            <button className="premium-button flex items-center gap-2 group">
              <span className="hidden lg:inline">SOLICITAR</span> ORÇAMENTO
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary p-2 z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-background z-[55] p-6 flex flex-col gap-12 pt-32"
          >
            <div className="flex flex-col gap-8">
              {['HOME', 'EQUIPAMENTOS', 'SERVIÇOS', 'SOBRE NÓS'].map((link) => (
                <Link
                  key={link}
                  to={link === 'HOME' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-4xl font-headline font-black tracking-tighter hover:text-primary transition-colors uppercase italic"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto border-t border-white/10 pt-8">
              <p className="text-xs text-on-surface-variant mb-6 italic">Soluções em engenharia e locação de frotas pesadas.</p>
              <button className="premium-button w-full text-sm py-5">FALAR COM ESPECIALISTA</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
