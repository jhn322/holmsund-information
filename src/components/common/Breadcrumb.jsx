import React from "react";
import { Link, useLocation } from "react-router-dom";

// CSS
import styles from "../../styles/common/Breadcrumb.module.css";

// Icons
import { RxChevronRight } from "react-icons/rx";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Function to decode URI for special characters
  const decodeURIComponentSafe = (uri) => {
    try {
      return decodeURIComponent(uri);
    } catch (error) {
      console.error("Error decoding URI component:", error);
      return uri;
    }
  };

  return (
    <nav aria-label={styles.breadcrumb}>
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbItem}>
          <Link to="/">Hem</Link>
        </span>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const decodedValue = decodeURIComponentSafe(value);
          return (
            <span key={to} className={styles.breadcrumbItem}>
              <RxChevronRight className={styles.arrowIcon} />
              {isLast ? (
                <span className={styles.breadcrumbCurrent}>{decodedValue}</span>
              ) : (
                <Link to={to}>{decodedValue}</Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
