import React from 'react';
import profile from '../images/me.jpeg';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-800 text-white py-20 px-5 text-center border-b border-purple-500/30 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fadeInUp">
          <img 
            src={profile} 
            alt="Samama Abbas" 
            className="w-40 h-40 rounded-full object-cover border-4 border-purple-400 mx-auto shadow-2xl animate-pulse-glow hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideInRight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Samama Abbas
        </h1>
        <p className="text-xl md:text-2xl font-light text-purple-200 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          BSCS | Full-Stack Developer
        </p>
        <p className="text-sm md:text-base text-gray-300 mt-4 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          Building beautiful, scalable applications with modern technologies
        </p>
      </div>
    </header>
  );
};

export default Header;
