import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const projectsList = portfolioData?.projects || [];

  return (
    <section id="projects" className="py-16 text-white px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-blue border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition duration-300 hover:border-slate-700"
            >
              {/* 1. Project Image */}
              {project.image && (
                <div className="w-full h-52 sm:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* Card Details */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills (Box Style) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech?.map((item, i) => (
                    <span 
                      key={i} 
                      className="bg-[#1e293b] text-slate-200 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-xl border border-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-1.5 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1.5 transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
        
        