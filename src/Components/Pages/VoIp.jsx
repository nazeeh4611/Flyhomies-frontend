import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function VoIP() {
  return (
    <div className="pt-20 bg-white text-gray-900">
      <SEO
        title="VoIP Solutions | FlyHomies Associates"
        description="A to Z VoIP services including VOS 3000, VoIP switches, dialers, servers, routing, and VoIP website development with expert-level telecom experience."
        keywords="voip, vos3000, voip dialers, telecom, switches, voip servers"
      />

      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            VoIP Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Complete A to Z VoIP solutions with industry-level expertise, scalable infrastructure,
            and reliable performance for telecom businesses.
          </p>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">VoIP Infrastructure</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                FlyHomies offers robust and scalable VoIP infrastructure suitable for wholesale,
                retail, and enterprise-level telecom operations. We help you deploy, manage, 
                and scale your VoIP business with secure and optimized solutions.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Solutions</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'VOS 3000 Setup & Support',
                    'VoIP Switches & Servers',
                    'Custom Softphone Dialers',
                    'VoIP Website Development',
                    'Reseller and Retail VoIP Solutions',
                    'Switch VPS Hosting',
                    'Top-Up Services',
                    'CDR Customizing & Routing'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-black mt-1" size={20} />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialers */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Dialer Solutions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Itell Dialer', 
                    'Pronto Dialer',
                    'HelloByte',
                    'Cool Dialer',
                    'Zem Dialer',
                    'Avon Dialer',
                    'Nacrosoft Dialer',
                    'MPS Dialer'
                  ].map((dialer, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-md border border-gray-200">
                      <CheckCircle size={16} className="text-black" />
                      <span className="text-gray-800 text-sm">{dialer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
              >
                Get VoIP Solution
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-2xl p-12 border border-gray-300 bg-white shadow-lg flex items-center justify-center">
              <img
                src="/Call.webp"
                alt="VoIP"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold mb-10 text-center">Why Choose FlyHomies for VoIP?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
            {[
              '10+ Years of VoIP Experience',
              'Secure & Stable Switch Infrastructure',
              '24/7 Technical Support',
              'Custom VoIP Website Development',
              'High-Volume Routing Capabilities',
              'Multi-Level Reseller System',
              'Complete Wholesale & Retail VoIP Setup',
              'Real-Time Monitoring & Analytics'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Complete VoIP Setup?</h2>
          <p className="text-lg text-gray-700 mb-10">
            From VOS 3000 installation to dialers and VoIP websites — 
            we provide everything you need to run a successful telecom business.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
