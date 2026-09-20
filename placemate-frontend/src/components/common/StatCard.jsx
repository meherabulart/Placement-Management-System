import React from "react";

export default function StatCard({ label, value, change, icon: Icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span>{label}</span>
        {Icon && <div className="stat-icon"><Icon size={18} /></div>}
      </div>
      <strong>{value}</strong>
      {change && <small>{change}</small>}
    </div>
  );
}
