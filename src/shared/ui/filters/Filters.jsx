import React from "react";
import styles from "./Filters.module.css";

export const Filters = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            activeCategory === category ? styles.active : ""
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
