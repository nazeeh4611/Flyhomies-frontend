import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

export function SoftwareDevelopment() {
  return (
    <div className="pt-20 bg-white text-gray-900">
      <SEO
        title="Software Development | FlyHomies Associates"
        description="Custom software development for B2B and B2C brands. High-performance applications, automation, enterprise systems, CRM, ERP, and scalable solutions."
        keywords="software development, crm, erp, custom software, automation"
      />

      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            We build secure, scalable, and high-performance software solutions designed to
            solve complex business challenges and unlock growth.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Custom Software Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                From startups to enterprises — we develop software tailored to your business
                workflow. Our solutions are engineered for stability, automation, and long-term
                scalability with minimal maintenance.
              </p>

              {/* Services */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Custom Software Development',
                    'B2B & B2C Business Solutions',
                    'Automation & System Integration',
                    'Performance Optimization',
                    'Quality Assurance & Testing',
                    'Enterprise Technical Support',
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-black mt-1" />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white mb-10 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Custom built for your exact business needs',
                    'Highly scalable & flexible architecture',
                    'Secure and reliable infrastructure',
                    'Boosts workflow efficiency & automation',
                    'Long-term cost savings and reduced errors',
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
                Start Development
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-2xl p-12 border border-gray-300 bg-white shadow-lg flex items-center justify-center">
              <img
                src="/soft.webp"
                alt="Software Development"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Technologies We Work With</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-800">

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <ul className="space-y-2">
                {['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS/JS'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <ul className="space-y-2">
                {['Node.js', 'Express', 'Laravel', 'Python', 'Java'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">Databases & DevOps</h3>
              <ul className="space-y-2">
                {['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'].map((tech, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{tech}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'E-Commerce & Retail',
              'Healthcare & Clinics',
              'FinTech & Banking',
              'Logistics & Transport',
              'Education & E-Learning',
              'Real Estate & Property',
              'Travel & Booking Platforms',
              'Telecom & VoIP',
            ].map((industry, idx) => (
              <div key={idx} className="p-6 border rounded-xl bg-white shadow-sm flex items-start gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                <span className="text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Development Process</h2>

          <div className="space-y-10">
            {[
              'Requirement Analysis & Planning',
              'Wireframing and UX Mapping',
              'Backend & Frontend Development',
              'Testing & Quality Assurance',
              'Deployment, Monitoring & Optimization',
              'Long-Term Support & Maintenance',
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="text-2xl font-bold">{idx + 1}.</span>
                <span className="text-lg text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Build Software That Scales With You</h2>
          <p className="text-lg text-gray-700 mb-10">
            From automation systems to enterprise software — we help businesses streamline
            operations and future-proof their technology.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
          >
            Discuss Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
