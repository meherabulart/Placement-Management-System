import React, { useMemo, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import JobCard from "../components/jobs/JobCard";
import { useApp } from "../context/AppContext";

export default function Jobs() {
  const { jobs } = useApp();
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");

  const filtered = useMemo(() => jobs.filter((job) => {
    const matchesQuery = `${job.title} ${job.company} ${job.location}`.toLowerCase().includes(query.toLowerCase());
    const matchesDept = department === "All" || job.department.includes(department);
    return matchesQuery && matchesDept;
  }), [jobs, query, department]);

  return (
    <>
      <PageHeader title="Job Opportunities" subtitle="Browse roles that match your profile." />
      <div className="filter-bar">
        <input placeholder="Search jobs or companies..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}><option>All</option><option>CSE</option><option>IT</option><option>TT</option><option>APM</option></select>
        <select><option>All locations</option><option>Kolkata</option><option>Bengaluru</option><option>Pune</option></select>
        <select><option>Sort: Latest</option><option>Deadline</option><option>Salary</option></select>
      </div>
      <div className="section-heading"><strong>{filtered.length} jobs found</strong><span>Showing demo data</span></div>
      <div className="job-grid">{filtered.map((job) => <JobCard key={job.id} job={job} />)}</div>
    </>
  );
}
