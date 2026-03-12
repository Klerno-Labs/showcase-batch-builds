import { cn } from "@/lib/utils";
import { images } from "@/config/images";

export default function Footer() {
  return (
    <footer className={cn("bg-gray-900 text-white py-8")}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={images["logo"].src} alt="Summit Electric Logo" className="h-12" />
            <p className="mt-2">Your trusted local service provider.</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:underline">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:underline">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:underline">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:underline">Contact</a></li></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p>(512) 555-1234</p>
            <p>info@summitelectric.com</p>
            <p>4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          </div>
          <div>
            <h3 className="font-bold">Legal</h3>
            <ul>
              <li><a href="/privacy" className="text-gray-400 hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Summit Electric. All rights reserved.</p>
        </div>
      </div>
      <a href="#top" className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-2 shadow-lg">↑</a>
    </footer>
  );
}