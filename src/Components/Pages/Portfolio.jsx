import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

// Scroll animation component
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

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    client: 'Global Financial Services',
    category: 'Cloud Solutions',
    description:
      'Successfully migrated a complex banking infrastructure to AWS, handling over 1M daily transactions with zero downtime during migration.',
    image:
      'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?auto=format&q=80&w=1080',
    results: ['40% cost reduction', '99.99% uptime achieved', '3-month deployment', 'Zero data loss'],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    duration: '6 months',
    year: '2024'
  },
  {
    title: 'Healthcare Security Framework',
    client: 'Regional Hospital Network',
    category: 'Cybersecurity',
    description:
      'Implemented comprehensive cybersecurity infrastructure ensuring HIPAA compliance and protecting patient data across 15 facilities.',
    image:
      'https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&q=80&w=1080',
    results: ['Zero security breaches', 'HIPAA certified', '100% compliance', 'SOC 2 Type II certified'],
    technologies: ['SIEM', 'Encryption', 'MFA', 'Zero Trust'],
    duration: '4 months',
    year: '2024'
  },
  {
    title: 'AI-Powered E-Commerce Platform',
    client: 'Retail Tech Startup',
    category: 'Software Development',
    description:
      'Developed a scalable e-commerce platform with AI-driven product recommendations and real-time inventory management.',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&q=80&w=1080',
    results: ['10M+ monthly users', '200% revenue growth', '4.8/5 user rating', '50ms avg response time'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow'],
    duration: '8 months',
    year: '2023'
  },
  {
    title: 'Manufacturing Analytics Dashboard',
    client: 'Industrial Manufacturing Corp',
    category: 'Data Analytics',
    description:
      'Built real-time analytics platform providing predictive maintenance insights and reducing production downtime.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=80&w=1080',
    results: ['35% less downtime', 'Real-time monitoring', '$2M annual savings', '95% prediction accuracy'],
    technologies: ['Power BI', 'Azure', 'Python', 'Machine Learning'],
    duration: '5 months',
    year: '2023'
  },
  {
    title: 'Enterprise Digital Transformation',
    client: 'Fortune 500 Company',
    category: 'Digital Transformation',
    description:
      'Led comprehensive digital transformation across 50+ departments, modernizing legacy systems and implementing automation.',
    image:
      'https://images.unsplash.com/photo-1716703432455-3045789de738?auto=format&q=80&w=1080',
    results: ['60% process efficiency', '500+ employees trained', '18-month ROI', 'Paperless operations'],
    technologies: ['RPA', 'Microservices', 'DevOps', 'Cloud'],
    duration: '18 months',
    year: '2023'
  },
  {
    title: 'Global Network Infrastructure',
    client: 'International Logistics',
    category: 'IT Infrastructure',
    description:
      'Designed and deployed secure SD-WAN infrastructure connecting 50+ global locations with centralized management.',
    image:
      'https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?auto=format&q=80&w=1080',
    results: ['50+ sites connected', '99.9% uptime', '40% cost savings', 'Unified management'],
    technologies: ['SD-WAN', 'Cisco', 'VPN', 'Network Security'],
    duration: '7 months',
    year: '2024'
  }
];

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
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
                  🚀 Success Stories & Case Studies
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Our Portfolio
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Explore our successful projects and see how we've helped businesses achieve their technology goals
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                      {project.category}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-gray-200">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 mb-4 font-medium">{project.client}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((r, i) => (
                        <div key={i} className="flex gap-2 items-start group/item hover:translate-x-1 transition-transform duration-300">
                          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                          <span className="text-sm text-gray-700">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-gray-500 mb-2 font-medium">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Duration: {project.duration}</span>
                    <button className="text-gray-900 hover:text-gray-700 flex items-center gap-2 group/btn font-medium">
                      View Case Study
                      <ExternalLink
                        size={16}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-gray-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="bg-white rounded-xl p-12 aspect-video mb-8 shadow-sm flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce-slow">🎯</div>
                    <p className="text-gray-600 font-medium">Success & Achievement</p>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Your Project Could Be Next
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Ready to start your digital transformation journey? Let's discuss how we can help.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg font-medium group hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}