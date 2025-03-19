import React from "react";
import styles from "./TableInfo.module.css";
import ProfileIcon from "../../assets/profile.svg";

export const TableInfo = ({ tableNumber, onClick }) => {
  return (
    <div className={styles["table-info"]}>
      <button className={styles["table-info__button"]} onClick={onClick}>
        <img src={ProfileIcon} alt="Profile" className={styles["table-info__button-icon"]} />
      </button>
      <span className={styles["table-info__text"]}>cтолик {tableNumber}</span>
    </div>
  );
};
