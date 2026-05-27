// ═══════════════════════════════════════════════════════════════════
// PERSISTENCE — edit store + checkbox state
// ═══════════════════════════════════════════════════════════════════

const editStore = {
  _p: "legion-edit-",
  get(key) {
    try {
      return localStorage.getItem(this._p + key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(this._p + key, value);
    } catch {}
  },
  clear() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(this._p))
        .forEach((k) => localStorage.removeItem(k));
    } catch {}
  }
};

function editableValue(key, fallback) {
  const saved = editStore.get(key);
  return saved !== null && saved !== "" ? saved : fallback ?? "";
}

function getCheckState(key) {
  return editStore.get("chk-" + key) === "true";
}

function setCheckState(key, checked) {
  editStore.set("chk-" + key, String(checked));
}

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

// ALPS brand palette — blue, navy, slate, moss, ochre, brick
const accents = ["#2299CE", "#103758", "#445253", "#5F7A4C", "#B07A2B", "#9A3B2E"];

const companyDomains = [
  ["Palantir", "palantir.com"],
  ["C3 AI", "c3.ai"],
  ["Microsoft", "microsoft.com"],
  ["AWS", "aws.amazon.com"],
  ["Google", "google.com"],
  ["IBM", "ibm.com"],
  ["Salesforce", "salesforce.com"],
  ["ServiceNow", "servicenow.com"],
  ["UiPath", "uipath.com"],
  ["Automation Anywhere", "automationanywhere.com"],
  ["Workato", "workato.com"],
  ["Appian", "appian.com"],
  ["Pega", "pega.com"],
  ["Glean", "glean.com"],
  ["Sinequa", "sinequa.com"],
  ["Coveo", "coveo.com"],
  ["Elastic", "elastic.co"],
  ["GoSearch", "gosearch.ai"],
  ["SailPoint", "sailpoint.com"],
  ["Saviynt", "saviynt.com"],
  ["Okta", "okta.com"],
  ["CyberArk", "cyberark.com"],
  ["Entra", "microsoft.com"],
  ["Celonis", "celonis.com"],
  ["EY", "ey.com"],
  ["BDO", "bdo.com"],
  ["Deloitte", "deloitte.com"],
  ["Accenture", "accenture.com"],
  ["Infosys", "infosys.com"],
  ["Wipro", "wipro.com"],
  ["DXC", "dxc.com"],
  ["Trinity Health", "trinity-health.org"],
  ["Texas Health Resources", "texashealth.org"],
  ["Beth Israel Lahey Health", "bilh.org"],
  ["NewYork-Presbyterian", "nyp.org"],
  ["HCA Healthcare", "hcahealthcare.com"],
  ["Pfizer", "pfizer.com"],
  ["Bristol Myers Squibb", "bms.com"],
  ["Novartis", "novartis.com"],
  ["Roche", "roche.com"],
  ["Boehringer Ingelheim", "boehringer-ingelheim.com"],
  ["Johnson & Johnson", "jnj.com"],
  ["LPL Financial", "lpl.com"],
  ["Franklin Templeton", "franklintempleton.com"],
  ["Travelers", "travelers.com"],
  ["The Hanover Insurance Group", "hanover.com"],
  ["Wells Fargo", "wellsfargo.com"],
  ["Perella Weinberg Partners", "pwpartners.com"],
  ["Integrity Marketing Group", "integrity.com"],
  ["Rheinmetall", "rheinmetall.com"],
  ["RTX", "rtx.com"],
  ["General Dynamics", "gd.com"],
  ["Boeing", "boeing.com"],
  ["Caterpillar", "caterpillar.com"],
  ["Washington Companies", "washcorp.com"],
  ["Mercedes-Benz", "mercedes-benz.com"]
];

const marketFunctions = [
  "Governed agent orchestration",
  "Human-in-the-loop workflow execution",
  "Enterprise data grounding and unstructured data access",
  "Audit, compliance, and policy enforcement",
  "Identity, permissions, and secure tool use",
  "Workflow automation across enterprise systems"
];

