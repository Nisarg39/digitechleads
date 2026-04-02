"use client";

import React from "react";
import Link from "next/link";

const aboutPoints = [
  {
    title: "Strategy Before Spend",
    description: "We start with positioning, audience intent and conversion goals so your marketing has direction before budget is pushed into campaigns.",
  },
  {
    title: "Designed to Convert",
    description: "Every touchpoint — ads, landing pages, messaging and forms — is shaped to build trust quickly and increase the chance of enquiry.",
  },
  {
    title: "Performance You Can Measure",
    description: "We focus on the numbers that matter: qualified leads, cost efficiency, sales momentum and channel performance you can actually act on.",
  },
  {
    title: "Built for Long-Term Growth",
    description: "Instead of chasing one-off spikes, we create scalable systems that keep improving through testing, optimization and smarter execution.",
  },
];

export function About() {
  return (
    <section 
      id="about" 
      className="relative overflow-hidden w-full flex justify-center"
      style={{
        background: "linear-gradient(180deg, #131920 0%, #101722 60%, var(--bg) 100%)",
        padding: "110px 0"
      }}
    >
      <div 
        className="w-full max-w-[1180px] px-[5vw] flex flex-col items-center"
      >
        <div className="flex flex-col items-center text-center w-full">
          {/* Section Label */}
          <div 
            className="flex items-center justify-center"
            style={{
              gap: "0.75rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F5A623",
              marginBottom: "1rem"
            }}
          >
            <div 
              style={{
                width: "28px",
                height: "1.5px",
                background: "#F5A623",
                display: "block"
              }}
            ></div>
            About DigiTechLeads
            <div 
              style={{
                width: "28px",
                height: "1.5px",
                background: "#F5A623",
                display: "block"
              }}
            ></div>
          </div>

          {/* Main Headline */}
          <h2 
            className="font-display uppercase mx-auto"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              lineHeight: 1.05,
              color: "#F0EDE6",
              marginBottom: "1.5rem",
              fontFamily: "'Bebas Neue', sans-serif",
              maxWidth: "920px"
            }}
          >
            We Build Digital Marketing Systems That <span style={{ color: "#F5A623" }}>Turn Attention Into Enquiries</span>
          </h2>

          {/* Intro Text Block */}
          <div style={{ marginBottom: "1rem" }} className="flex flex-col items-center">
            <p 
              className="mx-auto"
              style={{
                fontSize: "1.05rem",
                color: "rgba(240,237,230,0.85)",
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: "1rem",
                maxWidth: "820px"
              }}
            >
              DigiTechLeads helps ambitious brands grow with a sharper mix of SEO, paid media, 
              conversion-focused web design, content strategy and performance reporting. 
              Our work is built to create visibility, trust and consistent lead flow — 
              not just impressions on a dashboard.
            </p>
            <p 
              className="mx-auto"
              style={{
                fontSize: "1.05rem",
                color: "rgba(240,237,230,0.72)",
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: "1rem",
                maxWidth: "820px"
              }}
            >
              We combine strategy, creative thinking, data and execution into one growth system, 
              so every campaign, landing page and message works together to move visitors 
              toward enquiry, booking or purchase.
            </p>
          </div>

          {/* Gold Divider */}
          <div 
            style={{
              width: "40px",
              height: "2px",
              background: "#F5A623",
              margin: "1.8rem auto"
            }}
          ></div>

          {/* Value Proposition Block Title */}
          <div 
            className="font-display uppercase mx-auto"
            style={{
              fontSize: "1.6rem",
              color: "#F0EDE6",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
              fontFamily: "'Bebas Neue', sans-serif"
            }}
          >
            Why Growing Brands <span style={{ color: "#F5A623" }}>Work With Us</span>
          </div>

          {/* Growth Points Grid - Exact premium-point replication */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[1.5rem] w-full"
          >
            {aboutPoints.map((point, index) => (
              <div 
                key={index}
                className="w-full"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(245,166,35,0.04))",
                  border: "1px solid rgba(245,166,35,0.12)",
                  borderRadius: "18px",
                  padding: "1.35rem 1.25rem",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
                  textAlign: "center"
                }}
              >
                <h4 
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.45rem",
                    color: "#F0EDE6",
                    fontWeight: 700
                  }}
                >
                  {point.title}
                </h4>
                <p 
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "rgba(240,237,230,0.74)"
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            href="#contact" 
            className="inline-flex items-center uppercase transition-all duration-300 hover:-translate-y-[1px] mx-auto"
            style={{
              marginTop: "2rem",
              background: "linear-gradient(135deg, #F5A623, #E8920F)",
              color: "#0D1117",
              padding: "0.8rem 1.8rem",
              borderRadius: "3px",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              boxShadow: "0 8px 25px rgba(245,166,35,0.2)"
            }}
          >
            Get Your Custom Growth Plan →
          </Link>
        </div>
      </div>
    </section>
  );
}
