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
            <article
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${galleryImage1})` }}
            >
              {/* galleryCircle is being handled in css additionally */}
              <div
                className={styles.galleryCircle}
                style={{ backgroundImage: `url(${galleryCircle})` }}
              ></div>
              {/* Main title */}
              <h2 className={styles.galleryTitle}>
                Första & <br /> Andra
              </h2>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
