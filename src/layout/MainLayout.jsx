import { useState } from "react";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Topbar";
import Player from "../components/Player";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Área principal */}
      <div className="main-content">
        <Topbar onToggle={() => setSidebarOpen(true)} />
        <main>{children}</main>
      </div>

      {/* Player: sibling (fuera del main-content) para mayor control */}
      <Player />

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