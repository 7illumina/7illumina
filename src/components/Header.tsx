import React, { useState, useEffect } from 'react';
import { Home, Info, Settings, Briefcase, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.sidebar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Services', href: '#services', icon: Settings },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button - Fixed Position */}
      <div 
        className="fixed top-4 left-4 z-50 group"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <button
          className="p-3 rounded-full text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            ></span>
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Sidebar Overlay - Mobile Only */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="sidebar h-full w-64 bg-black/20 backdrop-blur-md border-r border-white/10">
          <div className="p-6 h-full flex flex-col">
            {/* Menu Items */}
            <div className="flex-1 space-y-4 mt-12">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-lg font-light hover:text-blue-400 transition-all duration-300 w-full text-left py-2 hover:pl-3 flex items-center space-x-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
              <div className="text-center">
                <div className="text-blue-400 text-sm font-light mb-2">
                  Made with ❤️
                </div>
                <div className="text-gray-400 text-xs">
                  © 2025 7illumina
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
