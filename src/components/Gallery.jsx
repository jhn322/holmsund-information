import React from "react";
import AutoCarousel from "./AutoCarousel";
import styles from "../styles/GalleryCarousel.module.css";

// Static image and carousel of images
import staticGalleryImage from "../assets/staticGallery.jpg";
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";
import galleryCircle from "../assets/galleryCircle.png";

const Gallery = () => {
  const images = [
    {
      url: galleryImage1,
      title: "Badställe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/galleri-1",
    },
    {
      url: galleryImage2,
      title: "Skog",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/galleri-2",
    },
    {
      url: galleryImage3,
      title: "Vattentorn",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec.",
      link: "/galleri-3",
    },
    {
      url: galleryImage4,
      title: "Storsjöskolan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum.",
      link: "/galleri-4",
    },
  ];

  return (
    <section>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImageContainer}>
          <div className={styles.galleryImageInner}>
            <article
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${staticGalleryImage})` }}
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
          <AutoCarousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
