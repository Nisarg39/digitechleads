"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: "20px", display: "block" }}>
              <Link href="#home" className="flex items-center gap-2 group transition-all duration-300 hover:opacity-90 active:scale-95" aria-label="DigiTechLeads home">
                <div className="relative w-9 h-9 md:w-11 md:h-11">
                  <Image
                    src="/images/digitechleads_icon_transparent.png"
                    alt="DigiTechLeads Icon"
                    fill
                    className="object-contain"
                    style={{ filter: "drop-shadow(0 0 10px rgba(245,166,35,0.3))" }}
                  />
                </div>
                <div className="relative w-36 h-6 md:w-44 md:h-8">
                  <Image
                    src="/images/digitechleads_text_transparent.png"
                    alt="DigiTechLeads Text"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="footer-about">
              Premium digital marketing agency helping businesses grow with SEO, paid ads, social media marketing, web design and lead generation systems.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/digitechleads/" className="soc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.6A5.4 5.4 0 1 1 6.6 12 5.4 5.4 0 0 1 12 6.6Zm0 1.8A3.6 3.6 0 1 0 15.6 12 3.6 3.6 0 0 0 12 8.4Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577477758652" className="soc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.7 22v-8.3h2.8l.42-3.24H13.7V8.36c0-.94.26-1.58 1.6-1.58h1.72V3.89c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23v2.44H7.65v3.24h2.76V22h3.29Z" />
                </svg>
              </a>
              <a href="mailto:Info@digitechleads.com" className="soc" aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 .39V6l7 5.26L19 6v-.11a.7.7 0 0 0-.7-.69H5.7a.7.7 0 0 0-.7.69Zm14 2.36-6.4 4.81a1 1 0 0 1-1.2 0L5 8.25v10.05c0 .39.31.7.7.7h12.6a.7.7 0 0 0 .7-.7V8.25Z" />
                </svg>
              </a>
              <a href="tel:+917774890567" className="soc" aria-label="Phone">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 2h2.76c.5 0 .93.35 1.04.84l.64 2.92c.09.4-.04.81-.34 1.09L8.9 8.67a15.02 15.02 0 0 0 6.43 6.43l1.82-1.82c.28-.29.69-.42 1.09-.34l2.92.64c.49.11.84.54.84 1.04v2.76A1.62 1.62 0 0 1 20.38 19C10.79 19 5 13.21 5 5.62A1.62 1.62 0 0 1 6.62 4Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="fcol">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#process">Our Process</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="fcol">
            <h4>Services</h4>
            <ul>
              <li><Link href="#service-seo">SEO Optimization</Link></li>
              <li><Link href="#service-ppc">PPC / Google Ads</Link></li>
              <li><Link href="#service-smm">Social Media</Link></li>
              <li><Link href="#service-content">Content Marketing</Link></li>
              <li><Link href="#service-web">Web Design</Link></li>
              <li><Link href="#service-automation">Marketing Automation</Link></li>
            </ul>
          </div>
          <div className="fcol">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:Info@digitechleads.com">Info@digitechleads.com</a></li>
              <li><a href="tel:+917774890567">+91 7774890567</a></li>
              <li><a href="#">Wanwadi - 411040</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 <span>DigiTechLeads</span>. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        footer {
          background: var(--bg-2);
          padding: 5rem 5% 2.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-about {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.75;
          max-width: 280px;
          margin-bottom: 1.5rem;
        }
        .socials {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .soc {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(245,166,35,0.06);
          border: 1px solid rgba(245,166,35,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--gold);
          transition: all 0.3s;
        }
        .soc:hover {
          background: var(--gold);
          color: #0D1117;
          border-color: var(--gold);
        }
        .soc svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }
        .fcol h4 {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 1.3rem;
        }
        .fcol ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 0;
          margin: 0;
        }
        .fcol ul a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s;
        }
        .fcol ul a:hover {
          color: var(--gold);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-bottom p {
          font-size: 0.8rem;
          color: var(--muted);
          margin: 0;
        }
        .footer-bottom span {
          color: var(--gold);
        }
        .footer-legal {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer-legal a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.3s;
        }
        .footer-legal a:hover {
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-logo-img {
            height: 88px;
            width: auto;
            display: block;
            mix-blend-mode: screen;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
}
