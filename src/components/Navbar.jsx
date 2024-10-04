import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cartContext";

const Navbar = () => {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <nav
      className="bg-green-900 lg:h-20 flex flex-col lg:flex-row 
    justify-between py-3 mb-10"
    >
      <div>
        <h1 className="text-2xl mt-2 text-white font-bold lg:ml-9 ml-4">Platter Palooza</h1>
      </div>
      <div className="flex items-center space-x-4 mr-5">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="ml-4 p-3 border border-gray-400 text-sm 
          rounded-lg outline-none w-full lg:w-[25vw]"
        />
        <div className="relative cursor-pointer" onClick={toggleCart}> {/* Add onClick here */}
          <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl" />
          <span
            className="absolute -top-2 -right-2 bg-red-500 text-white 
            rounded-full h-5 w-5 flex items-center justify-center text-xs"
          >
            {getTotalItems()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
