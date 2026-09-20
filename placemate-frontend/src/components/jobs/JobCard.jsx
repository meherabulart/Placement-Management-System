import React from "react";
import { Bookmark, MapPin, IndianRupee, Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function JobCard({ job }) {
  const { savedJobs, toggleSavedJob, applications, applyToJob } = useApp();
  const applied = applications.some((item) => item.jobId === job.id);
  const saved = savedJobs.includes(job.id);

  return (
    <article className="job-card">
      <div className="job-card-header">
        <div className="company-logo">{job.company.slice(0, 1)}</div>
        <button className={`icon-button ${saved ? "saved" : ""}`} onClick={() => toggleSavedJob(job.id)}>
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div>
        <span className="eyebrow">{job.company}</span>
        <h3>{job.title}</h3>
      </div>

      <div className="job-meta">
        <span><MapPin size={15} />{job.location}</span>
        <span><IndianRupee size={15} />{job.salary}</span>
        <span><Clock3 size={15} />{job.type}</span>
      </div>

      <div className="tag-list">
        {job.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
      </div>

      <div className="job-card-footer">
        <small>Deadline: {job.deadline}</small>
        <div className="button-row">
          <Link className="button button-light" to={`/jobs/${job.id}`}>Details <ArrowRight size={15} /></Link>
          <button className="button button-primary" disabled={applied} onClick={() => applyToJob(job.id)}>
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </article>
  );
}
