"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Titanium Gold LED Light",
    description:
      "Contemporary ceiling light in titanium gold finish, ideal for modern interiors.",
    price: "$180",
    image: "/images/h.png",
  },
  {
    id: 2,
    name: "4-Ring Titanium Gold Light",
    description:
      "Elegant multi-ring light fixture in a striking titanium gold color, perfect for stylish spaces.",
    price: "$384",
    image: "/images/h1.png",
  },
  {
    id: 3,
    name: "Stainless Steel Silica Light",
    description:
      "Sleek and simple stainless steel light with silica accents, suitable for any room.",
    price: "$324",
    image: "/images/h2.png",
  },
  {
    id: 4,
    name: "Black LED Pendant Light",
    description:
      "Minimalist black pendant light, ideal for contemporary living areas or kitchens.",
    price: "$216",
    image: "/images/h3.png",
  },
  {
    id: 5,
    name: "Crystal Chandelier",
    description:
      "Luxurious crystal chandelier, adds a touch of glamour to any setting.",
    price: "$540",
    image: "/images/h4.png",
  },
  {
    id: 6,
    name: "Elegant Floor Lamp",
    description:
      "Modern floor lamp in a subtle yet stylish design, perfect for reading nooks.",
    price: "$264",
    image: "/images/h5.png",
  },
  {
    id: 7,
    name: "Wall-Mounted LED Light",
    description:
      "Functional and fashionable wall-mounted light, enhances any decor.",
    price: "$144",
    image: "/images/h6.png",
  },
  {
    id: 8,
    name: "LED Table Lamp",
    description:
      "Compact and efficient LED table lamp, ideal for desks or bedside tables.",
    price: "$108",
    image: "/images/h7.png",
  },
  {
    id: 9,
    name: "Modern Pendant Light",
    description:
      "Stylish pendant light with a modern twist, suitable for high and low ceilings.",
    price: "$240",
    image: "/images/h8.png",
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
        <ul className="flex space-x-6 items-center">
          <li className="hover:text-yellow-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/products">Collection</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/cart">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-1"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.6 11.59a.75.75 0 00.74.59h11.91a.75.75 0 00.74-.64l1.44-7.22a1 1 0 00-.97-1.22H6.68"></path>
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Products Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">
          Our Collection
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
