"use client";
import { TProducts } from "@/utils/types";
import React, { useCallback, useMemo } from "react";
import Filter from "./Filter";
import ListProducts from "./ListProducts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GridProducts from "./GridProducts";
import { Button } from "../ui/button";
import useFilter from "@/hooks/useFilter";

interface IProps {
  products: Array<TProducts>;
}

const ProductContainer = ({ products }: IProps) => {
  const {
    allProducts,
    available,
    setAvailable,
    onAvailable,
    handleSizeChange,
  } = useFilter(products);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLayoutChange = useCallback(
    (layoutType: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("layout", layoutType);
      return params.toString();
    },
    [searchParams]
  );

  const layoutType = useMemo(() => searchParams.get("layout"), [searchParams]);

  return (
    <div className="flex">
      <div className="flex flex-col border-r-2 mr-4 border-red-300 mb-10 min-w-80 px-4">
        <Filter
          available={available}
          setAvailable={setAvailable}
          onAvailable={onAvailable}
          handleSizeChange={handleSizeChange}
        />
        <div>
          <Button
            onClick={() => {
              router.push(pathname + "?" + handleLayoutChange("grid"));
            }}
          >
            Grid
          </Button>
          <Button
            onClick={() => {
              router.push(pathname + "?" + handleLayoutChange("list"));
            }}
          >
            List
          </Button>
        </div>
      </div>

      <div className="w-full">
        {layoutType === "grid" ? (
          <GridProducts filtredProducts={allProducts} />
        ) : (
          <ListProducts filtredProducts={allProducts} />
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
