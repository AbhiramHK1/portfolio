/**
 * All of the site's text lives in this file.
 * To update the website, edit the values here. No component changes are needed.
 */

export type ArtKey = 'fleet' | 'aml' | 'erp' | 'restaurant' | 'expense' | 'chat';

export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  /** Short label used on the hero map. */
  stopLabel: string;
  stopYear: string;
  project: string;
  current?: boolean;
  /** Tech stack exactly as shown on the page. */
  stack: string[];
  /** Skill names (matching `skillGroups`) that power "Where I've used it". */
  uses: string[];
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  art: ArtKey;
  artAlt: string;
  domain: string;
  title: string;
  context: string;
  description: string;
  stack: string[];
  outcome: string;
}

export interface ImpactMetric {
  metric: string;
  project: string;
  before: number;
  after: number;
  beforeLabel: string;
  afterLabel: string;
  saving: string;
}

export const profile = {
  name: 'Abhiram HK',
  role: 'Full Stack .NET Developer',
  location: 'Trivandrum, Kerala, India',
  fullLocation: 'Kovalam, Trivandrum, Kerala',
  email: 'abhiramhk50@gmail.com',
  phone: '+91 7356923377',
  linkedin: 'https://www.linkedin.com/in/abhiramhk',
  linkedinLabel: 'linkedin.com/in/abhiramhk',
  github: 'https://github.com/AbhiramHK1',
  githubLabel: 'github.com/AbhiramHK1',
  resumeFile: 'resume/Abhiram-HK-Resume.pdf',
  statement: 'I build fast, secure platforms for fleets, finance and enterprise operations.',
  intro:
    'Four-plus years shipping production software with ASP.NET Core, C#, React, Angular, SQL Server and Azure, from real-time vehicle telemetry to anti-money-laundering screening.',
  bio: [
    'I am a results-oriented full stack .NET developer who builds scalable web applications end to end: secure REST APIs, responsive frontends, and the databases underneath them.',
    'Most of my work has been in systems where data volume and correctness both matter. That has meant fleet telematics at ThoughtLine, compliance monitoring for financial institutions at Distinct Infotech, and GST-compliant ERP at EBS Technologies. Before that, I delivered custom web applications for clients as a freelancer, owning each one from requirements to deployment.',
    'I care most about performance optimization, authentication and database tuning, and I use AI-assisted tools such as GitHub Copilot and Claude to move faster on code generation and debugging.',
  ],
};

export const stats = [
  { value: '4+', label: 'Years building production software' },
  { value: '168', label: 'Projects' },
  { value: '60%', label: 'Faster API responses on the fleet platform' },
  { value: '2', label: 'Best Performer awards' },
];

/** Sorted by the size of the improvement. */
export const impact: ImpactMetric[] = [
  {
    metric: 'Database query execution',
    project: 'Fleet & Telematics Platform',
    before: 5,
    after: 1.5,
    beforeLabel: '5.0 s',
    afterLabel: '1.5 s',
    saving: '70%',
  },
  {
    metric: 'API response time',
    project: 'Fleet & Telematics Platform',
    before: 100,
    after: 40,
    beforeLabel: 'Baseline',
    afterLabel: '60% faster',
    saving: '60%',
  },
  {
    metric: 'Report generation',
    project: 'ERP System',
    before: 60,
    after: 30,
    beforeLabel: '60 s',
    afterLabel: '30 s',
    saving: '50%',
  },
  {
    metric: 'AML screening processing',
    project: 'AML & Compliance Platform',
    before: 100,
    after: 60,
    beforeLabel: 'Baseline',
    afterLabel: '40% less time',
    saving: '40%',
  },
];

