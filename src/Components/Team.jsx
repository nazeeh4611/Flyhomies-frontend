import React from "react";
import { Linkedin, Mail } from "lucide-react";
import {ImageWithFallback} from "./Fallback/ImageWithFallback"
import SEO from "./SEO";

export default function Team() {
  return (
    <div className="pt-20 bg-white text-gray-900">

      {/* SEO */}
      <SEO
        title="Founders | Flyhomies Associates"
        description="Meet the founders leading Flyhomies Associates."
        keywords="Founder, CEO, Co-Founder, Flyhomies Associates"
      />

      {/* HERO SECTION */}
      <section className="border-b border-gray-300 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Founders</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            The leadership team behind Flyhomies Associates — driving innovation, vision, 
            and long-term success.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 bg-white border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <ImageWithFallback
              src="/founder.jpg"
              alt="Founder / CEO"
              className="w-full h-[420px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-2"> Jabir</h2>
            <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Founder of Flyhomies Associates with over a decade of expertise in digital 
              transformation, enterprise solutions, and modern technology systems. She leads 
              the company with a clear vision for quality, innovation, and long-term value.
            </p>

            {/* CONTACT */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 flex justify-center items-center border rounded-xl hover:bg-black hover:text-white transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:ceo@flyhomies.com"
                className="w-12 h-12 flex justify-center items-center border rounded-xl hover:bg-black hover:text-white transition"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CO-FOUNDER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENT FIRST ON MOBILE */}
          <div className="md:order-1 order-2">
            <h2 className="text-4xl font-bold mb-2">Hanzitha Moideen</h2>
            <p className="text-lg text-gray-600 mb-4">Co-Founder</p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Co-founder and the backbone of Flyhomies Associates technical division. 
              Highly experienced in cloud systems, DevOps automation, and scalable 
              architectures powering enterprise-level platforms.
            </p>

            {/* CONTACT */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 flex justify-center items-center border rounded-xl hover:bg-black hover:text-white transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:cofounder@flyhomies.com"
                className="w-12 h-12 flex justify-center items-center border rounded-xl hover:bg-black hover:text-white transition"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:order-2 order-1">
            <ImageWithFallback
              src="/cofounder.jpg"
              alt="Co-Founder"
              className="w-full h-[420px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
