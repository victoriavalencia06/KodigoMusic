import React from 'react';
import { BsHouseDoorFill, BsCompassFill, BsHeartFill, BsPlus } from "react-icons/bs";

export default function Sidebar({ open, setOpen }) {
  return (
    <nav className={`sidebar ${open ? "open" : ""}`}>
      {/* Botón cerrar (solo visible en móvil) */}
      <button className="sidebar-close" onClick={() => setOpen(false)}>×</button>

      {/* Logo */}
      <div className="logo">KODIGO MUSIC</div>

      {/* Navegación principal */}
      <div className="sidebar-box">
        <a href="#"><BsHouseDoorFill /> Inicio</a>
        <a href="#"><BsCompassFill /> Explorar</a>
        <a href="#"><BsHeartFill /> Favoritos</a>
      </div>

      {/* Línea divisoria */}
      <hr className="sidebar-divider" />

      {/* Playlists */}
      <div className="sidebar-box">
        <h3>Playlists</h3>

        <div className="playlist-item">
          <div className="playlist-icon heart"><BsHeartFill /></div>
          Canciones favoritas
        </div>

        <div className="playlist-item">
          <div className="playlist-icon plus"><BsPlus /></div>
          Crear una playlist
        </div>
      </div>
    </nav>
  );
}
