import React, { useState, useEffect } from 'react';
import { Menu, X, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/shared/ThemeToggle';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
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
  const toggleAccessibilityMenu = () => setShowAccessibilityMenu(!showAccessibilityMenu);
  const navLinks = [{
    name: 'Inicio',
    href: '#home'
  }, {
    name: '¿Qué es Tianbot?',
    href: '#about'
  }, {
    name: '¿Cómo funciona?',
    href: '#how-it-works'
  }, {
    name: 'Nuestro equipo',
    href: '#team'
  }, {
    name: 'Noticias',
    href: '#news'
  }, {
    name: 'Contacto',
    href: '#contact'
  }];
  const handleAccessibilityOption = (option: string) => {
    if (option === 'contrast') {
      document.body.classList.toggle('high-contrast');
    } else if (option === 'text-size') {
      document.body.classList.toggle('large-text');
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="text-3xl">
            </span>
              <span>Tianbot</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => <a key={link.name} href={link.href} className="hover:text-primary transition-colors py-2">
                {link.name}
              </a>)}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleAccessibilityMenu} className="p-2 rounded-full hover:bg-muted transition-colors relative" aria-label="Accessibility options">
              <Accessibility size={20} />
              
              {showAccessibilityMenu && <div className="absolute right-0 mt-2 w-60 bg-background border border-border rounded-md shadow-lg p-2 animate-fade-in">
                  <p className="px-3 py-2 text-sm font-medium">Opciones de accesibilidad</p>
                  <div className="border-t border-border my-1"></div>
                  <button onClick={() => handleAccessibilityOption('contrast')} className="w-full text-left px-3 py-2 hover:bg-muted rounded-md text-sm">
                    Alto contraste
                  </button>
                  <button onClick={() => handleAccessibilityOption('text-size')} className="w-full text-left px-3 py-2 hover:bg-muted rounded-md text-sm">
                    Texto grande
                  </button>
                </div>}
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => <a key={link.name} href={link.href} className="py-2 px-3 rounded hover:bg-muted transition-colors" onClick={toggleMenu}>
                  {link.name}
                </a>)}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button onClick={toggleAccessibilityMenu} className="p-2 rounded-full hover:bg-muted transition-colors flex items-center gap-2" aria-label="Accessibility options">
                  <Accessibility size={20} />
                  <span>Accesibilidad</span>
                </button>
                <ThemeToggle />
              </div>
              
              {showAccessibilityMenu && <div className="mt-2 bg-muted/50 border border-border rounded-md p-2">
                  <p className="px-2 py-1 text-sm font-medium">Opciones de accesibilidad</p>
                  <div className="border-t border-border my-1"></div>
                  <button onClick={() => handleAccessibilityOption('contrast')} className="w-full text-left px-2 py-1 hover:bg-muted rounded text-sm">
                    Alto contraste
                  </button>
                  <button onClick={() => handleAccessibilityOption('text-size')} className="w-full text-left px-2 py-1 hover:bg-muted rounded text-sm">
                    Texto grande
                  </button>
                </div>}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;