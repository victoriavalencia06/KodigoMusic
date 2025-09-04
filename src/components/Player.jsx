import React, { useMemo, useRef, useState } from "react";
import {
  FaHeart,
  FaPlus,
  FaStepBackward,
  FaStepForward,
  FaPlay,
  FaPause,
  FaRedo,
  FaRetweet,
} from "react-icons/fa";
import { MdQueueMusic, MdCast, MdVolumeUp, MdSettings } from "react-icons/md";

export default function Player({
  track,
  isPlaying,
  currentTime = 0,
  onTogglePlay,
  onSeek
}) {
  const hasTrack = !!track;
  const barRef = useRef(null);
  const [scrubbing, setScrubbing] = useState(false);

  const duration = hasTrack ? track.duration : 0;

  const formatTime = (secs) => {
    const s = Math.max(0, Math.floor(secs || 0));
    const mPart = Math.floor(s / 60);
    const sPart = s % 60;
    return `${String(mPart).padStart(2, "0")}:${String(sPart).padStart(2, "0")}`;
  };

  const percent = useMemo(() => {
    if (!hasTrack || duration === 0) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [hasTrack, duration, currentTime]);

  const seekFromClientX = (clientX) => {
    if (!barRef.current || !hasTrack) return;
    const rect = barRef.current.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const clampedRatio = Math.max(0, Math.min(1, ratio));
    const next = clampedRatio * duration;
    onSeek?.(next);
  };

  const handlePointerDown = (e) => {
    if (!hasTrack) return;
    setScrubbing(true);
    seekFromClientX(e.clientX);

    const move = (ev) => seekFromClientX(ev.clientX);
    const up = () => {
      setScrubbing(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const handleKeyDown = (e) => {
    if (!hasTrack) return;
    const step = 5; // segundos
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onSeek?.(Math.min(duration, currentTime + step));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onSeek?.(Math.max(0, currentTime - step));
    } else if (e.key === "Home") {
      e.preventDefault();
      onSeek?.(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onSeek?.(duration);
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      // permite play/pause desde la barra
      onTogglePlay?.();
    }
  };

  return (
    <footer className="player-panel" role="region" aria-label="Player">
      {/* Izquierda */}
      <section className="current-track" aria-label="Canción en reproducción">
        {hasTrack ? (
          <>
            <img src={track.img} alt={track.title} className="track-cover" />
            <div className="track-info">
              <span className="track-title">{track.title}</span>
              <span className="track-artist">{track.artist}</span>
            </div>
            <button className="icon-btn small" aria-label="Favorito">
              <FaHeart className="icon" />
            </button>
            <button className="icon-btn small" aria-label="Añadir a playlist">
              <FaPlus className="icon" />
            </button>
          </>
        ) : (
          <div className="no-track">Selecciona una canción</div>
        )}
      </section>

      {/* Centro */}
      <section className="player-controls" aria-label="Controles de reproducción">
        <div className="controls-row">
          <button className="icon-btn" aria-label="Shuffle">
            <FaRetweet className="icon" />
          </button>
          <button className="icon-btn" aria-label="Anterior">
            <FaStepBackward className="icon" />
          </button>

          {/* Play grande */}
          <button
            className="play-btn"
            aria-label="Reproducir / Pausar"
            onClick={onTogglePlay}
            disabled={!hasTrack}
          >
            {isPlaying ? <FaPause className="icon play-icon" /> : <FaPlay className="icon play-icon" />}
          </button>

          <button className="icon-btn" aria-label="Siguiente">
            <FaStepForward className="icon" />
          </button>
          <button className="icon-btn" aria-label="Repeat">
            <FaRedo className="icon" />
          </button>
        </div>

        <div className="time-row">
          <span className="time-label">{formatTime(currentTime)}</span>

          <div
            ref={barRef}
            className="time-bar"
            role="slider"
            aria-label="Barra de progreso"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={Math.floor(currentTime)}
            tabIndex={hasTrack ? 0 : -1}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
          >
            <div className="progress" style={{ width: `${percent}%` }} />
          </div>

          <span className="time-label">{hasTrack ? formatTime(duration) : "00:00"}</span>
        </div>
      </section>

      {/* Derecha */}
      <section className="extra-controls" aria-label="Extras">
        <button className="icon-btn small"><MdQueueMusic className="icon" /></button>
        <button className="icon-btn small"><MdCast className="icon" /></button>
        <button className="icon-btn small"><MdVolumeUp className="icon" /></button>
        <button className="icon-btn small"><MdSettings className="icon" /></button>
      </section>
    </footer>
  );
}
