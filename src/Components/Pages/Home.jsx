import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  MapPin,
  Calendar,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import SEO from "../SEO";

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

// Counter Component
function StatCounter({ value, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setTimeout(() => {
            let start = 0;
            const end = parseInt(value);
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }, delay);
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
  }, [value, delay, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl text-gray-800 font-semibold mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* SEO TAGS */}
      <SEO
        title="Nacrosoft Technology x FlyHomies Associates | VoIP Solutions & Digital Services"
        description="Leading VoIP solutions provider since 2015. Custom software development, web design, digital marketing, and comprehensive IT services from Dubai."
        keywords="VoIP solutions, VOS 3000, web development, software development, digital marketing, Dubai IT company, dialers, switches"
      />

      {/* HERO SECTION */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-6">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    🚀 Now Operating from Dubai, UAE
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight">
                  Your Digital
                  <br />
                  <span className="text-gray-800">Growth Partner</span>
                </h1>

                {/* FIXED HEIGHT TO PREVENT COLLAPSE */}
                <div className="text-xl md:text-2xl text-gray-600 mb-8 h-12 md:h-14">
                  <Typewriter
                    words={[
                      "VoIP Solutions & VOS 3000 Experts.",
                      "Web Design & Development Services.",
                      "Digital Marketing & SEO Strategies.",
                      "Custom Software Development.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={45}
                    deleteSpeed={25}
                    delaySpeed={2000}
                  />
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C brands since 2015. Now expanding our expertise from Dubai to serve global clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-black transition-all duration-300 hover:scale-105 text-lg font-medium group"
                  >
                    Start Your Project
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center border border-gray-400 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg font-medium"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </FadeInSection>

            {/* RIGHT SIDE IMAGE */}
            <FadeInSection delay={200}>
              <div className="flex justify-center">
                <img
                  src="/DesignHERO.svg"
                  alt="Digital Solutions Illustration"
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP BANNER */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-xl font-bold">Nacrosoft Technology</span>
                </div>
                <span className="text-2xl">×</span>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-xl font-bold">FlyHomies Associates</span>
                </div>
              </div>
              <p className="text-lg text-gray-300">
                Strategic Partnership Driving Digital Excellence Since 2015
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300", suffix: "+", label: "Team Members" },
              { value: "7", suffix: "+", label: "Countries" },
              { value: "9", suffix: "+", label: "Years Experience" },
              { value: "2020", suffix: "", label: "Dubai Operations Started" },
            ].map((stat, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 200}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions from VoIP infrastructure to modern web development and marketing
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "📞", 
                title: "VoIP Solutions", 
                desc: "Complete A to Z VoIP infrastructure including VOS 3000, dialers, switches & servers.", 
                link: "/services#voip" 
              },
              { 
                icon: "🌐", 
                title: "Web Development", 
                desc: "User-friendly, visually appealing websites with exceptional customer experience.", 
                link: "/services#web-development" 
              },
              { 
                icon: "💻", 
                title: "Software Development", 
                desc: "Reliable, high-performance custom software for B2B and B2C brands.", 
                link: "/services#software-development" 
              },
              { 
                icon: "📱", 
                title: "Digital Marketing", 
                desc: "SEO, paid ads, and social media strategies for business growth.", 
                link: "/services#digital-marketing" 
              },
            ].map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Link
                  to={service.link}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 group border border-gray-200 hover:-translate-y-2 block h-full"
                >
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center text-gray-700 group-hover:gap-2 transition-all duration-300 font-medium">
                    Learn more
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORKS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our Recent Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Showcasing our successful projects and client transformations
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "VoIP Infrastructure Setup",
                description: "Complete VOS 3000 implementation with custom dialers for a telecom client in Dubai",
                category: "VoIP Solutions",
                results: ["300% ROI", "99.9% Uptime", "Scalable Architecture"]
              },
              {
                title: "E-commerce Platform",
                description: "Full-stack e-commerce solution with payment integration and inventory management",
                category: "Web Development",
                results: ["40% Growth", "Seamless UX", "Mobile Optimized"]
              },
              {
                title: "Business Automation Suite",
                description: "Custom CRM and automation tools for enterprise client with multi-location operations",
                category: "Software Development",
                results: ["60% Efficiency", "Real-time Analytics", "Cloud Native"]
              },
              {
                title: "Digital Marketing Campaign",
                description: "Comprehensive SEO and social media strategy for retail brand expansion",
                category: "Digital Marketing",
                results: ["3x Traffic", "50% Lead Increase", "Brand Recognition"]
              },
              {
                title: "Mobile Application",
                description: "Cross-platform mobile app with real-time features and offline functionality",
                category: "Mobile Development",
                results: ["4.8★ Rating", "100K+ Downloads", "High Engagement"]
              },
              {
                title: "Cloud Migration",
                description: "Enterprise infrastructure migration to cloud with security implementation",
                category: "Cloud Solutions",
                results: ["40% Cost Save", "Enhanced Security", "Global Access"]
              },
            ].map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-200 hover:-translate-y-2 overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-4xl text-gray-600">🚀</div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((result, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* DUBAI FOCUS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 mb-6">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    🏙️ Dubai Operations
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Expanding from the
                  <br />
                  Heart of Dubai
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2020, we've been operating from Dubai, serving clients across the Middle East and globally. Our strategic location in the Emirates enables us to understand and serve the unique digital needs of the region.
                </p>
                <div className="space-y-4">
                  {[
                    "Strategic Middle East Presence",
                    "Understanding of Regional Market Dynamics",
                    "24/7 Support for Global Clients",
                    "Multi-cultural Team Expertise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-8  border-gray-300 shadow-lg w-full max-w-md">
                  <div className="text-center">
                  <img
                  src="/Dubai.svg"
                  alt="Dubai"
                  className="w-full max-w-md object-contain"
                />
                    <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Since 2020</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Dubai, UAE</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="flex justify-center">
                <img
                  src="/choose.svg"
                  alt="Why Choose Us"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  With nearly a decade of experience, we combine technical expertise with creative innovation to deliver exceptional results.
                </p>

                <div className="space-y-6">
                  {[
                    { 
                      icon: <Award className="text-gray-800" size={24} />, 
                      title: "Proven Track Record", 
                      desc: "9+ years delivering successful VoIP and software solutions since 2015." 
                    },
                    { 
                      icon: <Users className="text-gray-800" size={24} />, 
                      title: "Expert Team", 
                      desc: "300+ strong team with expertise across multiple technologies and domains." 
                    },
                    { 
                      icon: <TrendingUp className="text-gray-800" size={24} />, 
                      title: "Global Reach", 
                      desc: "Serving clients in 7+ countries with operations from Dubai and India." 
                    },
                    { 
                      icon: <Zap className="text-gray-800" size={24} />, 
                      title: "Innovation Focus", 
                      desc: "State-of-the-art test automation and modern development practices." 
                    },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex gap-4 transition-all duration-500 hover:translate-x-2 group cursor-pointer"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-800 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear what our clients from around the world say about our services
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Al Mansoori",
                role: "Telecom Director, Dubai",
                content: "Nacrosoft transformed our VoIP infrastructure with reliable VOS 3000 solutions and excellent support.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "CEO, E-commerce Platform",
                content: "The web development team delivered beyond expectations. Our online sales increased by 150%.",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                role: "CTO, Tech Enterprise",
                content: "Outstanding software development services. Their custom solutions streamlined our operations perfectly.",
                rating: 5,
              },
            ].map((t, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="bg-white/10 border border-white/20 p-6 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="text-yellow-400 fill-yellow-400 transition-transform duration-300 hover:scale-110" 
                        size={18} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed">"{t.content}"</p>
                  <div>
                    <p className="font-semibold transition-colors duration-300 hover:text-white">{t.name}</p>
                    <p className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-300">{t.role}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our VoIP solutions, custom software development, and digital services can drive your business growth from Dubai to the world.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-black transition-all duration-300 text-lg font-medium group hover:scale-105"
            >
              Start Your Project Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}