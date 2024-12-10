import { TProducts } from "@/utils/types";
import { useCallback, useState } from "react";
import { xor } from "lodash";

interface IReturn {
  available: boolean;
  allProducts: Array<TProducts>;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
  handleSizeChange: (arg: string) => void;
  handleCategoryChange: (arg: number) => void;
}

const useFilter = (products: Array<TProducts>): IReturn => {
  const [allProducts, setFiltredProducts] =
    useState<Array<TProducts>>(products);
  const [sizes, setSizes] = useState<Array<string | undefined>>([]);
  const [available, setAvailable] = useState<boolean>(false);
  const [categoryIds, setCategoryIds] = useState<number>();

  // udělám si centralizovanou funkci, které v sobě bude obsahovat podmíněné volání funkcí
  // zjednoduším jednotlivé setovací funkce, pouze na add a remove
  const applyFilters = useCallback(() => {
    if (onAvailable) {
    }

    if (handleCategoryChange) {
    }

    if (handleSizeChange) {
    }
  }, [sizes, available, categoryIds]);

  useCallback(() => applyFilters(), [applyFilters]);

  const onAvailable = useCallback(() => {
    if (available == false) {
      const onlyAvailable = products.filter((prod) => prod.available != false);
      setFiltredProducts(onlyAvailable);
    } else {
      setFiltredProducts(products);
    }
  }, [available, products]);

  const handleCategoryChange = (categoryId: number) => {
    const foundedProducts = products.filter(
      (item) => item.categoryId === categoryId
    );
    console.log(foundedProducts);
    setFiltredProducts(...allProducts, foundedProducts);
  };

  const handleSizeChange = (sizeString: string) => {
    if (sizes.includes(sizeString)) {
      console.log("INCLUDES");
      const removeSize = sizes.filter((size) => size != sizeString);
      console.log("removeSize", removeSize);
      const removeClothes = allProducts.filter((prod) =>
        prod.sizes?.includes(!sizeString)
      );
      setSizes(xor(removeSize));
      setFiltredProducts(xor(removeClothes));
    } else {
      console.log("SETTING");
      const findClothesWithSize = allProducts.filter((prod) =>
        prod.sizes?.includes(sizeString)
      );
      const findSelectedSizes = findClothesWithSize?.flatMap(
        (cloth) => cloth.sizes
      );
      setSizes(xor(findSelectedSizes));
      setFiltredProducts(xor(findClothesWithSize));
    }
  };

  return {
    allProducts,
    available,
    setAvailable,
    onAvailable,
    handleSizeChange,
    handleCategoryChange,
  };
};

export default useFilter;
