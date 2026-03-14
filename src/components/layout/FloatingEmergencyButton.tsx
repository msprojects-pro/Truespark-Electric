'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import business from '@/data/businessData';

export default function FloatingEmergencyButton() {
  return (
    <motion.a
      href={`tel:${business.phones.emergency}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-2xl pulse-subtle hover:shadow-amber-500/40 transition-shadow"
      aria-label="Call Emergency Line"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <Phone className="w-5 h-5" />
      </motion.div>
      <span className="hidden sm:inline">24/7 Emergency</span>
    </motion.a>
  );
}
