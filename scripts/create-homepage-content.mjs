#!/usr/bin/env node
/**
 * Script to create homepage content in Storyblok
 */

const SPACE_ID = process.env.STORYBLOK_SPACE_ID || '290007469041361';
const API_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const API_BASE = 'https://mapi.storyblok.com/v1';

if (!API_TOKEN) {
  console.error('Error: STORYBLOK_MANAGEMENT_TOKEN environment variable is required');
  console.error('Set it with: export STORYBLOK_MANAGEMENT_TOKEN=your_token');
  process.exit(1);
}

async function apiRequest(method, endpoint, body = null) {
  const options = {
    method,
    headers: {
      'Authorization': API_TOKEN,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, options);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error ${response.status}: ${text}`);
  }

  return response.json();
}

// Generate UUIDs for nested bloks
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Homepage content structure
const homepageContent = {
  story: {
    name: 'Home',
    slug: 'home',
    content: {
      component: 'page',
      title: 'AgileRP - Business Software You Own',
      body: [
        // Hero Section
        {
          _uid: uuid(),
          component: 'hero',
          eyebrow: 'Built with Filament. Customized by AI. Owned by you.',
          phrases: [
            { _uid: uuid(), component: 'hero_phrase', use_case: 'CRM that tracks client relationships', infrastructure: 'own servers' },
            { _uid: uuid(), component: 'hero_phrase', use_case: 'inventory system with real-time alerts', infrastructure: 'company database' },
            { _uid: uuid(), component: 'hero_phrase', use_case: 'project tracker with AI insights', infrastructure: 'existing infrastructure' },
            { _uid: uuid(), component: 'hero_phrase', use_case: 'vendor management system', infrastructure: 'Azure cloud' },
            { _uid: uuid(), component: 'hero_phrase', use_case: 'manufacturing dashboard', infrastructure: 'on-premise datacenter' },
          ],
          supporting_text: "AgileRP combines proven frameworks with AI-accelerated development to deliver custom business applications you fully control—deployed on your infrastructure, with complete code ownership.",
          cta_text: 'Start Building',
          cta_link: { url: '/demo', linktype: 'url' },
        },

        // Logo Bar Section
        {
          _uid: uuid(),
          component: 'logo_bar',
          badge: { _uid: uuid(), component: 'badge', text: 'Trusted by innovative teams' },
          logos: [
            { _uid: uuid(), component: 'logo_item', name: 'BMW Motorrad' },
            { _uid: uuid(), component: 'logo_item', name: 'Telekom Slovenije' },
            { _uid: uuid(), component: 'logo_item', name: 'Atlantic Grupa' },
            { _uid: uuid(), component: 'logo_item', name: 'Miele' },
            { _uid: uuid(), component: 'logo_item', name: 'Petrol' },
          ],
        },

        // Value Proposition Section
        {
          _uid: uuid(),
          component: 'value_proposition',
          headline: 'Why own when you could rent? Because renting costs you more.',
          supporting_text: "Traditional SaaS extracts value from your business. Per-seat pricing that scales against you. Features locked behind enterprise tiers. Your data trapped in someone else's database. Every month, you're paying for software you'll never own. We think there's a better way.",
          cards: [
            {
              _uid: uuid(),
              component: 'value_proposition_card',
              topic: 'Cost',
              headline: 'One investment, not infinite payments',
              copy: 'Stop funding someone else\'s R&D with monthly fees. Build equity in software that appreciates with your business.',
            },
            {
              _uid: uuid(),
              component: 'value_proposition_card',
              topic: 'Control',
              headline: 'Your infrastructure, your rules',
              copy: 'Run on AWS, Azure, your own servers, or a Raspberry Pi in your basement. No vendor lock-in, no data hostage situations.',
            },
            {
              _uid: uuid(),
              component: 'value_proposition_card',
              topic: 'Customization',
              headline: 'Not just configurable—truly custom',
              copy: "When you own the code, 'that's not possible' becomes 'let me show you how'. Modify anything, integrate everything.",
            },
            {
              _uid: uuid(),
              component: 'value_proposition_card',
              topic: 'Security',
              headline: 'Air-gapped if you need it',
              copy: 'Sensitive industries require sensitive solutions. Your data never has to touch the public internet.',
            },
          ],
        },

        // Scrolling Cards Section
        {
          _uid: uuid(),
          component: 'scrolling_cards',
          section_title: 'What AgileRP actually does',
          cards: [
            {
              _uid: uuid(),
              component: 'use_case_card',
              icon: 'gears',
              category: 'Operations',
              headline: 'Replace your spreadsheet chaos',
              copy: 'That critical Excel file everyone\'s afraid to touch? The one person who understands the Access database retired? We\'ve seen it all. AgileRP transforms tribal knowledge into structured, maintainable systems.',
              tag_label: 'MOST REQUESTED',
            },
            {
              _uid: uuid(),
              component: 'use_case_card',
              icon: 'calculator',
              category: 'Finance',
              headline: 'Connect your financial silos',
              copy: 'Your ERP talks to nothing. Your invoicing system has no idea what your inventory system is doing. We build the bridges that let your data flow where it needs to go.',
              tag_label: '',
            },
            {
              _uid: uuid(),
              component: 'use_case_card',
              icon: 'building',
              category: 'Industry',
              headline: 'Bespoke for your vertical',
              copy: 'Manufacturing? Healthcare? Logistics? We speak your language and understand your compliance requirements. No more forcing your processes into generic software shapes.',
              tag_label: '',
            },
          ],
        },

        // Feature Grid Section
        {
          _uid: uuid(),
          component: 'feature_grid',
          headline: 'The best of both worlds',
          features: [
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'code',
              headline: 'Framework foundations',
              copy: 'Built on Laravel and Filament—battle-tested, well-documented, with millions of developers who can maintain it.',
            },
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'connection',
              headline: 'Connect everything',
              copy: 'REST, GraphQL, SOAP, that weird legacy protocol from 2003—if it has an API, we can integrate it.',
            },
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'ai',
              headline: 'AI that assists, not replaces',
              copy: 'Machine learning for the tedious stuff: data entry, categorization, anomaly detection. Human judgment for everything else.',
            },
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'dev',
              headline: 'Built for developers',
              copy: 'Clean architecture, comprehensive tests, documentation that doesn\'t suck. Your team can maintain this.',
            },
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'shield',
              headline: 'Enterprise security',
              copy: 'RBAC, audit logging, SSO, 2FA. The serious stuff, without the enterprise price tag.',
            },
            {
              _uid: uuid(),
              component: 'feature_item',
              icon: 'opensource',
              headline: 'Open source core',
              copy: 'Inspect every line. No black boxes, no mystery code, no "trust us."',
            },
          ],
        },

        // Tabbed Demo Section
        {
          _uid: uuid(),
          component: 'tabbed_demo',
          section_title: 'Your toolkit, three ways',
          section_copy: "Build with AI assistance, drag-and-drop visual tools, or pure code. Switch between them seamlessly. The interface adapts to your team's skills—not the other way around.",
          tabs: [
            {
              _uid: uuid(),
              component: 'demo_tab',
              tab_id: 'chat',
              tab_label: 'AI Chat',
              headline: 'Describe what you want',
              copy: 'Tell the AI what you need in plain English. It generates the code, you review and refine. Perfect for rapid prototyping and non-technical stakeholders.',
            },
            {
              _uid: uuid(),
              component: 'demo_tab',
              tab_id: 'visual',
              tab_label: 'Visual Builder',
              headline: 'Point and click your way there',
              copy: 'Drag components, set properties, connect data sources. No code required for standard workflows. Export to code when you need more control.',
            },
            {
              _uid: uuid(),
              component: 'demo_tab',
              tab_id: 'code',
              tab_label: 'Pure Code',
              headline: 'Full control, always',
              copy: 'Everything generates clean, readable PHP. Modify it directly, version it in Git, deploy it anywhere. The visual tools are conveniences, not constraints.',
            },
          ],
        },

        // Comparison Section
        {
          _uid: uuid(),
          component: 'comparison_section',
          headline: 'Our Anti-Cloud Manifesto',
          left_title: 'What SaaS gives you',
          left_items: [
            { _uid: uuid(), component: 'comparison_item', text: 'Monthly fees that increase annually' },
            { _uid: uuid(), component: 'comparison_item', text: 'Features locked behind higher tiers' },
            { _uid: uuid(), component: 'comparison_item', text: 'Your data on their servers' },
            { _uid: uuid(), component: 'comparison_item', text: '"Customization" that means config options' },
            { _uid: uuid(), component: 'comparison_item', text: 'Vendor lock-in by design' },
          ],
          right_title: 'What we give you',
          right_items: [
            { _uid: uuid(), component: 'comparison_item', text: 'One-time build, you own the result' },
            { _uid: uuid(), component: 'comparison_item', text: 'Every feature, no artificial limits' },
            { _uid: uuid(), component: 'comparison_item', text: 'Your data on your terms' },
            { _uid: uuid(), component: 'comparison_item', text: 'True customization: change the code' },
            { _uid: uuid(), component: 'comparison_item', text: 'Deploy anywhere, switch providers anytime' },
          ],
          cta_text: 'Join the movement',
          cta_link: { url: '/manifesto', linktype: 'url' },
        },

        // Stats Grid Section
        {
          _uid: uuid(),
          component: 'stats_grid',
          headline: 'Results that speak',
          stats: [
            { _uid: uuid(), component: 'stat_item', value: '60%', label: 'Average reduction in operational costs', company: 'Manufacturing client' },
            { _uid: uuid(), component: 'stat_item', value: '3 months', label: 'Typical time from kickoff to production', company: 'Across all projects' },
            { _uid: uuid(), component: 'stat_item', value: '€2.1M', label: 'Saved vs. SaaS over 5 years', company: 'Financial services client' },
            { _uid: uuid(), component: 'stat_item', value: '12 years', label: 'Longest-running AgileRP installation', company: 'Still going strong' },
          ],
        },

        // Process Steps Section
        {
          _uid: uuid(),
          component: 'process_steps',
          headline: 'Implementation, not just software',
          supporting_message: "We're not selling you software. We're building your capability.",
          steps: [
            { _uid: uuid(), component: 'process_step', number: '01', title: 'Discover', description: 'We understand your processes, data, and team. No generic demos—real conversations about what you need.' },
            { _uid: uuid(), component: 'process_step', number: '02', title: 'Build', description: 'Our architects design and AI accelerates. You see progress weekly, provide feedback continuously.' },
            { _uid: uuid(), component: 'process_step', number: '03', title: 'Own', description: 'Deployed on your infrastructure. Full code handover. Training for your team. Ongoing support if you want it.' },
          ],
        },

        // Blog Preview Section
        {
          _uid: uuid(),
          component: 'blog_preview',
          headline: 'Perspectives on ownership-first software',
          posts: [
            { _uid: uuid(), component: 'blog_post_preview', title: 'Why vibe coding produces unmaintainable software', category: 'Engineering', link: { url: '/blog/vibe-coding', linktype: 'url' } },
            { _uid: uuid(), component: 'blog_post_preview', title: 'The true cost of SaaS over 5 years', category: 'Business', link: { url: '/blog/saas-cost', linktype: 'url' } },
            { _uid: uuid(), component: 'blog_post_preview', title: 'Laravel + AI: How frameworks constrain chaos', category: 'Technology', link: { url: '/blog/laravel-ai', linktype: 'url' } },
          ],
        },

        // Final CTA Section
        {
          _uid: uuid(),
          component: 'final_cta',
          headline: "It's your turn to own",
          subheadline: 'Stop renting software. Start building assets.',
          primary_cta_text: 'Book a Discovery Call',
          primary_cta_link: { url: '/demo', linktype: 'url' },
          secondary_cta_text: 'Explore on GitHub',
          secondary_cta_link: { url: 'https://github.com/agilerp', linktype: 'url' },
          tech_logos: 'Laravel, Filament, PHP, MySQL, PostgreSQL',
        },
      ],
    },
    // Note: is_startpage requires parent_id for folders
  },
  publish: 1,
};

async function main() {
  console.log('Creating homepage content in Storyblok...');

  try {
    // First, check if home story exists
    let existingStory = null;
    try {
      const response = await apiRequest('GET', `/spaces/${SPACE_ID}/stories/?with_slug=home`);
      if (response.stories && response.stories.length > 0) {
        existingStory = response.stories[0];
        console.log('Found existing home story, will update it...');
      }
    } catch (e) {
      console.log('No existing home story found, will create new...');
    }

    if (existingStory) {
      // Update existing story - don't change is_startpage setting
      const updatePayload = {
        story: {
          name: homepageContent.story.name,
          slug: homepageContent.story.slug,
          content: homepageContent.story.content,
        },
        publish: 1,
      };
      const result = await apiRequest('PUT', `/spaces/${SPACE_ID}/stories/${existingStory.id}`, updatePayload);
      console.log('Homepage updated successfully!');
      console.log('Story ID:', result.story.id);
      console.log('Story UUID:', result.story.uuid);
    } else {
      // Create new story
      const result = await apiRequest('POST', `/spaces/${SPACE_ID}/stories/`, homepageContent);
      console.log('Homepage created successfully!');
      console.log('Story ID:', result.story.id);
      console.log('Story UUID:', result.story.uuid);
    }

    console.log('\nYou can now view the content at:');
    console.log(`https://app.storyblok.com/#/me/spaces/${SPACE_ID}/stories`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
