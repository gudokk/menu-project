import React from "react";
import styles from "./ProductCard.module.css";
import Plus from "../../assets/plus.svg";
import MinusDark from "../../assets/minus-dark.svg";
import PlusDark from "../../assets/plus-dark.svg";
import PropTypes from "prop-types";

export const ProductCard = ({
  Name,
  onAdd,
  onRemove,
  Count,
  className = "",
  imageClassName = "",
  DesriptionClassName = "",
}) => {
  return (
    <div className={`${styles["product-card"]} ${className}`}>
      <div className={`${styles["product-card__image-placeholder"]} ${imageClassName}`} />
      <div className={`${styles["product-card__footer"]} ${DesriptionClassName}`}>
        <h3 className={styles["product-card__name"]}>{Name}</h3>
        <div className={`${styles["product-card__controls"]} ${Count > 0 ? styles["product-card__controls--active"] : ""}`}>
          {Count > 0 ? (
            <div className={styles["product-card__counter"]}>
              <button
                onClick={onRemove}
                className={`${styles["product-card__button"]} ${styles["product-card__button--dark"]}`}
              >
                <img src={MinusDark} alt="Minus" className={styles["product-card__icon"]} />
              </button>
              <span className={styles["product-card__count"]}>{Count}</span>
              <button
                onClick={onAdd}
                className={`${styles["product-card__button"]} ${styles["product-card__button--dark"]}`}
              >
                <img src={PlusDark} alt="Plus" className={styles["product-card__icon"]} />
              </button>
            </div>
          ) : (
            <button onClick={onAdd} className={styles["product-card__button"]}>
              <img src={Plus} alt="Plus" className={styles["product-card__icon"]} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  Name: PropTypes.string.isRequired,
  Count: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
