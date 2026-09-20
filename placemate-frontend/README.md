# PlaceMate Frontend

A simple, beginner-friendly React + Vite frontend for a College Placement Management System.

## Important

This version is **frontend only**. There is no backend, database, API, JWT authentication, file storage, or real persistence.

All displayed data is local demo data in `src/data/mockData.js`.

## Features included

- Student, Recruiter and TPO/Admin workspaces
- Responsive sidebar and top navigation
- Login/demo role switch
- Student dashboard
- Profile and profile completion UI
- Job marketplace with search/filter
- Job details and eligibility explanation
- Apply/save job interactions using local React state
- Application tracking
- Interviews
- Assessments
- Companies
- Placement status
- Announcements
- Calendar
- Notifications
- Preparation resources
- Resume builder preview
- Settings
- Recruiter job/applicant/offer pages
- Admin student/company/analytics pages
- Organized reusable components

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal, normally:

`http://localhost:5173`

## Folder structure

```text
placemate-frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── jobs/
│   │   └── layout/
│   ├── context/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   ├── auth/
│   │   ├── admin/
│   │   └── recruiter/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Backend later

When a backend is added, the mock state in `AppContext.jsx` can be replaced with API service calls. No backend code is included in this project.
