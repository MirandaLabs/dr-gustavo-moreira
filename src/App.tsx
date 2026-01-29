import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TeamSection } from './components/TeamSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <WhyUsSection />
        <TeamSection />
        <SpecialtiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>);

}