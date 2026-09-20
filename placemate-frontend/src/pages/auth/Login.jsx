import React, { useState } from "react";
import { BriefcaseBusiness, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    onLogin(role);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-brand">
        <div className="brand-mark"><BriefcaseBusiness size={22} /></div>
        <div><strong>PlaceMate</strong><span>College Placement Platform</span></div>
      </div>

      <div className="login-card">
        <div className="login-heading">
          <h1>Welcome back</h1>
          <p>Sign in to your placement workspace.</p>
        </div>

        <form onSubmit={submit} className="form-stack">
          <label>Email<input type="email" defaultValue="student@example.com" required /></label>
          <label>Password<div className="input-icon"><Lock size={16} /><input type="password" defaultValue="demo1234" required /></div></label>
          <label>Workspace
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">TPO / Admin</option>
            </select>
          </label>
          <button className="button button-primary button-full">Sign in</button>
        </form>

        <div className="demo-note">
          <Mail size={15} />
          Demo frontend only — no backend or real authentication is connected.
        </div>
      </div>
    </div>
  );
}
