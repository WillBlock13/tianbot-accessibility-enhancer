
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Visita y Networking al MWC',
      date: '7 de marzo de 2025',
      excerpt: 'TianBot visita al Mobile World Congress, presentándose a startups y expertos en innovación, testando la propuesta #tianbot_acc y conectando con el ecosistema tecnológico.',
      image: 'lovable-uploads/mwc.jpeg',
      url: '#news-1'
    },
    {
      title: 'Entrevista al equipo TianBot',
      date: '26 de julio de 2024',
      excerpt: 'Entrevista de la Plana Radio compartiendo experiencias y visión de futuro del proyecto.',
      image: '/lovable-uploads/1.jpg',
      url: '#news-2'
    },
    {
      title: '1r Premio al Catalunya Summit',
      date: '27 de abril de 2024',
      excerpt: 'TianBot recibe el 1r premio al Catalunya Summit en Vilafranca del Penedès, destacándose como una propuesta líder en innovación social liderada por el equipo Skills-Lab del FabLab TE.',
      image: '/lovable-uploads/summit.jpg',
      url: '#news-3'
    },
    {
      title: 'Presentación pública en FabLab Amposta',
      date: '7 de junio de 2024',
      excerpt: 'El proyecto TianBot se presentó oficialmente en el FabLab de Amposta, con gran acogida por parte del público y ambición de llevarlo hasta Silicon Valley a través de concursos como el Audi Creativity Challenge.',
      image: '/lovable-uploads/quedada.jpg',
      url: '#news-4'
    },
    {
      title: 'Presentación en la Jornada "Parlem d\'Autisme"',
      date: '19 de octubre de 2023',
      excerpt: 'TianBot se presentó en la III Jornada "Parlem d\'Autisme" en La Ràpita ante profesionales de salud y educación, destacando como solución innovadora para mejorar la comunicación de personas con autismo.',
      image: '/lovable-uploads/rapita.jpeg',
      url: '#news-5'
    },
    {
      title: 'TianBot finalista en el Audi Creativity Challenge',
      date: '15 de junio de 2024',
      excerpt: 'Nuestro proyecto ha sido reconocido como uno de los finalistas en el prestigioso concurso de innovación Audi Creativity Challenge, destacando por su impacto social.',
      image: '/lovable-uploads/YDRAY-FOTOS-AUDI-CREATIVITY-CHALLENGE-DIA-02-WEB-501.jpg',
      url: '#news-6'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Tecnología y Autismo',
      date: '15 de julio de 2025',
      location: 'Amposta, España',
      url: '#event-1'
    },
    {
      title: 'MVP',
      date: 'julio de 2025',
      location: 'Amposta, España',
      url: '#event-2'
    },
    {
      title: 'DEMO Day ; AudiStart',
      date: 'Octubre de 2025',
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
        
        {/* Sección de Troubleshooting */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">¿Detectaste un problema?</h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden p-6">
            <p className="text-muted-foreground mb-6">
              Ayúdanos a mejorar TianBot reportando cualquier problema que encuentres con la identificación de signos de autismo. 
              Tu feedback es invaluable para mejorar nuestro sistema.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="problem-description" className="block text-sm font-medium mb-1">
                  Describe el problema
                </label>
                <textarea 
                  id="problem-description" 
                  className="w-full p-3 border border-border rounded-md"
                  rows={4}
                  placeholder="Describe el comportamiento o situación que TianBot no identificó correctamente..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="user-email" className="block text-sm font-medium mb-1">
                  Tu correo electrónico (opcional)
                </label>
                <input 
                  type="email" 
                  id="user-email" 
                  className="w-full p-3 border border-border rounded-md"
                  placeholder="Para recibir seguimiento a tu reporte..."
                />
              </div>
              <button 
                type="button" 
                className="bg-tianbot-blue text-white px-6 py-2 rounded-md hover:bg-tianbot-blue/80 transition-colors"
              >
                Enviar reporte
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
