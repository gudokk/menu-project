import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ui/MainPage.module.css";
import { SearchBar } from "../../shared/ui/search/SearchBar.jsx";
import { ProductCard } from "../../shared/ui/product-card/ProductCard.jsx";
import { Filters } from "../../shared/ui//filters/Filters.jsx";
import { Header } from "../../widgets/header/Header";
import { useCart } from "../../app/context/CartContext";
import { useFilteredProducts } from "../../features/ProductsFilter/useFilteredProducts";
import { products } from "../../features/products/Products.jsx";

function MainPage() {
  const navigate = useNavigate();
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
  const tableNumber = 7;
  const categories = ["Все", "Кофе", "Чай", "Десерты"];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProducts = useFilteredProducts(
    products,
    search,
    activeCategory
  );

  return (
    <div className={styles["main-page"]}>
      <div className={styles["main-page__header"]}>
        <Header
          tableNumber={7}
          cartCount={Object.values(cart).reduce((a, b) => a + b, 0)}
          onCartClick={() =>
            navigate("/basket", { state: { cart, products, tableNumber } })
          }
        />
      </div>
      <h1 className={styles["main-page__title"]}>Меню</h1>
      <div className={styles["main-page__search-bar"]}>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <Filters
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className={styles["main-page__products"]}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            count={cart[product.id] || 0}
            onAdd={() => handleAddToCart(product.id)}
            onRemove={() => handleRemoveFromCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
