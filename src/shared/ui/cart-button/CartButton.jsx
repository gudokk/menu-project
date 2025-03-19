import React from "react";
import styles from "./CartButton.module.css";
import cartIcon from "../../assets/basket.svg";

export const CartButton = ({ itemCount = 0, onCartClick }) => {
  return (
    <button className={styles["cart-button"]} onClick={onCartClick}>
      <img src={cartIcon} alt="Cart" className={styles["cart-button__icon"]} />
      {itemCount > 0 && <span className={styles["cart-button__badge"]}>{itemCount}</span>}
    </button>
  );
};
