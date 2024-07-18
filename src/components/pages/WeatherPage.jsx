import { useState, useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { trackWeatherPageClick } from "../analytics/pages";
import LayoutMainPage from "../layouts/LayoutPageMain";
import styles from "../../styles/pages/WeatherPage.module.css";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDocumentTitle("Väder");
  }, []);

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

    fetchWeatherData();
    fetchForecastData();
  }, []);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString("sv-SE", { weekday: "long" });
    return `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`;
  };

  const translateCondition = (condition) => {
    const lowerCaseCondition = condition.toLowerCase();

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
    };

    for (const key in conditionMappings) {
      if (lowerCaseCondition.includes(key)) {
        return conditionMappings[key];
      }
    }

    return condition;
  };

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
        {error && <p>Failed to load weather data: {error.message}</p>}
        {!weatherData && !error && <p>Loading current weather data...</p>}
        {!forecastData && !error && <p>Loading forecast data...</p>}
        {weatherData && (
          <div className={styles.weatherInfo}>
            <h1>Nuvarande väder</h1>
            <p>
              Temperatur:{" "}
              <span className={styles.weatherSpan}>
                {weatherData.current.temp_c}°C
              </span>
            </p>
            <p>
              Luftfuktighet:{" "}
              <span className={styles.weatherSpan}>
                {weatherData.current.humidity}%
              </span>
            </p>
            <p>
              Vind:{" "}
              <span className={styles.weatherSpan}>
                {weatherData.current.wind_kph} km/h
              </span>
            </p>
            <p>
              Väder:{" "}
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
        )}
        <div className={styles.title}>
          <h2>Prognos för kommande 3 dagar</h2>
        </div>
        {forecastData && (
          <div className={styles.forecastInfo}>
            {forecastData.forecast.forecastday.map((day, index) => (
              <div
                key={day.date}
                className={`${styles.forecastDay} ${
                  backgroundColors[index % backgroundColors.length]
                }`}
              >
                <h3>{getDayOfWeek(day.date)}</h3>
                <p>
                  Datum: <span className={styles.weatherSpan}>{day.date}</span>
                </p>
                <p>
                  Högsta Temperatur:{" "}
                  <span className={styles.weatherSpan}>
                    {day.day.maxtemp_c}°C
                  </span>
                </p>
                <p>
                  Lägsta Temperatur:{" "}
                  <span className={styles.weatherSpan}>
                    {day.day.mintemp_c}°C
                  </span>
                </p>
                <p>
                  Väder:{" "}
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
          </div>
        )}
        <div className={`${styles.title} ${styles.title2}`}>
          <h2>Extern prognos</h2>
        </div>
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
                  "https://www.yr.no/nb/v%C3%A4rvarsel/daglig-tabell/2-605676/Sverige/V%C3%A4sterbottens%20l%C3%A4n/Ume%C3%A5%20Kommun/Holmsund"
                )
              }
            >
              <h3>För mer väderinformation klicka här</h3>
            </a>
            <div className={styles.description}>
              <p>
                SMHI är en pålitlig och omfattande källa för väderinformation i
                Sverige, med detaljerade prognoser och varningar. Dess
                användarvänliga gränssnitt gör det enkelt att få aktuella
                väderuppdateringar och planera aktiviteter utomhus.
              </p>
              <p className={styles.source}>
                Källa:{" "}
                <a href="https://www.smhi.se/q/Stockholm/2673730">SMHI</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutMainPage>
  );
};

export default WeatherPage;
