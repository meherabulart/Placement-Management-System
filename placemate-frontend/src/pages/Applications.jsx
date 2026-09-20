import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import StatusBadge from "../components/common/StatusBadge";
import { useApp } from "../context/AppContext";

const filters = ["All", "APPLIED", "SHORTLISTED", "INTERVIEW", "SELECTED", "REJECTED"];

export default function Applications() {
  const { applications } = useApp();
  const [filter, setFilter] = useState("All");
  const data = filter === "All" ? applications : applications.filter((item) => item.status === filter);

  return (
    <>
      <PageHeader title="My Applications" subtitle="Track every application and its next step." />
      <div className="tabs">{filters.map((item) => <button className={filter === item ? "tab active" : "tab"} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
      <section className="panel">
        <div className="table-wrap">
          <table><thead><tr><th>Company</th><th>Job</th><th>Applied</th><th>Status</th><th>Next step</th></tr></thead>
          <tbody>{data.map((item) => <tr key={item.id}><td><strong>{item.company}</strong></td><td>{item.job}</td><td>{item.appliedDate}</td><td><StatusBadge status={item.status}/></td><td>{item.nextStep}</td></tr>)}</tbody></table>
        </div>
      </section>
    </>
  );
}
