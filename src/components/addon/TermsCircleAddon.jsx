import styles from "../../styles/home/ContentCircle.module.css";
import styles2 from "../../styles/addon/TermsCircleAddon.module.css";
import circle1Image from "../../assets/other/termsofserviceCircle.jpg";
import circle2Image from "../../assets/other/circleWhite.png";

const TermsCircleAddon = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles2.innerContent}>
        <article className={styles.content}>
          <div className={`${styles.textContent} ${styles2.hidden}`}>
            <header>
              <h2 className={styles2.titleContent}>Användarvillkor</h2>
            </header>
            <p className={styles.paragraphContent}>
              Användarvillkor utgör juridiska regler som styr hur användare kan
              interagera med och dra nytta av en tjänst eller produkt. Genom att
              acceptera dessa villkor, förbinder sig användaren att följa
              specifika riktlinjer och begränsningar som sätts av företaget
              eller plattformen.
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
            alt="White Circle"
          />
          <img
            src={circle1Image}
            className={`${styles.circleFront} ${styles2.circleFront}`}
            alt="Terms of Service Circle"
          />
        </div>
      </aside>
    </section>
  );
};

export default TermsCircleAddon;
