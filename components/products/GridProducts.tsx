import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import resolveStore from "@/utils/resolveStore";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const GridProducts = ({ filtredProducts }: IProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {filtredProducts.map((prod) => {
        const { image, price, itemName } = prod;
        return (
          <Card key={prod._id} className="max-w-60">
            <CardContent className="relative h-80 rounded-t-xl overflow-hidden min-w-60 ">
              <Image src={image} alt="" fill className="object-cover" />
            </CardContent>
            <CardTitle className="p-4">
              <div>{itemName}</div>
            </CardTitle>
            <CardDescription className="px-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem obcaecati voluptates dolores non repellat autem
                dolorum. Molestiae sit officia error similique facilis tempora
                velit. Odit molestiae quisquam itaque quae aliquam.
              </p>
              <p className="font-bold flex justify-between my-2">
                skladem
                <span>{resolveStore(4)}</span>
              </p>
              <p className="text-black font-extrabold text-lg my-4 flex justify-between">
                {price} Kč
                <Button>Add to cart</Button>
              </p>
            </CardDescription>
          </Card>
        );
      })}
    </div>
  );
};

export default GridProducts;
