// src/components/WeatherInfo.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherInfo({ lat, lon, setWindSpeed }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_WEATHER_KEY; // ← Replace this!
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
      setWindSpeed(res.data.wind.speed);
    };

    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon, setWindSpeed]);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="box">
      <h2>Location: {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}
