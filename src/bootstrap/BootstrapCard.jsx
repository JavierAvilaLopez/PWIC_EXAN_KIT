import React from "react";

// Ejemplo de tarjeta con imagen y botón usando Bootstrap.
const BootstrapCard = () => {
  return (
    <div className="card shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
        className="card-img-top"
        alt="Retrato"
      />
      <div className="card-body">
        <h5 className="card-title">Tarjeta de presentación</h5>
        <p className="card-text">
          Esta tarjeta muestra cómo combinar imágenes, texto y botones con estilos de Bootstrap.
        </p>
        <button className="btn btn-outline-primary">Ir a About</button>
      </div>
    </div>
  );
};

export default BootstrapCard;
