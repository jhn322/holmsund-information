import React from "react";
import { NavLink } from "react-router-dom";
import { trackFooterElementClick } from "../analytics/common";
import {
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
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
            aria-label="Hem"
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
          <a
            href="https://www.tiktok.com/discover/Holmsund"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleElementClick(
                "TikTok",
                "https://www.tiktok.com/discover/Holmsund"
              )
            }
            aria-label="TikTok"
          >
            <FaTiktok className={styles.tiktok} />
            <div className={styles.iconsText}>
              <p>TikTok</p>
            </div>
          </a>
        </section>
        <div className={styles.footerLinks}>
          <ul>
            <NavLink
              to="/aktiviteter"
              onClick={() =>
                handleElementClick("Aktiviteter", window.location.href)
              }
              aria-label="Aktiviteter"
            >
              <li>Aktiviteter</li>
            </NavLink>
            <NavLink
              to="/utforska"
              onClick={() =>
                handleElementClick("Utforska", window.location.href)
              }
              aria-label="Utforska"
            >
              <li>Utforska</li>
            </NavLink>
            <NavLink
              to="/galleri"
              onClick={() =>
                handleElementClick("Galleri", window.location.href)
              }
              aria-label="Galleri"
            >
              <li>Galleri</li>
            </NavLink>
            <NavLink
              to="/vader"
              onClick={() => handleElementClick("Väder", window.location.href)}
              aria-label="Väder"
            >
              <li>Väder</li>
            </NavLink>
            <NavLink
              to="/kartor"
              onClick={() => handleElementClick("Kartor", window.location.href)}
              aria-label="Kartor"
            >
              <li>Kartor</li>
            </NavLink>
          </ul>
        </div>
      </article>
      <aside className={styles.secondFooter}>
        <div className={styles.footerPolicy}>
          <ul>
            <NavLink
              to="/"
              onClick={() => handleElementClick("Hem", window.location.href)}
              aria-label="Hem"
            >
              <li>Hem</li>
            </NavLink>
            <NavLink
              to="/om-oss"
              onClick={() => handleElementClick("Om oss", window.location.href)}
              aria-label="Om oss"
            >
              <li>Om oss</li>
            </NavLink>
            <NavLink
              to="/cookiepolicy"
              onClick={() =>
                handleElementClick("Cookiepolicy", window.location.href)
              }
              aria-label="Cookiepolicy"
            >
              <li>Cookiepolicy</li>
            </NavLink>
            <NavLink
              to="/anvandarvillkor"
              onClick={() =>
                handleElementClick("Användarvillkor", window.location.href)
              }
              aria-label="Anvädarvillkor"
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
