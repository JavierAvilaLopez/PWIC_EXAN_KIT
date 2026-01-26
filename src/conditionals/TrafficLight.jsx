import React, { useEffect, useState } from "react";

// Simula un semáforo cambiando el color cada 3 segundos.
const TrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    // Limpieza del intervalo.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Semáforo</h4>
      <div className="traffic-light">
        {colors.map((color, index) => (
          <div
            key={color}
            className={`light ${color} ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
