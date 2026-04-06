import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Contact } from "@/components/sections/Contact";
import { ShieldCheck, Users, FolderLock, Lock } from "lucide-react";

export const metadata: Metadata = {
// ... existing metadata ...
  title: "Privacy Policy | DigiTechLeads",
  description:
    "Learn how DigiTechLeads collects, protects, and uses your personal data. Your privacy is our priority — read our full privacy policy here.",
  alternates: {
    canonical: "https://www.digitechleads.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | DigiTechLeads",
    description:
      "DigiTechLeads is committed to keeping your personal information secure and confidential. Read our privacy policy.",
    url: "https://www.digitechleads.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* ── Hero Banner ── */}
        <section className="pp-hero">
          {/* mesh + grid */}
          <div className="pp-mesh" aria-hidden="true" />
          <div className="pp-grid" aria-hidden="true" />

          {/* floating orbs */}
          <div className="pp-orb pp-orb1" aria-hidden="true" />
          <div className="pp-orb pp-orb2" aria-hidden="true" />

          <div className="pp-hero-inner">
            {/* breadcrumb */}
            <nav aria-label="breadcrumb" className="pp-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Privacy Policy</span>
            </nav>

            {/* overline label */}
            <p className="label" aria-hidden="true">Legal &amp; Compliance</p>

            <h1 className="pp-title font-display">
              Privacy<br />
              <span className="pp-title-outline">Policy</span>
            </h1>

            <p className="pp-subtitle">
              Your data. Your trust. Our pledge to protect both — always.
            </p>

            {/* meta strip */}
            <div className="pp-meta-strip">
              <span className="pp-meta-item">
                <span className="pp-meta-dot" />
                Effective Date: January 1, 2025
              </span>
              <span className="pp-meta-sep" aria-hidden="true" />
              <span className="pp-meta-item">Last Updated: April 2026</span>
            </div>
          </div>

          {/* bottom divider */}
          <div className="pp-hero-rule" aria-hidden="true" />
        </section>

        {/* ── Intro Statement ── */}
        <section className="pp-intro-section">
          <div className="pp-container">
            <div className="pp-intro-layout">
              <div className="pp-intro-accent" aria-hidden="true">
                <div className="pp-intro-line" />
                <Lock className="text-gold" size={32} strokeWidth={1.5} />
                <div className="pp-intro-line" />
              </div>
              <blockquote className="pp-intro-quote">
                We solely understand that our clients and stakeholders are concerned about the
                personal information they share with us. So we pledge — it is our responsibility
                that your data will{" "}
                <mark className="pp-mark">always remain secured and confidential</mark> from any
                tampering or alteration.
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Policy Body ── */}
        <section className="pp-body-section">
          <div className="pp-container pp-body-grid">

            {/* Sticky sidebar TOC */}
            <aside className="pp-toc" aria-label="Table of contents">
              <p className="pp-toc-label">In this policy</p>
              <ol className="pp-toc-list">
                <li><a href="#section-clients">Our Clients &amp; Data</a></li>
                <li><a href="#section-changes">Policy Changes</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ol>
            </aside>

            {/* Main content */}
            <div className="pp-content">

              {/* ── Section 01 ── */}
              <article id="section-clients" className="pp-block">
                <div className="pp-block-header">
                  <span className="pp-number font-display">01</span>
                  <div className="pp-block-title-group">
                    <h2 className="pp-block-title">Privacy Policy &amp; Our Clients</h2>
                    <div className="pp-block-rule" aria-hidden="true" />
                  </div>
                </div>

                <div className="pp-block-body">
                  <p className="pp-para">
                    We collect personal data from our clients that is important and necessary for
                    our work. This practice is carried out with full transparency and only to the
                    extent required to deliver our services effectively.
                  </p>

                  <div className="pp-insight-row">
                    <div className="pp-insight">
                      <FolderLock className="text-gold shrink-0 mt-1" size={24} strokeWidth={1.5} />
                      <div>
                        <strong>Data We Collect</strong>
                        <p>
                          Files may include name, address, background information, and data related
                          to financial position — collected solely for the purpose of service delivery.
                        </p>
                      </div>
                    </div>

                    <div className="pp-insight">
                      <Users className="text-gold shrink-0 mt-1" size={24} strokeWidth={1.5} />
                      <div>
                        <strong>Third Party Sharing</strong>
                        <p>
                          Without your explicit consent, we <em>never</em> share your information
                          with any third-party vendor — unless required to do so by applicable law.
                        </p>
                      </div>
                    </div>

                    <div className="pp-insight">
                      <ShieldCheck className="text-gold shrink-0 mt-1" size={24} strokeWidth={1.5} />
                      <div>
                        <strong>Publication of Data</strong>
                        <p>
                          We never publish personal information of our clients unless legally
                          compelled to do so by a governing authority or court order.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pp-commitment">
                    <span className="pp-commitment-bar" aria-hidden="true" />
                    <p>
                      We take all necessary steps required to protect your personal information from
                      any <strong>misuse</strong>, <strong>unauthorized access</strong>,{" "}
                      <strong>unauthenticated modification</strong>, or any{" "}
                      <strong>unauthorized disclosure</strong>.
                    </p>
                  </div>
                </div>
              </article>

              {/* divider */}
              <div className="pp-section-divider" aria-hidden="true">
                <span />
                <span className="pp-diamond">◆</span>
                <span />
              </div>

              {/* ── Section 02 ── */}
              <article id="section-changes" className="pp-block">
                <div className="pp-block-header">
                  <span className="pp-number font-display">02</span>
                  <div className="pp-block-title-group">
                    <h2 className="pp-block-title">Changes to Our Privacy Policy</h2>
                    <div className="pp-block-rule" aria-hidden="true" />
                  </div>
                </div>

                <div className="pp-block-body">
                  <p className="pp-para">
                    We may update our Privacy Policy from time to time to reflect changes in our
                    practices, technology, legal requirements, or other factors. We value
                    transparency and will ensure you are always informed.
                  </p>

                  <div className="pp-timeline">
                    <div className="pp-timeline-item">
                      <div className="pp-tl-dot" />
                      <div className="pp-tl-content">
                        <strong>We notify our clients</strong> if any changes to our policy are made.
                      </div>
                    </div>
                    <div className="pp-timeline-item">
                      <div className="pp-tl-dot" />
                      <div className="pp-tl-content">
                        We will inform you via <strong>email</strong> prior to any Privacy Policy
                        changes taking effect.
                      </div>
                    </div>
                    <div className="pp-timeline-item">
                      <div className="pp-tl-dot" />
                      <div className="pp-tl-content">
                        Every notification will include an explicit{" "}
                        <strong>&quot;effective date&quot;</strong> so you know exactly when the new
                        terms take effect.
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ── Contact Us Section ── */}
        <Contact />

      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
          /* ─── Hero ─────────────────────────────────── */
          .pp-hero {
            position: relative;
            padding: 160px 5% 100px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            overflow: hidden;
          }
          .pp-mesh {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse 80% 60% at 15% 50%, rgba(245,166,35,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 50% 70% at 85% 30%, rgba(30,80,160,0.12) 0%, transparent 55%),
              linear-gradient(160deg, #0D1117 0%, #131B2E 40%, #0D1117 100%);
          }
          .pp-grid {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(245,166,35,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,166,35,0.04) 1px, transparent 1px);
            background-size: 70px 70px;
            animation: gf 4s ease-in-out infinite alternate;
          }
          .pp-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            pointer-events: none;
            animation: of 8s ease-in-out infinite alternate;
          }
          .pp-orb1 {
            width: 420px; height: 420px;
            background: rgba(245,166,35,0.06);
            top: -10%; right: 5%;
          }
          .pp-orb2 {
            width: 280px; height: 280px;
            background: rgba(30,100,200,0.08);
            bottom: 5%; left: 0%;
            animation-delay: -4s;
          }
          .pp-hero-inner {
            position: relative;
            z-index: 3;
            max-width: 760px;
          }
          .pp-breadcrumb {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--muted);
          }
          .pp-breadcrumb a {
            color: var(--muted);
            text-decoration: none;
            transition: color 0.3s;
          }
          .pp-breadcrumb a:hover { color: var(--gold); }
          .pp-breadcrumb span:last-child { color: var(--gold); }
          .pp-title {
            font-family: 'Bebas Neue', var(--font-bebas-neue), sans-serif;
            font-size: clamp(5rem, 12vw, 11rem);
            line-height: 0.88;
            letter-spacing: 0.02em;
            margin: 1.2rem 0 1.5rem;
          }
          .pp-title-outline {
            -webkit-text-stroke: 2px var(--gold);
            color: transparent;
          }
          .pp-subtitle {
            font-size: clamp(1rem, 1.5vw, 1.1rem);
            color: var(--muted);
            line-height: 1.75;
            max-width: 480px;
            margin-bottom: 2rem;
          }
          .pp-meta-strip {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .pp-meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: var(--muted);
            letter-spacing: 0.06em;
          }
          .pp-meta-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: var(--gold);
            animation: pulse 2.5s infinite;
          }
          .pp-meta-sep {
            width: 1px; height: 14px;
            background: rgba(255,255,255,0.1);
          }
          .pp-hero-rule {
            position: absolute;
            bottom: 0; left: 5%; right: 5%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(245,166,35,0.25), transparent);
          }

          /* ─── Intro ─────────────────────────────────── */
          .pp-intro-section {
            padding: 5rem 5%;
            background: var(--bg-2);
            border-top: 1px solid rgba(245,166,35,0.08);
            border-bottom: 1px solid rgba(245,166,35,0.08);
          }
          .pp-container { max-width: 1100px; margin: 0 auto; }
          .pp-intro-layout {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 3rem;
            align-items: center;
          }
          .pp-intro-accent {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          .pp-intro-line {
            width: 1px; height: 60px;
            background: linear-gradient(to bottom, transparent, rgba(245,166,35,0.4));
          }
          .pp-intro-line:last-child {
            background: linear-gradient(to top, transparent, rgba(245,166,35,0.4));
          }
          .pp-intro-quote {
            font-size: clamp(1.1rem, 1.8vw, 1.35rem);
            line-height: 1.8;
            color: rgba(240,237,230,0.85);
            font-weight: 300;
            font-style: normal;
            border: none;
            padding: 0;
            margin: 0;
          }
          .pp-mark {
            background: rgba(245,166,35,0.15);
            color: var(--gold);
            padding: 0 0.25em;
            border-radius: 3px;
            font-weight: 600;
          }

          /* ─── Body ─────────────────────────────────── */
          .pp-body-section {
            padding: 6rem 5%;
            background: var(--bg);
          }
          .pp-body-grid {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 5rem;
            align-items: start;
          }

          /* TOC */
          .pp-toc {
            position: sticky;
            top: 110px;
          }
          .pp-toc-label {
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 1rem;
          }
          .pp-toc-list {
            list-style: none;
            padding: 0; margin: 0;
            border-left: 1px solid rgba(245,166,35,0.15);
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
          }
          .pp-toc-list li a {
            display: block;
            padding: 0.5rem 0 0.5rem 1.25rem;
            font-size: 0.8rem;
            color: var(--muted);
            text-decoration: none;
            transition: all 0.3s;
            border-left: 2px solid transparent;
            margin-left: -1px;
          }
          .pp-toc-list li a:hover {
            color: var(--gold);
            border-left-color: var(--gold);
          }

          /* Policy blocks */
          .pp-content { display: flex; flex-direction: column; gap: 0; }
          .pp-block { 
            padding: 2.5rem 0; 
            scroll-margin-top: 100px; /* Local offset for robustness */
          }
          .pp-block-header {
            display: flex;
            align-items: flex-start;
            gap: 2rem;
            margin-bottom: 2.5rem;
          }
          .pp-number {
            font-family: 'Bebas Neue', var(--font-bebas-neue), sans-serif;
            font-size: 5rem;
            line-height: 1;
            color: rgba(245,166,35,0.15);
            letter-spacing: 0.02em;
            user-select: none;
            flex-shrink: 0;
          }
          .pp-block-title-group {
            padding-top: 0.5rem;
            flex: 1;
          }
          .pp-block-title {
            font-size: clamp(1.3rem, 2.5vw, 1.75rem);
            font-weight: 700;
            color: var(--white);
            line-height: 1.2;
            margin-bottom: 0.75rem;
          }
          .pp-block-rule {
            width: 48px; height: 2px;
            background: var(--gold);
          }

          .pp-block-body { padding-left: calc(5rem + 2rem); }
          .pp-para {
            font-size: 0.95rem;
            color: rgba(240,237,230,0.7);
            line-height: 1.85;
            margin-bottom: 2rem;
          }

          /* Insight rows */
          .pp-insight-row {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-bottom: 2.5rem;
          }
          .pp-insight {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.04);
          }
          .pp-insight:last-child { border-bottom: none; }
          .pp-insight strong {
            display: block;
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: var(--white);
            margin-bottom: 0.35rem;
            text-transform: uppercase;
          }
          .pp-insight p {
            font-size: 0.875rem;
            color: var(--muted);
            line-height: 1.7;
            margin: 0;
          }

          /* Commitment callout */
          .pp-commitment {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
            background: rgba(245,166,35,0.04);
            border: 1px solid rgba(245,166,35,0.12);
            padding: 1.5rem;
            border-radius: 4px;
          }
          .pp-commitment-bar {
            flex-shrink: 0;
            width: 3px;
            border-radius: 2px;
            background: linear-gradient(to bottom, var(--gold), var(--gold-3));
            align-self: stretch;
          }
          .pp-commitment p {
            font-size: 0.9rem;
            color: rgba(240,237,230,0.75);
            line-height: 1.8;
            margin: 0;
          }
          .pp-commitment strong { color: var(--gold); }

          /* Section divider */
          .pp-section-divider {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
          }
          .pp-section-divider span:not(.pp-diamond) {
            flex: 1;
            height: 1px;
            background: rgba(255,255,255,0.04);
          }
          .pp-diamond {
            font-size: 0.55rem;
            color: rgba(245,166,35,0.3);
          }

          /* Timeline */
          .pp-timeline {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding-left: 0;
          }
          .pp-timeline-item {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
            padding-bottom: 2rem;
            position: relative;
          }
          .pp-timeline-item:not(:last-child)::before {
            content: '';
            position: absolute;
            left: 5px;
            top: 16px;
            bottom: 0;
            width: 1px;
            background: linear-gradient(to bottom, rgba(245,166,35,0.3), transparent);
          }
          .pp-tl-dot {
            width: 11px; height: 11px;
            border-radius: 50%;
            background: var(--gold);
            flex-shrink: 0;
            margin-top: 4px;
            box-shadow: 0 0 12px rgba(245,166,35,0.4);
          }
          .pp-tl-content {
            font-size: 0.9rem;
            color: rgba(240,237,230,0.7);
            line-height: 1.7;
          }
          .pp-tl-content strong { color: var(--white); }

          /* Responsive */
          @media (max-width: 900px) {
            .pp-body-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            .pp-toc { position: static; }
            .pp-toc-list { flex-direction: row; flex-wrap: wrap; border-left: none; border-top: 1px solid rgba(245,166,35,0.15); padding-top: 1rem; }
            .pp-toc-list li a { border-left: none; border-bottom: 2px solid transparent; padding: 0.35rem 0.75rem 0.35rem 0; margin-left: 0; }
            .pp-toc-list li a:hover { border-left-color: transparent; border-bottom-color: var(--gold); }
          }
          @media (max-width: 768px) {
            .pp-hero { padding: 130px 4% 80px; }
            .pp-intro-layout { grid-template-columns: 1fr; gap: 1.5rem; }
            .pp-intro-accent { flex-direction: row; }
            .pp-intro-line { width: 40px; height: 1px; background: linear-gradient(to right, transparent, rgba(245,166,35,0.4)); }
            .pp-intro-line:last-child { background: linear-gradient(to left, transparent, rgba(245,166,35,0.4)); }
            .pp-block-header { gap: 1rem; }
            .pp-number { font-size: 3.5rem; }
            .pp-block-body { padding-left: 0; }
          }
        `
      }} />
    </>
  );
}
