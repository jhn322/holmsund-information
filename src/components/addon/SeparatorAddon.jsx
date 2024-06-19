import React from "react";

// CSS
import styles from "../../styles/addon/SeparatorAddon.module.css";

const Separator = () => {
  return (
    <section>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorFirst}>
          <h2>Rekommenderat för dig</h2>
        </div>
      </div>
    </section>
  );
};

export default Separator;
