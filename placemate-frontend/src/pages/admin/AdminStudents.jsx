import React, { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import StatusBadge from "../../components/common/StatusBadge";
import { students } from "../../data/mockData";

export default function AdminStudents() {
  const [query, setQuery] = useState("");
  const data = students.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader title="Student Management" subtitle="Search and review student placement records." action={<button className="button button-primary">Add Student</button>} /><div className="filter-bar"><input placeholder="Search student..." value={query} onChange={(e) => setQuery(e.target.value)}/><select><option>All departments</option><option>CSE</option><option>IT</option><option>TT</option><option>APM</option></select><select><option>All batches</option><option>2028</option></select></div><section className="panel"><div className="table-wrap"><table><thead><tr><th>Student</th><th>Department</th><th>Batch</th><th>CGPA</th><th>Status</th><th>Action</th></tr></thead><tbody>{data.map((s) => <tr key={s.id}><td><strong>{s.name}</strong></td><td>{s.department}</td><td>{s.batch}</td><td>{s.cgpa}</td><td><StatusBadge status={s.status}/></td><td><button className="text-button">View</button></td></tr>)}</tbody></table></div></section></>;
}
