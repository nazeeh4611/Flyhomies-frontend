import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function DigitalMarketing() {
  return (
    <div className="pt-20 bg-white text-gray-900">
      <SEO
        title="Digital Marketing | SEO & Social Media Marketing"
        description="Comprehensive digital marketing services including SEO, paid ads, social media marketing, content strategy, branding, and performance analytics."
        keywords="digital marketing, SEO, social media marketing, paid ads, content strategy"
      />

      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Increase visibility, engage customers, and grow your brand with data-driven
            digital marketing strategies.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Growth Strategies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We help businesses build a strong online presence using targeted digital strategies.
                From SEO to social media management and paid advertising, we create campaigns that
                drive engagement, conversions, and long-term brand growth.
              </p>

              {/* SERVICES */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Search Engine Optimization (SEO)',
                    'Social Media Marketing (SMM)',
                    'Paid Advertising (Google & Meta Ads)',
                    'Content Creation & Strategy',
                    'Brand Awareness Campaigns',
                    'Analytics & Performance Reports',
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-black mt-1" />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BENEFITS */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white mb-10 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Increase your online visibility',
                    'Reach targeted and engaged audiences',
                    'Boost conversions and ROI',
                    'Data-driven and measurable results',
                    'Strengthen long-term brand presence',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800">
                      <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
              >
                Start Marketing
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-2xl p-12 border border-gray-300 bg-white shadow-lg flex items-center justify-center">
              <img
                src="/Digital.svg"
                alt="Digital Marketing"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS */}

      {/* PLATFORMS WE MANAGE */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Platforms We Manage</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-800">
            {[
              'Google Ads & Display Networks',
              'Meta (Facebook & Instagram) Ads',
              'YouTube Marketing',
              'LinkedIn Marketing',
              'Social-Media Boosting(Real Users)',
              'Pinterest & Twitter Campaigns',
            ].map((platform, idx) => (
              <div key={idx} className="p-6 border rounded-xl bg-white shadow-sm flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT STRATEGY */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Content Strategy</h2>

          <div className="space-y-10">
            {[
              'Brand voice & positioning development',
              'High-quality social media content',
              'Short-form videos & reels',
              'Blog & SEO article creation',
              'Ad creatives & landing page designs',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="text-2xl font-bold">{idx + 1}.</span>
                <span className="text-lg text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Grow Your Brand With Us</h2>
          <p className="text-lg text-gray-700 mb-10">
            We create digital marketing strategies that generate real results, not just impressions.
            Let's scale your business to the next level.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
          >
            Discuss Your Marketing Needs
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
