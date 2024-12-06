import ProductContainer from "@/components/products/ProductContainer";
import { getProducts } from "@/utils/actions";

const Products = async ({}) => {
  const response = await getProducts();
  const products = JSON.parse(JSON.stringify(response));

  if (!!products)
    return (
      <section>
        <ProductContainer products={products} />
      </section>
    );
};

export default Products;
