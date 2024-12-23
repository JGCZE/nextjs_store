import { TProducts } from "@/utils/types";
import { useCallback, useEffect, useState } from "react";
import { xor } from "lodash";

interface IReturn {
  available: boolean;
  selectedProducts: Array<TProducts>;
  setAvailable: (arg: boolean) => void;
  onAvailable: () => void;
  handleSizeChange: (arg: string) => void;
  handleCategoryChange: (arg: number) => void;
}

const useFilter = (allProducts: Array<TProducts>): IReturn => {
  const [selectedProducts, setFiltredProducts] =
    useState<Array<TProducts>>(allProducts);
  const [sizes, setSizes] = useState<Array<string>>([]);
  const [available, setAvailable] = useState<boolean>(false);
  const [categoryIds, setCategoryIds] = useState<Array<number>>([]); // pole čísel pro kategorie

  // udělám si centralizovanou funkci, které v sobě bude obsahovat podmíněné volání funkcí
  // zjednoduším jednotlivé setovací funkce, pouze na add a remove
  const applyFilters = useCallback(() => {
    let products = [...allProducts];

    if (available) {
      products.filter((prod) => prod.available == true);
    }

    if (categoryIds.length > 0) {
      products = products.filter((prod) =>
        categoryIds.includes(prod.categoryId)
      );
    }

    if (sizes.length > 0) {
      products = products.filter((prod) =>
        prod.sizes?.some((size) => sizes.includes(size))
      );
    }

    setFiltredProducts(products);
  }, [sizes, available, categoryIds, allProducts]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const onAvailable = () => {
    setAvailable(() => true);
  };

  const handleCategoryChange = (selectedCatIds: number) => {
    if (categoryIds.includes(selectedCatIds)) {
      setCategoryIds(xor(categoryIds, [selectedCatIds]));
    } else {
      setCategoryIds([...categoryIds, selectedCatIds]);
    }
  };

  const handleSizeChange = (sizeString: string) => {
    if (sizes.includes(sizeString)) {
      setSizes(xor(sizes, [sizeString]));
    } else {
      setSizes([...sizes, sizeString]);
    }
  };

  return {
    selectedProducts,
    available,
    setAvailable,
    onAvailable,
    handleSizeChange,
    handleCategoryChange,
  };
};

export default useFilter;
