import React from "react";

// Components
import ImagePreloader from "../common/ImagePreloader";

// CSS
import styles from "../../styles/addon/HeaderAddon.module.css";

const HeaderAddon = ({ title, backgroundImage }) => {
  return (
    <header
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ImagePreloader src={backgroundImage} />
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default HeaderAddon;
