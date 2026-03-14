'use client';

import { motion } from 'framer-motion';
import { Home, Zap, ShieldCheck } from 'lucide-react';
import StatCounter from '@/components/ui/StatCounter';
import business from '@/data/businessData';

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMyMmQzZWUiIG9wYWNpdHk9IjEiLz48L2c+PC9zdmc+')] opacity-30" />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Numbers Speak
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A track record of excellence and reliability you can trust
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <StatCounter
            value={business.stats.homes}
            suffix="+"
            label="Homes & Businesses Served"
            icon={<Home className="w-6 h-6" />}
            delay={0}
          />

          <StatCounter
            value={business.stats.kwhSaved}
            suffix=" kWh"
            label="Energy Saved for Clients"
            icon={<Zap className="w-6 h-6" />}
            delay={0.2}
          />

          <StatCounter
            value={business.stats.accidentFreeYears}
            suffix=" Years"
            prefix=""
            label="Accident-Free Record"
            icon={<ShieldCheck className="w-6 h-6" />}
            delay={0.4}
          />
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Service Vans', value: business.fleet },
            { label: 'Team Members', value: '15+' },
            { label: 'Awards Won', value: business.awards.length.toString() },
            { label: 'Google Reviews', value: '890+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors"
            >
              <p className="text-2xl font-bold text-cyan-400 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
