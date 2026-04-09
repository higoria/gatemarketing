import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Award,
  Quote,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Stats ─── */
const stats = [
  { value: "R$ 4.2M+", label: "Em receita gerada", icon: TrendingUp },
  { value: "120+", label: "Clientes atendidos", icon: Users },
  { value: "340%", label: "ROAS médio", icon: BarChart3 },
  { value: "98%", label: "Taxa de retenção", icon: Award },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "CEO",
    company: "TechFlow",
    avatar: "LF",
    quote:
      "Em 3 meses a Gate triplicou nossos leads qualificados. O dashboard em tempo real mudou a forma como tomamos decisões.",
    metric: "+320% leads",
    stars: 5,
    accentColor: "purple",
  },
  {
    name: "Ana Beatriz",
    role: "Diretora de Marketing",
    company: "NovaBrand",
    avatar: "AB",
    quote:
      "A integração entre tráfego e automação foi um game-changer. O follow-up automatizado converteu 40% mais.",
    metric: "+40% conversão",
    stars: 5,
    accentColor: "fuchsia",
  },
  {
    name: "Rafael Santos",
    role: "Fundador",
    company: "ScaleUp Digital",
    avatar: "RS",
    quote:
      "Nunca tive um time tão alinhado. A Gate entende de negócio — não é só mais uma agência de marketing.",
    metric: "6x ROI",
    stars: 5,
    accentColor: "violet",
  },
  {
    name: "Mariana Costa",
    role: "Head of Growth",
    company: "FinEdge",
    avatar: "MC",
    quote:
      "O agente de IA que a Gate construiu atende 80% das nossas dúvidas sem intervenção humana. Escalamos sem contratar.",
    metric: "80% automação",
    stars: 5,
    accentColor: "indigo",
  },
  {
    name: "Pedro Almeida",
    role: "COO",
    company: "MedConnect",
    avatar: "PA",
    quote:
      "Passamos de R$ 15k para R$ 85k em faturamento mensal em 6 meses. A estratégia integrada realmente funciona.",
    metric: "+467% receita",
    stars: 5,
    accentColor: "purple",
  },
  {
    name: "Camila Vieira",
    role: "Sócia",
    company: "Studio Cria",
    avatar: "CV",
    quote:
      "O branding que fizeram nos posicionou em outro nível. Clientes chegam já confiando na gente — o design vende sozinho.",
    metric: "2x ticket médio",
    stars: 5,
    accentColor: "fuchsia",
  },
  {
    name: "Diego Martins",
    role: "Diretor Comercial",
    company: "AutoParts BR",
    avatar: "DM",
    quote:
      "O CPL caiu 62% e a qualidade dos leads melhorou. Hoje cada real investido volta multiplicado.",
    metric: "-62% CPL",
    stars: 5,
    accentColor: "violet",
  },
  {
    name: "Juliana Rocha",
    role: "CEO",
    company: "EduTech Pro",
    avatar: "JR",
    quote:
      "A landing page que a Gate criou converteu 3x mais que a anterior. O time entende de copy, design e dados.",
    metric: "3x conversão LP",
    stars: 5,
    accentColor: "indigo",
  },
];

const accentMap: Record<string, string> = {
  purple: "from-purple-500/20 to-purple-900/5",
  fuchsia: "from-fuchsia-500/20 to-fuchsia-900/5",
  violet: "from-violet-500/20 to-violet-900/5",
  indigo: "from-indigo-500/20 to-indigo-900/5",
};

const textMap: Record<string, string> = {
  purple: "text-purple-400",
  fuchsia: "text-fuchsia-400",
  violet: "text-violet-400",
  indigo: "text-indigo-400",
};

