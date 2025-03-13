
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tianbot-blue/5 to-tianbot-green/5"></div>
      
      <div 
        className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full bg-gradient-to-br from-tianbot-blue to-tianbot-green p-1"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tianbot-blue to-tianbot-green blur-xl opacity-30"></div>
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
          <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tianbot-blue to-tianbot-green">𝘁</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Tianbot
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
        Mejorando la comunicación e integración social de personas con autismo mediante tecnología innovadora y herramientas interactivas.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <a href="#about" className="btn-primary">
          Descubre Tianbot
        </a>
        <a href="#contact" className="btn-outline">
          Contáctanos
        </a>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Descubre más</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
