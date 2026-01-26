import React, { useEffect, useState } from "react";

// Cambia entre tema claro y oscuro actualizando una clase global.
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Tema</h4>
      <p className="mb-2">Tema actual: {theme === "light" ? "Claro" : "Oscuro"}</p>
      <button
        className="btn btn-dark"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Cambiar tema
      </button>
    </div>
  );
};

export default ThemeToggle;
