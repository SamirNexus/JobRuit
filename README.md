# JobRuit — Responsive Recruitment Platform Prototype

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

**Live demo:** https://job-ruit.vercel.app

JobRuit is a multi-page front-end prototype for a recruitment platform serving job seekers and employers. It explores the complete user experience—from onboarding and profile creation to job publishing, applications, shortlisting, subscription plans, and account management.

> This repository is a front-end demonstration. Authentication, payments, email delivery, and persistent server-side data require a production backend.

## Experiences covered

### Job seekers

- Registration, login, password recovery, and OTP screens
- Personal profile and résumé creation
- Job discovery, application, saved jobs, and application tracking
- Subscription and account-management journeys

### Employers

- Company registration and profile completion
- Vacancy creation and editing
- Applicant discovery and profile review
- Candidate lists and employer account screens

## Tech stack

- Semantic HTML5
- CSS3 and responsive media queries
- Bootstrap
- JavaScript ES6 and jQuery
- Client-side form validation
- Font Awesome

## Project structure

```text
JobRuit/
├── css/        # Global and page styles
├── js/         # Interactions and validation
├── images/     # Interface assets
├── webfonts/   # Local font assets
└── *.html      # Job-seeker and employer flows
```

## Architecture at a glance

```mermaid
flowchart LR
  Landing[Public landing & discovery] --> Seeker[Job-seeker flows]
  Landing --> Employer[Employer flows]
  Seeker --> Profiles[Profile & résumé screens]
  Seeker --> Jobs[Search, saved jobs & applications]
  Employer --> Vacancies[Vacancy creation & editing]
  Employer --> Applicants[Applicant discovery & review]
  Shared[Bootstrap + shared CSS + JS/jQuery] --> Landing
  Shared --> Seeker
  Shared --> Employer
  Deploy[Vercel] --> Landing
```

## Recruiter quick scan

- 72 connected HTML screens covering both candidate and employer journeys
- Separate job-seeker and employer experiences rather than a single landing page
- Responsive layouts built with Bootstrap, custom CSS, and media queries
- Client-side form validation and interactive flows using JavaScript and jQuery
- Portfolio demo clearly separated from backend-dependent features such as auth, payments, and email
- Live deployment on Vercel for direct review

## Run locally

```bash
git clone https://github.com/SamirNexus/JobRuit.git
cd JobRuit
```

Open `homeAfterLog.html` for the job-seeker experience or `corporateHomeAfterLog.html` for the employer experience. A local static server is recommended:

```bash
npx serve .
```

## Portfolio highlights

- Designed a broad, role-based recruitment journey across dozens of connected screens
- Created distinct job-seeker and employer experiences
- Implemented responsive layouts and reusable visual patterns
- Demonstrated product thinking beyond a single landing page

## Author

**Mohamed Samir** — Front-End Developer  
[GitHub](https://github.com/SamirNexus) · [LinkedIn](https://www.linkedin.com/in/samirnexus98/)
