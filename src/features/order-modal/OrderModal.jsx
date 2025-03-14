import React from "react";
import styles from "./OrderModal.module.css";
import OrderIcon from "../../shared/assets/order-icon.png";

export const OrderModal = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.text}>Ваш заказ принят в работу!</p>
        <img src={OrderIcon} alt="OrderIcon" className={styles.icon} />
      </div>
    </div>
  );
};
