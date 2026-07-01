/**
 * ────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth
 * Edit the values below to personalize the entire site. Nothing in
 * this file changes layout or styling — it is content only.
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "AYANA FEREDE ALEM",
  role: "Associate Quality Assurance Engineer / QA Lead",
  tagline: "I find what breaks, before your users do.",
  shortBio:
    "Associate QA Engineer with a background spanning manual testing, automation, and enterprise ERP platforms. I build test strategy the way engineers build software: deliberately, with traceability, and with an eye on risk.",
  location: "Addis Ababa, Ethiopia",
  email: "feredeayumanaws18@gmail.com",
  phone: "+251 911642530",
  social: {
    linkedin: "https://linkedin.com/in/your-https://www.linkedin.com/in/ayana-ferede-9a2884248/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFYgflZdSSiO16dTRsC18sQ%3D%3D",
    github: "https://github.com/your-handle",
    telegram: "@GebreJusus"
  },
  resumeFile: "/cv/resume.pdf",
  education: [
    {
      degree: "MSc, Software Engineering",
      school: "Jawaharlal Nehru Technological University Hayderabad, India (JNTUH)",
      years: "2018 – 2020"
    },
    {
      degree: "BSc, Computer Science",
      school: "Wolaita Sodo University",
      years: "2013 – 2016"
    }
  ]
};

export const skillCategories = [
  {
    name: "Manual Testing",
    items: [
      { label: "Test Case Design", level: 95 },
      { label: "Exploratory Testing", level: 90 },
      { label: "Regression Testing", level: 92 },
      { label: "UAT Coordination", level: 88 }
    ]
  },
  {
    name: "Automation Testing",
    items: [
      { label: "Selenium WebDriver", level: 85 },
      { label: "Playwright", level: 80 },
      { label: "Cypress", level: 75 },
      { label: "CI Test Integration", level: 78 }
    ]
  },
  {
    name: "API Testing",
    items: [
      { label: "Postman", level: 95 },
      { label: "REST Assured", level: 75 },
      { label: "Contract Testing", level: 70 }
    ]
  },
  {
    name: "ERP & Enterprise",
    items: [
      { label: "ERP Functional Testing", level: 92 },
      { label: "HRMS Testing", level: 85 },
      { label: "Procurement Systems", level: 82 },
      { label: "Financial Platform QA", level: 84 }
    ]
  },
  {
    name: "Test Management",
    items: [
      { label: "Test Planning & Strategy", level: 93 },
      { label: "Risk-Based Testing", level: 90 },
      { label: "Defect Management", level: 92 },
      { label: "Agile / Scrum", level: 88 }
    ]
  },
  {
    name: "Quality Systems",
    items: [
      { label: "ISO 9001", level: 85 },
      { label: "QA SOP Development", level: 88 },
      { label: "Process Auditing", level: 80 }
    ]
  },
  {
    name: "Tools & Platforms",
    items: [
      { label: "Jira / Azure DevOps", level: 90 },
      { label: "TestRail", level: 85 },
      { label: "Git", level: 78 },
      { label: "Docker (basics)", level: 65 }
    ]
  },
  {
    name: "Programming & Data",
    items: [
      { label: "JavaScript / TypeScript", level: 70 },
      { label: "Java", level: 70 },
      { label: "Python", level: 65 },
      { label: "SQL", level: 80 },
      { label: "Oracle", level: 80 }
    ]
  }
];

export const experience = [
  {
    id: "exp-04",
    role: "Associate QA Engineer / QA Lead",
    company: "eTech S.C",
    period: "2025 — Present",
    summary:
      "Leading QA strategy for a multi-module ERP platform spanning finance, Inventory, Fleet, HR, Planning, Purchase, Project Management, Document management, and so on.",
    highlights: [
      "Defined and rolled out risk-based test strategy across product squads",
      "Reduced regression cycle time by 40% through targeted automation coverage",
      "Authored QA SOPs aligned to ISO 9001 documentation requirements",
      "Mentored 3 junior QA engineers on test design and defect triage"
    ]
  },
  {
    id: "exp-03",
    role: "Lecturer",
    company: "Debre Berhan University",
    period: "2023 — 2025",
    summary: "I worked as a university lecturer",
    highlights: [
      "Teaching courses in Computer Science and Software Engineering",
      "Preparing instructional materials",
      "Assessing students",
      "Supervising projects",
      "Providing academic guidance and mentorship"
    ]
  },
  {
    id: "exp-02",
    role: "Lecturer",
    company: "Mizan-Tepi University",
    period: "2017 — 2023",
    summary: "I worked as a university lecturer",
    highlights: [
      "Teaching courses in Computer Science and Software Engineering",
      "Preparing instructional materials",
      "Assessing students",
      "Supervising projects",
      "Providing academic guidance and mentorship"
    ]
  }
];

export const projects = [
  {
    slug: "erp-financial-suite",
    title: "ERP Financial Suite — QA Ownership",
    description:
      "End-to-end QA ownership for the finance module of a multi-tenant ERP platform, covering ledger postings, reconciliation, and reporting.",
    technologies: ["Postman", "Selenium", "Jira", "SQL"],
    responsibilities: [
      "Designed the full test plan and acceptance criteria",
      "Built an API regression suite for ledger and reconciliation endpoints",
      "Coordinated release sign-off with finance stakeholders"
    ],
    testingApproach:
      "Risk-based test design prioritizing financial-impact paths, paired with automated API regression and manual UAT facilitation.",
    businessImpact: "Cut post-release financial defects by 60% over two release cycles.",
    links: { demo: "", github: "" }
  },
  {
    slug: "hrms-platform",
    title: "HRMS Platform Test Strategy",
    description:
      "Defined and executed the test strategy for a human resource management system used across 3 business units.",
    technologies: ["TestRail", "Cypress", "Azure DevOps"],
    responsibilities: [
      "Authored test plans for onboarding, payroll, and leave management flows",
      "Set up a Cypress smoke suite for critical-path coverage",
      "Ran structured UAT with HR stakeholders"
    ],
    testingApproach:
      "Combination of scripted functional testing and exploratory sessions targeting edge cases in payroll calculations.",
    businessImpact: "Zero critical payroll defects across three consecutive payroll cycles post-launch.",
    links: { demo: "", github: "" }
  },
  {
    slug: "procurement-api-regression",
    title: "Procurement System API Regression Suite",
    description:
      "Built a maintainable Postman/Newman regression suite covering the procurement system's purchase-order lifecycle.",
    technologies: ["Postman", "Newman", "CI/CD"],
    responsibilities: [
      "Mapped API contracts to test scenarios",
      "Integrated suite into CI pipeline for nightly runs",
      "Documented defect findings with reproducible steps"
    ],
    testingApproach: "Contract-driven API testing with environment-specific data fixtures.",
    businessImpact: "Caught integration regressions before staging in 90% of release cycles.",
    links: { demo: "", github: "" }
  }
];

export const certifications = [
  { name: "Java Package", issuer: "Naresh i Technology", year: "2020" },
  { name: "ISO 9001:2015 Internal Auditor", issuer: "eTech S.C", year: "2026" },
  { name: "Oracle 11g and 12c", issuer: "Naresh i Technology", year: "2020" },
  { name: "Postman API Testing Path (v12)", issuer: "Postman Academy", year: "2026" }
];

export const testimonials = [
  {
    quote:
      "Every release this team signed off on, I trusted completely. The test documentation alone saved us in three separate audits.",
    name: "Former Engineering Manager",
    role: "VP Engineering, Previous Company"
  },
  {
    quote:
      "Brings structure to QA without slowing the team down — risk-based thinking applied well across a fast-moving ERP product.",
    name: "Former Product Lead",
    role: "Director of Product, Previous Company"
  }
];

export const blogPosts = [
  {
    slug: "risk-based-testing-erp",
    title: "Risk-Based Testing in Large ERP Systems",
    excerpt:
      "Why exhaustive testing is the wrong goal in modules with hundreds of interdependent business rules — and what to prioritize instead.",
    date: "2026-01-12",
    tags: ["ERP Testing", "Risk-Based Testing"]
  },
  {
    slug: "postman-api-regression-at-scale",
    title: "Structuring a Postman Regression Suite That Scales",
    excerpt:
      "A practical folder, environment, and variable structure for API regression suites that stay maintainable past 200 requests.",
    date: "2026-03-04",
    tags: ["API Testing", "Test Automation"]
  },
  {
    slug: "iso-9001-for-qa-teams",
    title: "What ISO 9001 Actually Asks of a QA Team",
    excerpt:
      "Demystifying the documentation and process-control requirements that matter most for software quality teams.",
    date: "2026-05-01",
    tags: ["ISO 9001", "QA Best Practices"]
  },
  {
    slug: "writing-test-cases-that-survive-change",
    title: "Writing Test Cases That Survive Requirement Change",
    excerpt: "Structuring test case design around behavior, not screens, so churn doesn't break your suite.",
    date: "2025-12-02",
    tags: ["Software Quality Engineering", "QA Best Practices"]
  }
];

export const resources = [
  { name: "Resume / CV", file: "/cv/Professional CV.pdf", description: "Full professional resume, PDF." },
  { name: "Test Plan Template", file: "/templates/Test Plan form.docx", description: "Structured test plan starting point." },
  { name: "Test Case Template", file: "/templates/Test Case design Guideline.docx", description: "word document template for structured test case design." },
  { name: "Defect Report Template", file: "/templates/Defect_Report_Form.docx", description: "Standard defect reporting format." },
  { name: "QA SOP Example", file: "/templates/QA_SOP_Document.docx", description: "Sample SOP document for a QA process." }
];
