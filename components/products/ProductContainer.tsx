"use client";
import { TProducts } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import Filter from "./Filter";
import Products from "../../app/products/page";

interface IProps {
  products: Array<TProducts>;
}

const ProductContainer = ({ products }: IProps) => {
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [hello, setHello] = useState("ahoj z use statu");
  // custom hook na filtrování

  return (
    <div>
      {/* type of layout */}
      <Filter
        hello={hello}
        setFiltredProducts={setFiltredProducts}
        filtredProducts={filtredProducts}
      />

      {/* Dvě kompontny list and grid */}
      {/* Grid product */}
      {/* List product */}
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

export default ProductContainer;
