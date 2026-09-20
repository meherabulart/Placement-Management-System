import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, IndianRupee } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { useApp } from "../context/AppContext";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, applications, applyToJob } = useApp();
  const job = jobs.find((item) => item.id === Number(id));

  if (!job) return <div className="panel"><h2>Job not found</h2></div>;

  const applied = applications.some((item) => item.jobId === job.id);

  return (
    <>
      <button className="back-button" onClick={() => navigate("/jobs")}><ArrowLeft size={17} /> Back to jobs</button>
      <PageHeader title={job.title} subtitle={`${job.company} · ${job.location}`} />
      <div className="details-layout">
        <section className="panel">
          <div className="detail-hero"><div className="company-logo large">{job.company[0]}</div><div><span className="eyebrow">{job.company}</span><h2>{job.title}</h2><div className="job-meta"><span><MapPin size={15}/>{job.location}</span><span><IndianRupee size={15}/>{job.salary}</span></div></div></div>
          <div className="section-divider"><h3>About the role</h3><p className="long-text">{job.description} This is a frontend-only demonstration, so the information shown here is local mock data.</p></div>
          <div className="section-divider"><h3>Required skills</h3><div className="tag-list">{job.skills.map((s) => <span className="tag" key={s}>{s}</span>)}</div></div>
          <div className="section-divider"><h3>Selection process</h3><div className="step-row"><span>1</span>Application review <span>→</span><span>2</span>Assessment <span>→</span><span>3</span>Interview</div></div>
        </section>
        <aside className="panel sticky-panel">
          <h3>Why am I eligible?</h3>
          <div className="eligibility"><CheckCircle2 size={18}/><div><b>CGPA</b><span>8.2 ≥ required {job.cgpa}</span></div></div>
          <div className="eligibility"><CheckCircle2 size={18}/><div><b>Department</b><span>CSE is accepted</span></div></div>
          <div className="eligibility"><CheckCircle2 size={18}/><div><b>Skills</b><span>Profile has matching skills</span></div></div>
          <button className="button button-primary button-full" disabled={applied} onClick={() => applyToJob(job.id)}>{applied ? "Already Applied" : "Apply Now"}</button>
          <small className="muted">Deadline: {job.deadline}</small>
        </aside>
      </div>
    </>
  );
}
