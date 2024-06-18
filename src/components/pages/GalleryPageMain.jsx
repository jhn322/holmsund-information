import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Components
import LayoutPageMain from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/AllPageMain.module.css";

// Images
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  const gridItems = gridImages.map((image, index) => (
    <NavLink to={image.path} className={styles.gridItemLink} key={index}>
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
      <div className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Gallery Page Title</h2>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, numquam
          et repudiandae rem dolore, quam quidem quas nisi libero, cupiditate
          voluptate? Corporis aliquid accusamus maxime excepturi delectus.
          Praesentium, impedit quia.
        </p>
      </div>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default GalleryPageMain;
