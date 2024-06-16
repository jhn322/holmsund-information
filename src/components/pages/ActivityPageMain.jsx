import { useState, useEffect } from "react";

// Components
import LayoutPageMain from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/PageMain.module.css";

// Images
import header5 from "../../assets/header/header5.jpg";
import header6 from "../../assets/header/header6.jpg";
import header7 from "../../assets/header/header7.jpg";
import header8 from "../../assets/header/header8.jpg";
import activityPage1 from "../../assets/activity/activityPage1.jpg";
import activityPage2 from "../../assets/activity/activityPage2.jpg";
import activityPage3 from "../../assets/activity/activityPage3.jpg";
import activityPage4 from "../../assets/activity/activityPage4.jpg";

const ActivityPage = () => {
  const headerImages = [header5, header6, header7, header8];

  const gridImages = [
    { src: activityPage1, title: "Title 1" },
    { src: activityPage2, title: "Title 2" },
    { src: activityPage3, title: "Title 3" },
    { src: activityPage4, title: "Title 4" },
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
    <LayoutPageMain
      headerTitle="Activity Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderFeaturedAddon2={true}
      discoverTitle1="Upptäck 1"
      renderDiscoverAddon1={true}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Activity Page Title</h2>
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

export default ActivityPage;
