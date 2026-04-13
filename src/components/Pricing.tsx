import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Zap,
  Rocket,
  Crown,
  ArrowRight,
  Megaphone,
  Palette,
  Code2,
  BrainCircuit,
  BarChart3,
  Headphones,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Plans ─── */
const plans = [
  {
    name: "Gate BRONZE",
    subtitle: "Para quem precisa de presença profissional imediata",
    price: "497",
    period: "/mês",
    icon: Zap,
    highlight: false,
    cta: "Começar com o Bronze",
    features: [
      { icon: Target, text: "Diagnóstico completo da presença digital atual" },
      { icon: Palette, text: "Identidade visual aplicada (bio, destaques, feed)" },
      { icon: Users, text: "Gestão de 1 rede social (Instagram ou LinkedIn)" },
      { icon: Megaphone, text: "4 posts/mês com copy estratégica + design profissional" },
      { icon: Rocket, text: "1 vídeo/mês editado e roteirizado" },
      { icon: BarChart3, text: "Relatório mensal de performance" },
      { icon: Headphones, text: "Suporte via WhatsApp em horário comercial" },
    ],
  },
  {
    name: "Gate PRATA",
    subtitle: "Para quem quer crescimento consistente e autoridade",
    price: "697",
    period: "/mês",
    icon: Target,
    highlight: true,
    popular: true,
    cta: "Quero o Prata →",
    includes: "Tudo do Bronze, mais:",
    features: [
      { icon: Crown, text: "Estratégia de posicionamento e autoridade de marca" },
      { icon: Zap, text: "Reconstrução ou otimização completa do perfil" },
      { icon: TrendingUp, text: "6 posts/mês + 2 vídeos (reels estratégicos)" },
      { icon: Layers, text: "Planejamento editorial mensal orientado a resultado" },
      { icon: ArrowRight, text: "Destaques estratégicos e bio de alta conversão" },
      { icon: MessageSquare, text: "Resposta a comentários e gestão de engajamento" },
      { icon: BarChart3, text: "Relatório quinzenal com sugestões de ajuste" },
    ],
  },
  {
    name: "Gate OURO",
    subtitle: "Para quem quer transformar seguidores em clientes pagando",
    price: "997",
    period: "/mês",
    icon: Crown,
    highlight: false,
    cta: "Quero o Ouro",
    includes: "Tudo do Prata, mais:",
    features: [
      { icon: BrainCircuit, text: "Funil de conteúdo estruturado para vendas" },
      { icon: TrendingUp, text: "8 posts/mês + 4 vídeos elaborados (roteiro + edição)" },
      { icon: MessageSquare, text: "Automação de DMs e integração WhatsApp Business" },
      { icon: Code2, text: "Landing page de captura ou página de vendas inclusa" },
      { icon: Target, text: "Tráfego pago básico (até R$ 500 de verba gerenciada)" },
      { icon: BarChart3, text: "Dashboard de métricas e reunião mensal de estratégia" },
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Header reveal ── */
      gsap.fromTo(
        ".pricing-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      /* ── Cards stagger ── */
      gsap.fromTo(
        ".pricing-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );

      /* ── Enterprise banner ── */
      gsap.fromTo(
        ".enterprise-banner",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".enterprise-banner",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 px-6 overflow-hidden"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 bg-[#05000a] pointer-events-none" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] radial-glow-purple rounded-full pointer-events-none transform-gpu" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ════════════════════════════════════════════════════
            HEADER
            ════════════════════════════════════════════════════ */}
        <div className="pricing-header text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              Planos & Investimento
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-5 leading-[1.05]">
            Invista no que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">gera retorno.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto leading-relaxed">
            Sem taxa de setup. Sem contrato de 12 meses. Sem surpresas.{" "}
            <span className="text-white/60 font-medium">
              Escolha o plano certo para o momento do seu negócio.
            </span>
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                !annual ? "text-white/80" : "text-white/30"
              }`}
            >
              Mensal
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
                annual
                  ? "bg-purple-500"
                  : "bg-white/10"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  annual ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                annual ? "text-white/80" : "text-white/30"
              }`}
            >
              Anual
            </span>
            {annual && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase tracking-wider">
                -20%
              </span>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            PRICING CARDS
            ════════════════════════════════════════════════════ */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          {plans.map((plan, i) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={i}
                className={`pricing-card relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isHighlight
                    ? "md:-mt-3 md:mb-0"
                    : ""
                }`}
              >
                {/* Glow for highlighted card */}
                {isHighlight && (
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent pointer-events-none" />
                )}

                <div
                  className={`relative h-full rounded-2xl border flex flex-col ${
                    isHighlight
                      ? "border-purple-500/20 bg-gradient-to-b from-purple-500/[0.08] to-[#0a0015]"
                      : "border-white/[0.06] bg-white/[0.015]"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    {/* Plan name + subtitle */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white/90 tracking-tight mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-[13px] text-neutral-500">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {plan.price === "Sob consulta" ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
                            Sob consulta
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[13px] text-white/40 font-medium">
                            R$
                          </span>
                          <span className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight tabular-nums">
                            {annual
                              ? Math.round(parseInt(plan.price.replace(".", "")) * 0.8)
                                  .toLocaleString("pt-BR")
                              : plan.price}
                          </span>
                          <span className="text-sm text-white/30 font-medium">
                            {plan.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/[0.06] mb-5" />

                    {/* Includes label */}
                    {plan.includes && (
                      <p className="text-[12px] font-semibold text-purple-400/70 uppercase tracking-wider mb-3">
                        {plan.includes}
                      </p>
                    )}

                    {/* Feature list */}
                    <ul className="space-y-2.5 flex-1">
                      {plan.features.map((feat, fi) => {
                        const FeatIcon = feat.icon;
                        return (
                          <li key={fi} className="flex items-start gap-2.5">
                            <FeatIcon
                              className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                                isHighlight
                                  ? "text-purple-400/70"
                                  : "text-white/20"
                              }`}
                            />
                            <span className="text-[13px] text-neutral-400 leading-snug">
                              {feat.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="p-6 md:p-7 pt-0">
                    <button
                      className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isHighlight
                          ? "bg-purple-500 hover:bg-purple-400 text-white shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
                          : "bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white/80 hover:border-white/15 hover:bg-white/[0.06]"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Guarantee row ─── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 mt-2">
          {[
            { emoji: "🔒", text: "Sem contrato de fidelidade" },
            { emoji: "💳", text: "Cancele quando quiser" },
            { emoji: "📊", text: "Relatório de resultados mensais" },
            { emoji: "🎯", text: "Estratégia 100% personalizada" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-neutral-500">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════
            ENTERPRISE BANNER
            ════════════════════════════════════════════════════ */}
        <div className="enterprise-banner rounded-2xl border border-purple-500/10 bg-gradient-to-r from-purple-500/[0.04] to-fuchsia-500/[0.02] px-7 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Crown className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <span className="text-white/80 font-semibold text-sm flex items-center gap-2">
                Gate Enterprise
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-semibold">Sob consulta</span>
              </span>
              <span className="text-neutral-500 text-[13px] mt-0.5 block">
                Para operações que precisam de tráfego, automação, sistemas e IA — tudo junto, com estratégia dedicada e resultados mensuráveis em 30 dias.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-semibold hover:bg-purple-400 transition-all duration-200 cursor-pointer group shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
          >
            Quero uma proposta personalizada
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
