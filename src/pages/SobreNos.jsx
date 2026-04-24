import { motion } from 'framer-motion';
import { ShieldCheck, Users, Zap, Award } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const SobreNos = () => {
  const stats = [
    { label: 'Máquinas', value: '150+' },
    { label: 'Obras Entregues', value: '500+' },
    { label: 'Anos de Mercado', value: '12+' },
    { label: 'Suporte', value: '24/7' },
  ];

  const timeline = [
    { year: '2012', title: 'Fundação', desc: 'Início das operações com foco em terraplanagem e pequena frota regional.' },
    { year: '2015', title: 'Expansão', desc: 'Crescimento para 50 equipamentos e entrada estratégica no setor de saneamento.' },
    { year: '2019', title: 'Liderança', desc: 'Reconhecimento como a principal locadora de máquinas do Sul da Bahia.' },
    { year: '2024', title: 'Excelência', desc: 'Frota ultra moderna com 150+ unidades e presença em grandes obras nacionais.' },
  ];

  return (
    <div className="pb-20 px-6">
      {/* Page hero with background */}
      <div className="relative pt-48 pb-20 mb-20 -mx-6 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
            alt="Nossa História"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-primary font-headline font-bold tracking-[0.4em] text-xs mb-4 block">NOSSA HISTÓRIA</span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 italic">TRADIÇÃO E <br /><span className="text-primary not-italic">TECNOLOGIA</span></h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-8">
              A ART Engenharia nasceu do desejo de transformar a infraestrutura regional através da excelência técnica e do suporte operacional robusto.
            </p>
            <p className="text-on-surface-variant font-body mb-12 opacity-80">
              Hoje, somos referência no setor de locação e projetos de engenharia, construindo parcerias sólidas baseadas na segurança, inovação e no cumprimento rigoroso de prazos e especificações.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-4xl font-black text-primary mb-1">{s.value}</p>
                  <p className="text-[10px] font-headline font-bold tracking-[0.2em] text-on-surface-variant uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBesY4mYsobHYRWEgSFNHntbGQXxAz46IL9Tn4dO-h48R1prwn4LxhWYFvZA5ijBRneIltYa6SglewywQV2UAmwBqOFr7mI5DzPQLPa_S2C4MCVCXLlKR0Ko1ERyr6woDsP0x18dfOjakUrKlxYkKE7uyknYwJ4G_7vEP66FupGKoepdnPdjDSpMxKP17umXyL5mf90h6Wg2kqbDvz37qaE0VprrEcsL2ByB1ASAcQNieWrJhdgntzTRpTab-u6jPvAlWeqmphtPxY" 
              alt="Sobre Nós" 
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          {[
            { icon: ShieldCheck, title: 'Segurança', desc: 'Certificações NR-18 e NR-35 em dia.' },
            { icon: Users, title: 'Equipe', desc: 'Profissionais e operadores qualificados.' },
            { icon: Zap, title: 'Agilidade', desc: 'Atendimento e mobilização recorde.' },
            { icon: Award, title: 'Qualidade', desc: 'Tecnologia de ponta em toda frota.' },
          ].map((v, i) => (
            <div key={i} className="text-center md:text-left">
              <v.icon className="text-primary mb-6 mx-auto md:mx-0" size={32} />
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-on-surface-variant opacity-70">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative border-t border-white/5 pt-32 -mx-6 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1600&q=50"
              alt=""
              className="w-full h-full object-cover opacity-5"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-20 italic">NOSSA <span className="text-primary not-italic">TRAJETÓRIA</span></h2>
          <div className="relative border-l border-primary/30 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 gap-8">
            {timeline.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-0 mb-16 md:mb-0"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-primary rounded-full md:relative md:left-0 md:mb-6" />
                <p className="text-primary font-black text-2xl mb-4">{t.year}</p>
                <h4 className="text-lg font-bold mb-2">{t.title}</h4>
                <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 glass-panel p-16 text-center">
          <h2 className="text-3xl font-black mb-4 uppercase">Quer saber mais sobre nossa operação?</h2>
          <p className="text-on-surface-variant font-body mb-10 opacity-70 max-w-xl mx-auto">Nossa equipe está pronta para tirar todas as suas dúvidas e apresentar as melhores soluções para o seu projeto.</p>
          <WhatsAppButton className="mx-auto px-12 py-5" variant="gold" label="FALE CONOSCO" />
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
