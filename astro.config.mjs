// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ['one-dark-pro'],
      plugins: [pluginCollapsibleSections()],
    }),
    mdx()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});