import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet1 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/discover/discoverPage1.jpg";

const DiscoverPage1 = () => {
  useEffect(() => {
    setDocumentTitle("Utforska-1");
  }, []);

  return (
    <LayoutPage
      headerTitle="Bränteberget"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Bränteberget</h2>
        <p className={styles.boldText}>
          Bränteberget, beläget i Holmsund i Västerbotten, är en naturskön plats
          som lockar besökare året runt. Med sina varierande aktiviteter och
          vackra omgivningar är Bränteberget en idealisk destination för både
          friluftsentusiaster och naturälskare. Oavsett om du besöker området
          under sommaren eller vintern, erbjuder Bränteberget något för alla.
        </p>

        <h5 className={styles.headline}>Sommar</h5>
        <p className={styles.text}>
          Under sommarmånaderna blomstrar Bränteberget med grönska och liv.
          Området är känt för sina vandringsleder som slingrar sig genom den
          frodiga skogen och erbjuder fantastiska utsikter över det
          omkringliggande landskapet. Här kan man utforska flora och fauna,
          njuta av fågelsång och kanske till och med stöta på en och annan älg.
        </p>

        <p className={styles.text}>
          För dem som är intresserade av mountainbiking finns det flera stigar
          och rutter som passar både nybörjare och erfarna cyklister.
          Cykelentusiaster kan njuta av allt från utmanande backar till mer
          avslappnade turer genom den natursköna terrängen. Vid de närliggande
          sjöarna kan man paddla kanot eller kajak, fiska eller bara njuta av en
          picknick vid vattnet. De klara vattnen erbjuder även möjligheter till
          bad och snorkling för de som vill utforska undervattenslivet.
        </p>

        <h5 className={styles.headline}>Vinter</h5>
        <p className={styles.text}>
          När vintern kommer förvandlas Bränteberget till ett snöparadis. De
          täta skogarna täcks av ett tjockt lager snö, vilket gör området
          perfekt för skidåkning och andra vinteraktiviteter. Det finns
          preparerade skidspår för både längdskidåkning och utförsåkning, vilket
          gör det till en populär destination för skidåkare i alla åldrar.
        </p>

        <p className={styles.text}>
          Snöskovandring är en annan populär aktivitet på Bränteberget under
          vintermånaderna. Med snöskor kan besökare ta sig genom den djupa snön
          och njuta av den fridfulla vinterskogen. För de som föredrar mer
          fartfyllda aktiviteter finns det även möjligheter att åka snöskoter.
          För barn och familjer erbjuder Bränteberget pulkabackar och områden
          för snölek. En dag i pulkabacken avslutas bäst med varm choklad runt
          en lägereld, där man kan värma sig och njuta av den vinterliga
          atmosfären.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet1} />
      <section className={styles.mapContainer}>
        <h2 className={styles.title}>Hitta dit</h2>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.3886000!3d63.7125000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sBr%C3%A4nteberget%2C%20Holmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
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

export default DiscoverPage1;
