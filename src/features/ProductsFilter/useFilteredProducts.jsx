import { useMemo } from "react";

export function useFilteredProducts(products, search, activeCategory) {
  return useMemo(() => {
    return products.filter(
      (product) =>
        (activeCategory === "Все" || product.category === activeCategory) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search, activeCategory]);
}
