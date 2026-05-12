import { motion } from 'framer-motion';
import { Droplets, Grid, Settings2, Home, ClipboardList, Warehouse, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const services = [
  { id: 1, title: 'Locação de Equipamentos', icon: Settings2, desc: 'Locação de máquinas e equipamentos destinados à execução de obras civis e serviços de infraestrutura.', items: ['Marteletes demolidores', 'Compactadores', 'Betoneiras', 'Andaimes', 'Escoras', 'Geradores de até 9kVA'], hasCatalog: true },
  { id: 2, title: 'Execução de Obras Residenciais', icon: Home, desc: 'Execução completa de obras residenciais, desde a fundação até o acabamento final.', items: ['Locação e preparação do terreno', 'Execução de fundações', 'Estrutura e alvenaria', 'Instalações elétricas e hidrossanitárias', 'Cobertura e impermeabilização', 'Revestimentos e acabamentos'] },
  { id: 3, title: 'Esgotamento Sanitário', icon: Droplets, desc: 'Implantação e manutenção de sistemas de coleta e condução de efluentes sanitários.', items: ['Escavação manual e mecanizada', 'Assentamento de tubulações', 'Instalação de caixas de inspeção', 'Execução de elevatórias', 'Reaterro e compactação', 'Recuperação de pavimentação'] },
  { id: 4, title: 'Laudos Técnicos', icon: ClipboardList, desc: 'Elaboração de laudos técnicos de engenharia para avaliação, diagnóstico e emissão de parecer técnico das condições construtivas da edificação.', items: ['Inspeção predial', 'Avaliação de manifestações patológicas', 'Identificação de fissuras e infiltrações', 'Análise estrutural', 'Emissão de parecer técnico', 'Registro fotográfico técnico'] },
  { id: 5, title: 'Lavagem de Reservatórios', icon: Warehouse, desc: 'Execução de limpeza técnica e higienização de reservatórios de água, garantindo condições adequadas de armazenamento e qualidade sanitária.', items: ['Esvaziamento do reservatório', 'Limpeza e escovação interna', 'Remoção de resíduos e sedimentos', 'Higienização e desinfecção', 'Inspeção das condições estruturais', 'Reabastecimento e liberação do sistema'] },
  { id: 6, title: 'Pavimentação', icon: Grid, desc: 'Execução de serviços de pavimentação para vias, acessos e áreas urbanas, garantindo resistência, durabilidade e adequado acabamento superficial.', items: ['Regularização de subleito', 'Execução de base e sub-base', 'Assentamento de pavimento intertravado', 'Pavimentação em paralelepípedo', 'Compactação de solo', 'Recuperação de pavimentação'] },
];

const Servicos = () => {
  return (
    <div className="pb-20 px-6">
      {/* Hero Header with background image */}
      <div className="relative pt-48 pb-32 mb-20 -mx-6 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Obras e Serviços"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-headline font-bold tracking-[0.4em] text-xs mb-4 block"
          >
            EXPERTISE TÉCNICA
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 italic"
          >
            SERVIÇOS <br />
            <span className="text-primary not-italic">ESPECIALIZADOS</span>
          </motion.h1>
          <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl font-body leading-relaxed">
            Soluções integradas para construção civil e infraestrutura. A ART Engenharia Locações alia engenharia de precisão à eficiência operacional, oferecendo equipamentos e execução de obras com alto padrão técnico no sul da Bahia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Subtle concrete texture background */}
          <div className="absolute inset-0 -mx-6 overflow-hidden z-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=50"
              alt=""
              className="w-full h-full object-cover opacity-5"
            />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-10 group hover:bg-surface-container/50 transition-all duration-500 flex flex-col"
            >
              <div className="mb-8 p-4 bg-primary/5 w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <service.icon size={32} className="text-primary" />
              </div>

              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{service.desc}</p>

              <ul className="space-y-3 mb-10 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-headline font-bold tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item.toUpperCase()}
                  </li>
                ))}
              </ul>

              {service.hasCatalog ? (
                <Link
                  to="/catalogo"
                  className="w-full text-center py-4 bg-primary text-on-primary font-headline font-bold text-[9px] uppercase tracking-[0.3em] hover:brightness-110 transition-all"
                >
                  VER EQUIPAMENTOS
                </Link>
              ) : (
                <WhatsAppButton productName={service.title} className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.div>
          ))}
        </div>
        </div>

        {/* Instagram CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="max-w-7xl mx-auto mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Instagram size={28} className="text-primary" />
              <span className="text-primary font-headline font-bold tracking-[0.3em] text-[10px]">@ARTENGENHARIAELOCACOES</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase leading-tight">
              Acompanhe nossas <br />
              <span className="text-primary not-italic">Redes Sociais</span>
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed mt-6 max-w-2xl mx-auto">
              Fique por dentro de promoções, novidades e dicas de construção no nosso Instagram.
            </p>
          </div>

          {/* Instagram Embed - Recent Posts Preview */}
          <div className="w-full overflow-hidden rounded-sm border border-white/5 bg-[#0a0a0a]">
            <script
              src="https://behold.so/widgets/embed.js"
              data-id="artengenhariaelocacoes"
              data-height="480"
              data-rows="2"
              data-cols="3"
              data-theme="dark"
              data-radius="0"
              data-padding="8"
              data-sort="recent"
            />
          </div>

          <div className="max-w-7xl mx-auto mt-12 flex justify-center">
            <a
              href="https://instagram.com/artengenhariaelocacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button"
            >
              SEGUIR NO INSTAGRAM
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicos;
