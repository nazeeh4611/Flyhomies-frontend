import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

export function MobileAppDevelopment() {
  return (
    <div className="pt-20 bg-white text-gray-900">
      <SEO
        title="Mobile App Development | iOS & Android Apps"
        description="End-to-end mobile app development for iOS and Android. Scalable, high-performance apps designed for businesses, startups, and enterprises."
        keywords="mobile apps, iOS development, android development, app development, react native"
      />

      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Build fast, secure, and seamless mobile applications for both iOS and Android.
            Designed for performance, built for growth.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                iOS & Android App Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We develop high-quality mobile applications that deliver intuitive user experiences
                and powerful performance across all devices. Whether you're launching a startup app
                or scaling an enterprise solution, we build apps engineered for success.
              </p>

              {/* SERVICES */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "iOS App Development (iPhone & iPad)",
                    "Android App Development",
                    "Cross-Platform Apps (React Native)",
                    "UI/UX Design for Mobile",
                    "App Optimization & Performance",
                    "API & Backend Development",
                    "App Maintenance & Support",
                    "App Store & Play Store Deployment",
                  ].map((service, i) => (
                    <div className="flex items-start gap-3" key={i}>
                      <CheckCircle size={20} className="text-black mt-1" />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BENEFITS */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white mb-10 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Fully optimized & high-performance apps",
                    "Smooth and intuitive user experience",
                    "Scalable architecture for future growth",
                    "Secure systems with modern best practices",
                    "Cross-platform development to reduce cost",
                  ].map((benefit, i) => (
                    <li className="flex items-start gap-3 text-gray-800" key={i}>
                      <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
              >
                Build Your App
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-2xl p-12 border border-gray-300 bg-white shadow-lg flex items-center justify-center">
              <img
                src="/App.webp"
                alt="Mobile App"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Technologies We Use</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">iOS & Apple Ecosystem</h3>
              <ul className="space-y-2">
                {["Swift", "SwiftUI", "Xcode", "Objective-C"].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">Android Stack</h3>
              <ul className="space-y-2">
                {["Kotlin", "Java", "Android Studio", "Jetpack"].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-3">Cross Platform</h3>
              <ul className="space-y-2">
                {["React Native", "Expo", "Flutter"].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>{item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Apps We Develop</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "E-Commerce & Shopping Apps",
              "Fitness & Health Apps",
              "Booking & Travel Apps",
              "Finance & Wallet Apps",
              "Educational Apps",
              "Food Delivery Apps",
              "Social Media & Chat Apps",
              "Business & Enterprise Apps",
            ].map((app, i) => (
              <div key={i} className="p-4 border rounded-xl bg-white shadow-sm flex gap-3">
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our App Development Process</h2>

          <div className="space-y-8">
            {[
              "Discovery & Requirement Analysis",
              "Wireframing & UI/UX Design",
              "Frontend & Backend App Development",
              "API Integration & Cloud Setup",
              "Performance Testing & QA",
              "App Store / Play Store Deployment",
              "Ongoing Support & Updates",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl font-bold">{i + 1}.</span>
                <span className="text-lg text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Launch Your Mobile App With Confidence</h2>
          <p className="text-lg text-gray-700 mb-10">
            Whether it’s iOS, Android, or both — we build apps that your users will love.
            Let’s turn your app idea into reality.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 rounded-xl hover:bg-gray-800 transition-all text-lg font-medium"
          >
            Discuss Your App
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
