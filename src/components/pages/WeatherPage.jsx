import { useState, useEffect } from "react";

// Components
import LayoutMainPage from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/WeatherPage.module.css";

// Images
import header13 from "../../assets/header/header13.jpg";
import header14 from "../../assets/header/header14.jpg";
import header15 from "../../assets/header/header15.jpg";
import header16 from "../../assets/header/header16.jpg";

const WeatherPage = () => {
  const headerImages = [header13, header14, header15, header16];

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
      headerTitle="Väder i Holmsund"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderWeatherCircleAddon={true}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon2={true}
      discoverTitle4="Galleri"
      galleryTitle1="Upptäck 2"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutMainPage>
  );
};

export default WeatherPage;
