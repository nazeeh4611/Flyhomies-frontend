import React, { useState, useEffect } from "react";
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
    { name: "Web Development", path: "/services/web-development", icon: "🌐" },
    { name: "VoIP Solutions", path: "/services/voip", icon: "📞" },
    { name: "Software Development", path: "/services/software-development", icon: "💻" },
    { name: "Digital Marketing", path: "/services/digital-marketing", icon: "📱" },
  ];

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-28 flex items-center">
                <img
                  src="/flylogo.png"
                  alt="Flyhomies logo"
                  className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
                {isActiveLink("/") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></span>
                )}
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`relative flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActiveLink("/services")
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                  {isActiveLink("/services") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></span>
                  )}
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-2 animate-fade-in">
                    {servicesDropdown.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 transform hover:translate-x-2 border-l-2 border-transparent hover:border-gray-900"
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/portfolio")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                What we did!
                {isActiveLink("/portfolio") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></span>
                )}
              </Link>

              <Link
                to="/about"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/about")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
                {isActiveLink("/about") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></span>
                )}
              </Link>
              
              <Link
                to="/contact"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/contact")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Contact
                {isActiveLink("/contact") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></span>
                )}
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-slide-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActiveLink("/")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-medium text-gray-900">
                  Services
                </div>
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/portfolio"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActiveLink("/portfolio")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                What we did
              </Link>

              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActiveLink("/about")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActiveLink("/contact")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-3 rounded-lg text-base font-medium hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16"></div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}