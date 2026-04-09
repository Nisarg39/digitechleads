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
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    desc: "Grow your organic visibility and attract high-intent customers searching for your services.",
    benefits: ["Keyword Research", "Technical SEO", "Content Strategy"],
    subItems: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO",
      "Link Building",
      "SEO Audits",
      "Content Strategy"
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
    title: "PAY-PER-CLICK ADVERTISING (PPC)",
    desc: "Get instant visibility and generate high-quality leads through targeted advertising.",
    benefits: ["Google Ads", "Retargeting", "Landing Pages"],
    subItems: [
      "Google Ads Management",
      "Retargeting Campaigns",
      "Landing Page Optimization"
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
    title: "SOCIAL MEDIA MARKETING",
    desc: "Build trust, grow your audience, and convert followers into customers.",
    benefits: ["Strategy", "Content Creation", "Community Management"],
    subItems: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Ads"
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
    title: "CONTENT MARKETING",
    desc: "Attract, educate, and convert your audience through high-quality content.",
    benefits: ["Blog Writing", "Website Copywriting", "Video Content"],
    subItems: [
      "Blog Writing",
      "Website Copywriting",
      "Video Content",
      "Case Studies"
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
    title: "EMAIL MARKETING",
    desc: "Turn leads into customers and customers into repeat buyers.",
    benefits: ["Campaign Management", "Marketing Automation", "Template Design"],
    subItems: [
      "Email Campaign Management",
      "Marketing Automation",
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
    title: "WEBSITE DESIGN & DEVELOPMENT",
    desc: "Build fast, modern websites designed to convert visitors into leads.",
    benefits: ["Responsive Design", "Landing Pages", "Website Maintenance"],
    subItems: [
      "Responsive Website Design",
      "Landing Pages",
      "Website Maintenance"
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
    title: "ANALYTICS & REPORTING",
    desc: "Make data-driven decisions and improve performance continuously.",
    benefits: ["Analytics Setup", "Performance Analysis", "Reporting Dashboards"],
    subItems: [
      "Analytics Setup",
      "Performance Analysis",
      "Reporting Dashboards"
    ]
  },
  {
    id: "service-automation",
    num: "08",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-slate-500/10 blur-lg group-hover:bg-slate-500/20 transition-all duration-500" />
        <Cpu size={22} strokeWidth={1.5} className="text-slate-400 relative z-10" />
      </div>
    ),
    title: "MARKETING AUTOMATION",
    desc: "Scale your marketing with smart systems and workflows.",
    benefits: ["Automated Workflows", "CRM Integration", "Lead Scoring"],
    subItems: [
      "Automated Workflows",
      "CRM Integration",
      "Lead Scoring"
    ]
  },
  {
    id: "service-video",
    num: "09",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-orange-500/10 blur-lg group-hover:bg-orange-500/20 transition-all duration-500" />
        <Video size={22} strokeWidth={1.5} className="text-orange-400 relative z-10" />
      </div>
    ),
    title: "VIDEO MARKETING",
    desc: "Capture attention and communicate your message effectively through video.",
    benefits: ["Video Strategy", "Video Production", "Video Advertising"],
    subItems: [
      "Video Strategy",
      "Video Production",
      "Video Advertising"
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
