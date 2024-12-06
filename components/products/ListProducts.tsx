import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import resolveStore from "@/utils/resolvers/resolveStore";
import { Button } from "../ui/button";
import Link from "next/link";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const ListProducts = ({ filtredProducts }: IProps) => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 px-4">
      {filtredProducts.map((prod) => {
        const { _id, available, image, price, itemName } = prod;
        return (
          <Link href={`/products/${_id}`} key={prod._id}>
            <Card className="flex hover:shadow-lg">
              <CardContent className="relative h-56 rounded-l-xl overflow-hidden min-w-40 ">
                <Image src={image} alt="" fill className="object-cover" />
              </CardContent>
              <div>
                <CardTitle className="p-4">
                  <div>{itemName}</div>
                </CardTitle>
                <CardDescription className="px-4">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem obcaecati voluptates dolores non repellat autem
                    dolorum. Molestiae sit officia error similique facilis
                    tempora velit. Odit molestiae quisquam itaque quae aliquam.
                  </p>
                  <div className="font-bold flex flex-col justify-between my-2">
                    {available ? (
                      <span className="flex justify-between mt-2">
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
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ListProducts;
