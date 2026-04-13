import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Palette,
  Code2,
  BrainCircuit,
  ArrowRight,
  Layers,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  MousePointerClick,
  BarChart3,
  Layout,
  Paintbrush,
  Pen,
  MonitorSmartphone,
  Server,
  Database,
  Bot,
  MessageSquare,
  Workflow,
  Repeat,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Pillar data with visual mock elements ─── */
const pillars = [
  {
    icon: Megaphone,
    title: "Marketing & Tráfego",
    description:
      "Campanhas de alta performance com dados reais. Google, Meta e estratégias que geram leads qualificados — não apenas cliques.",
    features: ["Tráfego Pago", "Social Media", "Copywriting", "Analytics"],
    accent: "purple",
    mockElements: [
      { icon: TrendingUp, label: "+320% ROAS", value: "R$ 12.4k", sub: "receita gerada" },
      { icon: MousePointerClick, label: "CTR", value: "4,7%", sub: "acima da média" },
      { icon: BarChart3, label: "CPL", value: "R$ 8,20", sub: "custo por lead" },
    ],
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description:
      "Identidade visual que posiciona. Criamos marcas memoráveis e interfaces que convertem visitantes em clientes.",
    features: ["UI/UX Design", "Branding", "Motion Design", "Landing Pages"],
    accent: "fuchsia",
    mockElements: [
      { icon: Layout, label: "Landing Page", value: "98/100", sub: "score de design" },
      { icon: Paintbrush, label: "Brand", value: "100%", sub: "consistência visual" },
      { icon: Pen, label: "Protótipos", value: "48h", sub: "tempo de entrega" },
    ],
  },
  {
    icon: Code2,
    title: "Tecnologia & Sistemas",
    description:
      "Sites, plataformas e sistemas sob medida. Tecnologia que integra toda sua operação e escala junto com seu negócio.",
    features: ["Websites", "Web Apps", "APIs", "Integrações"],
    accent: "indigo",
    mockElements: [
      { icon: MonitorSmartphone, label: "Performance", value: "99/100", sub: "Lighthouse score" },
      { icon: Server, label: "Uptime", value: "99,9%", sub: "disponibilidade" },
      { icon: Database, label: "Integrações", value: "15+", sub: "sistemas conectados" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "IA & Automação",
    description:
      "Agentes inteligentes que trabalham 24h. Automatizamos atendimento, follow-up e processos para escalar sem equipe.",
    features: ["Chatbots IA", "Automações", "Agentes de IA", "N8N & Make"],
    accent: "violet",
    mockElements: [
      { icon: Bot, label: "Agente IA", value: "24/7", sub: "atendimento ativo" },
      { icon: MessageSquare, label: "Respostas", value: "<3s", sub: "tempo médio" },
      { icon: Repeat, label: "Automações", value: "47", sub: "flows ativos" },
    ],
  },
];

const accentColors: Record<string, { gradient: string; border: string; text: string; glow: string; bg: string }> = {
  purple:  { gradient: "from-purple-500/20 to-purple-900/10",  border: "border-purple-500/15",  text: "text-purple-400",  glow: "rgba(168,85,247,0.06)", bg: "bg-purple-500"  },
  fuchsia: { gradient: "from-fuchsia-500/20 to-fuchsia-900/10", border: "border-fuchsia-500/15", text: "text-fuchsia-400", glow: "rgba(232,121,249,0.06)", bg: "bg-fuchsia-500" },
  indigo:  { gradient: "from-indigo-500/20 to-indigo-900/10",  border: "border-indigo-500/15",  text: "text-indigo-400",  glow: "rgba(99,102,241,0.06)",  bg: "bg-indigo-500"  },
  violet:  { gradient: "from-violet-500/20 to-violet-900/10",  border: "border-violet-500/15",  text: "text-violet-400",  glow: "rgba(139,92,246,0.06)",  bg: "bg-violet-500"  },
};

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".carousel-card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16; // gap
    const next = dir === "right"
      ? Math.min(activeIndex + 1, pillars.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
    trackRef.current.scrollTo({ left: next * cardWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".carousel-card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
    setActiveIndex(idx);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solutions-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".carousel-wrapper",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".carousel-wrapper", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 bg-[#05000a] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] radial-glow-purple rounded-full pointer-events-none transform-gpu" />

      <div className="relative z-10">

        {/* ════════════════════════════════════════════════════
            HEADER
            ════════════════════════════════════════════════════ */}
        <div className="solutions-header max-w-6xl mx-auto px-6 mb-14 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
                <Layers className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Nossa Solução
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-4 leading-[1.1]">
                Um sistema,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">
                  não serviços soltos.
                </span>
              </h2>

              <div className="max-w-xl space-y-2">
                <p className="text-neutral-400 text-lg leading-relaxed">
                  A Gate não vende serviços isolados.{" "}
                  <span className="text-white/70 font-medium">
                    Nós criamos um ecossistema completo de crescimento.
                  </span>
                </p>
                <p className="text-neutral-500 text-base leading-relaxed">
                  Unimos marketing, design, tecnologia e inteligência artificial
                  para construir uma operação que atrai, converte e escala clientes todos os dias.
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={activeIndex === 0}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-white/60" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={activeIndex === pillars.length - 1}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            CAROUSEL
            ════════════════════════════════════════════════════ */}
        <div className="carousel-wrapper relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#05000a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#05000a] to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-[calc((100vw-1152px)/2+24px)] pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const colors = accentColors[pillar.accent];
              return (
                <div
                  key={i}
                  className="carousel-card snap-start flex-shrink-0 w-[85vw] md:w-[460px] lg:w-[480px] group cursor-default"
                >
                  <div className={`relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden transition-all duration-300 hover:${colors.border} hover:shadow-[0_0_50px_${colors.glow}]`}>

                    {/* ── Visual mock area (top) ── */}
                    <div className={`relative h-56 md:h-64 bg-gradient-to-b ${colors.gradient} overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                          backgroundSize: "24px 24px",
                        }}
                      />

                      {/* Floating glow */}
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-30"
                        style={{ backgroundColor: colors.glow.replace("0.06", "0.4") }}
                      />

                      {/* Mock metric cards */}
                      <div className="relative z-10 flex flex-col gap-2.5 p-5 pt-6">
                        {pillar.mockElements.map((mock, mi) => {
                          const MockIcon = mock.icon;
                          return (
                            <div
                              key={mi}
                              className="flex items-center gap-3 bg-[#0a0015]/60 backdrop-blur-md border border-white/[0.06] rounded-xl px-3.5 py-2.5 group/item hover:border-white/10 transition-colors duration-200"
                              style={{
                                transform: `translateX(${mi * 12}px)`,
                              }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                                <MockIcon className={`w-3.5 h-3.5 ${colors.text}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">
                                  {mock.label}
                                </p>
                                <p className="text-sm font-bold text-white/80 tabular-nums">
                                  {mock.value}
                                </p>
                              </div>
                              <span className="text-[10px] text-white/20 font-medium">
                                {mock.sub}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Bottom fade into content area */}
                      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0a0015] to-transparent" />
                    </div>

                    {/* ── Content area (bottom) ── */}
                    <div className="p-5 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                          <Icon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <h3 className="text-white/90 font-semibold text-lg tracking-tight group-hover:text-white transition-colors duration-200">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-neutral-500 text-[13px] leading-relaxed mb-4">
                        {pillar.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.features.map((feat, fi) => (
                          <span
                            key={fi}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/30 group-hover:text-white/45 group-hover:border-white/10 transition-all duration-200"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {pillars.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (!trackRef.current) return;
                  const card = trackRef.current.querySelector(".carousel-card") as HTMLElement;
                  if (!card) return;
                  trackRef.current.scrollTo({ left: i * (card.offsetWidth + 16), behavior: "smooth" });
                }}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-purple-400/60"
                    : "w-1.5 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="text-center mt-14 md:mt-16 px-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/20 hover:bg-white/[0.05] transition-all duration-200 cursor-pointer group">
            <Workflow className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 transition-colors duration-200" />
            <span className="text-sm font-medium text-white/50 group-hover:text-white/70 transition-colors duration-200">
              Ver como funciona na prática
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-purple-400/60 group-hover:translate-x-0.5 transition-all duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
