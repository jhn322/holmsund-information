import styles from "../../styles/home/ContentCircle.module.css";
import styles2 from "../../styles/addon/AboutCircleAddon.module.css";
import circle1Image from "../../assets/other/aboutusCircle.jpg";
import circle2Image from "../../assets/other/circleBlue.png";

const AboutCircleAddon = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <article className={styles.content}>
          <div className={`${styles.textContent} ${styles2.hidden}`}>
            <header>
              <h2 className={styles2.titleContent}>Om Oss</h2>
            </header>
            <p className={styles.paragraphContent}>
              Holmsund, en mångsidig ort i Västerbotten, utmärker sig genom sin
              charmiga hamn och natursköna omgivningar. Beläget vid Bottenvikens
              kust, lockar Holmsund med sina mångsidiga fritidsaktiviteter och
              genuina atmosfär. Med en historia präglad av sjöfart och närhet
              till naturen, erbjuder Holmsund besökare och invånare en unik
              upplevelse av den norrländska livsstilen. Välkommen.
            </p>
          </div>
        </article>
      </div>
      <aside className={styles2.circleContainer}>
        <div className={styles.circleBackground}>
          <h2 className={styles2.hidden}>Double Circle</h2>
          <img
            src={circle2Image}
            className={`${styles.circleBack} ${styles2.circleBack}`}
            alt="Blå cirkel"
          />
          <img
            src={circle1Image}
            className={`${styles.circleFront} ${styles2.circleFront}`}
            alt="Om oss bild"
          />
        </div>
      </aside>
    </section>
  );
};

export default AboutCircleAddon;
