import React from "react";
import PageHeader from "../components/common/PageHeader";
import { companies } from "../data/mockData";

export default function Companies() {
  return <><PageHeader title="Companies" subtitle="Explore companies participating in campus placements." /><div className="company-grid">{companies.map((company) => <div className="panel company-card" key={company.id}><div className="company-logo">{company.name[0]}</div><h3>{company.name}</h3><p>{company.industry}</p><span>{company.location}</span><div className="card-footer"><small>{company.jobs} active jobs</small><button className="button button-light">View company</button></div></div>)}</div></>;
}
