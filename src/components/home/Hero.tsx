
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
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
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
        </div>
        
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-tianbot-blue/20 to-tianbot-green/20 rounded-full blur-xl"></div>
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[550px]">
              <img 
                src="/lovable-uploads/a5c60bb0-c8cd-4de4-86d6-f718e3f81188.png" 
                alt="TianBot dispositivo de comunicación asistiva" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
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
