// OtherAddon
export const trackOtherAddonElementClick = (
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

// HeaderAddonPage
export const trackHeaderAddonPageClick = (
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

// DiscoverAddon
export const trackDiscoverButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Button_click", {
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
  gtag("event", "Element_click", {
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
  gtag("event", "Element_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
