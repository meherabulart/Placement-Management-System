import React from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";

export default function PlacementStatus() {
  const steps = ["Applications", "Shortlisted", "Assessments", "Interviews", "Offers", "Placed"];
  return <><PageHeader title="Placement Status" subtitle="Follow your complete placement journey." /><div className="stats-grid"><StatCard label="Applications" value="12"/><StatCard label="Shortlisted" value="5"/><StatCard label="Interviews" value="3"/><StatCard label="Offers" value="1"/></div><section className="panel"><h2>Placement Journey</h2><div className="journey">{steps.map((step, i) => <div className={`journey-step ${i <= 4 ? "done" : ""}`} key={step}><div>{i <= 4 ? <CheckCircle2 size={20}/> : i + 1}</div><span>{step}</span></div>)}</div></section></>;
}
