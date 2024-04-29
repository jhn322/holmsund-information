import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MissingPage.module.css";

const MissingPage = () => {
  return (
    <div className={styles.MissingContainer}>
      <p className={styles.MissingText}>
        Oops. We couldn't find the page you are looking for...
      </p>
      <Link to="/" className={styles.MissingBtn}>
        Go Back Home
      </Link>
    </div>
  );
};

export default MissingPage;
