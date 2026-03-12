```typescript
import Link from 'next/link';
import { images } from '../config/images';

interface NavbarProps {
  logo: string;
  navLinks: { label: string; href: string }[];
  ctaButton: { label: string; href: string };
}

const Navbar: React.FC<NavbarProps> = ({ logo, navLinks, ctaButton }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logo} alt="Core Strength CrossFit Logo" className="h-10" />
        </Link>
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-800 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href={ctaButton.href} className="bg-primary text-white py-2 px-4 rounded-lg">
          {ctaButton.label}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
```