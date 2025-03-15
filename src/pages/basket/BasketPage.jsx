import React from "react";
import { BackButton } from "../../shared/ui/back-button/BackButton";
import { OrderButton } from "../../shared/ui/order-button/OrderButton";
import styles from "./ui/BasketPage.module.css";
import { ProductsInBasket } from "../../shared/ui/products-in-basket/ProductsInBasket";
import { CartTableInfo } from "../../shared/ui/cart-table-info/CartTableInfo";

export default function BasketPage() {
  const products = [
    { id: 1, name: "Латте", price: 150 },
    { id: 2, name: "Капучино", price: 160 },
    { id: 3, name: "Американо", price: 140 },
    { id: 4, name: "Эспрессо", price: 130 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton />
        <div className={styles.right}>
          <span className={styles.table}>Столик 75</span>
          <CartTableInfo />
        </div>
      </div>
      <ProductsInBasket products={products} className={styles.basketProducts} />
      <OrderButton />
    </div>
  );
}
