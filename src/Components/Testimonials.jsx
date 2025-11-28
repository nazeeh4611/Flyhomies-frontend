import React from 'react'
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'CIO, TechCorp Industries',
    content:
      'Flyhomies Associates transformed our entire IT infrastructure. Their cloud migration strategy saved us millions and improved our operational efficiency dramatically. The team is professional, knowledgeable, and truly cares about client success.',
    rating: 5,
    company: 'TechCorp Industries',
  },
  {
    name: 'Robert Anderson',
    role: 'VP of Technology, HealthFirst',
    content:
      'The cybersecurity implementation by Flyhomies was flawless. They not only secured our systems but also educated our team on best practices. We now have complete confidence in our data protection measures.',
    rating: 5,
    company: 'HealthFirst',
  },
  {
    name: 'Amanda Lee',
    role: 'CEO, RetailHub Solutions',
    content:
      'Working with Flyhomies on our e-commerce platform was a game-changer. They delivered beyond our expectations, creating a scalable solution that has driven significant revenue growth. Highly recommended!',
    rating: 5,
    company: 'RetailHub Solutions',
  },
  {
    name: 'Thomas Wright',
    role: 'Operations Director, GlobalManufacturing',
    content:
      'The analytics dashboard developed by Flyhomies has revolutionized how we make decisions. Real-time insights have reduced our downtime and increased productivity across all facilities.',
    rating: 5,
    company: 'GlobalManufacturing',
  },
  {
    name: 'Patricia Davis',
    role: 'Head of Digital Innovation, FinanceFirst',
    content:
      'Our digital transformation journey with Flyhomies Associates has been exceptional. They guided us through every step, ensuring minimal disruption while maximizing results. True partners in innovation.',
    rating: 5,
    company: 'FinanceFirst',
  },
  {
    name: 'Christopher Brown',
    role: 'IT Manager, LogisticsPlus',
    content:
      'Flyhomies designed and implemented our global network infrastructure with precision. Their attention to detail and proactive support has ensured smooth operations across all our locations.',
    rating: 5,
    company: 'LogisticsPlus',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <Quote size={48} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t pt-4">
                <p className="text-gray-500">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-blue-600 mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-3xl mb-4">Our Track Record</h3>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
