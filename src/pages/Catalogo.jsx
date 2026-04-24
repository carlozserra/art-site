import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, X, ChevronRight, CheckCircle2, Share2, Copy } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const equipmentData = [
  {
    id: 1,
    name: 'Betoneira 400L',
    category: 'concretagem',
    specs: { capacidade: '400 L', potencia: '2 HP', ciclo: '15 min' },
    description: 'Equipamento essencial para misturas homogêneas de concreto e argamassa. Possui motor silencioso, estrutura reforçada e sistema de descarga equilibrado.',
    image: '/imagens/produtos/betoneira_400l.webp'
  },
  {
    id: 2,
    name: 'Compactador Pula-Pula',
    category: 'compactacao',
    specs: { motor: '4 Tempos', forca: '14 kN', peso: '75 kg' },
    description: 'Ideal para compactação de solos coesivos em valas e áreas confinadas. Excelente ergonomia e baixo custo de manutenção.',
    image: '/imagens/produtos/compactador_pula_pula.webp'
  },
  {
    id: 3,
    name: 'Compressor de Ar',
    category: 'outros',
    specs: { pressao: '120 psi', vazao: '10 pcm', motor: '2 HP' },
    description: 'Compressor versátil para ferramentas pneumáticas, pintura e limpeza técnica. Equipado com tanque de alta resistência.',
    image: '/imagens/produtos/compressor_ar.webp'
  },
  {
    id: 4,
    name: 'Gerador de Energia',
    category: 'geradores',
    specs: { potencia: '9 kVA  |  3 kVA', tipo: 'Diesel', fase: 'Trifásico' },
    description: 'Fonte confiável de energia para canteiros de obra. Garante autonomia e estabilidade para equipamentos elétricos.',
    image: '/imagens/produtos/gerador.webp'
  },
  {
    id: 5,
    name: 'Guincho de Coluna',
    category: 'guincho',
    specs: { capacidade: '600 kg', altura: '30 m', giro: '180°' },
    description: 'Equipamento de elevação versátil para movimentação de materiais. Instalação rápida e operação segura.',
    image: '/imagens/produtos/guincho_col.webp'
  },
  {
    id: 7,
    name: 'Motobomba Submersível',
    category: 'outros',
    specs: { vazao: '10 m³/h', motor: '1 HP', cabo: '10 m' },
    description: 'Drenagem de poços, cisternas e fundações. Construção integrada para operação submersa contínua.',
    image: '/imagens/produtos/motobomba_submersivel.webp'
  },
  {
    id: 9,
    name: 'Placa Vibratória',
    category: 'compactacao',
    specs: { impacto: '15 kN', motor: '5.5 HP', base: '500 mm' },
    description: 'Compactação de solos granulares e asfalto com alta frequência. Ideal para acabamentos e calçamentos.',
    image: '/imagens/produtos/placa_vibr.webp'
  },
  {
    id: 10,
    name: 'Rompedor de Solo 30kg',
    category: 'demolicao',
    specs: { peso: '30 kg', impacto: '65 J', encaixe: 'Hexagonal' },
    description: 'Demolição pesada de pavimentos rígidos e fundações. Alta energia de impacto com vibração reduzida.',
    image: '/imagens/produtos/rompedor_30kg.webp'
  },
  {
    id: 11,
    name: 'Lavadora de Alta Pressão',
    category: 'outros',
    specs: { pressao: '1600 psi', vazao: '400 L/h', motor: '2000 W' },
    description: 'Limpeza técnica de equipamentos, fachadas e áreas industriais. Economia de água com alta eficiência.',
    image: '/imagens/produtos/lavadora_alt_pr.webp'
  },
  {
    id: 12,
    name: 'Lixadeira Angular',
    category: 'corte',
    specs: { disco: '9"', potencia: '2200 W', rotação: '8500 rpm' },
    description: 'Desbaste e corte de metais e alvenaria. Design robusto para uso intenso em canteiros de obra.',
    image: '/imagens/produtos/lixad_ang.webp'
  },
  {
    id: 13,
    name: 'Martelete Perfurador 2kg',
    category: 'demolicao',
    specs: { encaixe: 'SDS-Plus', impacto: '2.5 J', potencia: '800 W' },
    description: 'Perfuração rápida em alvenaria e concreto leve. Leve e ergonômico para trabalhos prolongados.',
    image: '/imagens/produtos/martelete_2kg.webp'
  },
  {
    id: 14,
    name: 'Martelete Rompedor 5kg',
    category: 'demolicao',
    specs: { encaixe: 'SDS-Max', impacto: '8.5 J', potencia: '1100 W' },
    description: 'Demolição leve e remoção de revestimentos. Versatilidade para diversas etapas da obra.',
    image: '/imagens/produtos/martelete_5kg.webp'
  },
  {
    id: 15,
    name: 'Martelo Demolidor 15kg',
    category: 'demolicao',
    specs: { impacto: '25 J', motor: '1500 W', encaixe: 'HEX 30' },
    description: 'Específico para demolição de pisos e paredes de concreto. Alta produtividade com controle total.',
    image: '/imagens/produtos/martelo_demolidor.webp'
  },
  {
    id: 16,
    name: 'Parafusadeira',
    category: 'parafusadeira',
    specs: { torque: '180 Nm', baterias: '2 unidades', tensao: '18 V' },
    description: 'Fixação rápida de parafusos e porcas. Sem fio para máxima mobilidade no canteiro.',
    image: '/imagens/produtos/parafusadeira.webp'
  },
  {
    id: 17,
    name: 'Serra Circular',
    category: 'corte',
    specs: { disco: '7.1/4"', potencia: '1800 W', 'profund.': '65 mm' },
    description: 'Corte preciso de madeiras para formas e andaimes. Sistema de segurança contra travamentos.',
    image: '/imagens/produtos/serra_circ.webp'
  },
  {
    id: 18,
    name: 'Serra Mármore',
    category: 'corte',
    specs: { disco: '110 mm', potencia: '1400 W', 'rotação': '12000 rpm' },
    description: 'Corte de cerâmicas, mármores e pedras. Robustez para cortes retos e precisos.',
    image: '/imagens/produtos/serra_marmore.webp'
  },
  {
    id: 19,
    name: 'Andaimes Tubulares',
    category: 'andaimes',
    specs: { medida: '1.0 x 1.0 m', encaixe: 'Prensado', norma: 'NR-18' },
    description: 'Estruturas modulares seguras para trabalhos em altura. Simples montagem e alta estabilidade.',
    image: '/imagens/produtos/andaime.webp'
  },
  {
    id: 20,
    name: 'Escoras Metálicas',
    category: 'escoramento',
    specs: { altura: '2.0 a 4.5 m', carga: '1500 kg', ajuste: 'Milimétrico' },
    description: 'Escoramento seguro de lajes e vigas. Reutilizável e ajustável, eliminando o uso de madeira.',
    image: '/imagens/produtos/escoras_met.webp'
  },
  {
    id: 21,
    name: 'Rodízio Para Andaime',
    category: 'andaimes',
    specs: { material: 'Poliuretano', freio: 'Duplo', carga: '250 kg' },
    description: 'Proporciona mobilidade aos andaimes. Facilita o deslocamento e travamento seguro da torre.',
    image: '/imagens/produtos/rodizio.webp'
  },
  {
    id: 22,
    name: 'Sapata Ajustável',
    category: 'andaimes',
    specs: { ajuste: '40 cm', base: '15 x 15 cm', material: 'Aço' },
    description: 'Nivelamento preciso em terrenos irregulares. Garante o aprumo da torre de andaime.',
    image: '/imagens/produtos/sapata_ajustavel.webp'
  },
  {
    id: 23,
    name: 'Sapata Fixa',
    category: 'andaimes',
    specs: { material: 'Aço Carbono', encaixe: 'Padrão', base: '15 x 15 cm' },
    description: 'Distribuição de carga estável para torres de andaime. Base robusta antifurto.',
    image: '/imagens/produtos/sapata_fixa.webp'
  },
];

