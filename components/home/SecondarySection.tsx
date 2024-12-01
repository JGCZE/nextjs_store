import { getFeaturedProducts } from "@/utils/actions";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const SecondarySection = async () => {
  const featuredItem = await getFeaturedProducts();

  return (
    <div className="h-[450px] border-2 rounded-[50px] bg-gradient-to-t from-[#95ACCC] to-[#D4D1C2] mt-24 flex justify-between items-center">
      <div className="flex">
        {featuredItem.map((item) => {
          const { _id, price, image, itemName } = item;

          return (
            <Card
              className="w-52 ml-2 h-64 bg-transparent border-2 border-white"
              key={_id}
            >
              <CardContent>
                <div className="flex flex-col">
                  <Image alt="" src={image} width={120} height={40} />
                  <p>{itemName}</p>
                  <p>{price}</p>
                  <Link href={`/products/${_id}`}>
                    <Button variant="default">X</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div>XX</div>
    </div>
  );
};

export default SecondarySection;
