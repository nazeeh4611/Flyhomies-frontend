import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function VoIP() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      <SEO
        title="VoIP Solutions | Complete VoIP Service Provider"
        description="Complete A to Z VoIP solutions including switches, servers, VOS 3000, dialers, and VoIP websites. Nearly a decade of expertise in VoIP technology."
        keywords="VoIP solutions, VOS 3000, dialers, switches, VoIP servers, telecom"
      />

      <section className="relative bg-gradient-to-br from-gray-50 to-purple-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                VoIP Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete A to Z VoIP solution provider with nearly a decade of expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                VoIP Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive VoIP solutions including switches, servers, VOS 3000, dialers, routers, and VoIP websites with nearly a decade of expertise.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solutions</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['VOS 3000 Solutions', 'VoIP Switches & Servers', 'Custom Dialers', 'VoIP Websites', 'Reseller Products', 'Switch VPS', 'TOP UP Services', 'CDR Customizing'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Dialer Solutions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Itell', 'Pronto', 'It Hellobyte', 'Cool Dialer', 'Zem Dialer', 'Avon Dialer', 'Nacrosoft Dialer', 'MPS Dialers'].map((dialer, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700 text-sm">{dialer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg font-medium group hover:scale-105 hover:shadow-xl"
              >
                Get VoIP Solution
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 aspect-square flex items-center justify-center border border-gray-300 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">📞</div>
                <p className="text-gray-600 font-medium">VoIP Technology</p>
                <p className="text-sm text-gray-500">Complete Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}