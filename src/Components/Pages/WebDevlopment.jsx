import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function WebDevelopment() {
  return (
    <div className="pt-20 bg-white text-gray-900">
      <SEO
        title="Web Development Services | FlyHomies Associates"
        description="Professional web development services including custom websites, e-commerce platforms, CMS solutions, and performance-optimized applications."
        keywords="web development, website design, ecommerce, cms, flyhomies development"
      />

      {/* HERO SECTION */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Web Development
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Build powerful, scalable, and visually stunning websites with FlyHomies Associates.
            Our approach focuses on clean UI, fast performance, and delivering a seamless user experience.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We don’t just build websites — we craft digital experiences that turn visitors into customers.
                Every project goes through research, wireframing, UI/UX design, development, testing, and launch.
              </p>

              <div className="space-y-4">
                {[
                  'Research & Requirement Understanding',
                  'UI / UX Wireframing & Planning',
                  'Clean, Scalable Frontend Development',
                  'Secure & Robust Backend Development',
                  'SEO-Friendly & Performance Optimized',
                  'Quality Assurance & Testing'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-black mt-1" size={20} />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-12 border border-gray-300 flex items-center justify-center bg-white shadow-lg">
      
              <img
                  src="/dev.webp"
                  alt="Dubai"
                  className="w-full max-w-md object-contain"
                />
           
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold mb-10 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: 'Custom Website Development',
                desc: 'Unique designs & custom-built functionalities based on your business needs.'
              },
              {
                title: 'E-Commerce Solutions',
                desc: 'Scalable e-commerce stores with cart, checkout, payment gateway, and admin panel.'
              },
              {
                title: 'Responsive & Modern UI',
                desc: 'Pixel-perfect, mobile-friendly, and ultra-fast layouts.'
              },
              {
                title: 'CMS Development',
                desc: 'Manage your content easily with WordPress, Strapi, Sanity, or custom CMS.'
              },
              {
                title: 'Website Speed Optimization',
                desc: 'Improve load speed, SEO performance, Core Web Vitals, and search ranking.'
              },
              {
                title: 'Maintenance & Support',
                desc: 'Monthly website updates, bug fixes, backup, and monitoring.'
              }
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 border border-gray-300 rounded-xl bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold mb-10 text-center">Why Choose FlyHomies?</h2>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
            {[
              'Clean, modern, and professional UI / UX',
              'Scalable backend architecture',
              'SEO-ready & optimized for speed',
              'Fully mobile responsive and cross-device compatible',
              'Secure coding with best practices',
              'Real-time features like chat, notifications, WebRTC',
              'Complete dashboard & admin panel development',
              'Transparent workflow with updates'
            ].map((txt, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                {txt}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Let’s bring your vision to life with a high-performance, beautifully designed website.
            We work closely with every client to deliver exactly what they need.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>
    </div>
  );
}
