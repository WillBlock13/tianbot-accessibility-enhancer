
import React, { useState } from 'react';
import { Linkedin, Twitter, Mail, Briefcase, Book, User } from 'lucide-react';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const TeamSection = () => {
  // Track loading state for images
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const teamMembers = [
    {
      name: 'Lala Escrivà',
      role: 'CEO',
      enneagram: 'Eneatipo 3 – La Triunfadora',
      studies: 'Agente de Innovación Social y Digital',
      bio: 'Lala es la CEO del proyecto TianBot, impulsando su visión y desarrollo dentro de Fablab TE. Con una mentalidad estratégica y orientada a resultados, se centra en transformar ideas en soluciones reales, conectando talento y recursos para hacer crecer el proyecto.',
      image: 'WillBlock13/tianbot-accessibility-enhancer/public/lovable-uploads/504472dd-43a8-431d-b09f-2ade5b109e5d.png',
      fallbackImage: 'public/lovable-uploads/fab-lab-te-amposta-directora-lala-escriva-pons-2024.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'iescriva@gmail.com'
      }
    },
    {
      name: 'Maria Dols',
      role: 'CMO',
      enneagram: 'Eneatipo 2 – La Ayudadora',
      studies: '2º Bachillerato Científico',
      bio: 'Maria es la Chief Marketing Officer (CMO) de TianBot, encargada de liderar la estrategia de marketing y ventas. Su rol incluye la planificación de campañas, la gestión de la comunicación y la identificación de oportunidades comerciales, buscando conectar con potenciales clientes.',
      image: 'WillBlock13/tianbot-accessibility-enhancer/public/lovable-uploads/504472dd-43a8-431d-b09f-2ade5b109e5d.png',
      fallbackImage: 'public/lovable-uploads/Imatge de WhatsApp 2025-02-23 a les 19.35.56_47122902.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria.dolss@tianbot.com'
      }
    },
    {
      name: 'Claudia Jiménez',
      role: 'UXVC',
      enneagram: 'Eneatipo 5 – La Observadora',
      studies: '4º ESO',
      bio: 'Claudia es la User Experience and Validation Coordinator (UXVC) de TianBot. Su rol implica analizar la experiencia del usuario y validar soluciones para optimizar su funcionamiento. Es una persona organizada, creativa y comprometida con el aprendizaje continuo.',
      image: 'WillBlock13/tianbot-accessibility-enhancer/public/lovable-uploads/504472dd-43a8-431d-b09f-2ade5b109e5d.png',
      fallbackImage: 'public/lovable-uploads/Captura de pantalla 2025-04-17 150644.png',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'claudia@tianbot.com'
      }
    },
    {
      name: 'Guillem Sànchez',
      role: 'PDE',
      enneagram: 'Eneatipo 7 – El Entusiasta',
      studies: '1º Ingeniería de Diseño Industrial',
      bio: 'Guillem es el Product Development Engineer (PDE), encargado de la fabricación digital y la parte electrónica del TianBot. Su rol incluye el diseño y producción de la estructura mediante impresión 3D y otras técnicas de fabricación, además de la integración de componentes electrónicos.',
      image: 'WillBlock13/tianbot-accessibility-enhancer/public/lovable-uploads/504472dd-43a8-431d-b09f-2ade5b109e5d.png',
      fallbackImage: 'public/lovable-uploads/IMG_20250305_181113.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'guillemformacio@tianbot.com'
      }
    }
  ];

  // Simplified image loading handler
  const handleImageLoad = (name: string) => {
    setImagesLoaded(prev => ({ ...prev, [name]: true }));
    console.log(`Image for ${name} loaded successfully`);
  };

  return (
    <section id="team" className="container-section bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-tianbot-purple to-tianbot-blue">
          Nuestro equipo
        </h2>
        <p className="section-subtitle">
          Un grupo joven y multidisciplinario comprometido con la innovación y la accesibilidad
        </p>

        {/* Desktop View - Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              onImageLoad={handleImageLoad}
              isLoaded={!!imagesLoaded[member.name]}
            />
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TeamMemberCard 
                    member={member} 
                    onImageLoad={handleImageLoad} 
                    isLoaded={!!imagesLoaded[member.name]}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-1" />
              <CarouselNext className="static transform-none mx-1" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Este equipo multidisciplinar combina creatividad, conocimiento técnico y sensibilidad social 
            para desarrollar una herramienta verdaderamente efectiva y transformadora para personas con autismo.
          </p>
          <a href="#contact" className="btn-outline inline-block">
            Únete a nuestro equipo
          </a>
        </div>
      </div>
    </section>
  );
};

// Separated TeamMemberCard component for better readability and maintenance
const TeamMemberCard = ({ 
  member, 
  onImageLoad,
  isLoaded 
}: { 
  member: any, 
  onImageLoad: (name: string) => void,
  isLoaded: boolean 
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="relative group overflow-hidden hover-lift cursor-pointer border border-border hover:border-primary/20 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          <div className="aspect-square overflow-hidden relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                <Skeleton className="w-full h-full" />
              </div>
            )}
            <div className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                onLoad={() => onImageLoad(member.name)}
                onError={(e) => {
                  console.log(`Error loading image for ${member.name}, using fallback`);
                  e.currentTarget.src = member.fallbackImage;
                  onImageLoad(member.name);
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent z-20">
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium flex items-center gap-1">
                <Briefcase size={14} />
                {member.role}
              </p>
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 shadow-xl border border-border bg-card">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-base font-bold leading-tight">{member.name}</h4>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <User size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">{member.enneagram}</span>
            </p>
            <p className="flex items-center gap-2">
              <Book size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">{member.studies}</span>
            </p>
            <p className="pt-2 text-card-foreground">{member.bio}</p>
          </div>
        </div>
        <div className="border-t border-border bg-muted/30 p-3 flex justify-end space-x-3">
          <a 
            href={member.social.linkedin} 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={member.social.twitter} 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Twitter de ${member.name}`}
          >
            <Twitter size={16} />
          </a>
          <a 
            href={`mailto:${member.social.email}`} 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Email de ${member.name}`}
          >
            <Mail size={16} />
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TeamSection;
