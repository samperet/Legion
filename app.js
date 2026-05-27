// ═══════════════════════════════════════════════════════════════════
// CHECKBOX STATE (localStorage)
// ═══════════════════════════════════════════════════════════════════

const checkStore = {
  _p: "legion-chk-",
  get(k) { try { return localStorage.getItem(this._p + k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(this._p + k, v); } catch {} }
};

function getCheckState(key) { return checkStore.get(key) === "true"; }
function setCheckState(key, v) { checkStore.set(key, String(v)); }

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
  ["Mercedes-Benz", "mercedes-benz.com"],
  ["3M", "3m.com"],
  ["Home Depot", "homedepot.com"]
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

const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Life Sciences",
  "CPA, Advisory, and Professional Services",
  "Banking, Financial Services, Wealth, and Insurance",
  "Aerospace, Defense, and Industrial Defense",
  "Industrial, Manufacturing, and Critical Operations"
];

const targetAccounts = [
  // Healthcare
  { account: "Trinity Health",              industry: "Healthcare" },
  { account: "Texas Health Resources",      industry: "Healthcare" },
  { account: "Beth Israel Lahey Health",    industry: "Healthcare" },
  { account: "NewYork-Presbyterian",        industry: "Healthcare" },
  { account: "HCA Healthcare",              industry: "Healthcare" },
  // Life Sciences
  { account: "Pfizer",                      industry: "Life Sciences" },
  { account: "Bristol Myers Squibb",        industry: "Life Sciences" },
  { account: "Novartis",                    industry: "Life Sciences" },
  { account: "Roche",                       industry: "Life Sciences" },
  { account: "Boehringer Ingelheim",        industry: "Life Sciences" },
  { account: "Johnson & Johnson",           industry: "Life Sciences" },
  // CPA / Advisory
  { account: "EY",                          industry: "CPA, Advisory, and Professional Services" },
  { account: "BDO",                         industry: "CPA, Advisory, and Professional Services" },
  { account: "Infosys",                     industry: "CPA, Advisory, and Professional Services" },
  // Banking / Financial
  { account: "LPL Financial",               industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "Franklin Templeton",          industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "Travelers",                   industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "The Hanover Insurance Group", industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "Wells Fargo",                 industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "Perella Weinberg Partners",   industry: "Banking, Financial Services, Wealth, and Insurance" },
  { account: "Integrity Marketing Group",   industry: "Banking, Financial Services, Wealth, and Insurance" },
  // Aerospace / Defense
  { account: "Rheinmetall",                 industry: "Aerospace, Defense, and Industrial Defense" },
  { account: "RTX Corporation",             industry: "Aerospace, Defense, and Industrial Defense" },
  { account: "General Dynamics",            industry: "Aerospace, Defense, and Industrial Defense" },
  { account: "Boeing",                      industry: "Aerospace, Defense, and Industrial Defense" },
  // Industrial
  { account: "Caterpillar",                 industry: "Industrial, Manufacturing, and Critical Operations" },
  { account: "Washington Companies",        industry: "Industrial, Manufacturing, and Critical Operations" },
  { account: "Mercedes-Benz Group",         industry: "Industrial, Manufacturing, and Critical Operations" },
  { account: "3M",                          industry: "Industrial, Manufacturing, and Critical Operations" },
  { account: "Home Depot",                  industry: "Industrial, Manufacturing, and Critical Operations" }
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
    accounts: ["EY", "BDO", "Infosys", "Other advisory and audit firms"],
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
    accounts: ["Caterpillar", "Washington Companies", "Mercedes-Benz Group", "3M", "Home Depot"],
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
  if (!domain) return `<span>${escapeHtml(name)}</span>`;
  const image = `<img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64" alt="" loading="lazy" onerror="this.remove()" />`;
  return `
    <span class="logo-chip">
      <span class="company-logo" style="--logo-color:${logoColor(name)}">
        <span>${escapeHtml(initials(name))}</span>
        ${image}
      </span>
      <span class="logo-name">${escapeHtml(name)}</span>
    </span>`;
}

function findCompanyDomain(name) {
  const cleanName = name.toLowerCase();
  const match = companyDomains.find(([needle]) => cleanName.includes(needle.toLowerCase()));
  return match ? match[1] : "";
}

