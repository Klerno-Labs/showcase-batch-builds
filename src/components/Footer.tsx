```typescript
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">Aspen Dental Studio</h2>
          <p>Your smile is our priority.</p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a>
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Contact Info</h3>
          <p>(713) 555-1234</p>
          <p>info@aspendentalstudio.com</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Legal</h3>
          <ul>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} Aspen Dental Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```