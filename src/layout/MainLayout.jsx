import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Topbar";
import Player from "../components/Player";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Área principal */}
      <div className="main-content">
        <Topbar onToggle={() => setSidebarOpen(true)} />
        <main>{React.cloneElement(children, { onSelectSong: setCurrentSong })}</main>
      </div>

      {/* Player: sibling (fuera del main-content) para mayor control */}
      <Player track={currentSong} />

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="backdrop show"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}