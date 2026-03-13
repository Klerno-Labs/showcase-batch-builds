import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50">
      <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been removed or renamed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
      >
        <Home className="mr-2 h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}