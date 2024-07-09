// Missing Page
export const trackMissingPageClick = (elementType, elementText, elementUrl) => {
  gtag("event", "Missing_Page_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// Activity, Discover, Gallery Main Pages
export const trackMainPagesClick = (elementType, elementText, elementUrl) => {
  gtag("event", "Activity_Discover_Gallery_page_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// Map Page
export const trackMapPageClick = (elementType, elementText, elementUrl) => {
  gtag("event", "Map_page_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// Weather Page
export const trackWeatherPageClick = (elementType, elementText, elementUrl) => {
  gtag("event", "Weather_page_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
