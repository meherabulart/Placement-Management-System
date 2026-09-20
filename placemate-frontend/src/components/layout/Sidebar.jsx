import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3, Bell, BriefcaseBusiness, Building2, CalendarDays, ClipboardList,
  FileText, GraduationCap, LayoutDashboard, LogOut, Megaphone, Settings,
  ShieldCheck, Sparkles, Users, Video, BookOpen, Award
} from "lucide-react";

const studentLinks = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["My Profile", "/profile", GraduationCap],
  ["Job Opportunities", "/jobs", BriefcaseBusiness],
  ["Companies", "/companies", Building2],
  ["My Applications", "/applications", ClipboardList],
  ["Interviews", "/interviews", Video],
  ["Assessments", "/assessments", FileText],
  ["Preparation", "/preparation", BookOpen],
  ["Resume Builder", "/resume-builder", FileText],
  ["Announcements", "/announcements", Megaphone],
  ["Calendar", "/calendar", CalendarDays],
  ["Notifications", "/notifications", Bell],
  ["Placement Status", "/placement-status", Award],
];

const recruiterLinks = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Job Postings", "/recruiter/jobs", BriefcaseBusiness],
  ["Applicants", "/recruiter/applicants", Users],
  ["Shortlisted", "/recruiter/applicants", Sparkles],
  ["Interviews", "/interviews", Video],
  ["Offers", "/recruiter/offers", Award],
  ["Notifications", "/notifications", Bell],
];

const adminLinks = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Students", "/admin/students", Users],
  ["Companies", "/admin/companies", Building2],
  ["Job Opportunities", "/jobs", BriefcaseBusiness],
  ["Applications", "/applications", ClipboardList],
  ["Interviews", "/interviews", Video],
  ["Announcements", "/announcements", Megaphone],
  ["Reports & Analytics", "/admin/analytics", BarChart3],
  ["Notifications", "/notifications", Bell],
];

export default function Sidebar({ role }) {
  const links = role === "admin" ? adminLinks : role === "recruiter" ? recruiterLinks : studentLinks;
  const title = role === "admin" ? "Admin Workspace" : role === "recruiter" ? "Recruiter Workspace" : "Student Workspace";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><ShieldCheck size={20} /></div>
        <div>
          <strong>PlaceMate</strong>
          <span>{title}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {links.map(([label, to, Icon]) => (
          <NavLink key={`${label}-${to}`} to={to} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="nav-item"><Settings size={18} /><span>Settings</span></NavLink>
        <NavLink to="/login" className="nav-item"><LogOut size={18} /><span>Logout</span></NavLink>
      </div>
    </aside>
  );
}
