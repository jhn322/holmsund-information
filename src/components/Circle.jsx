import React from "react";
import styles from "../styles/Circle.module.css";
import circle1Image from "../assets/circle1.png";
import circle2Image from "../assets/circle2.png";

const Circle = () => {
  return (
    <main className={styles.circleContainer}>
      <div className={styles.circleBackground}>
        <h2>double circle</h2>
        <img src={circle2Image} className={styles.circleBack} alt="Circle 2" />
        <img src={circle1Image} className={styles.circleFront} alt="Circle 1" />
      </div>
    </main>
  );
};

export default Circle;
