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
  Cpu,
  Globe,
  Shield,
  Rocket,
  Code,
  Palette,
  BarChart,
  HeadphonesIcon,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import SEO from "../SEO";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

// Three.js Background Component
function ThreeDBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const torusRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i+1] = (Math.random() - 0.5) * 100;
      posArray[i+2] = (Math.random() - 0.5) * 100;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x9ca3af,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    const geometry1 = new THREE.TorusKnotGeometry(3, 0.8, 100, 16);
    const material1 = new THREE.MeshPhongMaterial({
      color: 0x1f2937,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const torusKnot = new THREE.Mesh(geometry1, material1);
    torusKnot.position.x = -5;
    torusKnot.position.y = 2;
    scene.add(torusKnot);
    torusRef.current = torusKnot;

    const geometry2 = new THREE.IcosahedronGeometry(2, 1);
    const material2 = new THREE.MeshPhongMaterial({
      color: 0x4b5563,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const icosahedron = new THREE.Mesh(geometry2, material2);
    icosahedron.position.x = 5;
    icosahedron.position.y = -2;
    scene.add(icosahedron);

    for(let i = 0; i < 5; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const cubeMat = new THREE.MeshPhongMaterial({
        color: 0x6b7280,
        transparent: true,
        opacity: 0.1
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.x = (Math.random() - 0.5) * 20;
      cube.position.y = (Math.random() - 0.5) * 20;
      cube.position.z = (Math.random() - 0.5) * 20;
      scene.add(cube);
    }

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const animate = () => {
      requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0002;
        particlesRef.current.rotation.x += 0.0001;
      }
      
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.005;
        torusRef.current.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 opacity-30 pointer-events-none" />;
}

function FadeInSection({ children, delay = 0, id }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    
    gsap.set(element, { opacity: 0, y: 50 });
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: delay / 1000,
          ease: "power3.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return <div ref={sectionRef}>{children}</div>;
}

function StatCounter({ value, suffix, label, delay }) {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: parseInt(value),
          duration: 2,
          delay: delay / 1000,
          ease: "power2.out",
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val));
          }
        });
      }
    });
  }, [value, delay]);

  return (
    <div ref={counterRef} className="text-center group">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <p className="text-sm md:text-base text-gray-500 px-2 relative">
        {label}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
      </p>
    </div>
  );
}

function ShakingButton({ children, href, className = "", variant = "primary", ...props }) {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      x: -4,
      duration: 0.1,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.set(buttonRef.current, { x: 0 });
      }
    });
  };

  const baseClasses = "inline-flex items-center justify-center px-6 py-4 rounded-lg transition-all duration-300 font-medium text-lg relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:shadow-2xl hover:scale-105",
    secondary: "border-2 border-gray-400 text-gray-800 hover:bg-gray-50 hover:border-gray-600 hover:scale-105",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:scale-105"
  };

  return (
    <Link
      to={href}
      ref={buttonRef}
      className={`${baseClasses} ${variants[variant]} ${className} active:scale-95`}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}

function FloatingElements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;
    
    Array.from(elements).forEach((el, index) => {
      gsap.to(el, {
        y: index % 2 === 0 ? -20 : 20,
        x: index % 3 === 0 ? 10 : -10,
        rotation: index * 5,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, link, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%"
        }
      }
    );
  }, [index]);

  return (
    <Link
      to={link}
      ref={cardRef}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-200 hover:-translate-y-2 block h-full hover:border-gray-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-gray-800">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{desc}</p>
        <div className="flex items-center text-gray-700 group-hover:text-gray-900 group-hover:gap-2 transition-all duration-300 font-medium">
          Learn more
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%"
        }
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200 hover:-translate-y-2 overflow-hidden hover:border-gray-300">
      <div className="h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 md:p-6">
        <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3 group-hover:bg-gray-200 group-hover:scale-105 transition-all duration-300">
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
            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 hover:scale-105 transition-all duration-200">
              {result}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      <span className="font-medium">
        <Typewriter
          words={[
            "App Development & Mobile Solutions.",
            "Web Design & Development Services.",
            "Digital Marketing & SEO Strategies.",
            "Custom Software Development.",
            "Cross-Platform Mobile Apps.",
            "ERP & Business Solutions.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={isMobile ? 35 : 45}
          deleteSpeed={isMobile ? 20 : 25}
          delaySpeed={isMobile ? 1500 : 2000}
        />
        <span className="text-gray-800 animate-pulse ml-0.5">|</span>
      </span>
    </div>
  );
}

// New component for horizontal text scroll
function HorizontalScrollText() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    gsap.to(text, {
      x: -500,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-8">
      <div ref={textRef} className="whitespace-nowrap">
        <span className="text-white text-4xl md:text-6xl font-bold mx-4">✦ App Development</span>
        <span className="text-white text-4xl md:text-6xl font-bold mx-4">✦ Mobile Solutions</span>
        <span className="text-white text-4xl md:text-6xl font-bold mx-4">✦ Cross-Platform Apps</span>
        <span className="text-white text-4xl md:text-6xl font-bold mx-4">✦ iOS & Android</span>
      </div>
    </div>
  );
}

