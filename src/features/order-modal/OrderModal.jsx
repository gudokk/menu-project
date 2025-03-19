import React from "react";
import styles from "./OrderModal.module.css";
import OrderIcon from "../../shared/assets/order-icon.png";

export const OrderModal = ({ onClose }) => {
  return (
    <div className={styles["order-modal"]} onClick={onClose}>
      <div className={styles["order-modal__content"]} onClick={(e) => e.stopPropagation()}>
        <p className={styles["order-modal__text"]}>Ваш заказ принят в работу!</p>
        <img src={OrderIcon} alt="OrderIcon" className={styles["order-modal__icon"]} />
      </div>
    </div>
  );
};
