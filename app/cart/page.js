"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartContext from "../context/cartcontext"; // Correct import path and casing

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setQuantity({ ...quantity, [id]: newQuantity });
      updateQuantity(id, newQuantity);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (quantity[item.id] || item.quantity),
    0
  );
  const tax = (totalPrice * 0.1).toFixed(2);
  const totalAmount = (totalPrice + parseFloat(tax)).toFixed(2);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
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

      {/* Main Cart Section */}
      <main className="flex-grow container mx-auto px-6 pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm lg:text-base border-collapse">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="hidden md:table-cell py-2 px-4">Image</th>
                  <th className="text-left py-2 px-4">Product</th>
                  <th className="text-left py-2 px-4">Quantity</th>
                  <th className="hidden md:table-cell py-2 px-4 text-right">
                    Unit Price
                  </th>
                  <th className="py-2 px-4 text-right">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="hidden md:table-cell py-4 px-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <button
                        className="text-red-600 hover:underline mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <small>Remove item</small>
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center">
                        <input
                          type="number"
                          value={quantity[item.id] || item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className="w-16 py-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                      </div>
                    </td>
                    <td className="hidden md:table-cell py-4 px-4 text-right">
                      <span className="font-medium text-gray-700">
                        ${item.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-medium text-gray-700">
                        $
                        {(quantity[item.id] || item.quantity) *
                          item.price.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-700 mt-6">
            Your cart is empty!
          </p>
        )}
      </main>
      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-6">
        <div className="text-center">
          <p>© 2024 Urban Avenue Lighting. All rights reserved.</p>
          <p>Illuminating spaces with elegance and style.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
