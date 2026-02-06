import React from "react";

/**
 * Plantilla Bootstrap Card.
 *
 * Cómo usar:
 * 1) Ajusta BOOTSTRAP_CARD_CONFIG con el contenido de tu vista.
 * 2) Reutiliza la clase `card` y modifica la grilla si lo necesitas.
 */
const BOOTSTRAP_CARD_CONFIG = {
  title: "Título de ejemplo",
  subtitle: "Subtítulo opcional",
  description: "Descripción breve del contenido.",
  buttonText: "Ver detalle",
};

const BootstrapCardTemplate = () => (
  <div className="card shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{BOOTSTRAP_CARD_CONFIG.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {BOOTSTRAP_CARD_CONFIG.subtitle}
      </h6>
      <p className="card-text">{BOOTSTRAP_CARD_CONFIG.description}</p>
      <button className="btn btn-primary" type="button">
        {BOOTSTRAP_CARD_CONFIG.buttonText}
      </button>
    </div>
  </div>
);

export default BootstrapCardTemplate;
