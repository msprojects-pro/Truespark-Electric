'use client';

import { motion } from 'framer-motion';
import { Star, Phone, Quote } from 'lucide-react';
import Link from 'next/link';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

export default function Testimonials() {
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
              Customer <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              See what our customers have to say about their experience with TrueSpark Electric
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                {business.google}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Real reviews from real customers across Middle Tennessee
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {business.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-cyan-200 dark:text-cyan-900">
                    <Quote className="w-12 h-12 opacity-50" />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Customer Satisfaction Stats
              </h2>
              <p className="text-lg text-slate-400">
                Numbers that reflect our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '4.9★', label: 'Average Rating' },
                { value: '890+', label: 'Reviews' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '75%', label: 'Would Recommend' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-800 rounded-2xl text-center"
                >
                  <p className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
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
              Join Our Satisfied Customers
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the TrueSpark difference for yourself. Contact us today for exceptional electrical service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <ElectricButton variant="cyan" size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
                  Get Started
                </ElectricButton>
              </Link>
              <a href={`tel:${business.phones.main}`}>
                <ElectricButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
                  {business.phones.main}
                </ElectricButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
