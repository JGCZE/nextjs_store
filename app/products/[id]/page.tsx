import ItemSection from "@/components/single-product/ItemSection";
import { getItem } from "@/lib/actions";

const page = async ({ params }: { params: { id: string } }) => {
  const itemId = (await params).id;
  const item = await getItem(itemId);
  const products = JSON.parse(JSON.stringify(item));

  return (
    <section>
      <ItemSection item={products} />
    </section>
  );
};

export default page;
