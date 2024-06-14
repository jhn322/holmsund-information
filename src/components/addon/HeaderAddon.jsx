import React from "react";

// CSS
import styles from "../../styles/addon/HeaderAddon.module.css";

const HeaderAddon = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  return (
    <header className={styles.header} style={headerStyle}>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default HeaderAddon;
