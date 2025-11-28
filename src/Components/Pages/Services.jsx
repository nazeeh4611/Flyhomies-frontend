import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
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
        title="Services | VoIP Solutions, Web Development, Software & Digital Marketing"
        description="Nacrosoft Technology offers VoIP solutions, custom software development, web design, and digital marketing services. Partnered with FlyHomies Associates for comprehensive digital solutions."
        keywords="VoIP solutions, VOS 3000, web development, software development, digital marketing, dialers, switches, SEO, paid ads"
      />

      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-gray-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl">
              <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  🚀 Since 2015 - Trusted Technology Partner
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Building reliable, high-performance solutions tailored to the unique needs of both B2B and B2C brands since 2015.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 border-y border-gray-200">
        <FadeInSection>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center gap-6 mb-8 flex-wrap">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <span className="text-xl font-bold text-gray-800">Nacrosoft Technology</span>
              </div>
              <div className="text-2xl text-gray-600">×</div>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <span className="text-xl font-bold text-gray-800">FlyHomies Associates</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Strategic Partnership
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Combining Nacrosoft's technical expertise in VoIP and software development with FlyHomies' design capabilities to deliver comprehensive digital solutions that drive business success.
            </p>
          </div>
        </FadeInSection>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/services/web-development" className="block group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Development</h3>
                <p className="text-gray-600 mb-6">Innovative bespoke website solutions with FlyHomies Associates</p>
                <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/services/voip" className="block group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">VoIP Solutions</h3>
                <p className="text-gray-600 mb-6">Complete A to Z VoIP solution provider with nearly a decade of expertise</p>
                <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/services/software-development" className="block group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Software Development</h3>
                <p className="text-gray-600 mb-6">Reliable, high-performance software solutions for B2B and B2C brands</p>
                <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/services/digital-marketing" className="block group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Marketing</h3>
                <p className="text-gray-600 mb-6">Comprehensive digital growth strategies including SEO and social media</p>
                <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              From VoIP solutions to custom software development, web design to digital marketing - we provide end-to-end services tailored to your business needs.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg font-medium group hover:scale-105 hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}