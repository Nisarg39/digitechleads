"use client";

import React from "react";

const steps = [
  {
    icon: "🎯",
    title: "Audience Research & Segmentation",
    description: "We map your ideal customer — demographics, intent signals, platform behaviour — and build precise targeting segments before spending a single rupee.",
    tags: ["Persona Mapping", "Intent Analysis", "Competitor Research"],
  },
  {
    icon: "✍️",
    title: "Creative Strategy & Ad Copy",
    description: "Headlines, visuals and hooks are engineered to stop the scroll — tested across multiple variants from day one to find what resonates fastest.",
    tags: ["A/B Testing", "Hook Frameworks", "Visual Design"],
  },
  {
    icon: "🚀",
    title: "Launch & Real-Time Monitoring",
    description: "Campaigns go live with full tracking in place — every click, impression and conversion is captured so we have data from the very first hour.",
    tags: ["GA4 Setup", "Pixel Tracking", "Conversion Events"],
  },
  {
    icon: "📊",
    title: "Optimization & Scaling",
    description: "We analyze performance daily, cut what isn't working and double down on what is — continuously improving your cost per lead and return on ad spend.",
    tags: ["Bid Optimization", "ROAS Scaling", "Budget Reallocation"],
  },
];

export function CampaignLife() {
  return (
    <section 
      id="campaign-life" 
      style={{
        background: "var(--bg-2)",
        padding: "90px 5%"
      }}
    >
      <div 
        style={{
          textAlign: "center",
          marginBottom: "4rem"
        }}
      >
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
          Campaign Intelligence
        </div>
        <h2 
          className="font-display uppercase"
          style={{
            textAlign: "center",
            fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: "1.25rem",
          }}
        >
          How a Campaign <span style={{ color: "var(--gold)" }}>Comes Alive</span>
        </h2>
        <p 
          style={{
            textAlign: "center",
            color: "var(--muted)",
            maxWidth: "500px",
            margin: "1rem auto 0",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300
          }}
        >
          Every campaign we run follows a data-first lifecycle — from audience research to real-time optimization.
        </p>
      </div>

      <div 
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          position: "relative"
        }}
      >
        {/* Animated vertical line */}
        <div 
          style={{
            position: "absolute",
            left: "34px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--gold), rgba(245,166,35,0.1))",
            borderRadius: "2px",
            zIndex: 1
          }}
        />

        {steps.map((step, index) => (
          <div 
            key={index}
            className="group"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
              position: "relative"
            }}
          >
            <div 
              style={{
                width: "70px",
                height: "70px",
                background: "var(--bg-3)",
                border: "2px solid rgba(245,166,35,0.25)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                flexShrink: 0,
                position: "relative",
                zIndex: 2,
                transition: "all 0.4s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.backgroundColor = "rgba(245,166,35,0.1)";
                e.currentTarget.style.boxShadow = "0 0 0 8px rgba(245,166,35,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,166,35,0.25)";
                e.currentTarget.style.backgroundColor = "var(--bg-3)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {step.icon}
            </div>
            
            <div 
              style={{
                paddingTop: "0.6rem",
                flex: 1
              }}
            >
              <h3 
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--white)",
                  marginBottom: "0.5rem"
                }}
              >
                {step.title}
              </h3>
              <p 
                style={{
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  marginBottom: "0.85rem"
                }}
              >
                {step.description}
              </p>
              
              <div 
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem"
                }}
              >
                {step.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "0.3rem 0.75rem",
                      background: "rgba(245,166,35,0.07)",
                      border: "1px solid rgba(245,166,35,0.15)",
                      borderRadius: "100px",
                      color: "var(--gold)"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
