import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Main content */}
      <main className="transition-all duration-500 ease-out">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;