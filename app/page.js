"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "KD7424-D40",
      description: "Titanium Gold LED Light, ø400*W15*H50mm",
      price: "$150",
      image: "/lighting1.jpg", // Replace with actual image paths
    },
    {
      id: 2,
      name: "KD91154-M",
      description: "4-Ring Titanium Gold Light, L1000*W280*H250mm",
      price: "$320",
      image: "/lighting2.jpg", // Replace with actual image paths
    },
    {
      id: 3,
      name: "KD91107-S",
      description: "Stainless Steel Silica Light, L850*W300*H300mm",
      price: "$270",
      image: "/lighting3.jpg", // Replace with actual image paths
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-background text-foreground font-sans">
            {/* Navigation Bar */}
            
      <nav className="flex justify-between items-center bg-black text-white py-4 px-6">
                <h1 className="text-3xl font-bold">Urban Avenue Lighting</h1>
                
        <ul className="flex space-x-6">
                    <li className="hover:text-gold cursor-pointer">Home</li>
                    <li className="hover:text-gold cursor-pointer">Products</li>
                    <li className="hover:text-gold cursor-pointer">About Us</li>
                    <li className="hover:text-gold cursor-pointer">Contact</li>
                  
        </ul>
              
      </nav>
            {/* Hero Section */}
            
      <div className="relative h-screen bg-gray-900 text-white">
                {/* Hero Image Placeholder */}
                
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-opacity-75 bg-black">
                    
          <h1 className="text-6xl font-bold tracking-wide">
                        Illuminate Your Space           
          </h1>
                    
          <p className="mt-4 text-lg">
                        Discover luxury lighting solutions for every room.
                      
          </p>
                    
          <button className="mt-6 px-6 py-3 bg-gold text-black rounded-lg hover:bg-opacity-90">
                        Explore Collection           
          </button>
                  
        </div>
              
      </div>
            {/* Search Bar */}
            
      <section className="py-6 px-8 bg-gray-100">
                
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
                
        <h2 className="text-3xl font-bold text-center mb-10 text-gold">
                    Featured Collections         
        </h2>
                
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`relative p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform ${
                hovered === product.id ? "shadow-xl" : "shadow-lg"
              }`}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
                            {/* Product Image */}
                            
              <div className="h-60 w-full bg-gray-300 rounded-lg">
                                
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="object-cover rounded-lg"
                />
                              
              </div>
                            
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                            
              <p className="text-gray-600 mt-2">{product.description}</p>
                            
              <p className="text-gold font-bold mt-2">{product.price}</p>
                            
              <button className="mt-4 w-full bg-gold text-black py-2 px-4 rounded-lg hover:bg-opacity-90">
                                Add to Cart               
              </button>
                          
            </div>
          ))}
                  
        </div>
              
      </section>
            {/* Footer */}
            
      <footer className="bg-black text-white py-8">
                
        <div className="text-center">
                    <p>© 2024 Urban Avenue Lighting. All rights reserved.</p>
                    <p>Crafted with precision and elegance.</p>
                  
        </div>
              
      </footer>
          
    </div>
  );
}
