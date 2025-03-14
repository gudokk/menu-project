import React from "react";
import styles from "./Header.module.css";
import { CartButton } from "../../shared/ui/cart-button/CartButton";
import { TableInfo } from "../../shared/ui/table-info/TableInfo";

export const Header = ({ tableNumber, cartCount, onCartClick }) => {
  return (
    <header className={styles.header}>
      <TableInfo tableNumber={tableNumber} />
      <CartButton itemCount={cartCount} onCartClick={onCartClick} />{" "}
    </header>
  );
};
