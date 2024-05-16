import React from "react";
import styles from "../styles/Footer.module.css";

// Icons
import { FaGithub, FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerIcons}>
          <FaGithub className={styles.github} />
          <FaGoogle className={styles.google} />
          <FaInstagram className={styles.instagram} />
          <FaFacebook className={styles.facebook} />
        </div>
        <div className={styles.footerText}>
          <ul>
            <li>Hem</li>
            <li>Om oss</li>
            <li>Användarvillkor</li>
          </ul>
          <div className={styles.footerYear}>
            <p>
              &copy; {currentYear} Holmsund Information. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
