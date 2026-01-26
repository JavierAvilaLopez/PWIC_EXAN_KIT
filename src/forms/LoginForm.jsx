import React, { useState } from "react";

// Formulario de inicio de sesión con validación de campos vacíos.
const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Debes completar todos los campos.");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Login</h4>
      <form onSubmit={handleSubmit} className="d-grid gap-2">
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
        {error && <p className="text-danger mb-0">{error}</p>}
        {success && <p className="text-success mb-0">¡Login exitoso!</p>}
      </form>
    </div>
  );
};

export default LoginForm;
