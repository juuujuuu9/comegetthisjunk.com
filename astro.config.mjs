// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://comegetthisjunk.com',
	trailingSlash: 'always',
	integrations: [sitemap()],
	server: {
		host: '0.0.0.0',
		port: 41731,
	},
});
