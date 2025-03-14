import React, { useState } from "react";
import styles from "./OrderButton.module.css";
import { OrderModal } from "../../../features/order-modal/OrderModal";

export const OrderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={styles.OrderButton}
        onClick={() => setIsModalOpen(true)}
      >
        <span className={styles.text}>Заказать</span>
      </button>
      {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
