import React from "react";

// Componente simple que demuestra el uso de props.
const Greeting = ({ name }) => {
  return (
    <div className="card p-3 shadow-sm">
      <h3 className="mb-1">¡Hola, {name}!</h3>
      <p className="mb-0 text-muted">
        Este componente recibe el nombre por props y lo muestra en pantalla.
      </p>
    </div>
  );
};

export default Greeting;
