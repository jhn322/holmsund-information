import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet6 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage6.jpg";

const DiscoverPage6 = () => {
  useEffect(() => {
    setDocumentTitle("Utforska-6");
  }, []);

  return (
    <LayoutPage
      headerTitle="Solbackakyrkan"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Solbackakyrkan</h2>
        <p className={styles.boldText}>
          Beläget i det pittoreska Holmsund, strax norr om Umeå, finner vi
          Solbackakyrkan, en plats med en särskild betydelse för många i
          området. Denna kyrka, som är en del av Svenska kyrkan, erbjuder inte
          bara en plats för andakt utan också en mötespunkt för gemenskap och
          kultur.
        </p>
        <p className={styles.text}>
          Solbackakyrkan invigdes 1973 och representerar ett modernt exempel på
          svensk kyrkarkitektur från mitten av 1900-talet. Byggnaden är designad
          av arkitekten Lars H. Svahn och utmärker sig genom sin funktionella
          och ljusa design, som är typisk för den tiden. Den stora, öppna
          planlösningen och de generösa fönstren tillåter ett naturligt ljus att
          flöda in i kyrkan, vilket skapar en välkomnande och lugn atmosfär.
          <br /> Kyrkan är byggd i en traditionell nordisk stil med enkla, rena
          linjer och en varm, träbeklädd interiör som förstärker känslan av hem
          och trygghet. De ljusa träbänkarna och det avskalade altaret bidrar
          till en känsla av enkelhet och elegans som förstärker de andliga
          upplevelserna.
        </p>

        <p className={styles.text}>
          Solbackakyrkan är mycket mer än en plats för gudstjänst. Här erbjuds
          ett brett spektrum av aktiviteter och program för alla åldrar och
          intressen. Den regelbundna gudstjänstverksamheten är hjärtat i kyrkans
          liv, men kyrkan fungerar också som en kulturell och social mötesplats.{" "}
          <br />
          Kyrkan är värd för ett varierat utbud av evenemang, från konsertserier
          och föreläsningar till studiecirklar och barnverksamhet. Den öppna
          atmosfären och den centrala placeringen gör den till en naturlig
          samlingspunkt för både troende och icke-troende. <br /> För barn och
          ungdomar erbjuder Solbackakyrkan flera aktiviteter och grupper som
          syftar till att skapa gemenskap och engagemang. Här finns både
          söndagsskola och ungdomsgrupper som arbetar för att stödja unga
          människor i deras andliga och personliga utveckling.
        </p>
        <p className={styles.text}>
          En av Solbackakyrkans största styrkor är dess fokus på gemenskap och
          inkludering. Kyrkan strävar efter att vara en plats där alla känner
          sig välkomna, oavsett bakgrund eller livssituation. Det finns flera
          stödgrupper och sociala projekt som syftar till att hjälpa de som är i
          behov, både inom och utanför församlingen.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet6} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d20.3544!3d63.6901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sHolmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage6;