/* ─── Testimonial Card ─── */
function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] group cursor-default">
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden transition-all duration-300 hover:border-purple-500/15 hover:shadow-[0_0_40px_rgba(168,85,247,0.04)]">
        {/* Top gradient accent */}
        <div
          className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${
            accentMap[t.accentColor]
          } opacity-50`}
        />

        <div className="relative p-5 md:p-6">
          {/* Quote icon */}
          <Quote className="w-6 h-6 text-white/[0.06] mb-3" />

          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 text-yellow-500/80 fill-yellow-500/80"
              />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-neutral-300 text-[13px] leading-relaxed mb-5 min-h-[72px]">
            "{t.quote}"
          </p>

          {/* Metric badge */}
          <div className="mb-5">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] ${
                textMap[t.accentColor]
              }`}
            >
              <ArrowUpRight className="w-3 h-3" />
              {t.metric}
            </span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
            <div
              className={`w-9 h-9 rounded-full bg-gradient-to-br ${
                accentMap[t.accentColor]
              } border border-white/[0.08] flex items-center justify-center`}
            >
              <span className="text-[11px] font-bold text-white/50">
                {t.avatar}
              </span>
            </div>
            <div>
              <p className="text-white/80 text-sm font-semibold leading-tight">
                {t.name}
              </p>
              <p className="text-neutral-500 text-[11px]">
                {t.role}, {t.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Header ── */
      gsap.fromTo(
        ".results-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      /* ── Stats stagger ── */
      gsap.fromTo(
        ".stat-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
        }
      );

      /* ── Infinite scroll — Row 1 (left) ── */
      const setupMarquee = (
        el: HTMLDivElement | null,
        direction: "left" | "right"
      ) => {
        if (!el) return;
        const inner = el.querySelector(".marquee-inner") as HTMLElement;
        if (!inner) return;

        const totalWidth = inner.scrollWidth / 2;
        const xStart = direction === "left" ? 0 : -totalWidth;
        const xEnd = direction === "left" ? -totalWidth : 0;

        gsap.fromTo(
          inner,
          { x: xStart },
          {
            x: xEnd,
            duration: 50,
            ease: "none",
            repeat: -1,
          }
        );

        // Pause on hover
        el.addEventListener("mouseenter", () =>
          gsap.to(inner, { timeScale: 0, duration: 0.4 })
        );
        el.addEventListener("mouseleave", () =>
          gsap.to(inner, { timeScale: 1, duration: 0.4 })
        );
      };

      setupMarquee(row1Ref.current, "left");
      setupMarquee(row2Ref.current, "right");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 bg-[#05000a] pointer-events-none" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-purple-600/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* ════════════════════════════════════════════════════
            HEADER
            ════════════════════════════════════════════════════ */}
        <div className="results-header text-center px-6 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
            <Award className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Resultados Reais
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-5 leading-[1.1]">
            Quem confia na Gate,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">
              cresce.
            </span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
            Mais de 120 empresas já transformaram sua operação digital.{" "}
            <span className="text-white/60 font-medium">
              Veja o que eles dizem.
            </span>
          </p>
        </div>

        {/* ════════════════════════════════════════════════════
            STATS ROW
            ════════════════════════════════════════════════════ */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto px-6 mb-16 md:mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="stat-item relative rounded-xl border border-white/[0.06] bg-white/[0.015] px-5 py-5 text-center group hover:border-purple-500/15 transition-all duration-200 cursor-default overflow-hidden"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-purple-500/[0.05] blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Icon className="w-4 h-4 text-purple-400/40 mx-auto mb-2 group-hover:text-purple-400/70 transition-colors duration-200" />
                <p className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight tabular-nums mb-1">
                  {stat.value}
                </p>
                <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════
            MARQUEE ROW 1 → LEFT
            ════════════════════════════════════════════════════ */}
        <div
          ref={row1Ref}
          className="relative mb-4 overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#05000a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#05000a] to-transparent z-10 pointer-events-none" />

          <div className="marquee-inner flex gap-4 will-change-transform">
            {/* Duplicate for seamless loop */}
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            MARQUEE ROW 2 → RIGHT
            ════════════════════════════════════════════════════ */}
        <div
          ref={row2Ref}
          className="relative overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#05000a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#05000a] to-transparent z-10 pointer-events-none" />

          <div className="marquee-inner flex gap-4 will-change-transform">
            {/* Duplicate for seamless loop */}
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
