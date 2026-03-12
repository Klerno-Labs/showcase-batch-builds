import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const metadata = {
  title: "Wagmore Dog Grooming",
  description: "Quality pet grooming services in your area.",
  openGraph: {
    title: "Wagmore Dog Grooming",
    description: "Quality pet grooming services in your area.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("bg-background text-text")}>
        <header>
          {/* Navigation component here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer component here */}
        </footer>
      </body>
    </html>
  );
};

export default Layout;