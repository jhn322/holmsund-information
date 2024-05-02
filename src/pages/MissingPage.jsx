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
      <Link to="/" className={styles.MissingBtn}>
        Gå tillbaka hem
      </Link>
    </main>
  );
};

export default MissingPage;
