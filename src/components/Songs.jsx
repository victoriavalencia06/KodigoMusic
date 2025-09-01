import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Songs() {
    const [visibleSongs, setVisibleSongs] = useState(5);
    const [startIndex, setStartIndex] = useState(0);

    const songs = [
        {
            id: 1,
            title: "YOGURCITO REMIX",
            subtitle: "(feat. Kris R., ROA)",
            artist: "Blessd, Anuel AA, Yan Block, Luar La L",
            explicit: true,
            img: "/images/song1.png"
        },
        {
            id: 2,
            title: "Tears",
            subtitle: "", artist: "Sabrina Carpenter", 
            explicit: false, 
            img: "/images/song2.png"
        },
        { 
            id: 3, 
            title: "Rey Sin Reina", 
            subtitle: "", 
            artist: "Julián Álvarez y su Norteño Banda", 
            explicit: false, 
            img: "/images/song3.png" 
        },
        { id: 4, title: "COQUETA", subtitle: "", artist: "Fuerza Regida, Grupo Frontera", explicit: false, img: "/images/song4.png" },
        { id: 5, title: "SE LO JURO MOR", subtitle: "", artist: "Feid", explicit: false, img: "/images/song5.png" },
        { id: 6, title: "Flowers", subtitle: "", artist: "Miley Cyrus", explicit: false, img: "https://i.scdn.co/image/ab67616d00001e02547f7f8e6f5b6d91598e9a28" },
        { id: 7, title: "La Canción", subtitle: "", artist: "J Balvin, Bad Bunny", explicit: true, img: "https://i.scdn.co/image/ab67616d00001e02c5b9f76a3d1d4ef7f8b6c7c8" },
        { id: 8, title: "Shape of You", subtitle: "", artist: "Ed Sheeran", explicit: false, img: "https://i.scdn.co/image/ab67616d00001e027af74794e3a0a4ef6d6e98f3" },
        { id: 9, title: "Despacito", subtitle: "", artist: "Luis Fonsi, Daddy Yankee", explicit: false, img: "https://i.scdn.co/image/ab67616d00001e02856ed9c7fb109eb3b4d3d69b" },
        { id: 10, title: "Blinding Lights", subtitle: "", artist: "The Weeknd", explicit: false, img: "https://i.scdn.co/image/ab67616d00001e0270a2e37d3d6e58f3e5d71f3d" },
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
            setVisibleSongs(songs.length); // mostrar todos
            setStartIndex(0);
        } else {
            setVisibleSongs(5); // volver a 5
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
                        <div key={song.id} className="song-card">
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