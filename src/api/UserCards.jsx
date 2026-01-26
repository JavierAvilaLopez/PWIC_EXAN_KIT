import React, { useEffect, useState } from "react";
import { getUsersWithAxios } from "./UserService";

// Carga usuarios desde el servicio y muestra tarjetas con Bootstrap.
const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsersWithAxios();
        setUsers(data.slice(0, 4));
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
      <h4 className="mb-3">Usuarios</h4>
      {loading && <p className="text-muted">Cargando usuarios...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text mb-1">Email: {user.email}</p>
                <p className="card-text">Empresa: {user.company.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
