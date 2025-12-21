import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Upload, Send, AlertCircle } from 'lucide-react';

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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    projectDetails: '',
    services: [],
    attachment: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  const services = [
    'Website',
    'Mobile App',
    'Search Engine Optimization',
    'Social Media Marketing',
    'Paid Ads',
    'Photography/Videography',
    'Branding/Graphic Design',
    'Animator/Motion Design'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        attachment: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      
      // Web3Forms Access Key - Get yours free at https://web3forms.com
      formDataToSend.append('access_key', 'cb1d80d9-2e50-4b79-8b19-1b967e20f240');
      
      // Form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.contactNumber);
      formDataToSend.append('company', formData.companyName);
      formDataToSend.append('services', formData.services.join(', ') || 'None selected');
      formDataToSend.append('message', formData.projectDetails);
      
      // Add redirect URL (optional)
      formDataToSend.append('redirect', 'https://flyhomies.com/thank-you');
      
      // Add email subject
      formDataToSend.append('subject', `New Contact Form Submission from ${formData.name}`);
      
      // Add your email
      formDataToSend.append('from_name', 'Flyhomies Contact Form');
      formDataToSend.append('to', 'info@flyhomies.com');
      
      // Add attachment if exists
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            contactNumber: '',
            companyName: '',
            projectDetails: '',
            services: [],
            attachment: null
          });
          setFileName('');
        }, 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again or email us directly at info@flyhomies.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Illustration and Text */}
          <FadeInSection>
            <div className="sticky top-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get in touch
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Want to discuss your feelings?{' '}
                <span className="text-yellow-500 font-semibold">contact us</span> today to learn more about how our{' '}
                <span className="text-yellow-500 font-semibold">web design experts</span> and digital marketing  in Dubai can help elevate your business online.
              </p>

              {/* Illustration */}
              <div className="bg-gray-100 rounded-3xl p-12 flex items-center justify-center mb-8 animate-[float_3s_ease-in-out_infinite]">
              <img
                    src="/cus.svg"
                    alt="hero illustration"
                    className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                  />
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <a href="mailto:info@flyhomies.com" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900 hover:text-blue-600 transition-colors">info@flyhomies.com</p>
                    </div>
                  </a>
                  <a href="tel:+971504316900" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-gray-900 hover:text-blue-600 transition-colors">+971 50 431 6900</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">Iris Bay Tower, Business Bay,
Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right Side - Form */}
          <FadeInSection delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">I need</h2>

              {error && (
                <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-[fadeIn_0.5s_ease-in]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 animate-[scaleIn_0.5s_ease-out]">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                  <p className="text-gray-700 mb-2">
                    Thank you for reaching out to us.
                  </p>
                  <p className="text-gray-600 text-sm">
                    We'll get back to you within 24 hours at {formData.email}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Services Checkboxes */}
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckbox(service)}
                          className="w-5 h-5 text-gray-900 border-2 border-gray-300 rounded focus:ring-2 focus:ring-gray-900 transition-all cursor-pointer"
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-sm">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:border-gray-900 focus:bg-white outline-none transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:border-gray-900 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Contact Number and Company Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:border-gray-900 focus:bg-white outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:border-gray-900 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Project Details */}
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="About your project"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:border-gray-900 focus:bg-white outline-none resize-none transition-all"
                  ></textarea>

                  {/* File Upload */}
                  {/* <div className="flex items-center gap-4 flex-wrap">
                    <label className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all flex items-center gap-2 font-medium">
                      <Upload size={20} />
                      Add attachment
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </label>
                    <span className="text-gray-600 text-sm">
                      {fileName || 'No file chosen.'}
                    </span>
                  </div> */}
                  {/* {fileName && (
                    <p className="text-xs text-gray-500">Max file size: 5MB</p>
                  )} */}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <a 
        href="https://wa.me/971504316900"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-white rounded-full shadow-2xl p-4 border-2 border-gray-900 cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="relative">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">💬</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>
        <div className="mt-2 bg-white rounded-lg shadow-lg p-3 text-sm max-w-xs">
          <p className="font-semibold text-gray-900">We're online</p>
          <p className="text-gray-600">How can we help?</p>
        </div>
      </a>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}