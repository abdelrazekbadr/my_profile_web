/* ---------------------------------------------------------------
   All page content lives here. Edit this file to update the site.
   --------------------------------------------------------------- */

var TIMELINE = [
  {
    era: "now",
    flag: "now",
    years: "2025 — present",
    role: "Technical Team Lead / Software Architect",
    org: "Laplace Software, placed with SAMTIA and Advanced Photonix — remote, Egypt",
    note: "A different sister-company group from the 2015–2025 placement",
    points: [
      "Lead a distributed team of 4–8 full-stack engineers across frontend, React Native, Odoo and QA, owning technical direction, code quality, sprint execution and engineering standards.",
      "Own architecture and delivery of SAMTIA, an Odoo-based B2B e-commerce platform serving enterprise buyers through a Next.js customer portal and an Account Manager Portal with role-based access, pricelist management and account-level reporting.",
      "Designed and standardised a five-environment Odoo.sh release topology across two engineering teams, separating development, regression, UAT and production, automated with GitHub Actions and coordinated through Azure DevOps.",
      "Own the core B2B financial and accounting workflows in Odoo and resolve production-critical issues across the platform — including a WebSocket frame-ordering fault affecting the client portal.",
      "Introduced a weighted performance evaluation framework for the team, and brought AI-assisted development and workflow automation into daily delivery and reporting."
    ],
    more: "Two portal audiences sit in front of one ERP: enterprise buyers on the customer portal, and account managers on their own portal. Odoo Enterprise is the system of record on PostgreSQL; Next.js and TypeScript carry the experience layer. Releases move through five Odoo.sh environments so a regression never reaches a buyer.",
    tags: ["Odoo 18/19", "Python", "Next.js", "TypeScript", "PostgreSQL", "Odoo.sh", "Azure DevOps", "GitHub Actions", "Docker"]
  },
  {
    era: "ksa",
    flag: "odoo",
    years: "2015 — 2025",
    role: "Senior Software Engineer → Software Architect / Team Lead",
    org: "Laplace Software, placed with Qwaed Technologies and Genius Valley — on-site, KSA",
    note: "Outsourced by Laplace to Qwaed Technologies and Genius Valley",
    points: [
      "Led architecture and delivery of enterprise systems for the customers of Qwaed Technologies and Genius Valley — the Ministry of Interior, the Ministry of Economy and Planning, Saudi Telecom Company and King Saud University — document management, visitor management, access control, and time and attendance.",
      "Delivered a biometric time and attendance platform for King Saud University covering 10,000 employees across 300 fingerprint devices, and an equivalent system for STC serving 500 employees across 50 devices.",
      "Designed and packaged the Access Management System (AMS) suite on Odoo — modular addons for visitor management, access control, time and attendance, MDU, secretary workflow and IoT school sound systems — with a Docker-based client release pipeline.",
      "Built and published a Saudi ZATCA e-invoicing compliance module on the Odoo App Store, reaching 5,880 downloads, alongside an Egyptian Tax Authority compliance integration.",
      "Migrated the delivery stack from legacy C#/.NET and DevExpress XAF to Odoo/Python and modern JavaScript, progressing from individual contributor to technical lead while running client requirements workshops, on-site deployment and UAT in Arabic and English."
    ],
    more: "Laplace holds my contract; Qwaed Technologies and Genius Valley hold the contracts with the end customers. Ten years of this was spent as the outsourced implementation partner rather than the client — running requirements workshops, deploying on site, and taking UAT sign-off from ministries and a national telecom. For any role that involves managing a vendor, that is the same relationship seen from the other side. The pivot to Odoo happened inside this period, in 2020, on a clinical EMR.",
    tags: ["Odoo", "Python", "OWL", "PostgreSQL", "C#/.NET", "DevExpress XAF", "BioStar2 API", "Docker", "ZATCA"]
  },
  {
    era: "early",
    flag: "",
    years: "2014 — 2015",
    role: "Software Engineer",
    org: "Laplace Software — Egypt",
    note: "Where the employer relationship starts",
    points: [
      "Built enterprise products in C#/.NET with DevExpress XAF and SQL Server, including a university laboratory system for Kafr El-Sheikh University, a stock management platform and a property management platform."
    ],
    more: "Model-driven development with XAF turned out to transfer almost directly to Odoo's declarative model layer years later — same instinct, different framework.",
    tags: ["C#/.NET", "DevExpress XAF", "SQL Server"]
  },
  {
    era: "early",
    flag: "",
    years: "2013 — 2014",
    role: "Software Engineer",
    org: "ACS, branch of a KSA-based group — Egypt",
    note: "",
    points: [
      "Developed modules of an enterprise healthcare system using C#, Silverlight, WCF and Oracle under an MVVM architecture."
    ],
    more: "First exposure to enterprise architecture on a system with real clinical users and a hospital group behind it.",
    tags: ["C#", "Silverlight", "WCF", "Oracle", "MVVM"]
  },
  {
    era: "early",
    flag: "",
    years: "2010 — 2013",
    role: "Software Developer",
    org: "Genius Making International Academy and independent projects — Egypt",
    note: "",
    points: [
      "Delivered desktop and data-driven applications in C#/.NET with SQL Server for education, defense and medical-training clients, from requirements gathering through deployment and support.",
      "Completed the nine-month ITI Professional Software Development Diploma in 2013, alongside educational applications and 2D games for children's skill development."
    ],
    more: "Working end to end — gathering the requirement, building it, deploying it, supporting it — from the first year is why client-facing delivery never felt like a separate skill later.",
    tags: ["C#/.NET", "SQL Server", "Desktop applications"]
  }
];

