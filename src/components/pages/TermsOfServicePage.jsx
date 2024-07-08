import React from "react";
import LayoutOther from "../layouts/LayoutOther";
import styles from "../../styles/pages/TermsOfServicePage.module.css";

const TermsOfServicePage = () => {
  return (
    <LayoutOther renderTermsCircleAddon={true} renderOtherAddon={true}>
      <div className={styles.container}>
        <h3 className={styles.title}>1. Generellt</h3>
        <p className={styles.text}>
          Dessa villkor ("Villkor") styr din åtkomst till och användning av våra
          tjänster, inklusive vår webbplats, produkter och applikationer
          (gemensamt kallade "Tjänsterna"). Vänligen läs igenom dessa Villkor
          noggrant innan du använder Tjänsterna.
        </p>

        <h3 className={styles.title}>2. Acceptans av Villkor</h3>
        <p className={styles.text}>
          Genom att få tillgång till eller använda våra Tjänster godkänner du
          att vara bunden av dessa Villkor. Om du inte godkänner dessa Villkor,
          vänligen använd inte Tjänsterna.
        </p>

        <h3 className={styles.title}>3. Beskrivning av Tjänster</h3>
        <p className={styles.text}>
          Våra Tjänster tillåter dig att [kortfattad beskrivning av syftet med
          dina tjänster]. Du måste följa eventuella riktlinjer eller policys som
          är kopplade till Tjänsterna.
        </p>

        <h3 className={styles.title}>4. Användarkonton</h3>
        <p className={styles.text}>
          Du kan behöva skapa ett konto för att använda vissa funktioner i
          Tjänsterna. Du är ansvarig för att skydda sekretessen för dina
          kontouppgifter och för alla aktiviteter som sker under ditt konto.
        </p>

        <h3 className={styles.title}>5. Integritet</h3>
        <p className={styles.text}>
          Vår Integritetspolicy förklarar hur vi samlar in, använder och delar
          information om dig. Genom att använda Tjänsterna samtycker du till vår
          insamling, användning och delning av information enligt
          Integritetspolicyn.
        </p>

        <h3 className={styles.title}>6. Upphovsrätt och immateriell egendom</h3>
        <p className={styles.text}>
          Tjänsterna och deras originalinnehåll, funktioner och funktionalitet
          är och förblir exklusiv egendom hos JS Design Group och dess
          licensgivare. Tjänsterna skyddas av upphovsrätt, varumärke och andra
          lagar i både Sverige och utländska länder.
        </p>

        <h3 className={styles.title}>7. Uppsägning</h3>
        <p className={styles.text}>
          Vi kan avsluta eller suspendera din åtkomst till Tjänsterna
          omedelbart, utan föregående meddelande eller ansvar, av vilken
          anledning som helst, inklusive om du bryter mot Villkoren.
        </p>

        <h3 className={styles.title}>8. Tillämplig lag</h3>
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
