import React from "react";
import { Link, useLocation } from "react-router-dom";
import { trackBreadcrumbElementClick } from "../analytics/common";
import { RxChevronRight } from "react-icons/rx";
import styles from "../../styles/common/Breadcrumb.module.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

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

  const getMainSection = (path) => {
    const sections = {
      galleri: "Galleri",
      aktiviteter: "Aktiviteter",
      utforska: "Utforska",
    };
    for (const [key, value] of Object.entries(sections)) {
      if (path.startsWith(key)) return value;
    }
    return null;
  };

  const buildBreadcrumbItems = () => {
    const items = [{ text: "Hem", to: "/" }];
    const mainSection = getMainSection(pathname);

    if (mainSection) {
      const mainSectionPath = `/${pathname.split("-")[0]}`;
      const isMainSectionCurrent = pathname === mainSectionPath.slice(1);
      items.push({
        text: mainSection,
        to: mainSectionPath,
        isMainSectionCurrent,
      });

      if (!isMainSectionCurrent) {
        items.push({
          text: decodeURIComponentSafe(pathname),
          to: `/${pathname}`,
          isLast: true,
        });
      }
    } else if (pathname) {
      items.push({
        text: decodeURIComponentSafe(pathname),
        to: `/${pathname}`,
        isLast: true,
      });
    }

    return items;
  };

  const breadcrumbItems = buildBreadcrumbItems();

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <article>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            {index > 0 && (
              <RxChevronRight className={styles.arrowIcon} aria-hidden="true" />
            )}
            <span className={styles.breadcrumbItem}>
              {item.isLast || item.isMainSectionCurrent ? (
                <span className={styles.breadcrumbCurrent}>{item.text}</span>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => trackLinkClick(item.text, item.to)}
                >
                  {item.text}
                </Link>
              )}
            </span>
          </React.Fragment>
        ))}
      </article>
    </nav>
  );
};

export default Breadcrumb;
