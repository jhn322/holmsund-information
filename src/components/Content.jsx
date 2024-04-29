import React from "react";
import styles from "../styles/Content.module.css";

const Content = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <div className={styles.content}>
          <article className={styles.textContent}>
            <h2>Holmsund, Umeå</h2>
            <h3>DET HÄR ÄR EN LÅNG UNDERRUBRIK. COOLT.</h3>
            <p className={styles.paragraphContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus non nesciunt dolor aut, veniam mollitia quaerat
              aperiam, obcaecati sit optio architecto itaque repellendus
              cupiditate autem minima perferendis tenetur a vitae!
            </p>
          </article>
        </div>
      </div>
      <aside className={styles.imgContainer}>
        <div className={styles.imgBackground}>
          <div className={styles.imgBackCircle}>
            <div className={styles.imgFrontCircle}></div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Content;
