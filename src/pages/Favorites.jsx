import React, { useState } from "react";
import { FaStar, FaMusic, FaList, FaCompactDisc, FaMicrophone, FaShareAlt, FaSearch } from "react-icons/fa";

export default function Favorites() {
  const [activeTab, setActiveTab] = useState("destacados");

  return (
    <div className="favorites-container">
      {/* Título */}
      <h2 className="favorites-title">Favoritos</h2>
      <p className="favorites-subtitle">0 seguidores | 0 seguidos</p>

      {/* Tabs con íconos */}
      <ul className="favorites-tabs">
        <li className="favorites-tab-item">
          <span
            className={`favorites-tab-link ${activeTab === "destacados" ? "active" : ""}`}
            onClick={() => setActiveTab("destacados")}
          >
            <FaStar className="fa-icon" /> Destacados
          </span>
        </li>
        <li className="favorites-tab-item">
          <span
            className={`favorites-tab-link ${activeTab === "canciones" ? "active" : ""}`}
            onClick={() => setActiveTab("canciones")}
          >
            <FaMusic className="fa-icon" /> Canciones favoritas
          </span>
        </li>
        <li className="favorites-tab-item">
          <span
            className={`favorites-tab-link ${activeTab === "playlists" ? "active" : ""}`}
            onClick={() => setActiveTab("playlists")}
          >
            <FaList className="fa-icon" /> Playlists
          </span>
        </li>
        <li className="favorites-tab-item">
          <span
            className={`favorites-tab-link ${activeTab === "albums" ? "active" : ""}`}
            onClick={() => setActiveTab("albums")}
          >
            <FaCompactDisc className="fa-icon" /> Álbums
          </span>
        </li>
        <li className="favorites-tab-item">
          <span
            className={`favorites-tab-link ${activeTab === "artistas" ? "active" : ""}`}
            onClick={() => setActiveTab("artistas")}
          >
            <FaMicrophone className="fa-icon" /> Artistas
          </span>
        </li>
      </ul>

      {/* Contenido dinámico */}
      <div className="favorites-content">
        {activeTab === "destacados" && (
          <div>
            <h4 className="fa-title">Reproducidos recientemente</h4>
            <div className="fa-playlist-card">
              <img
                className="fa-playlist-img"
                src="https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/playlist.jpg"
                alt="Top 100 El Salvador"
              />
              <div className="fa-playlist-title">TOP 100 EL SALVADOR</div>
            </div>
          </div>
        )}

        {activeTab === "canciones" && (
          <div>
            <h4 className="fa-title">0 canciones favoritas</h4>
            <div className="fav-songs-container">
              <div className="fav-songs-header">
                <div className="fav-songs-search">
                  <input type="text" placeholder="Buscar en las canciones" />
                </div>
                <button className="fav-songs-btn" aria-label="Compartir">
                  <FaShareAlt />
                </button>
              </div>

              {/* Contenido vacío centrado */}
              <div className="fav-songs-empty">
                <h2 className="fav-songs-empty-title">Aún no hay canciones</h2>
                <p className="fav-songs-empty-sub">Busquemos algunas canciones para añadirlas aquí.</p>
                <button className="fav-songs-btn">
                  Añadir canciones
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "playlists" && (
          <div className="fa-playlist-container">
            <div className="create-playlist" role="button" tabIndex="0" aria-label="Crear una playlist">
              <span className="plus">+</span>
              <p>Crear una playlist</p>
            </div>
          </div>
        )}

        {activeTab === "albums" && (
          <div>
            <h4 className="fa-title">0 álbumes</h4>
            <div className="fav-songs-container">

              {/* Contenido vacío centrado */}
              <div className="fav-songs-empty">
                <h2 className="fav-songs-empty-title">Aún no hay álbumes favoritos</h2>
                <p className="fav-songs-empty-sub">Descubre nuevos lanzamientos y nuestra selección de álbumes.</p>
                <button className="fav-songs-btn">
                  Añadir álbumes
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "artistas" && (
          <div className="fav-artists-container">
            {/* Header */}
            <div className="fav-artists-header">
              <h4 className="fav-artists-title">3 artistas</h4>
              <div className="fav-artists-controls">
                <input
                  type="search"
                  placeholder="Buscar"
                  className="fav-artists-search"
                />
                <select className="fav-artists-filter">
                  <option>Añadidos recientemente</option>
                  <option>Más populares</option>
                  <option>Menos populares</option>
                </select>
              </div>
            </div>

            {/* Lista de artistas */}
            <div className="fav-artists-list">
              <div className="artist-card add-artist">
                <div className="artist-circle add-circle">
                  <span>+</span>
                </div>
                <p className="artist-name">Añadir artistas</p>
              </div>

              <div className="artist-card">
                <div className="artist-circle">
                  <img src="https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/CardiB.jpg" alt="Cardi B" />
                </div>
                <p className="artist-name">Cardi B</p>
                <p className="artist-fans">2.480.965 fans</p>
              </div>

              <div className="artist-card">
                <div className="artist-circle">
                  <img src="https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/MeganTheeStallion.jpg" alt="Megan Thee Stallion" />
                </div>
                <p className="artist-name">Megan Thee Stallion</p>
                <p className="artist-fans">872.467 fans</p>
              </div>

              <div className="artist-card">
                <div className="artist-circle">
                  <img src="https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/TheWeeknd.jpg" alt="The Weeknd" />
                </div>
                <p className="artist-name">The Weeknd</p>
                <p className="artist-fans">13.905.259 fans</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}