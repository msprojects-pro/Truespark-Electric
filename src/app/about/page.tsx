'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Award, CheckCircle2, Phone, Mail, MapPin as MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

export default function About() {
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
              About <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">TrueSpark Electric</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              {business.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <Calendar className="w-5 h-5 text-cyan-500" />
                <span>Established {business.established}</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>Nashville, TN</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                <Users className="w-5 h-5 text-cyan-500" />
                <span>Expert Team</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Founded in {business.established}, TrueSpark Electric has grown from a small family operation to one of Middle Tennessee's most trusted electrical service providers. What started as Derek "Sparky" Coleman's dream to provide honest, high-quality electrical work has evolved into a full-service electrical company serving both residential and commercial clients.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Our journey began with a simple philosophy: treat every customer like family and every project as if it were our own home. This commitment to excellence has earned us numerous awards, including the Angi Super Service Award for three consecutive years (2022, 2023, and 2024).
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Today, we operate with {business.fleet} and a dedicated team of 15+ electrical professionals. From emergency repairs to large-scale commercial installations, from basic panel upgrades to complete solar energy systems, we bring the same level of care and expertise to every job.
                </p>
              </div>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { label: 'Years Experience', value: new Date().getFullYear() - business.established + '+' },
                { label: 'Projects Completed', value: business.stats.homes.toLocaleString() + '+' },
                { label: 'Team Members', value: '15+' },
                { label: 'Service Area', value: '75+ Miles' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <p className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl border border-cyan-200 dark:border-cyan-800"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To provide exceptional electrical services that exceed customer expectations through quality workmanship, honest pricing, and unwavering commitment to safety. We aim to be the most trusted electrical company in Middle Tennessee, one project at a time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl border border-amber-200 dark:border-amber-800"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  {[
                    'Integrity in every interaction',
                    'Quality that lasts a lifetime',
                    'Safety above all else',
                    'Innovation in green energy',
                    'Community-focused service',
                  ].map((value, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Our Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
                Meet Our Team
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {business.team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm font-medium">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials & Awards */}
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
                Credentials & Awards
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Our commitment to excellence is recognized
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Awards
                  </h3>
                </div>
                <ul className="space-y-3">
                  {business.awards.map((award) => (
                    <li key={award} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Credentials
                  </h3>
                </div>
                <ul className="space-y-3">
                  {business.credentials.map((credential) => (
                    <li key={credential} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{credential}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              Ready to Work with Tennessee's Best?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our team today and experience the TrueSpark difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <ElectricButton variant="cyan" size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
                  Get Free Quote
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
