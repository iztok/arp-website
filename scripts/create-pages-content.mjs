#!/usr/bin/env node
/**
 * Script to create page content in Storyblok with rate limiting
 */

const SPACE_ID = '290007469041361';
const API_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const API_BASE = 'https://mapi.storyblok.com/v1';

if (!API_TOKEN) {
  console.error('Error: STORYBLOK_MANAGEMENT_TOKEN environment variable is required');
  process.exit(1);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function apiRequest(method, endpoint, body = null) {
  const options = {
    method,
    headers: {
      'Authorization': API_TOKEN,
      'Content-Type': 'application/json',
    },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_BASE}${endpoint}`, options);

  if (response.status === 429) {
    console.log('  Rate limited, waiting 2s...');
    await delay(2000);
    return apiRequest(method, endpoint, body);
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error ${response.status}: ${text}`);
  }
  return response.json();
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// How It Works Page
const howItWorksPage = {
  story: {
    name: 'How It Works',
    slug: 'how-it-works',
    content: {
      component: 'page',
      title: 'How It Works - AgileRP',
      body: [
        {
          _uid: uuid(),
          component: 'page_hero',
          headline: 'From conversation to ownership in weeks, not months',
          subheadline: "We don't just build software—we transfer capability. Here's how we work together.",
        },
        {
          _uid: uuid(),
          component: 'process_timeline',
          headline: 'The Three Phases',
          phases: [
            {
              _uid: uuid(),
              component: 'process_phase',
              phase_number: '1',
              title: 'Discover',
              duration: 'Week 1-2',
              icon: 'magnifying-glass',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Deep-dive into your processes and pain points' },
                { _uid: uuid(), component: 'text_item', text: 'Map your existing systems and data sources' },
                { _uid: uuid(), component: 'text_item', text: 'Define scope, success criteria, and milestones' },
                { _uid: uuid(), component: 'text_item', text: 'Identify quick wins and long-term architecture' },
              ],
              involvement: '2-3 discovery sessions with key stakeholders',
              deliverable: 'Solution blueprint + project roadmap',
            },
            {
              _uid: uuid(),
              component: 'process_phase',
              phase_number: '2',
              title: 'Build',
              duration: 'Weeks 3-8 (varies)',
              icon: 'construction',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Architects design the system within Laravel + Filament' },
                { _uid: uuid(), component: 'text_item', text: 'AI accelerates routine code generation' },
                { _uid: uuid(), component: 'text_item', text: 'Weekly demos and feedback loops' },
                { _uid: uuid(), component: 'text_item', text: 'Iterative refinement based on real usage' },
              ],
              involvement: 'Weekly 30-min review sessions',
              deliverable: 'Working application deployed on your infrastructure',
            },
            {
              _uid: uuid(),
              component: 'process_phase',
              phase_number: '3',
              title: 'Own',
              duration: 'Ongoing',
              icon: 'key',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Full code handover with documentation' },
                { _uid: uuid(), component: 'text_item', text: 'Training sessions for your team' },
                { _uid: uuid(), component: 'text_item', text: 'Knowledge transfer so you can maintain and extend' },
                { _uid: uuid(), component: 'text_item', text: 'Optional maintenance retainer if you want ongoing support' },
              ],
              involvement: 'Training sessions, optional retainer relationship',
              deliverable: 'Complete ownership + internal capability',
            },
          ],
        },
        {
          _uid: uuid(),
          component: 'two_column_section',
          headline: 'What You Get',
          left_title: 'Deliverables',
          left_items: [
            { _uid: uuid(), component: 'text_item', text: 'Complete source code (Laravel + Filament)' },
            { _uid: uuid(), component: 'text_item', text: 'Deployed on your infrastructure' },
            { _uid: uuid(), component: 'text_item', text: 'Technical documentation' },
            { _uid: uuid(), component: 'text_item', text: 'User training materials' },
            { _uid: uuid(), component: 'text_item', text: 'Admin access and credentials' },
            { _uid: uuid(), component: 'text_item', text: 'Git repository with full history' },
          ],
          right_title: 'Ongoing Options',
          right_items: [
            { _uid: uuid(), component: 'text_item', text: 'Maintenance retainer (bug fixes, updates)' },
            { _uid: uuid(), component: 'text_item', text: 'Feature development sprints' },
            { _uid: uuid(), component: 'text_item', text: 'Training for new team members' },
            { _uid: uuid(), component: 'text_item', text: 'Architecture consulting' },
            { _uid: uuid(), component: 'text_item', text: 'Priority support SLA' },
          ],
        },
        {
          _uid: uuid(),
          component: 'comparison_table',
          headline: 'What Makes This Different',
          columns: [
            { _uid: uuid(), component: 'table_column', title: 'Traditional Agency', highlight: false },
            { _uid: uuid(), component: 'table_column', title: 'SaaS Product', highlight: false },
            { _uid: uuid(), component: 'table_column', title: 'In-house Team', highlight: false },
            { _uid: uuid(), component: 'table_column', title: 'AgileRP', highlight: true },
          ],
          rows: [
            {
              _uid: uuid(), component: 'table_row', label: 'You own the code',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Sometimes', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'Never', type: 'no' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes', type: 'yes' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes', type: 'yes' },
              ],
            },
            {
              _uid: uuid(), component: 'table_row', label: 'Runs on your servers',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Depends', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'No', type: 'no' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes', type: 'yes' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes', type: 'yes' },
              ],
            },
            {
              _uid: uuid(), component: 'table_row', label: 'AI-accelerated',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Rarely', type: 'no' },
                { _uid: uuid(), component: 'table_cell', value: 'Maybe', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'Rarely', type: 'no' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes', type: 'yes' },
              ],
            },
            {
              _uid: uuid(), component: 'table_row', label: 'Maintainable architecture',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Varies', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'N/A', type: 'text' },
                { _uid: uuid(), component: 'table_cell', value: 'Varies', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'Yes (Laravel patterns)', type: 'yes' },
              ],
            },
            {
              _uid: uuid(), component: 'table_row', label: 'Time to value',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Months', type: 'text' },
                { _uid: uuid(), component: 'table_cell', value: 'Days', type: 'text' },
                { _uid: uuid(), component: 'table_cell', value: 'Months', type: 'text' },
                { _uid: uuid(), component: 'table_cell', value: 'Weeks', type: 'text' },
              ],
            },
            {
              _uid: uuid(), component: 'table_row', label: 'Vendor lock-in',
              values: [
                { _uid: uuid(), component: 'table_cell', value: 'Medium', type: 'partial' },
                { _uid: uuid(), component: 'table_cell', value: 'High', type: 'no' },
                { _uid: uuid(), component: 'table_cell', value: 'None', type: 'yes' },
                { _uid: uuid(), component: 'table_cell', value: 'None', type: 'yes' },
              ],
            },
          ],
        },
        {
          _uid: uuid(),
          component: 'faq_section',
          headline: 'Frequently Asked Questions',
          items: [
            { _uid: uuid(), component: 'faq_item', question: 'How long does a typical project take?', answer: 'Most projects go live within 4-8 weeks. Complex systems may take longer, but we aim for usable increments every 2 weeks.' },
            { _uid: uuid(), component: 'faq_item', question: 'What if we need changes after handover?', answer: "The code is yours—your team can modify it, or we can help via a maintenance retainer." },
            { _uid: uuid(), component: 'faq_item', question: 'Do we need technical staff?', answer: 'Not initially. We handle everything. For long-term maintenance, we can train your team or provide ongoing support.' },
            { _uid: uuid(), component: 'faq_item', question: 'What infrastructure do we need?', answer: 'Standard PHP hosting (your servers, AWS, DigitalOcean, etc.). We help you set this up.' },
            { _uid: uuid(), component: 'faq_item', question: 'Is the framework really open source?', answer: 'Yes. MIT licensed. No hidden fees, no proprietary lock-in.' },
          ],
        },
        {
          _uid: uuid(),
          component: 'simple_cta',
          headline: "Ready to build something you'll actually own?",
          primary_cta_text: 'Book a Discovery Call',
          primary_cta_link: { url: '/demo', linktype: 'url' },
        },
      ],
    },
  },
  publish: 1,
};

