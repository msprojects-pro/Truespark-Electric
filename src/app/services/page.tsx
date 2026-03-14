'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Building2, Factory, Zap, Leaf, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

const iconMap = {
  Zap,
  Home,
  Building2,
  Factory,
  Leaf,
};

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Comprehensive electrical solutions for residential, commercial, and industrial needs across Middle Tennessee
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <ElectricButton variant="cyan" size="lg">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </ElectricButton>
              </Link>
              <a href={`tel:${business.phones.main}`}>
                <ElectricButton variant="amber" size="lg">
                  <Phone className="w-5 h-5" />
                  {business.phones.main}
                </ElectricButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete Electrical Solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From emergency repairs to complete installations, we handle it all
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {business.serviceCategories.map((category, index) => {
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
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Proudly serving Middle Tennessee and beyond
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center"
            >
              <p className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 mb-4">
                {business.serviceArea}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                With {business.fleet}, our team can quickly respond to service calls throughout our coverage area. Whether you're in downtown Nashville or the surrounding counties, TrueSpark Electric is ready to help.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Nashville', 'Franklin', 'Murfreesboro', 'Hendersonville', 'Brentwood', 'Clarksville', 'Columbia', 'Lebanon'].map((city) => (
                  <div key={city} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{city}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose TrueSpark?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                The advantages of working with our expert team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Licensed & Insured',
                  description: 'Fully licensed in Tennessee with comprehensive insurance coverage',
                  icon: '🛡️',
                },
                {
                  title: 'Lifetime Warranty',
                  description: 'We stand behind our work with a lifetime workmanship guarantee',
                  icon: '✨',
                },
                {
                  title: 'Emergency Response',
                  description: `${business.response.emergency} response time for urgent electrical issues`,
                  icon: '⚡',
                },
                {
                  title: 'Green Energy Experts',
                  description: 'Specialized in solar, EV charging, and energy-efficient solutions',
                  icon: '🌱',
                },
                {
                  title: 'Transparent Pricing',
                  description: 'No hidden fees or surprises - honest quotes every time',
                  icon: '💰',
                },
                {
                  title: 'Experienced Team',
                  description: 'Master electricians with decades of combined experience',
                  icon: '👷',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-500 dark:from-cyan-600 dark:via-blue-700 dark:to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free, no-obligation quote on your electrical project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <ElectricButton variant="cyan" size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </ElectricButton>
              </Link>
              <a href={`tel:${business.phones.emergency}`}>
                <ElectricButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: {business.phones.emergency}
                </ElectricButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
