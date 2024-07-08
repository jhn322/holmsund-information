// Home page Separator
export const trackSeparatorLinkClick = (linkText, linkUrl) => {
  gtag("event", "Link_click", {
    event_category: "separator-link-click",
    event_label: linkText,
    event_url: linkUrl,
  });
};

// Home page Acitivty
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

// Home page Gallery
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

// Home page Extra
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
