import React from "react";
import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";
import { BarChart3, BriefcaseBusiness, IndianRupee, Users } from "lucide-react";

export default function AdminAnalytics() {
  return <><PageHeader title="Reports & Analytics" subtitle="A lightweight overview of placement performance." action={<button className="button button-light">Export CSV</button>} /><div className="stats-grid"><StatCard label="Placement Rate" value="54.6%" icon={BarChart3}/><StatCard label="Total Offers" value="734" icon={BriefcaseBusiness}/><StatCard label="Average Package" value="₹7.8 LPA" icon={IndianRupee}/><StatCard label="Students Placed" value="682" icon={Users}/></div><div className="content-grid two-one"><section className="panel"><div className="panel-header"><div><h2>Department-wise Placement</h2><p>Current academic batch.</p></div></div><div className="horizontal-bars">{[["CSE", 82], ["IT", 74], ["TT", 61], ["APM", 52]].map(([name, value]) => <div className="hbar-row" key={name}><span>{name}</span><div><i style={{width: `${value}%`}} /></div><b>{value}%</b></div>)}</div></section><section className="panel"><h2>Package distribution</h2><div className="donut"><span>₹7.8LPA<small>Average</small></span></div></section></div></>;
}
