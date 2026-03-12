```typescript
import Link from "next/link";

interface NavbarProps {
  logo: string;
  navLinks: { label: string; href: string }[];
  ctaButton: { label: string; href: string };
}

const Navbar: React.FC<NavbarProps> = ({ logo, navLinks, ctaButton }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" aria-label="Home">
          <img src={logo} alt="Summit Electric Logo" className="h-10" />
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
      </nav>
    </header>
  );
};

export default Navbar;
```