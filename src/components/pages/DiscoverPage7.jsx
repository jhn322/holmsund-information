import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet7 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage7.jpg";

const DiscoverPage7 = () => {
  useEffect(() => {
    setDocumentTitle("Lövösundet");
  }, []);

  return (
    <LayoutPage
      headerTitle="Lövösundet"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Lövösundet</h2>
        <p className={styles.boldText}>
          Beläget vid Övrekjäla fjärden, erbjuder Lövösundet en unik blandning
          av vacker natur, friluftsliv och kulturella inslag.
        </p>
        <p className={styles.text}>
          Lövösundet är känt för sin imponerande naturskönhet och biologiska
          mångfald. Området kring sundet är rikt på vattendrag, sjöar och gröna
          ytor, vilket skapar en perfekt miljö för ett rikt djur- och växtliv.
          Vattnet i Lövösundet är kristallklart och ger liv åt en mängd olika
          vattenlevande organismer, inklusive fiskarter som abborre och gädda.
          Den omgivande vegetationen är typisk för den nordsvenska regionen, med
          tät skog och fuktiga våtmarker som stöder både flora och fauna.
        </p>

        <p className={styles.text}>
          Den ekologiska betydelsen av Lövösundet är inte bara begränsad till
          det lokala djurlivet. Området fungerar som en viktig del av det större
          ekosystemet och bidrar till den biologiska mångfalden i regionen.
          Våtmarkerna kring sundet spelar en viktig roll i att filtrera och rena
          vattnet, vilket bidrar till att upprätthålla en hälsosam vattenmiljö.
        </p>
        <p className={styles.text}>
          Lövösundet har en rik historia som går tillbaka flera hundra år.
          Området har varit en viktig handelsväg och transportled för
          lokalbefolkningen, vilket har bidragit till dess historiska betydelse.
          Det finns också kulturella arv från tidigare generationer som kan ses
          i de bevarade byggnaderna och monumenten i Holmsund. <br /> Historiskt
          sett har Lövösundet fungerat som en central punkt för fiske och
          handel, vilket har präglat livsstilen för invånarna i Holmsund. Det är
          fortfarande möjligt att se spår av denna traditionella livsstil genom
          lokala fiskeaktiviteter och traditionella hantverk som hålls vid liv
          av byborna.
        </p>
        <p className={styles.text}>
          Lövösundet erbjuder en mängd olika aktiviteter för dem som älskar
          friluftsliv. Området är populärt för vandring, fiske och
          kajakpaddling. De natursköna promenadstigarna runt sundet ger besökare
          möjlighet att njuta av den friska luften och den fantastiska utsikten
          över vattnet. För den som är intresserad av fågelskådning finns det
          gott om möjligheter att observera olika fågelarter som häckar och rör
          sig i området. <br /> Kanske den mest uppskattade aktiviteten är en
          avkopplande båttur på sundet, där man kan beundra den natursköna
          omgivningen och få en känsla för hur livet har sett ut vid Lövösundet
          genom tiderna. Det är också en populär plats för picknick och
          familjeutflykter, där den lugna miljön skapar en perfekt bakgrund för
          en dag i naturen.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet7} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.3445!3d63.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sL%C3%B6v%C3%B6sund%2C%20Holmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage7;
