import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { trackMainPagesClick } from "../analytics/pages";
import LayoutPageMain from "../layouts/LayoutPageMain";
import styles from "../../styles/pages/AllPageMain.module.css";

// Images
import header5 from "../../assets/header/header5.jpg";
import header6 from "../../assets/header/header6.jpg";
import header7 from "../../assets/header/header7.jpg";
import header8 from "../../assets/header/header8.jpg";
import activityPage1 from "../../assets/activity/activityPageMain1.jpg";
import activityPage2 from "../../assets/activity/activityPageMain2.jpg";
import activityPage3 from "../../assets/activity/activityPageMain3.jpg";
import activityPage4 from "../../assets/activity/activityPageMain4.jpg";
import activityPage5 from "../../assets/activity/activityPageMain5.jpg";
import activityPage6 from "../../assets/activity/activityPageMain6.jpg";
import activityPage7 from "../../assets/activity/activityPageMain7.jpg";
import activityPage8 from "../../assets/activity/activityPageMain8.jpg";

const ActivityPageMain = () => {
  const headerImages = [header5, header6, header7, header8];

  const gridImages = [
    {
      src: activityPage1,
      title: "Sandviks Idrottsklubb",
      path: "/aktiviteter-1",
    },
    { src: activityPage2, title: "Elljusspåret", path: "/aktiviteter-2" },
    { src: activityPage3, title: "Umeå Golfklubb", path: "/aktiviteter-3" },
    { src: activityPage4, title: "Storsjöhallen", path: "/aktiviteter-4" },
    { src: activityPage5, title: "Omberget", path: "/aktiviteter-5" },
    { src: activityPage6, title: "Sjätte", path: "/aktiviteter-6" },
    { src: activityPage7, title: "Sjunde", path: "/aktiviteter-7" },
    { src: activityPage8, title: "Åttonde", path: "/aktiviteter-8" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setDocumentTitle("Aktiviteter");
  }, []);

  // Preload header images
  useEffect(() => {
    const preloadImages = [];
    headerImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      preloadImages.push(img);
    });
    return () => {
      preloadImages.forEach((img) => (img.src = ""));
    };
  }, [headerImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  const gridItems = gridImages.map((image, index) => (
    <NavLink
      to={image.path}
      className={styles.gridItemLink}
      key={index}
      aria-label="Länkar till aktiviteter sidor"
      onClick={() => {
        trackMainPagesClick("Grid Image", image.title, image.path);
      }}
    >
      <div className={styles.gridItem}>
        <img src={image.src} alt={`Image ${index}`} />
        <h4 className={styles.title}>{image.title}</h4>
      </div>
    </NavLink>
  ));

  return (
    <LayoutPageMain
      headerTitle="Activity Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderActivityAddon1={true}
      renderDiscoverAddon2={true}
      renderGalleryAddon4={true}
      discoverTitle2="Utforska 2"
      galleryTitle4="Galleri"
    >
      <section className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Activity Page Title</h2>
        <p className={styles.mainText}>
          Du kan välja bland flera spännande aktiviteter här nere. Oavsett om du
          föredrar att ta en avkopplande promenad vid vattnet, njuta av en glass
          på stranden, eller prova på något mer spännande som att åka på en
          båttur, finns det något som passar alla intressen.
        </p>
      </section>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default ActivityPageMain;
