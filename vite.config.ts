import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import svgr from 'vite-plugin-svgr';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkMath,
          remarkGfm,
          remarkFrontmatter,
          remarkMdxFrontmatter,
        ],
        rehypePlugins: [
          rehypeKatex,
          rehypePrism,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            { behavior: 'append', test: ['h2', 'h3', 'h4', 'h5', 'h6'] },
          ],
        ],
      }),
    },
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 4096, // Stream images instead of base64 inlining in JS
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react/') ||
              id.includes('react-dom/') ||
              id.includes('react-router') ||
              id.includes('scheduler')
            ) {
              return 'react-vendor';
            }
            if (
              id.includes('@headlessui') ||
              id.includes('flowbite') ||
              id.includes('heroicons')
            ) {
              return 'ui-vendor';
            }
          }
        },
      },
    },
  },
  define: {
    'process.env.GMapAPIKey': JSON.stringify(process.env.GMapAPIKey || ''),
    'process.env.GATagID': JSON.stringify(
      process.env.GATagID || 'G-4DHLGRJRV5',
    ),
  },
  server: {
    port: 3000,
  },
});
