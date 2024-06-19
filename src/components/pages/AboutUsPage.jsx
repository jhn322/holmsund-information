import React from "react";

// CSS
import styles from "../../styles/pages/AboutUsPage.module.css";

// Components
import LayoutLegal from "../layouts/LayoutLegal";

const AboutUsPage = () => {
  return (
    <LayoutLegal renderAboutCircleAddon={true}>
      <div className={styles.container}>
        <h2 className={styles.title}>Om Holmsund</h2>
        <p className={styles.text}>
          Holmsund är en charmig ort belägen vid kusten i Västerbottens län,
          Sverige. Med sina natursköna omgivningar och rika historia är Holmsund
          en plats som erbjuder både lugn och äventyr.
        </p>
        <p className={styles.text}>
          Holmsund grundades på 1800-talet som en viktig plats för
          sågverksindustrin, och har sedan dess utvecklats till en modern ort
          som kombinerar tradition med framsteg. Här kan du uppleva ett rikt
          kulturarv och samtidigt njuta av moderna bekvämligheter.
        </p>
        <p className={styles.text}>
          Naturen spelar en stor roll i Holmsund och området erbjuder
          fantastiska möjligheter för friluftsliv. Från vandring och fiske till
          båtutflykter och skidåkning - här finns något för alla som älskar att
          vara ute i naturen.
        </p>
        <p className={styles.text}>
          Holmsund har också ett starkt samhälle med engagerade invånare som
          arbetar tillsammans för att skapa en trivsam och hållbar miljö. Med
          lokala evenemang, sportaktiviteter och kulturupplevelser finns det
          alltid något att göra och upptäcka.
        </p>
        <p className={styles.text}>
          Vi välkomnar dig att utforska Holmsund och upptäcka allt som denna
          unika ort har att erbjuda. Oavsett om du är här för en kort visit
          eller planerar att stanna längre, kommer du att hitta en varm
          gemenskap och vacker natur som gör din tid i Holmsund oförglömlig.
        </p>
        <h2 className={styles.title}>Utvecklare</h2>
        <p className={styles.text}>
          Denna sida är skapad av en enda engagerad individ på sin fritid med
          syfte att ge ut information om Holmsund, lära sig webbdesign och
          experimentera med modern webbteknik. Sidan är byggd med React, ett
          kraftfullt JavaScript-bibliotek för att bygga användargränssnitt. Tack
          för att du besöker sidan, och vi hoppas att du finner informationen
          nyttig och inspirerande.
        </p>
      </div>
    </LayoutLegal>
  );
};

export default AboutUsPage;