// Use Cases Page
const useCasesPage = {
  story: {
    name: 'Use Cases',
    slug: 'use-cases',
    content: {
      component: 'page',
      title: 'Use Cases - AgileRP',
      body: [
        {
          _uid: uuid(),
          component: 'page_hero',
          headline: "Built for the software you can't buy off the shelf",
          subheadline: "When spreadsheets break and SaaS doesn't fit, AgileRP builds exactly what your business needs.",
        },
        {
          _uid: uuid(),
          component: 'use_case_tabs',
          headline: 'By Application Type',
          tabs: [
            {
              _uid: uuid(),
              component: 'use_case_tab',
              tab_id: 'operations',
              tab_label: 'Operations & Workflow',
              icon: 'gears',
              builds: [
                { _uid: uuid(), component: 'text_item', text: 'Approval workflows' },
                { _uid: uuid(), component: 'text_item', text: 'Inventory management' },
                { _uid: uuid(), component: 'text_item', text: 'Asset tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Quality control systems' },
                { _uid: uuid(), component: 'text_item', text: 'Scheduling and dispatch' },
              ],
              example_title: 'Example scenario:',
              example_text: 'A logistics company replaced 12 spreadsheets with a single dispatch and tracking system. Drivers update status from mobile, dispatchers see real-time dashboards.',
            },
            {
              _uid: uuid(),
              component: 'use_case_tab',
              tab_id: 'data',
              tab_label: 'Data & Reporting',
              icon: 'chart',
              builds: [
                { _uid: uuid(), component: 'text_item', text: 'Custom dashboards' },
                { _uid: uuid(), component: 'text_item', text: 'KPI tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Data aggregation from multiple sources' },
                { _uid: uuid(), component: 'text_item', text: 'Automated reporting' },
                { _uid: uuid(), component: 'text_item', text: 'Audit trails' },
              ],
              example_title: 'Example scenario:',
              example_text: 'A finance team consolidated data from 5 ERPs into a unified reporting dashboard with automated weekly exports.',
            },
            {
              _uid: uuid(),
              component: 'use_case_tab',
              tab_id: 'crm',
              tab_label: 'Customer Management',
              icon: 'people',
              builds: [
                { _uid: uuid(), component: 'text_item', text: 'Custom CRM systems' },
                { _uid: uuid(), component: 'text_item', text: 'Client portals' },
                { _uid: uuid(), component: 'text_item', text: 'Case management' },
                { _uid: uuid(), component: 'text_item', text: 'Communication tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Service request systems' },
              ],
              example_title: 'Example scenario:',
              example_text: 'A professional services firm built a client portal where customers submit requests, track progress, and access deliverables—all connected to internal workflow.',
            },
            {
              _uid: uuid(),
              component: 'use_case_tab',
              tab_id: 'compliance',
              tab_label: 'Compliance & Docs',
              icon: 'clipboard',
              builds: [
                { _uid: uuid(), component: 'text_item', text: 'Document management' },
                { _uid: uuid(), component: 'text_item', text: 'Compliance tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Certification management' },
                { _uid: uuid(), component: 'text_item', text: 'Audit preparation tools' },
                { _uid: uuid(), component: 'text_item', text: 'Policy management' },
              ],
              example_title: 'Example scenario:',
              example_text: 'A manufacturing company built a compliance system that tracks certifications, schedules renewals, and generates audit-ready reports automatically.',
            },
            {
              _uid: uuid(),
              component: 'use_case_tab',
              tab_id: 'internal',
              tab_label: 'Internal Tools',
              icon: 'wrench',
              builds: [
                { _uid: uuid(), component: 'text_item', text: 'Employee onboarding systems' },
                { _uid: uuid(), component: 'text_item', text: 'Resource booking' },
                { _uid: uuid(), component: 'text_item', text: 'Knowledge bases' },
                { _uid: uuid(), component: 'text_item', text: 'Internal request systems' },
                { _uid: uuid(), component: 'text_item', text: 'Configuration management' },
              ],
              example_title: 'Example scenario:',
              example_text: 'An HR team automated their onboarding process—new hires get a personalized checklist, managers get notifications, IT gets provisioning requests automatically.',
            },
          ],
        },
        {
          _uid: uuid(),
          component: 'industry_grid',
          headline: 'By Industry',
          industries: [
            {
              _uid: uuid(), component: 'industry_card', name: 'Manufacturing',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Production tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Quality control' },
                { _uid: uuid(), component: 'text_item', text: 'Inventory management' },
                { _uid: uuid(), component: 'text_item', text: 'Supplier portals' },
                { _uid: uuid(), component: 'text_item', text: 'Maintenance scheduling' },
              ],
            },
            {
              _uid: uuid(), component: 'industry_card', name: 'Professional Services',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Client portals' },
                { _uid: uuid(), component: 'text_item', text: 'Project tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Time & billing' },
                { _uid: uuid(), component: 'text_item', text: 'Resource allocation' },
                { _uid: uuid(), component: 'text_item', text: 'Proposal management' },
              ],
            },
            {
              _uid: uuid(), component: 'industry_card', name: 'Healthcare & Life Sciences',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Patient management' },
                { _uid: uuid(), component: 'text_item', text: 'Compliance tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Clinical workflows' },
                { _uid: uuid(), component: 'text_item', text: 'Audit preparation' },
                { _uid: uuid(), component: 'text_item', text: 'Research data management' },
              ],
            },
            {
              _uid: uuid(), component: 'industry_card', name: 'Finance & Insurance',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Claims processing' },
                { _uid: uuid(), component: 'text_item', text: 'Underwriting tools' },
                { _uid: uuid(), component: 'text_item', text: 'Compliance dashboards' },
                { _uid: uuid(), component: 'text_item', text: 'Client reporting' },
                { _uid: uuid(), component: 'text_item', text: 'Risk assessment' },
              ],
            },
            {
              _uid: uuid(), component: 'industry_card', name: 'Logistics & Distribution',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Fleet management' },
                { _uid: uuid(), component: 'text_item', text: 'Dispatch systems' },
                { _uid: uuid(), component: 'text_item', text: 'Warehouse operations' },
                { _uid: uuid(), component: 'text_item', text: 'Delivery tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Supplier coordination' },
              ],
            },
            {
              _uid: uuid(), component: 'industry_card', name: 'Education & Training',
              items: [
                { _uid: uuid(), component: 'text_item', text: 'Course management' },
                { _uid: uuid(), component: 'text_item', text: 'Student tracking' },
                { _uid: uuid(), component: 'text_item', text: 'Certification systems' },
                { _uid: uuid(), component: 'text_item', text: 'Resource scheduling' },
                { _uid: uuid(), component: 'text_item', text: 'Assessment tools' },
              ],
            },
          ],
        },
        {
          _uid: uuid(),
          component: 'callout_box',
          headline: 'What all these have in common:',
          items: [
            { _uid: uuid(), component: 'text_item', text: 'Too specific for generic SaaS' },
            { _uid: uuid(), component: 'text_item', text: 'Too important for spreadsheets' },
            { _uid: uuid(), component: 'text_item', text: 'Need to connect to existing systems' },
            { _uid: uuid(), component: 'text_item', text: 'Require ownership and control' },
            { _uid: uuid(), component: 'text_item', text: 'Change as the business evolves' },
          ],
          footer_text: 'This is where AgileRP fits.',
        },
        {
          _uid: uuid(),
          component: 'simple_cta',
          headline: "Don't see your use case?",
          copy: "We've built software for dozens of industries and applications. If it's an internal business tool, we can probably help.",
          primary_cta_text: "Let's Talk About Your Needs",
          primary_cta_link: { url: '/demo', linktype: 'url' },
        },
      ],
    },
  },
  publish: 1,
};