// New component for split text animation
function SplitTextAnimation({ text, className = "" }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(headingRef.current, { type: "lines,words,chars" });
    
    gsap.fromTo(split.chars, 
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      }
    );

    return () => split.revert();
  }, []);

  return (
    <h2 ref={headingRef} className={className}>
      {text}
    </h2>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    if (statsRef.current) {
      gsap.to(statsRef.current.querySelectorAll('.stat-item'), {
        y: 30,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-16 md:pt-20 bg-white text-gray-800 overflow-hidden">
      <ThreeDBackground />
      <FloatingElements />
      
      <SEO
        title="Nacrosoft Technology x FlyHomies Associates | App Development & Digital Services"
        description="Leading app development provider since 2015. Custom software development, web design, digital marketing, and comprehensive IT services from Dubai."
        keywords="App development, mobile solutions, web development, software development, digital marketing, Dubai IT company, cross-platform apps, iOS, Android, ERP, VRM"
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT CONTENT */}
            <FadeInSection delay={100}>
              <div className="text-center md:text-left">
                <div className="animate-item inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0 hover:bg-gray-200 transition-all duration-300">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    🚀 Now Operating from Dubai, UAE
                  </span>
                </div>

                <SplitTextAnimation 
                  text="Your Digital Growth Partner" 
                  className="animate-item text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                />

                <ResponsiveTypewriter />

                <p className="animate-item text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
                  Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C brands since 2015. Now expanding our expertise from Dubai to serve global clients.
                </p>

                <div className="animate-item flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
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

            {/* RIGHT SIDE IMAGE */}
            <FadeInSection delay={200}>
              <div className="flex justify-center order-first md:order-last">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <img
                    src="/DesignHERO.svg"
                    alt="Digital Solutions Illustration"
                    className="w-full h-auto object-contain transition-all duration-1000 hover:scale-105 hover:rotate-1 animate-float"
                    loading="eager"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL TEXT */}
      <HorizontalScrollText />

      {/* PARTNERSHIP BANNER */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 md:py-8 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                <div className="bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <span className="text-lg md:text-xl font-bold">Nacrosoft Technology</span>
                </div>
                <span className="text-xl md:text-2xl text-gray-400">×</span>
                <div className="bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
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
      <section ref={statsRef} className="py-12 md:py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "100+", suffix: "+", label: "Happy Clients" },
              { value: "7", suffix: "+", label: "Countries" },
              { value: "9", suffix: "+", label: "Years Experience" },
              { value: "2020", suffix: "", label: "Dubai Operations Started" },
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <FadeInSection delay={index * 100}>
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 200}
                  />
                </FadeInSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <SplitTextAnimation 
                text="Our Core Services" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive digital solutions from app development to modern web development and marketing
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: "📱", 
                title: "App Development", 
                desc: "Complete A to Z mobile app development including iOS, Android & cross-platform solutions.", 
                link: "/services/app-development" 
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
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* APP DEVELOPMENT SECTION */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300">
                  <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    📱 Mobile Excellence
                  </span>
                </div>
                <SplitTextAnimation 
                  text="Powerful Mobile Applications" 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight"
                />
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
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

            <FadeInSection delay={200}>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <img
                    src="/App.svg"
                    alt="Mobile App Development"
                    className="w-full h-auto object-contain transition-all duration-1000 hover:scale-105 animate-float"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & SOFTWARE SOLUTIONS */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <SplitTextAnimation 
                text="Technologies & Enterprise Solutions" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive software solutions and cutting-edge technologies to power your business growth
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Technologies We Use */}
            <FadeInSection delay={100}>
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Technologies We Master</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      category: "Mobile Development",
                      technologies: "React Native, Flutter, Swift, Kotlin, Android SDK, iOS Development"
                    },
                    {
                      category: "Frontend Development",
                      technologies: "React.js, Vue.js, Angular, TypeScript, Next.js, Tailwind CSS"
                    },
                    {
                      category: "Backend Development",
                      technologies: "Node.js, Python, PHP, Java, .NET, Express.js, Django"
                    },
                    {
                      category: "Database & Cloud",
                      technologies: "MySQL, PostgreSQL, MongoDB, AWS, Azure, Google Cloud"
                    },
                    {
                      category: "App Store Technologies",
                      technologies: "App Store Connect, Google Play Console, TestFlight, App Analytics"
                    },
                  ].map((tech, index) => (
                    <div key={index} className="border-l-4 border-gray-300 pl-3 md:pl-4 hover:border-gray-500 hover:pl-6 transition-all duration-300 group">
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base group-hover:text-gray-800">{tech.category}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{tech.technologies}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Software Solutions */}
            <FadeInSection delay={200}>
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
                      icon: "📱",
                      title: "Mobile Enterprise Apps",
                      description: "Enterprise-grade mobile applications for workforce management and operations.",
                      features: ["Field Service", "Mobile CRM", "Real-time Sync", "Offline Capability"]
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
                    <div key={index} className="border border-gray-200 rounded-lg p-3 md:p-4 hover:border-gray-300 hover:shadow-md hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">{solution.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{solution.title}</h4>
                          <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">{solution.description}</p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {solution.features.map((feature, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 hover:scale-105 transition-all duration-200">
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
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <SplitTextAnimation 
                text="Our Recent Work" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Showcasing our successful projects and client transformations
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "DD Events UAE – Event Management",
                description: "A creative event management website showcasing premium event planning services in Dubai, designed to bring client visions to life with style and precision.",
                category: "Event Management",
                results: ["Dubai-Based", "Creative Planning", "Premium Events", "High Engagement"],
                image: '/dd.png', 
              },
              {
                title: "Simpolo Trading – Building Materials",
                description: "A premium website for a trusted UAE-based supplier offering high-quality building materials since 2005, showcasing a wide range of durable and modern products.",
                category: "Building Materials Supplier",
                results: ["Since 2005", "Premium Materials", "UAE Trusted Supplier", "Product Showcase"],
                image: '/sim.png', 
              },
              {
                title: "Wavescation Holiday Homes",
                description: "DTCM-licensed premium holiday home management in Dubai, specializing in short-term rentals with 5-star hospitality standards.",
                category: "Property Management",
                results: ["DTCM Licensed", "Premium Locations", "5-Star Standards", "In-House Maintenance"],
                image: '/wave.png',
              },
              {
                title: "The Foscape Aquatic Care",
                description: "World-class aquatic care services for aquariums, fountains, water gardens, pools, spas, and lake management across South India.",
                category: "Aquatic Services",
                results: ["Residential & Commercial", "Expert Maintenance", "South India Coverage", "Custom Solutions"],
                image: '/fos.png',
              },
              {
                title: "MVEWORLD Creative Production",
                description: "Creative production agency specializing in filmmaking, advertisements, and event management across Dubai and India.",
                category: "Creative Agency",
                results: ["Expert Filmmaking", "Brand Storytelling", "Event Management", "Multi-Location"],
                image: '/mve.png',
              },
              {
                title: "HH Mobiles & Gadgets",
                description: "Premium mobile phones and accessories retailer in Dubai offering the latest gadgets with expert support.",
                category: "E-Commerce Retail",
                results: ["Dubai Based", "Latest Gadgets", "Expert Service", "Accessories"],
                image: '/hh.png',
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {/* DUBAI FOCUS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    🏙️ Dubai Operations
                  </span>
                </div>
                <SplitTextAnimation 
                  text="Expanding from the Heart of Dubai" 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight"
                />
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
                      <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:scale-150 group-hover:bg-gray-800 transition-all duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 group-hover:translate-x-2 transition-all duration-300 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="flex justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-300 shadow-lg w-full max-w-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
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
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection>
              <div className="flex justify-center order-first lg:order-last">
                <img
                  src="/choose.svg"
                  alt="Why Choose Us"
                  className="w-full max-w-md object-contain hover:scale-105 transition-transform duration-500 animate-float"
                  loading="lazy"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="text-center md:text-left">
                <SplitTextAnimation 
                  text="Why Choose Us?" 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight"
                />
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  With nearly a decade of experience, we combine technical expertise with creative innovation to deliver exceptional results.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {[
                    { 
                      icon: <Award className="text-gray-800" size={20} />, 
                      title: "Proven Track Record", 
                      desc: "9+ years delivering successful app and software solutions since 2015." 
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
                    >
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-300 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-md">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <SplitTextAnimation 
                text="Client Success Stories" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
              />
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
                content: "Nacrosoft transformed our mobile app strategy with reliable development solutions and excellent support.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "CEO, E-commerce Platform",
                content: "The app development team delivered beyond expectations. Our mobile user engagement increased by 150%.",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                role: "CTO, Tech Enterprise",
                content: "Outstanding mobile app development services. Their custom solutions streamlined our operations perfectly.",
                rating: 5,
              },
            ].map((t, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer group">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-white to-white"></div>
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <SplitTextAnimation 
              text="Ready to Transform Your Business?" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight"
            />
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Let's discuss how our app development, custom software solutions, and digital services can drive your business growth from Dubai to the world.
            </p>

            <ShakingButton
              href="/contact"
              variant="primary"
              className="text-base md:text-lg px-8 py-4"
            >
              Start Your Project Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </ShakingButton>
          </div>
        </FadeInSection>
      </section>

      {/* Enhanced Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        html {
          scroll-behavior: smooth;
        }

        .gradient-text {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        .will-change-transform {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Split text animation styles */
        .char {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}