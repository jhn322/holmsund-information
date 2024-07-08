import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/MissingPage.module.css";
import NotFoundImage from "../../assets/other/404.png";

const MissingPage = () => {
  return (
    <main className={styles.MissingContainer}>
      <img
        src={NotFoundImage}
        alt="404 Not Found"
        className={styles.MissingImage}
      />
      <p className={styles.MissingText}>
        Oops. Vi kunde inte hitta sidan du letade efter :(
      </p>
      <button className={styles.MissingBtn}>
        <Link to="/" className={styles.LinkHome}>
          Gå tillbaka hem
        </Link>
      </button>
    </main>
  );
};

export default MissingPage;
