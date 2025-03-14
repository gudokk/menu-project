import React from "react";
import styles from "./TableInfo.module.css";
import ProfileIcon from "../../assets/profile.svg";

export const TableInfo = ({ tableNumber, onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        <img src={ProfileIcon} alt="Profile" className={styles.icon} />
      </button>
      <span className={styles.text}>cтолик {tableNumber}</span>
    </div>
  );
};
