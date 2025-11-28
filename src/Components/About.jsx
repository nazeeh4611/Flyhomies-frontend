import React from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./Fallback/ImageWithFallback";
import SEO from "./SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Nacrosoft Technology & FlyHomies Associates | Our Journey Since 2015"
        description="Learn about Nacrosoft Technology's journey from 2015, our VoIP solutions, software development, and partnership with FlyHomies Associates for web design and development."
        keywords="Nacrosoft Technology, FlyHomies Associates, VoIP solutions, software development, web design, B2B B2C solutions, VOS 3000, dialers, since 2015"
      />

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              About Nacrosoft Technology & FlyHomies Associates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C brands since 2015
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0MjE2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Office Workspace"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <h3 className="text-3xl mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                FLYHOMIES ASSOCIATES PRIVATE LIMITED, formerly known as NACROSOFT Technologies, 
                began its journey in 2015 as a startup unit within the computer engineering department 
                classroom at Majlis College. From these humble beginnings, we've grown into a trusted 
                technology partner serving clients globally.
              </p>
              <p className="text-gray-700 mb-4">
                Nacrosoft is an A to Z VoIP solution provider offering switches, servers, VOS 3000, 
                dialers, routers, VoIP websites, reseller products, and various VoIP tools including 
                Switch VPS. We specialize in TOP UP, CDR Customizing, and VSP Customizing services.
              </p>
              <p className="text-gray-700">
                With nearly a decade of knowledge in VoIP solutions and custom software development, 
                we offer innovative bespoke software and website solutions enabling businesses to 
                deliver exceptional customer experience and measurable success.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h3 className="text-3xl text-center mb-8">Our Journey Throughout the Decade</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* 2016 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-semibold text-blue-600">2016</h4>
                    <p className="text-gray-600">Registered as a Private Limited Company named Nacrosoft Technology</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2018 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <h4 className="text-xl font-semibold text-blue-600">2018</h4>
                    <p className="text-gray-600">Team strength reached 300; tie-ups with multinational companies in 7 countries</p>
                  </div>
                </div>

                {/* 2020 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-semibold text-blue-600">2020</h4>
                    <p className="text-gray-600">Started operations in the Middle East; moved to Dubai; focus shifted towards web design and development</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2021 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <h4 className="text-xl font-semibold text-blue-600">2021</h4>
                    <p className="text-gray-600">Company rebranded as FlyHomies Associates, aligning with growing digital service demand</p>
                  </div>
                </div>

                {/* 2022 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-semibold text-blue-600">2022</h4>
                    <p className="text-gray-600">Positioned as a major player with top-tier brands under our belt</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2023 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <h4 className="text-xl font-semibold text-blue-600">2023</h4>
                    <p className="text-gray-600">Growth trajectory continues to soar with strong commercial results</p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-semibold text-blue-600">2024</h4>
                    <p className="text-gray-600">Registered as private limited company; office opened in Willingdon Island, Kochi with tie-ups for office spaces</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2">Our Mission</h4>
              <p className="text-gray-600">
                Deliver reliable, high-performance software for both B2B and B2C brands through advanced test automation
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2">Our Vision</h4>
              <p className="text-gray-600">
                Revolutionize how businesses present themselves online through technical excellence and design innovation
              </p>
            </div>

            {/* VoIP Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2">VoIP Solutions</h4>
              <p className="text-gray-600">
                Complete A to Z VoIP solutions including switches, servers, dialers, and custom tools
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl mb-2">Strategic Alliance</h4>
              <p className="text-gray-600">
                Nacrosoft Technology & FlyHomies Associates - Blending technical expertise with design capabilities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}