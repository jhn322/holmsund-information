import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet5 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage5.jpg";

const DiscoverPage5 = () => {
  useEffect(() => {
    setDocumentTitle("Storsjöskolan");
  }, []);

  return (
    <LayoutPage
      headerTitle="Storsjöskolan"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Storsjöskolan</h2>
        <p className={styles.boldText}>
          Storsjöskolan i Holmsund, belägen strax utanför Umeå, har en lång och
          rik historia som sträcker sig tillbaka till början av 1900-talet.
          Utbildningsinstitutioner skapades för att säkerställa att de unga i
          samhället fick tillgång till grundläggande utbildning.
        </p>
        <p className={styles.text}>
          Den ursprungliga skolan på platsen var en enkel byggnad som främst
          tjänade de lokala barnens utbildningsbehov. Under årens lopp
          expanderade Holmsund och med det ökade behovet av en större och mer
          modern skola. I takt med att samhället växte och förändrades, följde
          också skolan med i utvecklingen.
        </p>
        <h5 className={styles.headline}>Ombyggnad och Modernisering</h5>
        <p className={styles.text}>
          Under 1950- och 1960-talen genomgick Storsjöskolan en betydande
          ombyggnad och expansion. Den gamla skolbyggnaden ersattes med en ny
          och modern struktur som bättre kunde möta kraven från det växande
          antalet elever. Den nya skolan inkluderade moderna klassrum, en
          idrottshall och specialutrymmen för ämnen som naturvetenskap och
          hemkunskap. <br /> Ytterligare renoveringar och tillbyggnader har
          skett genom åren för att säkerställa att skolan fortsätter att erbjuda
          en säker och uppdaterad utbildningsmiljö. En av de mest omfattande
          ombyggnationerna ägde rum på 2000-talet då skolan utrustades med ny
          teknik och bättre anpassade lokaler för både elever och personal.
          Bland annat installerades interaktiva whiteboards och datorer i
          klassrummen, vilket markerade ett steg mot en mer digitaliserad
          undervisning.
        </p>
        <h5 className={styles.headline}>Nutid</h5>
        <p className={styles.text}>
          Idag är Storsjöskolan en modern grundskola som erbjuder utbildning
          från förskoleklass till årskurs 9. Skolan har ett gott rykte för sin
          starka akademiska profil och sitt engagemang för elevernas välmående.
          Med cirka 500 elever och ett dedikerat team av lärare och annan
          personal, strävar skolan efter att skapa en inspirerande och trygg
          lärandemiljö. <br /> <br /> Storsjöskolan har ett brett utbud av
          extrakurrikulära aktiviteter, från sport och musik till olika klubbar
          och föreningar. Detta gör att eleverna kan utveckla sina intressen och
          färdigheter utanför den traditionella undervisningen. Skolan lägger
          stor vikt vid hållbar utveckling och miljömedvetenhet, något som
          integreras i undervisningen och det dagliga livet på skolan. <br />
          Samarbete med föräldrar och lokalsamhället är också en viktig del av
          skolans verksamhet. Genom regelbundna möten och evenemang säkerställs
          en öppen dialog och ett gemensamt ansvar för barnens utbildning och
          utveckling.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet5} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.3571!3d63.7073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sStorsjöskolan%2C%20Holmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage5;
