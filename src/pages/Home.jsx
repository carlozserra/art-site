import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { ChevronRight, MapPin, ExternalLink, ShieldCheck, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const marqueeProducts = [
  { name: 'Andaimes', img: '/imagens/produtos/andaime.webp' },
  { name: 'Escoras', img: '/imagens/produtos/escoras_met.webp' },
  { name: 'Martelete', img: '/imagens/produtos/martelete_5kg.webp' },
  { name: 'Betoneira 400L', img: '/imagens/produtos/betoneira_400l.webp' },
  { name: 'Compactador', img: '/imagens/produtos/compactador_pula_pula.webp' },
  { name: 'Gerador', img: '/imagens/produtos/gerador.webp' },
  { name: 'Guincho', img: '/imagens/produtos/guincho_col.webp' },
  { name: 'Placa Vibratória', img: '/imagens/produtos/placa_vibr.webp' },
  { name: 'Motobomba', img: '/imagens/produtos/motobomb_gaso.webp' },
];

const ProductCarousel = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    setPaused(true);
  };

  const handleTouchMove = (e) => {
    const dx = e.touches[0].clientX - dragStart.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };

  return (
    <div className="py-20 bg-surface-container/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-primary font-headline font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">Nossa Frota</span>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase">Outros <span className="text-primary not-italic">Equipamentos</span></h2>
        </div>
        <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-xs font-headline font-bold tracking-widest hover:text-primary transition-colors">
          VER CATÁLOGO COMPLETO <ChevronRight size={14} />
        </Link>
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setIsDragging(false); }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={paused ? false : { x: [0, -1600] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeProducts, ...marqueeProducts, ...marqueeProducts].map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-60 md:w-64 aspect-square glass-panel p-4 md:p-6 group/item relative overflow-hidden flex flex-col items-center justify-center gap-4"
            >
              <img src={item.img} alt={item.name} className="w-4/5 h-4/5 object-contain group-hover/item:scale-110 transition-all duration-700" draggable={false} />
              <Link
                to={`/catalogo?search=${item.name}`}
                className="text-[10px] font-headline font-bold tracking-widest uppercase opacity-80 group-hover/item:text-primary transition-all hover:underline underline-offset-4 decoration-primary/50"
                draggable={false}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ContactMap = () => {
  const address = "Ilhéus, Bahia, Brasil";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_NOT_A_REAL_KEY&q=ART+Engenharia+Ilhéus+Bahia`; // Note: Placeholder key, but will use standard search link for the button
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=R.+Brg.+Eduardo+Gomes,+130,+Pontal,+Ilhéus,+BA`;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/imagens/banner.jpeg" alt="Fundo" className="w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
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
                <p className="font-bold">R. Brg. Eduardo Gomes, 130 - Pontal, Ilhéus - BA, 45654-420</p>
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
            src="https://maps.google.com/maps?q=R.%20Brg.%20Eduardo%20Gomes%20130%20Ilheus%20BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-1000"
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 -mt-24 pt-32 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img
            src="/imagens/banner.jpeg"
            alt="Obra Industrial ART Engenharia"
            className="w-full h-full object-cover object-[65%_50%] opacity-70"
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
              Construa com <br />Confiança, <br />
              <span className="text-primary not-italic">Alugue com Qualidade</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg md:text-xl mb-12 max-w-xl leading-relaxed border-l-2 border-primary/40 pl-6">
              Soluções em locação para construção civil: praticidade, economia e eficiência no sul da Bahia.
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

      {/* Featured Equipments Premium */}
      <section className="bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black py-24 relative overflow-hidden z-20 border-y border-[#FCF6BA]/40 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 opacity-80"
            >
              <div className="h-px w-12 bg-black/40"></div>
              <Star className="fill-black text-black" size={16} />
              <Star className="fill-black text-black" size={24} />
              <Star className="fill-black text-black" size={16} />
              <div className="h-px w-12 bg-black/40"></div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 drop-shadow-xl"
            >
              <span className="font-light tracking-[0.2em] text-2xl md:text-4xl mb-2 block text-black/70">Equipamentos</span>
              <span className="italic">Destaque</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2 font-body text-black/80 font-bold max-w-2xl text-lg md:text-xl leading-relaxed"
            >
              Os carros-chefes da nossa frota, selecionados para entregar a máxima performance e confiabilidade na sua obra.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { name: 'Andaimes', productId: 19, img: '/imagens/produtos/andaime.webp' },
              { name: 'Escoras Metálicas', productId: 20, img: '/imagens/produtos/escoras_met.webp' },
              { name: 'Marteletes', productId: 14, img: '/imagens/produtos/martelete_5kg.webp' },
              { name: 'Betoneiras', productId: 1, img: '/imagens/produtos/betoneira_400l.webp' },
            ].map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                key={idx}
                className="relative group h-full"
              >
                {/* Shine effect behind the card */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-1000 blur-sm group-hover:duration-200"></div>

                <Link
                  to={`/catalogo?product=${item.productId}`}
                  className="relative h-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
                >
                  <div className="w-32 h-32 md:w-44 md:h-44 relative mb-8 flex items-center justify-center">
                    <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-center text-black/90 group-hover:text-black transition-colors">{item.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
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
        <div className="absolute inset-0 z-0">
          <img src="/imagens/banner.jpeg" alt="Fundo" className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
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
