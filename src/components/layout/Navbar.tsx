
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    {
      name: 'Inicio',
      href: '#home'
    }, 
    {
      name: '¿Qué es TianBot?',
      href: '#about'
    }, 
    {
      name: '¿Cómo funciona?',
      href: '#how-it-works'
    }, 
    {
      name: 'Nuestro equipo',
      href: '#team'
    }, 
    {
      name: 'Noticias',
      href: '#news'
    }, 
    {
      name: 'Contacto',
      href: '#contact'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="text-3xl"></span>
              <span>TianBot</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 dark:text-gray-200 focus:outline-none" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-2 px-3 rounded hover:bg-muted transition-colors" 
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-end pt-4 border-t border-border">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