const competitiveCategories = [
  {
    title: "Mission and Operations AI Platforms",
    meta: "Palantir, C3 AI, defense and government AI platforms",
    description:
      "These platforms are closest to Legion in high-stakes operating environments. They support mission execution, operational decision-making, secure workflows, and complex enterprise coordination.",
    competitors: ["Palantir", "C3 AI", "Select defense and government AI platforms", "Prime-contractor-led AI solutions"],
    functions: [
      "Operational data integration",
      "Mission workflow support",
      "AI-assisted decision-making",
      "Secure analytics",
      "Data modeling and ontology development",
      "Deployment into sensitive government or industrial environments"
    ],
    strengths: [
      "Strong government credibility",
      "Large transformation narrative",
      "Existing procurement relationships",
      "Deep data integration experience",
      "Enterprise-scale implementation models"
    ],
    weaknesses: [
      "Can be perceived as heavy, expensive, and platform-locking",
      "Often requires significant services and implementation effort",
      "May be better suited to broad transformation than targeted agentic execution",
      "Commercial buyers may resist large strategic-platform commitments before proving use cases"
    ],
    positioning:
      "Legion should position as the more focused governed execution layer for agentic AI: faster, more modular, more agent-native, and better suited to enterprises that need governed AI workflows without committing to a massive platform transformation.",
    buyerQuotes: [
      "We need AI to do real operational work, but safely.",
      "We are not ready for a full enterprise transformation platform.",
      "We need to govern agent behavior before scaling AI.",
      "We need a practical path from pilot to production."
    ],
    buyers: ["CIO", "CTO", "Chief Data Officer", "COO", "Chief Risk Officer", "CISO", "Mission or operations leaders"]
  },
  {
    title: "Enterprise Agent Platforms",
    meta: "Microsoft, AWS, Google, IBM, Salesforce",
    description:
      "Cloud, productivity, and enterprise software platforms that provide tools to build, deploy, and manage AI agents, often embedded in broader ecosystems.",
    competitors: [
      "Microsoft Copilot Studio",
      "AWS Bedrock AgentCore",
      "Google Gemini Enterprise Agent Platform / Vertex AI Agent Builder",
      "IBM watsonx Orchestrate",
      "Salesforce Agentforce"
    ],
    functions: [
      "Agent development",
      "Low-code and pro-code agent builders",
      "Model access and model routing",
      "Tool calling",
      "Workflow connectors",
      "Enterprise administration",
      "Monitoring and governance controls"
    ],
    strengths: [
      "Large installed bases",
      "Procurement simplicity",
      "Strong integration with existing cloud or productivity environments",
      "Rapid adoption through bundled products",
      "Familiar administrative models"
    ],
    weaknesses: [
      "Often tied to a specific ecosystem",
      "May not address highly regulated deployment constraints",
      "May lack depth in cross-boundary or air-gapped environments",
      "Can be too generic for specialized regulated workflows",
      "Buyer may still need a governance and execution layer above the tools"
    ],
    positioning:
      "Enterprise platforms help organizations create agents. Legion helps regulated enterprises govern what agents are allowed to do, how they do it, and how humans remain in control.",
    buyerQuotes: [
      "We already have Copilot or cloud AI tools, but we do not know how to govern agentic workflows.",
      "We need to safely connect agents to enterprise systems.",
      "We need audit trails and approvals before agents act.",
      "We cannot have every department building agents independently."
    ],
    buyers: [
      "CIO",
      "CISO",
      "CTO",
      "Head of Enterprise Architecture",
      "Head of AI Governance",
      "Chief Data Officer",
      "Compliance leadership"
    ]
  },
  {
    title: "Workflow Automation and RPA Platforms",
    meta: "ServiceNow, UiPath, Automation Anywhere, Workato, Appian, Pega",
    description:
      "Workflow, process automation, ITSM, BPM, and RPA systems that now add AI agents to automate more complex tasks and coordinate work across applications.",
    competitors: ["ServiceNow AI Agents / Now Assist", "UiPath Agentic Automation", "Automation Anywhere", "Workato", "Appian", "Pega"],
    functions: [
      "Process automation",
      "Task routing",
      "Ticket workflows",
      "RPA bot execution",
      "Application integration",
      "Business process management",
      "Human approval flows"
    ],
    strengths: [
      "Strong installed base in enterprise workflows",
      "Clear process automation ROI",
      "Familiar operational buyers",
      "Mature workflow engines",
      "Existing integration patterns"
    ],
    weaknesses: [
      "Often tied to structured workflows and known processes",
      "May struggle with messy unstructured data and ambiguous knowledge work",
      "Agent governance may be added onto legacy automation architecture",
      "Can be constrained by the workflow system's own data model",
      "May not be designed for high-risk, cross-system AI execution"
    ],
    positioning:
      "Workflow platforms automate known processes. Legion governs AI agents working across uncertain, unstructured, and high-risk environments.",
    buyerQuotes: [
      "Our workflows are too complex for traditional automation.",
      "We have unstructured data and judgment-heavy work.",
      "We need agents to help coordinate across systems, not just complete tasks.",
      "We need human approval and auditability built into the process."
    ],
    buyers: ["COO", "CIO", "Head of Operations", "Head of Shared Services", "Head of Digital Transformation", "Business unit executives"]
  },
  {
    title: "Enterprise Search, Knowledge Grounding, and RAG Platforms",
    meta: "Glean, Sinequa, Coveo, Elastic, GoSearch",
    description:
      "Platforms that help organizations find, retrieve, and use internal knowledge through enterprise search, permission-aware retrieval, data grounding, and AI assistants.",
    competitors: ["Glean", "Sinequa", "Coveo", "Elastic", "GoSearch and similar enterprise search AI platforms"],
    functions: [
      "Enterprise search",
      "Retrieval-augmented generation",
      "Data indexing",
      "Permission-aware answers",
      "Knowledge discovery",
      "Internal assistant interfaces",
      "Document and knowledge-base grounding"
    ],
    strengths: [
      "Strong answer-quality story",
      "Clear value for knowledge workers",
      "Fast deployment relative to enterprise transformation platforms",
      "Strong permissioning narrative",
      "Good fit for internal productivity use cases"
    ],
    weaknesses: [
      "Often stops at retrieval and answer generation",
      "Limited ability to execute workflows across systems",
      "May not govern agent behavior beyond search and content interaction",
      "Does not fully solve action, approval, and audit requirements"
    ],
    positioning:
      "Search platforms help employees find information. Legion helps organizations turn information into governed action.",
    buyerQuotes: [
      "We have knowledge everywhere, but cannot operationalize it.",
      "Our AI assistant can answer questions, but cannot safely take action.",
      "We need to connect documents, decisions, and workflows.",
      "We need agents that can work with unstructured data and produce auditable outputs."
    ],
    buyers: ["Chief Data Officer", "CIO", "Knowledge Management leaders", "Legal and compliance operations", "Business operations leaders"]
  },
  {
    title: "Identity, Access, and AI Governance Platforms",
    meta: "SailPoint, Saviynt, Okta, CyberArk, Microsoft Entra",
    description:
      "Adjacent governance vendors that focus on identity, access controls, permissions, entitlements, and risk around who can access what.",
    competitors: ["SailPoint", "Saviynt", "Okta", "CyberArk", "Microsoft Entra"],
    functions: [
      "Identity governance",
      "Access certification",
      "Role and entitlement management",
      "Privileged access management",
      "User lifecycle controls",
      "Policy enforcement",
      "Access risk analytics"
    ],
    strengths: [
      "Strong CISO credibility",
      "Clear compliance relevance",
      "Established governance budget",
      "Direct connection to access risk",
      "Necessary control layer for enterprise AI"
    ],
    weaknesses: [
      "Does not orchestrate AI workflows",
      "Does not solve unstructured data execution problems",
      "Does not provide a full agent operating model",
      "Controls access, but does not govern the full AI workflow lifecycle"
    ],
    positioning:
      "Identity platforms control who can access systems. Legion governs what AI agents can do inside those systems, under what conditions, with what approval, and with what audit trail.",
    buyerQuotes: [
      "We are worried about agents acting with user permissions.",
      "We need to understand how AI changes access risk.",
      "We need to govern not just users, but machine actions.",
      "We need auditable controls around agent-to-system interactions."
    ],
    buyers: ["CISO", "Chief Risk Officer", "Identity and Access Management leader", "Compliance leader", "CIO"]
  },
  {
    title: "Process Intelligence and Consulting-Led Transformation",
    meta: "Celonis, EY, BDO, Deloitte, IBM Consulting, Accenture, Infosys, Wipro, DXC",
    description:
      "Companies that shape executive thinking, define transformation agendas, and influence platform decisions. They compete for budget, access, and ownership of the business case.",
    competitors: ["Celonis", "EY", "BDO", "Deloitte", "IBM Consulting", "Accenture", "Infosys", "Wipro", "DXC"],
    functions: [
      "Process discovery",
      "Process mining",
      "Transformation roadmaps",
      "AI readiness assessments",
      "Systems integration",
      "Operating model design",
      "Executive advisory",
      "Business case development"
    ],
    strengths: [
      "Trusted board and C-suite access",
      "Existing consulting relationships",
      "Strong change-management capabilities",
      "Ability to package strategy, implementation, and governance",
      "Enterprise procurement familiarity"
    ],
    weaknesses: [
      "May lack a differentiated AI execution platform",
      "Can be services-heavy",
      "Implementation may move slowly",
      "May recommend large ecosystem vendors over specialized platforms"
    ],
    positioning:
      "Consulting firms can advise on AI transformation. ALPS helps Legion reach executive buyers in regulated industries and translate Legion's platform into qualified commercial opportunities.",
    buyerQuotes: [
      "We need to define an AI governance and operating model.",
      "We need to move from AI strategy to safe implementation.",
      "We need outside help understanding where agents can create value.",
      "We need confidence before scaling AI into sensitive workflows."
    ],
    buyers: ["CEO", "COO", "CIO", "Chief Strategy Officer", "Chief Transformation Officer", "Practice leaders in advisory firms"]
  }
];

