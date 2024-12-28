"use client";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsInCart: number = 3;
  return (
    <HoverCard>
      <div className="w-12 h-12 flex justify-center items-center relative">
        <HoverCardTrigger>
          {itemsInCart <= 0 ? null : (
            <div className="rounded-full bg-violet-400 absolute -right-2 -top-2 flex justify-center items-center w-6 h-6">
              {itemsInCart}
            </div>
          )}
          <GrCart
            size={26}
            className="mx-4 cursor-pointer z-10"
            onClick={() => setIsOpen(!isOpen)}
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <div>
            {/* TODO Komponenta */}
            <p>Obrazek množství odebrat</p>
            <p>Obrazek množství odebrat</p>
          </div>

          <Link href="/cart" className="mt-8 mb-4">
            <Button onClick={() => setIsOpen(false)}>Do košíku</Button>
          </Link>
        </HoverCardContent>
      </div>
    </HoverCard>
  );
};

export default Cart;
