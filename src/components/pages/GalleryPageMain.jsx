import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LayoutPageMain from "../layouts/LayoutPageMain";
import { trackMainPagesClick } from "../analytics/pages";
import styles from "../../styles/pages/AllPageMain.module.css";
import header9 from "../../assets/header/header9.jpg";
import header10 from "../../assets/header/header10.jpg";
import header11 from "../../assets/header/header11.jpg";
import header12 from "../../assets/header/header12.jpg";
import galleryPage1 from "../../assets/gallery/galleryPageMain1.jpg";
import galleryPage2 from "../../assets/gallery/galleryPageMain2.jpg";
import galleryPage3 from "../../assets/gallery/galleryPageMain3.jpg";
import galleryPage4 from "../../assets/gallery/galleryPageMain4.jpg";

const GalleryPageMain = () => {
  const headerImages = [header9, header10, header11, header12];

  const gridImages = [
    { src: galleryPage1, title: "Title 1", path: "/galleri-1" },
    { src: galleryPage2, title: "Title 2", path: "/galleri-2" },
    { src: galleryPage3, title: "Title 3", path: "/galleri-3" },
    { src: galleryPage4, title: "Title 4", path: "/galleri-4" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }, 5000);
    return () => clearInterval(interval);
  }, [headerImages.length]);

  const gridItems = gridImages.map((image, index) => (
    <NavLink
      to={image.path}
      className={styles.gridItemLink}
      aria-label="Länkar till galleri sidor"
      key={index}
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
      headerTitle="Gallery Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon1={true}
      renderActivityAddon2={true}
      renderGalleryAddon3={true}
      discoverTitle1="Utforska 1"
      galleryTitle3="Aktiviteter"
    >
      <section className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Gallery Page Title</h2>
        <p className={styles.mainText}>
          Du kan besöka ett imponerande galleri här nere. Galleriet innehåller
          en mängd sevärda platser och intressanta punkter, från historiska
          byggnader till natursköna områden. Det finns mycket att upptäcka och
          utforska i denna samling av fascinerande platser.
        </p>
      </section>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default GalleryPageMain;
