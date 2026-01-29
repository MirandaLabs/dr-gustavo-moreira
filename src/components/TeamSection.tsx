import React from 'react';
import { motion } from 'framer-motion';
export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a365d]/5 skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#d4a574] font-medium tracking-wider uppercase text-sm">
            Nossos Especialistas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] mt-2 mb-6">
            Conheça quem vai cuidar de você
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma dupla de especialistas unidos pelo propósito de oferecer o
            melhor da odontologia com o máximo de conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dr. Lorena */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg border-b-4 border-[#d4a574]">

            <div className="w-full md:w-1/2 h-80 md:h-full relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Dra. Lorena Vieira"
                className="w-full h-full object-cover" />

            </div>
            <div className="w-full md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-[#1a365d] font-serif mb-1">
                Dra. Lorena Vieira
              </h3>
              <p className="text-[#d4a574] font-medium mb-4">
                Odontopediatria & Clínica Geral
              </p>
              <p className="text-gray-600 italic mb-4">"Mãos de Fada"</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especialista em conquistar a confiança das crianças e realizar
                cirurgias com delicadeza absoluta. Seu atendimento transforma o
                medo em sorrisos.
              </p>
            </div>
          </motion.div>

          {/* Dr. Gustavo */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg border-b-4 border-[#1a365d]">

            <div className="w-full md:w-1/2 h-80 md:h-full relative md:order-2">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                alt="Dr. Gustavo Moreira"
                className="w-full h-full object-cover" />

            </div>
            <div className="w-full md:w-1/2 p-8 md:order-1">
              <h3 className="text-2xl font-bold text-[#1a365d] font-serif mb-1">
                Dr. Gustavo Moreira
              </h3>
              <p className="text-[#d4a574] font-medium mb-4">
                Reabilitação Oral & Implantes
              </p>
              <p className="text-gray-600 italic mb-4">
                "Precisão & Segurança"
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experiência e segurança para transformar seu sorriso e devolver
                sua autoestima. Especialista em casos complexos e reabilitações
                estéticas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}