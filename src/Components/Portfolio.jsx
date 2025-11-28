import React from 'react'
import { ExternalLink, CheckCircle } from 'lucide-react';
import {ImageWithFallback} from "./Fallback/ImageWithFallback"
import SEO from './SEO';

const projects = [
  {
    title: 'Global Bank Cloud Migration',
    client: 'Major Financial Institution',
    category: 'Cloud Solutions',
    description:
      'Successfully migrated enterprise banking systems to AWS, reducing infrastructure costs by 40% and improving system reliability.',
    image:
      'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjIxMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['40% cost reduction', '99.99% uptime', '3-month deployment'],
    technologies: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Healthcare Security Overhaul',
    client: 'Regional Healthcare Network',
    category: 'Cybersecurity',
    description:
      'Implemented comprehensive security framework ensuring HIPAA compliance and protecting sensitive patient data.',
    image:
      'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjQyOTQ0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['Zero security incidents', 'HIPAA certified', '100% compliance'],
    technologies: ['SOC 2', 'Encryption', 'MFA'],
  },
  {
    title: 'E-Commerce Platform Development',
    client: 'Retail Technology Startup',
    category: 'Software Development',
    description:
      'Built scalable e-commerce platform handling 10M+ monthly transactions with AI-powered recommendations.',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjQyNzQzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['10M+ transactions/month', '200% revenue growth', '4.8/5 user rating'],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Manufacturing Analytics Dashboard',
    client: 'Industrial Manufacturing Corp',
    category: 'Data Analytics',
    description:
      'Developed real-time analytics platform providing actionable insights and reducing production downtime by 35%.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDI2NzgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['35% less downtime', 'Real-time insights', '$2M saved annually'],
    technologies: ['Power BI', 'Azure', 'Machine Learning'],
  },
  {
    title: 'Enterprise Digital Transformation',
    client: 'Fortune 500 Company',
    category: 'Digital Transformation',
    description:
      'Led complete digital transformation initiative, modernizing legacy systems and implementing automation across all departments.',
    image:
      'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0MzE4NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['60% process efficiency', '500+ employees trained', '18-month rollout'],
    technologies: ['RPA', 'Microservices', 'DevOps'],
  },
  {
    title: 'Multi-Site Network Infrastructure',
    client: 'International Logistics Company',
    category: 'IT Infrastructure',
    description:
      'Designed and deployed secure network infrastructure across 50+ global locations with centralized management.',
    image:
      'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQyNTM0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    results: ['50+ sites connected', '99.9% network uptime', 'Centralized management'],
    technologies: ['SD-WAN', 'Cisco', 'VPN'],
  },
];

export default function Portfolio() {
  return (
    <>
<SEO
  title="Portfolio | Our Successful IT Projects & Case Studies"
  description="View Flyhomies Associates' portfolio featuring cloud migrations, cybersecurity projects, AI development, analytics dashboards, digital transformation, and IT infrastructure deployments."
  keywords="IT portfolio, case studies, cloud migration, cybersecurity projects, AI development, software projects, analytics solutions"
/>

  
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven track record of delivering successful projects across diverse industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.client}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
