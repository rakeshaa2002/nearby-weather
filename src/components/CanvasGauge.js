// src/components/CanvasGauge.js
import { useEffect, useRef } from "react";

export default function CanvasGauge({ windSpeed }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw base arc
    ctx.beginPath();
    ctx.arc(100, 100, 80, Math.PI, 2 * Math.PI);
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 10;
    ctx.stroke();

    // Draw wind speed pointer
    const angle = Math.PI + (Math.min(windSpeed, 20) / 20) * Math.PI;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100 + 80 * Math.cos(angle), 100 + 80 * Math.sin(angle));
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
  }, [windSpeed]);

  return (
    <div className="box">
      <h3>Wind Speed Gauge</h3>
      <canvas ref={canvasRef} width="200" height="200" />
    </div>
  );
}
