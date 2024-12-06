import { TProducts } from "@/utils/types";
import Image from "next/image";
import BreadCrumbs from "./BreadCrumbs";

interface IProps {
  item: Array<TProducts>;
}

const ItemSection = ({ item }: IProps) => {
  return (
    <article className="px-[2.5vw] xl:px-0">
      <BreadCrumbs name={item[0].itemName} />
      {item.map((prod) => {
        const { available, _id, itemName } = prod;
        return (
          <div className="flex" key={prod._id}>
            <div className="relative w-60 h-60">
              <Image src={prod.image} fill alt="" />
            </div>
            <div className="">
              <p>{itemName}</p>
            </div>
          </div>
        );
      })}
      {/* Reviews */}
    </article>
  );
};

export default ItemSection;
