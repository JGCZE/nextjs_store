import { TProducts } from "@/utils/types";
import { useCallback, useState } from "react";

interface IReturn {
  available: boolean;
  allProducts: Array<TProducts>;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
}

const useFilter = (products: Array<TProducts>): IReturn => {
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

  return { allProducts, available, setAvailable, onAvailable };
};

export default useFilter;
