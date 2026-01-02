import Image from 'next/image';
import { Cake } from '@/types/cake';

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-48">
        <Image
          src={cake.imageUrl}
          alt={cake.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-300 group-hover:opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{cake.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">${cake.price.toFixed(2)}</span>
          {cake.available ? (
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
              Add to Cart
            </button>
          ) : (
            <span className="text-red-500 text-sm font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};
