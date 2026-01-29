import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'A Clínica',
    href: '#why-us'
  },
  {
    name: 'Equipe',
    href: '#team'
  },
  {
    name: 'Especialidades',
    href: '#specialties'
  },
  {
    name: 'Depoimentos',
    href: '#testimonials'
  }];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#1a365d]' : 'text-[#1a365d] md:text-white'}`}>

              Dr. Gustavo Moreira
            </span>
            <span
              className={`text-xs tracking-[0.2em] uppercase ${isScrolled ? 'text-[#d4a574]' : 'text-[#d4a574] md:text-white/80'}`}>

              Odontologia Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#d4a574] ${isScrolled ? 'text-[#1a365d]' : 'text-white/90'}`}>

                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className={`flex items-center px-5 py-2.5 rounded-sm text-sm font-medium transition-all ${isScrolled ? 'bg-[#1a365d] text-white hover:bg-[#2a466d]' : 'bg-white text-[#1a365d] hover:bg-gray-100'}`}>

              <Phone className="w-4 h-4 mr-2" />
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-[#1a365d]' : 'text-[#1a365d]'}`} // Always dark on mobile for visibility against potentially light backgrounds if not scrolled, or handle hero overlay better. Actually hero text is white, but nav might be on top. Let's stick to dark for mobile button if not scrolled, assuming mobile hero image might be light or we ensure contrast.
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-t border-gray-100">

            <div className="px-4 pt-2 pb-8 space-y-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1a365d] hover:text-[#d4a574] hover:bg-gray-50 rounded-md">

                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-[#d4a574] text-white font-medium rounded-sm">

                Agendar Avaliação
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}