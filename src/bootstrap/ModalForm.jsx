import React, { useMemo, useState } from "react";

// Modal manual con formulario y barra de progreso basada en campos completados.
const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const completedFields = useMemo(() => {
    return Object.values(formData).filter((value) => value.trim().length > 0).length;
  }, [formData]);

  const progress = Math.round((completedFields / 3) * 100);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mensaje enviado (demo). Gracias por completar el formulario.");
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Modal interactivo</h4>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Abrir modal
      </button>

      {isOpen && (
        <div className="modal-backdrop-custom">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Formulario de contacto</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="modal-body">
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {progress}%
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="d-grid gap-2">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Mensaje"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button className="btn btn-success" type="submit">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
