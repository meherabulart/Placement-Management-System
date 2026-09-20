export const student = {
  name: "Zayed Hossain",
  email: "student@example.com",
  department: "CSE",
  year: "2028",
  roll: "CSE-24-001",
  cgpa: 8.2,
  profileCompletion: 85,
  skills: ["React", "JavaScript", "C++", "Python", "SQL"],
};

export const jobs = [
  {
    id: 1,
    company: "TechNova",
    title: "Software Developer Intern",
    location: "Bengaluru",
    salary: "₹35,000 / month",
    type: "Internship",
    workMode: "Hybrid",
    deadline: "30 Sep 2026",
    skills: ["React", "JavaScript", "DSA"],
    department: "CSE, IT",
    cgpa: 7.5,
    openings: 6,
    description: "Build and maintain web products with a small engineering team.",
  },
  {
    id: 2,
    company: "CloudPeak",
    title: "Graduate Software Engineer",
    location: "Pune",
    salary: "₹8–10 LPA",
    type: "Full-time",
    workMode: "On-site",
    deadline: "05 Oct 2026",
    skills: ["Java", "SQL", "DSA"],
    department: "CSE, IT",
    cgpa: 8,
    openings: 8,
    description: "Join a graduate engineering program working on cloud platforms.",
  },
  {
    id: 3,
    company: "PixelWorks",
    title: "Frontend Developer",
    location: "Kolkata",
    salary: "₹6–8 LPA",
    type: "Full-time",
    workMode: "Hybrid",
    deadline: "11 Oct 2026",
    skills: ["React", "CSS", "JavaScript"],
    department: "CSE, IT, TT",
    cgpa: 7,
    openings: 4,
    description: "Create accessible and responsive interfaces for digital products.",
  },
  {
    id: 4,
    company: "DataBridge",
    title: "Data Analyst",
    location: "Hyderabad",
    salary: "₹7–9 LPA",
    type: "Full-time",
    workMode: "Remote",
    deadline: "15 Oct 2026",
    skills: ["Python", "SQL", "Excel"],
    department: "CSE, IT, APM",
    cgpa: 7.5,
    openings: 5,
    description: "Work with product and business teams to turn data into insights.",
  },
];

export const applications = [
  { id: 1, company: "CloudPeak", job: "Graduate Software Engineer", jobId: 2, appliedDate: "14 Sep 2026", status: "SHORTLISTED", nextStep: "Technical interview" },
  { id: 2, company: "TechNova", job: "Software Developer Intern", jobId: 1, appliedDate: "12 Sep 2026", status: "UNDER_REVIEW", nextStep: "Application review" },
  { id: 3, company: "PixelWorks", job: "Frontend Developer", jobId: 3, appliedDate: "05 Sep 2026", status: "INTERVIEW", nextStep: "Technical round" },
  { id: 4, company: "DataBridge", job: "Data Analyst", jobId: 4, appliedDate: "01 Sep 2026", status: "REJECTED", nextStep: "—" },
];

export const interviews = [
  { id: 1, company: "PixelWorks", role: "Frontend Developer", round: "Technical", date: "24 Sep 2026", time: "11:00 AM", mode: "Online", status: "Scheduled" },
  { id: 2, company: "CloudPeak", role: "Graduate Software Engineer", round: "HR", date: "27 Sep 2026", time: "3:00 PM", mode: "Online", status: "Scheduled" },
];

export const notifications = [
  { id: 1, title: "Interview scheduled", message: "PixelWorks technical interview is scheduled for 24 Sep.", time: "2 hours ago", unread: true },
  { id: 2, title: "New job posted", message: "DataBridge has posted a new Data Analyst role.", time: "5 hours ago", unread: true },
  { id: 3, title: "Application shortlisted", message: "CloudPeak moved your application to shortlist.", time: "Yesterday", unread: false },
];

export const companies = [
  { id: 1, name: "TechNova", industry: "Technology", location: "Bengaluru", jobs: 3 },
  { id: 2, name: "CloudPeak", industry: "Cloud & SaaS", location: "Pune", jobs: 2 },
  { id: 3, name: "PixelWorks", industry: "Software", location: "Kolkata", jobs: 1 },
  { id: 4, name: "DataBridge", industry: "Analytics", location: "Hyderabad", jobs: 2 },
];

export const students = [
  { id: 1, name: "Zayed Hossain", department: "CSE", batch: "2028", cgpa: 8.2, status: "In Progress" },
  { id: 2, name: "Aarav Sen", department: "IT", batch: "2028", cgpa: 8.7, status: "Placed" },
  { id: 3, name: "Maya Roy", department: "TT", batch: "2028", cgpa: 8.1, status: "In Progress" },
  { id: 4, name: "Rahul Das", department: "APM", batch: "2028", cgpa: 7.6, status: "Not Placed" },
];
