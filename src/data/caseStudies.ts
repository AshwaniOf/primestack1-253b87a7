export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: string;
  quoteName?: string;
  quoteRole?: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-digital-transformation",
    title: "Healthcare Network Unifies Patient Data Across 50+ Clinics",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    service: "Health Cloud",
    challenge: "A major regional healthcare network with 50+ clinics struggled with fragmented patient data across multiple legacy systems, resulting in delayed care coordination and poor patient satisfaction scores.",
    solution: "PrimeStack implemented Salesforce Health Cloud with a unified Patient 360 view, automated care plans, and real-time EHR integration across all facilities. We built custom telehealth workflows and HIPAA-compliant data architecture.",
    results: [
      "Patient satisfaction scores improved by 42%",
      "Care coordination time reduced by 60%",
      "30% reduction in redundant diagnostic tests",
      "Seamless data flow across all 50+ clinics",
    ],
    quote: "PrimeStack transformed how we deliver care. Our clinicians now have a complete picture of every patient at their fingertips.",
    quoteName: "Dr. Sarah Mitchell",
    quoteRole: "Chief Medical Officer",
    metrics: [
      { label: "Patient Satisfaction", value: "+42%" },
      { label: "Coordination Time", value: "-60%" },
      { label: "Clinics Connected", value: "50+" },
    ],
  },
  {
    slug: "fintech-sales-acceleration",
    title: "FinTech Firm Triples Pipeline Visibility in 90 Days",
    client: "Growth-Stage FinTech Company",
    industry: "Financial Services",
    service: "Sales Cloud",
    challenge: "A rapidly growing FinTech company had no visibility into their sales pipeline. Reps used spreadsheets, forecasting was guesswork, and deals were falling through the cracks due to lack of follow-up automation.",
    solution: "PrimeStack deployed Sales Cloud with AI-powered lead scoring, custom opportunity pipelines, CPQ for complex pricing models, and real-time forecasting dashboards for leadership.",
    results: [
      "Pipeline visibility increased by 300%",
      "Quote-to-cash cycle reduced by 55%",
      "Win rate improved by 28%",
      "Revenue forecasting accuracy reached 94%",
    ],
    quote: "We went from flying blind to having crystal-clear pipeline visibility. The ROI was evident within the first quarter.",
    quoteName: "James Chen",
    quoteRole: "VP of Sales",
    metrics: [
      { label: "Pipeline Visibility", value: "3x" },
      { label: "Win Rate", value: "+28%" },
      { label: "Forecast Accuracy", value: "94%" },
    ],
  },
  {
    slug: "university-enrollment-growth",
    title: "University Boosts Enrollment 25% with Student Lifecycle Platform",
    client: "Private University",
    industry: "Education",
    service: "Education Cloud",
    challenge: "A private university faced declining enrollment and had no unified system to manage the student journey from recruitment through alumni engagement. Prospective students were lost in manual processes.",
    solution: "PrimeStack implemented Education Cloud with automated recruitment campaigns, a streamlined admissions portal, Student Success Hub for at-risk identification, and alumni engagement tools.",
    results: [
      "Enrollment increased by 25% year-over-year",
      "Application processing time reduced by 70%",
      "Student retention improved by 18%",
      "Alumni donation rate doubled",
    ],
    quote: "The Student Success Hub alone has been transformative. We can now proactively support students before they fall behind.",
    quoteName: "Dr. Patricia Okonkwo",
    quoteRole: "Dean of Student Affairs",
    metrics: [
      { label: "Enrollment Growth", value: "+25%" },
      { label: "Processing Time", value: "-70%" },
      { label: "Retention", value: "+18%" },
    ],
  },
  {
    slug: "retail-field-team-optimization",
    title: "CPG Brand Achieves 60% Field Productivity Jump",
    client: "Global Consumer Goods Brand",
    industry: "Consumer Goods",
    service: "Consumer Goods Cloud",
    challenge: "A global CPG brand had no real-time visibility into retail store execution. Field reps used paper-based processes, planogram compliance was unmeasured, and trade promotion ROI was unknown.",
    solution: "PrimeStack deployed Consumer Goods Cloud with intelligent visit planning, image-recognition planogram compliance, trade promotion management, and executive analytics dashboards.",
    results: [
      "Field team productivity increased by 60%",
      "Planogram compliance improved to 92%",
      "Trade promotion ROI visibility for the first time",
      "Store visit coverage expanded by 40%",
    ],
    quote: "Our field teams are now data-driven. The transformation in retail execution has directly impacted our bottom line.",
    quoteName: "Maria Santos",
    quoteRole: "Director of Retail Operations",
    metrics: [
      { label: "Productivity", value: "+60%" },
      { label: "Compliance", value: "92%" },
      { label: "Coverage", value: "+40%" },
    ],
  },
  {
    slug: "insurance-ai-automation",
    title: "Insurance Company Cuts Manual Processing 80% with Agentic AI",
    client: "National Insurance Provider",
    industry: "Insurance",
    service: "Agentic AI",
    challenge: "A national insurance provider was overwhelmed with manual claims processing, policy inquiries, and agent workload. Response times were slow and customer churn was increasing.",
    solution: "PrimeStack implemented Agentforce with autonomous AI agents for claims triage, policy Q&A, and renewal management. Custom LLM integrations handled complex underwriting workflows.",
    results: [
      "Manual processing reduced by 80%",
      "Average response time dropped from 48 hours to 2 hours",
      "Customer retention improved by 22%",
      "Agent capacity increased by 3x",
    ],
    quote: "The AI agents handle routine work so our team can focus on complex cases. It's like adding 50 team members overnight.",
    quoteName: "Robert Kimani",
    quoteRole: "Chief Operations Officer",
    metrics: [
      { label: "Manual Work", value: "-80%" },
      { label: "Response Time", value: "2hrs" },
      { label: "Retention", value: "+22%" },
    ],
  },
];