const matrixRows = [
  ["Agent orchestration", "Governed execution across systems", "Microsoft, AWS, Google, IBM, Salesforce", "More focused on high-risk execution and human control"],
  ["Mission AI", "Secure operational workflows", "Palantir, C3 AI, prime contractor stacks", "More modular and agent-native"],
  ["Workflow automation", "AI agents coordinating work", "ServiceNow, UiPath, Appian, Pega", "Better fit for unstructured, high-risk, cross-system workflows"],
  ["Enterprise search and grounding", "Search plus governed action", "Glean, Sinequa, Coveo, Elastic", "Moves beyond answers into execution"],
  ["AI governance", "Human oversight, audit, policy enforcement", "Microsoft, Salesforce, ServiceNow, identity platforms", "Built around governed agent behavior, not only user access"],
  ["Identity and permissions", "Safe agent access and action boundaries", "SailPoint, Saviynt, Okta, CyberArk", "Governs what agents do, not only who has access"],
  ["Implementation strategy", "Regulated industry deployment", "Consulting firms, SIs, internal teams", "ALPS can accelerate executive access and commercial validation"]
];

const strategicContrasts = [
  ["Chatbot", "Answers questions", "Does not execute governed work", "Legion executes workflows under human control"],
  ["Enterprise search", "Finds information", "Does not safely act on it", "Legion turns knowledge into auditable action"],
  ["Cloud agent builder", "Builds agents", "May not control high-risk operations", "Legion governs agents in regulated environments"],
  ["Workflow automation", "Automates known processes", "Struggles with unstructured judgment work", "Legion handles dynamic, cross-system AI workflows"],
  ["Identity platform", "Controls access", "Does not manage AI decision and action flow", "Legion governs agent behavior and auditability"],
  ["Consulting roadmap", "Defines strategy", "May not provide execution layer", "Legion provides the operating platform"]
];

const industries = [
  {
    title: "Healthcare",
    meta: "Risk-controlled productivity for sensitive workflows",
    accounts: ["Trinity Health", "Texas Health Resources", "Beth Israel Lahey Health", "NewYork-Presbyterian", "HCA Healthcare"],
    problem:
      "Healthcare systems are drowning in unstructured data: clinical documentation, payer communications, claims, policies, patient records, compliance requirements, operational reports, and administrative workflows.",
    useCases: [
      "Clinical and administrative document analysis",
      "Revenue cycle and payer workflow automation",
      "Policy and compliance research",
      "Operational reporting",
      "Internal knowledge retrieval with auditability",
      "Human-supervised workflow routing"
    ],
    strategy:
      "Lead with risk-controlled productivity. Healthcare executives need a safe way to use AI in sensitive workflows.",
    buyers: ["CIO", "Chief Digital Officer", "Chief Compliance Officer", "CFO", "COO", "Revenue cycle leadership"]
  },
  {
    title: "Life Sciences",
    meta: "Safe acceleration of regulated knowledge work",
    accounts: ["Pfizer", "Bristol Myers Squibb", "Novartis", "Roche", "Boehringer Ingelheim", "Johnson & Johnson"],
    problem:
      "Life sciences companies operate in documentation-heavy, compliance-heavy environments across R&D, clinical operations, regulatory affairs, pharmacovigilance, quality, manufacturing, and commercial teams.",
    useCases: [
      "Regulatory documentation support",
      "Clinical trial operations workflows",
      "Quality and compliance research",
      "Pharmacovigilance triage",
      "Medical affairs knowledge management",
      "Manufacturing and supply chain reporting",
      "Human-reviewed agentic document generation"
    ],
    strategy:
      "Lead with controlled AI workflows, traceable outputs, and reducing cycle time without increasing compliance risk.",
    buyers: ["CIO", "Chief Digital Officer", "Head of Regulatory Affairs", "Head of Clinical Operations", "Head of Quality", "Chief Compliance Officer"]
  },
  {
    title: "CPA, Advisory, and Professional Services",
    meta: "Defensible AI-enabled professional work",
    accounts: ["EY", "BDO", "Other advisory and audit firms"],
    problem:
      "CPA and advisory firms need AI in audit, tax, advisory, diligence, compliance, and client-service workflows, but professional services work depends on judgment, client confidentiality, documentation, and defensible work product.",
    useCases: [
      "Audit support workflows",
      "Workpaper analysis",
      "Tax and regulatory research",
      "Diligence document review",
      "Client deliverable drafting with human approval",
      "Internal knowledge reuse",
      "Advisory workflow automation"
    ],
    strategy:
      "Lead with AI that improves speed and quality without weakening confidentiality, auditability, or professional standards.",
    buyers: ["Managing Partner", "CIO", "Chief Innovation Officer", "Risk leadership", "Service line leaders", "Advisory practice leaders"]
  },
  {
    title: "Banking, Financial Services, Wealth, and Insurance",
    meta: "Controlled AI adoption in supervised environments",
    accounts: ["LPL Financial", "Franklin Templeton", "Travelers", "The Hanover Insurance Group", "Wells Fargo", "Perella Weinberg Partners", "Integrity Marketing Group"],
    problem:
      "Financial institutions face strict supervision, high data sensitivity, and complex unstructured workflows across customer service, compliance, risk, underwriting, investment operations, research, onboarding, fraud, and reporting.",
    useCases: [
      "Compliance and regulatory research",
      "Client onboarding workflow support",
      "Insurance claims triage",
      "Underwriting support",
      "Investment research summarization",
      "Risk reporting",
      "Policy and control documentation",
      "Advisor knowledge assistance with audit trails"
    ],
    strategy:
      "Lead with operational efficiency that controls data access, documents actions, and supervises outputs.",
    buyers: ["CIO", "CISO", "Chief Risk Officer", "Chief Compliance Officer", "COO", "Head of Operations", "Business unit presidents"]
  },
  {
    title: "Aerospace, Defense, and Industrial Defense",
    meta: "Commercial defense adjacency",
    accounts: ["Rheinmetall", "RTX Corporation", "General Dynamics", "Boeing"],
    problem:
      "Aerospace and defense companies operate at the intersection of government requirements, supply chain complexity, classified or controlled information, manufacturing operations, engineering documentation, and program execution.",
    useCases: [
      "Program documentation analysis",
      "Engineering and technical data workflows",
      "Supply chain and vendor risk support",
      "Contract and compliance review",
      "Program reporting",
      "Secure knowledge management",
      "Mission-adjacent workflow automation"
    ],
    strategy:
      "Lead with commercial defense adjacency. These companies understand government operating environments and why Legion's government-grade posture matters.",
    buyers: ["CIO", "CTO", "CISO", "Program executives", "Engineering operations leaders", "Compliance and security leaders"]
  },
  {
    title: "Industrial, Manufacturing, and Critical Operations",
    meta: "Operational efficiency under control",
    accounts: ["Caterpillar", "Washington Companies", "Mercedes-Benz Group"],
    problem:
      "Manufacturing and industrial enterprises manage operational data, technical documentation, maintenance records, supply chain information, safety requirements, and distributed workflows.",
    useCases: [
      "Maintenance and service documentation workflows",
      "Supply chain risk analysis",
      "Safety and compliance support",
      "Technical knowledge retrieval",
      "Operational reporting",
      "Procurement and vendor workflow support",
      "Quality documentation analysis"
    ],
    strategy:
      "Lead with bringing AI into industrial workflows without introducing unmanaged operational risk.",
    buyers: ["COO", "CIO", "CTO", "Head of Manufacturing Operations", "Supply chain leadership", "Quality leadership"]
  }
];

