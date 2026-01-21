import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const {
	NETLIFY,
	STORYBLOK_DELIVERY_API_TOKEN,
	STORYBLOK_API_BASE_URL,
	STORYBLOK_REGION,
} = env;

export default defineConfig({
	integrations: [
		storyblok({
			accessToken: STORYBLOK_DELIVERY_API_TOKEN,
			bridge: {
				preventClicks: true,
				resolveRelations: [],
			},
			livePreview: true,
			apiOptions: {
				/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
				region: STORYBLOK_REGION || 'eu',
				/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
				endpoint: STORYBLOK_API_BASE_URL
					? `${new URL(STORYBLOK_API_BASE_URL).origin}/v2`
					: undefined,
			},
			components: {
				// Page types
				page: 'storyblok/Page',
				// Homepage sections
				hero: 'storyblok/Hero',
				logo_bar: 'storyblok/LogoBar',
				value_proposition: 'storyblok/ValueProposition',
				scrolling_cards: 'storyblok/ScrollingCards',
				feature_grid: 'storyblok/FeatureGrid',
				tabbed_demo: 'storyblok/TabbedDemo',
				comparison_section: 'storyblok/ComparisonSection',
				stats_grid: 'storyblok/StatsGrid',
				process_steps: 'storyblok/ProcessSteps',
				blog_preview: 'storyblok/BlogPreview',
				final_cta: 'storyblok/FinalCTA',
				// Legacy components
				grid: 'storyblok/Grid',
				feature: 'storyblok/Feature',
				teaser: 'storyblok/Teaser',
				image_text: 'storyblok/ImageText',
			},
		}),
	],
	output: 'server',
	adapter: NETLIFY ? netlify() : vercel(),
	vite: {
		plugins: [mkcert()],
	},
});
