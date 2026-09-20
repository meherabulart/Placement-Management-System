import React from "react";
import PageHeader from "../components/common/PageHeader";
import { useApp } from "../context/AppContext";

export default function Notifications() {
  const { notifications, markAllRead } = useApp();
  return <><PageHeader title="Notifications" subtitle="Stay updated with applications, interviews and jobs." action={<button className="button button-light" onClick={markAllRead}>Mark all as read</button>} /><div className="notification-list">{notifications.map((item) => <div className={`panel notification-item ${item.unread ? "unread" : ""}`} key={item.id}><div className="notification-avatar">!</div><div className="grow"><strong>{item.title}</strong><p>{item.message}</p><small>{item.time}</small></div>{item.unread && <span className="unread-dot" />}</div>)}</div></>;
}
