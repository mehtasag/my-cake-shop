import Header from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h2>
        <p className="text-gray-700">This is a basic Next.js application setup.</p>
      </main>
    </div>
  );
}
