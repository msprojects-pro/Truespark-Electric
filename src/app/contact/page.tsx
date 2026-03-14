'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, Zap } from 'lucide-react';
import Link from 'next/link';
import ElectricButton from '@/components/ui/ElectricButton';
import business from '@/data/businessData';

type FormState = 'idle' | 'submitting' | 'success';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');

    // Reset form after showing success
    setTimeout(() => {
      setFormState('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get In <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${business.phones.emergency}`}>
                <ElectricButton variant="amber" size="lg">
                  <Phone className="w-5 h-5" />
                  Emergency: {business.phones.emergency}
                </ElectricButton>
              </a>
              <a href={`tel:${business.phones.main}`}>
                <ElectricButton variant="cyan" size="lg">
                  <Phone className="w-5 h-5" />
                  Office: {business.phones.main}
                </ElectricButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Request a Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="Emergency">Emergency Services</option>
                        <option value="Residential">Residential Electrical</option>
                        <option value="Commercial">Commercial Electrical</option>
                        <option value="Industrial">Industrial Electrical</option>
                        <option value="Green Energy">Green Energy Solutions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-slate-900 dark:text-white"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.button
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </motion.button>
                    )}

                    {formState === 'submitting' && (
                      <motion.button
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        disabled
                        className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center opacity-75"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="mr-2"
                        >
                          <Zap className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </motion.button>
                    )}

                    {formState === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full px-8 py-4 bg-green-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                        >
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                        </motion.div>
                        Message Sent Successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Have questions? Reach out to us directly using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                      <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Emergency (24/7)
                      </p>
                      <a
                        href={`tel:${business.phones.emergency}`}
                        className="text-lg font-bold text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        {business.phones.emergency}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Office
                      </p>
                      <a
                        href={`tel:${business.phones.main}`}
                        className="text-lg font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        {business.phones.main}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${business.email}`}
                        className="text-lg font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Address
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {business.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 bg-gradient-to-br from-slate-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Office Hours</span>
                      <span className="font-medium text-slate-900 dark:text-white">{business.hours.office}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Service Hours</span>
                      <span className="font-medium text-slate-900 dark:text-white">{business.hours.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-600 dark:text-amber-400 font-medium">Emergency Service</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">{business.hours.emergency}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-slate-200 dark:bg-slate-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-cyan-500 dark:text-cyan-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {business.address}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Serving {business.serviceArea}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
