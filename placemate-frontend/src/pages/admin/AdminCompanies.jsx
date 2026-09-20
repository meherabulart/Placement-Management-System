import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { companies } from "../../data/mockData";

export default function AdminCompanies() {
  return <><PageHeader title="Company Management" subtitle="Manage participating placement companies." action={<button className="button button-primary">Add Company</button>} /><section className="panel"><div className="table-wrap"><table><thead><tr><th>Company</th><th>Industry</th><th>Location</th><th>Active jobs</th><th>Action</th></tr></thead><tbody>{companies.map((c) => <tr key={c.id}><td><strong>{c.name}</strong></td><td>{c.industry}</td><td>{c.location}</td><td>{c.jobs}</td><td><button className="text-button">Manage</button></td></tr>)}</tbody></table></div></section></>;
}
