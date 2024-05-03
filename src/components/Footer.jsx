import React from "react";
import styles from "../styles/Footer.module.css";

// Icons
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerIcons}>
          <FaGithub className={styles.github} />
          <FaGoogle className={styles.google} />
          <FaInstagram className={styles.instagram} />
        </div>
        <div className={styles.footerText}>
          <ul>
            <li>Hem</li>
            <li>Om oss</li>
            <li>Användarvillkor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
