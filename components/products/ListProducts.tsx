import { TProducts } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Available from "./Available";
import { FaStar } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { handleAddToCart } from "@/lib/actions";

interface IProps {
  filtredProducts: Array<TProducts>;
}

const ListProducts = ({ filtredProducts }: IProps) => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 px-4">
      {filtredProducts.map((prod) => {
        const { _id, available, image, price, itemName, reviews, sizes } = prod;
        return (
          <Link href={`/products/${_id}`} key={prod._id}>
            <Card className="flex hover:shadow-lg">
              <CardContent className="relative  rounded-l-xl overflow-hidden min-w-40 ">
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
                  </p>
                  <div>
                    <p className="font-bold mt-2">Velikosti:</p>
                    {!!sizes &&
                      sizes?.map((size, index) => {
                        return (
                          <Badge
                            variant="outline"
                            key={index}
                            className="mr-1 mt-1"
                          >
                            {size}
                          </Badge>
                        );
                      })}
                  </div>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400 text-xl" />
                    <span className="ml-2 mr-6 font-bold">
                      ( {reviews?.length || "zatím nehodnoceno"} )
                    </span>
                    <div className="font-bold flex flex-col justify-between ml-2">
                      <Available available={available} amount={4} />
                    </div>
                  </div>
                  <p className="text-black font-extrabold text-lg my-4 flex justify-between">
                    {price} Kč
                    <Button onClick={() => handleAddToCart(_id)}>
                      Do košíku
                    </Button>
                    ;
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
