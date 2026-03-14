'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from './card';

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  description: string;
  delay?: number;
}

export default function TrustBadge({
  icon: Icon,
  label,
  description,
  delay = 0,
}: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="p-6 text-center bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white mb-4 shadow-lg shadow-cyan-500/30"
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {label}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
