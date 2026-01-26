import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Página dinámica que carga un producto/post según el ID de la URL.
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo cargar el producto.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container py-4">
      <h1 className="mb-3">Detalle del producto</h1>
      {loading && <p className="text-muted">Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}
      {product && (
        <div className="card p-3 shadow-sm">
          <h3 className="mb-2">{product.title}</h3>
          <p className="mb-0">{product.body}</p>
          <small className="text-muted">ID del producto: {product.id}</small>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
