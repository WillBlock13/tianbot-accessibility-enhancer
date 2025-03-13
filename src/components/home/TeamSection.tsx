
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ana García',
      role: 'Directora del Proyecto',
      bio: 'Especialista en tecnologías adaptativas con más de 10 años de experiencia en el sector.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ana@tianbot.com'
      }
    },
    {
      name: 'Carlos Martínez',
      role: 'Ingeniero de Software',
      bio: 'Desarrollador especializado en interfaces accesibles e interactivas para usuarios con necesidades especiales.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'carlos@tianbot.com'
      }
    },
    {
      name: 'Elena Ruiz',
      role: 'Especialista en Autismo',
      bio: 'Psicóloga con especialización en trastornos del espectro autista y comunicación aumentativa y alternativa.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'elena@tianbot.com'
      }
    },
    {
      name: 'Daniel Torres',
      role: 'Diseñador de Experiencia',
      bio: 'Experto en diseño centrado en el usuario con enfoque en accesibilidad y simplicidad visual.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'daniel@tianbot.com'
      }
    }
  ];

  return (
    <section id="team" className="container-section">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-tianbot-purple to-tianbot-blue">
          Nuestro equipo
        </h2>
        <p className="section-subtitle">
          Un grupo multidisciplinario comprometido con la innovación y la accesibilidad
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl overflow-hidden hover-lift shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={member.social.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Twitter de ${member.name}`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Contamos con la colaboración de expertos en diversas áreas para asegurar 
            que Tianbot sea una herramienta verdaderamente efectiva y transformadora.
          </p>
          <a href="#contact" className="btn-outline inline-block">
            Únete a nuestro equipo
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
