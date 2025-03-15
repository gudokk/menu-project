import React from "react";
import styles from "./ProductsInBasket.module.css";
import { ProductCard } from "../product-card/ProductCard";
import { useCart } from "../../../app/context/CartContext";

export const ProductsInBasket = ({ products, className = "" }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const selectedProducts = products.filter((product) => cart[product.id] > 0);

  return (
    <div className={`${styles.container} ${className}`}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            count={cart[product.id]}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
            className={styles.basketCard}
            imageClassName={styles.basketImagePlaceholder}
            DesriptionClassName={styles.footerBasket}
          >
            <div className={styles.imagePlaceholder} />
            <div className={styles.footer}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.description}>описание</p>
            </div>
            <div className={styles.controls}>
              <button
                className={styles.button}
                onClick={() => removeFromCart(product.id)}
              >
                ➖
              </button>
              <span className={styles.count}>{cart[product.id]}</span>
              <button
                className={styles.button}
                onClick={() => addToCart(product.id)}
              >
                ➕
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        <p>Ваша корзина пуста.</p>
      )}
    </div>
  );
};
