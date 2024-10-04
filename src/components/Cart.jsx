import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    isCartOpen, // Use isCartOpen state
    toggleCart, // Use toggleCart function
    incrementQuantity,
    decrementQuantity,
    removeItem,
    getTotalItems,
    getTotalAmount,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (!isCartOpen) return null; // Render only if cart is open

  return (
    <div className="fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3">
      <div className="flex justify-between items-center my-3">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose
          onClick={toggleCart} // Use toggleCart to close
          className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
        />
      </div>
      {cartItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onIncrement={() => incrementQuantity(item.id)}
          onDecrement={() => decrementQuantity(item.id)}
          onRemove={() => removeItem(item.id)}
        />
      ))}
      <div className="absolute bottom-0">
        <h3>Items: {getTotalItems()}</h3>
        <h3>Total Amount: ₹{getTotalAmount()}</h3>
        <hr className="w-[90vw] lg:w-[18vw]" />
        <button
          onClick={handleCheckout}
          className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
