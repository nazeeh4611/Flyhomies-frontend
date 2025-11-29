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
  Smartphone,
  Database,
  Cloud,
  Server,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import SEO from "../SEO";

// Enhanced Scroll animation component with mobile optimizations
function FadeInSection({ children, delay = 0, mobileDelay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, window.innerWidth < 768 ? mobileDelay : delay);
        }
      },
      { 
        threshold: window.innerWidth < 768 ? 0.05 : 0.1,
        rootMargin: window.innerWidth < 768 ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, mobileDelay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${window.innerWidth < 768 ? mobileDelay : delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
}

// Enhanced Counter Component with mobile optimizations
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
            const duration = window.innerWidth < 768 ? 1500 : 2000;
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
          }, window.innerWidth < 768 ? delay * 0.5 : delay);
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
      <div className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm md:text-base text-gray-500 px-2">{label}</p>
    </div>
  );
}

// Shaking Button Component
function ShakingButton({ children, href, className = "", variant = "primary", ...props }) {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  const baseClasses = "inline-flex items-center justify-center px-6 py-4 rounded-lg transition-all duration-300 font-medium text-lg group relative overflow-hidden";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-black hover:shadow-2xl",
    secondary: "border-2 border-gray-400 text-gray-800 hover:bg-gray-50 hover:border-gray-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
  };

  return (
    <Link
      to={href}
      className={`${baseClasses} ${variants[variant]} ${className} ${
        isShaking ? 'animate-shake' : ''
      } hover:scale-105 active:scale-95`}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}

