import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.navItems}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/site1" activeClassName={styles.active}>
                Site 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/site2" activeClassName={styles.active}>
                Site 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/site3" activeClassName={styles.active}>
                Site 3
              </NavLink>
            </li>
            <li>
              <FaSearch />
            </li>
            <li>
              <GiHamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
