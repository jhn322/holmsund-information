import React from "react";

// CSS
import styles from "../../styles/addon/SeparatorAddon.module.css";

const Separator = () => {
  return (
    <aside>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorFirst}></div>
      </div>
    </aside>
  );
};

export default Separator;
