import React from 'react'
import { Linkedin, Mail, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import SEO from '../SEO';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: '15+ years in IT consulting with expertise in digital transformation and enterprise architecture. Led successful transformations for Fortune 500 companies.',
    linkedin: '#',
    email: 'sarah.johnson@flyhomies.com',
    certifications: ['PMP', 'TOGAF', 'AWS Solutions Architect']
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Cloud architecture specialist with triple certifications in AWS, Azure, and Google Cloud. Pioneer in multi-cloud strategies.',
    linkedin: '#',
    email: 'michael.chen@flyhomies.com',
    certifications: ['AWS Certified', 'Azure Expert', 'GCP Professional']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Cybersecurity',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'CISSP certified with 12 years of experience in enterprise security and compliance. Expert in zero-trust architecture.',
    linkedin: '#',
    email: 'emily.rodriguez@flyhomies.com',
    certifications: ['CISSP', 'CISM', 'CEH']
  },
  {
    name: 'David Park',
    role: 'Lead Software Architect',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Full-stack expert specializing in scalable microservices and modern web technologies. Contributor to major open-source projects.',
    linkedin: '#',
    email: 'david.park@flyhomies.com',
    certifications: ['Professional Scrum Master', 'Kubernetes Admin']
  },
  {
    name: 'Lisa Thompson',
    role: 'Data Analytics Director',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Business intelligence specialist with deep expertise in predictive analytics and data visualization.',
    linkedin: '#',
    email: 'lisa.thompson@flyhomies.com',
    certifications: ['Microsoft Certified Data Analyst', 'Tableau Expert']
  },
  {
    name: 'James Williams',
    role: 'Infrastructure Manager',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Network and systems expert with extensive experience in enterprise infrastructure and disaster recovery.',
    linkedin: '#',
    email: 'james.williams@flyhomies.com',
    certifications: ['CCNP', 'ITIL Expert', 'VMware VCP']
  },
  {
    name: 'Rachel Kim',
    role: 'DevOps Lead',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'CI/CD pipeline expert passionate about automation and IaC. Conference speaker in DevOps engineering.',
    linkedin: '#',
    email: 'rachel.kim@flyhomies.com',
    certifications: ['Jenkins Certified', 'Docker Certified', 'Terraform Associate']
  },
  {
    name: 'Thomas Wright',
    role: 'AI/ML Consultant',
    image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bio: 'Machine learning specialist and published researcher with real-world AI implementations.',
    linkedin: '#',
    email: 'thomas.wright@flyhomies.com',
    certifications: ['TensorFlow Developer', 'Google ML Engineer']
  }
];

export function Team() {
  return (
    <div className="pt-20">

      {/* ⭐ SEO TAGS ⭐ */}
      <SEO
  title="Our Team | Meet the Experts Behind Flyhomies Associates"
  description="Meet the leadership and expert consultants at Flyhomies Associates specializing in IT consulting, cloud, cybersecurity, AI, DevOps, analytics, and infrastructure."
  keywords="Flyhomies team, IT experts, leadership team, cloud architects, cybersecurity specialists, software engineers"
/>


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">Meet Our Expert Team</h1>
              <p className="text-xl text-blue-100 mb-6">
                Industry-leading professionals dedicated to delivering exceptional results
              </p>
              <p className="text-lg text-blue-50">
                Our team brings deep expertise in cloud, cybersecurity, AI/ML, DevOps, and enterprise IT solutions.
              </p>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="text-blue-100 mb-2">Storyset Illustration</p>
                  <p className="text-sm text-blue-200">Suggested: "Team" or "People"</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving innovation and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl mb-1">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Award size={16} />
                      <span>Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
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

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 aspect-square flex items-center justify-center border border-blue-100">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Storyset Illustration</p>
                    <p className="text-sm text-gray-500">Suggested: "Hiring" or "Join team"</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-700 mb-6">
                We're always looking for talented individuals passionate about technology and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Work with industry leaders, build world-class solutions, and grow your career in a supportive environment.
              </p>

              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
              >
                View Open Positions
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
