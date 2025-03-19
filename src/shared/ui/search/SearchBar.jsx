import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search.svg";

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles["search-bar"]}>
      <img src={SearchIcon} alt="Search" className={styles["search-bar__icon"]} />
      <input
        type="text"
        className={styles["search-bar__input"]}
        placeholder="Поиск"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
