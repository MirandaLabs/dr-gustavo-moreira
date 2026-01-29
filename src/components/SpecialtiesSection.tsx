import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Sparkles, HeartPulse } from 'lucide-react';
const specialties = [
{
  icon: HeartPulse,
  title: 'Implantes Dentários',
  subtitle: 'Volte a sorrir com segurança',
  description:
  'Recupere a função e a estética do seu sorriso com implantes de alta tecnologia e durabilidade.'
},
{
  icon: Smile,
  title: 'Odontopediatria',
  subtitle: 'Cuidado lúdico para os pequenos',
  description:
  'Prevenção e tratamento em um ambiente divertido, criando uma geração sem medo de dentista.'
},
{
  icon: Sparkles,
  title: 'Clareamento & Estética',
  subtitle: 'Resultados fantásticos e naturais',
  description:
  'Lentes de contato, facetas e clareamento para um sorriso harmônico e radiante.'
}];

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-24 bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Tratamentos de Excelência
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas para garantir resultados
            precisos, duradouros e esteticamente perfeitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((spec, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="bg-[#2a466d]/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#d4a574]/50 transition-colors duration-300">

              <div className="w-12 h-12 bg-[#d4a574] rounded-lg flex items-center justify-center mb-6 text-white shadow-lg">
                <spec.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">
                {spec.title}
              </h3>
              <p className="text-[#d4a574] text-sm font-medium mb-4 uppercase tracking-wide">
                {spec.subtitle}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}