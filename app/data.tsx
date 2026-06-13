// DANACH Solutions — site content data
// Ported verbatim from the original static HTML.

export type NavItem = { href: string; label: string };

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "dan@danachsolutions.com",
  phone: "+1 (812) 612-8172",
  phoneHref: "tel:+18126128172",
  addressLine1: "8520 Allison Pointe Blvd., Suite 220",
  addressLine2: "Indianapolis, IN 46250",
  calendly: "https://calendly.com/dan-danachsolutions",
  calendlyEmbed:
    "https://calendly.com/dan-danachsolutions?embed_domain=danachsolutions.com&embed_type=Inline&hide_event_type_details=0&hide_gdpr_banner=1",
  linkedin: "https://linkedin.com/in/dan-achimov",
};

// ---- Home: service cards (icon path + title + description) ----
export type HomeService = { d: string; title: string; desc: string };

const LIGHTBULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";

export const HOME_SERVICES: HomeService[] = [
  {
    d: LIGHTBULB,
    title: "Innovation Strategy & Roadmapping",
    desc: "Structured plans to identify, prioritize, and execute new product opportunities.",
  },
  {
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Innovation Project Management",
    desc: "End-to-end leadership from concept through commercialization.",
  },
  {
    d: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "AI & Digital Transformation",
    desc: "AI and automation to enhance PM efficiency and productivity.",
  },
  {
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Project & Program Management (PMO)",
    desc: "Governance, tools, and execution discipline for complex initiatives.",
  },
  {
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Process Improvement & Operational Excellence",
    desc: "Redesigning workflows to increase speed, reduce waste, and improve margins.",
  },
  {
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Technology Scouting & R&D Partnerships",
    desc: "Identifying external technologies and partners to accelerate innovation.",
  },
  {
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Organizational Change Management",
    desc: "Guiding people, culture, and structure through transformation.",
  },
  {
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Project Evaluations and Audits",
    desc: "Reviews and audits to evaluate performance and identify improvements.",
  },
  {
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Innovation Workshops and Training",
    desc: "Workshops and training to foster a culture of innovation.",
  },
  {
    d: LIGHTBULB,
    title: "Idea Generation and Evaluation",
    desc: "Facilitating brainstorming sessions to generate and prioritize creative ideas.",
  },
];

