import React, { useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Songs({ onSelectSong }) {
  const [showAll, setShowAll] = useState(false);
  const rowRef = useRef();

  const songs = [
    {
      id: 1,
      title: "YOGURCITO REMIX",
      subtitle: "(feat. Kris R., ROA)",
      artist: "Blessd, Anuel AA, Yan Block, Luar La L",
      explicit: true,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song1.png",
      duration: 192,
    },
    {
      id: 2,
      title: "Tears",
      subtitle: "",
      artist: "Sabrina Carpenter",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song2.png",
      duration: 214,
    },
    {
      id: 3,
      title: "Rey Sin Reina",
      subtitle: "",
      artist: "Julián Álvarez y su Norteño Banda",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song3.png",
      duration: 201,
    },
    {
      id: 4,
      title: "COQUETA",
      subtitle: "",
      artist: "Fuerza Regida, Grupo Frontera",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song4.png",
      duration: 198,
    },
    {
      id: 5,
      title: "SE LO JURO MOR",
      subtitle: "",
      artist: "Feid",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song5.png",
      duration: 176,
    },
    {
      id: 6,
      title: "Relojito Cartier",
      subtitle: "",
      artist: "Luis R Conriquez, Anuel AA",
      explicit: true,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song6.png",
      duration: 205,
    },
    {
      id: 7,
      title: "Sauce Boyz Freestyle 6",
      subtitle: "",
      artist: "Eladio Carrion",
      explicit: true,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song7.png",
      duration: 235,
    },
    {
      id: 8,
      title: "Who",
      subtitle: "",
      artist: "Jimin",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song8.png",
      duration: 189,
    },
    {
      id: 9,
      title: "Ansiedad",
      subtitle: "",
      artist: "Grupo Arriesgado",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song9.png",
      duration: 222,
    },
    {
      id: 10,
      title: "Piedras a la luna",
      subtitle: "",
      artist: "Eden Muñoz",
      explicit: false,
      img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song10.png",
      duration: 208,
    },
  ];

  const handleNext = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="songs-start">
        <h3>Canciones en tendencia</h3>
        <div className="songs-show-all" onClick={handleToggleShowAll}>
          {showAll ? "Mostrar menos" : "Mostrar todos"}
        </div>
      </div>

      <div className="songs-wrapper">
        {!showAll && (
          <button className="songs-arrow left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
        )}

        <div
          className={showAll ? "songs-grid" : "songs-row"}
          ref={!showAll ? rowRef : null}
        >
          {songs.map((song) => (
            <div
              key={song.id}
              className="song-card"
              onClick={() => onSelectSong(song)}
            >
              <img src={song.img} alt={song.title} className="song-img" />
              <div className="song-body">
                <div className="song-title">
                  {song.title}{" "}
                  {song.subtitle && <small>{song.subtitle}</small>}
                </div>
                <div className="song-artist">
                  {song.explicit && <span className="explicit-tag">E</span>}
                  {song.artist}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <button className="songs-arrow right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}
