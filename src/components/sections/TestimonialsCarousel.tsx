'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import business from '@/data/businessData';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % business.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + business.testimonials.length) % business.testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = business.testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
            Don't just take our word for it
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {business.google}
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <Card className="p-8 md:p-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl shadow-cyan-500/5 relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 left-4 text-cyan-200 dark:text-cyan-900">
                    <Quote className="w-24 h-24 opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-amber-500 fill-amber-500"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                      "{currentTestimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          {currentTestimonial.location}
                        </p>
                      </div>

                      {/* Company Logo Placeholder */}
                      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-500">
                        <span>Verified Customer</span>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Gradient Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400" />
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {business.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setDirection(index > currentIndex ? 1 : -1) || setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-cyan-500'
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center text-cyan-500 dark:text-cyan-400 font-semibold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
          >
            View All Testimonials
          </a>
        </motion.div>
      </div>
    </section>
  );
}
