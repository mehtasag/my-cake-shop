import Link from 'next/link';
import { Cake } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Cake className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-bold tracking-tight group-hover:text-pink-100 transition-colors duration-300">
            Temp Cakes
          </span>
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-lg font-medium hover:text-pink-100 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-pink-100 transition-colors duration-300"
          >
            About
          </Link>
          {/* Add more navigation links here if needed */}
        </div>
      </nav>
    </header>
  );
}
