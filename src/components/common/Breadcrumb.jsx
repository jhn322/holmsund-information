import React from "react";
import { Link, useLocation } from "react-router-dom";
import { trackBreadcrumbElementClick } from "../analytics/common";
import { RxChevronRight } from "react-icons/rx";
import styles from "../../styles/common/Breadcrumb.module.css";

const pageToSectionMap = {
  // Utforska pages
  branteberget: "utforska",
  kajutan: "utforska",
  ljumviken: "utforska",
  revet: "utforska",
  storsjoskolan: "utforska",
  solbackakyrkan: "utforska",
  lovosundet: "utforska",
  kasaviken: "utforska",
  // Aktiviteter pages
  "sandviks-idrottsklubb": "aktiviteter",
  elljussparet: "aktiviteter",
  "umea-golfklubb": "aktiviteter",
  storsjohallen: "aktiviteter",
  omberget: "aktiviteter",
  djupvik: "aktiviteter",
  "holmsunds-tennisklubb": "aktiviteter",
  vasterlangsladan: "aktiviteter",
  // Galleri pages
  osterfjarden: "galleri",
  storsjoparken: "galleri",
  sikskarsvaken: "galleri",
  "holmsunds-kyrka": "galleri",
  holmsundsbanan: "galleri",
  holmen: "galleri",
  skargardsskolan: "galleri",
  "holmsund-hamn": "galleri",
};

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
    const pageName = path.split("/").pop();
    const section = pageToSectionMap[pageName];
    if (section) {
      return section.charAt(0).toUpperCase() + section.slice(1);
    }
    return null;
  };

  const buildBreadcrumbItems = () => {
    const items = [{ text: "Hem", to: "/" }];
    const mainSection = getMainSection(pathname);

    if (mainSection) {
      items.push({
        text: mainSection,
        to: `/${mainSection.toLowerCase()}`,
      });

      const pageName = pathname.split("/").pop();
      items.push({
        text: decodeURIComponentSafe(pageName),
        to: `/${pathname}`,
        isLast: true,
      });
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
              {item.isLast ? (
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
