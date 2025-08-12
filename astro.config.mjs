// @ts-check
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://ipta-1.pages.dev/",
	integrations: [mdx(), sitemap(), react()],

	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	markdown: {
		shikiConfig: {
			theme: "dark-plus",
			wrap: true,
		},
	},
	adapter: cloudflare(),

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			// @ts-expect-error - temporary fix https://github.com/withastro/adapters/pull/436
			alias: import.meta.env.PROD && {
				"react-dom/server": "react-dom/server.edge",
			},
		},
	},
});
