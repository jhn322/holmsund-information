import { useState } from "react";
import { trackSeparatorLinkClick } from "../analytics/home";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import styles from "../../styles/home/Separator.module.css";
import { RxCross2 } from "react-icons/rx";

const Separator = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [modalUrl, setModalUrl] = useState("");

  const handleLinkClick = (linkText, linkUrl, event) => {
    event.preventDefault();
    trackSeparatorLinkClick(linkText, linkUrl);
    setModalOpen(linkText);
    setModalUrl(linkUrl);
  };

  const handleCloseModal = () => {
    setModalOpen(null);
    setModalUrl("");
  };

  return (
    <section className={styles.separatorSection}>
      <div className={styles.separatorFirst}></div>
      <main className={styles.separatorContainer}>
        <article className={styles.separatorContent}>
          <p className={styles.separatorText}>
            Här hittar du de senaste nyheterna om Holmsunds tätort, platser,
            restauranger, aktiviteter och mycket mer. Dela med dig av din
            upplevelse på
          </p>
          <div className={styles.socialMediaLinks}>
            <a
              href="#"
              onClick={(event) =>
                handleLinkClick(
                  "Twitter",
                  "https://x.com/search?q=%23holmsund&src=typeahead_click",
                  event
                )
              }
              aria-label="Dela din upplevelse på Twitter"
              className={styles.iconLink}
            >
              <FaTwitter className={styles.icon} /> Twitter
            </a>
            <a
              href="#"
              onClick={(event) =>
                handleLinkClick(
                  "Instagram",
                  "https://www.instagram.com/explore/locations/c2142469/holmsund-sweden/?hl=en",
                  event
                )
              }
              aria-label="Dela din upplevelse på Instagram"
              className={styles.iconLink}
            >
              <FaInstagram className={styles.icon} /> Instagram
            </a>
            <a
              href="#"
              onClick={(event) =>
                handleLinkClick(
                  "Facebook",
                  "https://www.facebook.com/groups/415551751837063/?locale=sv_SE",
                  event
                )
              }
              aria-label="Dela din upplevelse på Facebook"
              className={styles.iconLink}
            >
              <FaFacebook className={styles.icon} /> Facebook
            </a>
            <a
              href="#"
              onClick={(event) =>
                handleLinkClick(
                  "TikTok",
                  "https://www.tiktok.com/tag/holmsund",
                  event
                )
              }
              aria-label="Dela din upplevelse på TikTok"
              className={styles.iconLink}
            >
              <FaTiktok className={styles.icon} /> TikTok
            </a>
          </div>

          {modalOpen && (
            <div className={styles.modalOverlay} onClick={handleCloseModal}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalIcon}>
                  {modalOpen === "Twitter" && <FaTwitter />}
                  {modalOpen === "Instagram" && <FaInstagram />}
                  {modalOpen === "Facebook" && <FaFacebook />}
                  {modalOpen === "TikTok" && <FaTiktok />}
                </div>
                <p>
                  {modalOpen === "Twitter" &&
                    "Dela dina upplevelser och delta i konversationen på Twitter!"}
                  {modalOpen === "Instagram" &&
                    "Lägg upp dina foton och tagga dem med #Holmsund för att dela dina ögonblick!"}
                  {modalOpen === "Facebook" &&
                    "Gå med i den lokala Facebook-gruppen för att få kontakt och dela med gemenskapen."}
                  {modalOpen === "TikTok" &&
                    "Kolla in och skapa videor med #Holmsund på TikTok!"}
                </p>
                <a
                  href={modalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.redirectButton}
                >
                  Gå till {modalOpen}
                </a>
                <RxCross2
                  className={styles.closeIcon}
                  onClick={handleCloseModal}
                />
              </div>
            </div>
          )}
        </article>
        <section className={styles.separatorSecond}>
          <h2 className={styles.separatorSecondTitle}>Utforska Holmsund</h2>
          <p className={styles.separatorSecondText}>
            Upptäck Holmsund i dag, från spännande utomhusäventyr till långa
            motionsspår!
          </p>
          <div className={styles.snippetsContainer}>
            <div className={styles.snippet}>
              <h3 className={styles.snippetTitle}>Fika i Holmsund</h3>
              <p className={styles.snippetText}>
                Besök lokala caféer och njut av en kopp kaffe med utsikt över
                hamnen.
              </p>
            </div>
            <div className={styles.snippet}>
              <h3 className={styles.snippetTitle}>Naturvandringar</h3>
              <p className={styles.snippetText}>
                Ta en promenad längs de natursköna stigen och upptäck Holmsunds
                vackra landskap.
              </p>
            </div>
            <div className={styles.snippet}>
              <h3 className={styles.snippetTitle}>Kulturupplevelser</h3>
              <p className={styles.snippetText}>
                Besök lokala museer och lär dig mer om Holmsunds historia och
                kultur.
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Separator;
