import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import resolveStore from "@/utils/resolvers/resolveStore";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const GridProducts = ({ filtredProducts }: IProps) => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 gap-4">
      {filtredProducts.map((prod) => {
        const { available, image, price, itemName } = prod;
        return (
          <Card key={prod._id} className="max-w-60 hover:shadow-lg">
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
              <div className="font-bold text-md mt-2">
                {available ? (
                  <span className="flex justify-between">
                    <p className="text-green-700">skladem</p>
                    <p>{resolveStore(4)}</p>
                  </span>
                ) : (
                  <p className="text-red-600">nedostupné</p>
                )}
              </div>
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
