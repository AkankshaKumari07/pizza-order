import React from 'react';

const OrderForm = ({ orderForm, handleOrderFormChange, handleOrderSubmit }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[900px]">
        <form onSubmit={handleOrderSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Order Details</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              name="name"
              value={orderForm.name}
              onChange={handleOrderFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={orderForm.email}
              onChange={handleOrderFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Phone:</span>
            <input
              type="tel"
              name="phone"
              value={orderForm.phone}
              onChange={handleOrderFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Address:</span>
            <textarea
              name="address"
              value={orderForm.address}
              onChange={handleOrderFormChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
