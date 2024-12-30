import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { discountLinks } from "@/lib/links";
import { getFeaturedProducts } from "@/lib/actions";

const SecondarySection = async () => {
  const featuredItem = await getFeaturedProducts();

  return (
    <div className="h-[450px] rounded-[50px] bg-gradient-to-t from-[#95ACCC] to-[#D4D1C2] mt-24 flex justify-between items-center">
      <div className="flex h-80">
        {featuredItem.map((item) => {
          const { _id, price, image } = item;

          return (
            <Card className="w-52 ml-6 bg-transparent pt-6" key={_id}>
              <CardContent>
                <div className="flex flex-col items-center">
                  <Image
                    alt=""
                    src={image}
                    width={170}
                    height={140}
                    className="rounded-lg hover:scale-110 hover:opacity-80 hover:transition hover:duration-500"
                  />
                  <div className="flex justify-between w-full items-center mt-4">
                    <p className="font-extrabold">$ {price}</p>
                    <Link href={`/products/${_id}`}>
                      <Button variant="default" className="font-extrabold">
                        Add to cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex h-80">
        {discountLinks.map((discount, index) => {
          const { label, href, images } = discount;
          return (
            <Link href={href} key={index} className="row-span-2 col-span-1">
              <Card className="w-52 mr-8 py-6">
                <CardContent>
                  <p className="text-2xl mb-8 font-extrabold">{label}</p>
                  <Image src={images} width={150} height={170} alt="" />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SecondarySection;
