import { useEffect, useRef, useState } from "react";
import LayoutOther from "../layouts/LayoutOther";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { trackMapPageClick } from "../analytics/pages";
import styles from "../../styles/pages/MapPage.module.css";

const MapPage = () => {
  useEffect(() => {
    setDocumentTitle("Kartor");
  }, []);

  // Google Analytics
  const handleIframeClick = () => {
    trackMapPageClick(
      "Map",
      "Google Maps",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.358895128173327!3d63.70981450424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sHolmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
    );
  };

  const handleLinkClick = (title, url) => {
    trackMapPageClick("Link", title, url);
  };

  const [isVisible, setIsVisible] = useState({
    title: false,
    text: false,
    googleMaps: false,
    downloadMap: false,
  });

  const observeElement = (entry, key) => {
    if (entry.isIntersecting) {
      setIsVisible((prev) => ({ ...prev, [key]: true }));
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains(styles.title)) {
          observeElement(entry, "title");
        }
        if (entry.target.classList.contains(styles.text)) {
          observeElement(entry, "text");
        }
        if (entry.target.classList.contains(styles.googleMaps)) {
          observeElement(entry, "googleMaps");
        }
        if (entry.target.classList.contains(styles.downloadMap)) {
          observeElement(entry, "downloadMap");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      `.${styles.title}, .${styles.text}, .${styles.googleMaps}, .${styles.downloadMap}`
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <LayoutOther
      renderSeparatorAddon={true}
      renderMapCircleAddon={true}
      renderDiscoverAddon2={true}
      renderActivityAddon1={true}
      renderGalleryAddon1={true}
      discoverTitle2="Upptäck 2"
      galleryTitle1="Upptäck 1"
    >
      <div className={styles.container}>
        <h2
          className={`${styles.title} ${
            isVisible.title ? styles.visible : styles.hidden
          }`}
        >
          Observera Holmsund
        </h2>
        <p
          className={`${styles.text} ${
            isVisible.text ? styles.visible : styles.hidden
          }`}
        >
          Här kan du se en vy över Holmsund genom att använda denna karta.
          Utforska kustorten, kartan erbjuder en praktisk översikt för att
          navigera och få en känsla för Holmsund.
        </p>
        <div
          className={`${styles.googleMaps} ${
            isVisible.googleMaps ? styles.visible : styles.hidden
          }`}
          onClick={handleIframeClick}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.358895128173327!3d63.70981450424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sHolmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse&hl=sv"
            target="_blank"
            allowFullScreen=""
            loading="lazy"
            aria-label="Karta över holmsund"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta av Holmsund"
          ></iframe>
        </div>
        <div
          className={`${styles.downloadMap} ${
            isVisible.downloadMap ? styles.visible : styles.hidden
          }`}
        >
          <div className={styles.downloadInner}>
            <a
              href="https://www.umea.se/download/18.2bd9ced91726ea4d7b4e0/1591359485936/Karta%20%C3%B6ver%20f%C3%B6rbudsomr%C3%A5de,%20Holmsund.pdf"
              target="_blank"
              aria-label="Ladda ner karta holmsund förbunsområde"
              onClick={() =>
                handleLinkClick(
                  "Karta över Holmsunds Förbundsområde",
                  "https://www.umea.se/download/18.2bd9ced91726ea4d7b4e0/1591359485936/Karta%20%C3%B6ver%20f%C3%B6rbudsomr%C3%A5de,%20Holmsund.pdf"
                )
              }
            >
              <h3>Ladda ner karta över Holmsunds Förbundsområde</h3>
            </a>
            <div className={styles.description}>
              <p>
                Holmsunds förbundsområde är en del av Holmsund i Sverige och
                utgör ett administrativt område inom vilket olika typer av
                samhällsservice och infrastruktur planeras och administreras.
              </p>
            </div>

            <div>
              <a
                href="https://www.umea.se/download/18.1b050b4218a5de7f11e1969/1694097655160/%C3%96versiktsplan%20f%C3%B6r%20Holmsund%20och%20Obbola%20%E2%80%93%20samr%C3%A5d.pdf"
                target="_blank"
                aria-label="Ladda ner översiktsplan holmsund"
                onClick={() =>
                  handleLinkClick(
                    "Översiktsplan för Holmsund",
                    "https://www.umea.se/download/18.1b050b4218a5de7f11e1969/1694097655160/%C3%96versiktsplan%20f%C3%B6r%20Holmsund%20och%20Obbola%20%E2%80%93%20samr%C3%A5d.pdf"
                  )
                }
              >
                <h3>Ladda ner Översiktsplan för Holmsund</h3>
              </a>
              <div className={styles.description}>
                <p>
                  Holmsunds översiktsplan är en strategisk plan som beskriver
                  framtida utvecklingsmål och förvaltning av Holmsund med fokus
                  på samhällsbyggnad, infrastruktur och miljö.
                </p>
              </div>
            </div>

            <div>
              <a
                href="https://www.umea.se/download/18.670b9ed18a0718f46c1fe86/1692698499312/Plankarta%20F%C3%B6p%20Holmsund-Obbola%20%E2%80%93%20samr%C3%A5d.pdf"
                target="_blank"
                aria-label="Ladda ner holmsunds plankarta"
                onClick={() =>
                  handleLinkClick(
                    "Holmsunds Plankarta",
                    "https://www.umea.se/download/18.670b9ed18a0718f46c1fe86/1692698499312/Plankarta%20F%C3%B6p%20Holmsund-Obbola%20%E2%80%93%20samr%C3%A5d.pdf"
                  )
                }
              >
                <h3>Ladda ner Holmsunds Plankarta</h3>
              </a>
              <div className={styles.description}>
                <p>
                  Holmsunds plankarta är en detaljerad kartbild som visar
                  aktuell markanvändning, zonindelning och planerad utveckling
                  inom Holmsunds geografiska område.
                </p>
                <p className={styles.source}>
                  Källa: <a href="https://www.umea.se/">Umeå Kommun</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOther>
  );
};

export default MapPage;
