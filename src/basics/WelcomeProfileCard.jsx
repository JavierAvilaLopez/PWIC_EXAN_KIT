import React, {useEffect, useState} from "react";
import {getUsersWithAxios} from "../api/UserService.js";

// Tarjeta de perfil que recibe datos por props.
const WelcomeProfileCard = ({ name, image }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const data = await getUsersWithAxios();
                setUsers(data.slice(0, 1));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

  return (

      <div className="card p-3 shadow-sm">
          {loading && <p className="text-muted">Cargando usuarios...</p>}
          {error && <p className="text-danger">{error}</p>}
          <div className="row g-3 align-content-center ">
              {users.map((user) => (
                  <div className="align-content-lg-center" key={user.id}>
                      <div className="card h-100">
                          <img src={image} className="col-md-4 d-none d-md-block ml-6" width={350}  alt={`Foto de ${name}`} />
                          <div className="card-body">
                              <h5 className="mb-3 text-center">Welcome back! {user.name}</h5>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

      </div>

  );
};

export default WelcomeProfileCard;
