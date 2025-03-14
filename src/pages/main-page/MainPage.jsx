import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ui/MainPage.module.css";
import { SearchBar } from "../../shared/ui/search/SearchBar.jsx";
import { ProductCard } from "../../shared/ui/product-card/ProductCard.jsx";
import { Filters } from "../../shared/ui//filters/Filters.jsx";
import { Header } from "../../widgets/header/Header";
import { useCart } from "../../app/context/CartContext";

function MainPage() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const categories = ["Все", "Кофе", "Чай", "Десерты"];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  const tableNumber = 7;
  const products = [
    { id: 1, name: "Латте", price: 150 },
    { id: 2, name: "Капучино", price: 160 },
    { id: 3, name: "Американо", price: 140 },
    { id: 4, name: "Эспрессо", price: 130 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "Все" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id) => {
    setCart((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          tableNumber={7}
          cartCount={Object.values(cart).reduce((a, b) => a + b, 0)}
          onCartClick={() => navigate("/basket", { state: { cart, products } })}
        />
      </div>
      <h1 className={styles.title}>Меню</h1>
      <SearchBar value={search} onChange={setSearch} />
      <Filters
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            count={cart[product.id] || 0}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
