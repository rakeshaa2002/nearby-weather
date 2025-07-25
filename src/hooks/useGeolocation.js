// src/hooks/useGeolocation.js
import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState({ lat: null, lon: null, error: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ error: "Geolocation not supported by your browser" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          error: null,
        });
      },
      (err) => setLocation({ error: err.message })
    );
  }, []);

  return location;
}
