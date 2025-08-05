import React from 'react';
import { Shield, Terminal, Lock, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Shield, name: 'Penetration Testing', level: 95 },
    { icon: Terminal, name: 'Ethical Hacking', level: 90 },
    { icon: Lock, name: 'Security Analysis', level: 88 },
    { icon: Zap, name: 'Incident Response', level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Who Am I?
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Not sure how to start, but hey—I'm 7illumina. I’m into cybersecurity, pen testing, vulnerability research, and ethical hacking. This stuff is honestly my passion.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-light text-white">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 font-light">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-green-400 font-mono text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">$</span>
                  <span className="animate-pulse">whoami</span>
                </div>
                <div className="text-white">7illumina</div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-cyan-400">$</span>
                  <span className="animate-pulse">cat /etc/skills</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div>• Cybersecurity Professional</div>
                  <div>• Penetration Tester</div>
                  <div>• Ethical Hacker</div>
                  <div>• Security Researcher</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-cyan-400">$</span>
                  <span className="animate-pulse">status</span>
                </div>
                <div className="text-green-400">● online | ready to hack</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-75" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;