import React from 'react'

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SEO from './SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
<SEO
  title="Contact Flyhomies Associates | Get in Touch"
  description="Get in touch with Flyhomies Associates for IT consulting, cloud solutions, cybersecurity, development, and digital transformation services."
  keywords="contact Flyhomies, IT service inquiry, consulting contact, business inquiry"
/>

    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Have a question or ready to get started? Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Office Location</h4>
                  <p className="text-gray-600">
                    123 Tech Boulevard, Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-gray-600">
                    Main: +1 (555) 123-4567<br />
                    Support: +1 (555) 123-4568<br />
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-gray-600">
                    General: info@flyhomies.com<br />
                    Sales: sales@flyhomies.com<br />
                    Support: support@flyhomies.com
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg">
              <h4 className="text-xl mb-2">Business Hours</h4>
              <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              <p className="mb-2">Saturday: 10:00 AM - 4:00 PM PST</p>
              <p>Sunday: Closed</p>
              <p className="mt-4 text-sm text-blue-100">24/7 Emergency Support Available for Enterprise Clients</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="text-xl mb-2">Message Sent Successfully!</h4>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="software">Software Development</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="transformation">Digital Transformation</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
