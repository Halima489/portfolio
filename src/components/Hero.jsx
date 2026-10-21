import React from "react";
import profileImg from "../assets/profile.jpg.jpg";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const info = portfolioData.personalInfo || portfolioData;
const { name, title, bio: description, resumeUrl, github: githubUrl, linkedin: linkedinUrl } = info;
  return (
    <section id="hero" className="py-12 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Profile image and background glow */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-40"></div>
            <img 
              src={profileImg} 
              alt={name || "Profile"} 
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </div>

          {/* Text and Button Section */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
              {name || "Halima Begum"}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 font-medium">
              {title || "I am Student"}
            </p>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {description || "Passionate Computer Science Student"}
            </p>

            {/* Button Links */}
            <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get In Touch
              </a>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Resume
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              )}

              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}