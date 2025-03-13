
import React from 'react';
import { Smartphone, Monitor, Cloud, Settings } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-tianbot-blue" />,
      title: 'Aplicación interactiva',
      description: 'Interfaz personalizada que se adapta a las necesidades específicas de cada usuario, con sistemas de comunicación alternativos basados en pictogramas, sonidos y animaciones.'
    },
    {
      icon: <Monitor className="h-12 w-12 text-tianbot-green" />,
      title: 'Dispositivo adaptativo',
      description: 'Hardware especialmente diseñado para ser intuitivo y resistente, con sensores de seguimiento y adaptabilidad a diferentes entornos y situaciones.'
    },
    {
      icon: <Cloud className="h-12 w-12 text-tianbot-purple" />,
      title: 'Inteligencia adaptativa',
      description: 'Sistema de aprendizaje que evoluciona con el usuario, recopilando datos sobre patrones de uso y preferencias para ofrecer una experiencia cada vez más personalizada.'
    },
    {
      icon: <Settings className="h-12 w-12 text-tianbot-blue" />,
      title: 'Plataforma de seguimiento',
      description: 'Portal para familias y terapeutas que permite monitorizar el progreso, ajustar configuraciones y recibir recomendaciones específicas basadas en la actividad del usuario.'
    }
  ];

  return (
    <section id="how-it-works" className="container-section bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-tianbot-green to-tianbot-purple">
          ¿Cómo funciona?
        </h2>
        <p className="section-subtitle">
          Una experiencia tecnológica integral y adaptable
        </p>

        <div className="mt-16">
          <div className="flex flex-col space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 items-center`}
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-tianbot-blue-light/20 to-tianbot-green-light/20 border border-border">
                    {step.icon}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-tianbot-blue/30 to-tianbot-green/30 rounded-full blur-3xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">¿Por qué Tianbot es diferente?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-tianbot-green mr-2 font-bold">01.</span>
                <p><strong>Enfoque personalizado:</strong> A diferencia de otras soluciones genéricas, Tianbot se adapta a las necesidades específicas de cada usuario.</p>
              </li>
              <li className="flex items-start">
                <span className="text-tianbot-green mr-2 font-bold">02.</span>
                <p><strong>Tecnología integrada:</strong> Combinamos hardware y software en una solución cohesiva que ofrece una experiencia fluida.</p>
              </li>
              <li className="flex items-start">
                <span className="text-tianbot-green mr-2 font-bold">03.</span>
                <p><strong>Evolución continua:</strong> Nuestro sistema aprende y evoluciona con el usuario, ofreciendo una experiencia cada vez más efectiva.</p>
              </li>
              <li className="flex items-start">
                <span className="text-tianbot-green mr-2 font-bold">04.</span>
                <p><strong>Colaboración multidisciplinaria:</strong> Desarrollado por un equipo de tecnólogos, terapeutas y especialistas en autismo.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
