import React from "react";
import { NavLink } from "react-router-dom";
import { trackFooterElementClick } from "../analytics/common";
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import styles from "../../styles/common/Footer.module.css";
import logo from "../../assets/logo/navLogo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Google Analytics
  const handleElementClick = (label, url) => {
    trackFooterElementClick("link", label, url);
  };

  return (
    <section className={styles.footerContainer}>
      <article className={styles.footerInner}>
        <aside className={styles.logoSection}>
          <NavLink
            to="/"
            className={styles.logoContainer}
            onClick={() => handleElementClick("Logo", window.location.href)}
            aria-label="Home"
          >
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>
        </aside>
        <section className={styles.footerIcons}>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleElementClick("GitHub", "https://github.com/jhn322")
            }
            aria-label="GitHub"
          >
            <FaGithub className={styles.github} />
            <div className={styles.iconsText}>
              <p>GitHub</p>
            </div>
          </a>
          <a
            href="https://x.com/search?q=%23holmsund&src=typeahead_click"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleElementClick(
                "Twitter/X",
                "https://x.com/search?q=%23holmsund&src=typeahead_click"
              )
            }
            aria-label="Twitter/X"
          >
            <FaXTwitter className={styles.twitterX} />
            <div className={styles.iconsText}>
              <p>Twitter/X</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleElementClick(
                "Instagram",
                "https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
              )
            }
            aria-label="Instagram"
          >
            <FaInstagram className={styles.instagram} />
            <div className={styles.iconsText}>
              <p>Instagram</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleElementClick(
                "Facebook",
                "https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
              )
            }
            aria-label="Facebook"
          >
            <FaFacebook className={styles.facebook} />
            <div className={styles.iconsText}>
              <p className={styles.text}>Facebook</p>
            </div>
          </a>
        </section>
      </article>
      <aside className={styles.secondFooter}>
        <div className={styles.footerPolicy}>
          <ul>
            <NavLink
              to="/"
              onClick={() => handleElementClick("Hem", window.location.href)}
              aria-label="Home"
            >
              <li>Hem</li>
            </NavLink>
            <NavLink
              to="/om-oss"
              onClick={() => handleElementClick("Om oss", window.location.href)}
              aria-label="About us"
            >
              <li>Om oss</li>
            </NavLink>
            <NavLink
              to="/cookiepolicy"
              onClick={() =>
                handleElementClick("Cookiepolicy", window.location.href)
              }
              aria-label="Cookie policy"
            >
              <li>Cookiepolicy</li>
            </NavLink>
            <NavLink
              to="/användarvillkor"
              onClick={() =>
                handleElementClick("Användarvillkor", window.location.href)
              }
              aria-label="Terms of service"
            >
              <li>Användarvillkor</li>
            </NavLink>
          </ul>
        </div>
        <div className={styles.footerYear}>
          <p>&copy; {currentYear} Holmsund Information. All rights reserved.</p>
        </div>
      </aside>
    </section>
  );
};

export default Footer;