/* The employment chain shown in "How I'm employed".
   One employer, then two separate placements with two different
   sister-company groups, each with its own customers. */
var CHAIN = {
  employer: {
    name: "Laplace Software",
    where: "Egypt / USA",
    logo: "logos/laplace.png",
    logoW: 240,
    logoH: 60,
    years: "2014 \u2192 2026, continuous",
    note: "My main contractor for 12 years \u2014 including 10 years on-site in Saudi Arabia, placed with Qwaed Technologies. The company I work inside changes; the contract does not."
  },
  placements: [
    {
      years: "2015 \u2013 2025",
      mode: "On-site, Kingdom of Saudi Arabia",
      label: "First placement",
      companies: [
        { name: "Qwaed Technologies", note: "Formal employer of record during the on-site period", logo: "logos/qwaed.png", dark: false, logoW: 170, logoH: 40 },
        { name: "Genius Valley", note: "Telecom and IT consulting and technical services", logo: "logos/genius-valley.png", dark: true, logoW: 170, logoH: 32 }
      ],
      clients: [
        { name: "Ministry of Interior", what: "Document and task management, iPad application for executive leadership" },
        { name: "Ministry of Economy and Planning", what: "Visitor management and access control" },
        { name: "Saudi Telecom Company (STC)", what: "Biometric time and attendance \u2014 500 employees, 50 devices" },
        { name: "King Saud University", what: "Biometric time and attendance \u2014 10,000 employees, 300 devices" },
        { name: "BinRush Ophthalmic Center", what: "Ophthalmic EMR on Odoo with NPHIES insurance integration" }
      ]
    },
    {
      years: "2025 \u2013 present",
      mode: "Remote from Egypt",
      label: "Second placement \u2014 a different group of sister companies",
      companies: [
        { name: "SAMTIA", note: "B2B commerce group, KSA", logo: "logos/samtia.png", dark: true, logoW: 170, logoH: 32 },
        { name: "Advanced Photonix", note: "Sister company in the same group", logo: "logos/advanced-photonix.png", dark: true, logoW: 170, logoH: 32 }
      ],
      clients: [
        { name: "SAMTIA B2B e-commerce platform", what: "Odoo Enterprise back office, Next.js customer portal and Account Manager Portal, serving enterprise buyers" }
      ]
    }
  ]
};

