import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

// Import the icons from the react-icons library
import { FaReact, FaJava, FaHtml5, FaFigma } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

// The skillIcons object is now much simpler and doesn't use the <path> element.
const skillIcons = {
  React: <FaReact className="w-12 h-12 text-[#61dafb]" />,
  HTML5: <FaHtml5 className="w-12 h-12 text-[#e34f26]" />,
  "Tailwind CSS": <SiTailwindcss className="w-12 h-12 text-[#38bdf8]" />,
  Java: <FaJava className="w-12 h-12 text-[#f89820]" />,
  Figma: <FaFigma className="w-12 h-12 text-white" />,
};

const SkillIconDisplay = ({ name }) => {
  const icon = skillIcons[name] || (
    <div className="w-12 h-12 bg-gray-600 rounded-full" />
  );
  return (
    <div className="group relative flex flex-col items-center gap-2 transition-transform transform hover:-translate-y-1">
      <div className="bg-gray-800 p-4 rounded-full shadow-lg">{icon}</div>
      <p className="text-gray-300 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {name}
      </p>
    </div>
  );
};

// This part of the code remains exactly as you provided it.
const SkillsSection = ({ skills }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const SKILLS_LIMIT = 4;
  const displayedSkills = showAllSkills
    ? skills
    : skills.slice(0, SKILLS_LIMIT);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <Star className="inline-block mr-3" /> My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {displayedSkills.map((skill) => (
            <SkillIconDisplay key={skill} name={skill} />
          ))}
        </div>
        {skills.length > SKILLS_LIMIT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              {showAllSkills ? "Show Less" : "Show More"}
              {showAllSkills ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
