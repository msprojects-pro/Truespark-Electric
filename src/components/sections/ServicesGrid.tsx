'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Building2, Factory, Zap, Leaf, LucideIcon } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import business from '@/data/businessData';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Home,
  Building2,
  Factory,
  Leaf,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const categories = showAll
    ? business.serviceCategories
    : business.serviceCategories.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
            Comprehensive electrical solutions for every need
          </p>
          <p className="text-slate-500 dark:text-slate-500">
            Serving {business.serviceArea}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Zap;
            return (
              <ServiceCard
                key={category.category}
                icon={Icon}
                title={category.category}
                services={category.services}
                delay={index * 0.1}
              />
            );
          })}
        </motion.div>

        {/* View All Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
