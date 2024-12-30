import ProductContainer from "@/components/products/ProductContainer";
import { getProducts } from "@/lib/actions";

const Products = async ({}) => {
  const response = await getProducts();
  const allProducts = JSON.parse(JSON.stringify(response));

  if (!!allProducts)
    return (
      <section>
        <ProductContainer allProducts={allProducts} />
      </section>
    );
};

export default Products;
