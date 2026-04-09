import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  Clock,
  ChevronRight,
  XCircle,
  AlertTriangle,
  ArrowDownRight,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Pain-point data ─── */
const problems = [
  {
    step: "01",
    icon: DollarSign,
    title: "Investimento sem retorno claro",
    description:
      "Você investe em anúncios todo mês, mas não sabe exatamente quanto volta. Os relatórios são genéricos e o dinheiro parece evaporar.",
    stat: "-67%",
    statLabel: "ROI típico sem gestão profissional",
  },
  {
    step: "02",
    icon: Clock,
    title: "Processos manuais que drenam tempo",
    description:
      "Sua equipe perde horas respondendo leads no WhatsApp, atualizando planilhas e fazendo tarefas repetitivas.",
    stat: "12h",
    statLabel: "desperdiçadas por semana em média",
  },
  {
    step: "03",
    icon: XCircle,
    title: "Site que não converte",
    description:
      "Seu site é bonito, mas não gera leads. Sem copy persuasivo, sem funil e sem performance — é um cartão de visita digital caro.",
    stat: "0,8%",
    statLabel: "taxa de conversão média sem otimização",
  },
  {
    step: "04",
    icon: AlertTriangle,
    title: "Marketing desconectado",
    description:
      "Social media de um lado, tráfego do outro, site de outro fornecedor. Nada conversa entre si e os resultados ficam fragmentados.",
    stat: "4x",
    statLabel: "mais caro que uma operação integrada",
  },
];

/* ─── Failing dashboard mock ─── */
const failingMetrics = [
  { label: "Conversão", value: "0,8%", trend: "-62%" },
  { label: "CPL", value: "R$ 87", trend: "+340%" },
  { label: "ROI", value: "-23%", trend: "↓" },
  { label: "Leads", value: "12", trend: "-78%" },
];

const failingRows = [
  { campaign: "Campanha Genérica #1", spent: "R$ 3.200", leads: "4", cpl: "R$ 800", status: "Crítico", roi: "- 67%" },
  { campaign: "Stories Boost", spent: "R$ 1.800", leads: "11", cpl: "R$ 163", status: "Low", roi: "- 12%" },
  { campaign: "Remarketing (sem pixel)", spent: "R$ 2.400", leads: "0", cpl: "—", status: "Erro", roi: "— —" },
];

