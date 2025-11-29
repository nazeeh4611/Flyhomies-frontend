import React from "react";
import SEO from "../SEO";

export function PrivacyPolicy() {
  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto text-gray-800">
      <SEO
        title="Privacy Policy | Flyhomies Associates"
        description="Read the privacy policy of Flyhomies Associates to understand how we collect, use, and protect your information."
      />

      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Flyhomies Associates (“we”, “our”, “us”) is committed to protecting
            your personal information. This Privacy Policy explains how we collect,
            use, and safeguard your data when you interact with our website,
            services, mobile applications, and communication channels.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-gray-700 mb-3">We may collect the following information:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Personal details (name, email, phone number, company name)</li>
            <li>Service-related information you share with us</li>
            <li>Website usage data (IP address, device type, browser type)</li>
            <li>Messages sent via forms, WhatsApp, email, or support channels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>To provide and improve our services</li>
            <li>To respond to inquiries and customer support requests</li>
            <li>To send updates, proposals, or project-related communication</li>
            <li>To improve website performance and user experience</li>
            <li>For legal and security purposes when required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or trade your information.  
            We may share data only with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
            <li>Trusted service providers (hosting, payment, analytics)</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We use encryption, secured servers, and strict access control to
            protect your information from unauthorized access or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Request access to your data</li>
            <li>Request correction or deletion</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions regarding this Privacy Policy, please contact us at:
            <br /> <br />
            <strong>Email:</strong> info@flyhomies.com <br />
            <strong>Phone:</strong> +971 50 431 6900 <br />
            <strong>Address:</strong> Iris Bay Tower, Business Bay, Dubai, UAE
          </p>
        </section>

      </div>

      <div className="h-20"></div>
    </div>
  );
}
