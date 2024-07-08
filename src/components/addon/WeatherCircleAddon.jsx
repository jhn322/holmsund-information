import styles from "../../styles/home/ContentCircle.module.css";
import styles2 from "../../styles/addon/WeatherCircleAddon.module.css";
import circle1Image from "../../assets/other/weatherCircle.jpg";
import circle2Image from "../../assets/other/circlePurple.png";

const AboutCircleAddon = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <article className={styles.content}>
          <div className={`${styles.textContent} ${styles2.hidden}`}>
            <header>
              <h2 className={styles2.titleContent}>Väder</h2>
            </header>
            <p className={styles.paragraphContent}>
              Holmsund, beläget i norra Sverige vid Bottenvikens kust, upplever
              ett typiskt nordiskt klimat med betydande påverkan från både havet
              och inlandet. Vädret i Holmsund präglas av svala somrar och kalla
              vintrar, med märkbara temperaturvariationer under året. Vindar
              från havet och väderförhållanden över landets inre påverkar också
              väderförhållandena i området.
            </p>
          </div>
        </article>
      </div>
      <aside className={styles2.circleContainer}>
        <div className={styles.circleBackground}>
          <h2>double circle</h2>
          <img
            src={circle2Image}
            className={styles.circleBack}
            alt="Circle 2"
          />
          <img
            src={circle1Image}
            className={styles.circleFront}
            alt="Circle 1"
          />
        </div>
      </aside>
    </section>
  );
};

export default AboutCircleAddon;
