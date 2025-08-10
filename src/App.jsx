import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import CertificateModal from "./components/CertificateModal";
import HireMeModal from "./components/HireMeModal";

// Import the portfolio data from its new, separate file
import { portfolioData } from "./data/portfolioData";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // This useEffect is for loading the EmailJS script. It remains unchanged.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // The large portfolioData object has been removed from this file.

  return (
    <div className="bg-gray-900">
      <Header
        name={portfolioData.name}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        cvPath={portfolioData.contact.cv}
        resumeImage={portfolioData.contact.resumeImage}
      />
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
      <main>
        <HeroSection
          name={portfolioData.name}
          title={portfolioData.title}
          bio={portfolioData.bio}
          imageUrl={portfolioData.heroImage}
          onResumeClick={() => setIsResumeOpen(true)}
          onHireMeClick={() => setIsHireMeOpen(true)}
        />
        <AboutSection
          summary={portfolioData.about.summary}
          socials={portfolioData.socials}
          email={portfolioData.contact.email}
        />
        <SkillsSection skills={portfolioData.skills} />
        <CertificationsSection
          certifications={portfolioData.certifications}
          onCertClick={setSelectedCert}
        />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection
          email={portfolioData.contact.email}
          phone={portfolioData.contact.phone}
        />
      </main>
      <Footer name={portfolioData.name} socials={portfolioData.socials} />
    </div>
  );
};

export default App;
