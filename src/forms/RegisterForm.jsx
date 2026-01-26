import React, { useState } from "react";

// Formulario de registro que valida email y contraseña.
const RegisterForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = { email: "", password: "" };
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un email válido.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    if (validate()) {
      setSuccess(true);
    }
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Registro</h4>
      <form onSubmit={handleSubmit} className="d-grid gap-2">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}
        <button type="submit" className="btn btn-success">
          Crear cuenta
        </button>
        {success && <p className="text-success mb-0">Registro completado.</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
