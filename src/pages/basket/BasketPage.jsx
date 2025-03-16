import React from "react";
import { BackButton } from "../../shared/ui/back-button/BackButton";
import { OrderButton } from "../../shared/ui/order-button/OrderButton";
import styles from "./ui/BasketPage.module.css";
import { ProductsInBasket } from "../../shared/ui/products-in-basket/ProductsInBasket";
import { CartTableInfo } from "../../shared/ui/cart-table-info/CartTableInfo";
import { products } from "../../features/products/Products.jsx";

export default function BasketPage() {
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
