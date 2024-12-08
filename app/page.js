"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "KD7424-D40",
      description: "Titanium Gold LED Light, ø400*W15*H50mm",
      price: "$150",
      image: "/lighting1.jpg",
    },
    {
      id: 2,
      name: "KD91154-M",
      description: "4-Ring Titanium Gold Light, L1000*W280*H250mm",
      price: "$320",
      image: "/lighting2.jpg",
    },
    {
      id: 3,
      name: "KD91107-S",
      description: "Stainless Steel Silica Light, L850*W300*H300mm",
      price: "$270",
      image: "/lighting3.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-black text-white py-4 px-6">
        <h1 className="text-3xl font-bold">
          <Link href="/">Urban Avenue Lighting</Link>
        </h1>
        <ul className="flex space-x-6">
          <li className="hover:text-yellow-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen bg-gray-900 text-white">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-opacity-75 bg-black">
          <h1 className="text-6xl font-bold tracking-wide">
            Illuminate Your Space
          </h1>
          <p className="mt-4 text-lg">
            Discover luxury lighting solutions for every room.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-opacity-90">
            <Link href="/products">Explore Collection</Link>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <section className="py-6 px-8 bg-gray-200">
        <input
          type="text"
          placeholder="Search for lights..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-500">
          Featured Collections
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="h-60 w-full bg-gray-300 rounded-lg">
                <Image
                  src={product.image}
                  alt={`${product.name} image`}
                  width={300}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-yellow-500 font-bold mt-2">{product.price}</p>
              <button className="mt-4 w-full bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-opacity-90">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Urban Avenue Section */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">
          About Urban Avenue Lighting
        </h2>
        <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
          Urban Avenue Lighting specializes in creating luxurious, innovative
          lighting solutions that bring elegance and functionality to every
          space. With a commitment to quality and design, we illuminate homes
          and businesses with timeless, sophisticated lighting collections.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-500">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg">
              "Urban Avenue Lighting transformed my living space into a work of
              art. The quality and design are unmatched!"
            </p>
            <p className="mt-4 text-yellow-500 font-bold">- Sarah M.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg">
              "I’m in love with my new lighting fixtures. They’ve added so much
              elegance to my home!"
            </p>
            <p className="mt-4 text-yellow-500 font-bold">- James L.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg">
              "Exceptional customer service and breathtaking designs. Highly
              recommend!"
            </p>
            <p className="mt-4 text-yellow-500 font-bold">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="text-center">
          <p>© 2024 Urban Avenue Lighting. All rights reserved.</p>
          <p>Illuminating spaces with elegance and style.</p>
        </div>
      </footer>
    </div>
  );
}
