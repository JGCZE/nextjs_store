import { TProducts } from "@/utils/types";
import { useCallback, useState } from "react";
import { xor } from "lodash";

interface IReturn {
  available: boolean;
  allProducts: Array<TProducts>;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
  handleSizeChange: (arg: string) => void;
}

const useFilter = (products: Array<TProducts>): IReturn => {
  const [sizes, setSizes] = useState<Array<string | undefined>>([]);
  const [allProducts, setFiltredProducts] = useState(products);
  const [available, setAvailable] = useState<boolean>(false);

  const onAvailable = useCallback(() => {
    if (available == false) {
      const onlyAvailable = products.filter((prod) => prod.available != false);
      setFiltredProducts(onlyAvailable);
    } else {
      setFiltredProducts(products);
    }
  }, [available, products]);

  const handleSizeChange = (sizeString: string) => {
    if (sizes.includes(sizeString)) {
      console.log("INCLUDES");
      const removeSize = sizes.filter((size) => size != sizeString);
      const removeClothes = allProducts.filter((prod) =>
        prod.sizes?.includes(!sizeString)
      );
      setSizes(xor(removeSize));
      setFiltredProducts(xor(removeClothes));
    } else {
      console.log("SETTING");
      const findClothesWithSize = products.filter((prod) =>
        prod.sizes?.includes(sizeString)
      );
      const findSelectedSizes = findClothesWithSize?.flatMap(
        (cloth) => cloth.sizes
      );
      setSizes(xor(findSelectedSizes));
      setFiltredProducts(xor(findClothesWithSize));
    }
  };
  console.log("allProducrs", allProducts);

  return {
    allProducts,
    available,
    setAvailable,
    onAvailable,
    handleSizeChange,
  };
};

export default useFilter;
