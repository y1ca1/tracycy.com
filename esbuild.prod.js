import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

import mdx from '@mdx-js/esbuild';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkEmbedImages from 'remark-embed-images';
// import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';

import stylePlugin from 'esbuild-style-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';

const dirName = dirname(fileURLToPath(import.meta.url));

esbuild
  .build({
    entryPoints: [path.resolve(dirName, 'src/index.tsx')],
    target: ['es6'],
    format: 'esm',
    bundle: true,
    minify: true,
    splitting: true,
    outdir: path.resolve(dirName, 'dist/static'),
    // outfile: path.resolve(dirName, 'dist/out.js'),
    loader: {
      '.png': 'dataurl',
      '.jpg': 'dataurl',
      '.jpeg': 'dataurl',
      '.gif': 'dataurl',
    },
    plugins: [
      stylePlugin({
        postcssConfigFile: path.resolve(dirName, 'postcss.config.js'),
      }),
      svgrPlugin(),
      mdx({
        development: true,
        remarkPlugins: [
          remarkMath,
          remarkGfm,
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkEmbedImages,
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
    ],
    define: { 'process.env.GMapAPIKey': `'${process.env.GMapAPIKey}'` },
  })
  .then(() => {
    console.log(`😽 Build success! The dist folder is production ready!`);
  })
  .catch(() => process.exit(1));
