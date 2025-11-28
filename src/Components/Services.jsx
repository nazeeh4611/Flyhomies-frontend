import React from 'react'
import { Cloud, Shield, Code, Database, Smartphone, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import SEO from './SEO';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Migrate, manage, and optimize your cloud infrastructure with AWS, Azure, and Google Cloud expertise.',
    image:
      'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjIxMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Cloud Migration', 'Infrastructure Design', 'Cost Optimization', 'Multi-Cloud Strategy'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with comprehensive security assessments, implementations, and monitoring.',
    image:
      'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjQyOTQ0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Custom software solutions built with modern technologies to solve your unique business challenges.',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjQyNzQzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Web Applications', 'API Development', 'Legacy Modernization', 'Agile Methodology'],
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDI2NzgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['BI Dashboards', 'Data Warehousing', 'Predictive Analytics', 'Reporting Solutions'],
  },
  {
    icon: Smartphone,
    title: 'Digital Transformation',
    description:
      'Modernize your business processes and embrace digital innovation to stay ahead of the competition.',
    image:
      'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0MzE4NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation Consulting'],
  },
  {
    icon: Cpu,
    title: 'IT Infrastructure',
    description:
      'Design, implement, and maintain robust IT infrastructure that scales with your business growth.',
    image:
      'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQyNTM0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Network Design', 'Server Management', 'Disaster Recovery', '24/7 Support'],
  },
];

export default function Services() {
  return (
    <>
   <SEO
  title="IT Services | Cloud, Cybersecurity, Development & Digital Transformation"
  description="Explore Flyhomies Associates’ IT services including cloud solutions, cybersecurity, software development, data analytics, digital transformation, and IT infrastructure."
  keywords="IT services, cloud services, cybersecurity, software development, DevOps, data analytics, infrastructure, digital transformation"
/>


    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to meet your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </>
  );
}
