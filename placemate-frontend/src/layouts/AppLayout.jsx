import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function AppLayout({ role, onRoleChange }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login") return <Outlet />;

  return (
    <div className="app-shell">
      <Sidebar role={role} />
      <div className="main-area">
        <Topbar role={role} onRoleChange={onRoleChange} onLogout={() => navigate("/login")} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
