import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ExternalLink, ShieldCheck, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const marqueeProducts = [
  { name: 'Betoneira 400L', img: '/imagens/produtos/betoneira_400l.webp' },
  { name: 'Compactador', img: '/imagens/produtos/compactador_pula_pula.webp' },
  { name: 'Gerador', img: '/imagens/produtos/gerador.webp' },
  { name: 'Guincho', img: '/imagens/produtos/guincho_col.webp' },
  { name: 'Martelete', img: '/imagens/produtos/martelete_5kg.webp' },
  { name: 'Placa Vibratória', img: '/imagens/produtos/placa_vibr.webp' },
  { name: 'Andaimes', img: '/imagens/produtos/andaime.webp' },
  { name: 'Motobomba', img: '/imagens/produtos/motobomb_gaso.webp' },
];

const ProductCarousel = () => {
  return (
    <div className="py-20 bg-surface-container/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-primary font-headline font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">Nossa Frota</span>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase">Principais <span className="text-primary not-italic">Equipamentos</span></h2>
        </div>
        <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-xs font-headline font-bold tracking-widest hover:text-primary transition-colors">
          VER CATÁLOGO COMPLETO <ChevronRight size={14} />
        </Link>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1600] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeProducts, ...marqueeProducts].map((item, idx) => (
            <Link 
              key={idx} 
              to={`/catalogo?search=${item.name}`}
              className="flex-shrink-0 w-60 md:w-64 aspect-square glass-panel p-4 md:p-6 group/item relative overflow-hidden flex flex-col items-center justify-center gap-4"
            >
              <img src={item.img} alt={item.name} className="w-4/5 h-4/5 object-contain group-hover/item:scale-110 transition-all duration-700" />
              <p className="text-[10px] font-headline font-bold tracking-widest uppercase opacity-80 group-hover/item:text-primary transition-all underline underline-offset-8 decoration-primary/0 group-hover/item:decoration-primary/50">{item.name}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ContactMap = () => {
  const address = "Ilhéus, Bahia, Brasil";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_NOT_A_REAL_KEY&q=ART+Engenharia+Ilhéus+Bahia`; // Note: Placeholder key, but will use standard search link for the button
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=ART+Engenharia+e+Locações+Ilhéus+Bahia`;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-headline font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">Localização</span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8 leading-none">Venha nos <br /><span className="text-primary not-italic">Visitar</span></h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed font-body">
            Estamos estrategicamente localizados em Ilhéus para atender todo o Sul da Bahia com agilidade e eficiência técnica.
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary group hover:bg-primary hover:text-on-primary transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-60 mb-1">Endereço</p>
                <p className="font-bold">Ilhéus, Bahia - Brasil</p>
              </div>
            </div>
          </div>

          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-button flex items-center gap-3 w-fit"
          >
            COMO CHEGAR NO GOOGLE MAPS
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="h-[450px] glass-panel p-2 relative group isolate">
          <div className="absolute inset-0 z-10 pointer-events-none border border-white/5 group-hover:border-primary/20 transition-all duration-700" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124116.32627993077!2d-39.09706308655184!3d-14.792518428800262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73909772183c5e3%3A0xe21f37e40850dfd9!2sIlh%C3%A9us%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            className="w-full h-full grayscale invert opacity-70 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
            allowFullScreen="" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="pt-24 flex flex-col">
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img 
            src="/imagens/banner.JPEG" 
            alt="Obra Industrial ART Engenharia" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-headline font-bold tracking-[0.5em] text-xs mb-6 block">ENGENHARIA E LOCAÇÕES</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 italic uppercase leading-[0.9]">
              Poder <br />Industrial <br />
              <span className="text-primary not-italic">ao seu Lado</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg md:text-xl mb-12 max-w-xl leading-relaxed border-l-2 border-primary/40 pl-6">
              Soluções integradas de locação para infraestrutura, mineração e grandes obras no Sul da Bahia.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/catalogo" className="premium-button">VER PRODUTOS</Link>
              <Link to="/servicos" className="border border-white/20 hover:border-primary/50 px-8 py-3 flex items-center gap-3 text-xs font-headline font-bold tracking-widest transition-all">
                NOSSOS SERVIÇOS <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Qualidade", desc: "Equipamentos novos com manutenção rigorosa." },
              { icon: Clock, title: "Rapidez", desc: "Entrega técnica e logística ágil em Ilhéus." },
              { icon: Users, title: "Especialistas", desc: "Suporte técnico altamente qualificado." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 glass-panel border-t-2 border-t-primary/20"
              >
                <feature.icon size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tighter">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm font-body">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Anúncio Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative group overflow-hidden rounded-sm border border-white/5 shadow-2xl">
            <img 
              src="/imagens/produtos/banner_anuncio.webp" 
              alt="Anúncio ART Engenharia" 
              className="w-full h-auto object-cover transition-all duration-1000 scale-[1.01]" 
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Location Map */}
      <ContactMap />

      {/* Global CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-10 leading-tight">
            Pronto para impulsionar <br />
            <span className="text-primary not-italic">Sua Obra?</span>
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 opacity-80 italic">Fale agora com nosso time e garanta os melhores equipamentos para seu projeto.</p>
          <div className="flex justify-center">
            <WhatsAppButton className="px-12 py-5 text-sm" variant="green" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
