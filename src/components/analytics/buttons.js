// Home page Header
export const trackHeaderButtonClick = (buttonText, buttonPath) => {
  gtag("event", "Button_click", {
    event_category: "header-button-click",
    event_label: buttonText,
    event_path: buttonPath,
  });
};

// Home page Discover
export const trackDiscoverButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Button_click", {
    event_category: "discover-button-click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};

// Home page Discover Inspired
export const trackDiscoverInspiredButtonClick = (buttonText, buttonUrl) => {
  gtag("event", "Button_click", {
    event_category: "discover-inspired-button-click",
    event_label: buttonText,
    event_url: buttonUrl,
  });
};
