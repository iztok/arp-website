#!/usr/bin/env node
/**
 * Script to create new Storyblok component schemas for additional pages
 */

const SPACE_ID = '290007469041361';
const API_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const API_BASE = 'https://mapi.storyblok.com/v1';

if (!API_TOKEN) {
  console.error('Error: STORYBLOK_MANAGEMENT_TOKEN environment variable is required');
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
  if (body) options.body = JSON.stringify(body);
  const response = await fetch(`${API_BASE}${endpoint}`, options);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error ${response.status}: ${text}`);
  }
  return response.json();
}

const newComponents = [
  // Page Hero (simpler hero for inner pages)
  {
    name: 'page_hero',
    display_name: 'Page Hero',
    schema: {
      headline: { type: 'text', pos: 0 },
      subheadline: { type: 'textarea', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Process Timeline
  {
    name: 'process_timeline',
    display_name: 'Process Timeline',
    schema: {
      headline: { type: 'text', pos: 0 },
      phases: { type: 'bloks', restrict_components: true, component_whitelist: ['process_phase'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'process_phase',
    display_name: 'Process Phase',
    schema: {
      phase_number: { type: 'text', pos: 0 },
      title: { type: 'text', pos: 1 },
      duration: { type: 'text', pos: 2 },
      icon: { type: 'text', pos: 3, description: 'Icon name: magnifying-glass, construction, key' },
      items: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 4 },
      involvement: { type: 'text', pos: 5 },
      deliverable: { type: 'text', pos: 6 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'text_item',
    display_name: 'Text Item',
    schema: {
      text: { type: 'text', pos: 0 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Two Column Section
  {
    name: 'two_column_section',
    display_name: 'Two Column Section',
    schema: {
      headline: { type: 'text', pos: 0 },
      left_title: { type: 'text', pos: 1 },
      left_items: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 2 },
      right_title: { type: 'text', pos: 3 },
      right_items: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 4 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Comparison Table
  {
    name: 'comparison_table',
    display_name: 'Comparison Table',
    schema: {
      headline: { type: 'text', pos: 0 },
      columns: { type: 'bloks', restrict_components: true, component_whitelist: ['table_column'], pos: 1 },
      rows: { type: 'bloks', restrict_components: true, component_whitelist: ['table_row'], pos: 2 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'table_column',
    display_name: 'Table Column',
    schema: {
      title: { type: 'text', pos: 0 },
      highlight: { type: 'boolean', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'table_row',
    display_name: 'Table Row',
    schema: {
      label: { type: 'text', pos: 0 },
      values: { type: 'bloks', restrict_components: true, component_whitelist: ['table_cell'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'table_cell',
    display_name: 'Table Cell',
    schema: {
      value: { type: 'text', pos: 0 },
      type: { type: 'option', pos: 1, options: [
        { value: 'yes', name: 'Yes (green)' },
        { value: 'no', name: 'No (red)' },
        { value: 'partial', name: 'Partial (yellow)' },
        { value: 'text', name: 'Plain text' },
      ]},
    },
    is_nestable: true,
    is_root: false,
  },

  // FAQ Section
  {
    name: 'faq_section',
    display_name: 'FAQ Section',
    schema: {
      headline: { type: 'text', pos: 0 },
      items: { type: 'bloks', restrict_components: true, component_whitelist: ['faq_item'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'faq_item',
    display_name: 'FAQ Item',
    schema: {
      question: { type: 'text', pos: 0 },
      answer: { type: 'textarea', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Tabbed Use Cases
  {
    name: 'use_case_tabs',
    display_name: 'Use Case Tabs',
    schema: {
      headline: { type: 'text', pos: 0 },
      tabs: { type: 'bloks', restrict_components: true, component_whitelist: ['use_case_tab'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'use_case_tab',
    display_name: 'Use Case Tab',
    schema: {
      tab_id: { type: 'text', pos: 0 },
      tab_label: { type: 'text', pos: 1 },
      icon: { type: 'text', pos: 2 },
      builds: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 3 },
      example_title: { type: 'text', pos: 4 },
      example_text: { type: 'textarea', pos: 5 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Industry Grid
  {
    name: 'industry_grid',
    display_name: 'Industry Grid',
    schema: {
      headline: { type: 'text', pos: 0 },
      industries: { type: 'bloks', restrict_components: true, component_whitelist: ['industry_card'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'industry_card',
    display_name: 'Industry Card',
    schema: {
      name: { type: 'text', pos: 0 },
      items: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Callout Box
  {
    name: 'callout_box',
    display_name: 'Callout Box',
    schema: {
      headline: { type: 'text', pos: 0 },
      items: { type: 'bloks', restrict_components: true, component_whitelist: ['text_item'], pos: 1 },
      footer_text: { type: 'text', pos: 2 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Team Section
  {
    name: 'team_section',
    display_name: 'Team Section',
    schema: {
      headline: { type: 'text', pos: 0 },
      members: { type: 'bloks', restrict_components: true, component_whitelist: ['team_member'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'team_member',
    display_name: 'Team Member',
    schema: {
      name: { type: 'text', pos: 0 },
      role: { type: 'text', pos: 1 },
      focus: { type: 'text', pos: 2 },
      photo: { type: 'asset', filetypes: ['images'], pos: 3 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Stats Blocks
  {
    name: 'stats_blocks',
    display_name: 'Stats Blocks',
    schema: {
      headline: { type: 'text', pos: 0 },
      copy: { type: 'textarea', pos: 1 },
      stats: { type: 'bloks', restrict_components: true, component_whitelist: ['stat_block'], pos: 2 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'stat_block',
    display_name: 'Stat Block',
    schema: {
      value: { type: 'text', pos: 0 },
      label: { type: 'text', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Value Pillars
  {
    name: 'value_pillars',
    display_name: 'Value Pillars',
    schema: {
      headline: { type: 'text', pos: 0 },
      pillars: { type: 'bloks', restrict_components: true, component_whitelist: ['value_pillar'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'value_pillar',
    display_name: 'Value Pillar',
    schema: {
      title: { type: 'text', pos: 0 },
      description: { type: 'textarea', pos: 1 },
      icon: { type: 'text', pos: 2 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Manifesto Section
  {
    name: 'manifesto_section',
    display_name: 'Manifesto Section',
    schema: {
      headline: { type: 'text', pos: 0 },
      items: { type: 'bloks', restrict_components: true, component_whitelist: ['manifesto_item'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'manifesto_item',
    display_name: 'Manifesto Item',
    schema: {
      number: { type: 'text', pos: 0 },
      title: { type: 'text', pos: 1 },
      description: { type: 'textarea', pos: 2 },
    },
    is_nestable: true,
    is_root: false,
  },

  // History Timeline
  {
    name: 'history_timeline',
    display_name: 'History Timeline',
    schema: {
      headline: { type: 'text', pos: 0 },
      events: { type: 'bloks', restrict_components: true, component_whitelist: ['history_event'], pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
  {
    name: 'history_event',
    display_name: 'History Event',
    schema: {
      year: { type: 'text', pos: 0 },
      description: { type: 'text', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Text Block (narrative sections)
  {
    name: 'text_block',
    display_name: 'Text Block',
    schema: {
      headline: { type: 'text', pos: 0 },
      content: { type: 'richtext', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Simple CTA
  {
    name: 'simple_cta',
    display_name: 'Simple CTA',
    schema: {
      headline: { type: 'text', pos: 0 },
      copy: { type: 'textarea', pos: 1 },
      primary_cta_text: { type: 'text', pos: 2 },
      primary_cta_link: { type: 'link', pos: 3 },
      secondary_cta_text: { type: 'text', pos: 4 },
      secondary_cta_link: { type: 'link', pos: 5 },
    },
    is_nestable: true,
    is_root: false,
  },

  // Location Section
  {
    name: 'location_section',
    display_name: 'Location Section',
    schema: {
      headline: { type: 'text', pos: 0 },
      content: { type: 'textarea', pos: 1 },
    },
    is_nestable: true,
    is_root: false,
  },
];

async function main() {
  console.log('Creating new Storyblok component schemas...\n');

  for (const component of newComponents) {
    try {
      const result = await apiRequest('POST', `/spaces/${SPACE_ID}/components/`, { component });
      console.log(`✓ Created: ${component.display_name}`);
    } catch (error) {
      if (error.message.includes('422') && error.message.includes('already exists')) {
        console.log(`- Exists: ${component.display_name}`);
      } else {
        console.error(`✗ Failed: ${component.display_name} - ${error.message}`);
      }
    }
  }

  console.log('\nDone!');
}

main();
