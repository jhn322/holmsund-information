import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet2 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage2.jpg";

const DiscoverPage2 = () => {
  useEffect(() => {
    setDocumentTitle("Utforska-2");
  }, []);

  return (
    <LayoutPage headerTitle="Kajutan" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2 className={styles.title}>Kajutan</h2>
        <p className={styles.boldText}>
          Kajutan är belägen vid hamnen i Holmsund och erbjuder en unik
          blandning av lokala och internationella smaker. Restaurangen har på
          kort tid blivit ett nav för både lokalbefolkningen och besökare som
          söker en smakfull och minnesvärd måltid.
        </p>
        <p className={styles.text}>
          Restaurangen är känd för sin förmåga att kombinera traditionella
          västerbottniska rätter med moderna influenser. Menyn är noggrant
          sammansatt för att spegla den lokala matkulturen, med en rad rätter
          som innehåller råvaror från närområdet. Klassiska rätter såsom
          Västerbottensostpaj och rökt lax samsas med mer innovativa alternativ,
          där varje rätt är skapad med stor omsorg för smak och presentation.
        </p>

        <p className={styles.text}>
          En av restaurangens styrkor är dess förmåga att erbjuda en varierad
          meny som tillgodoser olika kostbehov och preferenser. Här kan du hitta
          allt från kött- och fiskrätter till vegetariska och glutenfria
          alternativ. Restaurangens kockar lägger stor vikt vid att använda
          säsongens färskaste ingredienser, vilket ger en dynamisk och färsk
          smakupplevelse varje gång du besöker Kajutan.
        </p>

        <p className={styles.text}>
          Kajutan har en varm och välkomnande atmosfär som är både elegant och
          avslappnad. Interiören är inspirerad av maritima teman, med inslag av
          trä och ljusa färger som speglar den kustnära miljön. Restaurangen har
          en intim och mysig känsla, vilket gör den till en perfekt plats för
          både romantiska middagar och familjesammankomster. <br />
          Under sommarmånaderna öppnar restaurangen upp sina utomhusplatser, där
          gästerna kan njuta av måltider med utsikt över den glittrande hamnen.
          Här kan du sitta och se båtarna komma och gå samtidigt som du njuter
          av en god måltid och den friska havsbrisen.
        </p>

        <h5 className={styles.headline}>Engagemang för Lokalsamhället</h5>
        <p className={styles.text}>
          Kajutan är inte bara en plats för mat och dryck; den spelar också en
          viktig roll i Holmsunds samhälle. Restaurangen stödjer lokala
          producenter och har ett nära samarbete med gårdar och fiskare i
          Västerbotten. Detta engagemang för lokala leverantörer speglar sig i
          den höga kvaliteten på maten som serveras, samtidigt som det stärker
          banden mellan restaurangen och det omgivande samhället. <br />
          Dessutom erbjuder Kajutan ofta kulturella evenemang och
          musikuppträdanden, vilket ytterligare bidrar till den levande och
          kulturella atmosfären i Holmsund. Dessa evenemang ger både invånare
          och besökare möjlighet att njuta av lokal konst och musik samtidigt
          som de avnjuter en god måltid.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet2} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.3950!3d63.7351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sKajutan%2C%20Holmsund!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage2;
