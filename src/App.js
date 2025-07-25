// src/App.js
import "./App.css";
import useGeolocation from "./hooks/useGeolocation";
import WeatherInfo from "./components/WeatherInfo";
import CanvasGauge from "./components/CanvasGauge";
import NetworkStatus from "./components/NetworkStatus";
import { useState } from "react";

function App() {
  const { lat, lon, error } = useGeolocation();
  const [windSpeed, setWindSpeed] = useState(0);

  return (
    <div className="App">
      <div className="overlay">
        <h1 className="title">🌤 Nearby Weather & Speed Indicator</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {lat && lon ? (
          <div className="content">
            <WeatherInfo lat={lat} lon={lon} setWindSpeed={setWindSpeed} />
            <CanvasGauge windSpeed={windSpeed} />
            <NetworkStatus />
          </div>
        ) : (
          <p className="loading">Fetching your location...</p>
        )}
      </div>
    </div>
  );
}

export default App;
