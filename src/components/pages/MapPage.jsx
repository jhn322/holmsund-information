import { useState, useEffect } from "react";

// Components
import LayoutMainPage from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/MapPage.module.css";

// Images
import headerBackgroundImage1 from "../../assets/header/header13.jpg";
import headerBackgroundImage2 from "../../assets/header/header14.jpg";
import headerBackgroundImage3 from "../../assets/header/header15.jpg";
import headerBackgroundImage4 from "../../assets/header/header16.jpg";

const MapPage = () => {
  const headerImages = [
    headerBackgroundImage1,
    headerBackgroundImage2,
    headerBackgroundImage3,
    headerBackgroundImage4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  return (
    <LayoutMainPage
      headerTitle="Map Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon2={true}
      renderActivityAddon1={true}
      renderGalleryAddon1={true}
      discoverTitle2="Upptäck 2"
      galleryTitle2="Upptäck 1"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Holmsund</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          quibusdam reiciendis est possimus alias rem rerum nihil ipsa sequi?
          Quae corrupti blanditiis a odio asperiores aliquam dicta consequatur
          magni numquam?
        </p>
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43502.27002035805!2d20.358895128173327!3d63.70981450424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c51664f312b5f%3A0x4034506de8c8530!2sHolmsund%2C%20Sweden!5e0!3m2!1sen!2sse!4v1697549523948!5m2!1sen!2sse"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Holmsund"
          ></iframe>
        </div>
      </div>
    </LayoutMainPage>
  );
};

export default MapPage;
