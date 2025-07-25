// src/hooks/useNetworkStatus.js
import { useEffect, useState } from "react";

export default function useNetworkStatus() {
  const [networkInfo, setNetworkInfo] = useState({
    online: navigator.onLine,
    downlink: navigator.connection?.downlink || "N/A",
    effectiveType: navigator.connection?.effectiveType || "unknown",
  });

  useEffect(() => {
    const updateNetwork = () => {
      setNetworkInfo({
        online: navigator.onLine,
        downlink: navigator.connection?.downlink || "N/A",
        effectiveType: navigator.connection?.effectiveType || "unknown",
      });
    };

    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);
    navigator.connection?.addEventListener("change", updateNetwork);

    return () => {
      window.removeEventListener("online", updateNetwork);
      window.removeEventListener("offline", updateNetwork);
      navigator.connection?.removeEventListener("change", updateNetwork);
    };
  }, []);

  return networkInfo;
}
