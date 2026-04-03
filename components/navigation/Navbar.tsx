"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Get Started", isCta: true },
];

const servicesDropdown = [
  { href: "#service-seo", icon: "🔍", label: "SEO Optimization" },
  { href: "#service-ppc", icon: "📢", label: "PPC / Google Ads" },
  { href: "#service-smm", icon: "📱", label: "Social Media Marketing" },
  { href: "#service-content", icon: "✍️", label: "Content Marketing" },
  { href: "#service-email", icon: "📧", label: "Email Marketing" },
  { href: "#service-web", icon: "💻", label: "Web Design & Dev" },
  { href: "#service-analytics", icon: "📊", label: "Analytics & Reporting" },
  { href: "#service-cro", icon: "🎯", label: "CRO" },
  { href: "#service-orm", icon: "🛡️", label: "Reputation Management" },
  { href: "#service-video", icon: "🎬", label: "Video Marketing" },
  { href: "#service-affiliate", icon: "🤝", label: "Affiliate Marketing" },
  { href: "#service-automation", icon: "⚙️", label: "Marketing Automation" },
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
                    <div className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[640px] -translate-x-1/2 grid grid-cols-3 gap-[0.4rem] rounded-xl bg-[rgba(19,25,32,0.98)] backdrop-blur-[20px] border border-white/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-[0.6rem] rounded-lg p-[0.65rem] text-[0.8rem] font-medium text-white transition-all duration-300 hover:bg-gold/10 hover:text-gold"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gold/10 text-[0.9rem] shrink-0">
                            {service.icon}
                          </div>
                          {service.label}
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
