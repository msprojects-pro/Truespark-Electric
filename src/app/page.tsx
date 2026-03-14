'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ArrowRight, Zap, ShieldCheck, Clock, Award, Leaf, Users, Star } from 'lucide-react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/StatsSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import TrustBadge from '@/components/ui/TrustBadge';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

const iconMap = {
  ShieldCheck,
  Clock,
  Award,
  Leaf,
  Users,
  Star,
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Trust Badges Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose TrueSpark Electric?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Trusted by thousands of homeowners and businesses across Middle
              Tennessee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {business.trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap];
              return (
                <TrustBadge
                  key={badge.label}
                  icon={Icon}
                  label={badge.label}
                  description={badge.description}
                  delay={index * 0.1}
                />
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      <ServicesGrid />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-500 dark:from-cyan-600 dark:via-blue-700 dark:to-cyan-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Power Up Your Project?
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote today. Our expert team is ready
                to handle all your electrical needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-2xl hover:shadow-white/25 transition-all flex items-center"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </Link>

                <a href={`tel:${business.phones.main}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {business.phones.main}
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The TrueSpark Difference
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Lifetime Warranty',
                description: business.warranty,
                icon: '🛡️',
              },
              {
                title: 'Emergency Response',
                description: business.response.emergency + ' response time',
                icon: '⚡',
              },
              {
                title: 'Green Energy Experts',
                description: business.financing,
                icon: '🌱',
              },
              {
                title: 'Financing Available',
                description: 'Flexible payment options',
                icon: '💳',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-cyan-500/5 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-gradient-to-br from-slate-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Licensed, Insured, and Ready to Serve
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Credentials
                  </h3>
                  <ul className="space-y-2">
                    {business.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-2">
                    {business.awards.map((award) => (
                      <li
                        key={award}
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <ElectricButton variant="cyan" size="lg">
                    Schedule Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </ElectricButton>
                </Link>

                <Link href="/about">
                  <ElectricButton variant="outline" size="lg">
                    Learn More About Us
                  </ElectricButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
