import React from "react";
import styles from "./Filters.module.css";

export const Filters = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className={styles["filters"]}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles["filters__button"]} ${
            activeCategory === category ? styles["filters__button--active"] : ""
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
