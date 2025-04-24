
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Tianbot finalista en el Audi Creativity Challenge',
      date: '15 de junio de 2024',
      excerpt: 'Nuestro proyecto ha sido reconocido como uno de los finalistas en el prestigioso concurso de innovación Audi Creativity Challenge, destacando por su impacto social.',
      image: '/lovable-uploads/YDRAY-FOTOS-AUDI-CREATIVITY-CHALLENGE-DIA-02-WEB-501.jpg',
      url: '#news-1'
    },
    {
      title: 'Participación en el programa de incubación AudiStart',
      date: '28 de abril de 2025',
      excerpt: 'Presentamos la versión 2.0 de nuestra aplicación, con mejoras significativas en la interfaz de usuario y nuevas funcionalidades adaptativas.',
      image: '/lovable-uploads/504472dd-43a8-431d-b09f-2ade5b109e5d.png',
      url: '#news-2'
    },
    {
      title: 'Colaboración con el Centro de Investigación en Autismo',
      date: '12 de marzo de 2023',
      excerpt: 'Iniciamos una colaboración estratégica con el Centro de Investigación en Autismo para evaluar y mejorar continuamente nuestras herramientas.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
      url: '#news-3'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Tecnología y Autismo',
      date: '15 de julio de 2025',
      location: 'Online',
      url: '#event-1'
    },
    {
      title: 'Radio Amposta',
      date: '22 de julio de 2025',
      location: 'Barcelona, España',
      url: '#event-2'
    },
    {
      title: 'DEMO Day ; AudiStart',
      date: 'setiembre de 2025',
      location: 'Madrid, España',
      url: '#event-3'
    }
  ];

  return (
    <section id="news" className="container-section bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-tianbot-blue to-tianbot-purple">
          Noticias y eventos
        </h2>
        <p className="section-subtitle">
          Mantente al día con nuestros avances y actividades
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl overflow-hidden hover-lift shadow-sm h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{item.excerpt}</p>
                <a 
                  href={item.url} 
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  <span>Leer más</span>
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Próximos eventos</h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-6 hover:bg-accent/5 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {event.date}
                      </span>
                      <span className="sm:ml-4">{event.location}</span>
                    </div>
                  </div>
                  <a 
                    href={event.url} 
                    className="text-primary font-medium whitespace-nowrap flex items-center hover:underline"
                  >
                    <span>Más información</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
