import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Temp App',
  description: 'Learn more about Temp App and our mission to deliver delicious cakes.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6 text-center">
          About Our Sweet Journey
        </h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Welcome to Temp App, where every cake tells a story and every bite is a celebration!
          We are passionate about crafting exquisite cakes that not only look stunning but also taste divine.
          Our journey began with a simple dream: to bring joy and sweetness into the lives of our customers through the art of baking.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          At Temp App, we believe in using only the finest ingredients, sourced responsibly, to ensure the highest quality and freshest flavors.
          From classic recipes passed down through generations to innovative new creations, our bakers pour their heart and soul into every confection.
          Whether it's a birthday, wedding, anniversary, or just a treat for yourself, we're here to make your moments extra special.
        </p>
        <h2 className="text-3xl font-bold text-orange-500 mb-4 mt-8 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Our mission is to bake happiness into every cake. We strive to create unforgettable experiences for our customers by combining
          artisan craftsmanship with exceptional customer service. We are committed to creativity, quality, and community, always seeking
          to innovate and delight.
        </p>
        <h2 className="text-3xl font-bold text-pink-500 mb-4 mt-8 text-center">
          Join Us on This Sweet Adventure
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for choosing Temp App. We invite you to explore our delicious range of cakes and become a part of our growing family.
          We look forward to sweetening your celebrations!
        </p>
      </div>
    </main>
  );
}
