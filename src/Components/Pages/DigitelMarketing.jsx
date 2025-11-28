import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function DigitalMarketing() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      <SEO
        title="Digital Marketing | SEO & Social Media Marketing"
        description="Comprehensive digital marketing services including SEO, paid ads, social media marketing, and content strategy to grow your online presence."
        keywords="digital marketing, SEO, social media marketing, paid ads, content strategy"
      />

      <section className="relative bg-gradient-to-br from-gray-50 to-orange-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive digital growth strategies to help businesses reach their target audience
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Growth Strategies
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide end-to-end digital marketing services including SEO, paid ads, and social media strategies to help businesses grow their online presence.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['Search Engine Optimization (SEO)', 'Paid Advertising Campaigns', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting', 'Performance Tracking'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Benefits</h3>
                <ul className="space-y-3">
                  {['Increased online visibility', 'Targeted audience reach', 'Data-driven strategies', 'Measurable business growth'].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg font-medium group hover:scale-105 hover:shadow-xl"
              >
                Start Marketing
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 aspect-square flex items-center justify-center border border-gray-300 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-600 font-medium">Digital Marketing</p>
                <p className="text-sm text-gray-500">Growth Strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}