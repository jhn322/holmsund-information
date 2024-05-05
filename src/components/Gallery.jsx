import React from "react";
import Carousel from "./Carousel";
import styles from "../styles/GalleryCarousel.module.css";

// Static image and carousel of images
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";
import galleryImage5 from "../assets/gallery5.jpg";
import galleryCircle from "../assets/galleryCircle.png";

const Gallery = () => {
  const images = [
    {
      url: galleryImage2,
      title: "Badställe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
    },
    {
      url: galleryImage3,
      title: "Skog",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
    },
    {
      url: galleryImage4,
      title: "Vattentorn",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec.",
    },
    {
      url: galleryImage5,
      title: "Storsjöskolan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum.",
    },
  ];

  return (
    <section>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImageContainer}>
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
        <div className={styles.carouselText}>
          <Carousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
