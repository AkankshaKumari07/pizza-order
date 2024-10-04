import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import { IoAdd, IoRemove } from 'react-icons/io5';
import OrderForm from '../components/OrderForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Pyq9JF4yHFqhmKZto55MyA20HgbdHXC3vdKA9gqKHdH0SFxsvbOYDU58xpdyaC5dJMQD0HNIfsoHu1QsgPCekI500YX3WSIvG');

const Checkout = () => {
  const { cartItems, incrementQuantity, decrementQuantity, getTotalAmount, getTotalItems } = useCart();
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleOrderFormChange = (event) => {
    setOrderForm({ ...orderForm, [event.target.name]: event.target.value });
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;

    // Call your backend to create a checkout session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line_items: cartItems.map(item => ({
          price: 'price_1Pyq9JF4yHFqhmKZs3Qe3TbP', // Use your Stripe Price ID
          quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: `${window.location.origin}/success`,
        cancel_url: `${window.location.origin}/cancel`,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div className="p-5">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center mb-4 border-b pb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded-l"
                    >
                      <IoRemove />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded-r"
                    >
                      <IoAdd />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t mt-4 pt-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <p>Total Items: {getTotalItems()}</p>
        <p>Total Amount: ₹{getTotalAmount()}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
        <OrderForm
          orderForm={orderForm}
          handleOrderFormChange={handleOrderFormChange}
          handleOrderSubmit={handleOrderSubmit}
        />
      </div>
    </div>
  );
};

export default Checkout;
