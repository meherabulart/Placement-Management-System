import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { students } from "../../data/mockData";

export default function RecruiterApplicants() {
  return <><PageHeader title="Applicants" subtitle="Review candidates for your open roles." /><div className="filter-bar"><input placeholder="Search candidate..." /><select><option>All jobs</option><option>Software Developer Intern</option><option>Graduate Software Engineer</option></select><select><option>All departments</option><option>CSE</option><option>IT</option></select></div><section className="panel"><div className="table-wrap"><table><thead><tr><th>Candidate</th><th>Department</th><th>CGPA</th><th>Skills</th><th>Status</th><th>Action</th></tr></thead><tbody>{students.map((s) => <tr key={s.id}><td><strong>{s.name}</strong><small>Batch {s.batch}</small></td><td>{s.department}</td><td>{s.cgpa}</td><td>React · DSA · SQL</td><td><StatusBadge status={s.id === 1 ? "SHORTLISTED" : "APPLIED"}/></td><td><button className="button button-light">View</button></td></tr>)}</tbody></table></div></section></>;
}
