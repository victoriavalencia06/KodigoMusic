import { FaBell, FaUser, FaSearch } from "react-icons/fa";

export default function Topbar({ onToggle }) {
  return (
    <header className="topbar">
      {/* Toggle visible SOLO en móvil */}
      <button className="sidebar-toggle" onClick={onToggle}>
        ☰
      </button>

      {/* Search */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="search" placeholder="Buscar artistas, canciones..." />
      </div>

      {/* Iconos */}
      <div className="icons">
        <div className="icon"><FaBell /></div>
        <div className="icon"><FaUser /></div>
      </div>
    </header>
  );
}
