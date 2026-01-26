import React, { useState } from "react";

// Demuestra el uso de useState con botones para modificar el contador.
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Contador</h4>
      <p className="fs-4">Valor actual: {count}</p>
      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
          Decrementar
        </button>
        <button className="btn btn-outline-danger" onClick={() => setCount(0)}>
          Resetear
        </button>
      </div>
    </div>
  );
};

export default Counter;