// ---- Services page: detailed services grouped into sections ----
export type ServiceDetailItem = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
};
export type ServiceSection = {
  label: string;
  blurb: string;
  services: ServiceDetailItem[];
};

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    label: "Strategic Leadership",
    blurb: "Where I set direction. The big strategic engagements I am hired for first.",
    services: [
      {
        num: "01",
        title: "Innovation Strategy & Roadmapping",
        desc: "Developing structured plans to identify, prioritize, and execute new product opportunities. Help build innovation pipelines, assess portfolio gaps, and align R&D investment with market trends—spanning everything from line extensions to breakthrough products.",
        bullets: [
          "Portfolio gap analysis",
          "Stage-gate process design",
          "Investment prioritization",
          "Market trend assessment",
        ],
      },
      {
        num: "02",
        title: "Innovation Project Management",
        desc: "End-to-end leadership from concept through commercialization for NPD and EPD. Working with cross-functional project teams including Early Innovation/Science and Technology, RD, PD, Regulatory Science, Nutritional Science, Medical/Clinical, Engineering, Supply Chain and Marketing.",
        bullets: [
          "NPD/EPD program leadership",
          "Cross-functional team coordination",
          "Stage-gate execution",
          "Launch readiness reviews",
        ],
      },
      {
        num: "03",
        title: "AI & Digital Transformation Consulting",
        desc: "Implementing artificial intelligence and automation in support of Project Management to create efficiency, enhance capability and improve productivity.",
        bullets: [
          "AI strategy & readiness assessment",
          "Automation tool selection",
          "Workflow AI integration",
          "Productivity analytics",
        ],
      },
      {
        num: "04",
        title: "Project & Program Management (PMO)",
        desc: "Establishing governance, tools, and execution discipline for complex initiatives. Bringing Waterfall, Agile, or hybrid methodologies to lead cross-functional teams, manage vendor and third-party relationships, and ensure on-time, on-budget delivery of innovation programs.",
        bullets: [
          "PMO setup & governance",
          "Waterfall / Agile / hybrid delivery",
          "Vendor & partner management",
          "Risk & issue management",
        ],
      },
    ],
  },
  {
    label: "Operational Excellence",
    blurb: "Where I fix what is broken. Often sold together when an organization is mid-transition.",
    services: [
      {
        num: "05",
        title: "Process Improvement & Operational Excellence",
        desc: "Redesigning workflows to increase speed, reduce waste, and improve margins. Typical engagements include business process reengineering, SKU rationalization, manufacturing efficiency, and standardizing operating procedures across global organizations.",
        bullets: [
          "Business process reengineering",
          "Lean / Six Sigma initiatives",
          "SKU rationalization",
          "SOP standardization",
        ],
      },
      {
        num: "06",
        title: "Technology Scouting & R&D Partnerships",
        desc: "Identifying external technologies, ingredients, and co-manufacturers to accelerate innovation. Scan startups, global suppliers for novel packaging, sustainable materials, and production methods—then broker partnerships and manage pilot programs.",
        bullets: [
          "Startup & university scanning",
          "Packaging & materials innovation",
          "Co-manufacturer sourcing",
          "Partnership & pilot management",
        ],
      },
      {
        num: "07",
        title: "Organizational Change Management",
        desc: "Guiding people, culture, and structure through transformation; including company mergers, restructuring, or adoption of new systems. Manage stakeholder communications, training programs, and adoption strategies to minimize disruption and sustain results.",
        bullets: [
          "Stakeholder communication",
          "Training & enablement",
          "Adoption strategy",
          "Sustainment programs",
        ],
      },
    ],
  },
  {
    label: "Targeted Engagements",
    blurb: "Focused and often shorter-duration engagements. Easy entry points for new clients.",
    services: [
      {
        num: "08",
        title: "Project Evaluations and Audits",
        desc: "Conduct project reviews and audits to evaluate project performance, identify areas for improvement, and provide recommendations for future projects. Offer insights on lessons learned and best practices to enhance project delivery.",
        bullets: [
          "Performance evaluation",
          "Lessons learned analysis",
          "Best practices identification",
          "Delivery enhancement",
        ],
      },
      {
        num: "09",
        title: "Innovation Workshops and Training",
        desc: "Conduct workshops and training sessions to foster a culture of innovation within organizations. Teach creative problem-solving techniques, design thinking, and other innovation methodologies to empower teams to generate and implement new ideas.",
        bullets: [
          "Creative problem-solving",
          "Design thinking training",
          "Innovation methodology",
          "Team empowerment",
        ],
      },
      {
        num: "10",
        title: "Idea Generation and Evaluation",
        desc: "Facilitate brainstorming sessions and workshops to generate creative ideas, evaluate their feasibility, and prioritize them based on strategic fit, market potential, and resource requirements.",
        bullets: [
          "Brainstorming facilitation",
          "Feasibility evaluation",
          "Strategic prioritization",
          "Resource planning",
        ],
      },
    ],
  },
];

// ---- Home: Recent Work carousel ----
export type RecentProject = { num: string; title: string; desc: string; d: string };

