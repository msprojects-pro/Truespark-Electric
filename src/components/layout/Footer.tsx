'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  Zap,
} from 'lucide-react';
import business from '@/data/businessData';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: business.socials.facebook,
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: business.socials.instagram,
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: business.socials.linkedin,
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <Zap className="w-10 h-10 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {business.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {business.tagline}
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-sm leading-relaxed"
            >
              Your trusted electrical experts serving Middle Tennessee since{' '}
              {business.established}. Quality workmanship, honest pricing, and
              customer satisfaction guaranteed.
            </motion.p>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {business.awards.map((award) => (
                <div
                  key={award}
                  className="flex items-center space-x-1 text-xs text-amber-400 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-500/20"
                >
                  <Award className="w-3 h-3" />
                  <span>{award.replace('Angi Super Service Award ', '')}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-900 rounded-lg hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            <a
              href={`tel:${business.phones.emergency}`}
              className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors group"
            >
              <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-medium text-amber-500">
                  Emergency 24/7
                </p>
                <p className="text-sm">{business.phones.emergency}</p>
              </div>
            </a>

            <a
              href={`tel:${business.phones.main}`}
              className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Office</p>
                <p className="text-sm">{business.phones.main}</p>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm">{business.email}</p>
            </a>

            <div className="flex items-start space-x-3 text-slate-400">
              <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">{business.address}</p>
            </div>
          </motion.div>

          {/* Hours & Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Hours & Area</h4>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-slate-400">
                <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <p>
                    <span className="text-white font-medium">Office:</span>{' '}
                    {business.hours.office}
                  </p>
                  <p>
                    <span className="text-white font-medium">Service:</span>{' '}
                    {business.hours.service}
                  </p>
                  <p>
                    <span className="text-amber-500 font-medium">
                      Emergency:
                    </span>{' '}
                    {business.hours.emergency}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Service Area</p>
                <p className="text-sm text-slate-300">
                  {business.serviceArea}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Rating</p>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-400 text-lg">★★★★★</span>
                  <span className="text-sm text-slate-300">{business.google}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {business.established} {business.name}. All rights reserved.{' '}
              <span className="hidden sm:inline">| </span>
              <span className="block sm:inline">
                License: {business.credentials[0]}
              </span>
            </p>

            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-cyan-400" />
                {business.warranty}
              </span>
              <span>•</span>
              <span>{business.response.emergency} Emergency Response</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
