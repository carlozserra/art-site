import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FloatingWhatsApp = () => {
  const phoneNumber = "557332232191";
  const message = encodeURIComponent("Olá! Gostaria de falar com a equipe da ART Engenharia.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] group flex items-center gap-3"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-background/90 backdrop-blur-md border border-white/10 text-white text-[10px] font-headline font-bold tracking-widest uppercase px-4 py-2 rounded-sm shadow-xl whitespace-nowrap pointer-events-none">
        Fale Conosco
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center hover:scale-110">
          <img src="/imagens/whatsappicon.png" alt="WhatsApp" className="w-7 h-7 object-contain brightness-0 invert" />
        </div>
      </div>
    </a>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-on-primary flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;