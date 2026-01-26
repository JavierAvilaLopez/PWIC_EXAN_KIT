import React from "react";

// Página de contacto con un ejemplo de formulario simple.
const Contact = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Contacto</h1>
      <p className="lead">Practica formularios con este ejemplo rápido.</p>
      <form className="card p-3 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" type="text" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje" />
        </div>
        <button className="btn btn-primary" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
