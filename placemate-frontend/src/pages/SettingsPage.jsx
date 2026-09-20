import React from "react";
import PageHeader from "../components/common/PageHeader";

export default function SettingsPage() {
  return <><PageHeader title="Settings" subtitle="Manage your account and preferences." /><div className="settings-grid"><section className="panel form-stack"><h2>Account</h2><label>Email<input defaultValue="student@example.com"/></label><label>Phone<input placeholder="+91 ..." /></label><button className="button button-primary">Save changes</button></section><section className="panel"><h2>Notifications</h2><div className="toggle-row"><span><b>Job alerts</b><small>Receive notifications for matching jobs.</small></span><input type="checkbox" defaultChecked /></div><div className="toggle-row"><span><b>Interview reminders</b><small>Get reminders before interviews.</small></span><input type="checkbox" defaultChecked /></div><div className="toggle-row"><span><b>Announcements</b><small>Receive important TPO updates.</small></span><input type="checkbox" defaultChecked /></div></section></div></>;
}
