import Link from "next/link";
import Image from "next/image";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-2 border-t border-gold py-20 px-[5%]">
      <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] gap-12 mb-16">
        {/* Company Info */}
        <div>
          <Image
            src="/logo.svg"
            alt="DigiTechLeads"
            width={100}
            height={50}
            className="mb-3"
            style={{ filter: "drop-shadow(0 0 10px rgba(245,166,35,0.3))" }}
          />
          <p className="text-[0.875rem] text-muted leading-[1.75] max-w-[280px] mb-6">
            Premium digital marketing agency helping businesses grow with SEO, paid ads, social media marketing, web design and lead generation systems.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/digitechleads/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-6 border border-gold-20 text-gold transition-all duration-300 hover:bg-gold hover:text-bg"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.6A5.4 5.4 0 1 1 6.6 12 5.4 5.4 0 0 1 12 6.6Zm0 1.8A3.6 3.6 0 1 0 15.6 12 3.6 3.6 0 0 0 12 8.4Z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577477758652"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-6 border border-gold-20 text-gold transition-all duration-300 hover:bg-gold hover:text-bg"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M13.7 22v-8.3h2.8l.42-3.24H13.7V8.36c0-.94.26-1.58 1.6-1.58h1.72V3.89c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23v2.44H7.65v3.24h2.76V22h3.29Z"/>
              </svg>
            </a>
            <a
              href="mailto:Info@digitechleads.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-6 border border-gold-20 text-gold transition-all duration-300 hover:bg-gold hover:text-bg"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2 .39V6l7 5.26L19 6v-.11a.7.7 0 0 0-.7-.69H5.7a.7.7 0 0 0-.7.69Zm14 2.36-6.4 4.81a1 1 0 0 1-1.2 0L5 8.25v10.05c0 .39.31.7.7.7h12.6a.7.7 0 0 0 .7-.7V8.25Z"/>
              </svg>
            </a>
            <a
              href="tel:+917774890567"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-6 border border-gold-20 text-gold transition-all duration-300 hover:bg-gold hover:text-bg"
              aria-label="Phone"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M6.62 2h2.76c.5 0 .93.35 1.04.84l.64 2.92c.09.4-.04.81-.34 1.09L8.9 8.67a15.02 15.02 0 0 0 6.43 6.43l1.82-1.82c.28-.29.69-.42 1.09-.34l2.92.64c.49.11.84.54.84 1.04v2.76A1.62 1.62 0 0 1 20.38 19C10.79 19 5 13.21 5 5.62A1.62 1.62 0 0 1 6.62 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-[0.65rem]">
            <li>
              <a href="#home" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Our Process
              </a>
            </li>
            <li>
              <a href="#blog" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white mb-5">
            Services
          </h4>
          <ul className="flex flex-col gap-[0.65rem]">
            <li>
              <a href="#service-seo" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                SEO Optimization
              </a>
            </li>
            <li>
              <a href="#service-ppc" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                PPC Management
              </a>
            </li>
            <li>
              <a href="#service-smm" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Social Media
              </a>
            </li>
            <li>
              <a href="#service-web" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Web Design
              </a>
            </li>
            <li>
              <a href="#service-content" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Content Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white mb-5">
            Contact
          </h4>
          <ul className="flex flex-col gap-[0.65rem]">
            <li>
              <a href="mailto:Info@digitechleads.com" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                Info@digitechleads.com
              </a>
            </li>
            <li>
              <a href="tel:+917774890567" className="text-[0.875rem] text-muted transition-colors duration-300 hover:text-gold">
                +91 7774890567
              </a>
            </li>
            <li className="text-[0.875rem] text-muted">
              Wanwadi - 411040
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-8 flex justify-between items-center flex-wrap gap-4">
        <p className="text-[0.8rem] text-muted">
          © {currentYear} DigiTechLeads. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[0.8rem] text-muted transition-colors duration-300 hover:text-gold">
            Privacy Policy
          </a>
          <a href="#" className="text-[0.8rem] text-muted transition-colors duration-300 hover:text-gold">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
