import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet8 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage8.jpg";

const DiscoverPage8 = () => {
  useEffect(() => {
    setDocumentTitle("Kasaviken");
  }, []);

  return (
    <LayoutPage headerTitle="Kasaviken" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2 className={styles.title}>Kasaviken</h2>
        <p className={styles.boldText}>
          Kasaviken är en av de dolda pärlorna i Holmsund, beläget i
          Västerbotten längs den natursköna kusten av Bottniska viken. Området
          erbjuder en rik mix av naturliga skönheter, historia och
          rekreationsmöjligheter, vilket gör det till en attraktiv destination
          för både lokalbefolkningen och besökare.
        </p>

        <p className={styles.text}>
          Kasaviken är känd för sitt vackra och orörda landskap. Området
          domineras av en vik med klart vatten, omgiven av lummiga skogar och
          öppna gräsmarker. Här finns ett rikt fågelliv, vilket gör det till ett
          populärt ställe för fågelskådare. Under våren och sommaren kan
          besökare njuta av att se olika arter av sjöfåglar som häckar och söker
          föda i området.
        </p>

        <p className={styles.text}>
          För de som är intresserade av friluftsliv erbjuder Kasaviken en mängd
          olika aktiviteter. Vandringsleder slingrar sig genom området och
          bjuder på storslagna vyer över viken och den omgivande naturen. De väl
          markerade lederna gör det enkelt för besökare att utforska terrängen,
          oavsett om de är nybörjare eller erfarna vandrare. <br /> Kasaviken är
          också en idealisk plats för kajakpaddling och kanotpaddling. Viken
          erbjuder lugna vatten som är perfekta för en stillsam utflykt, där
          paddlare kan njuta av den fridfulla omgivningen och det rika
          djurlivet. På vintern förvandlas området till en vinteridyll, med
          möjligheter till längdskidåkning och snöskovandring.
        </p>

        <p className={styles.text}>
          I närheten av Kasaviken finns också kulturella sevärdheter som
          Skärgårdsmuseet i Holmsund. Museet ger en inblick i regionens maritima
          historia och den betydelse som sjöfarten har haft för områdets
          utveckling. Här kan besökare lära sig mer om fisketraditioner,
          båtbyggnad och de människor som har levt och verkat i Holmsund genom
          åren.
        </p>

        <p className={styles.text}>
          Bevarandet av Kasavikens naturliga och kulturella värden är av
          yttersta vikt. Lokala myndigheter och naturvårdsorganisationer arbetar
          tillsammans för att säkerställa att området förblir orört och
          tillgängligt för framtida generationer. Genom olika initiativ och
          projekt strävar man efter att främja hållbar turism och skydda de
          känsliga ekosystemen som finns här.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet8} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42383.4522700133!2d20.3644!3d63.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5152b9aa9dff%3A0x4024506de8c8530!2sKasaviken%2C%20Holmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage8;
