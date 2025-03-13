
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TeamSection from '@/components/home/TeamSection';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <HowItWorksSection />
        <TeamSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
