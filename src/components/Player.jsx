import React from "react";
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

export default function Player({ track, isPlaying, onTogglePlay }) {
  const hasTrack = !!track;

  return (
    <div className="player-panel" role="region" aria-label="Player">
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
          <button className="play-btn" aria-label="Reproducir / Pausar" onClick={onTogglePlay}>
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
          <span className="time-label">00:00</span>
          <div className="time-bar" role="progressbar" aria-valuemin="0" aria-valuemax={hasTrack ? track.duration : 0} aria-valuenow="0">
            <div className="progress" style={{ width: "28%" }} />
          </div>
          <span className="time-label">{hasTrack ? track.durationFormatted : "00:00"}</span>
        </div>
      </section>

      {/* Derecha */}
      <section className="extra-controls" aria-label="Extras">
        <button className="icon-btn small"><MdQueueMusic className="icon" /></button>
        <button className="icon-btn small"><MdCast className="icon" /></button>
        <button className="icon-btn small"><MdVolumeUp className="icon" /></button>
        <button className="icon-btn small"><MdSettings className="icon" /></button>
      </section>
    </div>
  );
}