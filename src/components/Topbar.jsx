import { useState, useRef, useEffect } from "react";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";

export default function Topbar({ onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Menú de usuario */}
        <div className="icon user-menu" ref={menuRef}>
          <button
            className="user-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaUser />
          </button>

          {menuOpen && (
            <ul className="dropdown-menu">
              <li><button>Perfil</button></li>
              <li>
                <button onClick={logout}>Cerrar sesión</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}