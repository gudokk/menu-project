import { useMemo } from "react";

export function useFilteredProducts(products, search, activeCategory) {
  return useMemo(() => {
    return products.filter((product) => {
      const productName = product.Name ? product.Name.toLowerCase() : ''; // Используем Name вместо name

      return (
        (activeCategory === "Все" || product.category === activeCategory) &&
        productName.includes(search.toLowerCase())
      );
    });
  }, [products, search, activeCategory]);
}

