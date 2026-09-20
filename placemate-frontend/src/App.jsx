import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Assessments from "./pages/Assessments";
import Companies from "./pages/Companies";
import PlacementStatus from "./pages/PlacementStatus";
import Announcements from "./pages/Announcements";
import CalendarPage from "./pages/CalendarPage";
import Notifications from "./pages/Notifications";
import Preparation from "./pages/Preparation";
import ResumeBuilder from "./pages/ResumeBuilder";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminCompanies from "./pages/admin/AdminCompanies";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import RecruiterJobs from "./pages/recruiter/RecruiterJobs";
import RecruiterApplicants from "./pages/recruiter/RecruiterApplicants";
import RecruiterOffers from "./pages/recruiter/RecruiterOffers";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

function App() {
  const [role, setRole] = useState("student");

  return (
    <AppProvider>
      <Routes>
        <Route path="/login" element={<Login onLogin={setRole} />} />
        <Route element={<AppLayout role={role} onRoleChange={setRole} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard role={role} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/placement-status" element={<PlacementStatus />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/companies" element={<AdminCompanies />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
          <Route path="/recruiter/applicants" element={<RecruiterApplicants />} />
          <Route path="/recruiter/offers" element={<RecruiterOffers />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
