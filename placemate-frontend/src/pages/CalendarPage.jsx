import React from "react";
import PageHeader from "../components/common/PageHeader";

export default function CalendarPage() {
  const events = [["24 Sep", "PixelWorks Technical Interview", "11:00 AM"], ["27 Sep", "CloudPeak HR Interview", "3:00 PM"], ["30 Sep", "TechNova Application Deadline", "11:59 PM"], ["04 Oct", "Placement Preparation Workshop", "2:00 PM"]];
  return <><PageHeader title="Placement Calendar" subtitle="Interviews, deadlines and campus events." /><section className="panel"><div className="calendar-list">{events.map(([date, title, time]) => <div className="calendar-event" key={title}><div className="date-box">{date.split(" ")[0]}<small>{date.split(" ")[1]}</small></div><div className="grow"><strong>{title}</strong><span>{time}</span></div><button className="button button-light">View</button></div>)}</div></section></>;
}