var PROJECTS = [
  {
    name: "SAMTIA — B2B e-commerce platform",
    kind: "Enterprise",
    who: "SAMTIA, KSA · Software Architect & Team Lead · 2025 – present",
    text: "An Odoo + Next.js commerce ecosystem integrating ERP, buyer portal, account-manager operations, pricing, orders, permissions and reporting.",
    tags: ["Odoo", "Python", "Next.js", "TypeScript", "PostgreSQL", "Odoo.sh", "Azure DevOps", "Docker"]
  },
  {
    name: "Access Management System (AMS) suite",
    kind: "Enterprise",
    who: "KSA enterprise clients · Software Architect & Team Lead · 2024 – 2025",
    text: "A productized modular Odoo suite — ams_base, ams_bs, ams_vm, ams_mep and OTP login — covering visitor management, access control, time and attendance, MDU and IoT school sound systems, packaged with a Docker release pipeline and Suprema biometric integration.",
    tags: ["Odoo", "Python", "OWL", "JavaScript", "PostgreSQL", "React Native", "Docker", "BioStar2 API"]
  },
  {
    name: "Biometric time &amp; attendance",
    kind: "Enterprise",
    who: "King Saud University and STC · 2015 – 2025",
    text: "10,000 employees across 300 fingerprint devices at King Saud University, and 500 employees across 50 devices at STC. Device protocols, enrolment, sync recovery and payroll-grade reporting.",
    tags: ["BioStar2 API", "Odoo", "C#/.NET", "SQL Server", "PostgreSQL"]
  },
  {
    name: "Document &amp; task management, iPad",
    kind: "Enterprise",
    who: "Ministry of Interior, KSA · Software Engineer & Team Lead · 2020 – 2023",
    text: "Secure iPad document circulation and task management for ministerial executive leadership, backed by a WCF service layer and enterprise identity controls.",
    tags: ["C#", "WCF", "DevExpress XAF", "Ionic", "Angular", "SQL Server", "iOS"]
  },
  {
    name: "Electronic medical record",
    kind: "Enterprise",
    who: "BinRush Ophthalmic Center, KSA · Software Architect & Team Lead · 2020 – 2023",
    text: "A specialist ophthalmic EMR on Odoo covering outpatient and inpatient clinical workflows, patient records and reporting, with insurance claims integrated through the Saudi NPHIES national health information exchange.",
    tags: ["Odoo", "Python", "JavaScript", "OWL", "PostgreSQL", "NPHIES"]
  },
  {
    name: "ZATCA e-invoicing module",
    kind: "Published",
    who: "Odoo App Store · 5,880 downloads",
    text: "A Saudi ZATCA e-invoicing compliance module published on the Odoo App Store, with a parallel Egyptian Tax Authority compliance integration.",
    tags: ["Odoo", "Python", "ZATCA", "PostgreSQL"]
  },
  {
    name: "Visitor management",
    kind: "Enterprise",
    who: "Ministry of Economy and Planning, KSA · 2015 – 2025",
    text: "Visitor registration, hosting approval, badge issuance and full visit audit history for a government site, alongside an access control system tied to organisational identity.",
    tags: ["C#/.NET", "Odoo", "SQL Server", "DevExpress XAF"]
  },
  {
    name: "Tayabat — nutrition mobile app",
    kind: "Independent",
    who: "Lead Engineer · 2025 – 2026",
    text: "A consumer nutrition application built end to end as a personal engineering project — mobile client, Supabase backend, Next.js marketing site, analytics and Play Store release assets.",
    tags: ["React Native", "Expo", "Supabase", "Zustand", "Next.js", "Vercel", "Firebase"]
  },
  {
    name: "AI automation &amp; RAG workflow platform",
    kind: "Independent",
    who: "Lead Engineer · 2025 – 2026",
    text: "Multi-agent automation workflows including a WhatsApp and Telegram AI assistant with calendar integration, and a retrieval-augmented document ingestion pipeline over a vector database.",
    tags: ["n8n", "CrewAI", "LiteLLM", "Supabase pgvector", "HuggingFace", "Python"]
  }
];

/* Chips offered in the Work filter, in display order. */
var FILTER_TAGS = ["Odoo", "Python", "Next.js", "TypeScript", "PostgreSQL", "Docker", "React Native", "C#/.NET", "BioStar2 API"];

var SKILLS = [
  {
    group: "ERP & backend",
    items: ["Odoo ERP v15–v19 (Community & Enterprise)", "Custom addon development", "Odoo ORM", "Models", "Controllers", "Security rules", "Wizards", "QWeb reports", "Scheduled actions", "Python", "Flask", "RESTful API design", "B2B commerce workflows", "Financial & accounting workflows", "MVC", "MVVM", "SOA", "OOP design patterns"]
  },
  {
    group: "Frontend & web",
    items: ["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "Odoo OWL framework", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Zustand", "TanStack Query", "next-intl", "i18next", "RTL and internationalisation"]
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Flutter", "Firebase", "Ionic", "Swift (iOS)", "Kotlin (Android)"]
  },
  {
    group: "AI & automation",
    items: ["Agentic AI (CrewAI)", "Retrieval-Augmented Generation (RAG)", "Vector search (Supabase pgvector)", "HuggingFace embeddings", "LLM integration (LiteLLM)", "Google GenAI", "n8n", "Make.com", "AI-assisted software engineering"]
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure DevOps", "Odoo.sh multi-environment release topology", "Docker", "Docker Compose", "GitHub Actions", "Git", "Git submodules", "Portainer", "Traefik", "Nginx Proxy Manager", "Vercel", "Linux server administration", "Prometheus", "Grafana", "Loki"]
  },
  {
    group: "Databases & integration",
    items: ["PostgreSQL", "Supabase", "Microsoft SQL Server", "Oracle", "IoT & biometric hardware integration", "Suprema devices", "BioStar2 API", "Saudi ZATCA e-invoicing", "Egyptian Tax Authority e-invoicing", "NPHIES"]
  },
  {
    group: "Leadership & delivery",
    items: ["Technical leadership", "Software architecture", "Solution architecture", "Odoo techno-functional delivery", "System design", "Agile / Scrum", "Team mentoring", "Code review", "Stakeholder management", "Release management", "Requirements workshops", "UAT in Arabic and English", "Technical documentation"]
  },
  {
    group: "Earlier-career technologies",
    items: ["C# / .NET", "ASP.NET", "WinForms", "WCF", "Silverlight", "ADO.NET", "Entity Framework", "DevExpress XPO / XAF", "Windows Services"]
  }
];
