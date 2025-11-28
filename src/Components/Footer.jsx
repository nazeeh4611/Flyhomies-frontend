import React from 'react'

import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Subscribe to our newsletter for the latest insights and updates
              </p>
            </div>

            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 flex-1 md:w-80"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">FH</span>
              </div>
              <span className="text-xl">Flyhomies Associates</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Leading IT consultation firm specializing in digital transformation, cloud solutions, and innovative technology services.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
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
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#cloud" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#security" className="text-gray-400 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services#development" className="text-gray-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#analytics" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  123 Tech Boulevard<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
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
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
