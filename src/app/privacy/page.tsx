import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Strategic",
  description: "Read Apex Strategic's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg prose-gray">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            At Apex Strategic, we collect information you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and company information.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to communicate with you, provide the services you request, and improve our offerings. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at (713) 555-0198 or email privacy@apexstrategic.com.
          </p>
        </div>
      </div>
    </div>
  );
}