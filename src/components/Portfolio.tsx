import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-12" />
        
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="text-6xl mb-6">🚧</div>
          <h3 className="text-2xl font-light text-white mb-4">Coming Soon</h3>
          <p className="text-gray-400">
            Working on some sick projects rn. Can't show everything due to NDAs but fr, 
            some cool stuff is coming. Hit me up if you wanna know more tbh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 