import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Available from "./Available";
import { FaStar } from "react-icons/fa";
import { Badge } from "../ui/badge";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const GridProducts = ({ filtredProducts }: IProps) => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-2 gap-4">
      {filtredProducts.map((prod) => {
        const { available, image, price, itemName, reviews, sizes } = prod;
        return (
          <Card key={prod._id} className="max-w-60 hover:shadow-lg">
            <CardContent className="relative h-72 rounded-t-xl overflow-hidden min-w-60 ">
              <Image src={image} alt="" fill className="object-cover" />
            </CardContent>
            <CardTitle className="p-4">
              <div>{itemName}</div>
            </CardTitle>
            <CardDescription className="px-4">
              <div className="flex">
                <p className="mr-2">Velikosti:</p>
                {sizes?.map((size, index) => {
                  return (
                    <Badge variant="outline" key={index} className="mr-1">
                      {size}
                    </Badge>
                  );
                })}
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem obcaecati voluptates dolores non repellat autem
              </p>
              <div className="flex mt-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="ml-2 mr-6 font-bold">
                  ( {reviews?.length || "zatím nehodnoceno"} )
                </span>
                <div className="font-bold text-md">
                  <Available available={available} amount={4} />
                </div>
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
