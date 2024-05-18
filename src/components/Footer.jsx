import React from "react";
import styles from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";

// Icons
import { FaGithub, FaReact, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerIcons}>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub website"
          >
            <FaGithub className={styles.github} />
          </a>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            alt="Google website"
          >
            <FaReact className={styles.react} />
          </a>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            alt="React website"
          >
            <FaInstagram className={styles.instagram} />
          </a>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            alt="Facebook website"
          >
            <FaFacebook className={styles.facebook} />
          </a>
        </div>
        <div className={styles.footerText}>
          <ul>
            <NavLink to="/">
              <li>Hem</li>
            </NavLink>
            <NavLink to="/om-oss">
              <li>Om oss</li>
            </NavLink>
            <li>Kontakta oss</li>
            <li>Användarvillkor</li>
            <li>Cookiepolicy</li>
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
