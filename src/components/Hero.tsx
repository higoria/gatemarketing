"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Search, Compass, MousePointerClick, BarChart2, Link as LinkIcon, Filter, ArrowUpDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);
  const cometsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Content Fade-up (Initial Load)
      gsap.fromTo(
        contentRef.current?.children as HTMLCollection,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: "expo.out", delay: 0.2 }
      );

      // 2. Dashboard Rise Up (Initial Load)
      gsap.fromTo(
        dashboardRef.current,
        { y: 150, opacity: 0, rotationX: 10 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.8, ease: "expo.out", delay: 0.6 }
      );

      // 3. Horizon Breathe Loop with ScrollTrigger pause
      if (horizonRef.current) {
        gsap.to(horizonRef.current, {
          scale: 1.15,
          opacity: 0.9,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause"
          }
        });
      }

      // ORBS, RAYS, COMETS e STARS foram migrados para animações CSS puras
      // para offload massivo da CPU e uso da GPU.

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden bg-[#05000a] text-white selection:bg-purple-500 selection:text-white"
    >
      {/* 
        ====================================================
        1. BACKGROUND: Deep Purple Space & Dynamic Layers
        ====================================================
      */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030005] via-[#0a0014] to-[#05000a] pointer-events-none" />

      {/* Floating Ambient Orbs (Wope style background glows) - Optimized */}
      <div ref={orbsRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full radial-glow-purple" style={{ animation: "orb-float 15s infinite ease-in-out alternate" }} />
        <div className="absolute top-[10%] right-[20%] w-[35vw] h-[35vw] rounded-full radial-glow-fuchsia" style={{ animation: "orb-float 18s infinite ease-in-out alternate-reverse" }} />
        <div className="absolute top-[40%] left-[50%] w-[50vw] h-[50vw] rounded-full radial-glow-indigo" style={{ animation: "orb-float 20s infinite ease-in-out alternate" }} />
      </div>

      {/* Sweeping Light Rays */}
      <div ref={raysRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-0 -left-[20%] w-[200px] h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-[20px] will-change-transform" style={{ animation: "sweep-ray 12s infinite linear" }} />
        <div className="absolute top-0 -left-[20%] w-[300px] h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent blur-[30px] will-change-transform" style={{ animation: "sweep-ray 15s infinite linear 4s" }} />
      </div>

      {/* Shooting Comets */}
      <div ref={cometsRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] will-change-transform opacity-0" style={{ transform: 'rotate(215deg)', animation: `shooting-comet 4s infinite ease-in-out ${i * 4}s` }} />
        ))}
      </div>

      {/* Rotating Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div ref={starsRef} className="absolute w-[150vw] h-[150vw]" style={{ animation: "star-spin 250s infinite linear" }}>
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"
              style={{
                width: Math.random() > 0.8 ? '3px' : '1.5px',
                height: Math.random() > 0.8 ? '3px' : '1.5px',
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `star-twinkle ${Math.random() * 2 + 1}s infinite alternate ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* 
        ====================================================
        2. HORIZON GLOW & PERSPECTIVE GRID
        ====================================================
      */}
      {/* Massive Center Horizon Glow / Breathing Core */}
      <div ref={horizonRef} className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none z-0 transform-gpu">
        <div className="absolute w-[140vw] h-[20vw] rounded-[100%] radial-glow-purple" />
        <div className="absolute w-[80vw] h-[10vw] rounded-[100%] radial-glow-fuchsia" />
        <div className="absolute w-[120vw] h-[1px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent shadow-[0_0_20px_#a855f7]" />
      </div>

      {/* Deep Perspective Grid overlapping bottom half */}
      <div
        ref={gridRef}
        className="absolute top-[45%] left-0 w-full h-[60%] opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(168, 85, 247, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 40px",
          transform: "perspective(800px) rotateX(75deg) scale(2.8)",
          transformOrigin: "top center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-transparent to-transparent" />
      </div>

      {/* 
        ====================================================
        3. HERO CONTENT (Typography & CTA)
        ====================================================
      */}
      <div className="relative z-10 container mx-auto px-6 mt-[12vh] md:mt-[15vh]">
        <div ref={contentRef} className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white/80">🔥 Vagas abertas para Maio · Apenas 5 slots disponíveis</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-6 leading-tight pb-2" style={{ fontWeight: 700 }}>
            Sua empresa fatura mais.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">A Gate garante isso.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-400 font-medium tracking-tight max-w-2xl text-balance mb-4">
            Unimos tráfego pago, automação com IA, design estratégico e tecnologia em uma única operação — <strong className="text-white">para gerar mais leads, mais vendas e mais previsibilidade.</strong>
          </p>

          {/* Social proof micro */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex -space-x-2">
              {['LF','AB','RS','MC','PA'].map((abbr) => (
                <div key={abbr} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 border-2 border-[#05000a] flex items-center justify-center text-[9px] font-bold text-white/60">
                  {abbr}
                </div>
              ))}
            </div>
            <p className="text-sm text-neutral-400">
              <span className="text-white font-semibold">+120 empresas</span> já escalaram com a Gate
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full bg-white text-black px-8 py-3.5 font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Quero escalar meu negócio →
            </a>
            <button className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-white/90 font-medium text-sm transition-all hover:bg-white/10 hover:border-white/40 shadow-[0_0_15px_rgba(168,85,247,0.1)] group">
              <span className="flex items-center gap-2">Ver resultados reais <ArrowUpDown className="w-4 h-4 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* 
        ====================================================
        4. DASHBOARD UI FOREGROUND
        ====================================================
      */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 lg:px-8 mt-[10vh] perspective-1000">
        <div
          ref={dashboardRef}
          className="w-full h-[400px] lg:h-[500px] rounded-t-2xl border-t border-l border-r border-white/20 bg-[#130724] shadow-[0_-15px_50px_rgba(168,85,247,0.15)] flex overflow-hidden relative will-change-transform"
        >
          {/* Top subtle inner glow on the dashboard */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

          {/* Dashboard Sidebar */}
          <div className="w-64 border-r border-white/10 hidden md:flex flex-col py-6 px-4">

            <div className="flex items-center gap-3 px-3 mb-8">
              <div className="w-6 h-6 rounded-md bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 font-bold text-xs" style={{ fontFamily: "sans-serif" }}>G</div>
              <span className="text-sm font-semibold tracking-wide text-white/80">Gate Agency ¬</span>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input type="text" placeholder="Quick Actions" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-xs text-white placeholder-white/30 outline-none focus:border-purple-500/50" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase px-3 mb-2">Research</span>
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white text-sm font-medium">
                <Compass className="w-4 h-4 text-purple-400" /> Conversions
              </button>
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white/80 text-sm font-medium transition-colors">
                <MousePointerClick className="w-4 h-4" /> Paid Traffic
              </button>
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/50 hover:bg-white/5 hover:text-white/80 text-sm font-medium transition-colors">
                <BarChart2 className="w-4 h-4" /> Analytics
              </button>
            </div>
          </div>

          {/* Dashboard Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Toolbar */}
            <div className="h-16 border-b border-white/10 flex items-center px-6 gap-6 relative">
              <div className="absolute bottom-0 left-6 w-24 h-[1px] bg-purple-500/50 shadow-[0_-2px_10px_#a855f7]" />

              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-purple-400" />
                <h2 className="text-white font-semibold flex items-center gap-1.5 border-r border-white/10 pr-6">Performance <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/60">↗</span></h2>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-white/50">
                <button className="flex items-center gap-2 hover:text-white"><Filter className="w-4 h-4" /> Filter</button>
                <button className="flex items-center gap-2 hover:text-white"><ArrowUpDown className="w-4 h-4" /> Sort</button>
              </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-auto custom-scrollbar p-6">

              <div className="flex items-center text-xs text-white/40 font-semibold mb-4 px-2 tracking-wider">
                <div className="w-[30%]">Campanha</div>
                <div className="w-[15%]">Investimento</div>
                <div className="w-[15%]">CPL</div>
                <div className="w-[10%]">Leads</div>
                <div className="w-[15%]">Status</div>
                <div className="w-[15%] text-right">ROI</div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Row 1 */}
                <div className="flex items-center text-sm bg-white/5 border border-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div className="w-[30%] flex items-center gap-2 font-medium">B2B Lead Gen <LinkIcon className="w-3 h-3 text-white/20" /></div>
                  <div className="w-[15%] text-white/60">R$ 4.500</div>
                  <div className="w-[15%] text-white/60">R$ 15,30</div>
                  <div className="w-[10%] text-white/90 font-bold">294</div>
                  <div className="w-[15%]"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Active</span></div>
                  <div className="w-[15%] text-right text-emerald-400 font-bold">+ 312%</div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center text-sm border border-transparent rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <div className="w-[30%] flex items-center gap-2 font-medium">Lançamento Infoproduto <LinkIcon className="w-3 h-3 text-white/20" /></div>
                  <div className="w-[15%] text-white/60">R$ 12.000</div>
                  <div className="w-[15%] text-white/60">R$ 6,80</div>
                  <div className="w-[10%] text-white/90 font-bold">1764</div>
                  <div className="w-[15%]"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Active</span></div>
                  <div className="w-[15%] text-right text-emerald-400 font-bold">+ 480%</div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center text-sm border border-transparent rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <div className="w-[30%] flex items-center gap-2 font-medium">E-commerce Retargeting <LinkIcon className="w-3 h-3 text-white/20" /></div>
                  <div className="w-[15%] text-white/60">R$ 2.100</div>
                  <div className="w-[15%] text-white/60">R$ 42,00 (CPA)</div>
                  <div className="w-[10%] text-white/90 font-bold">50 V.</div>
                  <div className="w-[15%]"><span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">Scaling</span></div>
                  <div className="w-[15%] text-right text-blue-400 font-bold">+ 205%</div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center text-sm border border-transparent opacity-50 rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <div className="w-[30%] flex items-center gap-2 font-medium text-white/60">Fundo de Funil Local <LinkIcon className="w-3 h-3 text-white/10" /></div>
                  <div className="w-[15%] text-white/40">R$ 800</div>
                  <div className="w-[15%] text-white/40">R$ 25,00</div>
                  <div className="w-[10%] text-white/60 font-bold">32</div>
                  <div className="w-[15%]"><span className="px-2 py-0.5 rounded-full bg-white/5 text-white/40 text-xs font-semibold">Paused</span></div>
                  <div className="w-[15%] text-right text-white/40 font-bold">--</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade — transição suave para a próxima section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#05000a] pointer-events-none z-20" />

    </section>
  );
}
