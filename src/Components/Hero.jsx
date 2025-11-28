import React from 'react'

import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQyNTM0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="IT Consulting Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          Transforming Businesses Through Technology
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Expert IT consultation services tailored to drive innovation, efficiency, and growth for your organization
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg backdrop-blur-sm border border-white/30 transition-colors"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
