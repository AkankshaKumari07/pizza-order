
import React, { useState } from "react";
import FoodItems from "./FoodItems";

const CategoryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Lunch", "Breakfast", "Dinner", "Snacks"];

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overscroll-x-hidden">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 font-bold rounded-lg ${selectedCategory === category ? "bg-green-500 text-white" : "bg-gray-200"} hover:bg-green-500 hover:text-white`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <FoodItems selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryMenu;