import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MousePointerClick,
  Bot,
  Globe,
  Palette,
  Video,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: MousePointerClick,
    title: "Tráfego Pago",
    description:
      "Meta, Google e TikTok Ads gerenciados com estratégia orientada por dados. Cada centavo trabalhando para converter.",
    color: "from-violet-500/10 to-purple-600/5",
    border: "hover:border-violet-500/30",
    iconColor: "text-violet-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  {
    icon: BarChart3,
    title: "Social Media",
    description:
      "Conteúdo estratégico que posiciona sua marca, gera autoridade e transforma seguidores em compradores.",
    color: "from-fuchsia-500/10 to-pink-600/5",
    border: "hover:border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description:
      "Páginas de alta performance criadas para converter. Design premium + velocidade + SEO de ponta.",
    color: "from-blue-500/10 to-indigo-600/5",
    border: "hover:border-blue-500/30",
    iconColor: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    icon: Palette,
    title: "Identidade Visual & Design",
    description:
      "Branding pensado para elevar a percepção de valor e fazer o mercado levar sua marca a sério.",
    color: "from-emerald-500/10 to-teal-600/5",
    border: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Bot,
    title: "Agentes de IA & Automações",
    description:
      "Sistemas inteligentes que qualificam leads, atendem clientes e otimizam fluxos — 24 horas por dia.",
    color: "from-amber-500/10 to-orange-600/5",
    border: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Video,
    title: "Filmmaker & Conteúdo em Vídeo",
    description:
      "Produção profissional de vídeos que capturam atenção, constroem autoridade e geram vendas reais.",
    color: "from-rose-500/10 to-red-600/5",
    border: "hover:border-rose-500/30",
    iconColor: "text-rose-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05000a] via-[#0d001f] to-[#05000a] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="services-title text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
            <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
              O que entregamos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-4">
            Soluções completas para
            <br />
            <span className="text-white">escalar do zero ao topo.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Não somos uma agência de serviço único. Somos o parceiro estratégico
            que cuida de toda a sua operação digital.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`service-card group relative rounded-2xl border border-white/8 bg-gradient-to-br ${service.color} backdrop-blur-sm p-6 transition-all duration-500 ${service.border} ${service.glow} cursor-default overflow-hidden`}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${service.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom arrow hint */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-white/20 group-hover:text-white/50 transition-colors duration-300">
                  <span>Saiba mais</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
