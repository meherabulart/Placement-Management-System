import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, CalendarDays, CheckCircle2, FileText, Users } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import StatusBadge from "../components/common/StatusBadge";
import { useApp } from "../context/AppContext";
import { student } from "../data/mockData";

export default function Dashboard({ role }) {
  const navigate = useNavigate();
  const { jobs, applications } = useApp();

  if (role === "admin") return <AdminDashboard />;
  if (role === "recruiter") return <RecruiterDashboard />;

  return (
    <>
      <PageHeader title={`Good evening, ${student.name.split(" ")[0]} 👋`} subtitle="Here is your placement activity at a glance." />
      <div className="stats-grid">
        <StatCard label="Profile Completion" value="85%" change="2 sections missing" icon={CheckCircle2} />
        <StatCard label="Eligible Jobs" value="12" change="+3 this week" icon={BriefcaseBusiness} />
        <StatCard label="Applications" value={applications.length} change="4 active" icon={FileText} />
        <StatCard label="Shortlisted" value="5" change="+1 recently" icon={Users} />
      </div>

      <div className="content-grid two-one">
        <section className="panel">
          <div className="panel-header"><div><h2>Recommended Jobs</h2><p>Roles matching your profile.</p></div><button className="text-button" onClick={() => navigate("/jobs")}>View all <ArrowRight size={15} /></button></div>
          <div className="mini-job-list">
            {jobs.slice(0, 3).map((job) => (
              <div className="mini-job" key={job.id}>
                <div className="company-logo small">{job.company[0]}</div>
                <div className="grow"><strong>{job.title}</strong><span>{job.company} · {job.location}</span></div>
                <button className="button button-light" onClick={() => navigate(`/jobs/${job.id}`)}>View</button>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header"><div><h2>Profile Strength</h2><p>Complete your profile to unlock more roles.</p></div></div>
          <div className="progress-ring"><span>85%</span></div>
          <div className="progress-line"><span style={{ width: "85%" }} /></div>
          <button className="button button-primary button-full" onClick={() => navigate("/profile")}>Complete Profile</button>
        </section>
      </div>

      <div className="content-grid two-one">
        <section className="panel">
          <div className="panel-header"><div><h2>Recent Applications</h2><p>Latest updates from companies.</p></div><button className="text-button" onClick={() => navigate("/applications")}>View applications</button></div>
          <div className="table-wrap">
            <table><thead><tr><th>Company</th><th>Role</th><th>Status</th><th>Next step</th></tr></thead>
            <tbody>{applications.slice(0, 4).map((item) => <tr key={item.id}><td>{item.company}</td><td>{item.job}</td><td><StatusBadge status={item.status} /></td><td>{item.nextStep}</td></tr>)}</tbody></table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header"><div><h2>Upcoming</h2><p>Next placement events.</p></div></div>
          <div className="timeline-list">
            <div className="timeline-item"><CalendarDays size={18} /><div><strong>PixelWorks · Technical</strong><span>24 Sep · 11:00 AM</span></div></div>
            <div className="timeline-item"><CalendarDays size={18} /><div><strong>CloudPeak · HR</strong><span>27 Sep · 3:00 PM</span></div></div>
          </div>
        </section>
      </div>
    </>
  );
}

function RecruiterDashboard() {
  return (
    <>
      <PageHeader title="Recruiter Dashboard" subtitle="Track your hiring pipeline and active roles." />
      <div className="stats-grid">
        <StatCard label="Active Jobs" value="6" icon={BriefcaseBusiness} />
        <StatCard label="Applicants" value="148" icon={Users} />
        <StatCard label="Shortlisted" value="32" icon={CheckCircle2} />
        <StatCard label="Offers" value="8" icon={FileText} />
      </div>
      <div className="content-grid two-one">
        <section className="panel"><div className="panel-header"><div><h2>Hiring Pipeline</h2><p>Current candidate movement.</p></div></div><div className="bar-chart">{[72, 48, 35, 21, 12].map((value, i) => <div className="bar-item" key={i}><div className="bar" style={{height: `${value}%`}} /><span>{["Applied", "Review", "Shortlist", "Interview", "Offers"][i]}</span></div>)}</div></section>
        <section className="panel"><div className="panel-header"><div><h2>Quick Actions</h2></div></div><div className="quick-grid"><a href="/recruiter/jobs" className="quick-card">Post a Job</a><a href="/recruiter/applicants" className="quick-card">Review Applicants</a><a href="/interviews" className="quick-card">Schedule Interview</a><a href="/recruiter/offers" className="quick-card">Manage Offers</a></div></section>
      </div>
    </>
  );
}

function AdminDashboard() {
  return (
    <>
      <PageHeader title="TPO / Admin Dashboard" subtitle="A simple overview of campus placement activity." />
      <div className="stats-grid">
        <StatCard label="Total Students" value="1,248" icon={Users} />
        <StatCard label="Companies" value="42" icon={BriefcaseBusiness} />
        <StatCard label="Active Jobs" value="18" icon={FileText} />
        <StatCard label="Placed Students" value="682" change="54.6% placement rate" icon={CheckCircle2} />
      </div>
      <div className="content-grid two-one">
        <section className="panel"><div className="panel-header"><div><h2>Placement by Department</h2><p>Current batch overview.</p></div></div><div className="horizontal-bars">{[["CSE", 82], ["IT", 74], ["TT", 61], ["APM", 52]].map(([name, value]) => <div className="hbar-row" key={name}><span>{name}</span><div><i style={{width: `${value}%`}} /></div><b>{value}%</b></div>)}</div></section>
        <section className="panel"><div className="panel-header"><div><h2>System Activity</h2></div></div><div className="activity-list"><p><b>42</b> companies registered</p><p><b>18</b> jobs are open</p><p><b>96</b> interviews scheduled</p><p><b>682</b> students placed</p></div></section>
      </div>
    </>
  );
}