// Team Page
const teamPage = {
  story: {
    name: 'Team',
    slug: 'team',
    content: {
      component: 'page',
      title: 'Team - AgileRP',
      body: [
        {
          _uid: uuid(),
          component: 'page_hero',
          headline: '70+ engineers. One mission: software you own.',
          subheadline: "AgileRP is built by Agiledrop—a team that's been delivering enterprise software since 2013.",
        },
        {
          _uid: uuid(),
          component: 'team_section',
          headline: 'Leadership',
          members: [
            { _uid: uuid(), component: 'team_member', name: 'Iztok', role: 'Managing Director', focus: 'Strategy, client relationships' },
            { _uid: uuid(), component: 'team_member', name: 'Boštjan', role: 'Development Director', focus: 'Technical architecture, engineering standards' },
            { _uid: uuid(), component: 'team_member', name: 'Aleš', role: 'Head of Client Services', focus: 'Project scoping, client success' },
            { _uid: uuid(), component: 'team_member', name: 'Jure', role: 'Client Adviser', focus: 'Discovery, solution design' },
            { _uid: uuid(), component: 'team_member', name: 'Domen', role: 'Head of Operations', focus: 'Delivery, process optimization' },
            { _uid: uuid(), component: 'team_member', name: 'Ivana', role: 'Head of Project Management', focus: 'Execution, team coordination' },
          ],
        },
        {
          _uid: uuid(),
          component: 'stats_blocks',
          headline: 'The Delivery Engine',
          copy: 'Every AgileRP project is backed by our full engineering organization. You get dedicated architects and developers, supported by a proven delivery framework.',
          stats: [
            { _uid: uuid(), component: 'stat_block', value: '5', label: 'Development Managers' },
            { _uid: uuid(), component: 'stat_block', value: '4', label: 'Project Managers' },
            { _uid: uuid(), component: 'stat_block', value: '60+', label: 'Software Engineers' },
            { _uid: uuid(), component: 'stat_block', value: '10+', label: 'Years Delivering Enterprise Software' },
          ],
        },
        {
          _uid: uuid(),
          component: 'value_pillars',
          headline: 'What We Bring',
          pillars: [
            {
              _uid: uuid(), component: 'value_pillar',
              title: 'Enterprise Experience',
              description: "We've built systems for Fortune 500 companies, government agencies, and high-growth startups. We know how to architect for scale, security, and maintainability.",
              icon: 'enterprise',
            },
            {
              _uid: uuid(), component: 'value_pillar',
              title: 'Laravel + Filament Expertise',
              description: 'Our engineers specialize in the technologies that power AgileRP. No learning curves, no experiments on your project.',
              icon: 'laravel',
            },
            {
              _uid: uuid(), component: 'value_pillar',
              title: 'Delivery Discipline',
              description: "Weekly demos, clear communication, predictable timelines. We've refined our process over hundreds of projects.",
              icon: 'delivery',
            },
          ],
        },
        {
          _uid: uuid(),
          component: 'location_section',
          headline: 'Based in Slovenia 🇸🇮',
          content: "We're headquartered in Ljubljana, Slovenia—a small country with a disproportionately strong tech talent pool. EU-based, GDPR-compliant, and in a timezone that works with both European and US clients.",
        },
        {
          _uid: uuid(),
          component: 'simple_cta',
          headline: 'Meet the team behind your project',
          primary_cta_text: 'Book an Introduction Call',
          primary_cta_link: { url: '/demo', linktype: 'url' },
        },
      ],
    },
  },
  publish: 1,
};

