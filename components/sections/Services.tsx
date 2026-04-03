"use client";

import React, { useState } from "react";
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

const services = [
  {
    id: "service-seo",
    num: "01",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-indigo-500/10 blur-lg group-hover:bg-indigo-500/20 transition-all duration-500" />
        <Search size={22} strokeWidth={1.5} className="text-indigo-400 relative z-10" />
      </div>
    ),
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher, win more qualified organic traffic, and build long-term lead generation through on-page SEO, technical SEO and content strategy.",
    benefits: ["Technical SEO", "Content SEO", "Keyword Research"],
    subItems: [
      "Keyword Research",
      "On-Page SEO (content optimization, meta tags, headers)",
      "Technical SEO (site speed, mobile-friendliness, crawlability)",
      "Off-Page SEO (link building)",
      "SEO Audits",
      "Content Strategy for SEO"
    ]
  },
  {
    id: "service-ppc",
    num: "02",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-amber-500/10 blur-lg group-hover:bg-amber-500/20 transition-all duration-500" />
        <Megaphone size={22} strokeWidth={1.5} className="text-amber-400 relative z-10" />
      </div>
    ),
    title: "Search Engine Marketing (SEM) / Pay-Per-Click (PPC)",
    desc: "Targeted Google Ads and paid search campaigns that put your brand in front of high-intent buyers fast.",
    benefits: ["Google Ads", "Retargeting", "Landing Pages"],
    subItems: [
      "Google Ads Management (Search, Display, Shopping)",
      "Bing Ads Management",
      "Remarketing / Retargeting Campaigns",
      "PPC Landing Page Optimization"
    ]
  },
  {
    id: "service-smm",
    num: "03",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-pink-500/10 blur-lg group-hover:bg-pink-500/20 transition-all duration-500" />
        <Share2 size={22} strokeWidth={1.5} className="text-pink-400 relative z-10" />
      </div>
    ),
    title: "Social Media Marketing (SMM)",
    desc: "Build brand authority, engage your audience and convert attention into enquiries with strategic organic and paid social campaigns.",
    benefits: ["Meta Ads", "Creative Strategy", "Lead Forms"],
    subItems: [
      "Social Media Strategy Development",
      "Content Creation (posts, stories, videos)",
      "Community Management & Engagement",
      "Paid Social Advertising (Facebook, Instagram, LinkedIn, X/Twitter, TikTok Ads)",
      "Influencer Marketing"
    ]
  },
  {
    id: "service-content",
    num: "04",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-gold/10 blur-lg group-hover:bg-gold/20 transition-all duration-500" />
        <PenTool size={22} strokeWidth={1.5} className="text-gold relative z-10" />
      </div>
    ),
    title: "Content Marketing",
    desc: "Compelling content that attracts, educates and converts your ideal audience.",
    benefits: [],
    subItems: [
      "Blog Post Writing",
      "Article Writing",
      "Website Copywriting",
      "Video Production (for marketing)",
      "Infographic Design",
      "Ebook & Whitepaper Creation",
      "Case Study Development",
      "Podcast Production"
    ]
  },
  {
    id: "service-email",
    num: "05",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-sky-500/10 blur-lg group-hover:bg-sky-500/20 transition-all duration-500" />
        <Mail size={22} strokeWidth={1.5} className="text-sky-400 relative z-10" />
      </div>
    ),
    title: "Email Marketing",
    desc: "Nurture leads, retain customers and drive revenue through smart email campaigns.",
    benefits: [],
    subItems: [
      "Email List Building Strategies",
      "Email Campaign Management (newsletters, promotions)",
      "Marketing Automation (welcome series, abandoned cart emails)",
      "Email Template Design"
    ]
  },
  {
    id: "service-web",
    num: "06",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-cyan-500/10 blur-lg group-hover:bg-cyan-500/20 transition-all duration-500" />
        <Monitor size={22} strokeWidth={1.5} className="text-cyan-400 relative z-10" />
      </div>
    ),
    title: "Website Design & Development",
    desc: "Beautiful, fast, premium websites designed to rank, build trust and turn visitors into sales conversations.",
    benefits: ["Speed", "UX", "Conversion Design"],
    subItems: [
      "Responsive Website Design",
      "E-commerce Website Development",
      "Website Maintenance & Support",
      "Landing Page Design & Optimization",
      "UI/UX Design"
    ]
  },
  {
    id: "service-analytics",
    num: "07",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-purple-500/10 blur-lg group-hover:bg-purple-500/20 transition-all duration-500" />
        <BarChart3 size={22} strokeWidth={1.5} className="text-purple-400 relative z-10" />
      </div>
    ),
    title: "Analytics & Reporting",
    desc: "Turn raw data into actionable insights that fuel smarter marketing decisions.",
    benefits: [],
    subItems: [
      "Google Analytics Setup & Configuration",
      "Data Analysis & Insights",
      "Custom Dashboard Creation",
      "Regular Performance Reporting"
    ]
  },
  {
    id: "service-cro",
    num: "08",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-rose-500/10 blur-lg group-hover:bg-rose-500/20 transition-all duration-500" />
        <Target size={22} strokeWidth={1.5} className="text-rose-400 relative z-10" />
      </div>
    ),
    title: "Conversion Rate Optimization (CRO)",
    desc: "Turn more of your existing traffic into leads and customers through systematic testing.",
    benefits: [],
    subItems: [
      "A/B Testing (website elements, landing pages)",
      "User Experience (UX) Analysis",
      "Heat Mapping & Session Recording Analysis"
    ]
  },
  {
    id: "service-orm",
    num: "09",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-emerald-500/10 blur-lg group-hover:bg-emerald-500/20 transition-all duration-500" />
        <ShieldCheck size={22} strokeWidth={1.5} className="text-emerald-400 relative z-10" />
      </div>
    ),
    title: "Online Reputation Management (ORM)",
    desc: "Protect and strengthen your brand's image across the web.",
    benefits: [],
    subItems: [
      "Monitoring Brand Mentions",
      "Review Management (Google My Business, Yelp, etc.)",
      "Responding to Feedback"
    ]
  },
  {
    id: "service-video",
    num: "10",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-orange-500/10 blur-lg group-hover:bg-orange-500/20 transition-all duration-500" />
        <Video size={22} strokeWidth={1.5} className="text-orange-400 relative z-10" />
      </div>
    ),
    title: "Video Marketing",
    desc: "High-impact video content that tells your brand story and drives engagement everywhere.",
    benefits: [],
    subItems: [
      "Video Content Strategy",
      "Video Production & Editing",
      "YouTube SEO",
      "Video Ad Campaigns"
    ]
  },
  {
    id: "service-affiliate",
    num: "11",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-teal-500/10 blur-lg group-hover:bg-teal-500/20 transition-all duration-500" />
        <Handshake size={22} strokeWidth={1.5} className="text-teal-400 relative z-10" />
      </div>
    ),
    title: "Affiliate Marketing",
    desc: "Build and manage a performance-based partner network that drives sales on autopilot.",
    benefits: [],
    subItems: [
      "Program Setup",
      "Affiliate Recruitment & Management"
    ]
  },
  {
    id: "service-automation",
    num: "12",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-slate-500/10 blur-lg group-hover:bg-slate-500/20 transition-all duration-500" />
        <Cpu size={22} strokeWidth={1.5} className="text-slate-400 relative z-10" />
      </div>
    ),
    title: "Marketing Automation",
    desc: "Streamline follow-up, nurture leads and scale conversion with smart marketing automation across your funnel.",
    benefits: ["Email Automation", "CRM Workflows", "Lead Nurture"],
    subItems: [
      "Automated Workflows (Email, CRM, Social)",
      "Lead Scoring & Nurturing Sequences",
      "CRM Integration & Setup",
      "Cross-Channel Campaign Automation"
    ]
  }
];

