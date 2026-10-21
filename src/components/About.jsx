import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function About() {
  const { name, email, phone, location, resumeUrl } = portfolioData?.personalInfo || {};
  const { 
    title, 
    description, 
    university, 
    degree, 
    semester, 
    experience, 
    currentFocus, 
    coursework 
  } = portfolioData?.about || {};

  return (
    <section id="about" className="py-16 bg-blue text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            {title || 'About Me'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            {description}
          </p>

          {/* Key Details List */}
          <div className="space-y-3 pt-2 text-base sm:text-lg">
            {name && (
              <p><span className="font-semibold text-white">Name:</span> <span className="text-gray-300">{name}</span></p>
            )}
            {email && (
              <p><span className="font-semibold text-white">Email:</span> <span className="text-gray-300">{email}</span></p>
            )}
            {phone && (
              <p><span className="font-semibold text-white">Phone:</span> <span className="text-gray-300">{phone}</span></p>
            )}
            {university && (
              <p><span className="font-semibold text-white">University:</span> <span className="text-gray-300">{university}</span></p>
            )}
            {degree && (
              <p><span className="font-semibold text-white">Degree:</span> <span className="text-gray-300">{degree}</span></p>
            )}
            {semester && (
              <p><span className="font-semibold text-white">Academic Status:</span> <span className="text-gray-300">{semester}</span></p>
            )}
            {experience && (
              <p><span className="font-semibold text-white">Experience:</span> <span className="text-gray-300">{experience}</span></p>
            )}
            {currentFocus && (
              <p><span className="font-semibold text-white">Current Focus:</span> <span className="text-gray-300">{currentFocus}</span></p>
            )}
            {coursework && (
              <p><span className="font-semibold text-white">Core Coursework:</span> <span className="text-gray-300">{coursework}</span></p>
            )}
            {location && (
              <p><span className="font-semibold text-white">Location:</span> <span className="text-gray-300">{location}</span></p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href={resumeUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition shadow-lg text-center"
            >
              Download CV
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full font-medium text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 transition text-center"
            >
              Contact Me
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

