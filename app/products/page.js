"use client";

import Link from "next/link";
import { useState } from "react";

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
  {
    id: 4,
    name: "KD12345-B",
    description: "Black LED Pendant Light, ø500*H1200mm",
    price: "$180",
    image: "/lighting4.jpg",
  },
  {
    id: 5,
    name: "KD56789-C",
    description: "Crystal Chandelier, L1000*W500*H700mm",
    price: "$450",
    image: "/lighting5.jpg",
  },
  {
    id: 6,
    name: "KD87654-E",
    description: "Elegant Floor Lamp, H1600mm",
    price: "$220",
    image: "/lighting6.jpg",
  },
  {
    id: 7,
    name: "KD54321-F",
    description: "Wall-Mounted LED Light, L400*H150mm",
    price: "$120",
    image: "/lighting7.jpg",
  },
  {
    id: 8,
    name: "KD98765-G",
    description: "LED Table Lamp, H500mm",
    price: "$90",
    image: "/lighting8.jpg",
  },
  {
    id: 9,
    name: "KD13579-H",
    description: "Modern Pendant Light, ø300*H900mm",
    price: "$200",
    image: "/lighting9.jpg",
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col">
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
          <li className="hover:text-yellow-500">
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.71 2.028L7.414 11H19a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6a1 1 0 011-1h1.586l1.707-4.972m0 0L9.414 7h6.172l1.414 4H8"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Products Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">
          Our Products
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Search products"
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-yellow-500 font-bold mt-2">{product.price}</p>
              <div className="mt-4 flex justify-center gap-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-transparent text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white transition">
                  <Link href={`/products/${product.id}`}>View More</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-6">
        <div className="text-center">
          <p>© 2024 Urban Avenue Lighting. All rights reserved.</p>
          <p>Illuminating spaces with elegance and style.</p>
        </div>
      </footer>
    </div>
  );
}
