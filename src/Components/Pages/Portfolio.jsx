import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, CheckCircle, Globe } from 'lucide-react';

// Scroll animation component (keep as is)
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
    title: 'Alrkn Alraqy Hotel Management',
    client: 'Alrkn Alraqy',
    category: 'Hotel Management & Booking',
    description: 'Dubai and Middle East based hotel management and booking platform featuring luxury accommodations, real-time availability, and seamless reservation system.',
    image: '/alr.png',
    results: ['Dubai & Middle East', 'Hotel Management', 'Real-time Booking', 'Luxury Properties'],
    technologies: ['Hotel Booking', 'Property Management', 'Payment Integration', 'CRM'],
    duration: '2 weeks',
    year: '2026',
    link: 'https://www.alrknalraqy.in/',
    location: 'Dubai & Middle East'
  },
  {
    title: 'Eventra – Club Event Booking',
    client: 'Eventra',
    category: 'Event Booking Platform',
    description: 'Dubai-based club event and party booking platform built with MERN stack, offering seamless event discovery, booking management, and venue partnerships.',
    image: '/evnt.png',
    results: ['Dubai-Based', 'MERN Stack', 'Real-time Booking', 'Venue Partnerships'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Gateway'],
    duration: '2 weeks',
    year: '2026',
    link: 'https://eventra.club/',
    location: 'Dubai, UAE'
  },
  {
    title: 'Secondwave – Digital Marketing',
    client: 'Secondwave',
    category: 'Digital Marketing Agency',
    description: 'Kerala-based digital marketing agency website showcasing comprehensive marketing solutions, SEO services, social media management, and creative campaigns.',
    image: '/sec.png',
    results: ['Kerala-Based', 'Full Service Agency', 'Performance Marketing', 'Creative Campaigns'],
    technologies: ['Digital Marketing', 'SEO', 'Social Media', 'Content Strategy'],
    duration: '1 week',
    year: '2026',
    link: 'https://secondwave.in/',
    location: 'Kerala, India'
  },
  {
    title: 'DD Events UAE – Event Management',
    client: 'DD Events UAE',
    category: 'Event Management',
    description: 'A creative event management website showcasing premium event planning services in Dubai, designed to bring client visions to life with style and precision.',
    image: '/dd.png', 
    results: ['Dubai-Based', 'Creative Planning', 'Premium Events', 'High Engagement'],
    technologies: ['Event Portfolio', 'Brand Website', 'Media & Presentation'],
    duration: 'Ongoing',
    year: '2025',
    link: 'https://ddeventsuae.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'Arreen Medical – Clinical System',
    client: 'Arreen Medical',
    category: 'Healthcare Management',
    description: 'Saudi-based clinical system management platform for healthcare facilities, featuring patient records, appointment scheduling, and medical workflow automation.',
    image: '/arn.png',
    results: ['Saudi-Based', 'Clinical Management', 'Patient Records', 'Workflow Automation'],
    technologies: ['Healthcare', 'React', 'Node.js', 'Database Management', 'Security'],
    duration: '3 weeks',
    year: '2026',
    link: 'https://arren-ksa-frontend.vercel.app/',
    location: 'Saudi Arabia'
  },
  {
    title: 'Simpolo Trading – Building Materials',
    client: 'Simpolo Trading',
    category: 'Building Materials Supplier',
    description: 'A premium website for a trusted UAE-based supplier offering high-quality building materials since 2005, showcasing a wide range of durable and modern products.',
    image: '/sim.png', 
    results: ['Since 2005', 'Premium Materials', 'UAE Trusted Supplier', 'Product Showcase'],
    technologies: ['Product Catalog', 'Construction Industry', 'Business Website'],
    duration: 'Ongoing',
    year: '2025',
    link: 'https://simpolotrading.com/',
    location: 'United Arab Emirates'
  },
  {
    title: 'Wavescation Holiday Homes',
    client: 'Waves Global LLC FZ',
    category: 'Property Management',
    description: 'DTCM-licensed premium holiday home management in Dubai, specializing in short-term rentals across Downtown Dubai, JBR, Palm Jumeirah and other prime locations with 5-star hospitality standards.',
    image: '/wave.png',
    results: ['DTCM Licensed', 'Premium Locations', '5-Star Standards', 'In-House Maintenance'],
    technologies: ['Property Mgmt', 'Hospitality', 'Booking Systems', 'Customer Service'],
    duration: '1 month',
    year: '2025',
    link: 'https://www.wavescation.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'The Foscape Aquatic Care',
    client: 'Foscape',
    category: 'Aquatic Services',
    description: 'World-class aquatic care services for residential and commercial aquariums, water gardens, fountains, swimming pools, spas, and lake management across South India.',
    image: '/fos.png',
    results: ['Residential & Commercial', 'Expert Maintenance', 'South India Coverage', 'Custom Solutions'],
    technologies: ['Aquarium Care', 'Water Systems', 'Maintenance', 'Consultation'],
    duration: '1 month',
    year: '2024',
    link: 'https://thefoscape.com/',
    location: 'South India'
  },
  {
    title: 'MVEWORLD Creative Production',
    client: 'MVEWORLD',
    category: 'Creative Agency',
    description: 'Full-service creative production agency specializing in filmmaking, advertisement creation, and event management for brand visual storytelling across Dubai and India.',
    image: '/mve.png',
    results: ['Expert Filmmaking', 'Brand Storytelling', 'Event Management', 'Multi-Location'],
    technologies: ['Videography', 'Editing', 'Marketing', 'Production'],
    duration: '1 month',
    year: '2024',
    link: 'https://springgreen-ant-mje91z0olyio9p2n.builder-preview.com/',
    location: 'Dubai & India'
  },
  {
    title: 'HH Mobiles & Gadgets',
    client: 'Hatfak Huna Mobile Phones Trading LLC',
    category: 'E-Commerce Retail',
    description: 'Premium mobile phones and accessories retailer based in Dubai, offering the latest gadgets and electronic devices with expert service and support.',
    image: '/hh.png',
    results: ['Dubai Based', 'Latest Gadgets', 'Expert Service', 'Accessories'],
    technologies: ['E-commerce', 'Retail', 'Mobile Tech', 'Customer Support'],
    duration: '1 month',
    year: '2024',
    link: 'https://hhmobiles.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'FlyBuy Fashion',
    client: 'FlyBuy Brand',
    category: 'Fashion E-Commerce',
    description: 'Multi-brand online fashion store for men and women, offering curated collections from India and UAE with seamless shopping experience.',
    image: '/fbb.png',
    results: ['Multi-Brand Store', 'Men & Women Fashion', 'India & UAE', 'Curated Collections'],
    technologies: ['E-commerce', 'Fashion', 'Multi-platform', 'Logistics'],
    duration: '1 month',
    year: '2024',
    link: 'https://flybuybrandae.creator-spring.com/',
    location: 'India & UAE'
  },
  {
    title: 'Zoyobathware Sanitary Solutions',
    client: 'Zoyobathware',
    category: 'Sanitary Retail',
    description: 'Premium sanitary ware provider in Malappuram and Kozhikode, offering modern and aesthetic fittings with expert consultation services.',
    image: '/zoy.png',
    results: ['Trusted Provider', 'Modern Fittings', 'Expert Team', 'Aesthetic Designs'],
    technologies: ['Sanitary Ware', 'Retail', 'Consultation', 'Installation'],
    duration: '1 month',
    year: '2024',
    link: 'https://zoyobathware.com/',
    location: 'Kerala, India'
  },
  {
    title: 'Evoke Smoke Lounge',
    client: 'Evoke Smoke Lounge',
    category: 'Hospitality & Entertainment',
    description: 'Community-centered hookah lounge offering premium tobacco, drinks, food, and gaming experiences in Qurum Hills with plans for franchise expansion.',
    image: '/evok.png',
    results: ['Community Focused', 'Multi-Revenue Streams', 'Gaming Facilities', 'Franchise Model'],
    technologies: ['Hospitality', 'F&B', 'Entertainment', 'Community Building'],
    duration: '1 month',
    year: '2024',
    link: 'https://evokesmokelauch.com/',
    location: 'Qurum Hills'
  },
  {
    title: 'Jungle Home Properties',
    client: 'Jungle Home',
    category: 'Property Booking',
    description: 'Specialized jungle property booking website featuring unique forest and jungle accommodations across South India for nature enthusiasts.',
    image: '/jung.png',
    results: ['South India Focus', 'Nature Properties', 'Easy Booking', 'Unique Experiences'],
    technologies: ['Booking System', 'Property Listings', 'Travel', 'Hospitality'],
    duration: '1 month',
    year: '2023',
    link: 'https://junglehome.hhmobiles.com/',
    location: 'South India'
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
                  🚀 Success Stories & Live Projects
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Our Portfolio
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Explore our successful projects and live websites we've developed for businesses across various industries
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From e-commerce to hospitality, explore our diverse portfolio of successful web projects
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 rounded-full text-sm shadow-lg text-center">
                        {project.category}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-gray-200">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                      <Globe size={16} />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                        📍 {project.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.results.map((r, i) => (
                          <div key={i} className="flex gap-2 items-start group/item hover:translate-x-1 transition-transform duration-300">
                            <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                            <span className="text-xs text-gray-700">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs text-gray-500 mb-2 font-medium">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-50 px-2 py-1 rounded-full text-xs text-gray-700 border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{project.duration}</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-gray-700 flex items-center gap-2 group/btn font-medium text-sm"
                      >
                        Visit Website
                        <ExternalLink
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">{projects.length}+</div>
                <div className="text-gray-300">Live Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-gray-300">Industries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-gray-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="bg-white rounded-xl p-8 aspect-video mb-8 shadow-sm flex items-center justify-center border border-gray-200">
                <img
                  src="/launch.svg"
                  alt="hero illustration"
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Ready to Build Your Online Presence?
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  From concept to launch, we help businesses create stunning, functional websites that drive results.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-base font-medium group hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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