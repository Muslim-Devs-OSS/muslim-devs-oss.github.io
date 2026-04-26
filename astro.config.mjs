// @ts-check
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    trailingSlash: "never",
    site: "https://muslim-devs-oss.github.io",
    base: "/",
    vite: {
        plugins: [tailwindcss()]
    },
});
