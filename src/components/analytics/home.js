// Header
export const trackHeaderButtonClick = (buttonText, buttonPath) => {
  gtag("event", "Header_click", {
    event_category: "Header_button_click",
    event_label: buttonText,
    event_path: buttonPath,
  });
};

// Discover
export const trackDiscoverButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Discover_click", {
    event_category: "Discover_button_click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// Discover Inspired
export const trackDiscoverInspiredButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Discover_inspired_click", {
    event_category: "Discover_inspired_button_click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// Separator
export const trackSeparatorLinkClick = (linkText, linkUrl) => {
  gtag("event", "Separator_click", {
    event_category: "Separator_link_click",
    event_label: linkText,
    event_url: linkUrl,
  });
};

// Acitivty
export const trackActivityElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Activity_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// Gallery
export const trackGalleryElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Gallery_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// Extra Home
export const trackExtraHomeElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Extra_home_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
