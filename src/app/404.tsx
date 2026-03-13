const NotFoundPage = () => {
  return (
    <main className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="text-primary hover:underline">Go back to Home</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;