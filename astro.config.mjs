// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://phukettatili.com',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    keystatic(),
    markdoc(),
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
        },
      },
    }),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
