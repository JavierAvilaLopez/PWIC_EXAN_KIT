import React from "react";

// Tarjeta de perfil que recibe datos por props.
const ProfileCard = ({ name, age, image }) => {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={`Foto de ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Edad: {age} años</p>
        <p className="card-text text-muted">
          Ejemplo de componente reutilizable con imagen y datos por props.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
