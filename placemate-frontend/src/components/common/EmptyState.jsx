import React from "react";
import { Inbox } from "lucide-react";

export default function EmptyState({ title = "Nothing here yet", message = "There is no data to display." }) {
  return (
    <div className="empty-state">
      <Inbox size={28} />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
