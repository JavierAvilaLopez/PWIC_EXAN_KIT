import React from "react";

const FormFeed = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-3">Publicar en el Feed</h1>
      <p className="lead">Subir Comentario.</p>
      <form className="card p-3 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" type="text" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input className="form-control" type="text" placeholder="titulo" />
        </div>
          <div className="mb-3">
              <label className="form-label">Archivo</label>
              <input className="form-control" type="file" placeholder="Sube una imagen"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Post</label>
          <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje" />
        </div>
        <button className="btn btn-success" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormFeed;
