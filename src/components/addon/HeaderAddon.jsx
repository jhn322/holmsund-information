import { useEffect, useState } from "react";
import styles from "../../styles/addon/HeaderAddon.module.css";

const HeaderAddon = ({ title, backgroundImage }) => {
  const [loadedImage, setLoadedImage] = useState(backgroundImage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setLoadedImage(backgroundImage);
      setIsLoaded(true);
    };
  }, [backgroundImage]);

  return (
    <header
      className={`${styles.headerContainer} ${isLoaded ? styles.loaded : ""}`}
      style={{ backgroundImage: `url(${loadedImage})` }}
    >
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default HeaderAddon;
