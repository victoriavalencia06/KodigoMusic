import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Player from "../components/Player";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // segundos

  // Cuando seleccionas canción: resetea tiempo y arranca
  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (!currentSong) return;
    setIsPlaying((p) => !p);
  };

  const handleSeek = (nextSeconds) => {
    if (!currentSong) return;
    const clamped = Math.max(0, Math.min(nextSeconds, currentSong.duration));
    setCurrentTime(clamped);
  };

  // Simulación de tiempo de reproducción
  useEffect(() => {
    if (!isPlaying || !currentSong) return;

    const tick = 250; // ms
    const id = setInterval(() => {
      setCurrentTime((t) => {
        const next = t + tick / 1000;
        if (next >= currentSong.duration) {
          // fin de pista
          clearInterval(id);
          setIsPlaying(false);
          return currentSong.duration;
        }
        return next;
      });
    }, tick);

    return () => clearInterval(id);
  }, [isPlaying, currentSong]);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Área principal */}
      <div className="main-content">
        <Topbar onToggle={() => setSidebarOpen(true)} />
        <main>
          {React.cloneElement(children, { onSelectSong: handleSelectSong })}
        </main>
      </div>

      {/* Player controlado */}
      <Player
        track={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        onTogglePlay={handleTogglePlay}
        onSeek={handleSeek}
      />

      {/* Backdrop */}
      {sidebarOpen && <div className="backdrop show" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
