import React from "react";

// Galería responsive usando el grid de Bootstrap.
const ResponsiveGrid = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-3">Galería responsive</h4>
      <div className="row g-3">
        {images.map((src, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={src}>
            <div className="image-tile">
              <img src={src} alt={`Galería ${index + 1}`} className="img-fluid rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
