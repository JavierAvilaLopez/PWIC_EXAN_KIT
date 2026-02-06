import React, { useState } from "react";

/**
 * Plantilla de componente funcional en React.
 *
 * Cómo usar:
 * 1) Ajusta COMPONENT_CONFIG con textos y valores iniciales.
 * 2) Reemplaza handleAction con tu lógica real.
 */
const COMPONENT_CONFIG = {
  title: "Nuevo componente",
  description: "Describe el objetivo de este componente.",
  initialCount: 0,
  buttonLabel: "Actualizar",
};

const FunctionalComponentTemplate = () => {
  const [count, setCount] = useState(COMPONENT_CONFIG.initialCount);

  const handleAction = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className="p-3 border rounded">
      <h3 className="mb-2">{COMPONENT_CONFIG.title}</h3>
      <p className="text-muted">{COMPONENT_CONFIG.description}</p>
      <div className="d-flex align-items-center gap-3">
        <span className="fw-semibold">{count}</span>
        <button className="btn btn-outline-primary" onClick={handleAction}>
          {COMPONENT_CONFIG.buttonLabel}
        </button>
      </div>
    </section>
  );
};

export default FunctionalComponentTemplate;
