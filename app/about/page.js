"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
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
            <Link href="/cart" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.75 6.75h12.5m-1.5 3h-10m0 0a1.5 1.5 0 01-1.5-1.5m1.5 1.5a1.5 1.5 0 001.5 1.5m10 0h-10m0 0a1.5 1.5 0 001.5 1.5m0 0a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5H8a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5m0 0a1.5 1.5 0 011.5-1.5m10 0a1.5 1.5 0 01-1.5 1.5m1.5-1.5V9m0 4.5V18m0-12V6a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 005.5 6v.75m0 0V6"
                />
              </svg>
              <span className="font-semibold">Cart ({cartItems.length})</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-gray-900 text-white flex justify-center items-center">
        <Image
          src="/about-hero.jpg"
          alt="Elegant lighting decor"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="z-10 text-center">
          <h2 className="text-5xl font-extrabold">Discover Our Vision</h2>
          <p className="text-lg mt-2">
            Lighting up lives with elegance and innovation
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-16 px-8 bg-white">
        <h3 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
          Our Mission
        </h3>
        <p className="text-lg text-center max-w-3xl mx-auto">
          At Urban Avenue Lighting, our mission is to redefine lighting
          solutions with modern aesthetics and advanced technology. We aim to
          enhance every space with brilliance and elegance, delivering
          unparalleled quality and service.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-50">
        <h3 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">
              Innovative Designs
            </h4>
            <p>
              Our lighting solutions combine modern designs with practical
              functionality to create the perfect ambiance for any space.
            </p>
            <button
              onClick={() => addToCart({ name: "Innovative Designs" })}
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">
              Custom Solutions
            </h4>
            <p>
              We offer tailored lighting plans to meet the unique needs of our
              clients, ensuring every project shines with distinction.
            </p>
            <button
              onClick={() => addToCart({ name: "Custom Solutions" })}
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">
              Sustainability
            </h4>
            <p>
              Urban Avenue Lighting is committed to eco-friendly practices,
              delivering energy-efficient products that reduce environmental
              impact.
            </p>
            <button
              onClick={() => addToCart({ name: "Sustainability" })}
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-gray-900 text-white text-center">
        <h3 className="text-4xl font-bold text-yellow-500 mb-6">
          Join Our Journey
        </h3>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Be a part of the lighting revolution. Explore our innovative
          collections or get in touch to design your personalized lighting
          experience.
        </p>
        <Link
          href="/contact"
          className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600"
        >
          Contact Us Today
        </Link>
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
