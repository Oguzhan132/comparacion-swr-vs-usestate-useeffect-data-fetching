"use client";
import { useState, useEffect } from "react";

const FormaTradicional = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://devsapihub.com/api-users");
        if (!res.ok) throw new Error("Error al cargar los usuarios");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="card user-loading-container">
        <div className="loading">
          <div className="user-loading-spinner"></div>
          Cargando usuarios...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card user-error-container">
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div className="card user-card">
      <div className="user-card-header">
        <div className="user-card-indicator"></div>
        <h1 className="user-card-title">
          Usuarios (Método Tradicional)
        </h1>
      </div>
      
      {users.length > 0 ? (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <div className="user-item-header">
                <div className="user-avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="user-info">
                  <h3 className="user-name">
                    {user.name}
                  </h3>
                  <p className="user-id">
                    ID: {user.id}
                  </p>
                </div>
              </div>
              <p className="user-email">
                📧 {user.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="user-empty">
          <div className="user-empty-icon">👥</div>
          <p className="user-empty-text">No hay usuarios disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default FormaTradicional;