// About / Manifesto Page
const aboutPage = {
  story: {
    name: 'About',
    slug: 'about',
    content: {
      component: 'page',
      title: 'About - AgileRP',
      body: [
        {
          _uid: uuid(),
          component: 'page_hero',
          headline: 'We believe you should own your software.',
          subheadline: "That's a radical position in the age of subscriptions. Here's why we hold it.",
        },
        {
          _uid: uuid(),
          component: 'text_block',
          headline: 'The Problem We See',
          content: {
            type: 'doc',
            content: [
              { type: 'paragraph', content: [{ type: 'text', text: 'Something broke in enterprise software.' }] },
              { type: 'paragraph', content: [{ type: 'text', text: "Somewhere along the way, 'software' became 'access to software.' You don't buy tools anymore—you rent them. Monthly. Forever." }] },
              { type: 'paragraph', content: [{ type: 'text', text: "And when that vendor gets acquired, pivots, or just decides to raise prices? You're stuck. Your data, your workflows, your business processes—all held hostage by someone else's business model." }] },
              { type: 'paragraph', content: [{ type: 'text', text: "We started AgileRP because we think there's a better way." }] },
            ],
          },
        },
        {
          _uid: uuid(),
          component: 'manifesto_section',
          headline: 'The Anti-Cloud Manifesto',
          items: [
            { _uid: uuid(), component: 'manifesto_item', number: '1', title: 'You should own your code.', description: 'Not license it. Not rent it. Own it. With the right to read, modify, extend, and run it forever.' },
            { _uid: uuid(), component: 'manifesto_item', number: '2', title: 'Your data belongs on your servers.', description: "Not in someone else's cloud, subject to their terms, their security practices, their business continuity." },
            { _uid: uuid(), component: 'manifesto_item', number: '3', title: 'Software should be an asset, not an expense.', description: 'A tool you build once and use for years—not a subscription that compounds forever.' },
            { _uid: uuid(), component: 'manifesto_item', number: '4', title: 'AI should accelerate, not replace, good engineering.', description: 'We use AI to build faster. We use proven frameworks to build better. The combination matters.' },
            { _uid: uuid(), component: 'manifesto_item', number: '5', title: 'Open source prevents lock-in.', description: "When the framework is open, you're never trapped. Any developer can work on your system. Forever." },
            { _uid: uuid(), component: 'manifesto_item', number: '6', title: 'Capability transfer is as important as delivery.', description: "We succeed when you don't need us anymore. That's the goal." },
          ],
        },
        {
          _uid: uuid(),
          component: 'text_block',
          headline: 'Why Now?',
          content: {
            type: 'doc',
            content: [
              { type: 'paragraph', content: [{ type: 'text', text: "AI can generate software faster than ever. That's genuinely exciting." }] },
              { type: 'paragraph', content: [{ type: 'text', text: "But speed without structure creates chaos. 'Vibe coding'—prompting AI to generate whatever works—produces systems that can't be maintained, extended, or understood." }] },
              { type: 'paragraph', content: [{ type: 'text', text: "AgileRP is our answer: AI acceleration within proven architectural patterns. Fast AND sustainable. That's the combination the market needs." }] },
            ],
          },
        },
        {
          _uid: uuid(),
          component: 'history_timeline',
          headline: 'Our History',
          events: [
            { _uid: uuid(), component: 'history_event', year: '2013', description: 'Agiledrop founded in Ljubljana, Slovenia' },
            { _uid: uuid(), component: 'history_event', year: '2014-2024', description: 'Grew to 70+ engineers, delivered 500+ projects for enterprise clients worldwide' },
            { _uid: uuid(), component: 'history_event', year: '2025', description: 'Launched AgileRP to address the shift toward AI-generated internal software' },
            { _uid: uuid(), component: 'history_event', year: 'Today', description: 'Helping businesses build software they actually own' },
          ],
        },
        {
          _uid: uuid(),
          component: 'value_pillars',
          headline: 'Our Values',
          pillars: [
            { _uid: uuid(), component: 'value_pillar', title: 'Ownership', description: "We build things that belong to you. Not 'sort of' yours, not 'you can export your data.' Actually yours.", icon: 'ownership' },
            { _uid: uuid(), component: 'value_pillar', title: 'Craftsmanship', description: 'We take pride in code that works and lasts. Patterns that make sense. Systems that can evolve.', icon: 'craftsmanship' },
            { _uid: uuid(), component: 'value_pillar', title: 'Transparency', description: 'Open source framework. Clear communication. No surprises in scope, timeline, or handover.', icon: 'transparency' },
          ],
        },
        {
          _uid: uuid(),
          component: 'simple_cta',
          headline: 'Ready to own your software?',
          primary_cta_text: 'Book a Discovery Call',
          primary_cta_link: { url: '/demo', linktype: 'url' },
          secondary_cta_text: 'View the Framework on GitHub',
          secondary_cta_link: { url: 'https://github.com/agilerp', linktype: 'url' },
        },
      ],
    },
  },
  publish: 1,
};

