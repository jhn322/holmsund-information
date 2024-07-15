import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutOther from "../layouts/LayoutOther";
import styles from "../../styles/pages/AboutUsPage.module.css";
import ReactLogo from "../../assets/other/React.png";

const AboutUsPage = () => {
  useEffect(() => {
    setDocumentTitle("Om Oss");
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`;
  };

  return (
    <LayoutOther renderAboutCircleAddon={true} renderOtherAddon={true}>
      <article className={styles.container}>
        {/* Holmsund */}
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
          alltid något att göra och upptäcka. Holmsund är även känt för sitt
          välbefinnande och livskvalitet, där gemenskap och hälsa står i fokus.
        </p>
        <p className={styles.text}>
          Närheten till havet präglar också Holmsunds identitet, med många
          invånare som njuter av sjölivet och de många aktiviteter som erbjuds
          längs kusten. Som en del av Västerbottens vackra skärgård är Holmsund
          en magnet för besökare som söker avkoppling och äventyr, både på land
          och till sjöss.
        </p>
        <p className={styles.text}>
          Holmsund är också känt för sin gastronomi, där lokala råvaror och
          traditionella recept går hand i hand med moderna matupplevelser. De
          lokala restaurangerna och kaféerna är populära mötesplatser där man
          kan njuta av både lokala delikatesser och internationella rätter.
        </p>
        <p className={styles.text}>
          För den som är intresserad av historia erbjuder Holmsund flera
          intressanta sevärdheter och museer. Besökare kan lära sig mer om
          regionens industriella arv eller utforska gamla byggnader och platser
          som berättar om ortens historia och utveckling genom tiderna.
        </p>
        <p className={styles.text}>
          Under sommarmånaderna blomstrar Holmsund med ett rikt kulturutbud av
          festivaler, konserter och konstutställningar. Invånare och besökare
          samlas för att fira och njuta av gemensamma kulturella evenemang som
          berikar ortens dynamiska samhällsliv.
        </p>
        <p className={styles.text}>
          Holmsund är stolt över sitt hållbara tänkande och arbetar aktivt för
          att minska sin miljöpåverkan. Genom initiativ för återvinning,
          energieffektivitet och hållbar stadsplanering strävar orten efter att
          vara en förebild för andra samhällen när det gäller att bevara och
          vårda naturen för framtida generationer.
        </p>

        {/* Developer */}
        <div className={styles.contactContainer}>
          <section className={styles.contactInner}>
            <h2 className={styles.title}>Utvecklare</h2>
            <p className={styles.text}>
              Denna sida är skapad av en enda engagerad individ på sin fritid
              med syfte att ge ut information om Holmsund, lära sig webbdesign
              och experimentera med modern webbteknik. Sidan är byggd med React,
              ett kraftfullt JavaScript-bibliotek för att bygga
              användargränssnitt. Tack för att du besöker sidan, och vi hoppas
              att du finner informationen nyttig och inspirerande.
            </p>
            <img
              src={ReactLogo}
              alt="React Logo"
              className={styles.reactLogo}
            />
            <p className={styles.contactText}>
              Vill du kontakta oss?
              <span
                className={styles.emailLink}
                aria-label="Acceptera knapp"
                onClick={handleEmailClick}
              >
                Klicka här
              </span>
              för att skicka ett mail.
            </p>
          </section>
        </div>
      </article>
    </LayoutOther>
  );
};

export default AboutUsPage;
