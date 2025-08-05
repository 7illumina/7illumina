import React, { useState } from 'react';
import { Shield, Search, AlertTriangle, Code, Lock, Zap } from 'lucide-react';

const Services = () => {
  const [buttonShake, setButtonShake] = useState<number | null>(null);
  const [showButtonMessage, setShowButtonMessage] = useState<number | null>(null);

  const handleLearnMoreClick = (index: number) => {
    setButtonShake(index);
    setShowButtonMessage(index);
    setTimeout(() => setButtonShake(null), 600);
    setTimeout(() => setShowButtonMessage(null), 3000);
  };

  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Testing your systems before the bad guys do lol',
      color: 'from-cyan-400 to-blue-500',
      features: ['Web App Testing', 'Network Scanning', 'Social Engineering', 'Red Team Ops']
    },
    {
      icon: Search,
      title: 'Security Consulting',
      description: 'Optimizing your cybersecurity strategies fr',
      color: 'from-purple-400 to-pink-500',
      features: ['Risk Assessment', 'Security Policies', 'Compliance Check', 'Training']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Analysis',
      description: 'From zero-days to simple config mistakes tbh',
      color: 'from-green-400 to-emerald-500',
      features: ['CVE Research', 'Code Review', 'Binary Analysis', 'Exploit Dev']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Do I Do?
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button 
                onClick={() => handleLearnMoreClick(index)}
                className={`w-full py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-xl text-white font-light transition-all duration-300 transform group-hover:scale-105 ${buttonShake === index ? 'animate-shake' : ''}`}
              >
                {showButtonMessage === index ? (
                  <div className="text-orange-400 text-sm">
                    Sorry, seems like it's not working 😅<br/>
                    <span className="text-xs text-orange-500">This feature is still in development...</span>
                  </div>
                ) : (
                  "Learn More"
                )}
              </button>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Need something custom? fr, just hit me up
          </p>
          <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-8 py-4 rounded-xl text-white font-light transition-all duration-300 transform hover:scale-105 inline-block">
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;