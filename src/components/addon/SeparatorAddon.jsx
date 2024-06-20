import React from "react";

// CSS
import styles from "../../styles/addon/SeparatorAddon.module.css";

const Separator = () => {
  return (
    <section>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorFirst}>
          <h2>Mer att upptäcka</h2>
        </div>
      </div>
    </section>
  );
};

export default Separator;
