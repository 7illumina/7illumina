import React from 'react';
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { Shield } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/7illumina', 
      label: 'GitHub',
      color: 'hover:from-gray-600 hover:to-gray-500'
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/7illumina', 
      label: 'Instagram',
      color: 'hover:from-pink-500 hover:to-purple-500'
    },
    { 
      icon: SiX, 
      href: 'https://x.com/7illumina', 
      label: 'X',
      color: 'hover:from-blue-400 hover:to-blue-500'
    },
    { 
      icon: FaDiscord, 
      href: 'https://discord.gg/7illumina', 
      label: 'Discord',
      color: 'hover:from-indigo-500 hover:to-purple-500'
    },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-light text-white">7illumina</h3>
                <p className="text-sm text-gray-400">cyber security</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
               Doing my part to keep the digital world safe, one system at a time.<br />
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() => handleSocialClick(social.href)}
                    className={`w-10 h-10 bg-gray-800 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </button>
                );
              })}
            </div>
            <p className="text-gray-500 text-sm">
              DM me for collabs, idk maybe we can build something cool
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              Developed by 7illumina • {new Date().getFullYear()}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Made with ❤️ and lots of ☕</span>
            <span>•</span>
            <span>v2.0.25</span>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center mt-8 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-600">
            "stay secure, stay paranoid" - 7illumina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;