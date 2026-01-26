import React, { useState } from "react";

// Renderizado condicional según el estado de autenticación.
const LoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Estado de sesión</h4>
      <p className="fs-5">
        {isLoggedIn ? "Bienvenido de nuevo." : "Por favor, inicia sesión."}
      </p>
      <button className="btn btn-outline-primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default LoginState;
