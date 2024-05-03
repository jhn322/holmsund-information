import React from "react";
import Carousel from "./Carousel";
import styles from "../styles/Gallery.module.css";

// Static image and carousel of images
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";
import galleryImage5 from "../assets/gallery5.jpg";
import galleryCircle from "../assets/galleryCircle.png";

const Gallery = () => {
  const images = [galleryImage2, galleryImage3, galleryImage4, galleryImage5];

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
        <div>
          <Carousel images={images} title="Your Title" text="Your text" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