const personas = [
  {
    title: "CEO / Board",
    concern: "AI is strategically necessary, but unmanaged AI creates enterprise risk.",
    message: "Legion allows the enterprise to scale AI responsibly by moving from experimentation to governed execution.",
    outcome: "Board-level confidence that AI adoption is controlled, strategic, and aligned with enterprise risk posture."
  },
  {
    title: "CIO / CTO",
    concern: "The organization needs an AI architecture that integrates with existing systems and does not create another uncontrolled technology layer.",
    message: "Legion provides a governed agent execution layer that works across enterprise systems while preserving control, auditability, and flexibility.",
    outcome: "A practical architecture for safe AI implementation."
  },
  {
    title: "CISO",
    concern: "AI agents create new risks around identity, permissions, data access, tool use, and autonomous behavior.",
    message: "Legion gives security leadership visibility and control over what agents can access, what they can do, and how their actions are supervised and audited.",
    outcome: "AI adoption without unacceptable security exposure."
  },
  {
    title: "COO / Operations Leader",
    concern: "The organization needs productivity improvements, but workflows are complex, unstructured, and cross-functional.",
    message: "Legion allows AI agents to coordinate operational work safely, with humans in control and workflows auditable end to end.",
    outcome: "Operational acceleration without loss of control."
  },
  {
    title: "Chief Risk / Compliance / Legal",
    concern: "AI outputs and actions must be explainable, governed, documented, and defensible.",
    message: "Legion creates the control layer needed to make AI workflows auditable and compliant.",
    outcome: "Confidence that AI use can withstand internal and external scrutiny."
  }
];

const motionPhases = [
  {
    phase: "Phase 1",
    title: "Executive Problem Validation",
    items: [
      "Test AI governance gaps",
      "Validate unstructured data bottlenecks",
      "Surface agent deployment concerns",
      "Identify shadow AI usage",
      "Map compliance, security, and audit requirements",
      "Find workflows suitable for supervised agents"
    ]
  },
  {
    phase: "Phase 2",
    title: "Industry-Specific Use Case Packaging",
    items: [
      "Healthcare: governed AI workflows for sensitive operational and administrative data",
      "Life Sciences: traceable AI agents for regulated documentation and knowledge work",
      "CPA and Advisory: defensible AI-enabled professional work product",
      "Banking and Financial Services: supervised agentic workflows for regulated operations"
    ]
  },
  {
    phase: "Phase 3",
    title: "Targeted Executive Access",
    items: [
      "Prioritize executive meetings over broad marketing",
      "Focus on CIOs, CISOs, COOs, risk and compliance leaders",
      "Include transformation leaders and business unit executives with urgent workflow pain"
    ]
  },
  {
    phase: "Phase 4",
    title: "Pilot Design",
    items: [
      "Keep pilots narrow, high-value, and audit-friendly",
      "Use unstructured data and judgment-sensitive workflows",
      "Build human approval checkpoints",
      "Define measurable time savings or risk reduction"
    ]
  },
  {
    phase: "Phase 5",
    title: "Investor Narrative Support",
    items: [
      "Target industries identified",
      "Executive meetings underway",
      "Priority use cases validated",
      "Pilot candidates defined",
      "ALPS channel activated",
      "Commercial arm operational during the raise"
    ]
  }
];

const messages = [
  {
    title: "Primary Message",
    body:
      "Regulated enterprises are ready for AI agents, but not unmanaged AI agents. Legion provides the governed execution layer that allows AI agents to safely operate across sensitive systems, with humans in control and auditability built in."
  },
  {
    title: "ALPS Message",
    body:
      "ALPS gives Legion immediate commercial access into regulated industries where the need for governed AI is already urgent."
  },
  {
    title: "Investor Message",
    body:
      "Legion is not only expanding in government. It is positioned to extend its government-grade AI governance model into regulated commercial markets through an active ALPS-led commercial motion."
  },
  {
    title: "Buyer Message",
    body:
      "You do not need another AI experiment. You need a safe way to put AI agents to work inside your enterprise."
  }
];

