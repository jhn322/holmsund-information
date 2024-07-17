import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { slideshowSet2 } from "../data/SlideshowSet";
import LayoutPage from "../layouts/LayoutPage";
import SlideshowAddon from "../addon/SlideshowAddon";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage2.jpg";

const GalleryPage2 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-2");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 2"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon1={true}
      renderGalleryAddon2={true}
      discoverTitle3="Aktiviteter"
      galleryTitle2="Utforska 2"
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 2</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex velit eum
          molestias cupiditate vero, et error sequi quidem. Labore ratione
          veniam esse, neque iste accusantium accusamus ut eveniet voluptas
          quos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <p className={styles.text}>
          Quos nemo nisi nostrum magnam pariatur debitis, necessitatibus
          repellat rem molestiae et nam ipsum assumenda ipsa esse saepe cumque
          recusandae vitae molestias? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum sint vero, ab officia quibusdam dolor?
          Accusantium maxime ipsam sunt porro id nam sed accusamus, possimus
          ullam earum iure modi vitae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p className={styles.text}>
          Ipsam alias nobis eveniet vero totam sapiente tempora aut dignissimos
          vel! Fugiat illo, tempora quia voluptatibus exercitationem debitis
          veritatis facere error omnis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Distinctio dolore qui est esse ipsa aliquam minus
          optio nesciunt quasi? Optio deleniti harum vero quibusdam aspernatur
          nostrum vel repellendus culpa tempore.
        </p>
      </article>
      <SlideshowAddon images={slideshowSet2} />
    </LayoutPage>
  );
};

export default GalleryPage2;
