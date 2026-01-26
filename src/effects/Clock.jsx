import React, { useEffect, useState } from "react";

// Actualiza la hora cada segundo usando useEffect.
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Hora actual</h4>
      <p className="fs-5">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
