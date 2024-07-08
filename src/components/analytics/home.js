// Header
export const trackHeaderButtonClick = (buttonText, buttonPath) => {
  gtag("event", "Button_click", {
    event_category: "header-button-click",
    event_label: buttonText,
    event_path: buttonPath,
  });
};

// Discover
export const trackDiscoverButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Button_click", {
    event_category: "discover-button-click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// Discover Inspired
export const trackDiscoverInspiredButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Button_click", {
    event_category: "discover-inspired-button-click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// Separator
export const trackSeparatorLinkClick = (linkText, linkUrl) => {
  gtag("event", "Link_click", {
    event_category: "separator-link-click",
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
  gtag("event", "Element_click", {
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
  gtag("event", "Element_click", {
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
  gtag("event", "Element_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
