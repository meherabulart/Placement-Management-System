import React from "react";
import PageHeader from "../components/common/PageHeader";
import { student } from "../data/mockData";

export default function Profile() {
  return (
    <>
      <PageHeader title="My Profile" subtitle="Keep your academic and career information up to date." action={<button className="button button-primary">Edit Profile</button>} />
      <div className="profile-layout">
        <section className="panel profile-summary">
          <div className="avatar-large">ZH</div>
          <h2>{student.name}</h2><p>{student.email}</p><span className="tag">CSE · Batch {student.year}</span>
          <div className="profile-progress"><div><span>Profile completion</span><b>{student.profileCompletion}%</b></div><div className="progress-line"><span style={{width: `${student.profileCompletion}%`}} /></div></div>
        </section>
        <section className="panel">
          <div className="panel-header"><div><h2>Personal & Academic</h2></div></div>
          <div className="detail-grid">
            <div><span>Full name</span><b>{student.name}</b></div><div><span>Email</span><b>{student.email}</b></div>
            <div><span>Department</span><b>{student.department}</b></div><div><span>Graduation year</span><b>{student.year}</b></div>
            <div><span>Roll number</span><b>{student.roll}</b></div><div><span>CGPA</span><b>{student.cgpa}</b></div>
          </div>
          <div className="section-divider"><h3>Skills</h3><div className="tag-list">{student.skills.map((s) => <span className="tag" key={s}>{s}</span>)}</div></div>
        </section>
      </div>
      <section className="panel"><div className="panel-header"><div><h2>Profile Checklist</h2><p>Complete these sections to improve your profile.</p></div></div><div className="checklist">{["Personal information", "Education", "Skills", "Projects", "Experience", "Certifications", "Resume", "Career preferences"].map((item, i) => <div key={item} className="check-item"><span>{i < 6 ? "✓" : "!"}</span><div><strong>{item}</strong><small>{i < 6 ? "Completed" : "Needs attention"}</small></div></div>)}</div></section>
    </>
  );
}
