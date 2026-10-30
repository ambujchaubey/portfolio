export const personalInfo = {
  name: "Ambuj Kumar Chaubey",
  firstName: "Ambuj",
  title: "Associate Data Engineer",
  company: "R Systems International",
  email: "ambuj0098@gmail.com",
  phone: "+91-9122898221",
  location: "India",
  resumeUrl: "/Ambuj_CV.pdf",
  social: {
    github: "https://github.com/ambujchaubey",
    linkedin: "https://www.linkedin.com/in/ambuj06/",
  },
  initials: "AC",
};

export const heroHook =
  "I build tools that turn months of manual work into minutes.";

export const heroDomains = [
  "Enterprise Automation",
  "Data Engineering",
  "AI Solutions",
];

export const impactMetrics = [
  { value: "200+", label: "Reports Migrated" },
  { value: "85-90%", label: "Automation Rate" },
  { value: "3", label: "Enterprise Systems" },
  { value: "6+", label: "Certifications" },
];

export const aboutNarrative = [
  "I got into engineering because I hate watching people do work a machine could do better. The first time I saw a colleague spend three weeks converting reports by hand, the job became obvious: remove that work, instead of doing it faster by hand.",
  "At R Systems I design generic automation engines for enterprise clients. The Oracle-to-Power BI toolkit, the SSRS to SyteLine converter, and the GCC planning platform follow the same rule: no hardcoded field names, and a pipeline a teammate can extend.",
];

export const engineeringPhilosophy = [
  {
    iconName: "Blocks" as const,
    title: "Generic over one-off",
    description:
      "Every solution I build handles hundreds of variations, not just the one case in front of me. Zero hardcoded field names, zero assumptions about input structure.",
  },
  {
    iconName: "Repeat" as const,
    title: "Automate the repetitive",
    description:
      "If a human does it twice, I automate it. The Oracle toolkit replaced a year of manual migration with a pipeline that runs in minutes.",
  },
  {
    iconName: "GitBranch" as const,
    title: "Design for maintainability",
    description:
      "Modular pipelines, clear stage boundaries, documented interfaces. Code that my team — or my future self — can understand and extend.",
  },
  {
    iconName: "Target" as const,
    title: "Solve the business problem",
    description:
      "Engineering serves the business. I measure success in migration hours saved, not in lines of code written.",
  },
  {
    iconName: "Puzzle" as const,
    title: "Make it composable",
    description:
      "Every component I build can be reused, extended, or replaced. The 7-stage SSRS pipeline was designed so each stage works independently.",
  },
];

export const currentWork = {
  company: "R Systems International",
  role: "Associate Data Engineer",
  duration: "Oct 2025 — Present",
  domain:
    "Enterprise report migration, AI-powered SaaS platforms, and ERP system integration for international clients across insurance and manufacturing sectors.",
  responsibilities: [
    "Designing and building end-to-end automation pipelines for large-scale report migrations",
    "Architecting multi-tenant SaaS platforms with AI document analysis capabilities",
    "Converting legacy reporting systems (Oracle Reports, SSRS) to modern BI platforms (Power BI, Infor SyteLine)",
    "Deploying containerized applications on Azure AKS with Kubernetes and Helm",
  ],
  technologies: [
    "Python",
    "SQL",
    "Flask",
    "FastAPI",
    "React",
    "Power BI",
    "Azure",
    "Docker",
    "Kubernetes",
    "LangGraph",
    "GPT-4o",
  ],
  impact: [
    { metric: "200+", description: "reports migrated from Oracle to Power BI" },
    { metric: "85-90%", description: "of migration work automated" },
    { metric: "100%", description: "conversion rate on SSRS to SyteLine" },
    { metric: "34,000+", description: "line XML report processed automatically" },
  ],
};

export const previousExperience = [
  {
    company: "Celebal Technologies",
    role: "Summer Intern — Data Science",
    duration: "May 2025 — Jul 2025",
  },
  {
    company: "Infosys Springboard",
    role: "Data Science Intern",
    duration: "Mar 2024 — Jun 2024",
  },
];

