"use client";

import { Telescope, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-blue-500/10 blur-lg group-hover:bg-blue-500/20 transition-all duration-500" />
        <Telescope size={26} strokeWidth={1.5} className="text-blue-400 relative z-10" />
      </div>
    ),
    title: "Discovery",
    description: "Deep dive into your brand, goals, competitors and audience to build a strategic foundation.",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-gold/10 blur-lg group-hover:bg-gold/20 transition-all duration-500" />
        <Map size={26} strokeWidth={1.5} className="text-gold relative z-10" />
      </div>
    ),
    title: "Strategy",
    description: "Custom data-driven marketing plan tailored precisely to your business objectives and budget.",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-rose-500/10 blur-lg group-hover:bg-rose-500/20 transition-all duration-500" />
        <Rocket size={26} strokeWidth={1.5} className="text-rose-400 relative z-10" />
      </div>
    ),
    title: "Execute",
    description: "Expert team launches campaigns with precision — creative, targeting and messaging all aligned.",
  },
  {
    icon: (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 scale-150 rounded-full bg-emerald-500/10 blur-lg group-hover:bg-emerald-500/20 transition-all duration-500" />
        <TrendingUp size={26} strokeWidth={1.5} className="text-emerald-400 relative z-10" />
      </div>
    ),
    title: "Optimize",
    description: "Continuously analyze, test and refine every element to maximize performance and ensure growth.",
  },
];

export function Process() {
  return (
    <>
      <section 
        id="process" 
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(245,166,35,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 50%, rgba(30,80,160,0.07) 0%, transparent 60%), var(--bg)",
          padding: "110px 5%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div 
          style={{
            textAlign: "center",
            marginBottom: "5rem"
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
            How We Work
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
            Our <span style={{ color: "var(--gold)" }}>Process</span>
          </h2>
          <p 
            style={{
              color: "var(--muted)",
              maxWidth: "500px",
              margin: "1rem auto 0",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              fontWeight: 300
            }}
          >
            A proven 4-step framework from idea to measurable results.
          </p>
        </div>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="proc-step group"
              style={{
                textAlign: "center",
                padding: "0 1rem",
                position: "relative"
              }}
            >
              <div 
                className="proc-icon"
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 1.5rem",
                  background: "var(--bg-2)",
                  border: "2px solid rgba(245,166,35,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  transition: "all 0.4s"
                }}
              >
                {step.icon}
              </div>
              <h3 
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.6rem",
                  color: "var(--white)"
                }}
              >
                {step.title}
              </h3>
              <p 
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.65
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seamless Transition Fade to Blog */}
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
        .process-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          gap: 2rem;
        }
        .process-flow::before {
          content: '';
          position: absolute;
          top: 35px;
          left: calc(12.5% + 18px);
          right: calc(12.5% + 18px);
          height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(245,166,35,0.3) 50%, var(--gold));
        }
        .proc-step:hover .proc-icon {
          background: rgba(245,166,35,0.1) !important;
          border-color: var(--gold) !important;
          box-shadow: 0 0 0 8px rgba(245,166,35,0.08) !important;
          transform: scale(1.1) !important;
        }
        
        @media (max-width: 768px) {
          .process-flow {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .process-flow::before {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .process-flow {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
}