async function createOrUpdateStory(storyData, name) {
  console.log(`Creating ${name}...`);

  try {
    // Check if story exists
    const response = await apiRequest('GET', `/spaces/${SPACE_ID}/stories/?with_slug=${storyData.story.slug}`);
    await delay(500);

    if (response.stories && response.stories.length > 0) {
      const existingStory = response.stories[0];
      console.log(`  Found existing story, updating...`);
      const updatePayload = {
        story: {
          name: storyData.story.name,
          slug: storyData.story.slug,
          content: storyData.story.content,
        },
        publish: 1,
      };
      await apiRequest('PUT', `/spaces/${SPACE_ID}/stories/${existingStory.id}`, updatePayload);
      console.log(`  ✓ Updated ${name}`);
    } else {
      console.log(`  Creating new story...`);
      await apiRequest('POST', `/spaces/${SPACE_ID}/stories/`, storyData);
      console.log(`  ✓ Created ${name}`);
    }

    await delay(500);
  } catch (error) {
    console.error(`  ✗ Failed to create ${name}: ${error.message}`);
  }
}

async function main() {
  console.log('Creating page content in Storyblok...\n');

  await createOrUpdateStory(howItWorksPage, 'How It Works');
  await createOrUpdateStory(useCasesPage, 'Use Cases');
  await createOrUpdateStory(teamPage, 'Team');
  await createOrUpdateStory(aboutPage, 'About / Manifesto');

  console.log('\nDone!');
  console.log(`View content at: https://app.storyblok.com/#/me/spaces/${SPACE_ID}/stories`);
}

main();
