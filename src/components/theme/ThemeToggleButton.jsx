import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../../styles/theme/ThemeToggleButton.module.css";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${styles.darkModeSwitch} ${theme}-mode`}>
      <input
        type="checkbox"
        id="darkModeToggle"
        aria-checked={theme === "dark"}
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <label htmlFor="darkModeToggle">
        <div
          className={`${styles.sunIcon} ${
            theme === "light" ? styles.visible : styles.hidden
          }`}
          aria-hidden={theme !== "light"}
        ></div>
        <div
          className={`${styles.moonIcon} ${
            theme === "dark" ? styles.visible : styles.hidden
          }`}
          aria-hidden={theme !== "dark"}
        ></div>
      </label>
    </div>
  );
};

export default ThemeToggleButton;
