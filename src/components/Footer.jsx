import React from "react";
import { Github, Linkedin } from "lucide-react";
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

const Footer = ({ name, socials }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink
            href={socials.github}
            icon={<Github size={24} />}
            label="GitHub"
          />
          <SocialLink
            href={socials.linkedin}
            icon={<Linkedin size={24} />}
            label="LinkedIn"
          />
          <SocialLink href={socials.x} icon={<XLogo size={20} />} label="X" />
        </div>
        <p>
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
