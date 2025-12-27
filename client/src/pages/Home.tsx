import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Smartphone, Zap, Check, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import logoImg from "@assets/Logo_1766799512169.png";
import imgBlue from "@assets/sg-11134201-82301-mhzwah3ajzewd5_1766798957993.webp";
import imgTitanium from "@assets/sg-11134201-822xs-mhzwagedbqiq99_1766798957993.webp";
import imgSilver from "@assets/sg-11134201-822xc-mhzwaf64h53a6a_1766798957994.webp";
import imgGold from "@assets/sg-11134201-822xg-mhzwaefxa8sl4f_1766798957994.webp";
import imgOrangeSide from "@assets/sg-11134201-822xs-mhzwadueyosl9d_1766798957994.webp";
import imgOrangeBottom from "@assets/sg-11134201-822y9-mhzwad5jx3pge6_1766798957994.webp";
import imgOrangeLens from "@assets/sg-11134201-822x4-mhzwac6rte6e7e_1766798957994.webp";
import imgOrangeBack from "@assets/sg-11134201-822ym-mhzwabgum39c09_1766798957995.webp";
import imgMulti from "@assets/sg-11134201-821f3-mh785942r8y346_1766798957995.webp";
import textureImage from "@assets/sg-11134201-822x4-mhzwac6rte6e7e_1766798957994.webp";
import productVideo from "@assets/sg-11110105-6v9aw-mh787nqpdami87.16000081763442919_1766799285747.mp4";
import banner1 from "@assets/banner1.webp";
import banner2 from "@assets/banner2.webp";

