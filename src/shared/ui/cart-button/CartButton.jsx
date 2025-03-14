import React from "react";
import styles from "./CartButton.module.css";
import cartIcon from "../../assets/basket.svg";

export const CartButton = ({ itemCount = 0, onCartClick }) => {
  return (
    <button className={styles.button} onClick={onCartClick}>
      <img src={cartIcon} alt="Cart" className={styles.icon} />
      {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
    </button>
  );
};
