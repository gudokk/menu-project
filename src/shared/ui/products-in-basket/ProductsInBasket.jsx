import React from "react";
import styles from "./ProductsInBasket.module.css";
import { ProductCard } from "../product-card/ProductCard";
import { useCart } from "../../../app/context/CartContext";

export const ProductsInBasket = ({ products, className = "" }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const selectedProducts = products.filter((product) => cart[product.id] > 0);

  return (
    <div className={`${styles["products-in-basket"]} ${className}`}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            count={cart[product.id]}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
            className={styles["products-in-basket__card"]}
            imageClassName={styles["products-in-basket__image-placeholder"]}
            DesriptionClassName={styles["products-in-basket__footer"]}
          >
            <div className={styles["products-in-basket__image-placeholder"]} />
            <div className={styles["products-in-basket__footer"]}>
              <p className={styles["products-in-basket__name"]}>{product.name}</p>
              <p className={styles["products-in-basket__description"]}>описание</p>
            </div>
            <div className={styles["products-in-basket__controls"]}>
              <button
                className={styles["products-in-basket__button"]}
                onClick={() => removeFromCart(product.id)}
              >
                ➖
              </button>
              <span className={styles["products-in-basket__count"]}>{cart[product.id]}</span>
              <button
                className={styles["products-in-basket__button"]}
                onClick={() => addToCart(product.id)}
              >
                ➕
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        // <p>Ваша корзина пуста.</p>
        <span className={styles["products-in-basket__empty-cart"]}>Ваша корзина пуста.</span>
      )}
    </div>
  );
};
