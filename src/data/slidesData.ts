import { ComparisonRow, CapabilityRow } from '../types/deck';

export const SLIDE_METADATA = [
  {
    id: 1,
    title: 'CLIMORA: BRIDGING THE LAST-MILE CLIMATE ADOPTION GAP',
    subtitle: 'TURNING LOCAL CLIMATE SIGNALS INTO PRACTICAL RESILIENCE ACTION',
    subHeader: 'Satin Finserv Sankalp | Climate Edition 2026',
    category: 'Vision & Architecture',
    shortName: '01. Executive Overview'
  },
  {
    id: 2,
    title: 'THE CLIMATE-LIVELIHOOD BLIND SPOT',
    subtitle: 'THE SILENT THREAT OF UNACTIONABLE RISK DATA',
    subHeader: 'Field Reality & Evidence in Agrarian India',
    category: 'The Problem Statement',
    shortName: '02. Real-World Problem'
  },
  {
    id: 3,
    title: 'CLIMATE-TECH CONVERGENCE',
    subtitle: 'CONNECTING REAL DEVELOPMENTS TO FIELD REALITIES',
    subHeader: '3-Phase Evidence-Backed Shift',
    category: 'Evidence & Shift',
    shortName: '03. News Signals & Evidence'
  },
  {
    id: 4,
    title: 'THE MARKET GAP: INSIGHT vs. ACTION vs. ADAPTATION',
    subtitle: 'STRATEGIC COMPARISON MATRIX',
    subHeader: 'Why Traditional Weather Apps & AI Underwriting Fail Smallholders',
    category: 'Gap Analysis',
    shortName: '04. Market Gap Analysis'
  },
  {
    id: 5,
    title: 'OUR SOLUTION: CLIMORA PLATFORM',
    subtitle: 'A CLIMATE-TO-ACTION COMPANION FOR UNDERSERVED COMMUNITIES',
    subHeader: 'Translating Hyper-Local Signals into 3-Step Action Plans',
    category: 'Our Unique Solution',
    shortName: '05. The Climora Platform'
  },
  {
    id: 6,
    title: 'CLIMORA ENGINE: LIGHTWEIGHT PRE-DEPLOYMENT PIPELINE',
    subtitle: 'TECHNICAL ARCHITECTURE & GATED FLOW',
    subHeader: '4 Isolated Processing Gates & Explainable Risk Scoring',
    category: 'Technical Architecture',
    shortName: '06. Technical Flow & Gates'
  },
  {
    id: 7,
    title: 'DIFFERENTIATION: NOT ANOTHER ALERT',
    subtitle: 'A CLEARER PATH TO FIELD ACTION',
    subHeader: 'Capability Matrix & Strategic Defense',
    category: 'Competitive Edge',
    shortName: '07. Why Climora is Different'
  },
  {
    id: 8,
    title: 'TARGET USERS & B2B/B2G SUSTAINABLE BUSINESS MODEL',
    subtitle: 'FINANCIALLY SUSTAINABLE WITH ZERO BURDEN ON FARMERS',
    subHeader: 'SaaS Dashboards, Resilience Analytics & Micro-Partner Referrals',
    category: 'Business Model',
    shortName: '08. Users & Business Model'
  },
  {
    id: 9,
    title: 'MEASURING RESILIENCE CREATED — NOT JUST TECH DEPLOYED',
    subtitle: 'PROPOSED IMPACT EVALUATION FRAMEWORK & PILOT MATRIX',
    subHeader: 'Reach, Practical Adoption, Financial Access & Loss Avoidance',
    category: 'Impact Metrics',
    shortName: '09. Measurable Impact'
  },
  {
    id: 10,
    title: 'GO-TO-MARKET: START SMALL. LEARN LOCALLY. SCALE WITH EVIDENCE.',
    subtitle: 'PHASED 8-12 WEEK PILOT PLAN (ODISHA BELT)',
    subHeader: 'Discover → Co-Design → Pilot Deployment → Evaluate & Iterate',
    category: 'Go-To-Market',
    shortName: '10. Odisha Pilot Plan'
  },
  {
    id: 11,
    title: '12-MONTH ROADMAP & SATIN FINSERV SANKALP OPPORTUNITY',
    subtitle: 'HOW SANKALP ACCELERATES FIELD EXECUTION & GOVERNANCE',
    subHeader: 'Quarterly Milestones & Dedicated Pilot Allocation',
    category: 'Roadmap & Sankalp',
    shortName: '11. Sankalp Roadmap'
  },
  {
    id: 12,
    title: 'MAKING CLIMATE ACTION CLEAR, LOCAL, AND DOABLE',
    subtitle: 'CLOSING THESIS & PARTNERSHIP INVITATION',
    subHeader: 'Smart Solutions for a Changing Climate',
    category: 'Vision & Contact',
    shortName: '12. Closing & Vision'
  }
];