function initials(name) {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, " ").split(" ").filter((w) => w.length > 1);
  if (words.length === 0) return "ID";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function logoColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
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
    </div>`;
}

function checklistItem(text, checkKey) {
  const done = getCheckState(checkKey);
  return `
    <li class="checklist-item${done ? " is-done" : ""}">
      <input type="checkbox" ${done ? "checked" : ""} data-check-key="${escapeHtml(checkKey)}" aria-label="${escapeHtml(text)}">
      <span>${escapeHtml(text)}</span>
    </li>`;
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
            <strong class="overview-card-title">${escapeHtml(industry.title)}</strong>
            <span class="overview-card-meta">${escapeHtml(industry.meta)}</span>
          </div>
        </div>`
    )
    .join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: TARGET ACCOUNTS (grouped by industry, logo + name only)
// ═══════════════════════════════════════════════════════════════════

function renderAccountsSection() {
  const container = document.querySelector("#accounts-table-container");
  if (!container) return;

  // Update topbar metric
  const countEl = document.querySelector("#account-count");
  if (countEl) countEl.textContent = targetAccounts.length;

  // Group accounts by industry
  const grouped = {};
  INDUSTRY_OPTIONS.forEach((ind) => { grouped[ind] = []; });
  targetAccounts.forEach(({ account, industry }) => {
    if (grouped[industry]) grouped[industry].push(account);
  });

  container.innerHTML = `
    <div class="accounts-groups">
      ${INDUSTRY_OPTIONS
        .filter((ind) => grouped[ind].length > 0)
        .map((ind, i) => `
          <div class="accounts-group">
            <p class="accounts-group-label" style="--accent:${accents[i % accents.length]}">${escapeHtml(ind)}</p>
            ${chips(grouped[ind], { logos: true })}
          </div>`)
        .join("")}
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: MARKET FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function renderMarketFunctions() {
  document.querySelector("#function-grid").innerHTML = marketFunctions
    .map(
      (item, index) => `
        <article class="function-card" style="--accent:${accents[index % accents.length]}">
          <strong>${escapeHtml(item)}</strong>
          <p>${functionDescription(item)}</p>
        </article>`
    )
    .join("");
}

function functionDescription(item) {
  const d = {
    "Governed agent orchestration": "Coordinate agent behavior across tools, systems, and decision points.",
    "Human-in-the-loop workflow execution": "Keep approval, review, and escalation in the operating model.",
    "Enterprise data grounding and unstructured data access": "Use documents, knowledge repositories, records, contracts, and emails safely.",
    "Audit, compliance, and policy enforcement": "Make agent actions reviewable, defensible, and aligned to controls.",
    "Identity, permissions, and secure tool use": "Define what agents can access and where action boundaries sit.",
    "Workflow automation across enterprise systems": "Turn search and analysis into supervised execution."
  };
  return d[item] || "";
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
// RENDER: ACCORDIONS
// ═══════════════════════════════════════════════════════════════════

function accordionCard(item, index, type) {
  const panelId = `${type}-${index}`;
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
      ${detailBlock("Category Description", `<p>${escapeHtml(item.description)}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Representative Competitors", chips(item.competitors, { logos: true }))}
        ${detailBlock("Competitive Functions", list(item.functions))}
        ${detailBlock("Competitive Strengths", list(item.strengths))}
        ${detailBlock("Competitive Weaknesses", list(item.weaknesses))}
      </div>
      ${detailBlock("Legion Positioning", `<p>${escapeHtml(item.positioning)}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Buyer Signals", list(item.buyerQuotes, "quote-list"))}
        ${detailBlock("Primary Buyers", chips(item.buyers))}
      </div>`
    : `
      ${detailBlock("Primary Buyers", chips(item.buyers))}
      ${detailBlock("Industry Problem", `<p>${escapeHtml(item.problem)}</p>`)}
      <div class="detail-grid">
        ${detailBlock("Legion Use Cases", list(item.useCases))}
        ${detailBlock("Buyer Strategy", `<p>${escapeHtml(item.strategy)}</p>`)}
      </div>`;

  return `
    <article class="accordion-card searchable" data-title="${escapeHtml(item.title)}" data-search="${escapeHtml(searchText)}">
      <button class="accordion-trigger" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="accordion-title">
          <strong>${index + 1}. ${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.meta)}</span>
        </span>
        <span class="accordion-meta">${isCompetitor ? "Competitive posture and buyer strategy" : "Accounts, use cases, and buyer motion"}</span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div class="accordion-panel" id="${panelId}" hidden>${panel}</div>
    </article>`;
}

function renderAccordions() {
  document.querySelector("#competitor-list").innerHTML = competitiveCategories
    .map((item, index) => accordionCard(item, index, "competitor")).join("");
  document.querySelector("#industry-list").innerHTML = industries
    .map((item, index) => accordionCard(item, index, "industry")).join("");
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: PERSONAS
// ═══════════════════════════════════════════════════════════════════

function renderPersonas(activeIndex = 0) {
  const tabs = document.querySelector("#persona-tabs");
  const panel = document.querySelector("#persona-panel");
  document.querySelector("#personas").dataset.search = personas
    .map((p) => `${p.title} ${p.concern} ${p.message} ${p.outcome}`).join(" ");

  tabs.innerHTML = personas
    .map(
      (persona, index) => `
        <button class="persona-tab" role="tab" id="persona-tab-${index}" aria-selected="${index === activeIndex}" aria-controls="persona-panel" type="button" data-persona="${index}">
          ${escapeHtml(persona.title)}
        </button>`
    )
    .join("");

  const p = personas[activeIndex];
  panel.innerHTML = `
    <h3>${escapeHtml(p.title)}</h3>
    <div class="persona-point">
      <strong>Core Concern</strong>
      <p>${escapeHtml(p.concern)}</p>
    </div>
    <div class="persona-point">
      <strong>Message</strong>
      <p>${escapeHtml(p.message)}</p>
    </div>
    <div class="persona-point">
      <strong>Desired Outcome</strong>
      <p>${escapeHtml(p.outcome)}</p>
    </div>`;

  tabs.querySelectorAll(".persona-tab").forEach((button) => {
    button.addEventListener("click", () => renderPersonas(Number(button.dataset.persona)));
  });
}

// ═══════════════════════════════════════════════════════════════════
// RENDER: ENTRY MOTION
// ═══════════════════════════════════════════════════════════════════

function renderMotion() {
  document.querySelector("#motion-list").innerHTML = motionPhases
    .map((item, pi) => {
      const doneCount = item.items.filter((_, ii) => getCheckState(`motion-${pi}-${ii}`)).length;
      return `
        <article class="timeline-card" style="--accent:${accents[pi % accents.length]}">
          <span class="phase">${escapeHtml(item.phase)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          ${progressBar(doneCount, item.items.length)}
          <ul class="checklist">
            ${item.items.map((text, ii) => checklistItem(text, `motion-${pi}-${ii}`)).join("")}
          </ul>
        </article>`;
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
      if (target) { setSectionExpanded(target, true); setActiveNav(link); }
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
    while (heading.nextSibling) body.appendChild(heading.nextSibling);

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
    document.querySelectorAll(".section-block").forEach((s) => setSectionExpanded(s, true));
    document.querySelectorAll(".accordion-trigger").forEach((t) => setAccordion(t, true));
    document.querySelectorAll("details.detail-disclosure").forEach((d) => { d.open = true; });
  });

  document.querySelector("#collapse-all").addEventListener("click", () => {
    document.querySelectorAll(".section-block").forEach((s) => setSectionExpanded(s, false));
    document.querySelectorAll(".accordion-trigger").forEach((t) => setAccordion(t, false));
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
      if (isMatch) matches++;
      if (query && isMatch && node.classList.contains("section-block")) setSectionExpanded(node, true);
      if (query && isMatch && node.closest(".section-block")) setSectionExpanded(node.closest(".section-block"), true);
      const trigger = node.querySelector(".accordion-trigger");
      if (trigger && query && isMatch) setAccordion(trigger, true);
    });

    document.querySelectorAll("details.detail-disclosure").forEach((d) => {
      if (!query) return;
      if (d.querySelector(".accordion-card:not(.is-hidden)")) d.open = true;
    });

    status.textContent = query ? `${matches} matching sections for "${input.value.trim()}".` : "Showing the full strategy.";

    const firstVisible = document.querySelector(".section-block:not(.is-hidden)");
    const matchingLink = firstVisible ? document.querySelector(`.side-nav a[href="#${firstVisible.id}"]`) : null;
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
    updateProgress(cb.closest(".timeline-card"));
  });
}

function updateProgress(card) {
  if (!card) return;
  const cbs = [...card.querySelectorAll("input[type='checkbox']")];
  const done = cbs.filter((c) => c.checked).length;
  const pct = cbs.length ? Math.round((done / cbs.length) * 100) : 0;
  const bar = card.querySelector(".progress-bar");
  const label = card.querySelector(".progress-label");
  if (bar) bar.style.width = `${pct}%`;
  if (label) label.textContent = `${done} / ${cbs.length}`;
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
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
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
// INIT
// ═══════════════════════════════════════════════════════════════════

renderIndustriesOverview();
renderAccountsSection();
renderMarketFunctions();
renderAccordions();
renderTables();
renderPersonas();
renderMotion();

setupSidebar();
setupSectionCollapsibles();
setupAccordions();
setupSearch();
setupCheckboxes();
setupNavObserver();
