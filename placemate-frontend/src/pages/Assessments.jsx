import React from "react";
import PageHeader from "../components/common/PageHeader";

export default function Assessments() {
  const tests = [
    ["CloudPeak Aptitude", "25 questions · 30 min", "Open"],
    ["TechNova Coding", "2 questions · 60 min", "Upcoming"],
    ["DSA Practice Test", "40 questions · 45 min", "Practice"],
  ];
  return <><PageHeader title="Assessments" subtitle="Tests assigned to you and practice assessments." /><div className="card-grid">{tests.map(([title, info, status]) => <div className="panel" key={title}><span className="eyebrow">Assessment</span><h2>{title}</h2><p>{info}</p><div className="card-footer"><span className="status-badge applied">{status}</span><button className="button button-light">{status === "Open" ? "Start test" : "View"}</button></div></div>)}</div></>;
}
