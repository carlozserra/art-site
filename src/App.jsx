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
      </div>
    </Router>
  );
}

export default App;