import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutOther from "../layouts/LayoutOther";
import styles from "../../styles/pages/TermsOfServicePage.module.css";

const handleNavLinkClick = () => {
  trackCookiesElementClick("navlink", "Cookiepolicy", "/cookiepolicy");
};

const TermsOfServicePage = () => {
  useEffect(() => {
    setDocumentTitle("Användarvillkor");
  }, []);

  return (
    <LayoutOther renderTermsCircleAddon={true} renderOtherAddon={true}>
      <div className={styles.container}>
        <h3 className={styles.title}>1. Generellt</h3>
        <p className={styles.text}>
          Dessa villkor styr din åtkomst till och användning av vår webbplats
          och information. Vänligen läs igenom dessa villkor noggrant innan du
          använder webbsidan.
        </p>

        <h3 className={styles.title}>2. Acceptans av Villkor</h3>
        <p className={styles.text}>
          Genom att få tillgång till eller använda våran webbsida godkänner du
          att vara bunden av dessa Villkor. Om du inte godkänner dessa villkor,
          vänligen använd inte webbsidan.
        </p>

        <h3 className={styles.title}>3. Beskrivning av Tjänster</h3>
        <p className={styles.text}>
          Våran webbsida tillåter dig söka upp, samt läsa dig till information
          och dessutom ta del av bilder. Du måste följa eventuella riktlinjer
          eller policys som är kopplade till denna webbsida.
        </p>

        <h3 className={styles.title}>4. Användarkonton</h3>
        <p className={styles.text}>
          På denna webbsida behöver du ej skapa ett konto för att använda vissa
          funktioner. Dock kommer vissa preferenser sparas lokalt på din
          webbläsare för att säkerställa en tillfredställande upplevelse. Läs
          mer under våran
          <NavLink
            to="/cookiepolicy"
            className={styles.navToCookiepolicy}
            onClick={handleNavLinkClick}
          >
            cookiepolicy
          </NavLink>
          .
        </p>

        <h3 className={styles.title}>5. Integritet</h3>
        <p className={styles.text}>
          Vår Användarvillkor förklarar hur vi samlar in, använder och delar
          information om dig. Genom att använda våran webbsida samtycker du till
          vår insamling, användning och delning av information enligt
          Användarvillkor.
        </p>

        <h3 className={styles.title}>6. Upphovsrätt och immateriell egendom</h3>
        <p className={styles.text}>
          Webbsidan och deras originalinnehåll, funktioner och funktionalitet är
          och förblir exklusiv egendom hos JS Design Group och dess
          licensgivare. Webbsidan skyddas av upphovsrätt, varumärke och andra
          lagar i både Sverige och utländska länder.
        </p>

        <h3 className={styles.title}>7. Tillämplig lag</h3>
        <p className={styles.text}>
          Dessa Villkor ska tolkas och styras i enlighet med lagarna i Sverige,
          utan hänsyn till dess lagvalsregler.
        </p>

        <p className={styles.text}>
          <em>Verkställandedatum: 2024-06-19</em>
        </p>
      </div>
    </LayoutOther>
  );
};

export default TermsOfServicePage;
