"use client";
import { useState } from "react";
import { GrCart } from "react-icons/gr";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <GrCart
        size={26}
        className="mx-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/*  */}
      {isOpen && (
        <div className="border-2 border-red-300 absolute w-[400px] h-80 bg-gray-400 top-10 z-10 right-0">
          <p>Obrazek množství odebrat</p>
          <p>Obrazek množství odebrat</p>
          <p>Obrazek množství odebrat</p>
          <p>Obrazek množství odebrat</p>
          <p>Obrazek množství odebrat</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
