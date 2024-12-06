import ItemSection from "@/components/single-product/ItemSection";
import { getItem } from "@/utils/actions";

const page = async ({ params }: { params: { id: string } }) => {
  const item = await getItem(params.id);

  return (
    <section>
      <ItemSection item={item} />
    </section>
  );
};

export default page;
