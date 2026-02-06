import React, { useEffect, useState } from "react";
import { getResourceWithAxios } from "./apiService.template";

/**
 * Plantilla de tarjetas para datos remotos.
 *
 * Cómo usar:
 * 1) Ajusta CARD_CONFIG según el contexto.
 * 2) Reemplaza los campos del render según la respuesta de tu API.
 * 3) Cambia el servicio si vas a usar Fetch en lugar de Axios.
 */
const CARD_CONFIG = {
  title: "Recursos",
  maxItems: 4,
  emptyMessage: "No hay datos disponibles.",
};

const ResourceCardsTemplate = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getResourceWithAxios();
        setItems(data.slice(0, CARD_CONFIG.maxItems));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">{CARD_CONFIG.title}</h4>
      {loading && <p className="text-muted">Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && items.length === 0 && (
        <p className="text-muted">{CARD_CONFIG.emptyMessage}</p>
      )}
      <div className="row g-3">
        {items.map((item) => (
          <div className="col-md-6" key={item.id ?? item.name}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name ?? "Sin título"}</h5>
                <p className="card-text mb-1">Email: {item.email ?? "N/A"}</p>
                <p className="card-text">Detalle: {item.company?.name ?? "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceCardsTemplate;
