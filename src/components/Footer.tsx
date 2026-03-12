import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">{siteConfig.name}</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} Luxe Cuts Studio. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul>
              {siteConfig.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact Info</h4>
            <p className="text-gray-400">Phone: (512) 555-1234</p>
            <p className="text-gray-400">Email: info@luxecutsstudio.com</p>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <ul>
              <li>
                <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;