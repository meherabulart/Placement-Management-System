import React from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function Topbar({ role, onRoleChange }) {
  const navigate = useNavigate();
  const { notifications } = useApp();
  const unread = notifications.filter((item) => item.unread).length;

  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search jobs, companies..." />
      </div>

      <div className="topbar-actions">
        <button className="icon-button notification-button" onClick={() => navigate("/notifications")}>
          <Bell size={19} />
          {unread > 0 && <span className="notification-dot">{unread}</span>}
        </button>

        <div className="role-switch">
          <select value={role} onChange={(e) => onRoleChange(e.target.value)}>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">TPO / Admin</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>
    </header>
  );
}
