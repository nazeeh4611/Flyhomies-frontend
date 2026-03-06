import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    { name: "Web Development", path: "/services#web-development", icon: "🌐" },
    { name: "VoIP Solutions", path: "/services#voip", icon: "📞" },
    { name: "Software Development", path: "/services#software-development", icon: "💻" },
    { name: "Digital Marketing", path: "/services#digital-marketing", icon: "📱" },
  ];

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  // wrapper ref for services button + dropdown
  const servicesWrapperRef = useRef(null);

  // Called on blur to check if focus actually left the wrapper (robust approach)
  const handleServicesBlur = () => {
    // next tick check activeElement (handles browsers that set relatedTarget=null)
    setTimeout(() => {
      if (
        servicesWrapperRef.current &&
        !servicesWrapperRef.current.contains(document.activeElement)
      ) {
        setActiveDropdown(null);
      }
    }, 0);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200/80"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* p */}
            <Link to="/" className="flex items-center space-x-3 group" onClick={closeAll}>
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                  Flyhomies
                </span>
                <span className="text-xs text-gray-500 font-medium">Associates</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg mx-1 ${
                  isActiveLink("/") ? "text-gray-900 bg-gray-100/80" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
                onClick={closeAll}
              >
                Home
              </Link>

              {/* Services Dropdown - single wrapper with mouse & focus handlers */}
            {/* Services Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setActiveDropdown("services")}
  onMouseLeave={() => {
    // small delay to allow moving mouse between button & dropdown
    setTimeout(() => {
      const dropdown = document.getElementById("services-dropdown");
      if (dropdown && !dropdown.matches(":hover")) {
        setActiveDropdown(null);
      }
    }, 80);
  }}
>
  <button
    onClick={() =>
      setActiveDropdown(prev =>
        prev === "services" ? null : "services"
      )
    }
    className={`flex items-center space-x-2 px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg mx-1 ${
      activeDropdown === "services"
        ? "text-gray-900 bg-gray-100/80"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
    }`}
  >
    <span>Services</span>
    <ChevronDown
      size={16}
      className={`transition-transform duration-300 ${
        activeDropdown === "services" ? "rotate-180" : ""
      }`}
    />
  </button>

  {activeDropdown === "services" && (
    <div
      id="services-dropdown"
      className="absolute top-full left-0 w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/80 py-3 animate-fade-in z-50"
      style={{
        marginTop: "2px",          // FIX: remove gap
        pointerEvents: "auto",      // so mouse always stays active
      }}
    >
      <div className="px-4 py-2 border-b border-gray-200/50">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Our Services
        </p>
      </div>

      {servicesDropdown.map((service) => (
        <Link
          key={service.name}
          to={service.path}
          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50/90 hover:text-gray-900 transition-all duration-200 group border-l-4 border-transparent hover:border-gray-900"
          onClick={closeAll}
        >
          <span className="text-lg">{service.icon}</span>
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
            {service.name}
          </span>
        </Link>
      ))}
    </div>
  )}
</div>


              <Link
                to="/about"
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg mx-1 ${
                  isActiveLink("/about") ? "text-gray-900 bg-gray-100/80" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
                onClick={closeAll}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg mx-1 ${
                  isActiveLink("/contact") ? "text-gray-900 bg-gray-100/80" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
                onClick={closeAll}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-gray-900/20"
                onClick={closeAll}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveDropdown(null);
              }}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 animate-slide-down">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActiveLink("/") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={closeAll}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <div className="px-4 py-4 text-base font-semibold text-gray-900 border-b border-gray-200/50">
                  Services
                </div>
                <div className="pl-6 space-y-1">
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
                      onClick={closeAll}
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className={`block px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActiveLink("/about") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={closeAll}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`block px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActiveLink("/contact") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={closeAll}
              >
                Contact
              </Link>

              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-4 rounded-xl text-base font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={closeAll}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
}
