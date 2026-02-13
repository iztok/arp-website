// Use Cases Data Structure

export type PanelStatus = 'available' | 'coming-soon' | 'custom';

export interface Panel {
  name: string;
  description: string;
  status: PanelStatus;
}

export interface PanelCategory {
  name: string;
  panels: Panel[];
}

export interface BusinessType {
  slug: string;
  name: string;
  industry: string;
  industrySlug: string;
  metaDescription: string;
  intro: string;
  panelCategories: PanelCategory[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  businessTypes: { slug: string; name: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'briefcase',
    businessTypes: [
      { slug: 'management-consulting', name: 'Management Consulting' },
      { slug: 'it-consulting', name: 'IT Consulting & Advisory' },
      { slug: 'accounting-audit', name: 'Accounting & Audit Firms' },
      { slug: 'law-firms', name: 'Law Firms & Legal Practices' },
      { slug: 'architecture-design', name: 'Architecture & Interior Design' },
      { slug: 'engineering-consulting', name: 'Engineering Consulting' },
      { slug: 'marketing-agencies', name: 'Marketing & Advertising Agencies' },
    ],
  },
  {
    slug: 'technology',
    name: 'Technology & IT',
    icon: 'code',
    businessTypes: [
      { slug: 'software-development', name: 'Software Development' },
      { slug: 'managed-services', name: 'Managed Service Providers' },
      { slug: 'saas-companies', name: 'SaaS Companies' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: 'factory',
    businessTypes: [
      { slug: 'discrete-manufacturing', name: 'Discrete Manufacturing' },
      { slug: 'process-manufacturing', name: 'Process Manufacturing' },
      { slug: 'contract-manufacturing', name: 'Contract Manufacturing' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'heart',
    businessTypes: [
      { slug: 'medical-practices', name: 'Medical Practices' },
      { slug: 'healthcare-services', name: 'Healthcare Services' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services & Insurance',
    icon: 'chart',
    businessTypes: [
      { slug: 'wealth-management', name: 'Wealth Management' },
      { slug: 'insurance-brokers', name: 'Insurance Brokers' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    icon: 'shopping',
    businessTypes: [
      { slug: 'retail-chains', name: 'Retail Chains' },
      { slug: 'ecommerce', name: 'E-commerce Operations' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & Property',
    icon: 'building',
    businessTypes: [
      { slug: 'property-management', name: 'Property Management' },
      { slug: 'real-estate-agencies', name: 'Real Estate Agencies' },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction & Engineering',
    icon: 'hardhat',
    businessTypes: [
      { slug: 'general-contractors', name: 'General Contractors' },
      { slug: 'specialty-contractors', name: 'Specialty Contractors' },
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Transportation',
    icon: 'truck',
    businessTypes: [
      { slug: 'freight-logistics', name: 'Freight & Logistics' },
      { slug: 'fleet-management', name: 'Fleet Management' },
    ],
  },
  {
    slug: 'education',
    name: 'Education & Training',
    icon: 'graduation',
    businessTypes: [
      { slug: 'training-providers', name: 'Training Providers' },
      { slug: 'educational-institutions', name: 'Educational Institutions' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    icon: 'bed',
    businessTypes: [
      { slug: 'hotels-resorts', name: 'Hotels & Resorts' },
      { slug: 'tour-operators', name: 'Tour Operators' },
    ],
  },
  {
    slug: 'media-creative',
    name: 'Media, Marketing & Creative',
    icon: 'megaphone',
    businessTypes: [
      { slug: 'media-production', name: 'Media Production' },
      { slug: 'creative-agencies', name: 'Creative Agencies' },
    ],
  },
];

export const businessTypes: Record<string, BusinessType> = {
  'management-consulting': {
    slug: 'management-consulting',
    name: 'Management Consulting',
    industry: 'Professional Services',
    industrySlug: 'professional-services',
    metaDescription: 'Custom business software for management consulting firms. CRM, project tracking, resource management, and billing systems built on your infrastructure.',
    intro: 'Management consulting firms need software that handles complex client relationships, tracks utilization across practices, and supports partnership-level reporting. Generic tools fall short. We build systems that match how your firm actually operates.',
    panelCategories: [
      {
        name: 'Operations',
        panels: [
          { name: 'Ticketing & Request Management', description: 'Internal request routing between project teams and support functions. Tracks partner requests, admin tickets, and knowledge queries.', status: 'available' },
          { name: 'Approval Workflows', description: 'Engagement approvals, budget sign-offs, expense authorizations, and resource allocation requests with configurable chains.', status: 'available' },
          { name: 'Task & Project Management', description: 'Engagement tracking, workstream management, deliverable timelines, and team assignments.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Customer & Sales',
        panels: [
          { name: 'CRM / Client Management', description: 'Client relationship tracking, engagement history, key contacts, account health scoring, and cross-sell opportunity management.', status: 'available' },
          { name: 'Sales Pipeline & Deals', description: 'Track proposals from initial conversation through pricing to signed engagement. Stage-based pipeline with win/loss analysis.', status: 'coming-soon' },
          { name: 'Quote & Proposal Builder', description: 'Templated proposals with rate cards, scope builders, and approval workflows. Generate professional proposals in minutes.', status: 'coming-soon' },
        ],
      },
      {
        name: 'HR & People',
        panels: [
          { name: 'Employee Directory', description: 'Consultant profiles, skills matrices, certifications, availability status, and project history for bench management.', status: 'available' },
          { name: 'Leave & Absence Management', description: 'PTO tracking, project-aware leave planning, and utilization impact analysis.', status: 'coming-soon' },
          { name: 'Training & Certification Tracking', description: 'Track required certifications, continuing education, methodology training, and skill development paths.', status: 'custom' },
        ],
      },
      {
        name: 'Finance & Admin',
        panels: [
          { name: 'Invoice & Billing', description: 'Time-based and milestone-based invoicing, rate management, and accounts receivable tracking.', status: 'coming-soon' },
          { name: 'Expense Management', description: 'Project-linked expense submission, approval chains, policy enforcement, and reimbursement tracking.', status: 'coming-soon' },
          { name: 'Contract Management', description: 'Engagement letters, NDAs, MSAs, and SOWs with renewal tracking and version management.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Data & Content',
        panels: [
          { name: 'Document Management', description: 'Engagement documents, deliverables, templates, and methodology libraries with version control.', status: 'available' },
          { name: 'Knowledge Base', description: 'Internal methodology guides, case study library, proposal boilerplates, and institutional knowledge.', status: 'available' },
          { name: 'Reporting & Analytics Dashboard', description: 'Utilization rates, revenue by client, pipeline value, proposal win rates, and practice-level P&L.', status: 'available' },
          { name: 'Audit Trail & Compliance Log', description: 'Full activity logging for data access, document changes, and client communication compliance.', status: 'available' },
        ],
      },
    ],
  },
  'it-consulting': {
    slug: 'it-consulting',
    name: 'IT Consulting & Advisory',
    industry: 'Professional Services',
    industrySlug: 'professional-services',
    metaDescription: 'Custom software for IT consulting firms. SLA tracking, technical resource management, client portals, and project delivery systems.',
    intro: 'IT consulting firms juggle technical complexity with client delivery. You need systems that track SLAs, manage technical talent across projects, and give clients visibility without compromising security. We build exactly that.',
    panelCategories: [
      {
        name: 'Operations',
        panels: [
          { name: 'Ticketing & Request Management', description: 'Technical support escalation, client issue tracking, change request management, and SLA-linked response tracking.', status: 'available' },
          { name: 'Approval Workflows', description: 'Change management approvals, architecture review sign-offs, and security exception workflows.', status: 'available' },
          { name: 'Task & Project Management', description: 'Sprint/iteration tracking, technical deliverable management, and cross-team dependency mapping.', status: 'coming-soon' },
          { name: 'SLA Monitoring', description: 'Real-time SLA compliance tracking across client engagements with breach alerts and escalation rules.', status: 'available' },
        ],
      },
      {
        name: 'Customer & Sales',
        panels: [
          { name: 'CRM / Client Management', description: 'Account management for technology partnerships, vendor relationships, and advisory engagements.', status: 'available' },
          { name: 'Customer Portal', description: 'Client-facing portal for project status, document sharing, ticket submission, and communication history.', status: 'available' },
          { name: 'Sales Pipeline & Deals', description: 'Technology assessment and implementation deal tracking, multi-phase opportunity management.', status: 'coming-soon' },
        ],
      },
      {
        name: 'HR & People',
        panels: [
          { name: 'Employee Directory', description: 'Technical skill profiles, technology stack expertise, certification status, and project allocation.', status: 'available' },
          { name: 'Applicant Tracking (ATS)', description: 'Recruit technical consultants with skill-based filtering, coding assessments, and pipeline management.', status: 'coming-soon' },
          { name: 'Training & Certification Tracking', description: 'Track vendor certifications (AWS, Azure, Google Cloud, Cisco, etc.), renewal dates, and training budgets.', status: 'custom' },
        ],
      },
      {
        name: 'Finance & Admin',
        panels: [
          { name: 'Invoice & Billing', description: 'Time & materials billing, retainer management, and multi-rate invoicing across seniority levels.', status: 'coming-soon' },
          { name: 'Contract Management', description: 'SOWs, SLAs, licensing agreements, and vendor contracts with automated renewal alerts.', status: 'coming-soon' },
          { name: 'Vendor / Supplier Management', description: 'Technology vendor tracking, license management, and partnership tier monitoring.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Data & Content',
        panels: [
          { name: 'Document Management', description: 'Architecture documents, technical specifications, runbooks, and client documentation libraries.', status: 'available' },
          { name: 'Knowledge Base', description: 'Technical playbooks, solution patterns, troubleshooting guides, and internal best practices.', status: 'available' },
          { name: 'Reporting & Analytics Dashboard', description: 'Utilization, project profitability, SLA compliance rates, and pipeline forecasting.', status: 'available' },
          { name: 'Audit Trail & Compliance Log', description: 'Change tracking, access logging, and audit documentation for regulated clients.', status: 'available' },
        ],
      },
    ],
  },
  'law-firms': {
    slug: 'law-firms',
    name: 'Law Firms & Legal Practices',
    industry: 'Professional Services',
    industrySlug: 'professional-services',
    metaDescription: 'Custom software for law firms. Matter management, legal billing, client portals, conflict checking, and document management systems.',
    intro: 'Law firms have unique requirements around matter management, ethical walls, trust accounting, and legal-specific billing. Off-the-shelf practice management software rarely fits. We build systems tailored to how your firm practices.',
    panelCategories: [
      {
        name: 'Operations',
        panels: [
          { name: 'Ticketing & Request Management', description: 'Internal service requests, conflict check workflows, and administrative support routing.', status: 'available' },
          { name: 'Approval Workflows', description: 'New matter intake approvals, billing write-offs, conflict waivers, and engagement terms sign-off.', status: 'available' },
        ],
      },
      {
        name: 'Customer & Sales',
        panels: [
          { name: 'CRM / Client Management', description: 'Client and matter management, contact relationships, referral source tracking, and business development activities.', status: 'available' },
          { name: 'Customer Portal', description: 'Secure client portal for matter status, document sharing, invoice review, and communication.', status: 'available' },
        ],
      },
      {
        name: 'HR & People',
        panels: [
          { name: 'Employee Directory', description: 'Attorney profiles, practice areas, bar admissions, language skills, and matter experience.', status: 'available' },
          { name: 'Applicant Tracking (ATS)', description: 'Lateral hire and associate recruiting, law school on-campus interview tracking, and offer management.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Finance & Admin',
        panels: [
          { name: 'Invoice & Billing', description: 'Legal-specific billing with LEDES/UTBMS codes, e-billing integration, trust accounting, and timekeeper rate management.', status: 'coming-soon' },
          { name: 'Contract Management', description: 'Engagement letters, retainer agreements, outside counsel guidelines, and NDA management.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Data & Content',
        panels: [
          { name: 'Document Management', description: 'Matter-organized document management with ethical wall enforcement, retention policies, and conflict screening.', status: 'available' },
          { name: 'Knowledge Base', description: 'Precedent library, legal research summaries, practice guides, and template banks.', status: 'available' },
          { name: 'Reporting & Analytics Dashboard', description: 'Matter profitability, timekeeper utilization, realization rates, origination credits, and practice area performance.', status: 'available' },
          { name: 'Audit Trail & Compliance Log', description: 'Ethical compliance logging, conflict check records, and matter access audit trails.', status: 'available' },
        ],
      },
      {
        name: 'Industry-Specific',
        panels: [
          { name: 'Case Management', description: 'Full matter lifecycle tracking with deadlines, court dates, statutes of limitation, and milestone management.', status: 'custom' },
        ],
      },
    ],
  },
  'accounting-audit': {
    slug: 'accounting-audit',
    name: 'Accounting & Audit Firms',
    industry: 'Professional Services',
    industrySlug: 'professional-services',
    metaDescription: 'Custom software for accounting and audit firms. Engagement management, workpaper systems, client portals, and compliance tracking.',
    intro: 'Accounting firms need systems that handle engagement workflows, manage workpapers securely, track deadlines across hundreds of clients, and support quality review processes. We build software that fits your firm methodology.',
    panelCategories: [
      {
        name: 'Operations',
        panels: [
          { name: 'Ticketing & Request Management', description: 'Client information request tracking, audit query management, and internal review workflows.', status: 'available' },
          { name: 'Approval Workflows', description: 'Engagement sign-offs, audit opinion approvals, fee quote authorizations, and quality review chains.', status: 'available' },
          { name: 'Task & Project Management', description: 'Audit planning, fieldwork tracking, review status, and deadline management across engagements.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Customer & Sales',
        panels: [
          { name: 'CRM / Client Management', description: 'Client entity management, engagement history, service mix tracking, and relationship mapping across entities.', status: 'available' },
          { name: 'Customer Portal', description: 'Secure portal for document exchange, information requests, and engagement status visibility.', status: 'available' },
          { name: 'Sales Pipeline & Deals', description: 'Track new client proposals, recurring engagement renewals, and cross-service opportunities.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Finance & Admin',
        panels: [
          { name: 'Invoice & Billing', description: 'WIP management, fixed-fee and hourly billing, write-down tracking, and accounts receivable aging.', status: 'coming-soon' },
          { name: 'Contract Management', description: 'Engagement letters, independence confirmations, and regulatory filing deadlines.', status: 'coming-soon' },
        ],
      },
      {
        name: 'Data & Content',
        panels: [
          { name: 'Document Management', description: 'Workpaper management, audit evidence storage, and secure client document exchange with retention policies.', status: 'available' },
          { name: 'Knowledge Base', description: 'Accounting standards library, audit methodology guides, and template workpapers.', status: 'available' },
          { name: 'Reporting & Analytics Dashboard', description: 'Engagement profitability, staff utilization, billing realization rates, and deadline compliance.', status: 'available' },
          { name: 'Audit Trail & Compliance Log', description: 'Immutable audit trail for regulatory compliance, peer review readiness, and quality control documentation.', status: 'available' },
        ],
      },
    ],
  },
};

export function getBusinessType(slug: string): BusinessType | undefined {
  return businessTypes[slug];
}

export function getIndustry(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getAllBusinessTypeSlugs(): string[] {
  return Object.keys(businessTypes);
}
