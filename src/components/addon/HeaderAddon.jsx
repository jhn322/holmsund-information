import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/addon/HeaderAddon.module.css";

const HeaderAddon = ({ title, backgroundImage }) => {
  const [loadedImage, setLoadedImage] = useState(null);
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
      style={{ backgroundImage: `url(${loadedImage || backgroundImage})` }}
    >
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

HeaderAddon.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeaderAddon;
