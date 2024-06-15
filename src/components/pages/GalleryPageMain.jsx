import { useState, useEffect } from "react";
import ActivityAddon from "../addon/ActivityAddon";

// Components
import Layout from "../layouts/Layout";

// CSS
import styles from "../../styles/pages/PageMain.module.css";

// Images
import header9 from "../../assets/header/header9.jpg";
import header10 from "../../assets/header/header10.jpg";
import header11 from "../../assets/header/header11.jpg";
import header12 from "../../assets/header/header12.jpg";
import galleryPage1 from "../../assets/gallery/galleryPage1.jpg";
import galleryPage2 from "../../assets/gallery/galleryPage2.jpg";
import galleryPage3 from "../../assets/gallery/galleryPage3.jpg";
import galleryPage4 from "../../assets/gallery/galleryPage4.jpg";

const GalleryPageMain = () => {
  const headerImages = [header9, header10, header11, header12];

  const gridImages = [
    { src: galleryPage1, title: "Title 1" },
    { src: galleryPage2, title: "Title 2" },
    { src: galleryPage3, title: "Title 3" },
    { src: galleryPage4, title: "Title 4" },
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
    <div className={styles.gridItem} key={index}>
      <img src={image.src} alt={`Image ${index}`} />
      <h4 className={styles.title}>{image.title}</h4>
    </div>
  ));

  return (
    <Layout
      headerTitle="Gallery Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
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
      <ActivityAddon />
    </Layout>
  );
};

export default GalleryPageMain;
