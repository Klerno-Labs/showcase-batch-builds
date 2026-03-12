"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p>Core Strength CrossFit is dedicated to helping you achieve your fitness goals.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li><a href="/privacy" className="text-gray-400 hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Info</h3>
            <p>(512) 555-1234</p>
            <p>info@corestrengthcrossfit.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Core Strength CrossFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;