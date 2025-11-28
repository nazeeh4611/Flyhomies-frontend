import React from 'react'
import { Linkedin, Mail } from 'lucide-react';
import {ImageWithFallback} from "./Fallback/ImageWithFallback"
import SEO from './SEO';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: '15+ years in IT consulting with expertise in digital transformation and enterprise architecture.',
    linkedin: '#',
    email: 'sarah.johnson@flyhomies.com',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Cloud architecture specialist with certifications in AWS, Azure, and Google Cloud Platform.',
    linkedin: '#',
    email: 'michael.chen@flyhomies.com',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Cybersecurity',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'CISSP certified with 12 years of experience in enterprise security and compliance.',
    linkedin: '#',
    email: 'emily.rodriguez@flyhomies.com',
  },
  {
    name: 'David Park',
    role: 'Lead Software Architect',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Full-stack development expert specializing in scalable microservices and modern web technologies.',
    linkedin: '#',
    email: 'david.park@flyhomies.com',
  },
  {
    name: 'Lisa Thompson',
    role: 'Data Analytics Director',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Business intelligence specialist with deep expertise in data visualization and predictive analytics.',
    linkedin: '#',
    email: 'lisa.thompson@flyhomies.com',
  },
  {
    name: 'James Williams',
    role: 'Infrastructure Manager',
    image:
      'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQyMzUwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Network and systems expert with extensive experience in enterprise infrastructure design.',
    linkedin: '#',
    email: 'james.williams@flyhomies.com',
  },
];

export default function Team() {
  return (
    <>
    
    
    <SEO
  title="Our Team | Meet the Experts Behind Flyhomies Associates"
  description="Meet the leadership and expert consultants at Flyhomies Associates specializing in IT consulting, cloud, cybersecurity, AI, DevOps, analytics, and infrastructure."
  keywords="Flyhomies team, IT experts, leadership team, cloud architects, cybersecurity specialists, software engineers"
/>

    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading experts dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl mb-1">{member.name}</h3>
                  <p className="text-blue-300">{member.role}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{member.bio}</p>

                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
