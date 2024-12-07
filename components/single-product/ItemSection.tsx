import { TProducts } from "@/utils/types";
import BreadCrumbs from "./BreadCrumbs";
import ItemDescriptions from "./ItemDescriptions";
import ItemReviews from "./ItemReviews";

const ItemSection = ({ item }: { item: TProducts }) => {
  if (!item) {
    return (
      <p>No item available.</p>
    ); /* TODO omlouváme se produt není dostupný */
  }

  const { itemName, reviews } = item;

  return (
    <article className="px-[2.5vw] xl:px-0">
      <BreadCrumbs name={itemName} />

      <ItemDescriptions item={item} />

      {reviews && <ItemReviews reviewsIds={reviews} />}
    </article>
  );
};

export default ItemSection;
