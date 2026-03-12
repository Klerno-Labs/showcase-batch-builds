export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-blue-500">Go back to Home</a>
    </main>
  );
}