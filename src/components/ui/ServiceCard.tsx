'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Card } from './card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  services: string[];
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  services,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px -12px rgba(34, 211, 238, 0.3)',
      }}
    >
      <Card className="h-full p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
        >
          <Icon className="w-7 h-7" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        {/* Services List */}
        <ul className="space-y-2">
          {services.map((service, index) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 + index * 0.05 }}
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
              <span className="text-sm">{service}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