export default function Problems() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Left text block ── */
      gsap.fromTo(
        ".problems-text-block",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      /* ── Dashboard entrance — subtle rise ── */
      gsap.fromTo(
        dashRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: dashRef.current, start: "top 85%" },
        }
      );

      /* ── Problem cards stagger ── */
      gsap.fromTo(
        ".problem-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".problems-grid", start: "top 85%" },
        }
      );

      /* ── Animated chart bars (subtle) ── */
      gsap.to(".chart-bar-prob", {
        scaleY: () => 0.4 + Math.random() * 0.6,
        duration: 1.2,
        stagger: { each: 0.1, repeat: -1, yoyo: true },
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 px-6 overflow-hidden"
    >
      {/* ─── Background — seamless with App bg ─── */}
      <div className="absolute inset-0 bg-[#05000a] pointer-events-none" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] bg-purple-600/[0.06] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] bg-fuchsia-600/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ════════════════════════════════════════════════════
            SECTION A: Side-by-side — Text Left + Dashboard Right
            ════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24 md:mb-32">

          {/* ── Left: Text block ── */}
          <div className="problems-text-block lg:w-[45%] flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                Isso parece familiar?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-5 leading-[1.1]">
              Sua operação digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">
                está travada.
              </span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
              Enquanto você lê isso, leads frios estão sendo ignorados, anúncios
              estão queimando verba e seu concorrente está escalando.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Anúncios que não geram retorno previsível",
                "Leads perdidos por falta de automação",
                "Zero integração entre canais de marketing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors duration-200">
                    <ChevronRight className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Compact failing dashboard ── */}
          <div className="lg:w-[55%] w-full max-w-xl lg:max-w-none">
            <div
              ref={dashRef}
              className="relative w-full rounded-2xl border border-white/10 bg-[#0d0618] shadow-[0_0_50px_rgba(168,85,247,0.06),0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Top bar */}
              <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-500/40" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <AlertTriangle className="w-3 h-3 text-purple-400/60" />
                  <span className="text-[10px] font-medium text-white/30 tracking-wide">
                    Performance — sem agência qualificada
                  </span>
                </div>
                <span className="ml-auto text-[9px] text-white/15 font-mono">
                  dashboard.panel
                </span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {failingMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5 group hover:border-purple-500/15 transition-colors duration-200 cursor-default"
                  >
                    <p className="text-[9px] text-white/25 font-semibold uppercase tracking-wider mb-0.5">
                      {m.label}
                    </p>
                    <p className="text-sm font-bold text-white/80 tabular-nums">
                      {m.value}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <ArrowDownRight className="w-2.5 h-2.5 text-purple-400/60" />
                      <span className="text-[10px] text-purple-400/60 font-semibold">{m.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart + Table */}
              <div className="flex flex-col lg:flex-row border-t border-white/5">
                {/* Mini chart */}
                <div className="lg:w-[45%] p-4 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-3 h-3 text-white/15" />
                    <span className="text-[9px] text-white/20 font-medium">Últimos 30 dias</span>
                  </div>
                  <div className="flex items-end gap-[3px] h-16">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="chart-bar-prob flex-1 rounded-[2px] origin-bottom"
                        style={{
                          height: "100%",
                          transform: `scaleY(${0.2 + Math.random() * 0.35})`,
                          background: `linear-gradient(to top, rgba(168,85,247,${i > 14 ? 0.35 : 0.12}), rgba(168,85,247,0.03))`,
                        }}
                      />
                    ))}
                  </div>
                  {/* Dashed decline line */}
                  <svg className="w-full h-16 -mt-16 pointer-events-none" viewBox="0 0 400 64" preserveAspectRatio="none">
                    <path
                      d="M0,15 C80,12 140,22 200,30 C260,38 320,50 400,58"
                      fill="none"
                      stroke="rgba(168,85,247,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                  </svg>
                </div>

                {/* Table */}
                <div className="lg:w-[55%] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 className="w-3 h-3 text-white/15" />
                    <span className="text-[9px] font-semibold text-white/20 uppercase tracking-wider">
                      Campanhas
                    </span>
                    <span className="ml-auto text-[9px] bg-purple-500/10 text-purple-300/60 px-1.5 py-0.5 rounded font-semibold border border-purple-500/10">
                      3 alertas
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {failingRows.map((row, i) => (
                      <div
                        key={i}
                        className="group rounded-lg border border-white/[0.04] bg-white/[0.01] px-3 py-2 hover:border-purple-500/10 transition-colors duration-200 cursor-default"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                            <Target className="w-3 h-3 text-white/10" />
                            {row.campaign}
                          </span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-bold border ${
                              row.status === "Erro"
                                ? "bg-purple-500/10 text-purple-300/70 border-purple-500/15"
                                : row.status === "Crítico"
                                ? "bg-purple-500/10 text-purple-300/50 border-purple-500/10"
                                : "bg-white/5 text-white/30 border-white/5"
                            }`}
                          >
                            {row.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-white/20">
                          <span>{row.spent}</span>
                          <span>•</span>
                          <span>{row.leads} leads</span>
                          <span>•</span>
                          <span className="text-purple-400/50">{row.cpl}</span>
                          <span className="ml-auto text-purple-300/40 font-bold text-xs">{row.roi}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom alert */}
                  <div className="mt-3 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-purple-500/[0.04] border border-purple-500/8">
                    <Users className="w-3 h-3 text-purple-400/40 flex-shrink-0" />
                    <p className="text-[10px] text-purple-300/30">
                      <span className="text-purple-300/50 font-semibold">47 leads perdidos</span> por falta de automação
                    </p>
                  </div>
                </div>
              </div>

              {/* Health bar */}
              <div className="px-4 py-2.5 border-t border-white/5 flex items-center gap-3">
                <span className="text-[9px] text-white/15 font-medium">Saúde geral:</span>
                <div className="flex-1 h-1 bg-white/[0.03] rounded-full overflow-hidden">
                  <div className="h-full w-[18%] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.3)]" />
                </div>
                <span className="text-[9px] text-purple-400/60 font-bold">18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            SECTION B: Problem cards — refined layout
            ════════════════════════════════════════════════════ */}
        <div className="problems-grid grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={i}
                className="problem-card group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-500/15 hover:shadow-[0_0_30px_rgba(168,85,247,0.04)] cursor-default"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500/40 to-fuchsia-500/20 group-hover:w-full transition-all duration-500" />

                <div className="p-6">
                  {/* Step number + icon row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-purple-400/30 font-mono tracking-widest">
                        {problem.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-purple-500/8 border border-purple-500/10 flex items-center justify-center text-purple-400/70 group-hover:bg-purple-500/12 group-hover:text-purple-400 transition-all duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-white/70 tabular-nums tracking-tight">
                        {problem.stat}
                      </p>
                      <p className="text-[9px] text-white/20 font-medium max-w-[120px] leading-tight">
                        {problem.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white/90 font-semibold text-[15px] mb-2 tracking-tight group-hover:text-white transition-colors duration-200">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Bottom transition ─── */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-neutral-500 text-sm md:text-base mb-3">
            Se você se identificou com pelo menos um desses problemas...
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300/80">
            A Gate foi criada para resolver cada um deles.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-7 h-10 rounded-full border border-white/10 flex justify-center pt-2">
              <div className="w-0.5 h-2.5 rounded-full bg-white/20 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
