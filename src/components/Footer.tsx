"use client";

import { Instagram, Linkedin, Youtube, ArrowRight, Mail, MessageCircle } from "lucide-react";
import Logo from "../assets/LogoGate.png";

const footerLinks = {
  Serviços: [
    { label: "Tráfego Pago", href: "#serviços" },
    { label: "Design & Branding", href: "#serviços" },
    { label: "Sites & Sistemas", href: "#serviços" },
    { label: "IA & Automação", href: "#serviços" },
  ],
  Empresa: [
    { label: "Cases de Sucesso", href: "#cases" },
    { label: "Planos & Preços", href: "#preços" },
    { label: "Sobre a Gate", href: "#sobre" },
    { label: "Trabalhe conosco", href: "mailto:time@gateagency.com.br" },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#05000a] border-t border-white/[0.04]">

      {/* ════════════════════════════════════════
          CTA FINAL — "Pronto para escalar?"
          ════════════════════════════════════════ */}
      <div className="relative py-24 md:py-32 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.12) 0%, transparent 100%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white/80">Atendimento disponível agora</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80 mb-6 leading-tight">
            Pronto para parar de<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400"> queimar dinheiro?</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Agende uma conversa gratuita de 30 minutos. A gente analisa sua operação atual e mostra exatamente o que precisa mudar para você faturar mais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-white text-black px-8 py-4 font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp agora
            </a>
            <a
              href="mailto:contato@gateagency.com.br"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-white/80 font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Enviar e-mail
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <span>✓ Diagnóstico gratuito</span>
            <span>✓ Sem compromisso</span>
            <span>✓ Resposta em até 2h</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          FOOTER LINKS
          ════════════════════════════════════════ */}
      <div className="border-t border-white/[0.04] px-6 pt-16 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">

            {/* Brand column */}
            <div>
              <img src={Logo} alt="Gate Logo" className="h-16 w-auto mb-4 opacity-90" />
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
                Agência de marketing full-service que une tráfego pago, design, tecnologia e IA para fazer seu negócio escalar com previsibilidade.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: "https://instagram.com/gateagency" },
                  { icon: Linkedin, href: "https://linkedin.com/company/gateagency" },
                  { icon: Youtube, href: "https://youtube.com/@gateagency" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/15 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-white/70 font-semibold text-sm mb-4 tracking-wide">{section}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-neutral-500 text-sm hover:text-white/70 transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600 text-xs">
              © {new Date().getFullYear()} Gate Agency. Todos os direitos reservados.
            </p>
            <p className="text-neutral-600 text-xs">
              contato@gateagency.com.br · +55 (00) 00000-0000
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
