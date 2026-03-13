import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Apex Strategic",
  description: "Review Apex Strategic's terms of service to understand the rules and guidelines for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg prose-gray">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using the Apex Strategic website, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials on Apex Strategic's website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            The materials on Apex Strategic's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of Texas and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
}