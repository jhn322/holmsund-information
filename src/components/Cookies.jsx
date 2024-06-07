import React, { useState } from "react";

// CSS
import styles from "../styles/Cookies.module.css";

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cookiesContainer}>
      <p>Chocolate chip cookies or vanilla?</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default Cookies;
