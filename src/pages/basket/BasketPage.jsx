
import React from "react";
import { useLocation } from "react-router-dom";
import { BackButton } from "../../shared/ui/back-button/BackButton";
import { OrderButton } from "../../shared/ui/order-button/OrderButton";
import styles from "./ui/BasketPage.module.css";
import { CartProducts } from "../../shared/ui/products-in-basket/ProductsInBasket";
import { CartTableInfo } from "../../shared/ui/cart-table-info/CartTableInfo";
import { useCart } from "../../app/context/CartContext";

export default function BasketPage() {
  const location = useLocation();
  const tableNumber = location.state?.tableNumber || "Неизвестно";  // Получаем tableNumber из состояния

  const { cart } = useCart(); // Получаем данные корзины из контекста
  const hasProducts = Object.values(cart).some((count) => count > 0); // Проверяем, есть ли товары в корзине

  return (
    <div className={styles["basket-page"]}>
      <div className={styles["basket-page__header"]}>
        <BackButton />
        <div className={styles["basket-page__table-info"]}>
          <span className={styles["basket-page__table-number"]}>Столик {tableNumber}</span>
          <CartTableInfo />
        </div>
      </div>
      {/* Отображаем выбранные товары в корзине */}
      <CartProducts products={location.state?.products || []} className={styles["basket-page__products"]} />
      {hasProducts && <OrderButton />}
    </div>
  );
}