export const RECENT_WORK: RecentProject[] = [
  {
    num: "01",
    title: "Technology Transfer",
    desc: "Led a complex three-way global partnership, outsourcing the production of a critical component ingredient to a U.S. supplier and coordinating its transfer to a European manufacturer for finished product manufacturing and distribution across European and ASEAN markets.",
    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    num: "02",
    title: "Breakthrough Innovation",
    desc: "Leveraged cutting-edge ingredients and a sustainable manufacturing process to develop a cost-effective product that outperforms competitive offerings and is currently being evaluated in clinical studies.",
    d: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    num: "03",
    title: "EPD Innovation",
    desc: "Leading the integration of a key probiotic ingredient into a product for the ASEAN market, strengthening competitiveness in a high-growth category and establishing a foundation for future global expansion.",
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    num: "04",
    title: "Project & Portfolio Management System (PPM)",
    desc: "Supported the implementation of an enterprise Project and Portfolio Management system (PPM), integrating stage-gate governance, cost and expense tracking, resource planning, risk and issue management, milestone tracking, and portfolio reporting.",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

// ---- Case Studies page ----
export type CaseStudyCategory =
  | "pmo"
  | "portfolio"
  | "governance"
  | "innovation"
  | "digital";

export type CaseBlock = {
  intro?: string;
  bullets?: string[];
  note?: string;
  marker?: "check" | "dot";
};

export type CaseStudy = {
  num: string;
  cat: CaseStudyCategory;
  catLabel: string;
  title: string;
  summary: string;
  d: string; // icon path
  outcomes: string[];
  challenge: CaseBlock;
  approach: CaseBlock;
  results: CaseBlock;
};

export const CASE_STUDY_FILTERS: { key: "all" | CaseStudyCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pmo", label: "Project & Program Management" },
  { key: "portfolio", label: "Portfolio Management" },
  { key: "governance", label: "Innovation Governance" },
  { key: "innovation", label: "Innovation Strategy" },
  { key: "digital", label: "AI & Digital Transformation" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    num: "01",
    cat: "pmo",
    catLabel: "Project & Program Management",
    title: "Out-of-the-Box Thinking EPD & Challenging the Status Quo",
    summary:
      "Led a Global Existing Product Development (EPD) project to develop and bring to market a portfolio of premature infant formula nursette formulations designed to meet expert recommendations for use in neonatal intensive care units (NICUs). Prematurity is the leading cause of death among children under five, with survivors often facing lifelong health and developmental challenges.",
    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    outcomes: [
      "2 years faster to market",
      "2 formulations, 95% of markets",
      "Lower COGS & fewer SKUs",
    ],
    challenge: {
      bullets: [
        "Accelerate global implementation across North America, Latin America, Europe, and ASEAN to address an urgent market and patient need.",
        "Maximize formulation harmonization across regions to reduce complexity, improve efficiencies, and minimize development and supply chain costs.",
        "Challenge the traditional development model, which relied on creating a formulation for a lead market and subsequently adapting it for each additional region.",
        "Overcome a slow and resource-intensive process that increased development timelines, drove higher costs, and resulted in unnecessary SKU proliferation.",
        "Balance global standardization with regional requirements, ensuring compliance with local regulatory and market requirements without sacrificing speed-to-market.",
      ],
    },
    approach: {
      bullets: [
        "Challenged conventional development practices and implemented a globally integrated approach to accelerate delivery and reduce complexity.",
        "Rapidly assembled a cross-functional, global team representing all in-scope regions and convened an intensive week-long workshop to align requirements and drive decision-making.",
        "Assessed and validated regulatory, nutritional, and ingredient requirements across all regions, creating harmonized formulations from the outset rather than adapting them market by market.",
        "Delivered globally viable prototype formulations in record time, reducing development cycles, minimizing SKU proliferation, and improving speed-to-market.",
      ],
    },
    results: {
      bullets: [
        "Reduced global implementation timelines by two years, accelerating access to critical nutrition products for vulnerable premature infants.",
        "Achieved significant formulation harmonization, requiring only two formulations to serve 95% of targeted global markets for the flagship premature infant offering.",
        "Delivered cost savings by consolidating demand into a smaller number of SKUs, reducing manufacturing complexity and lowering COGS.",
        "Recognized as a breakthrough innovation, receiving formal team recognition and being featured as a “game-changing” initiative in communications with investors.",
      ],
    },
  },
  {
    num: "02",
    cat: "governance",
    catLabel: "Innovation Governance",
    title: "Rapid Technology Assessments (RTA): Faster Decision Making",
    summary:
      "Innovation opportunities may originate from many sources — early-stage science, strategic partners, suppliers, or internal ideation. To avoid investing heavily in concepts with limited potential, we implemented a rapid evaluation process to quickly assess technical feasibility, business value, and strategic fit.",
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    outcomes: [
      "Decisions in weeks, not months",
      "Clear Go / No-Go answer",
      "Proven across 5+ technologies",
    ],
    challenge: {
      bullets: [
        "Uncertain value & strategic fit — will the technology solve a meaningful consumer or business problem, address an unmet need, and warrant investment over competing opportunities?",
        "Pressure to move quickly — the business needs actionable insights rapidly, without the cost and delay of lengthy research and development programs.",
        "Technical and operational feasibility — can the technology be manufactured at scale and integrated into existing operations, processes, and supply chains?",
        "Regulatory, safety, and quality risks — can the ingredient or technology meet regulatory requirements while maintaining safety, quality, and compliance standards?",
        "Resource allocation and investment decisions — with finite funding and resources, which opportunities offer the greatest potential for commercial success and long-term value?",
      ],
    },
    approach: {
      bullets: [
        "Assembled a focused cross-functional team spanning Early Science Development, Regulatory, Nutrition Science, Product Development, Supply Chain, Commercial/Marketing, and Project Management.",
        "Executed a structured 3–4 week sprint designed to answer three critical questions: Can we sell it? Can we register it? Can we make it?",
        "Conducted a rapid end-to-end assessment of market opportunity, consumer need, ingredient technology, scientific evidence, commercial potential, technical feasibility, regulatory requirements, quality considerations, and business value.",
        "Identified key risks, mitigation strategies, and implementation considerations to support informed decision-making.",
        "Delivered clear recommendations to senior R&D leadership, enabling rapid prioritization and investment decisions.",
      ],
    },
    results: {
      intro:
        "A dedicated cross-functional team works intensively and in parallel — combining rapid fact-finding with expert engagement to deliver a decision-ready recommendation in weeks rather than months. Each assessment gives leadership a clear answer:",
      marker: "dot",
      bullets: [
        "Go — move forward with development.",
        "Go with Conditions — address key gaps before investing further.",
        "Watch — monitor until the ingredient technology matures.",
        "No-Go — the opportunity does not currently justify investment.",
      ],
      note: "Successful RTAs include HMOs, probiotic strains, butyrate, EGCG, and soluble mediators from LGG (SOLEX).",
    },
  },
  // CS3 — Portfolio Management.
  {
    num: "03",
    cat: "portfolio",
    catLabel: "Portfolio Management",
    title: "Bringing Focus to the Global Innovation Portfolio",
    summary:
      "A rapidly expanding innovation pipeline had outpaced available resources, creating competing priorities and diluted focus. Portfolio governance and prioritization were needed to align investments with strategy, optimize resource allocation, and concentrate efforts on the opportunities with the greatest potential for success.",
    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    outcomes: [
      "Focused, prioritized pipeline",
      "Capacity freed for top work",
      "Leadership-ready visibility",
    ],
    challenge: {
      bullets: [
        "Resource overload — too many projects competing for the same limited people, funding, and operational capacity.",
        "Lack of prioritization discipline — no consistent, objective framework for evaluating and ranking opportunities across regions, categories, and business units.",
        "Inefficient resource allocation — low-value, stalled, or lower-priority projects continued to consume resources needed for higher-impact initiatives.",
        "Limited portfolio visibility — leadership lacked a clear, end-to-end view of portfolio performance, including project health, costs, risks, and progress.",
        "Strategic misalignment — the active project portfolio had drifted from the company's strategic priorities, reducing focus on the opportunities most likely to drive growth and value.",
      ],
    },
    approach: {
      bullets: [
        "Implemented a transparent portfolio prioritization framework using common criteria — strategic alignment, business value, feasibility, and risk — to consistently evaluate and rank all projects.",
        "Established a structured portfolio governance process integrated with stage-gate reviews, enabling leadership to make informed decisions to accelerate, hold, redirect, or stop projects.",
        "Aligned resource capacity with portfolio demand, identifying bottlenecks and reallocating talent and funding to the highest-priority initiatives.",
        "Created executive portfolio dashboards providing real-time visibility into pipeline health, investment levels, milestones, risks, and the balance between short-term and long-term growth opportunities.",
        "Optimized portfolio investment and focus by pausing or terminating lower-value initiatives and concentrating resources on projects with the greatest strategic and commercial potential.",
      ],
    },
    results: {
      bullets: [
        "Created a focused, strategically aligned innovation portfolio, concentrating resources and investment on the opportunities with the greatest potential for growth and value creation.",
        "Unlocked critical capacity by pausing or retiring lower-priority initiatives, enabling faster execution of the most important projects.",
        "Improved the speed and quality of investment decisions through a consistent evaluation framework and disciplined portfolio review process.",
        "Delivered comprehensive portfolio visibility for senior leadership, providing a single view of costs, progress, risks, resource utilization, and strategic alignment.",
        "Established a sustainable portfolio governance model, embedding the processes, tools, and decision-making discipline needed to drive long-term portfolio performance.",
      ],
    },
  },
];

// ---- About page ----
export const CREDENTIALS: string[] = [
  "Project Management Professional (PMP)",
  "Disciplined Agile Scrum Master (DASM)",
  "35+ years in Consumer Packaged Goods",
  "Global infant formula expertise",
];

export type Experience = {
  org: string;
  period: string;
  role: string;
  desc: string;
};

export const EXPERIENCE: Experience[] = [
  {
    org: "Mead Johnson Nutrition",
    period: "Career-spanning",
    role: "R&D / Project Management Leadership",
    desc: "Led cross-functional innovation and project management programs across infant formula, children's nutrition, and global product development. Managed NPD/EPD lifecycles from early innovation through commercialization, working with R&D, Regulatory Science, Nutritional Science, Engineering, Supply Chain, and Marketing.",
  },
  {
    org: "DANACH Solutions, LLC",
    period: "Present",
    role: "Founder & Principal Consultant",
    desc: "Helping CPG companies bring structure to complexity, speed to innovation, and rigor to execution. Serving clients in infant nutrition, food, beverage, and wellness with tailored innovation strategy, project management, and AI transformation services.",
  },
];
