import React from "react";

// Página informativa sobre el objetivo del repositorio.
const About = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Acerca de</h1>
      <p className="lead">
        Esta sección explica el propósito del repositorio y cómo cada carpeta ayuda a
        repasar los temas clave del examen.
      </p>
      <ul>
        <li>Fundamentos de React con componentes reutilizables.</li>
        <li>Hooks y efectos con casos reales.</li>
        <li>Formularios y validaciones comunes.</li>
        <li>Bootstrap para maquetar interfaces.</li>
        <li>Peticiones AJAX con Fetch y Axios.</li>
      </ul>
    </div>
  );
};

export default About;
