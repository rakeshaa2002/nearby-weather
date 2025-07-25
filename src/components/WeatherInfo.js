// src/components/WeatherInfo.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherInfo({ lat, lon, setWindSpeed }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_WEATHER_KEY;

      if (!API_KEY) {
        setError("API Key is missing! Check your .env file.");
        return;
      }

      try {
        console.log("Using API_KEY:", API_KEY);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        setWeather(res.data);
        setWindSpeed(res.data.wind.speed);
      } catch (err) {
        console.error("Error fetching weather:", err.message);
        setError("Failed to fetch weather data. Please try again.");
      }
    };

    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon, setWindSpeed]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="box">
      <h2>Location: {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}
