import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutHome from "../layouts/LayoutHome";

const HomePage = () => {
  useEffect(() => {
    setDocumentTitle("Hem");
  }, []);

  return <LayoutHome></LayoutHome>;
};

export default HomePage;
