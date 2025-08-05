import React, { useState } from 'react';
import { ArrowRight, Terminal, Code, Shield } from 'lucide-react';

const Hero = () => {
  const [cvShake, setCvShake] = useState(false);
  const [showButtonMessage, setShowButtonMessage] = useState(false);

  const handleCvClick = () => {
    setCvShake(true);
    setShowButtonMessage(true);
    setTimeout(() => setCvShake(false), 600);
    setTimeout(() => setShowButtonMessage(false), 3000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        
        {/* Floating icons */}
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <Terminal className="w-8 h-8 text-cyan-400/30" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-700">
          <Code className="w-6 h-6 text-purple-400/30" />
        </div>
        <div className="absolute bottom-40 left-32 animate-bounce delay-500">
          <Shield className="w-10 h-10 text-green-400/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Glitch effect title */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-thin text-white mb-4 relative">
            <span className="animate-gradient font-helvetica">
              7illumina
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full animate-pulse" />
        </div>

        <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
          Cybersecurity Specialist
        </h2>

        <p className="text-lg text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          Yo, I'm Emir. Just vibing in the cybersec world 🔐
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
           Honestly, this field is wild. I love digging into security stuff, finding weird bugs, and making the internet a bit safer for everyone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-8 py-4 rounded-xl text-white font-light transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Check My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          
          <button 
            onClick={handleCvClick}
            className={`relative px-8 py-4 rounded-xl text-gray-300 font-light border border-gray-700 hover:border-red-400 hover:text-red-300 transition-all duration-300 transform hover:scale-105 ${cvShake ? 'animate-shake' : ''}`}
          >
            {showButtonMessage ? (
              <div className="text-red-400 text-sm">
                Oops, things are a bit messy right now..<br/>
                <span className="text-xs text-red-500">CV is still in development...</span>
              </div>
            ) : (
              "Can you click this? 😅"
            )}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-light text-cyan-400 mb-2">7+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-purple-400 mb-2">2+</div>
            <div className="text-sm text-gray-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-500">Secure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;