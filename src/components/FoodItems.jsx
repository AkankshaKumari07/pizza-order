import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import { useCart } from "../context/cartContext";

const FoodItems = ({ selectedCategory }) => {
  const { addToCart } = useCart(); // Get the addToCart function

  const filteredFoodData = FoodData.filter(food =>
    selectedCategory === "All" ? true : food.category === selectedCategory
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center lg:justify-start my-10">
      {filteredFoodData.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          onAddToCart={() => addToCart(food)} // Use the addToCart function
        />
      ))}
    </div>
  );
};

export default FoodItems;
