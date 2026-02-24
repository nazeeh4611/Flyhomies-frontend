import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, TrendingUp, Shield, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from "../Fallback/ImageWithFallback";
import SEO from '../SEO';

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
    <div ref={ref} className="text-center p-6">
      <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <div className="pt-20 bg-white text-gray-800">
      <SEO
        title="About Nacrosoft Technology & FlyHomies Associates | VoIP & Software Solutions Since 2015"
        description="Learn about Nacrosoft Technology's journey from 2015, our VoIP solutions, software development, and partnership with FlyHomies Associates for web design and development."
        keywords="Nacrosoft Technology, FlyHomies Associates, VoIP solutions, software development, web design, B2B B2C solutions, VOS 3000, dialers, since 2015"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-gray-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full px-4 py-2 mb-6 shadow-sm">
                  <span className="text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    🚀 VoIP & Software Solutions Since 2015
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                    About Nacrosoft & FlyHomies
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C brands since 2015.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center font-medium"
                  >
                    Get In Touch →
                  </Link>

                  <Link
                    to="/services"
                    className="border-2 border-gray-400 text-gray-800 px-8 py-4 rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:scale-105 text-center font-medium"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="flex justify-center animate-float">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-black-400 to-black-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                  <img
                    src="/fh.png"
                    alt="hero illustration"
                    className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-black-400 to-black-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src="/story.svg"
                  alt="hero illustration"
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Our Journey
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our inspiring journey began in 2015 as a startup unit within the computer engineering department classroom at Majlis College. Starting from humble beginnings, we've navigated numerous challenges and milestones.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Nacrosoft is an A to Z VoIP solution provider offering switches, servers, VOS 3000, dialers, routers, VoIP websites, reseller products, and many other VoIP tools including Switch VPS.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In collaboration with FlyHomies Associates, we're revolutionizing web design and development by blending technical expertise with creative design capabilities.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Our Journey Throughout the Decade
                </span>
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                { year: "2016", event: "Registered as a Private Limited Company named Nacrosoft Technology", side: "left" },
                { year: "2018", event: "Team strength reached 300; tie-ups with multinational companies in 7 countries", side: "right" },
                { year: "2020", event: "Started operations in the Middle East; moved into the Emirates heart of Dubai; focus shifted towards web design and development", side: "left" },
                { year: "2021", event: "Company rebranded as FlyHomies Associates, aligning with growing digital service demand", side: "right" },
                { year: "2022", event: "Positioned as a major player with top-tier brands under our belt", side: "left" },
                { year: "2023", event: "Growth trajectory continues to soar with strong commercial results", side: "right" },
                { year: "2024", event: "Registered as a private limited company; office opened in Willingdon Island, Kochi with tie-ups for office spaces", side: "left" },
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div className={`flex flex-col lg:flex-row items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2 lg:pr-8 lg:text-right mb-4 lg:mb-0">
                      <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${item.side === 'right' ? 'lg:text-left' : 'lg:text-right'}`}>
                        <h4 className="text-2xl font-bold text-blac-600 mb-2">{item.year}</h4>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
                    <div className="lg:w-1/2 lg:pl-8"></div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To deliver reliable, high-performance software for both B2B and B2C brands through advanced test automation and innovative VoIP solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To revolutionize how businesses present themselves online by merging technical backbone with creative design, creating visually striking, user-friendly websites.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete VoIP solutions and cutting-edge software development services
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="text-gray-800" size={32} />, title: 'VoIP Solutions', description: 'Complete A to Z VoIP solutions including switches, servers, and dialers' },
              { icon: <Lightbulb className="text-gray-800" size={32} />, title: 'VOS 3000', description: 'Expert implementation and customization of VOS 3000 systems' },
              { icon: <Shield className="text-gray-800" size={32} />, title: 'Dialer Systems', description: 'Itell, Pronto, Zem, Avon, and custom dialer solutions' },
              { icon: <Heart className="text-gray-800" size={32} />, title: 'Web Development', description: 'User-friendly, visually appealing websites with FlyHomies' },
              { icon: <Users className="text-gray-800" size={32} />, title: 'Custom Software', description: 'Bespoke software solutions for B2B and B2C brands' },
              { icon: <TrendingUp className="text-gray-800" size={32} />, title: 'TOP UP Services', description: 'Complete TOP UP, CDR Customizing, and VSP Customizing' },
              { icon: <Target className="text-gray-800" size={32} />, title: 'Quality Assurance', description: 'State-of-the-art test automation for reliable products' },
              { icon: <Lightbulb className="text-gray-800" size={32} />, title: 'Innovation', description: 'Nearly a decade of knowledge in VoIP and software development' },
            ].map((value, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Our Growth in Numbers
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From classroom startup to global technology partner
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "9", suffix: "+", label: "Years Experience" },
              { value: "100", suffix: "+", label: "Happy Clients" },
              { value: "7", suffix: "+", label: "Countries Served" },
              { value: "100", suffix: "+", label: "Projects Completed" },
            ].map((stat, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 200}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Get to know the brilliant minds behind Nacrosoft Technology and FlyHomies Associates - the passionate professionals driving innovation and excellence.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Team Member 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center group-hover:from-gray-400 group-hover:to-gray-500 transition-all duration-300">
                  <Users size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Leadership Team</h3>
                <p className="text-gray-600 mb-4">Visionary leaders guiding our strategic direction</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                  <Lightbulb size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Development Experts</h3>
                <p className="text-gray-600 mb-4">Skilled developers creating cutting-edge solutions</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300">
                  <Heart size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Creative Team</h3>
                <p className="text-gray-600 mb-4">Design wizards crafting beautiful user experiences</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="text-center">
              <Link
                to="/team"
                className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium group"
              >
                Meet Our Team
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}