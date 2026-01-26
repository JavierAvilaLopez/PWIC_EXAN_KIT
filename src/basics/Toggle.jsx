import React, { useState } from "react";

// Alterna un estado booleano y muestra el resultado en pantalla.
const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Toggle</h4>
      <p className="fs-5">Estado: {isActive ? "Activo" : "Inactivo"}</p>
      <button className="btn btn-warning" onClick={() => setIsActive(!isActive)}>
        Cambiar estado
      </button>
    </div>
  );
};

export default Toggle;
