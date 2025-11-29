import React from "react";
import SEO from "../SEO";

export function TermsConditions() {
  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto text-gray-800">
      <SEO
        title="Terms and Conditions | Flyhomies Associates"
        description="Read the official terms and conditions for using services provided by Flyhomies Associates."
      />

      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-gray-600 mb-8">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using Flyhomies Associates services, website, or
            digital products, you agree to these Terms & Conditions. If you do
            not agree, please discontinue use immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Services Provided</h2>
          <p className="text-gray-700 leading-relaxed">
            Flyhomies Associates provides digital solutions including software
            development, VoIP services, web design, digital marketing, mobile
            app development, and IT consultation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>You agree not to misuse or damage our website or services.</li>
            <li>You must provide accurate information when submitting inquiries.</li>
            <li>You agree not to engage in harmful, illegal, or abusive activity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Payments & Refunds</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>All payments for services must be made as agreed in proposals or invoices.</li>
            <li>Refunds are not guaranteed after project initiation unless mutually approved.</li>
            <li>Subscription-based services follow their respective billing cycle terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, designs, code, documents, logos, and materials produced
            by Flyhomies Associates remain intellectual property unless a written
            transfer of ownership agreement is signed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Flyhomies Associates is not responsible for:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
            <li>Loss due to misuse of third-party services</li>
            <li>Downtime caused by hosting, APIs, or external providers</li>
            <li>Indirect, incidental, or consequential damages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Project Timelines</h2>
          <p className="text-gray-700 leading-relaxed">
            All project timelines are estimates and may change due to revision
            requests, third-party dependencies, or unforeseen circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Updates to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these terms periodically. Continued use of our website
            indicates acceptance of updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these terms, contact us at:
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
