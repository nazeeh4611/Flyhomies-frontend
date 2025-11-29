import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

// Fade-in animation component
function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Services() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      <SEO
        title="Services | VoIP Solutions, Web Development, Software, Digital Marketing & Mobile App Development"
        description="Nacrosoft Technology offers VoIP solutions, web development, software development, digital marketing, and mobile app development services in partnership with FlyHomies Associates."
        keywords="VoIP, web development, software development, mobile app development, digital marketing, SEO, apps, dialers, switches"
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl">
              <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="text-sm font-medium text-gray-700">
                  🚀 Since 2015 - Trusted Technology Partner
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Our Services
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Building reliable, high-performance solutions tailored to the unique needs of B2B and B2C brands since 2015.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PARTNERSHIP SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 border-y border-gray-200">
        <FadeInSection>
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center gap-6 mb-8 flex-wrap">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <span className="text-xl font-bold text-gray-800">Nacrosoft Technology</span>
              </div>
              <div className="text-2xl text-gray-600">×</div>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <span className="text-xl font-bold text-gray-800">FlyHomies Associates</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Strategic Partnership
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combining Nacrosoft's technical expertise in VoIP and software development with FlyHomies' design capabilities to deliver comprehensive digital solutions.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* WEB DEV */}
            <Link to="/services/web-development" className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Development</h3>
                <p className="text-gray-600 mb-6">Bespoke website solutions with FlyHomies Associates.</p>
                <div className="flex items-center text-gray-700 group-hover:text-black transition">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* VOIP */}
            <Link to="/services/voip" className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">VoIP Solutions</h3>
                <p className="text-gray-600 mb-6">Complete A to Z VoIP infrastructure & dialers.</p>
                <div className="flex items-center text-gray-700 group-hover:text-black transition">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* SOFTWARE */}
            <Link to="/services/software-development" className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Software Development</h3>
                <p className="text-gray-600 mb-6">Custom high-performance applications.</p>
                <div className="flex items-center text-gray-700 group-hover:text-black transition">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* DIGITAL MARKETING */}
            <Link to="/services/digital-marketing" className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Marketing</h3>
                <p className="text-gray-600 mb-6">SEO, social media & growth marketing.</p>
                <div className="flex items-center text-gray-700 group-hover:text-black transition">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* ⭐ MOBILE APP DEVELOPMENT — NEW SERVICE ⭐ */}
            <Link to="/services/app-development" className="block group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="text-4xl mb-4">📲</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile App Development</h3>
                <p className="text-gray-600 mb-6">
                  Build iOS & Android apps with modern frameworks.
                </p>
                <div className="flex items-center text-gray-700 group-hover:text-black transition">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From VoIP to web development, mobile apps to marketing — we deliver high-quality solutions tailored for your business.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition text-lg"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
