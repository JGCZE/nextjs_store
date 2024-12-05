import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const ListProducts = ({ filtredProducts }: IProps) => {
  return (
    <div>
      LIST
      {filtredProducts.map((prod) => {
        const { image, price, itemName } = prod;
        return (
          <div key={prod._id} className="border-2 border-black">
            <Image src={image} alt="" width={60} height={60} />
            <div>{itemName}</div>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
