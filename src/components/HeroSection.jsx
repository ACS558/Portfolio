import React from "react";
import { ArrowRight, FileText } from "lucide-react";

const HeroSection = ({
  name,
  title,
  bio,
  imageUrl,
  onResumeClick,
  onHireMeClick,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20 md:pt-16 mb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={imageUrl}
            alt={name}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-gray-700 shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/350x350/4a5568/ffffff?text=Error";
            }}
          />
        </div>
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Welcome! I'm <span className="text-blue-400">{name}</span>
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-gray-300">{title}</p>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
            {bio}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Let's Connect <ArrowRight size={20} />
            </a>
            <button
              onClick={onResumeClick}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FileText size={20} /> View Resume
            </button>
            <button
              onClick={onHireMeClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
