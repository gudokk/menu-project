import React from "react";
import styles from "./CartTableInfo.module.css";
import ProfileIcon from "../../assets/profile.svg";

export const CartTableInfo = ({ tableNumber, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={ProfileIcon} alt="Profile" className={styles.icon} />
    </button>
  );
};
