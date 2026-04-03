"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Megaphone, 
  Share2, 
  PenTool, 
  Mail, 
  Monitor, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Video, 
  Handshake, 
  Cpu 
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Get Started", isCta: true },
];

const servicesDropdown = [
  { 
    href: "#service-seo", 
    icon: <Search className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-indigo-500/20",
    label: "SEO Optimization" 
  },
  { 
    href: "#service-ppc", 
    icon: <Megaphone className="text-amber-400 group-hover:text-amber-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-amber-500/20",
    label: "PPC / Google Ads" 
  },
  { 
    href: "#service-smm", 
    icon: <Share2 className="text-pink-400 group-hover:text-pink-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-pink-500/20",
    label: "Social Media Marketing" 
  },
  { 
    href: "#service-content", 
    icon: <PenTool className="text-gold group-hover:text-[#FFD700] transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-gold/20",
    label: "Content Marketing" 
  },
  { 
    href: "#service-email", 
    icon: <Mail className="text-sky-400 group-hover:text-sky-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-sky-500/20",
    label: "Email Marketing" 
  },
  { 
    href: "#service-web", 
    icon: <Monitor className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-cyan-500/20",
    label: "Web Design & Dev" 
  },
  { 
    href: "#service-analytics", 
    icon: <BarChart3 className="text-purple-400 group-hover:text-purple-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-purple-500/20",
    label: "Analytics & Reporting" 
  },
  { 
    href: "#service-cro", 
    icon: <Target className="text-rose-400 group-hover:text-rose-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-rose-500/20",
    label: "CRO" 
  },
  { 
    href: "#service-orm", 
    icon: <ShieldCheck className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-emerald-500/20",
    label: "Reputation Management" 
  },
  { 
    href: "#service-video", 
    icon: <Video className="text-orange-400 group-hover:text-orange-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-orange-500/20",
    label: "Video Marketing" 
  },
  { 
    href: "#service-affiliate", 
    icon: <Handshake className="text-teal-400 group-hover:text-teal-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-teal-500/20",
    label: "Affiliate Marketing" 
  },
  { 
    href: "#service-automation", 
    icon: <Cpu className="text-slate-400 group-hover:text-slate-300 transition-colors" size={16} strokeWidth={2} />, 
    glow: "bg-slate-500/20",
    label: "Marketing Automation" 
  },
];

export function Navbar() {
  const scrolled = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] w-full flex items-center justify-between transition-all duration-500",
          scrolled 
            ? "h-[75px] bg-[rgba(13,17,23,0.85)] backdrop-blur-[20px] border-b border-white/5 !px-[5vw]" 
            : "h-[100px] bg-transparent backdrop-blur-none border-b border-transparent !px-[5vw]"
        )}
      >
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 shrink-0 group transition-all duration-300 hover:opacity-90 active:scale-95" aria-label="DigiTechLeads home">
          <div className="relative w-9 h-9 md:w-11 md:h-11">
            <Image
              src="/images/digitechleads_icon_transparent.png"
              alt="DigiTechLeads Icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-36 h-6 md:w-44 md:h-8 hidden sm:block">
            <Image
              src="/images/digitechleads_text_transparent.png"
              alt="DigiTechLeads Text"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Group */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="flex items-center">
                {link.href === "#services" ? (
                  <div className="relative group">
                    <Link
                      href={link.href}
                      className="relative block px-3 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.07em] text-white/75 transition-all duration-300 hover:text-gold"
                    >
                      {link.label}
                      <span className="ml-[0.3rem] text-[0.6rem] transition-transform duration-300 inline-block group-hover:rotate-180">
                        ▼
                      </span>
                      <span className="absolute bottom-[-1px] left-3 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    </Link>

                    {/* Services Dropdown */}
                    <div className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[740px] -translate-x-1/2 grid grid-cols-2 gap-2 rounded-2xl bg-[rgba(13,17,23,0.98)] backdrop-blur-[24px] border border-white/10 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-3 group-hover:translate-y-0 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-4 rounded-xl p-4 text-[0.88rem] font-semibold text-white/90 transition-all duration-300 hover:bg-white/[0.03] hover:text-gold group/svc border border-transparent hover:border-white/5"
                        >
                          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[1.1rem] shrink-0 overflow-hidden border border-white/5 transition-all duration-500 group-hover/svc:scale-110 group-hover/svc:border-gold/40 group-hover/svc:shadow-[0_0_20px_rgba(245,166,35,0.15)]">
                            <div className={cn("absolute inset-0 opacity-15 blur-xl transition-opacity duration-300 group-hover/svc:opacity-35", service.glow)} />
                            <div className="relative z-10">
                              {service.icon}
                            </div>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[0.92rem] leading-tight">{service.label}</span>
                            <span className="text-[0.7rem] font-normal text-white/40 group-hover/svc:text-white/60 transition-colors uppercase tracking-widest">Growth Focused</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "relative transition-all duration-300",
                      link.isCta 
                        ? "inline-flex items-center justify-center bg-gradient-to-br from-[#F5A623] to-[#FFD700] text-[#0D1117] rounded-[3px] !px-[2rem] !py-[0.75rem] text-[0.87rem] font-bold uppercase tracking-[0.05em] ml-[1.5rem] hover:shadow-[0_4px_20px_rgba(245,166,35,0.4)] hover:-translate-y-px whitespace-nowrap" 
                        : "relative block px-3 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.07em] text-white/75 hover:text-gold group"
                    )}
                  >
                    {link.label}
                    {!link.isCta && (
                      <span className="absolute bottom-[-1px] left-3 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-[5px] cursor-pointer md:hidden flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={cn("block h-[2px] w-[22px] bg-gold transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block h-[2px] w-[22px] bg-gold transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
          <span className={cn("block h-[2px] w-[22px] bg-gold transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed left-0 right-0 bottom-0 z-[990] flex flex-col bg-[rgba(13,17,23,0.98)] backdrop-blur-[20px] px-[8%] py-8 border-t border-white/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "top-[75px]" : "top-[100px]",
          !isMobileMenuOpen 
            ? "opacity-0 invisible pointer-events-none -translate-y-8" 
            : "opacity-100 visible pointer-events-auto translate-y-0"
        )}
      >
        <div className="flex flex-col items-center justify-center gap-7 relative z-10 h-full overflow-y-auto pb-12 pt-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative transition-all duration-500",
                link.isCta 
                  ? "mt-10 flex items-center justify-center bg-gradient-to-br from-[#F5A623] to-[#FFD700] text-[#0D1117] rounded-[4px] shadow-[0_8px_30px_rgba(245,166,35,0.25)] hover:shadow-[0_12px_45px_rgba(245,166,35,0.4)]" 
                  : "flex items-center justify-center w-max"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                ...(link.isCta ? { height: '80px', minWidth: '180px', padding: '0 24px' } : {})
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={cn(
                "transition-all duration-300",
                link.isCta 
                  ? "text-[1.1rem] font-extrabold uppercase tracking-[0.12em] !text-[#0D1117]" 
                  : "font-display text-[3.25rem] leading-none tracking-[0.05em] text-white/90 group-hover:text-gold"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
          
          {/* Ambient Background Effects */}
          <div className="absolute top-1/4 right-[-10%] w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none z-[-1]"></div>
          <div className="absolute bottom-1/3 left-[-10%] w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none z-[-1]"></div>
        </div>
      </div>
    </>
  );
}
