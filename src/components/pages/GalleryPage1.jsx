import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage1.jpg";

import galleryPhoto1 from "../../assets/gallery/galleryPhoto1.jpg";
import galleryPhoto2 from "../../assets/gallery/galleryPhoto2.jpg";
import galleryPhoto3 from "../../assets/gallery/galleryPhoto3.jpg";
import galleryPhoto4 from "../../assets/gallery/galleryPhoto4.jpg";
import galleryPhoto5 from "../../assets/gallery/galleryPhoto5.jpg";
import galleryPhoto6 from "../../assets/gallery/galleryPhoto6.jpg";
import galleryPhoto7 from "../../assets/gallery/galleryPhoto7.jpg";
import galleryPhoto8 from "../../assets/gallery/galleryPhoto8.jpg";
import galleryPhoto9 from "../../assets/gallery/galleryPhoto9.jpg";
import galleryPhoto10 from "../../assets/gallery/galleryPhoto10.jpg";
import galleryPhoto11 from "../../assets/gallery/galleryPhoto11.jpg";
import galleryPhoto12 from "../../assets/gallery/galleryPhoto12.jpg";

const galleryPhotos = [
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
  galleryPhoto7,
  galleryPhoto8,
  galleryPhoto9,
  galleryPhoto10,
  galleryPhoto11,
  galleryPhoto12,
];

const GalleryPage1 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-1");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 1"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 1</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>

        <div className={styles.gallery}>
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}
            >
              <img src={photo} alt={`Gallery photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </article>
    </LayoutPage>
  );
};

export default GalleryPage1;
