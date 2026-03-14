'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Phone, Award, Leaf, ShieldCheck } from 'lucide-react';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Electric Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 dark:bg-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-200 dark:border-cyan-800 shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Zap className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                </motion.div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {business.google} • {business.warranty}
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-slate-900 dark:text-white">
                {business.name}
              </span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                {business.tagline}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Serving {business.serviceArea} since{' '}
              <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                {business.established}
              </span>
              . Professional electrical services with lifetime workmanship
              warranty.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/contact">
                <ElectricButton variant="cyan" size="lg">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </ElectricButton>
              </Link>

              <Link href={`tel:${business.phones.emergency}`}>
                <ElectricButton variant="amber" size="lg">
                  <Phone className="w-5 h-5" />
                  Emergency: {business.phones.emergency}
                </ElectricButton>
              </Link>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: Phone,
                  text: business.response.emergency + ' Response',
                  color: 'text-amber-500',
                  bg: 'bg-amber-50 dark:bg-amber-950/30',
                },
                {
                  icon: Award,
                  text: business.warranty,
                  color: 'text-cyan-500',
                  bg: 'bg-cyan-50 dark:bg-cyan-950/30',
                },
                {
                  icon: Leaf,
                  text: 'Green Energy',
                  color: 'text-green-500',
                  bg: 'bg-green-50 dark:bg-green-950/30',
                },
                {
                  icon: ShieldCheck,
                  text: 'Licensed & Insured',
                  color: 'text-blue-500',
                  bg: 'bg-blue-50 dark:bg-blue-950/30',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-4 rounded-2xl ${feature.bg} border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300`}
                >
                  <div className={`flex flex-col items-center space-y-2`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