/** Most recent first. */
export const roles: Role[] = [
  {
    id: 'thoughtline',
    title: 'Software Engineer',
    company: 'ThoughtLine Technologies Pvt. Ltd',
    period: 'Apr 2025 – Present',
    stopLabel: 'ThoughtLine',
    stopYear: '2025',
    project: 'Fleet Management & Telematics Platform',
    current: true,
    stack: ['ASP.NET Core 8', 'React.js', 'Angular', 'SQL Server', 'Azure'],
    uses: [
      'ASP.NET Core',
      'C#',
      'Web API',
      'REST APIs',
      'React.js',
      'Angular',
      'SQL Server',
      'Azure',
      'JWT Authentication',
      'Git',
      'Azure DevOps',
      'Agile/Scrum',
      'Performance Optimization',
    ],
    responsibilities: [
      'Developed RESTful APIs for real-time fleet tracking, trip management, and telemetry data processing.',
      'Built responsive dashboard modules using React.js and Angular for vehicle monitoring and operational reporting.',
      'Optimized SQL Server queries and backend services to efficiently process large telematics datasets.',
      'Implemented JWT-based authentication and role-based authorization.',
      'Collaborated with cross-functional Agile teams using Git and Azure DevOps.',
    ],
    achievements: [
      'Improved API response times by 60% through query optimization and backend performance tuning.',
      'Reduced database query execution time from 5 seconds to 1.5 seconds.',
      'Enhanced system scalability for high-volume vehicle telemetry data processing.',
    ],
  },
  {
    id: 'distinct',
    title: 'Software Engineer',
    company: 'Distinct Infotech Solutions',
    period: 'Dec 2023 – Apr 2025',
    stopLabel: 'Distinct Infotech',
    stopYear: '2023',
    project: 'Anti-Money Laundering (AML) & Compliance Monitoring Platform',
    stack: ['ASP.NET MVC', 'ASP.NET Core Web API', 'Oracle', 'MongoDB', 'Elasticsearch'],
    uses: [
      'ASP.NET MVC',
      'ASP.NET Core',
      'C#',
      'Web API',
      'REST APIs',
      'Oracle',
      'MongoDB',
      'Elasticsearch',
      'Performance Optimization',
    ],
    responsibilities: [
      'Contributed to an AML and compliance monitoring platform used by financial institutions for regulatory compliance and risk management.',
      'Developed customer and transaction screening modules to detect potential money laundering activities and compliance violations.',
      'Implemented blacklist and watchlist screening against sanction lists and regulatory databases.',
      'Built suspicious transaction monitoring workflows and automated case generation for compliance investigations.',
      'Optimized backend services and database operations using Oracle and MongoDB to handle high-volume transaction data.',
      'Integrated Elasticsearch to enable fast, scalable search and filtering across customer, transaction, and case management records.',
      'Collaborated with business analysts and compliance teams to implement regulatory requirements.',
    ],
    achievements: [
      'Reduced AML screening processing time by 40% through query and workflow optimization.',
      'Enhanced maintainability and scalability through modular architecture and reusable components.',
      'Increased search efficiency and user productivity with Elasticsearch-based indexing and filtering.',
    ],
  },
  {
    id: 'ebs',
    title: 'Software Engineer',
    company: 'EBS Technologies Pvt. Ltd',
    period: 'Nov 2022 – Dec 2023',
    stopLabel: 'EBS Technologies',
    stopYear: '2022',
    project: 'ERP System with GST E-Invoicing & E-Way Bill Integration',
    stack: ['ASP.NET MVC 5', 'VB.NET', 'SQL Server', 'Web API', 'WinForms'],
    uses: [
      'ASP.NET MVC',
      'ASP.NET Core',
      'VB.NET',
      'SQL Server',
      'Web API',
      'REST APIs',
      'WinForms',
      'Performance Optimization',
      'Deployment Management',
    ],
    responsibilities: [
      'Contributed to the development and enhancement of an ERP platform for finance, inventory, sales, and business operations.',
      'Integrated GST-compliant E-Invoice and E-Way Bill functionality to support automated tax and logistics processes.',
      'Built and maintained ASP.NET Web APIs for data exchange between ERP modules and external applications.',
      'Integrated ASP.NET Core applications with Android-based mobile solutions for real-time business data access.',
      'Optimized SQL Server queries and stored procedures to improve performance and reliability.',
      'Supported application deployment, troubleshooting, and production issue resolution.',
    ],
    achievements: [
      'Automated E-Invoice and E-Way Bill generation, reducing manual effort and improving regulatory compliance.',
      'Reduced report generation time from 60 seconds to 30 seconds.',
      'Enhanced system performance and stability through database optimization and backend improvements.',
      'Streamlined integration between web and mobile applications, enabling better accessibility for end users.',
    ],
  },
  {
    id: 'freelance',
    title: 'Freelance Full Stack Developer',
    company: 'Part-time, self-employed',
    period: 'Apr 2021 – Nov 2022',
    stopLabel: 'Freelance',
    stopYear: '2021',
    project: 'Restaurant Management, Expense Analytics, Real-Time Chat & Custom Business Solutions',
    stack: ['ASP.NET Core', 'React.js', 'Angular', 'SignalR', 'Firebase'],
    uses: [
      'ASP.NET Core',
      'C#',
      'Web API',
      'REST APIs',
      'React.js',
      'Angular',
      'SignalR',
      'Firebase',
      'JWT Authentication',
      'IIS',
      'GitHub',
      'Deployment Management',
    ],
    responsibilities: [
      'Designed and developed 10+ custom web applications for clients across various business domains.',
      'Built secure RESTful APIs using ASP.NET Core and responsive user interfaces with React.js and Angular.',
      'Implemented real-time messaging and notification features using SignalR and JWT-based authentication.',
      'Integrated Firebase services for authentication, notifications, and cloud data management.',
      'Managed end-to-end delivery, including requirements gathering, development, deployment, and client support.',
      'Deployed and maintained applications using IIS, GitHub, and cloud-hosted environments.',
    ],
    achievements: [
      'Delivered 10+ client projects with end-to-end ownership from design to deployment.',
      'Improved application security and scalability through secure authentication and optimized backend architecture.',
      'Reduced development time by implementing reusable components and modular design practices.',
      'Built long-term client relationships through timely delivery and ongoing technical support.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'fleet',
    art: 'fleet',
    artAlt: 'Illustration of a city map with a highlighted vehicle route and a telemetry panel',
    domain: 'Fleet & telematics',
    title: 'Fleet Management & Telematics Platform',
    context: 'ThoughtLine Technologies · 2025 – Present',
    description:
      'Real-time fleet tracking, trip management and telemetry processing, with dashboards for vehicle monitoring and operational reporting.',
    stack: ['ASP.NET Core 8', 'React.js', 'Angular', 'SQL Server', 'Azure'],
    outcome: 'API responses 60% faster; key query down from 5 s to 1.5 s',
  },
  {
    id: 'aml',
    art: 'aml',
    artAlt: 'Illustration of a transaction network with one flagged account and a matching watchlist entry',
    domain: 'Financial compliance',
    title: 'AML & Compliance Monitoring Platform',
    context: 'Distinct Infotech Solutions · 2023 – 2025',
    description:
      'Customer and transaction screening against sanction lists, suspicious activity workflows, and automated case generation for financial institutions.',
    stack: ['ASP.NET Core Web API', 'Oracle', 'MongoDB', 'Elasticsearch'],
    outcome: 'AML screening time reduced by 40%',
  },
  {
    id: 'erp',
    art: 'erp',
    artAlt: 'Illustration of a tax invoice with a QR code connected to a delivery truck',
    domain: 'Enterprise ERP',
    title: 'ERP with GST E‑Invoicing & E‑Way Bill',
    context: 'EBS Technologies · 2022 – 2023',
    description:
      'Finance, inventory, sales and operations modules with automated GST-compliant e-invoices and e-way bills, plus a real-time link to Android apps.',
    stack: ['ASP.NET MVC 5', 'VB.NET', 'SQL Server', 'WinForms'],
    outcome: 'Report generation cut from 60 s to 30 s',
  },
  {
    id: 'restaurant',
    art: 'restaurant',
    artAlt: 'Illustration of a restaurant floor plan with table statuses and a rail of order tickets',
    domain: 'Hospitality',
    title: 'Restaurant Management System',
    context: 'Freelance client work',
    description:
      'Order management, billing, inventory tracking and reporting brought together in one system for day-to-day restaurant operations.',
    stack: ['ASP.NET Core', 'React.js', 'Angular'],
    outcome: 'Delivered end to end, from requirements to deployment',
  },
  {
    id: 'expense',
    art: 'expense',
    artAlt: 'Illustration of a spending dashboard with a donut chart and monthly columns',
    domain: 'Finance analytics',
    title: 'Expense Analytics Platform',
    context: 'Freelance client work',
    description:
      'Tracks expenses, generates insights, and turns financial data into clear visual reports.',
    stack: ['ASP.NET Core', 'React.js', 'Angular'],
    outcome: 'Secure authentication on an optimized backend',
  },
  {
    id: 'chat',
    art: 'chat',
    artAlt: 'Illustration of chat messages passing through a central real-time hub to connected users',
    domain: 'Real-time messaging',
    title: 'Real-Time Chat Applications',
    context: 'Freelance client work',
    description:
      'Live messaging and notifications over SignalR, secured with JWT, with Firebase for authentication, notifications and cloud data.',
    stack: ['ASP.NET Core', 'SignalR', 'Firebase', 'JWT'],
    outcome: 'Built with reusable, modular components',
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Backend',
    items: ['ASP.NET Core', 'ASP.NET MVC', '.NET Framework', 'C#', 'Web API', 'REST APIs', 'WPF', 'WinForms', 'VB.NET'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Kendo UI', 'UI/UX Design'],
  },
  {
    title: 'Data',
    items: ['SQL Server', 'Oracle', 'MongoDB', 'MySQL', 'Elasticsearch', 'LINQ', 'Entity Framework Core', 'SSMS'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'CI/CD Pipelines', 'Deployment Management', 'Azure DevOps', 'IIS', 'Firebase'],
  },
  {
    title: 'Practices',
    items: ['OOP', 'SOLID Principles', 'Design Patterns', 'Dependency Injection', 'CQRS', 'Agile/Scrum', 'Code Reviews', 'Technical Documentation'],
  },
  {
    title: 'Security & real-time',
    items: ['JWT Authentication', 'SignalR', 'Performance Optimization'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Visual Studio', 'VS Code', 'Antigravity', 'GitHub Copilot', 'Claude'],
  },
];

export const principles = [
  {
    title: 'Measure, then tune',
    text: 'SQL queries, stored procedures and backend services, tuned until the numbers actually improve.',
  },
  {
    title: 'Secure by design',
    text: 'JWT authentication and role-based authorization across the APIs I build.',
  },
  {
    title: 'Built to be maintained',
    text: 'OOP, SOLID, dependency injection, CQRS and modular components that the next developer can follow.',
  },
  {
    title: 'Delivered with the team',
    text: 'Agile delivery, CI/CD, code reviews and clear technical documentation, working closely with analysts and stakeholders.',
  },
];

export const awards = [
  {
    year: '2026',
    title: 'Best Performer Award',
    org: 'ThoughtLine Technologies Pvt. Ltd.',
    text: 'Recognized for outstanding performance, timely project delivery, and contributions to the Fleet Management & Telematics Platform.',
  },
  {
    year: '2023',
    title: 'Best Performer Award',
    org: 'EBS Technologies Pvt. Ltd.',
    text: 'Awarded for exceptional contribution to ERP development, GST E-Invoice & E-Way Bill integration, and consistent delivery of high-quality solutions.',
  },
];

export const education = {
  degree: 'Bachelor of Science (B.Sc.) in Computer Science',
  school: 'University Institute of Technology (UIT), Thiruvananthapuram',
  year: 'Graduated 2022',
};

export const softSkills = ['Problem Solving', 'Team Collaboration', 'Analytical Thinking', 'Communication', 'Quick Learning'];

export const quotes = [
  { text: 'Technology is best when it brings people together.', author: 'Matt Mullenweg' },
  { text: "It's not a faith in technology. It's faith in people.", author: 'Steve Jobs' },
  { text: 'Technology is a useful servant but a dangerous master.', author: 'Christian Lous Lange' },
];

export const navLinks = [
  { id: 'impact', label: 'Impact' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
