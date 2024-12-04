import ProductContainer from "@/components/products/ProductContainer";
import { getProducts } from "@/utils/actions";

const Products = async ({}) => {
  const { success } = await getProducts();
  const products = JSON.parse(JSON.stringify(success));

  if (success)
    return (
      <section>
        <ProductContainer products={products} />
      </section>
    );
};

export default Products;
