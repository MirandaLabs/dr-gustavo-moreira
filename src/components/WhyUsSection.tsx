import React from 'react';
import { motion } from 'framer-motion';
import { Feather, MessageCircle, Home } from 'lucide-react';
const features = [
{
  icon: Feather,
  title: 'Mãos Leves e Sem Dor',
  description:
  'Procedimentos tranquilos para você perder o medo de dentista. Anestesia sem trauma e técnicas minimamente invasivas.',
  delay: 0.2
},
{
  icon: MessageCircle,
  title: 'Acompanhamento VIP',
  description:
  'Não te abandonamos. Monitoramento pós-cirúrgico via mensagem para garantir sua recuperação perfeita e tranquilidade.',
  delay: 0.4
},
{
  icon: Home,
  title: 'Sinta-se em Casa',
  description:
  'Uma equipe que te abraça. Ambiente familiar, seguro e acolhedor, pensado para reduzir a ansiedade e promover bem-estar.',
  delay: 0.6
}];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">

            Por que somos diferentes?
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              width: 0
            }}
            whileInView={{
              opacity: 1,
              width: '80px'
            }}
            viewport={{
              once: true
            }}
            className="h-1 bg-[#d4a574] mx-auto" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: feature.delay,
              duration: 0.5
            }}
            className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#d4a574]/30 hover:shadow-xl transition-all duration-300">

              <div className="w-14 h-14 bg-[#1a365d] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}