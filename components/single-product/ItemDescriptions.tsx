import { TProducts } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Available from "../products/Available";
import { Button } from "../ui/button";

const ItemDescriptions = ({ item }: { item: TProducts }) => {
  const { _id, available, image, itemName, price } = item;

  return (
    <div className="mt-10">
      <div className="flex" key={_id}>
        <div className="relative w-1/2 min-h-[560px]">
          <Image src={image} fill alt="" className="object-contain" />
        </div>
        <div className="w-1/2 px-14">
          <p className="text-2xl text-gray-600 font-bold">
            {itemName} ICON ICON
          </p>
          <p className="text-lg font-bold my-6">price: {price}</p>
          <p className="text-gray-600 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam
            maiores enim natus eius suscipit doloribus excepturi a nesciunt
            voluptas. Harum consequuntur delectus, perspiciatis a eius
            asperiores voluptates adipisci repudiandae? Lorem ipsum dolor sit
          </p>
          <Available available={available} amount={4} />
          {/* TOAST po přidání do košíku */}

          <Button className="mt-6">Přidat do košíku</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescriptions;
