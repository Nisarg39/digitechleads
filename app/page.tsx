import { Navbar } from "@/components/navigation/Navbar";
import { HeroParticles } from "@/components/sections/HeroParticles";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { DMInfo } from "@/components/sections/DMInfo";
import { CampaignLife } from "@/components/sections/CampaignLife";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/navigation/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center overflow-hidden px-[5%] pt-[100px] pb-[100px]">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-mesh"></div>
        <div className="absolute inset-0 hero-grid"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-[-10%] right-[5%] orb orb1"></div>
        <div className="absolute bottom-[10%] left-[0%] orb orb2"></div>
        <div className="absolute bottom-[30%] right-[30%] orb orb3"></div>
        
        {/* Particles Canvas */}
        <HeroParticles />
        
        <div className="relative z-10 hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <div className="dot"></div>
            Premium Digital Marketing Agency
          </div>
          
          <h1 className="hero-title">
            <span className="solid">TURN ATTENTION</span><br/>
            <span className="outline">INTO TRUST.</span><br/>
            <span className="gf">TURN TRAFFIC INTO <br className="hidden md:block" /> CLIENTS.</span>
          </h1>
          <p className="hero-sub">
            DigiTechLeads helps ambitious brands grow with premium strategy, paid media, high-converting websites, compelling content, and conversion-focused campaigns built to create stronger demand and more qualified enquiries.
          </p>
          
          {/* Buttons */}
          <div className="hero-btns">
            <a
              href="#contact"
              className="btn-gold"
            >
              Book a Free Strategy Call →
            </a>
            <a
              href="#services"
              className="btn-ghost"
            >
              Explore Services
            </a>
          </div>

          <div className="hero-chip-row">
            <span className="hero-chip">Performance Marketing</span>
            <span className="hero-chip">Lead Generation</span>
            <span className="hero-chip">Google Ads</span>
            <span className="hero-chip">Conversion Optimization</span>
          </div>
        </div>
      </section>

      {/* Services Ticker */}
      <section className="relative z-20">
        <Marquee />
      </section>

      {/* About Section */}
      <About />

      {/* Growth Engine Section */}
      <DMInfo />

      {/* Campaign Lifecycle Section */}
      <CampaignLife />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
      
    </main>
  );
}
