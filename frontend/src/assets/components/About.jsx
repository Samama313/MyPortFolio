import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-slate-900 to-purple-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-purple-800/40 border border-purple-500/30 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-purple-400/60 transition-all duration-300 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 animate-fadeInUp">
              I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with experience in building scalable, modern applications. 
              I specialize in <span className="text-purple-300 font-semibold">React</span>, <span className="text-purple-300 font-semibold">Node.js</span>, <span className="text-purple-300 font-semibold">Flutter & Dart</span>, and <span className="text-purple-300 font-semibold">.NET</span>. 
              I also have hands-on experience in <span className="text-purple-300 font-semibold">web development</span>, <span className="text-purple-300 font-semibold">UI/UX design with Figma</span>, 
              and working with databases like <span className="text-purple-300 font-semibold">MSSQL</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              I love turning ideas into functional, user-friendly applications. Always learning, exploring new technologies, 
              and building projects that make an impact. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
