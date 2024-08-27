import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

if (trackingId) {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.async = true;
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", trackingId, { debug_mode: true });
    window.gtag = gtag;
  };
  document.head.appendChild(script);
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
