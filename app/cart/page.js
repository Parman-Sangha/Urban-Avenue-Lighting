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
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-yellow-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
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
    </div>
  );
};

export default Cart;
