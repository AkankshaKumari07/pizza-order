import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-4 mb-2 relative">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer" onClick={onRemove}/>
      <img
        src={item.img}
        alt="food"
        className="w-[50px] h-[50px]"
      />
      <div>
        <h2 className="font-bold text-gray-800 text-[12px]">{item.name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{item.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={onIncrement}
            />
            <span>{item.quantity}</span>
            <AiOutlineMinus className="border-2 border-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={onDecrement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;



