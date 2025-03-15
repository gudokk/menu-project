import React from "react";
import styles from "./ProductCard.module.css";
import Plus from "../../assets/plus.svg";
import MinusDark from "../../assets/minus-dark.svg";
import PlusDark from "../../assets/plus-dark.svg";

export const ProductCard = ({
  name,
  onAdd,
  onRemove,
  count,
  className = "",
  imageClassName = "",
  DesriptionClassName = "",
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={`${styles.imagePlaceholder} ${imageClassName}`} />
      <div className={`${styles.footer} ${DesriptionClassName}`}>
        <h3 className={styles.name}>{name}</h3>
        <div className={`${styles.controls} ${count > 0 ? styles.active : ""}`}>
          {count > 0 ? (
            <div className={styles.counter}>
              <button
                onClick={onRemove}
                className={`${styles.button} ${styles.darkButton}`}
              >
                <img src={MinusDark} alt="Minus" className={styles.icon} />
              </button>
              <span className={styles.count}>{count}</span>
              <button
                onClick={onAdd}
                className={`${styles.button} ${styles.darkButton}`}
              >
                <img src={PlusDark} alt="Plus" className={styles.icon} />
              </button>
            </div>
          ) : (
            <button onClick={onAdd} className={styles.button}>
              <img src={Plus} alt="Plus" className={styles.icon} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
