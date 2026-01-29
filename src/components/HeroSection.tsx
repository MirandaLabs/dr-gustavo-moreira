import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Calendar } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Ambiente odontológico acolhedor"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-2xl">

          <div className="inline-block mb-4 px-3 py-1 border border-[#d4a574]/50 rounded-full bg-[#1a365d]/50 backdrop-blur-sm">
            <span className="text-[#d4a574] text-sm font-medium tracking-wider uppercase">
              Sanctuary of Smiles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Excelência Odontológica com{' '}
            <span className="text-[#d4a574] italic">Toque Humano</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
            Especialistas em Implantes, Cirurgia e Odontopediatria. Um ambiente
            onde a técnica precisa encontra o acolhimento que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gold"
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              <Calendar className="w-5 h-5 mr-2" />
              Agendar Avaliação Humanizada
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">

        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5
            }}
            className="w-1 h-1 bg-[#d4a574] rounded-full" />

        </div>
      </motion.div>
    </section>);

}