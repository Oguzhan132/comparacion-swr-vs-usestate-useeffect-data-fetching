import GetUser from "@/components/GetUser";
import GetUserSWR from "@/components/GetUserSWR";

export default function Home() {
  return (
    <div className="container page-container">
      <div className="hero-section">
        <h1 className="hero-title">Comparación de Métodos de Fetch</h1>
        <p className="hero-description">
          Demostración de dos enfoques diferentes para obtener datos de
          usuarios:
          <strong> useEffect tradicional</strong> vs <strong>SWR</strong>
        </p>
      </div>

      <div className="components-grid">
        <div>
          <GetUser />
        </div>
        <div>
          <GetUserSWR />
        </div>
      </div>

      <div className="info-section">
        <h3 className="info-title">💡 Características de cada método</h3>
        <div className="info-grid">
          <div>
            <h4 className="info-item-title traditional">
              useEffect Tradicional
            </h4>
            <ul className="info-list">
              <li>Control manual del estado</li>
              <li>Gestión explícita de loading/error</li>
              <li>Sin caché automático</li>
              <li>Re-fetch manual necesario</li>
            </ul>
          </div>
          <div>
            <h4 className="info-item-title swr">SWR</h4>
            <ul className="info-list">
              <li>Caché automático inteligente</li>
              <li>Revalidación en foco</li>
              <li>Menos código boilerplate</li>
              <li>Mejor experiencia de usuario</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
