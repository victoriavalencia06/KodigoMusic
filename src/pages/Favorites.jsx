import React from 'react';

const Favorite = () => {
  return (
    <div className="favorite-container">
      <div className="favorite-header">
        <h1>Favoritos</h1>
        <div className="favorite-stats">
          <span>0 seguidores</span> | <span>0 seguidos</span>
        </div>
      </div>

      <div className="favorite-categories">
        <div className="category-section">
          <h2>Destacados</h2>
          <div className="category-item">Canciones favoritas</div>
        </div>

        <div className="category-section">
          <h2>Playlists</h2>
          <div className="category-item">Álbums</div>
        </div>

        <div className="category-section">
          <h2>Artistas</h2>
          <div className="category-item">Más ✓</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="recently-played">
        <h2>Reproducido recientemente</h2>
        <div className="recent-item">TOP 100</div>
        <div className="recent-item">EL SALVADOR</div>
      </div>
    </div>
  );
};

export default Favorite;