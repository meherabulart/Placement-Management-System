import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { jobs } from "../../data/mockData";

export default function RecruiterJobs() {
  return <><PageHeader title="Job Postings" subtitle="Create and manage your company's campus roles." action={<button className="button button-primary">Create Job</button>} /><section className="panel"><div className="table-wrap"><table><thead><tr><th>Role</th><th>Location</th><th>Type</th><th>Deadline</th><th>Applicants</th><th>Status</th></tr></thead><tbody>{jobs.map((j) => <tr key={j.id}><td><strong>{j.title}</strong><small>{j.company}</small></td><td>{j.location}</td><td>{j.type}</td><td>{j.deadline}</td><td>{12 + j.id * 8}</td><td><StatusBadge status="Open"/></td></tr>)}</tbody></table></div></section></>;
}
