import React from "react";
import PageHeader from "../components/common/PageHeader";

export default function Announcements() {
  const items = [
    ["Placement Drive", "TechNova campus drive registration is now open.", "Today"],
    ["Workshop", "Resume review workshop will be held this Friday.", "Yesterday"],
    ["Important Notice", "Students must keep their latest resume uploaded.", "18 Sep"],
  ];
  return <><PageHeader title="Announcements" subtitle="Important placement updates from the TPO office." /><div className="announcement-list">{items.map(([cat, title, date]) => <article className="panel announcement" key={title}><span className="tag">{cat}</span><div className="grow"><h3>{title}</h3><p>Read the announcement details and follow any required action.</p></div><small>{date}</small></article>)}</div></>;
}
