import React from "react";
import styles from "./BackButton.module.css";
import backIcon from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <img src={backIcon} alt="Назад" className={styles.icon} />
    </button>
  );
};
