import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Songs({onSelectSong}) {
    const [visibleSongs, setVisibleSongs] = useState(5);
    const [startIndex, setStartIndex] = useState(0);

    const songs = [
        {
            id: 1,
            title: "YOGURCITO REMIX",
            subtitle: "(feat. Kris R., ROA)",
            artist: "Blessd, Anuel AA, Yan Block, Luar La L",
            explicit: true,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song1.png"
        },
        {
            id: 2,
            title: "Tears",
            subtitle: "",
            artist: "Sabrina Carpenter",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song2.png"
        },
        {
            id: 3,
            title: "Rey Sin Reina",
            subtitle: "",
            artist: "Julián Álvarez y su Norteño Banda",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song3.png"
        },
        {
            id: 4,
            title: "COQUETA",
            subtitle: "",
            artist: "Fuerza Regida, Grupo Frontera",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song4.png"
        },
        {
            id: 5,
            title: "SE LO JURO MOR",
            subtitle: "",
            artist: "Feid",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song5.png"
        },
        {
            id: 6,
            title: "Relojito Cartier",
            subtitle: "",
            artist: "Luis R Conriquez, Anuel AA",
            explicit: true,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song6.png"
        },
        {
            id: 7,
            title: "Sauce Boyz Freestyle 6",
            subtitle: "",
            artist: "Eladio Carrion",
            explicit: true,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song7.png"
        },
        {
            id: 8,
            title: "Who",
            subtitle: "",
            artist: "Jimin",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song8.png"
        },
        {
            id: 9,
            title: "Ansiedad",
            subtitle: "",
            artist: "Grupo Arriesgado",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song9.png"
        },
        {
            id: 10,
            title: "Piedras a la luna",
            subtitle: "",
            artist: "Eden Muñoz",
            explicit: false,
            img: "https://raw.githubusercontent.com/victoriavalencia06/project-images/refs/heads/main/song/song10.png"
        }
    ];

    const songsPerPage = 5;

    const handleNext = () => {
        if (startIndex + songsPerPage < songs.length) {
            setStartIndex(startIndex + songsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - songsPerPage >= 0) {
            setStartIndex(startIndex - songsPerPage);
        }
    };

    const handleToggleShowAll = () => {
        if (visibleSongs === 5) {
            setVisibleSongs(songs.length);
            setStartIndex(0);
        } else {
            setVisibleSongs(5);
            setStartIndex(0);
        }
    };

    const visibleList =
        visibleSongs === 5
            ? songs.slice(startIndex, startIndex + songsPerPage)
            : songs;

    return (
        <div>
            <div className="songs-start">
                <h3>Canciones en tendencia</h3>
                <div className="songs-show-all" onClick={handleToggleShowAll}>
                    {visibleSongs === 5 ? "Mostrar todos" : "Mostrar menos"}
                </div>
            </div>

            <div className="songs-wrapper">
                {visibleSongs === 5 && startIndex > 0 && (
                    <button className="songs-arrow left" onClick={handlePrev}>
                        <FaChevronLeft />
                    </button>
                )}

                <div className={visibleSongs === 5 ? "songs-row" : "songs-grid"}>
                    {visibleList.map((song) => (
                        <div key={song.id} className="song-card" onClick={() => onSelectSong(song)}>
                            <img src={song.img} alt={song.title} className="song-img" />
                            <div className="song-body">
                                <div className="song-title">
                                    {song.title} {song.subtitle && <small>{song.subtitle}</small>}
                                </div>
                                <div className="song-artist">
                                    {song.explicit && <span className="explicit-tag">E</span>}
                                    {song.artist}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleSongs === 5 && startIndex + songsPerPage < songs.length && (
                    <button className="songs-arrow right" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );
}