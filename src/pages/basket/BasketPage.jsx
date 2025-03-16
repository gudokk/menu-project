import React from "react";
import { useLocation } from "react-router-dom";
import { BackButton } from "../../shared/ui/back-button/BackButton";
import { OrderButton } from "../../shared/ui/order-button/OrderButton";
import styles from "./ui/BasketPage.module.css";
import { ProductsInBasket } from "../../shared/ui/products-in-basket/ProductsInBasket";
import { CartTableInfo } from "../../shared/ui/cart-table-info/CartTableInfo";
import { useCart } from "../../app/context/CartContext";
import { products } from "../../features/products/Products.jsx";

export default function BasketPage() {
  const location = useLocation();
  const tableNumber = location.state?.tableNumber || "Неизвестно";

  const { cart } = useCart();
  const hasProducts = Object.values(cart).some((count) => count > 0);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton />
        <div className={styles.right}>
          <span className={styles.table}>Столик {tableNumber}</span>
          <CartTableInfo />
        </div>
      </div>
      <ProductsInBasket products={products} className={styles.basketProducts} />
      {hasProducts && <OrderButton />}
    </div>
  );
}
