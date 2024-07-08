// Scroll Down
export const trackScrollDownElementClick = (
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

// Scroll Up
export const trackScrollUpElementClick = (
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

// Breadcrumb
export const trackBreadcrumbElementClick = (
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

// Cookies
export const trackCookiesElementClick = (
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

// Extra
export const trackExtraElementClick = (
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

// Footer
export const trackFooterElementClick = (
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

// Navigation
export const trackElementClick = (elementType, elementText, elementUrl) => {
  window.gtag("event", "Element_click", {
    event_category: elementType,
    event_label: elementText,
    event_url: elementUrl,
  });
};
