import React, { useState } from "react";

// Formulario estilizado con Bootstrap para practicar clases utilitarias.
const BootstrapForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    keepSignedIn: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario enviado (ejemplo). Revisa la consola si necesitas datos.");
    console.log("Datos del formulario:", formData);
  };

  return (
    <form className="card p-3 shadow-sm" onSubmit={handleSubmit}>
      <h4 className="mb-3">Registro con Bootstrap</h4>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            className="form-control"
            name="username"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-3">
        <label className="form-label d-block">Género</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label className="form-check-label">Femenino</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label className="form-check-label">Masculino</label>
        </div>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          name="keepSignedIn"
          checked={formData.keepSignedIn}
          onChange={handleChange}
        />
        <label className="form-check-label">Mantener sesión iniciada</label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Enviar registro
      </button>
    </form>
  );
};

export default BootstrapForm;
