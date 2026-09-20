import React from "react";
import PageHeader from "../components/common/PageHeader";

export default function Preparation() {
  const resources = [
    ["DSA", "Arrays, linked lists, trees, graphs and interview patterns."],
    ["DBMS", "SQL, normalization, transactions and indexing."],
    ["Operating Systems", "Processes, threads, memory and scheduling."],
    ["Computer Networks", "TCP/IP, HTTP, DNS and networking fundamentals."],
    ["Java", "OOP, collections, exceptions and modern Java basics."],
    ["Interview", "Technical, HR and resume preparation guides."],
  ];
  return <><PageHeader title="Preparation" subtitle="Simple resources for placement preparation." /><div className="card-grid">{resources.map(([title, description]) => <div className="panel resource-card" key={title}><span className="eyebrow">Learning resource</span><h3>{title}</h3><p>{description}</p><button className="button button-light">Explore</button></div>)}</div></>;
}
