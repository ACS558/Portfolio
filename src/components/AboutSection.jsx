import React from "react";
import { User, Mail, Github, Linkedin } from "lucide-react";
import XLogo from "../assets/XLogo";

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);

const AboutSection = ({ summary, socials, email }) => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <User className="inline-block mr-3" /> About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">{summary}</p>
        <div className="mt-12 flex justify-center items-center space-x-6">
          <SocialLink
            href={socials.github}
            icon={<Github size={28} />}
            label="GitHub"
          />
          <SocialLink
            href={socials.linkedin}
            icon={<Linkedin size={28} />}
            label="LinkedIn"
          />
          <SocialLink href={socials.x} icon={<XLogo size={24} />} label="X" />
          <SocialLink
            href={`mailto:${email}`}
            icon={<Mail size={28} />}
            label="Email"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;