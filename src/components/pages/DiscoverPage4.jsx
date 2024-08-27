import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet4 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage4.jpg";

const DiscoverPage4 = () => {
  useEffect(() => {
    setDocumentTitle("Revet");
  }, []);

  return (
    <LayoutPage headerTitle="Revet" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2 className={styles.title}>Revet</h2>
        <p className={styles.boldText}>
          Revet i Holmsund är en naturlig klippformation som sträcker sig ut i
          Bottenviken. Det är känt för sina imponerande klippor och det
          dramatiska landskapet som sträcker sig ut över vattnet.
          Klippformationen har formats av tusentals år av geologiska processer,
          och resultatet är en spektakulär kustlinje med en kombination av
          branta klippor, stenstränder och vackra vyer.
        </p>
        <h5 className={styles.headline}>En Plats för Avkoppling och Äventyr</h5>
        <p className={styles.text}>
          Revet erbjuder en mängd aktiviteter för olika intressen. För den som
          söker lugn och ro är det en perfekt plats för en stilla promenad eller
          en avkopplande stund vid havet. Klipporna ger en utmärkt utsiktspunkt
          för att bevittna solnedgångar eller njuta av en picknick med
          havsbrisen som sällskap. <br /> För de mer äventyrslystna finns det
          möjligheter för klättring och fotografering. Klippornas varierade
          höjder och former gör det till en intressant plats för dem som gillar
          att utforska och utmana sig själva. Fiske är en annan populär
          aktivitet, och den som har tur kan fånga en mängd olika fiskarter som
          lever i det kalla, klara vattnet.
        </p>

        <p className={styles.text}>
          Revet har även en historisk dimension för Holmsund. Området har länge
          varit en del av den lokala kulturen och har varit en inspirationskälla
          för både konstnärer och författare. Det är inte ovanligt att se
          människor som kommer hit för att fånga landskapet på duk eller i ord,
          och det finns en stark känsla av att denna plats har en särskild
          betydelse för lokalbefolkningen.
        </p>
        <p className={styles.text}>
          Att bevara Revet och dess unika ekosystem är av stor vikt för framtida
          generationer. Lokala myndigheter och organisationer arbetar aktivt för
          att skydda området från överexploatering och för att främja hållbar
          turism. Besökare uppmanas att respektera de naturliga gränserna och
          att följa de regler som är uppsatta för att bevara den känsliga
          miljön.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet4} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.4357!3d63.7312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sHolmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
            target="_blank"
            allowFullScreen=""
            loading="lazy"
            aria-label="Karta över holmsund"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta av Holmsund"
          ></iframe>
        </div>
      </section>
    </LayoutPage>
  );
};

export default DiscoverPage4;
