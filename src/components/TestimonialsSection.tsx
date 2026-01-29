import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  name: 'Alan Pinheiro',
  text: 'Dra. Lorena tem mãos de fada. Não doeu e foi super tranquilo. O ambiente é tão acolhedor que nem parece consultório.',
  rating: 5
},
{
  name: 'Anderson Silva',
  text: 'Tinha muito medo de implante. Dr. Gustavo transmitiu muita confiança. Super recomendo! O pós-operatório foi excelente.',
  rating: 5
},
{
  name: 'Lucivone Moreira',
  text: 'Me senti abraçada por todos. Profissionalismo de excelência. Desde a recepção até o final do tratamento, tudo impecável.',
  rating: 5
}];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] font-serif mb-4">
            Histórias de Sorrisos Reais
          </h2>
          <div className="h-1 bg-[#d4a574] w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="bg-gray-50 p-8 rounded-2xl relative">

              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#d4a574]/20" />
              <div className="flex space-x-1 mb-4">
                {[...Array(item.rating)].map((_, i) =>
              <Star
                key={i}
                className="w-4 h-4 text-[#d4a574] fill-current" />

              )}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-[#1a365d]">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">Paciente Verificado</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}