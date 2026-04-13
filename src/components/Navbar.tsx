"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LogoGate.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed -top-10 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "py-1 bg-[#0a0014]/60 backdrop-blur-md border-b border-white/5"
          : "py-0 bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer z-50">
            <img
              src={Logo}
              alt="Gate Logo"
              className="h-40 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['Plataforma', 'Soluções', 'Cases', 'Preços'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-neutral-300 hover:text-white font-medium transition-colors px-4 py-2">
              Login
            </button>
            <button className="relative overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2 text-white font-medium text-sm transition-all hover:bg-white/20 hover:border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              Agendar Demo
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0014]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {['Plataforma', 'Soluções', 'Cases', 'Preços'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-3xl font-bold text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
          <button className="w-full py-3 rounded-full border border-white/20 bg-transparent text-white font-medium">
            Login
          </button>
          <button className="w-full py-3 rounded-full bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Agendar Demo
          </button>
        </div>
      </div>
    </>
  );
}
