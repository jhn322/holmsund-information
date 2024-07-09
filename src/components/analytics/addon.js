// OtherAddon
export const trackOtherAddonElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Other_addon_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// HeaderAddonPage
export const trackHeaderAddonPageClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Header_addon_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// DiscoverAddon
export const trackDiscoverButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Discover_addon_click", {
    event_category: "discover-button-click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// AcitivtyAddon
export const trackActivityElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Activity_addon_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};

// GalleryAddon
export const trackGalleryElementClick = (
  elementType,
  elementText,
  elementUrl
) => {
  gtag("event", "Gallery_addon_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
