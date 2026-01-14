import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TargetUsers from './components/TargetUsers';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-agriCharcoal bg-agriWhite overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="problem">
          <Problem />
        </section>
        <section id="solution">
          <Solution />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="target-users">
          <TargetUsers />
        </section>
        <section id="trust">
          <Trust />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;