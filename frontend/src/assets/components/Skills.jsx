import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: '.NET', icon: '💻' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Figma', icon: '🎯' },
    { name: 'MSSQL', icon: '🗄️' },
    { name: 'Dart', icon: '🎯' }
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-purple-900/50 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-badge flex flex-col items-center justify-center h-32 group"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{skill.icon}</div>
              <span className="text-center font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
