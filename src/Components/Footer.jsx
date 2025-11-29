import React from 'react'
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FH</span>
              </div>
              <span className="text-xl font-semibold">Flyhomies Associates</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Leading IT consultation and digital solution provider specializing in software development,
              VoIP services, cloud systems, digital marketing, and enterprise solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/flyhomiesassociates/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/flyhomies_associates/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-gray-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/voip" className="text-gray-400 hover:text-white transition-colors">
                  VoIP Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  Iris Bay Tower, Business Bay,<br />
                  Dubai, UAE
                </span>
              </li>

              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+971 50 431 6900</span>
              </li>

              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@flyhomies.com</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Flyhomies Associates. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
