import React from "react";
import styles from "../styles/Gallery.module.css";
import galleryImage1 from "../assets/gallery1.jpg";
import galleryCircle from "../assets/galleryCircle.png";

const Gallery = () => {
  return (
    <section>
      <div className={styles.galleryContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.galleryImageInner}>
            <div
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${galleryImage1})` }}
            >
              <div
                className={styles.galleryCircle}
                style={{ backgroundImage: `url(${galleryCircle})` }}
              ></div>
              <h2 className={styles.galleryTitle}>
                Första & <br /> Andra
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
