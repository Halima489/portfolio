import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Vite', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-blue text-white px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 border-b border-gray-800 pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-200">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      {/* Gradient Progress Fill */}
                      <div
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;