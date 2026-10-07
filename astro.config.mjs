// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://phukettatili.com',
  output: 'static',
  adapter: netlify(),
  session: false,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), keystatic(), markdoc(), sitemap({
    i18n: {
      defaultLocale: 'tr',
      locales: {
        tr: 'tr-TR',
      },
    },
  })],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  }
});
