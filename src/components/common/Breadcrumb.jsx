import React from "react";
import { Link, useLocation } from "react-router-dom";
import { trackBreadcrumbElementClick } from "../analytics/common";
import { RxChevronRight } from "react-icons/rx";
import styles from "../../styles/common/Breadcrumb.module.css";

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

  // Google Analytics
  const trackLinkClick = (linkText, linkUrl) => {
    trackBreadcrumbElementClick("breadcrumb_link", linkText, linkUrl);
  };

  return (
    <nav aria-label={styles.breadcrumb}>
      <article className={styles.breadcrumb}>
        <span className={styles.breadcrumbItem}>
          <Link to="/" onClick={() => trackLinkClick("Hem", "/")}>
            Hem
          </Link>
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
                <Link to={to} onClick={() => trackLinkClick(decodedValue, to)}>
                  {decodedValue}
                </Link>
              )}
            </span>
          );
        })}
      </article>
    </nav>
  );
};

export default Breadcrumb;
