import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Components
import LayoutPageMain from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/AllPageMain.module.css";
import styles2 from "../../styles/pages/DiscoverPageMain.module.css";

// Images
import header1 from "../../assets/header/header1.jpg";
import header2 from "../../assets/header/header2.jpg";
import header3 from "../../assets/header/header3.jpg";
import header4 from "../../assets/header/header4.jpg";
import discoverPageMain1 from "../../assets/discover/discoverPageMain1.jpg";
import discoverPageMain2 from "../../assets/discover/discoverPageMain2.jpg";
import discoverPageMain3 from "../../assets/discover/discoverPageMain3.jpg";
import discoverPageMain4 from "../../assets/discover/discoverPageMain4.jpg";
import discoverPageMain5 from "../../assets/discover/discoverPageMain5.jpg";
import discoverPageMain6 from "../../assets/discover/discoverPageMain6.jpg";
import discoverPageMain7 from "../../assets/discover/discoverPageMain7.jpg";
import discoverPageMain8 from "../../assets/discover/discoverPageMain8.jpg";

const DiscoverPageMain = () => {
  const headerImages = [header1, header2, header3, header4];

  const gridImages = [
    { src: discoverPageMain1, title: "Title 1", path: "/utforska-1" },
    { src: discoverPageMain2, title: "Title 2", path: "/utforska-2" },
    { src: discoverPageMain3, title: "Title 3", path: "/utforska-3" },
    { src: discoverPageMain4, title: "Title 4", path: "/utforska-4" },
    { src: discoverPageMain5, title: "Title 5", path: "/utforska-5" },
    { src: discoverPageMain6, title: "Title 6", path: "/utforska-6" },
    { src: discoverPageMain7, title: "Title 7", path: "/utforska-7" },
    { src: discoverPageMain8, title: "Title 8", path: "/utforska-8" },
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
    <NavLink to={image.path} className={styles2.gridItemLink} key={index}>
      <div className={styles.gridItem}>
        <img src={image.src} alt={`Image ${index}`} />
        <h4 className={styles.title}>{image.title}</h4>
      </div>
    </NavLink>
  ));

  return (
    <LayoutPageMain
      headerTitle="Discover Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon3={true}
      renderActivityAddon4={true}
      discoverTitle3="Aktiviteter"
    >
      <div className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Discover Page Title</h2>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, numquam
          et repudiandae rem dolore, quam quidem quas nisi libero, cupiditate
          voluptate? Corporis aliquid accusamus maxime excepturi delectus.
          Praesentium, impedit quia.
        </p>
      </div>
      <div className={styles2.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default DiscoverPageMain;
