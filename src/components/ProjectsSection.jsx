import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Github } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-56 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Error";
      }}
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ projects }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const PROJECTS_LIMIT = 3;
  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, PROJECTS_LIMIT);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <Briefcase className="inline-block mr-3" /> My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {projects.length > PROJECTS_LIMIT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              {showAllProjects ? "Show Less" : "Show More"}
              {showAllProjects ? (
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

export default ProjectsSection;
