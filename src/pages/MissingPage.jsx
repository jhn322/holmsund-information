import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MissingPage.module.css";

// Missing page component
const MissingPage = () => {
  return (
    <main className={styles.MissingContainer}>
      <p className={styles.MissingText}>
        Oops. Vi kunde inte hitta sidan du letade efter :(
      </p>
      {/* Go Home */}
      <button className={styles.MissingBtn}>
        <Link to="/" className={styles.LinkHome}>
          Gå tillbaka hem
        </Link>
      </button>
    </main>
  );
};

export default MissingPage;