export interface FeaturedProject {
  slug: string;
  title: string;
  overview: string;
  businessProblem: string;
  technicalChallenge: string;
  architectureSteps: { label: string; description: string }[];
  implementation: string[];
  engineeringDecisions: string[];
  techStack: string[];
  impact: { metric: string; label: string };
  outcome: string;
  lessonsLearned: string[];
  gradient: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "oracle-powerbi-toolkit",
    title: "Oracle to Power BI Migration Toolkit",
    overview:
      "An automation engine that converts Oracle Reports XML into complete Power BI projects, replacing a year of manual migration work.",
    businessProblem:
      "A Singapore insurance client had 200+ Oracle Reports that needed migration to Power BI. Manual conversion would take an experienced analyst 2-3 days per report — over a year of work total. The reports contained complex PL/SQL logic, multi-parameter queries, and strict branding requirements.",
    technicalChallenge:
      "Oracle Reports XML has no standard schema. Each report uses different structures, PL/SQL functions, parameter types, and column layouts. The toolkit needed to parse arbitrary XML, translate PL/SQL to DAX (a fundamentally different query language), generate Power Query M for data sourcing, and produce pixel-accurate visual layouts matching 3 different brand templates.",
    architectureSteps: [
      { label: "Oracle Reports XML", description: "Raw .xml report definition files from the legacy system" },
      { label: "XML Parser", description: "Extracts report structure, queries, parameters, and layout metadata" },
      { label: "Metadata Extractor", description: "Normalizes column definitions, data types, and query logic" },
      { label: "Transformation Engine", description: "Core engine: PL/SQL-to-DAX translation, type mapping, function conversion" },
      { label: "DAX Generator", description: "Produces DAX measures, calculated columns, and filter expressions" },
      { label: "Power Query M Generator", description: "Creates M queries for Databricks data sourcing with parameterized connections" },
      { label: "TMDL & Layout Builder", description: "Generates semantic model (TMDL) and pixel-accurate visual layouts" },
      { label: "Template Branding Merge", description: "Applies one of 3 client brand templates to the final output" },
      { label: "Power BI Project (PBIP)", description: "Complete, deployable Power BI project output" },
    ],
    implementation: [
      "Built a recursive XML parser that handles arbitrary nesting depth and non-standard Oracle element structures",
      "Created an algorithmic PL/SQL-to-DAX translator covering NVL, DECODE, TO_CHAR, and nested CASE expressions",
      "Designed a template system where brand styles are defined as JSON configs, not hardcoded",
      "Implemented Databricks Views integration for the data layer, replacing Oracle database connections",
    ],
    engineeringDecisions: [
      "Chose generic XML traversal over schema-based parsing — Oracle Reports has no consistent schema across versions",
      "Built DAX translation as rule-based transforms instead of LLM — needed deterministic, auditable output for financial reports",
      "Used Flask for the web interface to keep the tool accessible to non-technical analysts",
    ],
    techStack: ["Python", "Flask", "SQL", "Power BI", "Oracle", "DAX", "Power Query M", "Databricks"],
    impact: { metric: "85-90%", label: "of migration automated" },
    outcome:
      "Each report took 2–3 days by hand. The same conversion now runs through the pipeline in minutes.",
    lessonsLearned: [
      "Generic solutions require significantly more upfront design but save exponentially more time at scale",
      "Financial report migration demands deterministic translation — LLMs are too unpredictable for DAX generation",
      "Template-based branding was the right abstraction; adding a 4th brand template took 30 minutes instead of days",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    slug: "gcc-platform",
    title: "GCC Platform — Multi-Tenant SaaS",
    overview:
      "A full-stack AI-powered platform that helps companies plan Global Capability Centers by analyzing documents and recommending workforce strategies.",
    businessProblem:
      "Singapore companies expanding to India needed months of consulting to plan their Global Capability Centers — analyzing labor markets, comparing cities, estimating costs, and building workforce plans. The process was manual, expensive, and inconsistent across engagements.",
    technicalChallenge:
      "Building a multi-tenant platform with row-level security that uses RAG and GPT-4o to analyze client-uploaded documents (PDFs, spreadsheets, reports) and produce structured workforce recommendations — while ensuring tenant data isolation, real-time interactive features, and cloud-native deployment.",
    architectureSteps: [
      { label: "Client Document Upload", description: "PDFs, spreadsheets, and reports uploaded through React frontend" },
      { label: "Document Ingestion", description: "Text extraction, chunking, and embedding generation" },
      { label: "RAG Pipeline", description: "Retrieval-Augmented Generation with vector search over client documents" },
      { label: "GPT-4o Analysis", description: "LangGraph orchestrated analysis with structured output" },
      { label: "Workforce Planner", description: "Role mapping, salary estimation, and team composition" },
      { label: "City Ranking Engine", description: "Real-time scoring with interactive parameter sliders" },
      { label: "Dashboard", description: "Multi-tenant dashboards with row-level security" },
    ],
    implementation: [
      "Designed hexagonal architecture separating domain logic from infrastructure concerns",
      "Built RAG pipeline using LangGraph for multi-step document analysis with structured outputs",
      "Implemented real-time city ranking with interactive sliders for weighting different factors",
      "Deployed on Azure AKS with Kubernetes, Helm charts, and GitHub Actions CI/CD",
    ],
    engineeringDecisions: [
      "Chose hexagonal architecture to keep AI/ML components swappable as models improve",
      "Used LangGraph over simple chain-based prompting for complex multi-step analysis workflows",
      "Row-level security at the database level (PostgreSQL RLS) rather than application-level filtering",
    ],
    techStack: ["FastAPI", "React", "TypeScript", "Azure", "GPT-4o", "LangGraph", "PostgreSQL", "Docker", "Kubernetes"],
    impact: { metric: "Months → Days", label: "planning time reduced" },
    outcome:
      "Planning a Global Capability Center took months of consulting. The platform brings that down to days.",
    lessonsLearned: [
      "Hexagonal architecture pays off when you need to swap AI providers — we switched embedding models twice",
      "Multi-tenant RAG requires careful chunk isolation; a shared vector store with tenant filters works better than per-tenant stores",
      "Interactive dashboards with real-time recalculation need careful state management to avoid cascade re-renders",
    ],
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    slug: "ssrs-syteline-converter",
    title: "SSRS to Infor SyteLine Converter",
    overview:
      "A 7-stage pipeline that converts SQL Server Reporting Services reports into Infor SyteLine ERP form definitions with zero hardcoded field names.",
    businessProblem:
      "A manufacturing client had 500+ SSRS reports that needed conversion to Infor SyteLine ERP forms as part of a platform migration. The largest report had 34,000+ lines of XML, 828 textboxes, and 3,000 table cells. Manual conversion was not feasible.",
    technicalChallenge:
      "SSRS .rdl files use deeply nested XML with complex layout semantics — absolute positioning, nested tablix structures, conditional visibility, and embedded expressions. The target format (SyteLine form XML) has a completely different structure and rendering model. The converter needed to handle any SSRS structure without assumptions about field names or report layout.",
    architectureSteps: [
      { label: "SSRS .rdl Files", description: "Raw XML report definition files from SQL Server Reporting Services" },
      { label: "XML Parser", description: "Parses deeply nested RDL structure with namespace handling" },
      { label: "Element Classifier", description: "Categorizes elements: textboxes, tablix, rectangles, images, subreports" },
      { label: "Layout Analyzer", description: "Resolves absolute positioning and nesting hierarchy" },
      { label: "Property Mapper", description: "Maps SSRS properties to SyteLine form properties" },
      { label: "Structure Builder", description: "Builds SyteLine form XML tree with proper nesting" },
      { label: "Validation & Output", description: "Validates against SyteLine schema and generates final XML" },
    ],
    implementation: [
      "Built a generic XML traversal engine that handles arbitrary nesting without hardcoded element paths",
      "Created an element classification system that identifies SSRS components by their structural properties, not names",
      "Designed the property mapper as a configurable rules engine — new property mappings added via config, not code",
      "Implemented batch processing mode for converting 500+ reports in a single run",
    ],
    engineeringDecisions: [
      "Zero hardcoded field names — the converter discovers element types from structural properties",
      "7-stage pipeline architecture where each stage has a clear input/output contract, making debugging trivial",
      "Config-driven property mapping instead of code — new SyteLine versions require config updates, not code changes",
    ],
    techStack: ["Python", "XML", "SQL", "Infor SyteLine", "SSRS"],
    impact: { metric: "100%", label: "conversion rate achieved" },
    outcome:
      "A 34,000-line SSRS report converts into a SyteLine form, with no hardcoded field names.",
    lessonsLearned: [
      "Pipeline architecture with clear stage boundaries makes debugging 34,000-line XML tractable",
      "Config-driven mapping is essential when the target format evolves across versions",
      "Batch processing revealed edge cases that single-report testing missed — always test at scale",
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
];

export interface OtherProject {
  title: string;
  description: string;
  techStack: string[];
  category: string;
}

export const otherProjects: OtherProject[] = [
  {
    title: "MLOps: Multi-Disease Prediction",
    description:
      "End-to-end ML system for predicting Diabetes, Heart Disease, and Parkinson's with Docker-containerized CI/CD deployment.",
    techStack: ["Python", "Streamlit", "Docker", "Kubernetes", "Scikit-learn", "GitHub Actions"],
    category: "Machine Learning",
  },
  {
    title: "Sentiment Analysis System",
    description:
      "NLP pipeline classifying social media sentiment using Naive Bayes, SVM, and Random Forest ensembles.",
    techStack: ["Python", "NLTK", "SpaCy", "Scikit-learn"],
    category: "Machine Learning",
  },
  {
    title: "Air Quality Dashboard",
    description:
      "Interactive Tableau dashboard visualizing pollution trends across Indian cities with geospatial maps.",
    techStack: ["Tableau", "Data Analysis"],
    category: "Visualization",
  },
  {
    title: "Insurance Claims Database",
    description:
      "Normalized schema with 6 interconnected tables, ER diagrams, and analytical SQL queries for policy management.",
    techStack: ["MySQL", "DBMS", "SQL"],
    category: "Database",
  },
];

export const skillPipeline = [
  {
    label: "Data Engineering",
    iconName: "Database" as const,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    items: ["Python", "SQL", "PostgreSQL", "MySQL", "MongoDB", "Databricks", "Spark", "ETL Pipelines", "DAX", "Power Query M"],
  },
  {
    label: "Machine Learning",
    iconName: "Brain" as const,
    color: "from-rose-500 to-pink-500",
    textColor: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800/50",
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "NLTK", "SpaCy", "LangGraph", "RAG", "Prompt Engineering"],
  },
  {
    label: "Data Visualization",
    iconName: "BarChart3" as const,
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800/50",
    items: ["Tableau", "Power BI", "Excel", "Streamlit", "Matplotlib"],
  },
  {
    label: "Full Stack",
    iconName: "Layers" as const,
    color: "from-indigo-500 to-violet-500",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800/50",
    items: ["FastAPI", "Flask", "React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Java"],
  },
  {
    label: "Cloud & DevOps",
    iconName: "Cloud" as const,
    color: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800/50",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Helm", "Redis"],
  },
  {
    label: "Core Engineering",
    iconName: "Workflow" as const,
    color: "from-purple-500 to-fuchsia-500",
    textColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    items: ["DSA", "OOPs", "Big Data", "System Design", "Pipeline Architecture", "XML Processing"],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    credentialId: "102572946OCI25DSOCP",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6EFAB8EA832FEB4F53AC82581255E5536E183B74225353F7B511F007CB135393",
    featured: true,
  },
  {
    title: "Databricks Certified Associate Data Engineer",
    issuer: "Databricks",
    date: "2026",
    link: "https://credentials.databricks.com/8dd7caa9-252e-44be-a41f-abf22afc76d0",
    featured: true,
  },
  {
    title: "Databricks Certified Associate ML Engineer",
    issuer: "Databricks",
    date: "2026",
    link: "https://credentials.databricks.com/a95f769e-7924-46df-af99-ff09f4ef5728",
    featured: true,
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov 2024",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S157020033704430354",
    featured: false,
  },
  {
    title: "Fractal Data Science Professional Certificate",
    issuer: "Fractal Analytics",
    date: "Feb 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/AW1FPHSMSISU",
    featured: false,
  },
  {
    title: "Geo Processing using Python",
    issuer: "IIRS (ISRO)",
    date: "Jul 2023",
    featured: false,
  },
];

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export const education: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech — Computer Science and Engineering",
    duration: "2022 — 2026",
  },
  {
    institution: "Himalayan International School",
    degree: "Intermediate (Senior Secondary)",
    duration: "2019 — 2021",
  },
  {
    institution: "DAV Public School",
    degree: "Matriculation",
    duration: "2018 — 2019",
  },
];

export const githubData = {
  username: "ambujchaubey",
  achievements: [
    "Solved 200+ problems across LeetCode, GFG, CodeChef, SPOJ, and HackerRank",
    "Active open-source contributor collaborating with developers worldwide",
    "12th rank in the AI Hackathon organized by Sakshm",
  ],
  pinnedRepos: [
    { name: "Multi-Disease-Prediction", description: "End-to-end ML system with Docker CI/CD", language: "Python" },
    { name: "Sentiment-Analysis", description: "NLP pipeline for social media classification", language: "Python" },
    { name: "Data-Visualization", description: "Interactive dashboards and geospatial analysis", language: "Tableau" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
