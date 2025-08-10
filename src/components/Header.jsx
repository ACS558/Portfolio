import React from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = ({ name, isMenuOpen, setIsMenuOpen }) => {
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-bold text-xl">
            Shaik
          </a>

          {/* Toggle Menu Icon (Visible on Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links (responsive layout) */}
          <div
            className={`flex-col md:flex-row md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300`}
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 block md:inline-block"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
