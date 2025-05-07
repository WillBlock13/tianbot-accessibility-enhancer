
import React from 'react';
import { CheckCircle, Heart, Brain, Users } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    {
      title: 'Mejora la comunicación',
      description: 'Facilita la expresión de necesidades y emociones mediante interfaces visuales adaptadas.',
      icon: <CheckCircle className="h-6 w-6 text-tianbot-blue" />
    },
    {
      title: 'Promueve la autonomía',
      description: 'Ayuda a desarrollar habilidades de independencia en situaciones cotidianas.',
      icon: <Brain className="h-6 w-6 text-tianbot-green" />
    },
    {
      title: 'Sistema personalizado',
      description: 'Se personaliza según las necesidades específicas de cada persona.',
      icon: <Heart className="h-6 w-6 text-tianbot-purple" />
    },
    {
      title: 'Facilita la conexión',
      description: 'Por medio de la aplicación, familias y cuidadores se pueden conectar.',
      icon: <Users className="h-6 w-6 text-tianbot-blue" />
    }
  ];

  return (
    <section id="about" className="container-section bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-tianbot-blue to-tianbot-green">
          ¿Qué es TianBot?
        </h2>
        <p className="section-subtitle">
          Una solución tecnológica innovadora para personas con autismo
        </p>

        <div className="prose prose-lg max-w-none text-center mb-12">
          <p>
            TianBot es un proyecto que busca transformar la vida de las personas con autismo 
            utilizando la tecnología como puente para mejorar la comunicación y facilitar 
            la integración social. A través de interfaces intuitivas y herramientas adaptativas, 
            TianBot ofrece soluciones personalizadas que responden a las necesidades específicas 
            de cada individuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 rounded-xl hover-lift shadow-sm"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
