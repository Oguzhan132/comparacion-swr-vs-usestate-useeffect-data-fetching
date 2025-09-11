"use client";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function GetUserSWR() {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR("https://devsapihub.com/api-users", fetcher);

  if (isLoading) {
    return (
      <div className="card swr-loading-container">
        <div className="loading">
          <div className="swr-loading-spinner"></div>
          Cargando usuarios con SWR...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card swr-error-container">
        <div className="error">
          <strong>Error:</strong> Error al cargar usuarios
        </div>
      </div>
    );
  }

  return (
    <div className="card swr-card">
      <div className="swr-card-header">
        <div className="swr-card-indicator"></div>
        <h1 className="swr-card-title">
          Usuarios (SWR)
        </h1>
        <div className="swr-badge">
          SWR
        </div>
      </div>
      
      {users && users.length > 0 ? (
        <div className="swr-grid">
          {users.map((user) => (
            <div key={user.id} className="swr-item">
              <div className="swr-item-header">
                <div className="swr-avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="swr-info">
                  <h3 className="swr-name">
                    {user.name}
                  </h3>
                  <p className="swr-id">
                    ID: {user.id}
                  </p>
                </div>
                <div className="swr-item-badge">
                  SWR
                </div>
              </div>
              <p className="swr-email">
                📧 {user.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="swr-empty">
          <div className="swr-empty-icon">👥</div>
          <p className="swr-empty-text">No hay usuarios disponibles.</p>
        </div>
      )}
    </div>
  );
}