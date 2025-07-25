// src/components/NetworkStatus.js
import useNetworkStatus from "../hooks/useNetworkStatus";

export default function NetworkStatus() {
  const { online, downlink, type } = useNetworkStatus();

  return (
    <div className="box">
      <h3>Network Status</h3>
      <p>Status: {online ? "Online ✅" : "Offline ❌"}</p>
      <p>Connection Type: {type}</p>
      <p>Speed: {downlink} Mbps</p>
    </div>
  );
}
