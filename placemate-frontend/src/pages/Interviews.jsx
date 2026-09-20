import React from "react";
import { CalendarDays, Video, MapPin } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { interviews } from "../data/mockData";

export default function Interviews() {
  return (
    <>
      <PageHeader title="Interviews" subtitle="Your upcoming placement rounds." />
      <div className="interview-grid">{interviews.map((item) => <div className="panel interview-card" key={item.id}><div className="interview-icon"><Video size={20}/></div><div className="grow"><span className="eyebrow">{item.company}</span><h3>{item.role}</h3><p>{item.round} round</p><div className="job-meta"><span><CalendarDays size={15}/>{item.date}</span><span><MapPin size={15}/>{item.mode}</span></div></div><button className="button button-primary">Meeting link</button></div>)}</div>
    </>
  );
}
