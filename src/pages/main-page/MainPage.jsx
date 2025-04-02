import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ui/MainPage.module.css";
import { SearchBar } from "../../shared/ui/search/SearchBar.jsx";
import { ProductCard } from "../../shared/ui/product-card/ProductCard.jsx";
import { Filters } from "../../shared/ui/filters/Filters.jsx";
import { Header } from "../../widgets/header/Header";
import { useCart } from "../../app/context/CartContext";
import { useFilteredProducts } from "../../features/ProductsFilter/useFilteredProducts";

function MainPage() {
  const navigate = useNavigate();
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
  const tableNumber = 7;
  const categories = ["Все", "Кофе", "Чай", "Десерты"];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  const [products, setProducts] = useState([]);  // Состояние для продуктов
  const [loading, setLoading] = useState(true);  // Состояние загрузки
  const [error, setError] = useState(null);  // Состояние для ошибок

  // Функция для получения продуктов с бекенда
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("api/products");
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке данных: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useFilteredProducts(products, search, activeCategory);

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
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {!loading && !error && filteredProducts.map((product) => (
          <ProductCard
            key={product.ID} // Используем уникальный ID
            Name={product.Name}
            Count={cart[product.ID] || 0}
            onAdd={() => handleAddToCart(product.ID)}
            onRemove={() => handleRemoveFromCart(product.ID)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
