import React, { useState } from 'react';

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Samama313',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samama-abbas-356345262/',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Email',
      url: 'mailto:samamaabbas098@gmail.com',
      icon: '✉️',
      color: 'from-red-600 to-red-800'
    },
  ];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-purple-900/50 to-slate-900 border-t border-purple-500/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 text-center shadow-lg backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-2">📧 samamaabbas098@gmail.com</p>
            <p className="text-gray-400 text-lg">📱 +92 325 8047930</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`group relative px-8 py-4 rounded-lg font-semibold text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-gradient-to-r ${link.color}`}
            >
              <span className="text-2xl mr-2">{link.icon}</span>
              <span>{link.name}</span>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Samama Abbas. Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
