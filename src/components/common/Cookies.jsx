import React, { useState } from "react";

// CSS
import styles from "../../styles/common/Cookies.module.css";

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
  };

  const handleDeny = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <main className={styles.cookiesContainer}>
      <p>Chocolate chip cookies or vanilla?</p>
      <button className={styles.deny} onClick={handleDeny}>
        Deny
      </button>
      <button className={styles.accept} onClick={handleAccept}>
        Accept
      </button>
    </main>
  );
};

export default Cookies;
