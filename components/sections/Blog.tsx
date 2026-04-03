"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Share2, DollarSign, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    href: "#contact",
    gradient: "linear-gradient(135deg,#0d1b3e,#1a3a6e)",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-indigo-500/20 blur-2xl group-hover:bg-indigo-500/30 transition-all duration-500" />
        <TrendingUp size={56} strokeWidth={1.5} className="text-indigo-400 relative z-10" />
      </div>
    ),
    tag: "SEO",
    title: "10 SEO Strategies That Will Dominate Google in 2025",
    desc: "Discover the most powerful tactics top brands use to rank higher and convert more visitors.",
    date: "Mar 20, 2025",
    readTime: "6 min",
    isFeatured: true
  },
  {
    href: "#contact",
    gradient: "linear-gradient(135deg,#2d1500,#5a3000)",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-pink-500/20 blur-2xl group-hover:bg-pink-500/30 transition-all duration-500" />
        <Share2 size={56} strokeWidth={1.5} className="text-pink-400 relative z-10" />
      </div>
    ),
    tag: "Social Media",
    title: "Build a Winning Instagram Strategy in 2025",
    desc: "Grow your audience with these proven Instagram marketing tactics.",
    date: "Mar 14, 2025",
    readTime: "4 min",
    isFeatured: false
  },
  {
    href: "#contact",
    gradient: "linear-gradient(135deg,#0a2810,#1a4a20)",
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-emerald-500/20 blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500" />
        <DollarSign size={56} strokeWidth={1.5} className="text-emerald-400 relative z-10" />
      </div>
    ),
    tag: "Paid Ads",
    title: "Google Ads vs Meta Ads: Which Is Right for You?",
    desc: "A complete comparison to help you choose the best platform for maximum ROI.",
    date: "Mar 8, 2025",
    readTime: "5 min",
    isFeatured: false
  }
];

export function Blog() {
  return (
    <>
      <section 
        id="blog"
        style={{
          background: "var(--bg-2)",
          padding: "110px 5%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div 
          className="blog-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
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
              Insights & Tips
            </div>
            <h2 
              className="font-display uppercase"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                marginBottom: 0
              }}
            >
              Latest <span style={{ color: "var(--gold)" }}>Blog</span>
            </h2>
          </div>
          <Link 
            href="#contact"
            className="btn-ghost"
            style={{
              border: "1px solid rgba(245,166,35,0.35)",
              color: "var(--gold)",
              padding: "0.9rem 2rem",
              fontWeight: 700,
              fontSize: "0.87rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "3px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s"
            }}
          >
            Request a Content Plan →
          </Link>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <Link 
              key={idx}
              href={post.href}
              className={`blog-card group ${post.isFeatured ? "featured" : ""}`}
            >
              <div className="blog-thumb">
                <div 
                  className="blog-thumb-bg" 
                  style={{ background: post.gradient }}
                />
                <div className="blog-thumb-icon">{post.icon}</div>
              </div>
              <div className="blog-body">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="blog-meta">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold/60" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold/60" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Seamless Transition Fade to Contact */}
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
        .blog-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 1.5rem;
        }
        .blog-card {
          background: var(--bg-3);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: all 0.4s;
          pointer-events: auto;
        }
        .blog-card:hover {
          border-color: rgba(245,166,35,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .blog-thumb {
          aspect-ratio: 16/9;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .blog-card.featured .blog-thumb {
          aspect-ratio: 16/8;
        }
        .blog-thumb-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.6s;
        }
        .blog-card:hover .blog-thumb-bg {
          transform: scale(1.05);
        }
        .blog-thumb-icon {
          font-size: 3.5rem;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
        }
        .blog-body {
          padding: 1.5rem;
        }
        .blog-tag {
          display: inline-block;
          background: rgba(245,166,35,0.1);
          color: var(--gold);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.25rem 0.8rem;
          border-radius: 100px;
          margin-bottom: 0.8rem;
        }
        .blog-card h3 {
          font-weight: 700;
          font-size: 0.97rem;
          line-height: 1.45;
          margin-bottom: 0.6rem;
          color: var(--white);
          transition: color 0.3s;
        }
        .blog-card.featured h3 {
          font-size: 1.15rem;
        }
        .blog-card:hover h3 {
          color: var(--gold);
        }
        .blog-card p {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .blog-meta {
          display: flex;
          gap: 1.2rem;
          font-size: 0.73rem;
          color: var(--muted);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .btn-ghost:hover {
          background: rgba(245,166,35,0.1) !important;
          border-color: var(--gold) !important;
          transform: translateY(-3px) !important;
        }
      `}} />
    </>
  );
}