export function Services() {
  // Default first element open as in HTML
  const [openId, setOpenId] = useState<string>("service-seo");

  const toggleSvc = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <>
      <section 
        id="services" 
        style={{
          background: "var(--bg-2)",
          padding: "110px 5%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "2rem"
          }}
          className="services-top"
        >
          <div>
            <div 
              className="flex items-center"
              style={{
                gap: "0.75rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem"
              }}
            >
              <div style={{ width: "28px", height: "1.5px", background: "var(--gold)", display: "block" }}></div>
              What We Do
            </div>
            <h2 
              className="font-display uppercase"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                marginBottom: "1.25rem"
              }}
            >
              Our <span style={{ color: "var(--gold)" }}>Services</span>
            </h2>
          </div>
          <p 
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "520px",
              fontWeight: 300
            }}
          >
            End-to-end digital solutions engineered for measurable, lasting growth. Click any service to expand.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {services.map((svc) => {
            const isOpen = openId === svc.id;

            return (
              <div 
                key={svc.id}
                id={svc.id}
                className={`svc-item ${isOpen ? "open" : ""}`}
                style={{
                  background: "var(--bg-3)",
                  border: `1px solid ${isOpen ? "rgba(245,166,35,0.4)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                  scrollMarginTop: "100px"
                }}
              >
                <div 
                  className="svc-header"
                  onClick={() => toggleSvc(svc.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.4rem 1.8rem",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "background 0.3s",
                    background: isOpen ? "rgba(245,166,35,0.06)" : "transparent"
                  }}
                >
                  <div 
                    className="svc-icon-wrap"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: isOpen ? "rgba(245,166,35,0.15)" : "rgba(245,166,35,0.08)",
                      border: `1px solid ${isOpen ? "rgba(245,166,35,0.4)" : "rgba(245,166,35,0.15)"}`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.35rem",
                      flexShrink: 0,
                      transition: "background 0.3s, border-color 0.3s"
                    }}
                  >
                    {svc.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 
                      style={{
                        fontSize: "0.97rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--gold)" : "var(--white)",
                        marginBottom: "0.15rem",
                        transition: "color 0.3s"
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        lineHeight: 1.4
                      }}
                    >
                      {svc.desc}
                    </p>
                    
                    {svc.benefits && svc.benefits.length > 0 && (
                      <div 
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.45rem",
                          marginTop: "0.25rem"
                        }}
                      >
                        {svc.benefits.map((ben, bIdx) => (
                          <span 
                            key={bIdx}
                            style={{
                              padding: "0.35rem 0.65rem",
                              borderRadius: "999px",
                              background: "rgba(245,166,35,0.07)",
                              border: "1px solid rgba(245,166,35,0.12)",
                              fontSize: "0.68rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              color: "rgba(240,237,230,0.82)"
                            }}
                          >
                            {ben}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                      flexShrink: 0
                    }}
                  >
                    <div 
                      className="font-display"
                      style={{
                        fontSize: "1.7rem",
                        color: isOpen ? "rgba(245,166,35,0.5)" : "rgba(245,166,35,0.18)",
                        transition: "color 0.3s",
                        lineHeight: 1
                      }}
                    >
                      {svc.num}
                    </div>
                    <div 
                      style={{
                        width: "26px",
                        height: "26px",
                        background: isOpen ? "rgba(245,166,35,0.15)" : "rgba(245,166,35,0.08)",
                        border: "1px solid rgba(245,166,35,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        color: "var(--gold)",
                        transition: "transform 0.4s, background 0.3s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }}
                    >
                      ▼
                    </div>
                  </div>
                </div>
                
                <div 
                  style={{
                    maxHeight: isOpen ? "600px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s cubic-bezier(0, 0.5, 0, 1)"
                  }}
                >
                  <div 
                    style={{
                      padding: "1.2rem 1.8rem 1.8rem",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: "0.5rem",
                      borderTop: "1px solid rgba(245,166,35,0.08)",
                      margin: "0 1.8rem 0"
                    }}
                  >
                    {svc.subItems.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="svc-sub group hover:bg-[rgba(245,166,35,0.09)] hover:border-[rgba(245,166,35,0.25)] hover:translate-x-[3px]"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.55rem",
                          padding: "0.55rem 0.85rem",
                          background: "rgba(245,166,35,0.04)",
                          border: "1px solid rgba(245,166,35,0.08)",
                          borderRadius: "7px",
                          transition: "all 0.3s",
                          cursor: "default"
                        }}
                      >
                        <div 
                          style={{
                            width: "5px",
                            height: "5px",
                            background: "var(--gold)",
                            borderRadius: "50%",
                            flexShrink: 0,
                            opacity: 0.7
                          }}
                        />
                        <span 
                          style={{
                            fontSize: "0.78rem",
                            color: "rgba(240,237,230,0.8)",
                            fontWeight: 500,
                            lineHeight: 1.3
                          }}
                        >
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seamless Transition Fade to Process */}
        <div 
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "linear-gradient(to bottom, transparent, var(--bg))",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .svc-item:hover {
          border-color: rgba(245,166,35,0.25) !important;
        }
        .svc-header:hover {
          background: rgba(245,166,35,0.04) !important;
        }
        .svc-item:not(.open) .svc-header:hover .svc-icon-wrap {
          background: rgba(245,166,35,0.15) !important;
          border-color: rgba(245,166,35,0.4) !important;
        }
        .svc-item:not(.open) .svc-header:hover h3 {
          color: var(--gold) !important;
        }
        @media (max-width: 768px) {
          .services-top {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}} />
    </>
  );
}
