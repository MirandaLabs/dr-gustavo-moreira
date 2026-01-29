import React from 'react';
import { Button } from './ui/Button';
import { MessageCircle, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1a365d] text-white pt-20 pb-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Dr. Gustavo Moreira
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Excelência em odontologia com um toque humano. Sua saúde bucal em
              boas mãos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#d4a574] transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#d4a574] transition-colors">

                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-[#d4a574] font-bold uppercase tracking-wider text-sm mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#d4a574] mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. Principal, 1234, Sala 502
                  <br />
                  Centro Médico Premium
                  <br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#d4a574] mr-3 shrink-0" />
                <span className="text-gray-300 text-sm">
                  Seg - Sex: 08h às 19h
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#2a466d]/50 p-8 rounded-2xl border border-white/5">
            <h3 className="font-serif text-2xl font-bold mb-2">
              Seu sorriso merece esse cuidado.
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Agende sua avaliação hoje mesmo e descubra uma nova forma de
              cuidar do seu sorriso.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="whatsapp" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com a Equipe no WhatsApp
              </Button>
              <span className="text-xs text-[#d4a574] font-medium bg-[#d4a574]/10 px-3 py-1 rounded-full border border-[#d4a574]/20">
                Atendimento com Hora Marcada e Sem Atrasos
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Consultório Dr. Gustavo Moreira.
            Todos os direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Responsável Técnico: Dr. Gustavo Moreira | CRO-SP 12345
          </p>
        </div>
      </div>
    </footer>);

}