const ProductModal = ({ item, onClose }) => {
  if (!item) return null;

  const handleShare = () => {
    const text = `Confira esse equipamento na ART Engenharia: ${item.name} - ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-background/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="w-full md:max-w-5xl md:h-[80vh] bg-surface-container border border-white/5 overflow-hidden relative md:grid md:grid-cols-2 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-t-2xl md:rounded-sm flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — sticky top for mobile */}
        <div className="md:hidden flex items-center justify-between px-5 py-4 border-b border-white/5 flex-shrink-0 bg-surface-container">
          <div>
            <span className="text-primary font-headline font-bold tracking-[0.4em] text-[8px]">PORTFÓLIO DE LOCAÇÃO</span>
            <h2 className="text-xl font-black uppercase leading-none italic mt-0.5">{item.name}</h2>
          </div>
          <button onClick={onClose} className="p-2.5 bg-white/10 hover:bg-white/20 transition-all rounded-full text-white flex-shrink-0">
            <X size={20} />
          </button>
        </div>

        {/* Desktop close */}
        <button
          onClick={onClose}
          className="hidden md:flex absolute top-6 right-6 z-10 p-3 bg-black/40 hover:bg-black/80 transition-all rounded-full text-white"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="h-[180px] md:h-full overflow-hidden bg-black/10 flex items-center justify-center flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4 md:p-12 transition-all duration-1000 transform hover:scale-105" />
        </div>

        {/* Content — scrollable */}
        <div className="p-5 md:p-12 overflow-y-auto flex-1">
          <div className="mb-5 md:mb-10 hidden md:block">
            <span className="text-primary font-headline font-bold tracking-[0.4em] text-[10px] mb-4 block">PORTFÓLIO DE LOCAÇÃO</span>
            <h2 className="text-5xl font-black mb-8 uppercase leading-none italic">{item.name}</h2>
          </div>

          <div className="p-4 md:p-6 bg-white/5 border-l-4 border-primary mb-5 md:mb-8">
            <p className="text-on-surface font-semibold text-base md:text-lg italic mb-1 md:mb-2">Consulte o valor para este equipamento.</p>
            <p className="text-on-surface-variant text-[10px] md:text-sm tracking-wide">Fale com um consultor técnico agora mesmo.</p>
          </div>

          <p className="text-on-surface-variant font-body leading-relaxed text-sm md:text-lg mb-6 md:mb-10 opacity-90">
            {item.description}
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-12">
            {Object.entries(item.specs).map(([key, val]) => (
              <div key={key} className="p-3 md:p-5 bg-white/[0.03] border border-white/5 rounded-sm">
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant opacity-50 mb-1">{key}</p>
                <p className="text-xs md:text-sm font-bold text-primary italic uppercase">{val}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 md:space-y-6 pb-safe">
            <WhatsAppButton productName={item.name} className="py-4 md:py-5 text-[10px] md:text-xs tracking-[0.2em]" variant="green" />

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 w-full py-3 md:py-4 border border-white/10 text-[10px] font-headline font-bold text-on-surface-variant hover:text-white hover:border-white/30 transition-all uppercase tracking-[0.2em]"
            >
              <Share2 size={14} />
              Compartilhar Equipamento
            </button>

            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-[9px] opacity-40 uppercase tracking-widest">
                <CheckCircle2 size={12} className="text-primary" />
                <span>Pronta Entrega</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] opacity-40 uppercase tracking-widest">
                <CheckCircle2 size={12} className="text-primary" />
                <span>Manutenção 100%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Catalogo = () => {
  const [filter, setFilter] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const search = searchParams.get('search') || '';

  // Auto-open modal when ?product=ID is in the URL
  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      const item = equipmentData.find(e => e.id === Number(productId));
      if (item) {
        setSelectedItem(item);
        // Remove the product param from URL cleanly so the user can browse freely after
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('product');
        setSearchParams(newParams, { replace: true });
      }
    }
  }, []);

  const setSearch = (val) => {
    if (val) {
      setSearchParams({ search: val });
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  const filteredItems = equipmentData.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'demolicao', name: 'Demolição' },
    { id: 'andaimes', name: 'Andaimes' },
    { id: 'compactacao', name: 'Compactação' },
    { id: 'escoramento', name: 'Escoramento' },
    { id: 'concretagem', name: 'Concretagem' },
    { id: 'corte', name: 'Corte' },
    { id: 'geradores', name: 'Geradores' },
    { id: 'guincho', name: 'Guincho de Coluna' },
    { id: 'parafusadeira', name: 'Parafusadeiras' },
    { id: 'outros', name: 'Outros' }
  ];

  return (
    <div className="pb-20 px-6 min-h-screen">
      {/* Hero header with background */}
      <div className="relative pt-48 pb-20 mb-20 -mx-6 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=1600&q=80"
            alt="Catálogo de Equipamentos"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-headline font-bold tracking-[0.5em] text-[10px] mb-4 block"
              >
                LOCAÇÃO DE ALTA PERFORMANCE
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 italic">
                O MELHOR <br />
                <span className="text-primary not-italic uppercase">CATÁLOGO</span>
              </h1>
              <p className="text-on-surface-variant font-body text-lg border-l border-primary/30 pl-6">
                Frota certificada para infraestrutura e mineração. Suporte técnico integral na região de Ilhéus.
              </p>
            </div>

            <div className="w-full md:w-auto relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Pesquisar equipamento..."
                className="w-full md:w-96 bg-surface-container border border-white/5 p-5 pl-12 text-sm focus:outline-none focus:border-primary/50 transition-all rounded-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-10 py-4 text-[10px] font-headline font-bold tracking-widest uppercase transition-all rounded-sm border ${filter === cat.id
                ? 'bg-primary text-on-primary border-primary shadow-[0_10px_30px_rgba(242,202,80,0.15)]'
                : 'bg-white/[0.02] text-on-surface-variant border-white/5 hover:bg-white/5 hover:border-white/10'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="glass-card group flex flex-col cursor-pointer overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/40 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-10 group-hover:scale-110 transition-all duration-1000 group-hover:opacity-100" />
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] px-3 py-1 bg-primary text-on-primary font-bold tracking-widest uppercase rounded-sm">Disponível</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-[10px] font-headline font-black tracking-[0.4em] uppercase flex items-center gap-3">
                      CONFERIR DETALHES <ChevronRight size={16} className="text-primary animate-pulse" />
                    </p>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow bg-surface-container/30">
                  <span className="text-[9px] font-headline font-bold text-primary tracking-[0.4em] mb-4 uppercase opacity-60">ART ENGENHARIA</span>
                  <h3 className="text-2xl font-black mb-10 group-hover:text-primary transition-colors leading-none uppercase italic">{item.name}</h3>

                  <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/5 pt-8">
                    {Object.entries(item.specs).slice(0, 2).map(([key, val]) => (
                      <div key={key}>
                        <p className="text-[9px] uppercase tracking-widest text-on-surface-variant opacity-70 mb-2 font-bold">{key}</p>
                        <p className="text-xs font-bold italic uppercase">{val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                      className="w-full py-4 border border-white/10 font-headline font-bold text-[9px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-on-surface-variant hover:text-white"
                    >
                      Ver Especificações
                    </button>
                    <WhatsAppButton productName={item.name} className="w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-32 text-center opacity-30">
            <Search className="mx-auto mb-6" size={64} />
            <p className="text-2xl font-headline font-black italic uppercase tracking-widest">Nenhum equipamento encontrado.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Catalogo;
