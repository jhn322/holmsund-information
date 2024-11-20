import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { trackWeatherPageClick } from "../analytics/pages";
import LayoutMainPage from "../layouts/LayoutPageMain";
import styles from "../../styles/pages/WeatherPage.module.css";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const elementsToAnimate = useRef([]);

  useEffect(() => {
    setDocumentTitle("Väder");
  }, []);

  const [isVisible, setIsVisible] = useState({
    title: false,
    text: false,
    googleMaps: false,
    downloadMap: false,
  });

  const observeElement = (entry, key) => {
    if (entry.isIntersecting) {
      setIsVisible((prev) => ({ ...prev, [key]: true }));
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains(styles.title)) {
          observeElement(entry, "title");
        }
        if (entry.target.classList.contains(styles.text)) {
          observeElement(entry, "text");
        }
        if (entry.target.classList.contains(styles.googleMaps)) {
          observeElement(entry, "googleMaps");
        }
        if (entry.target.classList.contains(styles.downloadMap)) {
          observeElement(entry, "downloadMap");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      `.${styles.title}, .${styles.text}, .${styles.googleMaps}, .${styles.downloadMap}`
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Async current weather api data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Holmsund`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error);
      }
    };

    // Async 3 day weather api data
    const fetchForecastData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Holmsund&days=3`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        setError(error);
      }
    };

    // Call the data fetching functions
    fetchWeatherData();
    fetchForecastData();
  }, []);

  // Helper function to get the day of the week from a date string in Swedish
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString("sv-SE", { weekday: "long" });
    return `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`;
  };

  const translateCondition = (condition) => {
    const lowerCaseCondition = condition.toLowerCase();

    // Translated weather conditions
    const conditionMappings = {
      sunny: "Soligt",
      "partly cloudy": "Delvis molnigt",
      cloudy: "Molnigt",
      overcast: "Mulet",
      mist: "Dimma",
      "patchy rain possible": "Lätt regn möjligt",
      "light rain": "Lätt regn",
      "heavy rain": "Kraftigt regn",
      "moderate rain": "Måttligt regn",
      "light snow": "Lätt snö",
      "heavy snow": "Kraftig snö",
      "moderate snow": "Måttlig snö",
      "thundery outbreaks possible": "Åskskurar möjligt",
      fog: "Dimma",
      clear: "Klart",
      "patchy light rain": "Fläckvis lätt regn",
      "patchy rain nearby": "Fläckvis regn i närheten",
      blizzard: "Snöstorm",
      "light freezing rain": "Lätt snöstorm",
      "freezing rain": "Snöstorm",
      "heavy freezing rain": "Kraftigt snöstorm",
      "light sleet": "Lätt snöblandat regn",
      "moderate or heavy sleet": "Snöblandat regn",
      "heavy sleet": "Kraftigt snöblandat regn",
      "possible small hail": "Möjligt liten hagel",
      "possible hail": "Möjligt hagel",
      "possible heavy hail": "Möjligt kraftigt hagel",
      "light drizzle": "Lätt duggregn",
      "moderate drizzle": "Måttligt duggregn",
      "dense drizzle": "Större duggregn",
      "light freezing drizzle": "Lätt snöstorm",
      "dense freezing drizzle": "Större snöstorm",
      "shallow freezing drizzle": "Lätt snöstorm",
      "slight freezing drizzle": "Lätt snöstorm",
      "moderate or heavy freezing drizzle": "Snöstorm",
      "heavy freezing drizzle": "Kraftigt snöstorm",
      "light rain shower": "Lätt regnskura",
      shower: "Regnskura",
      "heavy rain shower": "Kraftigt regnskura",
      "ragged shower": "Regnskura",
      "shower rain": "Regnskura",
      sleet: "Snöblandat regn",
      "shower sleet": "Snöblandat regn",
      snow: "Snö",
      "snow flurry": "Snöbyar",
      "light snow shower": "Lätt snöstorm",
      "blowing snow": "Snöstorm",
      "snow shower": "Snöstorm",
      thunderstorm: "Åskskura",
      "thunderstorm with light rain": "Åskskura med lätt regn",
      "thunderstorm with rain": "Åskskura med regn",
      "thunderstorm with heavy rain": "Åskskura med kraftigt regn",
    };

    for (const key in conditionMappings) {
      if (lowerCaseCondition.includes(key)) {
        return conditionMappings[key];
      }
    }

    return condition;
  };

  // Card background colors
  const backgroundColors = [
    styles.orangeBackground,
    styles.purpleBackground,
    styles.blueBackground,
  ];

  const handleLinkClick = (title, url) => {
    trackWeatherPageClick("Link", title, url);
  };

  return (
    <LayoutMainPage
      renderHeaderAddon={false}
      renderWeatherCircleAddon={true}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon2={true}
      discoverTitle4="Galleri"
      galleryTitle2="Upptäck 2"
    >
      <div className={styles.container}>
        <h2
          className={`${styles.title} ${
            isVisible.title ? styles.visible : styles.hidden
          }`}
        >
          Prognos Holmsund
        </h2>
        <p
          className={`${styles.text} ${
            isVisible.text ? styles.visible : styles.hidden
          }`}
        >
          Här kan du få den senaste väderinformationen för Holmsund, både för
          idag och de kommande tre dagarna. Håll dig uppdaterad med aktuella
          prognoser för att planera dina aktiviteter på bästa sätt.
        </p>
        {error && <p>Failed to load weather data: {error.message}</p>}
        {!weatherData && !error && <p>Loading current weather data...</p>}
        {!forecastData && !error && <p>Loading forecast data...</p>}
        {weatherData && (
          <div className={styles.weatherAndForecast}>
            <div className={styles.weatherInfo}>
              <h3>Nuvarande väder</h3>
              <p>
                Temperatur:
                <span className={styles.weatherSpan}>
                  {weatherData.current.temp_c}°C
                </span>
              </p>
              <p>
                Luftfuktighet:
                <span className={styles.weatherSpan}>
                  {weatherData.current.humidity}%
                </span>
              </p>
              <p>
                Vind:
                <span className={styles.weatherSpan}>
                  {weatherData.current.wind_kph} km/h
                </span>
              </p>
              <p>
                Väder:
                <span className={styles.weatherSpan}>
                  {translateCondition(weatherData.current.condition.text)}
                </span>
              </p>
              <img
                className={styles.img}
                src={weatherData.current.condition.icon}
                alt="Weather Icons"
              />
            </div>
            {forecastData && (
              <>
                {forecastData.forecast.forecastday.map((day, index) => (
                  <div
                    key={day.date}
                    className={`${styles.forecastDay} ${
                      backgroundColors[index % backgroundColors.length]
                    }`}
                  >
                    <h3>{getDayOfWeek(day.date)}</h3>
                    <p>
                      Datum:{" "}
                      <span className={styles.weatherSpan}>{day.date}</span>
                    </p>
                    <p>
                      Högsta Temperatur:
                      <span className={styles.weatherSpan}>
                        {day.day.maxtemp_c}°C
                      </span>
                    </p>
                    <p>
                      Lägsta Temperatur:
                      <span className={styles.weatherSpan}>
                        {day.day.mintemp_c}°C
                      </span>
                    </p>
                    <p>
                      Väder:
                      <span className={styles.weatherSpan}>
                        {translateCondition(day.day.condition.text)}
                      </span>
                    </p>
                    <img
                      className={styles.img}
                      src={day.day.condition.icon}
                      alt="Weather Icons"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        )}
        <div className={styles.goToWeather}>
          <div className={styles.InnerWeather}>
            <a
              href="https://www.smhi.se/vader/prognoser/ortsprognoser/q/Holmsund/Ume%C3%A5/605676"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Extern länk till SMHI vädersida"
              onClick={() =>
                handleLinkClick(
                  "För mer väderinformation klicka här",
                  "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Holmsund/Ume%C3%A5/605676"
                )
              }
            >
              <h3>Mer väderinformation</h3>
            </a>
            <div className={styles.description}>
              <p>
                SMHI är en pålitlig och omfattande källa för väderinformation i
                Sverige, med detaljerade prognoser och varningar. Dess
                användarvänliga gränssnitt gör det enkelt att få aktuella
                väderuppdateringar och planera aktiviteter utomhus.
              </p>
              <p className={styles.source}>
                Källa: <span>SMHI</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutMainPage>
  );
};

export default WeatherPage;