const activationPlan = [
  {
    days: "Days 1 to 15",
    title: "Positioning and Targeting",
    items: [
      "Finalize sector-specific messaging",
      "Prioritize target accounts",
      "Define buyer personas and entry points",
      "Create executive outreach language",
      "Select 3 to 5 highest-probability use cases per sector"
    ]
  },
  {
    days: "Days 16 to 45",
    title: "Executive Outreach and Market Validation",
    items: [
      "Activate ALPS advisor network",
      "Schedule senior-level conversations",
      "Test industry pain points",
      "Identify early pilot sponsors",
      "Capture objections and competitive references"
    ]
  },
  {
    days: "Days 46 to 75",
    title: "Pilot Structuring",
    items: [
      "Convert qualified conversations into pilot concepts",
      "Define workflow scope, data sensitivity, human oversight model, and audit requirements",
      "Build business case by sector",
      "Identify internal champions and budget owners"
    ]
  },
  {
    days: "Days 76 to 90",
    title: "Investor-Visible Commercial Proof",
    items: [
      "Summarize pipeline and buyer feedback",
      "Identify pilot-ready opportunities",
      "Document commercial use-case validation",
      "Package commercial expansion story for investor conversations",
      "Recommend next-stage go-to-market investment"
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════
// ACCOUNTS TABLE DATA
// ═══════════════════════════════════════════════════════════════════

const INDUSTRY_OPTIONS = [
  'Healthcare',
  'Life Sciences',
  'CPA, Advisory, and Professional Services',
  'Banking, Financial Services, Wealth, and Insurance',
  'Aerospace, Defense, and Industrial Defense',
  'Industrial, Manufacturing, and Critical Operations',
];

const STATUS_OPTIONS = ['Target', 'Warm Path', 'Outreached', 'In Conversation', 'Pilot Candidate', 'Pass'];

const defaultAccounts = [
  { account: 'Trinity Health',              industry: 'Healthcare',                                          status: 'Target', contact: '', notes: '' },
  { account: 'Texas Health Resources',      industry: 'Healthcare',                                          status: 'Target', contact: '', notes: '' },
  { account: 'Beth Israel Lahey Health',    industry: 'Healthcare',                                          status: 'Target', contact: '', notes: '' },
  { account: 'NewYork-Presbyterian',        industry: 'Healthcare',                                          status: 'Target', contact: '', notes: '' },
  { account: 'HCA Healthcare',              industry: 'Healthcare',                                          status: 'Target', contact: '', notes: '' },
  { account: 'Pfizer',                      industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'Bristol Myers Squibb',        industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'Novartis',                    industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'Roche',                       industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'Boehringer Ingelheim',        industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'Johnson & Johnson',           industry: 'Life Sciences',                                       status: 'Target', contact: '', notes: '' },
  { account: 'EY',                          industry: 'CPA, Advisory, and Professional Services',            status: 'Target', contact: '', notes: '' },
  { account: 'BDO',                         industry: 'CPA, Advisory, and Professional Services',            status: 'Target', contact: '', notes: '' },
  { account: 'LPL Financial',               industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Franklin Templeton',          industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Travelers',                   industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'The Hanover Insurance Group', industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Wells Fargo',                 industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Perella Weinberg Partners',   industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Integrity Marketing Group',   industry: 'Banking, Financial Services, Wealth, and Insurance', status: 'Target', contact: '', notes: '' },
  { account: 'Rheinmetall',                 industry: 'Aerospace, Defense, and Industrial Defense',         status: 'Target', contact: '', notes: '' },
  { account: 'RTX Corporation',             industry: 'Aerospace, Defense, and Industrial Defense',         status: 'Target', contact: '', notes: '' },
  { account: 'General Dynamics',            industry: 'Aerospace, Defense, and Industrial Defense',         status: 'Target', contact: '', notes: '' },
  { account: 'Boeing',                      industry: 'Aerospace, Defense, and Industrial Defense',         status: 'Target', contact: '', notes: '' },
  { account: 'Caterpillar',                 industry: 'Industrial, Manufacturing, and Critical Operations', status: 'Target', contact: '', notes: '' },
  { account: 'Washington Companies',        industry: 'Industrial, Manufacturing, and Critical Operations', status: 'Target', contact: '', notes: '' },
  { account: 'Mercedes-Benz Group',         industry: 'Industrial, Manufacturing, and Critical Operations', status: 'Target', contact: '', notes: '' },
];

function getAccountsTable() {
  const saved = editStore.get('accounts-table');
  if (saved) { try { return JSON.parse(saved); } catch {} }
  return defaultAccounts.map(a => ({ ...a }));
}

function saveAccountsTable(data) {
  editStore.set('accounts-table', JSON.stringify(data));
}

function statusCssClass(status) {
  const map = { 'Target': 'status-target', 'Warm Path': 'status-warm', 'Outreached': 'status-outreached', 'In Conversation': 'status-conversation', 'Pilot Candidate': 'status-pilot', 'Pass': 'status-pass' };
  return map[status] || 'status-target';
}

// ═══════════════════════════════════════════════════════════════════
// TEMPLATE HELPERS
// ═══════════════════════════════════════════════════════════════════

function list(items, className = "") {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function chips(items, options = {}) {
  const chipMarkup = items
    .map((item) => (options.logos ? logoChip(item) : `<span>${escapeHtml(item)}</span>`))
    .join("");
  return `<div class="chip-list">${chipMarkup}</div>`;
}

function logoChip(name) {
  const domain = findCompanyDomain(name);
  if (!domain) {
    return `<span>${escapeHtml(name)}</span>`;
  }
  const image = `<img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64" alt="" loading="lazy" onerror="this.remove()" />`;
  return `
    <span class="logo-chip">
      <span class="company-logo" style="--logo-color:${logoColor(name)}">
        <span>${escapeHtml(initials(name))}</span>
        ${image}
      </span>
      <span class="logo-name">${escapeHtml(name)}</span>
    </span>
  `;
}

function findCompanyDomain(name) {
  const cleanName = name.toLowerCase();
  const match = companyDomains.find(([needle]) => cleanName.includes(needle.toLowerCase()));
  return match ? match[1] : "";
}

function initials(name) {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter((word) => word.length > 1);
  if (words.length === 0) return "ID";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function logoColor(name) {
  let hash = 0;
  for (let index = 0; index < name.length; index += 1) {
    hash = name.charCodeAt(index) + ((hash << 5) - hash);
  }
  return accents[Math.abs(hash) % accents.length];
}

function detailBlock(title, content) {
  return `<div class="detail-block"><h4>${escapeHtml(title)}</h4>${content}</div>`;
}

function progressBar(done, total) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return `
    <div class="progress-row">
      <div class="progress-bar-wrap" title="${done} of ${total} complete">
        <div class="progress-bar" style="width:${pct}%"></div>
      </div>
      <span class="progress-label">${done} / ${total}</span>
    </div>
  `;
}

function checklistItem(text, checkKey, editKey) {
  const done = getCheckState(checkKey);
  const displayText = editKey ? editableValue(editKey, text) : text;
  return `
    <li class="checklist-item${done ? " is-done" : ""}">
      <input type="checkbox" ${done ? "checked" : ""} data-check-key="${escapeHtml(checkKey)}" aria-label="${escapeHtml(displayText)}">
      <span ${editKey ? `data-editable="${escapeHtml(editKey)}"` : ""}>${escapeHtml(displayText)}</span>
    </li>
  `;
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: INDUSTRIES OVERVIEW
// ═══════════════════════════════════════════════════════════════════

function renderIndustriesOverview() {
  const container = document.querySelector("#industries-overview");
  if (!container) return;
  container.innerHTML = industries
    .map(
      (industry, i) => `
        <div class="overview-card" style="--accent:${accents[i % accents.length]}">
          <div class="overview-card-header">
            <strong class="overview-card-title" data-editable="ind-${i}-title">${escapeHtml(editableValue(`ind-${i}-title`, industry.title))}</strong>
            <span class="overview-card-meta" data-editable="ind-${i}-meta">${escapeHtml(editableValue(`ind-${i}-meta`, industry.meta))}</span>
          </div>
          ${chips(industry.accounts, { logos: true })}
        </div>
      `
    )
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: COMPETITORS OVERVIEW
// ═══════════════════════════════════════════════════════════════════

function renderCompetitorsOverview() {
  const container = document.querySelector("#competitors-overview");
  if (!container) return;
  container.innerHTML = competitiveCategories
    .map(
      (arena, i) => `
        <div class="overview-card" style="--accent:${accents[i % accents.length]}">
          <div class="overview-card-header">
            <strong class="overview-card-title" data-editable="comp-${i}-title">${escapeHtml(editableValue(`comp-${i}-title`, arena.title))}</strong>
            <span class="overview-card-meta">${arena.competitors.length} competitors in this arena</span>
          </div>
          ${chips(arena.competitors, { logos: true })}
        </div>
      `
    )
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: MARKET FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function renderMarketFunctions() {
  const container = document.querySelector("#function-grid");
  container.innerHTML = marketFunctions
    .map(
      (item, index) => `
        <article class="function-card" style="--accent:${accents[index % accents.length]}">
          <strong>${escapeHtml(item)}</strong>
          <p>${functionDescription(item)}</p>
        </article>
      `
    )
    .join("");
}

function functionDescription(item) {
  const descriptions = {
    "Governed agent orchestration": "Coordinate agent behavior across tools, systems, and decision points.",
    "Human-in-the-loop workflow execution": "Keep approval, review, and escalation in the operating model.",
    "Enterprise data grounding and unstructured data access": "Use documents, knowledge repositories, records, contracts, and emails safely.",
    "Audit, compliance, and policy enforcement": "Make agent actions reviewable, defensible, and aligned to controls.",
    "Identity, permissions, and secure tool use": "Define what agents can access and where action boundaries sit.",
    "Workflow automation across enterprise systems": "Turn search and analysis into supervised execution."
  };
  return descriptions[item];
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: TABLES
// ═══════════════════════════════════════════════════════════════════

function renderTables() {
  document.querySelector("#matrix-body").innerHTML = matrixRows.map(rowTemplate).join("");
  document.querySelector("#contrast-body").innerHTML = strategicContrasts.map(rowTemplate).join("");
}

function rowTemplate(row) {
  return `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`;
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: ACCORDIONS (industry + competitor detail)
// ═══════════════════════════════════════════════════════════════════

function accordionCard(item, index, type) {
  const panelId = `${type}-${index}`;
  const prefix = type === "competitor" ? `comp-${index}` : `ind-${index}`;
  const searchText = [
    item.title, item.meta, item.description, item.positioning,
    item.problem, item.strategy,
    ...(item.competitors || []), ...(item.functions || []),
    ...(item.strengths || []), ...(item.weaknesses || []),
    ...(item.buyerQuotes || []), ...(item.buyers || []),
    ...(item.accounts || []), ...(item.useCases || [])
  ].join(" ");

  const isCompetitor = type === "competitor";
  const panel = isCompetitor
    ? `
      ${detailBlock("Category Description", `<p data-editable="${prefix}-desc">${escapeHtml(editableValue(`${prefix}-desc`, item.description))}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Representative Competitors", chips(item.competitors, { logos: true }))}
        ${detailBlock("Competitive Functions", list(item.functions))}
        ${detailBlock("Competitive Strengths", list(item.strengths))}
        ${detailBlock("Competitive Weaknesses", list(item.weaknesses))}
      </div>
      ${detailBlock("Legion Positioning", `<p data-editable="${prefix}-pos">${escapeHtml(editableValue(`${prefix}-pos`, item.positioning))}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Buyer Signals", list(item.buyerQuotes, "quote-list"))}
        ${detailBlock("Primary Buyers", chips(item.buyers))}
      </div>
    `
    : `
      <div class="detail-grid">
        ${detailBlock("Target Accounts", chips(item.accounts, { logos: true }))}
        ${detailBlock("Primary Buyers", chips(item.buyers))}
      </div>
      ${detailBlock("Industry Problem", `<p data-editable="${prefix}-prob">${escapeHtml(editableValue(`${prefix}-prob`, item.problem))}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Legion Use Cases", list(item.useCases))}
        ${detailBlock("Buyer Strategy", `<p data-editable="${prefix}-strat">${escapeHtml(editableValue(`${prefix}-strat`, item.strategy))}</p>`)}
      </div>
    `;

  return `
    <article class="accordion-card searchable" data-title="${escapeHtml(item.title)}" data-search="${escapeHtml(searchText)}">
      <button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="accordion-title">
          <strong>${index + 1}. <span data-editable="${prefix}-title">${escapeHtml(editableValue(`${prefix}-title`, item.title))}</span></strong>
          <span data-editable="${prefix}-meta">${escapeHtml(editableValue(`${prefix}-meta`, item.meta))}</span>
        </span>
        <span class="accordion-meta">${isCompetitor ? "Competitive posture and buyer strategy" : "Accounts, use cases, and buyer motion"}</span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div class="accordion-panel" id="${panelId}" hidden>
        ${panel}
      </div>
    </article>
  `;
}

function renderAccordions() {
  document.querySelector("#competitor-list").innerHTML = competitiveCategories
    .map((item, index) => accordionCard(item, index, "competitor"))
    .join("");
  document.querySelector("#industry-list").innerHTML = industries
    .map((item, index) => accordionCard(item, index, "industry"))
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: PERSONAS
// ═══════════════════════════════════════════════════════════════════

function renderPersonas(activeIndex = 0) {
  const tabs = document.querySelector("#persona-tabs");
  const panel = document.querySelector("#persona-panel");
  document.querySelector("#personas").dataset.search = personas
    .map((p) => `${p.title} ${p.concern} ${p.message} ${p.outcome}`)
    .join(" ");

  tabs.innerHTML = personas
    .map(
      (persona, index) => `
        <button class="persona-tab" role="tab" id="persona-tab-${index}" aria-selected="${index === activeIndex}" aria-controls="persona-panel" type="button" data-persona="${index}">
          ${escapeHtml(persona.title)}
        </button>
      `
    )
    .join("");

  const p = personas[activeIndex];
  const pk = `persona-${activeIndex}`;
  panel.innerHTML = `
    <h3>${escapeHtml(p.title)}</h3>
    <div class="persona-point">
      <strong>Core Concern</strong>
      <p data-editable="${pk}-concern">${escapeHtml(editableValue(`${pk}-concern`, p.concern))}</p>
    </div>
    <div class="persona-point">
      <strong>Message</strong>
      <p data-editable="${pk}-message">${escapeHtml(editableValue(`${pk}-message`, p.message))}</p>
    </div>
    <div class="persona-point">
      <strong>Desired Outcome</strong>
      <p data-editable="${pk}-outcome">${escapeHtml(editableValue(`${pk}-outcome`, p.outcome))}</p>
    </div>
  `;

  tabs.querySelectorAll(".persona-tab").forEach((button) => {
    button.addEventListener("click", () => renderPersonas(Number(button.dataset.persona)));
  });
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: ENTRY MOTION (checklist)
// ═══════════════════════════════════════════════════════════════════

function renderMotion() {
  document.querySelector("#motion-list").innerHTML = motionPhases
    .map((item, pi) => {
      const doneCount = item.items.filter((_, ii) => getCheckState(`motion-${pi}-${ii}`)).length;
      const total = item.items.length;
      return `
        <article class="timeline-card" style="--accent:${accents[pi % accents.length]}">
          <span class="phase" data-editable="motion-${pi}-phase">${escapeHtml(editableValue(`motion-${pi}-phase`, item.phase))}</span>
          <h3 data-editable="motion-${pi}-title">${escapeHtml(editableValue(`motion-${pi}-title`, item.title))}</h3>
          ${progressBar(doneCount, total)}
          <ul class="checklist">
            ${item.items
              .map((text, ii) =>
                checklistItem(text, `motion-${pi}-${ii}`, `motion-${pi}-item-${ii}`)
              )
              .join("")}
          </ul>
        </article>
      `;
    })
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: MESSAGES
// ═══════════════════════════════════════════════════════════════════

function renderMessages() {
  document.querySelector("#message-grid").innerHTML = messages
    .map(
      (message, index) => `
        <article class="message-card" style="--accent:${accents[index % accents.length]}">
          <h3 data-editable="msg-${index}-title">${escapeHtml(editableValue(`msg-${index}-title`, message.title))}</h3>
          <p data-editable="msg-${index}-body">${escapeHtml(editableValue(`msg-${index}-body`, message.body))}</p>
        </article>
      `
    )
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: 90-DAY ACTIVATION (checklist)
// ═══════════════════════════════════════════════════════════════════

function renderActivation() {
  document.querySelector("#activation-list").innerHTML = activationPlan
    .map((phase, pi) => {
      const doneCount = phase.items.filter((_, ii) => getCheckState(`act-${pi}-${ii}`)).length;
      const total = phase.items.length;
      return `
        <article class="activation-card">
          <strong class="activation-days" data-editable="act-${pi}-days">${escapeHtml(editableValue(`act-${pi}-days`, phase.days))}</strong>
          <h3 data-editable="act-${pi}-title">${escapeHtml(editableValue(`act-${pi}-title`, phase.title))}</h3>
          ${progressBar(doneCount, total)}
          <ul class="checklist">
            ${phase.items
              .map((item, ii) =>
                checklistItem(item, `act-${pi}-${ii}`, `act-${pi}-item-${ii}`)
              )
              .join("")}
          </ul>
        </article>
      `;
    })
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: SIDEBAR
// ═══════════════════════════════════════════════════════════════════

function setupSidebar() {
  const appShell = document.querySelector("#app-shell");
  const toggle = document.querySelector("#sidebar-toggle");

  toggle.addEventListener("click", () => {
    const collapsed = !appShell.classList.contains("sidebar-collapsed");
    appShell.classList.toggle("sidebar-collapsed", collapsed);
    toggle.setAttribute("aria-pressed", String(collapsed));
    toggle.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
  });

  document.querySelectorAll(".side-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        setSectionExpanded(target, true);
        setActiveNav(link);
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: SECTION COLLAPSIBLES
// ═══════════════════════════════════════════════════════════════════

function setupSectionCollapsibles() {
  document.querySelectorAll(".section-block").forEach((section) => {
    const heading = section.querySelector(".section-heading");
    if (!heading || section.querySelector(".section-body")) return;

    const body = document.createElement("div");
    body.className = "section-body";
    body.id = `${section.id}-body`;

    while (heading.nextSibling) {
      body.appendChild(heading.nextSibling);
    }

    const toggle = document.createElement("button");
    toggle.className = "section-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", body.id);
    toggle.innerHTML = `<span class="section-toggle-label">Open</span><span class="chevron" aria-hidden="true"></span>`;
    toggle.addEventListener("click", () => {
      setSectionExpanded(section, toggle.getAttribute("aria-expanded") !== "true");
    });

    heading.appendChild(toggle);
    section.appendChild(body);
    setSectionExpanded(section, false);
  });
}

function setSectionExpanded(section, expanded) {
  const toggle = section.querySelector(".section-toggle");
  const body = section.querySelector(".section-body");
  if (!toggle || !body) return;
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.querySelector(".section-toggle-label").textContent = expanded ? "Close" : "Open";
  body.hidden = !expanded;
  section.classList.toggle("section-expanded", expanded);
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: ACCORDIONS
// ═══════════════════════════════════════════════════════════════════

function setupAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => setAccordion(trigger, trigger.getAttribute("aria-expanded") !== "true"));
  });

  document.querySelector("#expand-all").addEventListener("click", () => {
    document.querySelectorAll(".section-block").forEach((section) => setSectionExpanded(section, true));
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => setAccordion(trigger, true));
    document.querySelectorAll("details.detail-disclosure").forEach((d) => { d.open = true; });
  });

  document.querySelector("#collapse-all").addEventListener("click", () => {
    document.querySelectorAll(".section-block").forEach((section) => setSectionExpanded(section, false));
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => setAccordion(trigger, false));
    document.querySelectorAll("details.detail-disclosure").forEach((d) => { d.open = false; });
  });
}

function setAccordion(trigger, expanded) {
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  trigger.setAttribute("aria-expanded", String(expanded));
  panel.hidden = !expanded;
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: SEARCH
// ═══════════════════════════════════════════════════════════════════

function setupSearch() {
  const input = document.querySelector("#search");
  const status = document.querySelector("#search-status");
  const searchable = Array.from(document.querySelectorAll(".searchable"));

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let matches = 0;

    searchable.forEach((node) => {
      const haystack = `${node.dataset.title || ""} ${node.dataset.search || ""} ${node.textContent}`.toLowerCase();
      const isMatch = !query || haystack.includes(query);
      node.classList.toggle("is-hidden", !isMatch);
      if (isMatch) matches += 1;
      if (query && isMatch && node.classList.contains("section-block")) setSectionExpanded(node, true);
      if (query && isMatch && node.closest(".section-block")) setSectionExpanded(node.closest(".section-block"), true);
      const trigger = node.querySelector(".accordion-trigger");
      if (trigger && query && isMatch) setAccordion(trigger, true);
    });

    // Open detail disclosures if matches inside
    document.querySelectorAll("details.detail-disclosure").forEach((d) => {
      if (!query) return;
      const hasMatch = d.querySelector(".accordion-card:not(.is-hidden)");
      if (hasMatch) d.open = true;
    });

    status.textContent = query
      ? `${matches} matching sections for "${input.value.trim()}".`
      : "Showing the full strategy.";

    const firstVisible = document.querySelector(".section-block:not(.is-hidden)");
    const matchingLink = firstVisible
      ? document.querySelector(`.side-nav a[href="#${firstVisible.id}"]`)
      : null;
    if (matchingLink) setActiveNav(matchingLink);
  });
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: CHECKBOXES
// ═══════════════════════════════════════════════════════════════════

function setupCheckboxes() {
  document.addEventListener("change", (e) => {
    const cb = e.target;
    if (cb.type !== "checkbox" || !cb.dataset.checkKey) return;
    setCheckState(cb.dataset.checkKey, cb.checked);
    const item = cb.closest(".checklist-item");
    if (item) item.classList.toggle("is-done", cb.checked);
    updateProgress(cb.closest(".activation-card, .timeline-card"));
  });
}

function updateProgress(card) {
  if (!card) return;
  const cbs = [...card.querySelectorAll("input[type='checkbox']")];
  const done = cbs.filter((c) => c.checked).length;
  const total = cbs.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const bar = card.querySelector(".progress-bar");
  const label = card.querySelector(".progress-label");
  if (bar) bar.style.width = `${pct}%`;
  if (label) label.textContent = `${done} / ${total}`;
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: EDIT MODE
// ═══════════════════════════════════════════════════════════════════

let isEditMode = false;

function setupEditMode() {
  const toggleBtn = document.querySelector("#edit-toggle");
  const resetBtn = document.querySelector("#reset-edits");
  const banner = document.querySelector("#edit-banner");

  toggleBtn?.addEventListener("click", () => {
    isEditMode = !isEditMode;
    document.body.classList.toggle("edit-mode", isEditMode);
    toggleBtn.classList.toggle("is-editing", isEditMode);
    toggleBtn.textContent = isEditMode ? "✓ Done" : "✎ Edit";
    if (resetBtn) resetBtn.hidden = !isEditMode;
    if (banner) banner.hidden = !isEditMode;

    document.querySelectorAll("[data-editable]").forEach((el) => {
      el.contentEditable = isEditMode ? "true" : "false";
    });
  });

  resetBtn?.addEventListener("click", () => {
    if (confirm("Reset all edits back to defaults? This cannot be undone.")) {
      editStore.clear();
      location.reload();
    }
  });

  // Save on blur
  document.addEventListener(
    "blur",
    (e) => {
      const el = e.target;
      if (!el.dataset.editable || !isEditMode) return;
      const text = el.textContent.trim();
      editStore.set(el.dataset.editable, text);
      // Sync any other elements with the same edit key
      document.querySelectorAll(`[data-editable="${el.dataset.editable}"]`).forEach((twin) => {
        if (twin !== el) twin.textContent = text;
      });
    },
    true
  );

  // Prevent Enter creating newlines in short fields (not paragraphs)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || e.shiftKey || !e.target.dataset.editable) return;
    const isMultiline = e.target.tagName === "P";
    if (!isMultiline) {
      e.preventDefault();
      e.target.blur();
    }
  });

  // Sync edits between overview and accordion (same key, different DOM elements)
  document.addEventListener("input", (e) => {
    const el = e.target;
    if (!el.dataset.editable || !isEditMode) return;
    const key = el.dataset.editable;
    document.querySelectorAll(`[data-editable="${key}"]`).forEach((twin) => {
      if (twin !== el) twin.textContent = el.textContent;
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// SETUP: NAV OBSERVER
// ═══════════════════════════════════════════════════════════════════

function setupNavObserver() {
  const links = Array.from(document.querySelectorAll(".side-nav a"));
  const sections = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((item) => item.section);
  let ticking = false;

  const update = () => {
    const marker = Math.max(220, window.innerHeight * 0.36);
    let activeItem = sections[0];
    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= marker) activeItem = item;
    });
    if (activeItem) setActiveNav(activeItem.link);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  update();
}

function setActiveNav(activeLink) {
  const current = document.querySelector("#current-section");
  document.querySelectorAll(".side-nav a").forEach((link) => {
    link.classList.toggle("is-active", link === activeLink);
  });
  if (current) current.textContent = activeLink.dataset.title || activeLink.textContent.trim();
}

// ═══════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER + SETUP: ACCOUNTS TABLE
// ═══════════════════════════════════════════════════════════════════

function renderAccountRow(account, index) {
  const domain = findCompanyDomain(account.account);
  const color = logoColor(account.account);
  const img = domain
    ? `<img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32" alt="" loading="lazy" onerror="this.remove()" />`
    : '';
  const industryOpts = INDUSTRY_OPTIONS
    .map(o => `<option value="${escapeHtml(o)}"${o === account.industry ? ' selected' : ''}>${escapeHtml(o)}</option>`)
    .join('');
  const statusOpts = STATUS_OPTIONS
    .map(o => `<option value="${escapeHtml(o)}"${o === account.status ? ' selected' : ''}>${escapeHtml(o)}</option>`)
    .join('');

  return `
    <tr class="acct-row" data-industry="${escapeHtml(account.industry)}" data-status="${escapeHtml(account.status)}">
      <td class="acct-cell-name">
        <span class="acct-logo" style="--logo-color:${color}"><span>${escapeHtml(initials(account.account))}</span>${img}</span>
        <span class="cell-edit" contenteditable="false" data-field="account" data-row="${index}" data-placeholder="Account name">${escapeHtml(account.account)}</span>
      </td>
      <td>
        <select class="acct-select acct-industry" data-field="industry" data-row="${index}">${industryOpts}</select>
      </td>
      <td>
        <select class="acct-select acct-status ${statusCssClass(account.status)}" data-field="status" data-row="${index}">${statusOpts}</select>
      </td>
      <td>
        <span class="cell-edit" contenteditable="false" data-field="contact" data-row="${index}" data-placeholder="Name or role">${escapeHtml(account.contact || '')}</span>
      </td>
      <td>
        <span class="cell-edit cell-edit--notes" contenteditable="false" data-field="notes" data-row="${index}" data-placeholder="Add notes…">${escapeHtml(account.notes || '')}</span>
      </td>
      <td><button class="acct-del" data-row="${index}" type="button" title="Remove">×</button></td>
    </tr>`;
}

function renderAccountsTable() {
  const container = document.querySelector('#accounts-table-container');
  if (!container) return;
  const accounts = getAccountsTable();

  // Update header metric
  const countEl = document.querySelector('#account-count');
  if (countEl) countEl.textContent = accounts.length;

  const industryFilterOpts = INDUSTRY_OPTIONS
    .map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
  const statusFilterOpts = STATUS_OPTIONS
    .map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');

  container.innerHTML = `
    <div class="acct-toolbar">
      <div class="acct-filters">
        <select id="acct-filter-industry" class="acct-filter-select">
          <option value="">All industries</option>${industryFilterOpts}
        </select>
        <select id="acct-filter-status" class="acct-filter-select">
          <option value="">All statuses</option>${statusFilterOpts}
        </select>
      </div>
      <span class="acct-count" id="acct-visible-count">${accounts.length} accounts</span>
    </div>
    <div class="acct-table-wrap">
      <table class="acct-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Industry</th>
            <th>Status</th>
            <th>ALPS Contact</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="acct-tbody">
          ${accounts.map((a, i) => renderAccountRow(a, i)).join('')}
        </tbody>
      </table>
    </div>
    <button class="acct-add-btn" id="acct-add" type="button">+ Add Account</button>`;

  applyAccountFilters();
}

function applyAccountFilters() {
  const ind = document.querySelector('#acct-filter-industry')?.value || '';
  const sta = document.querySelector('#acct-filter-status')?.value || '';
  const rows = document.querySelectorAll('.acct-row');
  let visible = 0;
  rows.forEach(row => {
    const show = (!ind || row.dataset.industry === ind) && (!sta || row.dataset.status === sta);
    row.hidden = !show;
    if (show) visible++;
  });
  const countEl = document.querySelector('#acct-visible-count');
  if (countEl) countEl.textContent = visible === rows.length ? `${rows.length} accounts` : `${visible} of ${rows.length} accounts`;
}

function setupAccountsTable() {
  const section = document.querySelector('#accounts');
  if (!section) return;

  // Click cell to edit
  section.addEventListener('click', e => {
    const cell = e.target.closest('.cell-edit');
    if (!cell || cell.contentEditable === 'true') return;
    cell.contentEditable = 'true';
    cell.focus();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(cell);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  });

  // Save on blur
  section.addEventListener('blur', e => {
    const cell = e.target;
    if (!cell.classList.contains('cell-edit')) return;
    cell.contentEditable = 'false';
    const row = parseInt(cell.dataset.row);
    const field = cell.dataset.field;
    const accounts = getAccountsTable();
    if (!isNaN(row) && accounts[row]) {
      accounts[row][field] = cell.textContent.trim();
      saveAccountsTable(accounts);
    }
  }, true);

  // Enter exits cell
  section.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.classList.contains('cell-edit')) {
      e.preventDefault();
      e.target.blur();
    }
  });

  // Select changes
  section.addEventListener('change', e => {
    const sel = e.target;
    if (sel.classList.contains('acct-select')) {
      const row = parseInt(sel.dataset.row);
      const field = sel.dataset.field;
      const accounts = getAccountsTable();
      if (!isNaN(row) && accounts[row]) {
        accounts[row][field] = sel.value;
        saveAccountsTable(accounts);
        if (field === 'status') {
          sel.className = `acct-select acct-status ${statusCssClass(sel.value)}`;
          const rowEl = sel.closest('.acct-row');
          if (rowEl) rowEl.dataset.status = sel.value;
        }
        if (field === 'industry') {
          const rowEl = sel.closest('.acct-row');
          if (rowEl) rowEl.dataset.industry = sel.value;
        }
      }
    }
    if (sel.id === 'acct-filter-industry' || sel.id === 'acct-filter-status') {
      applyAccountFilters();
    }
  });

  // Delete row
  section.addEventListener('click', e => {
    const btn = e.target.closest('.acct-del');
    if (!btn) return;
    const row = parseInt(btn.dataset.row);
    const accounts = getAccountsTable();
    if (!isNaN(row)) {
      accounts.splice(row, 1);
      saveAccountsTable(accounts);
      renderAccountsTable();
    }
  });

  // Add row
  section.addEventListener('click', e => {
    if (!e.target.closest('#acct-add')) return;
    const accounts = getAccountsTable();
    accounts.push({ account: 'New Account', industry: 'Healthcare', status: 'Target', contact: '', notes: '' });
    saveAccountsTable(accounts);
    renderAccountsTable();
    // Focus new row's name cell
    const rows = document.querySelectorAll('.acct-row');
    const last = rows[rows.length - 1];
    if (last) last.querySelector('.cell-edit')?.click();
  });
}

// ═══════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════

renderIndustriesOverview();
renderCompetitorsOverview();
renderMarketFunctions();
renderAccordions();
renderTables();
renderPersonas();
renderMotion();
renderAccountsTable();

setupSidebar();
setupSectionCollapsibles();
setupAccordions();
setupSearch();
setupCheckboxes();
setupEditMode();
setupAccountsTable();
setupNavObserver();
