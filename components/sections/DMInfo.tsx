"use client";

import React from "react";
import { 
  Users, 
  Radio, 
  Globe, 
  Mail, 
  DollarSign, 
  Search, 
  Megaphone, 
  Share2, 
  Send 
} from "lucide-react";

const flowNodes = [
  { 
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-500" />
        <Users size={32} strokeWidth={1.5} className="text-blue-400 relative z-10" />
      </div>
    ), 
    label: "Target Audience", 
    delay: "0.1s" 
  },
  { 
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20 transition-all duration-500" />
        <Radio size={32} strokeWidth={1.5} className="text-purple-400 relative z-10" />
      </div>
    ), 
    label: "Marketing Channels", 
    delay: "0.3s" 
  },
  { 
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-gold/10 blur-xl group-hover:bg-gold/20 transition-all duration-500" />
        <Globe size={32} strokeWidth={1.5} className="text-gold relative z-10" />
      </div>
    ), 
    label: "Your Website", 
    delay: "0.5s" 
  },
  { 
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-rose-500/10 blur-xl group-hover:bg-rose-500/20 transition-all duration-500" />
        <Mail size={32} strokeWidth={1.5} className="text-rose-400 relative z-10" />
      </div>
    ), 
    label: "Lead Capture", 
    delay: "0.7s" 
  },
  { 
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all duration-500" />
        <DollarSign size={32} strokeWidth={1.5} className="text-emerald-400 relative z-10" />
      </div>
    ), 
    label: "Revenue Growth", 
    delay: "0.9s" 
  },
];

const channels = [
  {
    icon: (
      <div className="relative flex items-center justify-center w-max">
        <div className="absolute inset-0 scale-125 rounded-full bg-indigo-500/10 blur-lg group-hover:bg-indigo-500/20 transition-all duration-500" />
        <Search size={36} strokeWidth={1.5} className="text-indigo-400 relative z-10" />
      </div>
    ),
    name: "SEO — Organic Search",
    percentage: "92%",
    description: "Long-term compounding traffic from Google search rankings — the highest ROI channel.",
    delay: "0.2s",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-max">
        <div className="absolute inset-0 scale-125 rounded-full bg-amber-500/10 blur-lg group-hover:bg-amber-500/20 transition-all duration-500" />
        <Megaphone size={36} strokeWidth={1.5} className="text-amber-400 relative z-10" />
      </div>
    ),
    name: "PPC — Paid Search",
    percentage: "78%",
    description: "Instant visibility for high-intent keywords. Google & Bing Ads with precision targeting.",
    delay: "0.4s",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-max">
        <div className="absolute inset-0 scale-125 rounded-full bg-pink-500/10 blur-lg group-hover:bg-pink-500/20 transition-all duration-500" />
        <Share2 size={36} strokeWidth={1.5} className="text-pink-400 relative z-10" />
      </div>
    ),
    name: "Social Media Ads",
    percentage: "85%",
    description: "Hyper-targeted paid social campaigns on Facebook, Instagram, LinkedIn, and TikTok.",
    delay: "0.6s",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-max">
        <div className="absolute inset-0 scale-125 rounded-full bg-sky-500/10 blur-lg group-hover:bg-sky-500/20 transition-all duration-500" />
        <Send size={36} strokeWidth={1.5} className="text-sky-400 relative z-10" />
      </div>
    ),
    name: "Email Automation",
    percentage: "70%",
    description: "Automated nurture sequences that convert leads into buyers on autopilot.",
    delay: "0.8s",
  },
];

