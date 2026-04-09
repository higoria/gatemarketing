const logos = [
  { name: "Nexify", abbr: "NX" },
  { name: "Vortex Lab", abbr: "VL" },
  { name: "Alpharise", abbr: "AR" },
  { name: "Primeflow", abbr: "PF" },
  { name: "Zenith Co.", abbr: "ZC" },
  { name: "Orbita", abbr: "OR" },
  { name: "Lumeon", abbr: "LU" },
  { name: "Stratex", abbr: "ST" },
];

export default function LogoStrip() {
  const doubled = [...logos, ...logos];
  return (
    <section className="relative w-full py-12 overflow-hidden">
      <p className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-8">
        Empresas que já escalamos
      </p>

      <div className="relative flex overflow-hidden">
        {/* Fade edges — match App bg */}
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#05000a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#05000a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 animate-[ticker_35s_linear_infinite] whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2 flex-shrink-0 group cursor-default"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/20 font-bold text-[10px] group-hover:text-white/40 group-hover:border-white/10 transition-all duration-200">
                {logo.abbr.charAt(0)}
              </div>
              <span className="text-white/20 font-semibold text-sm tracking-wide group-hover:text-white/40 transition-colors duration-200">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
