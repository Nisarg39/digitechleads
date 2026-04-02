"use client";

import React from "react";
import Link from "next/link";

export function Contact() {
  return (
    <>
      <section 
        id="contact"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(245,166,35,0.04) 0%, transparent 55%), var(--bg)",
          padding: "110px 5%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="contact-wrap">
          {/* Left Column: Text & Items */}
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
              Get In Touch
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
              Let's <span style={{ color: "var(--gold)" }}>Grow</span><br/>Together.
            </h2>
            <p 
              style={{
                color: "var(--muted)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "600px",
                fontWeight: 300
              }}
            >
              Ready to take your brand to the next level? Reach out and let's build a growth system that delivers real, measurable results.
            </p>

            <div className="contact-items">
              <div className="citem group">
                <div className="citem-icon group-hover:bg-[rgba(245,166,35,0.15)] group-hover:border-[rgba(245,166,35,0.4)] transition-all">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:Info@digitechleads.com" style={{ color: "inherit", textDecoration: "none" }}>Info@digitechleads.com</a></p>
                </div>
              </div>
              <div className="citem group">
                <div className="citem-icon group-hover:bg-[rgba(245,166,35,0.15)] group-hover:border-[rgba(245,166,35,0.4)] transition-all">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 7774890567</p>
                </div>
              </div>
              <div className="citem group">
                <div className="citem-icon group-hover:bg-[rgba(245,166,35,0.15)] group-hover:border-[rgba(245,166,35,0.4)] transition-all">📍</div>
                <div>
                  <h4>Office</h4>
                  <p>Wanwadi - 411040</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form 
            className="cform" 
            action="https://formsubmit.co/Info@digitechleads.com" 
            method="POST"
          >
            <h3>Send Us a Message</h3>
            <p>We'll get back to you within 24 hours.</p>

            <input type="hidden" name="_subject" value="New Lead from DigiTechLeads Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="frow">
              <div className="fg">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="fg">
                <label>Email</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="fg">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="+91 00000 00000" required />
            </div>

            <div className="fg">
              <label>Service Interested In</label>
              <select name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="PPC / Google Ads">PPC / Google Ads</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Web Design & Development">Web Design & Development</option>
                <option value="Video Marketing">Video Marketing</option>
                <option value="Analytics & Reporting">Analytics & Reporting</option>
                <option value="Marketing Automation">Marketing Automation</option>
                <option value="Full Package">Full Package</option>
              </select>
            </div>

            <div className="fg">
              <label>Message</label>
              <textarea name="message" placeholder="Tell us about your project and goals..." required></textarea>
            </div>

            <button type="submit" className="submit-btn group">
              Send Message <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
            <p className="contact-note">
              By submitting this form, you agree to our{" "}
              <Link href="/privacy-policy" style={{ color: "var(--gold)", textDecoration: "none" }}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-conditions" style={{ color: "var(--gold)", textDecoration: "none" }}>
                Terms & Conditions
              </Link>.
            </p>
          </form>
        </div>

        {/* Seamless Transition Fade to Footer */}
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
        .contact-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .contact-items {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .citem {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.2rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          transition: border-color 0.3s;
        }
        .citem:hover {
          border-color: var(--border);
        }
        .citem-icon {
          width: 44px;
          height: 44px;
          background: rgba(245,166,35,0.08);
          border: 1px solid rgba(245,166,35,0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .citem h4 {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.3rem;
        }
        .citem p {
          font-size: 0.93rem;
          color: var(--white);
        }
        .cform {
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
        }
        .cform h3 {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .cform p {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }
        .fg {
          margin-bottom: 1.25rem;
        }
        .fg label {
          display: block;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.5rem;
        }
        .fg input, .fg select, .fg textarea {
          width: 100%;
          background: var(--bg-3);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px;
          padding: 0.85rem 1rem;
          color: var(--white);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          appearance: none;
        }
        .fg input:focus, .fg select:focus, .fg textarea:focus {
          border-color: rgba(245,166,35,0.5);
          box-shadow: 0 0 0 3px rgba(245,166,35,0.07);
        }
        .fg textarea {
          resize: vertical;
          min-height: 110px;
        }
        .frow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--gold), var(--gold-3));
          color: #0D1117;
          padding: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 0.5rem;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(245,166,35,0.3);
        }
        .contact-note {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .contact-wrap {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .frow {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
}
