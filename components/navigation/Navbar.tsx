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
        <Link href="#home" className="flex items-center shrink-0" aria-label="DigiTechLeads home">
          {/* Logo removed to fix overlapping text issue as requested */}
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[70px] left-0 right-0 z-[999] flex flex-col gap-[1.25rem] bg-[rgba(13,17,23,0.98)] backdrop-blur-[20px] px-[5%] py-8 border-b border-white/5 max-h-[90vh] overflow-y-auto transition-all duration-300",
          !isMobileMenuOpen && "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block py-2 text-[0.95rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
              link.isCta ? "text-gold" : "text-white/80 border-b border-white/5 hover:text-gold"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
