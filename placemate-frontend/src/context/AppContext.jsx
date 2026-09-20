import React, { createContext, useContext, useMemo, useState } from "react";
import { jobs as initialJobs, applications as initialApplications, notifications as initialNotifications } from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [savedJobs, setSavedJobs] = useState([2]);

  const toggleSavedJob = (jobId) => {
    setSavedJobs((current) =>
      current.includes(jobId) ? current.filter((id) => id !== jobId) : [...current, jobId]
    );
  };

  const applyToJob = (jobId) => {
    const job = jobs.find((item) => item.id === jobId);
    if (!job || applications.some((item) => item.jobId === jobId)) return false;

    setApplications((current) => [
      {
        id: current.length + 10,
        company: job.company,
        job: job.title,
        jobId,
        appliedDate: "Today",
        status: "APPLIED",
        nextStep: "Application review",
      },
      ...current,
    ]);

    setNotifications((current) => [
      {
        id: Date.now(),
        title: "Application submitted",
        message: `Your application for ${job.title} at ${job.company} was submitted.`,
        time: "Just now",
        unread: true,
      },
      ...current,
    ]);
    return true;
  };

  const markAllRead = () => {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false })));
  };

  const value = useMemo(
    () => ({
      jobs,
      setJobs,
      applications,
      setApplications,
      notifications,
      setNotifications,
      savedJobs,
      toggleSavedJob,
      applyToJob,
      markAllRead,
    }),
    [jobs, applications, notifications, savedJobs]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