export function DMInfo() {
  return (
    <>
    <section 
      id="dm-info" 
      style={{
        background: "var(--bg)",
        padding: "110px 5%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "5.8rem" }}>
          <div 
            className="flex items-center justify-center"
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
            How Digital Marketing Works
          </div>
          <h2 
            className="font-display uppercase"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              marginBottom: "1.25rem",
              textAlign: "center"
            }}
          >
            The Digital <span style={{ color: "var(--gold)" }}>Growth Engine</span>
          </h2>
          <p 
            style={{
              textAlign: "center",
              color: "rgba(240,237,230,0.82)",
              maxWidth: "820px",
              margin: "1.2rem auto 0",
              fontSize: "1.12rem",
              lineHeight: 1.9,
              fontWeight: 400
            }}
          >
            A clear visual of how strategy, content, paid campaigns, website experience, and conversion optimization work together to turn attention into enquiries, customers, and long-term growth.
          </p>
        </div>

        <div 
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            position: "relative"
          }}
        >
          <div 
            className="dm-canvas"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "4rem 4.2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 24px 70px rgba(0,0,0,0.28)"
            }}
          >
            <div 
              style={{
                content: "''",
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,166,35,0.05), transparent 60%)"
              }}
            />

            <div 
              className="flow-diagram"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
                flexWrap: "nowrap",
                position: "relative",
                marginBottom: "4rem"
              }}
            >
              {flowNodes.map((node, index) => (
                <React.Fragment key={index}>
                  <div 
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.6rem",
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <div 
                      className="flow-icon animate-node-entry"
                      style={{
                        width: "86px",
                        height: "86px",
                        background: "var(--bg-3)",
                        border: "2px solid rgba(245,166,35,0.28)",
                        borderRadius: "18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        transition: "all 0.4s",
                        animationDelay: node.delay
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--gold)";
                        e.currentTarget.style.backgroundColor = "rgba(245,166,35,0.1)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,166,35,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(245,166,35,0.28)";
                        e.currentTarget.style.backgroundColor = "var(--bg-3)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {node.icon}
                    </div>
                    <div 
                      className="flow-label"
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "rgba(240,237,230,0.8)",
                        textAlign: "center",
                        maxWidth: "110px",
                        lineHeight: 1.45
                      }}
                    >
                      {node.label}
                    </div>
                  </div>

                  {index < flowNodes.length - 1 && (
                    <div 
                      className="flow-arrow"
                      style={{
                        width: "70px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        top: "-14px"
                      }}
                    >
                      <svg viewBox="0 0 50 20" height="20" style={{ width: "100%", overflow: "visible" }}>
                        <line 
                          className="animate-dash-flow"
                          x1="0" y1="10" x2="40" y2="10" 
                          style={{
                            stroke: "rgba(245,166,35,0.35)",
                            strokeWidth: 1.5,
                            fill: "none"
                          }}
                        />
                        <polygon 
                          points="38,5 50,10 38,15" 
                          fill="rgba(245,166,35,0.5)" 
                        />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div 
              className="channel-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                overflow: "hidden",
                marginTop: "2.8rem"
              }}
            >
              {channels.map((channel, index) => (
                <div 
                  key={index} 
                  style={{
                    background: "var(--bg-2)",
                    padding: "2rem 1.7rem",
                    transition: "background 0.3s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-3)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--bg-2)"}
                >
                  <span style={{ fontSize: "2.2rem", marginBottom: "1rem", display: "block" }}>
                    {channel.icon}
                  </span>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--white)", marginBottom: "0.55rem", lineHeight: 1.45 }}>
                    {channel.name}
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "100px", height: "5px", marginBottom: "0.4rem", overflow: "hidden" }}>
                    <div 
                      className="animate-bar-slide"
                      style={{
                        height: "100%",
                        borderRadius: "100px",
                        background: "linear-gradient(90deg, var(--gold-3), var(--gold-2))",
                        width: channel.percentage,
                        animationDelay: channel.delay
                      }}
                    />
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "var(--gold)", fontWeight: 700 }}>
                    {channel.percentage} avg. growth
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65, marginTop: "0.55rem" }}>
                    {channel.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seamless Transition Fade to CampaignLife */}
        <div 
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "linear-gradient(to bottom, transparent, var(--bg-2))",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .dm-canvas {
            padding: 2.4rem !important;
          }
          .channel-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .flow-diagram {
            flex-wrap: wrap !important;
            gap: 1.5rem !important;
          }
          .flow-arrow {
            display: none !important;
          }
          .flow-icon {
            width: 72px !important;
            height: 72px !important;
            font-size: 1.7rem !important;
          }
          .flow-label {
            font-size: 0.74rem !important;
            max-width: 92px !important;
          }
        }
        @media (max-width: 480px) {
          .channel-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </>
  );
}
