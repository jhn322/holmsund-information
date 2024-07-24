import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet3 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage3.jpg";

const DiscoverPage3 = () => {
  useEffect(() => {
    setDocumentTitle("Utforska-3");
  }, []);

  return (
    <LayoutPage headerTitle="Ljumviken" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2 className={styles.title}>Ljumviken</h2>
        <p className={styles.boldText}>
          Holmsund, en liten men livfull ort i Västerbotten, har mycket att
          erbjuda sina besökare. Bland de många smultronställena finns
          Ljumviken, ett område som kombinerar naturens skönhet med en mängd
          aktiviteter för hela familjen.
        </p>
        <p className={styles.text}>
          Ljumviken ligger vackert beläget vid Bottenviken och är känt för sin
          pittoreska strand och grönskande omgivningar. Området är en
          favoritplats för både lokalbefolkning och besökare som söker en lugn
          och avkopplande miljö. Stranden är långgrund och barnvänlig, vilket
          gör den till ett perfekt utflyktsmål för familjer. Här kan man njuta
          av solen, bada i det klara vattnet eller bara ta en promenad längs den
          fina sandstranden.
        </p>

        <p className={styles.text}>
          Men Ljumviken är inte bara för dem som vill koppla av. För de
          äventyrliga finns det mycket att göra. Under sommarhalvåret erbjuder
          området en mängd olika sport- och fritidsaktiviteter. Man kan hyra
          kanoter och kajaker för att utforska vattnet, eller ta en tur på
          mountainbike längs de välskötta cykellederna. För dem som föredrar
          aktiviteter på land finns beachvolleybollplaner och möjligheter till
          minigolf.
        </p>
        <p className={styles.text}>
          På vintern förvandlas Ljumviken till ett paradis för
          vinterentusiaster. Då kan man åka skridskor på den plogade banan eller
          ta en skotertur i den snöklädda terrängen. Det finns även grillplatser
          där man kan samlas för att grilla korv och umgås runt elden.
        </p>
        <p className={styles.text}>
          Ljumviken fungerar också som en samlingsplats för Holmsunds invånare.
          Här hålls ofta olika evenemang och aktiviteter, från midsommarfirande
          till marknader och konserter. Den sociala atmosfären gör det enkelt
          att träffa nya människor och njuta av den gemenskap som präglar orten.
          En av de mest populära årliga händelserna är den lokala strandfesten
          som lockar både unga och gamla. Med livemusik, matstånd och olika
          aktiviteter är det en höjdpunkt som många ser fram emot varje år.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet3} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4749.522357450015!2d20.348091332405083!3d63.711985542115714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51661715e26d%3A0x69e104bcd94e61b3!2sLjumviken%2C%20Holmsund!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage3;
