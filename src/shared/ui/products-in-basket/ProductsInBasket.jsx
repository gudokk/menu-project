import React from "react";
import styles from "./ProductsInBasket.module.css";
import { ProductCard } from "../product-card/ProductCard";
import { useCart } from "../../../app/context/CartContext";

export const CartProducts = ({ products, className = "" }) => {
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
  const selectedProducts = products.filter((product) => cart[product.ID] > 0); // Фильтруем продукты по наличию в корзине

  return (
    <div className={`${styles["products-in-basket"]} ${className}`}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ProductCard
            key={product.ID} // Используем уникальный ID
            Name={product.Name}
            Count={cart[product.ID]}
            onAdd={() => handleAddToCart(product.ID)}
            onRemove={() => handleRemoveFromCart(product.ID)}
            className={styles["products-in-basket__card"]}
            imageClassName={styles["products-in-basket__image-placeholder"]}
            DesriptionClassName={styles["products-in-basket__footer"]}
          />
        ))
      ) : (
        <span className={styles["products-in-basket__empty-cart"]}>Ваша корзина пуста.</span>
      )}
    </div>
  );
};
