import React from "react";
import styles from "./CartTableInfo.module.css";
import ProfileIcon from "../../assets/profile.svg";

export const CartTableInfo = ({ onClick }) => {
  return (
    <button className={styles["table-info__button"]} onClick={onClick}>
      <img src={ProfileIcon} alt="Profile" className={styles["table-info__button-icon"]} />
    </button>
  );
};
