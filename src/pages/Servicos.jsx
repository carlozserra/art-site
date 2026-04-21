import { motion } from 'framer-motion';
import { Mountain, Droplets, Grid, Settings2, Construction, Trash2 } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const services = [
  { id: 1, title: 'Terraplanagem', icon: Mountain, desc: 'Corte, aterro e nivelamento de terrenos com precisão milimétrica e controle tecnológico.', items: ['Corte de terreno', 'Aterro compactado', 'Nivelamento Laser', 'Controle topográfico'] },
  { id: 2, title: 'Saneamento', icon: Droplets, desc: 'Execução técnica de redes coletoras e sistemas de drenagem pluvial urbana e industrial.', items: ['Rede coletora', 'Drenagem pluvial', 'Estações de tratamento', 'Reservatórios'] },
  { id: 3, title: 'Pavimentação', icon: Grid, desc: 'Asfaltamento e calçamento de alto desempenho para vias urbanas e pátios logísticos.', items: ['Asfaltamento', 'Calçamento', 'Piso industrial', 'Sinalização'] },
  { id: 4, title: 'Locação', icon: Settings2, desc: 'Frota completa de máquinas pesadas com manutenção certificada e operadores experientes.', items: ['Escavadeiras', 'Retroescavadeiras', 'Rolos compactadores', 'Caminhões'] },
  { id: 5, title: 'Fundações', icon: Construction, desc: 'Serviços especializados de fundações profundas e contenções para obras de grande porte.', items: ['Estacas', 'Tubulões', 'Muros de arrimo', 'Cortinas atirantadas'] },
  { id: 6, title: 'Demolição', icon: Trash2, desc: 'Demolição controlada de estruturas com absoluta segurança e gestão eficiente de resíduos.', items: ['Demolição mecânica', 'Desmontagem', 'Remoção de entulho', 'Reciclagem'] },
];

const Servicos = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
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
            Soluções completas para infraestrutura e grandes movimentações. Unimos engenharia de precisão à maior frota do Sul da Bahia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
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

              <WhatsAppButton productName={service.title} className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
