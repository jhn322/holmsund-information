import { useState, useEffect } from "react";

// Components
import LayoutMainPage from "../layouts/LayoutPageMain";
import config from "../../../config";

// CSS
import styles from "../../styles/pages/WeatherPage.module.css";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = config.apiKey;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
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
  }, [apiKey]);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString("sv-SE", { weekday: "long" });
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
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
      "patchy rain nearby": "Fläckvis regn nära",
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
            <p>Temperatur: {weatherData.current.temp_c}°C</p>
            <p>Luftfuktighet: {weatherData.current.humidity}%</p>
            <p>Vind: {weatherData.current.wind_kph} kph</p>
            <p>
              Väder: {translateCondition(weatherData.current.condition.text)}
            </p>
            <img
              className={styles.img}
              src={weatherData.current.condition.icon}
              alt="Weather Icon"
            />
          </div>
        )}
        <div className={styles.threeDayTitle}>
          <h2>3-dagars prognos</h2>
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
                <p>Datum: {day.date}</p>
                <p>Högsta Temperatur: {day.day.maxtemp_c}°C</p>
                <p>Lägsta Temperatur: {day.day.mintemp_c}°C</p>
                <p>Väder: {translateCondition(day.day.condition.text)}</p>
                <img
                  className={styles.img}
                  src={day.day.condition.icon}
                  alt="Weather Icons"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </LayoutMainPage>
  );
};

export default WeatherPage;