export const SLIDE_1_STEPS = [
  {
    num: '01',
    title: 'UBIQUITOUS CLIMATE RISKS',
    desc: 'Accelerating weather extremes impacting smallholders across India.',
    color: '#10b981', // Emerald
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30'
  },
  {
    num: '02',
    title: 'ADOPTION BARRIERS',
    desc: 'Proven gaps in finance, tenure, technical knowledge, and local support.',
    color: '#06b6d4', // Cyan
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30'
  },
  {
    num: '03',
    title: 'CAPITAL CONSTRAINTS',
    desc: 'High cost of adaptation capital limiting proactive risk mitigation.',
    color: '#0284c7', // Sky
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30'
  },
  {
    num: '04',
    title: 'THE SERVICE DEFICIT',
    desc: 'Fragmented advisory systems failing to deliver actionable next steps.',
    color: '#0d9488', // Teal
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30'
  },
  {
    num: '05',
    title: 'THE IMPACT GAP',
    desc: 'Alerts sent without measuring actual adoption or financial inclusion.',
    color: '#1e3a8a', // Deep Blue
    bgColor: 'bg-blue-900/15',
    borderColor: 'border-blue-700/30'
  },
  {
    num: '06',
    title: '"ZERO" IMPLEMENTATION FOOTPRINT',
    desc: 'Lightweight, partner-led integration requiring no heavy infrastructure.',
    color: '#0f172a', // Slate Navy
    bgColor: 'bg-slate-900/20',
    borderColor: 'border-slate-800/40'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'LOCAL RISK TRANSLATION',
    conventional: 'Broad regional forecasts without user context.',
    agriAi: 'Analyzes plot risk via satellites for lender credit underwriting.',
    climora: 'Translates hyper-local risk into 3 practical, immediate action steps.'
  },
  {
    dimension: 'FINANCIAL INCLUSION LINK',
    conventional: 'Blind. No link to adaptation finance or insurance.',
    agriAi: 'High. Grants loans based on historical risk for credit rating.',
    climora: 'Directly bridges risk guidance to partner-led resilience micro-products.'
  },
  {
    dimension: 'LAST-MILE ADOPTION DELIVERY',
    conventional: 'Low. Users receive raw generic data without guidance.',
    agriAi: 'Medium. Serves lenders & analysts, not everyday farmer decisions.',
    climora: 'High. Local language (Odia/Hindi), mobile-first 3-step checklist.'
  },
  {
    dimension: 'OUTCOME MEASUREMENT',
    conventional: 'Measures broadcast reach & app download numbers.',
    agriAi: 'Measures loan underwriting speed and portfolio volume.',
    climora: 'Measures verified field adoption & self-reported risk mitigation.'
  }
];

export const CAPABILITY_DATA: CapabilityRow[] = [
  { capability: 'Localized Risk Advisory', genericApps: true, creditAnalytics: true, climora: true },
  { capability: 'Practical Action Planning (3-Step)', genericApps: false, creditAnalytics: false, climora: true },
  { capability: 'Service Navigation (Micro-Agri)', genericApps: false, creditAnalytics: false, climora: true },
  { capability: 'Financial-Partner Referral Link', genericApps: false, creditAnalytics: true, climora: true },
  { capability: 'Zero-Pipeline Overhead Footprint', genericApps: true, creditAnalytics: false, climora: true },
  { capability: 'Verified Outcome Measurement', genericApps: false, creditAnalytics: false, climora: true }
];

export const SCORING_MATRIX: { capability: string; conventional: number; credit: number; climora: number }[] = [
  { capability: 'Detects Covert Micro-Climate Risks', conventional: 1, credit: 2, climora: 5 },
  { capability: 'Delivers Clear Next Actions', conventional: 1, credit: 1, climora: 5 },
  { capability: 'Bridges to Micro-Finance Lines', conventional: 1, credit: 5, climora: 5 },
  { capability: 'Zero Heavy Pipeline Footprint', conventional: 5, credit: 1, climora: 5 },
  { capability: 'Localized Vernacular Guidance', conventional: 2, credit: 1, climora: 5 },
  { capability: 'Measures Real Resilience Adoption', conventional: 1, credit: 2, climora: 5 }
];

export const IMAGES = {
  farmer: '/src/assets/images/farmer_climate_smartphone_1790433282005.jpg',
  earthData: '/src/assets/images/climate_earth_data_mesh_1790433295739.jpg',
  landscape: '/src/assets/images/odisha_rural_resilience_1790433313773.jpg'
};