// Lista completa de modelos de iPhone
const iPhoneModels = [
  "iPhone X",
  "iPhone XS",
  "iPhone XR",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Pro", "iPhone 16 Pro Max",
  "iPhone 17", "iPhone 17 Pro", "iPhone 17 Pro Max"
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("orange");
  const [selectedModel, setSelectedModel] = useState("iphone15promax");
  const [activeImageIndex, setActiveImageIndex] = useState(5); // 6th image (index 5) is imgOrangeLens

  // Links de checkout por cor
  const checkoutLinks: Record<string, string> = {
    orange: "https://seguro.kingcases.shop/api/public/shopify?product=2492063566626&store=24920",
    black: "https://seguro.kingcases.shop/api/public/shopify?product=2492033225414&store=24920",
    gold: "https://seguro.kingcases.shop/api/public/shopify?product=2492072849979&store=24920",
    blue: "https://seguro.kingcases.shop/api/public/shopify?product=2492094435684&store=24920",
  };
  
  const checkoutTwoUnits = "https://seguro.kingcases.shop/checkout/Z-26YCZ12P4E25";

  const getCheckoutLink = () => {
    return checkoutLinks[selectedColor] || checkoutLinks.orange;
  };

  const productImages = [
    imgTitanium,
    imgSilver,
    imgBlue,
    imgGold,
    imgOrangeBack,
    imgOrangeLens,
    imgOrangeSide,
    imgOrangeBottom,
    imgMulti
  ];

  // Update main image when color is selected
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const colorMap: Record<string, number> = {
      orange: 5, // 6th image
      black: 0,
      gold: 3,
      blue: 2
    };
    setActiveImageIndex(colorMap[color] ?? 0);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40">
        <div className="w-full mx-auto px-4 md:px-6 h-14 md:h-16 lg:h-20 flex items-center justify-between max-w-7xl">
          <img src={logoImg} alt="King Cases" className="h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain" style={{maxWidth: 'min(200px, 30vw)'}} />
          <Button 
            size="sm" 
            className="rounded-full px-4 md:px-6 text-xs md:text-sm font-medium"
            onClick={() => window.open(getCheckoutLink(), '_blank')}
          >
            <span className="hidden md:inline">Comprar Agora</span>
            <span className="md:hidden">Comprar</span>
          </Button>
        </div>
      </nav>

      {/* Hero + Buy Section (Combined at top) */}
      <section id="buy-section" className="relative responsive-section">
        <div className="w-full mx-auto responsive-container max-w-6xl">
          <div className="grid lg:grid-cols-2 responsive-gap items-start">
            {/* Left: Product Visuals */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square w-full bg-secondary/10 rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center p-0 border border-border/30 shadow-2xl"
                style={{borderRadius: 'clamp(0.5rem, 3vw, 1.875rem)'}}
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={productImages[activeImageIndex]}
                    alt="iPhone Case Detail"
                    className="w-full h-full object-cover z-10"
                  />
                </AnimatePresence>
                <div className="absolute flex flex-wrap gap-2 z-20" style={{bottom: 'clamp(0.25rem, 3vw, 1.5rem)', left: 'clamp(0.25rem, 3vw, 1.5rem)'}}>
                  <div className="bg-blue-600 text-white rounded-full font-bold uppercase tracking-wider shadow-lg responsive-badge">Pronta Entrega</div>
                  <div className="bg-white text-black rounded-full font-bold uppercase tracking-wider shadow-lg responsive-badge">9H Glass</div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1))}
                  className="absolute top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all border border-white/30"
                  style={{left: 'clamp(0.25rem, 2vw, 1rem)', padding: 'clamp(0.25rem, 1.5vw, 0.5rem)'}}
                >
                  <ChevronRight className="rotate-180" style={{width: 'clamp(0.75rem, 3vw, 1.25rem)', height: 'clamp(0.75rem, 3vw, 1.25rem)'}} />
                </button>
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0))}
                  className="absolute top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all border border-white/30"
                  style={{right: 'clamp(0.25rem, 2vw, 1rem)', padding: 'clamp(0.25rem, 1.5vw, 0.5rem)'}}
                >
                  <ChevronRight style={{width: 'clamp(0.75rem, 3vw, 1.25rem)', height: 'clamp(0.75rem, 3vw, 1.25rem)'}} />
                </button>
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`responsive-thumbnail rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? "border-blue-500 ring-2 ring-blue-500/20" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Copy + Selection */}
            <div style={{gap: 'clamp(0.5rem, 3vw, 1.5rem)', display: 'flex', flexDirection: 'column'}}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{gap: 'clamp(0.25rem, 2vw, 1rem)', display: 'flex', flexDirection: 'column'}}
              >
                {/* 1. Título */}
                <h1 className="responsive-title font-heading font-bold">
                  Transforme seu telefone em um IPHONE 17
                </h1>
                
                {/* 2. Subtítulo */}
                <p className="responsive-text text-muted-foreground text-justify">
                  Capinha de Vidro Fosco com alta qualidade e ultra resistente.
                </p>

                {/* 3. Avaliações */}
                <div className="flex flex-wrap items-center gap-2 text-yellow-500">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="fill-current" style={{width: 'clamp(0.625rem, 2.5vw, 1.25rem)', height: 'clamp(0.625rem, 2.5vw, 1.25rem)'}} />)}
                  </div>
                  <span className="font-semibold text-foreground" style={{fontSize: 'clamp(0.5rem, 2vw, 1rem)'}}>4.9</span>
                  <span className="font-medium text-muted-foreground" style={{fontSize: 'clamp(0.5rem, 1.5vw, 0.875rem)'}}>(2.847 avaliações)</span>
                </div>

                {/* 4. Preço */}
                <div className="flex flex-wrap items-center" style={{gap: 'clamp(0.25rem, 2vw, 1rem)'}}>
                  <span className="responsive-price font-bold text-blue-600">R$ 79,90</span>
                  <span className="text-muted-foreground line-through" style={{fontSize: 'clamp(0.625rem, 2.5vw, 1.25rem)'}}>R$ 139,90</span>
                  <span className="bg-green-100 text-green-700 font-bold rounded-full responsive-badge">42% OFF</span>
                </div>
              </motion.div>

              {/* Selection Logic */}
              <div className="space-y-4 pt-4 border-t border-border">
                {/* 5. Cor do Acabamento */}
                <div className="space-y-3">
                  <Label className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground block">Cor do Acabamento</Label>
                  <div className="flex gap-2 flex-wrap">
                    {["orange", "black", "gold", "blue"].map((color) => {
                      const colorNames: Record<string, string> = {
                        orange: "Laranja",
                        black: "Preto",
                        gold: "Dourado",
                        blue: "Azul"
                      };
                      return (
                        <button
                          key={color}
                          onClick={() => handleColorChange(color)}
                          className={`px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium border transition-all ${
                            selectedColor === color
                              ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20"
                              : "border-border hover:border-foreground/30 bg-background"
                          }`}
                        >
                          {colorNames[color]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Modelos */}
                <div className="space-y-3">
                  <Label className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground block">Selecione seu iPhone</Label>
                  
                  {/* Model Selection Grid - Always Visible */}
                  <div className="grid grid-cols-3 gap-2">
                    {iPhoneModels.map((model) => (
                      <button
                        key={model}
                        onClick={() => {
                          setSelectedModel(model.toLowerCase().replace(/\s/g, ''));
                        }}
                        className={`px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium border transition-all ${
                          selectedModel === model.toLowerCase().replace(/\s/g, '')
                            ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20"
                            : "border-border hover:border-foreground/30 bg-background"
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7. Botão Comprar Agora */}
                <Button 
                  size="lg" 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-bold responsive-button"
                  onClick={() => window.open(getCheckoutLink(), '_blank')}
                >
                  COMPRAR AGORA
                </Button>
                
                <div className="flex flex-wrap justify-between items-center gap-2 text-xs uppercase font-bold tracking-widest text-muted-foreground pt-2">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Frete Grátis</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3" /> 30 Dias</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Envio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banners Section */}
      <section className="w-full py-4 md:py-6 lg:py-8">
        <div className="w-full mx-auto responsive-container max-w-6xl">
          <div className="flex flex-col gap-4 md:gap-6">
            <a 
              href={getCheckoutLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img 
                src={banner1} 
                alt="Banner 1 - King Pro" 
                className="w-full h-auto object-contain rounded-lg md:rounded-xl"
              />
            </a>
            <a 
              href={getCheckoutLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img 
                src={banner2} 
                alt="Banner 2 - King Pro" 
                className="w-full h-auto object-contain rounded-lg md:rounded-xl"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-secondary/30">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Design King Pro <br />
                  <span className="text-blue-600">Série 17 Premium</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A King Pro não é apenas uma capa, é uma evolução completa para o seu iPhone. Desenvolvida com engenharia de precisão, ela combina a estética futurista do novo design da Apple com uma proteção que redefine os padrões do mercado.
                </p>
              </div>

              <div className="grid gap-6 md:gap-8">
                <div className="flex gap-3 md:gap-5 group">
                  <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl font-heading">Protetor de Lentes de Safira 3.0</h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      Diferente de capas comuns, a King Pro possui proteção individual para cada lente. Utilizamos vidro de safira sintética de alta transparência que protege contra riscos, poeira e impactos diretos, garantindo que suas fotos e vídeos mantenham 100% da nitidez original sem reflexos indesejados.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-5 group">
                  <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Smartphone className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl font-heading">Acabamento em Vidro Fosco AG</h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      Sinta a exclusividade em cada toque. Nossa tecnologia AG Glass (Anti-Glare) reproduz o acabamento acetinado do iPhone 17. O vidro temperado 9H na traseira é oleofóbico, o que significa que é totalmente resistente a marcas de dedos, oleosidade e riscos, mantendo o visual de novo por muito mais tempo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-5 group">
                  <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl font-heading">Tecnologia MagSafe Blindada</h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      Equipada com um anel de 38 ímãs de neodímio N52, a King Pro oferece uma conexão magnética 2x mais forte que as capas convencionais. Carregue seu iPhone sem fios com máxima velocidade e utilize qualquer acessório MagSafe com a segurança de que ele não irá se soltar, mesmo em movimento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-5 group">
                  <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg md:text-xl font-heading">Bordas de Absorção de Impacto</h3>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      A moldura lateral é construída em polímero elástico de alta densidade que absorve até 98% da força de um impacto. O design ultra-fino esconde uma engenharia de proteção de nível militar, garantindo que seu iPhone sobreviva a quedas de até 2 metros de altura sem danos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-black flex items-center justify-center">
              <video 
                src={productVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">O que nossos clientes dizem</h2>
            <div className="flex justify-center items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
              </div>
              <span className="text-sm md:text-base font-bold">4.9/5.0</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Maria Silva", model: "iPhone 14 Pro", text: "Capa perfeita! O acabamento fosco é exatamente como nas fotos. Não escorrega e protege muito bem." },
              { name: "João Santos", model: "iPhone 15", text: "Melhor custo-benefício! Aparência premium e proteção real. Já derrubei várias vezes e o celular está intacto." },
              { name: "Ana Costa", model: "iPhone 13 Pro Max", text: "Adorei o toque suave e o visual luxuoso. Todo mundo pergunta onde comprei. Super recomendo!" },
              { name: "Pedro Oliveira", model: "iPhone 12 Pro", text: "Qualidade excelente! A capa encaixa perfeitamente e o acabamento fosco realmente elimina os reflexos." },
              { name: "Carla Mendes", model: "iPhone 15 Pro Max", text: "Entrega rápida e produto de alta qualidade. Vale muito a pena pelo preço oferecido." },
              { name: "Roberto Lima", model: "iPhone 14", text: "Material resistente e visual elegante. A proteção é completa e não interfere no uso do celular." },
              { name: "Fernanda Souza", model: "iPhone 13", text: "Transformou completamente o visual do meu iPhone! Parece realmente um iPhone 17. Recomendo!" },
              { name: "Lucas Almeida", model: "iPhone 15 Pro", text: "Excelente qualidade! O vidro fosco é perfeito e a proteção é top. Comprei duas unidades." },
              { name: "Juliana Ferreira", model: "iPhone 14 Plus", text: "Produto incrível! Visual premium e proteção real. Já indiquei para várias amigas." },
              { name: "Rafael Costa", model: "iPhone 16 Pro", text: "Melhor compra que fiz! A capa é linda, protege bem e o preço é justo. Super recomendo!" }
            ].map((review, i) => (
              <div key={i} className="bg-secondary/20 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-border/50 space-y-3 md:space-y-4 hover:bg-secondary/30 transition-colors">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-sm md:text-base italic text-muted-foreground">"{review.text}"</p>
                <div>
                  <p className="text-sm md:text-base font-bold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-secondary/10">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:max-w-3xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-center mb-4 sm:mb-6 md:mb-10">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>A capa é compatível com MagSafe?</AccordionTrigger>
              <AccordionContent>Sim, suporta carregamento por indução perfeitamente.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>O vidro traseiro pode quebrar?</AccordionTrigger>
              <AccordionContent>É feito de vidro temperado 9H ultra resistente, projetado para suportar quedas e riscos do dia a dia.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 md:py-10 lg:py-12 border-t border-border">
        <div className="w-full mx-auto px-3 sm:px-4 text-center">
          <img src={logoImg} alt="King Cases" className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 w-auto object-contain mx-auto mb-2 sm:mb-3 md:mb-4" />
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">© 2025 King Cases. A melhor proteção premium para seu iPhone.</p>
        </div>
      </footer>
    </div>
  );
}