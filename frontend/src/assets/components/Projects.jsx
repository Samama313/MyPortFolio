import React from 'react';

const Projects = () => {
  const projects = [
    { 
      name: '.NET C# Windows Form Swimming Pool Management System',
      description: 'A comprehensive desktop application for managing swimming pool operations',
      technologies: ['.NET', 'C#', 'Windows Forms'],
      link: 'https://github.com/Samama313/Swimming-Pool',
      icon: '🏊'
    },
    { 
      name: '.NET MVC NaatKhuwaan WebApp',
      description: 'A web application for Islamic content and community engagement',
      technologies: ['.NET MVC', 'Web'],
      link: 'https://github.com/Samama313/NaatKhuwaan',
      icon: '🌟'
    },
    { 
      name: 'BIIT Academic Calendar Backend',
      description: 'Backend API for managing academic schedules and events',
      technologies: ['Node.js', 'API', 'Database'],
      link: 'https://github.com/Samama313/BIIT-Academic-Calendar-Backend',
      icon: '📅'
    },
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-slate-900 to-purple-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-purple-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-blue-500/30 text-blue-200 rounded-full px-3 py-1 border border-blue-400/50">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center inline-block"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
