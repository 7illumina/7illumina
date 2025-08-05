import React from 'react';
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/7illumina',
      color: 'hover:from-gray-600 hover:to-gray-500'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/7illumina',
      color: 'hover:from-pink-500 hover:to-purple-500'
    },
    {
      name: 'X',
      icon: SiX,
      url: 'https://x.com/7illumina',
      color: 'hover:from-blue-400 hover:to-blue-500'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      url: 'https://discord.gg/7illumina',
      color: 'hover:from-indigo-500 hover:to-purple-500'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-12" />
        
        <p className="text-xl text-gray-300 mb-8">
          Got a project? Need some security advice? Or just wanna chat about cybersec? 
          idk, I'm always down for interesting convos fr.
        </p>
        
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-light text-white mb-6">Hit me up on socials</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className={`px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 ${social.color} rounded-xl text-white font-light transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{social.name}</span>
                </button>
              );
            })}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            btw, I usually respond pretty quick unless I'm deep in some code lol
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 