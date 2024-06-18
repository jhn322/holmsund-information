import { useEffect } from "react";

const ImagePreloader = ({ src }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  return null;
};

export default ImagePreloader;