// Enhanced Typewriter with better mobile support
function ResponsiveTypewriter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 h-16 md:h-14 flex items-center justify-start md:justify-center">
      <Typewriter
        words={[
          "VoIP Solutions & VOS 3000 Experts.",
          "Web Design & Development Services.",
          "Digital Marketing & SEO Strategies.",
          "Custom Software Development.",
          "Mobile App Development.",
          "ERP & Business Solutions.",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={isMobile ? 35 : 45}
        deleteSpeed={isMobile ? 20 : 25}
        delaySpeed={isMobile ? 1500 : 2000}
      />
    </div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="pt-16 md:pt-20 bg-white text-gray-800 overflow-hidden">
      {/* SEO TAGS */}
      <SEO
        title="Nacrosoft Technology x FlyHomies Associates | VoIP Solutions & Digital Services"
        description="Leading VoIP solutions provider since 2015. Custom software development, web design, digital marketing, and comprehensive IT services from Dubai."
        keywords="VoIP solutions, VOS 3000, web development, software development, digital marketing, Dubai IT company, dialers, switches, ERP, VRM, mobile app development"
      />

      {/* HERO SECTION - MOBILE OPTIMIZED */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT CONTENT */}
            <FadeInSection mobileDelay={100}>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    🚀 Now Operating from Dubai, UAE
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                  Your Digital
                  <br />
                  <span className="text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Growth Partner
                  </span>
                </h1>

                {/* RESPONSIVE TYPEWRITER */}
                <ResponsiveTypewriter />

                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
                  Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C brands since 2015. Now expanding our expertise from Dubai to serve global clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <ShakingButton
                    href="/contact"
                    variant="primary"
                    className="flex items-center justify-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </ShakingButton>

                  <ShakingButton
                    href="/services"
                    variant="secondary"
                    className="flex items-center justify-center gap-2"
                  >
                    Explore Services
                  </ShakingButton>
                </div>
              </div>
            </FadeInSection>

            {/* RIGHT SIDE IMAGE - MOBILE OPTIMIZED */}
            <FadeInSection delay={200} mobileDelay={200}>
              <div className="flex justify-center order-first md:order-last">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <img
                    src="/DesignHERO.svg"
                    alt="Digital Solutions Illustration"
                    className="w-full h-auto object-contain transition-all duration-1000 hover:scale-105 hover:rotate-1"
                    loading="eager"
                  />
                  {/* Floating Animation Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-4 w-6 h-6 md:w-10 md:h-10 bg-green-500 rounded-full opacity-20 animate-pulse delay-700"></div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP BANNER */}
      <section className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                <div className="bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span className="text-lg md:text-xl font-bold">Nacrosoft Technology</span>
                </div>
                <span className="text-xl md:text-2xl">×</span>
                <div className="bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span className="text-lg md:text-xl font-bold">FlyHomies Associates</span>
                </div>
              </div>
              <p className="text-sm md:text-lg text-gray-300 mt-2 md:mt-0">
                Strategic Partnership Driving Digital Excellence Since 2015
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "100+", suffix: "+", label: "Happy Clients" },
              { value: "7", suffix: "+", label: "Countries" },
              { value: "9", suffix: "+", label: "Years Experience" },
              { value: "2020", suffix: "", label: "Dubai Operations Started" },
            ].map((stat, index) => (
              <FadeInSection key={index} delay={index * 100} mobileDelay={index * 50}>
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Our Core Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive digital solutions from VoIP infrastructure to modern web development and marketing
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: "📞", 
                title: "VoIP Solutions", 
                desc: "Complete A to Z VoIP infrastructure including VOS 3000, dialers, switches & servers.", 
                link: "/services/voip" 
              },
              { 
                icon: "🌐", 
                title: "Web Development", 
                desc: "User-friendly, visually appealing websites with exceptional customer experience.", 
                link: "/services/web-development" 
              },
              { 
                icon: "💻", 
                title: "Software Development", 
                desc: "Reliable, high-performance custom software for B2B and B2C brands.", 
                link: "/services/software-development" 
              },
              { 
                icon: "📱", 
                title: "Digital Marketing", 
                desc: "SEO, paid ads, and social media strategies for business growth.", 
                link: "/services/digital-marketing" 
              },
            ].map((service, index) => (
              <FadeInSection key={index} delay={index * 100} mobileDelay={index * 50}>
                <Link
                  to={service.link}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200 hover:-translate-y-2 block h-full hover:border-gray-300"
                >
                  <div className="text-4xl md:text-5xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.desc}</p>
                  <div className="flex items-center text-gray-700 group-hover:text-gray-900 group-hover:gap-2 transition-all duration-300 font-medium">
                    Learn more
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* APP DEVELOPMENT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection mobileDelay={100}>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0">
                  <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    📱 Mobile Excellence
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                  Powerful Mobile
                  <br />
                  Applications
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  We create intuitive, high-performance mobile applications for iOS and Android that drive engagement and deliver exceptional user experiences.
                </p>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {[
                    { title: "Native Apps", desc: "iOS & Android" },
                    { title: "Cross-Platform", desc: "React Native & Flutter" },
                    { title: "UI/UX Design", desc: "User-Centered Design" },
                    { title: "App Store Deployment", desc: "Full Submission Support" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <ShakingButton
                  href="/services/app-development"
                  variant="outline"
                  className="text-sm md:text-base"
                >
                  Explore App Development Services
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </ShakingButton>
              </div>
            </FadeInSection>

            <FadeInSection delay={200} mobileDelay={200}>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <img
                    src="/App.svg"
                    alt="Mobile App Development"
                    className="w-full h-auto object-contain transition-all duration-1000 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating phone animation */}
                  <div className="absolute top-1/4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & SOFTWARE SOLUTIONS */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Technologies & Enterprise Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive software solutions and cutting-edge technologies to power your business growth
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Technologies We Use */}
            <FadeInSection delay={100} mobileDelay={100}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Technologies We Master</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      category: "Frontend Development",
                      technologies: "React.js, Vue.js, Angular, TypeScript, Next.js, Tailwind CSS"
                    },
                    {
                      category: "Backend Development",
                      technologies: "Node.js, Python, PHP, Java, .NET, Express.js, Django"
                    },
                    {
                      category: "Mobile Development",
                      technologies: "React Native, Flutter, Swift, Kotlin, Android SDK"
                    },
                    {
                      category: "Database & Cloud",
                      technologies: "MySQL, PostgreSQL, MongoDB, AWS, Azure, Google Cloud"
                    },
                    {
                      category: "VoIP Technologies",
                      technologies: "VOS 3000, Asterisk, FreeSWITCH, SIP protocols, WebRTC"
                    },
                  ].map((tech, index) => (
                    <div key={index} className="border-l-4 border-gray-300 pl-3 md:pl-4 hover:border-gray-500 transition-colors duration-300">
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{tech.category}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{tech.technologies}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Software Solutions */}
            <FadeInSection delay={200} mobileDelay={200}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Enterprise Software Solutions</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: "🏢",
                      title: "ERP Systems",
                      description: "Custom Enterprise Resource Planning solutions to streamline your business operations.",
                      features: ["Custom ERP", "Inventory Management", "Financial Modules", "HR & Payroll"]
                    },
                    {
                      icon: "📞",
                      title: "VRM Systems",
                      description: "Voice Resource Management solutions for telecom with real-time monitoring.",
                      features: ["Call Routing", "Real-time Analytics", "Billing Systems", "Customer Management"]
                    },
                    {
                      icon: "🛒",
                      title: "E-commerce Platforms",
                      description: "Complete e-commerce solutions with payment integration and analytics.",
                      features: ["Multi-vendor", "Payment Gateways", "Order Management", "Analytics"]
                    },
                    {
                      icon: "🤖",
                      title: "Business Automation",
                      description: "Automate repetitive tasks and streamline workflows with custom solutions.",
                      features: ["Workflow Automation", "CRM Integration", "Reporting Tools", "API Development"]
                    },
                  ].map((solution, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 md:p-4 hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{solution.title}</h4>
                          <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">{solution.description}</p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {solution.features.map((feature, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* RECENT WORKS SECTION */}
      <section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeInSection>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Our Recent Work
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Showcasing our successful projects and client transformations
        </p>
      </div>
    </FadeInSection>

    {/* Work grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          title: "Mobile Banking App",
          description: "Secure mobile banking application with biometric authentication and real-time transactions",
          category: "App Development",
          results: ["4.8★ Rating", "500K+ Users", "Bank-grade Security"]
        },
        {
          title: "Enterprise ERP System",
          description: "Custom ERP solution for manufacturing company with inventory and supply chain management",
          category: "ERP Solutions",
          results: ["45% Cost Save", "Real-time Tracking", "Multi-location"]
        },
        {
          title: "CRM Systems",
          description: "Customer Relationship Management solutions to streamline sales, support, and customer engagement.",
          category: "CRM Solutions",
          results: [
            "Lead Management",
            "Sales Pipeline",
            "Customer Support",
            "Automation & Workflows"
          ]
        },
      ].map((project, index) => (
        <FadeInSection key={index} delay={index * 100} mobileDelay={index * 50}>
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-200 hover:-translate-y-2 overflow-hidden hover:border-gray-300">
            <div className="h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="text-4xl text-gray-600 group-hover:scale-110 transition-transform duration-500">🚀</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 md:p-6">
              <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3 group-hover:bg-gray-200 transition-colors duration-300">
                {project.category}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-gray-800 transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.results.map((result, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>

    {/* View All Works Button */}
    <div className="text-center mt-12">
      <Link
        to="/portfolio"
        className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
      >
        View All Works
      </Link>
    </div>

  </div>
</section>


      {/* DUBAI FOCUS SECTION */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection mobileDelay={100}>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    🏙️ Dubai Operations
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                  Expanding from the
                  <br />
                  Heart of Dubai
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2020, we've been operating from Dubai, serving clients across the Middle East and globally. Our strategic location in the Emirates enables us to understand and serve the unique digital needs of the region.
                </p>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Strategic Middle East Presence",
                    "Understanding of Regional Market Dynamics",
                    "24/7 Support for Global Clients",
                    "Multi-cultural Team Expertise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200} mobileDelay={200}>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-300 shadow-lg w-full max-w-md hover:shadow-xl transition-all duration-500 group">
                  <div className="text-center">
                    <img
                      src="/Dubai.svg"
                      alt="Dubai"
                      className="w-full max-w-md object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="flex items-center justify-center gap-2 text-gray-500 mb-2 mt-4">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection mobileDelay={100}>
              <div className="flex justify-center order-first lg:order-last">
                <img
                  src="/choose.svg"
                  alt="Why Choose Us"
                  className="w-full max-w-md object-contain hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200} mobileDelay={200}>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                  Why Choose Us?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  With nearly a decade of experience, we combine technical expertise with creative innovation to deliver exceptional results.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {[
                    { 
                      icon: <Award className="text-gray-800" size={20} />, 
                      title: "Proven Track Record", 
                      desc: "9+ years delivering successful VoIP and software solutions since 2015." 
                    },
                    { 
                      icon: <Users className="text-gray-800" size={20} />, 
                      title: "Expert Team", 
                      desc: "strong team with expertise across multiple technologies and domains." 
                    },
                    { 
                      icon: <TrendingUp className="text-gray-800" size={20} />, 
                      title: "Global Reach", 
                      desc: "Serving clients in 7+ countries with operations from Dubai and India." 
                    },
                    { 
                      icon: <Zap className="text-gray-800" size={20} />, 
                      title: "Innovation Focus", 
                      desc: "State-of-the-art test automation and modern development practices." 
                    },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex gap-3 md:gap-4 transition-all duration-500 hover:translate-x-2 group cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-900 group-hover:text-gray-800 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
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
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Hear what our clients from around the world say about our services
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
              <FadeInSection key={index} delay={index * 150} mobileDelay={index * 75}>
                <div className="bg-white/10 border border-white/20 p-4 md:p-6 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer group backdrop-blur-sm">
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="text-yellow-400 fill-yellow-400 transition-transform duration-300 group-hover:scale-110" 
                        size={16} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">"{t.content}"</p>
                  <div>
                    <p className="font-semibold transition-colors duration-300 group-hover:text-white text-sm md:text-base">{t.name}</p>
                    <p className="text-xs md:text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{t.role}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Let's discuss how our VoIP solutions, custom software development, and digital services can drive your business growth from Dubai to the world.
            </p>

            <ShakingButton
              href="/contact"
              variant="primary"
              className="text-base md:text-lg px-8 py-4"
            >
              Start Your Project Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </ShakingButton>
          </div>
        </FadeInSection>
      </section>

      {/* Enhanced Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes shake {
          0%, 100% { transform: translateX(0) scale(1.05); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px) scale(1.05); }
          20%, 40%, 60%, 80% { transform: translateX(4px) scale(1.05); }
        }

        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 768px) {
          html {
            scroll-behavior: smooth;
          }
        }

        /* Performance optimizations */
        .will-change-transform {
          will-change: transform;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}