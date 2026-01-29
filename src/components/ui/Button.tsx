import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'whatsapp' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}
export function Button({
  variant = 'gold',
  isLoading,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider';
  const variants = {
    gold: 'bg-[#d4a574] text-white hover:bg-[#c9a66b] focus:ring-[#d4a574] shadow-lg hover:shadow-xl',
    navy: 'bg-[#1a365d] text-white hover:bg-[#2a466d] focus:ring-[#1a365d] shadow-lg',
    whatsapp:
    'bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366] shadow-lg hover:shadow-green-200 animate-pulse-slow',
    outline:
    'border-2 border-[#d4a574] text-[#1a365d] hover:bg-[#d4a574] hover:text-white'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </motion.button>);

}