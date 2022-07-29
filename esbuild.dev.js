import 'dotenv/config';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
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
const startTime = new Date().getTime();

esbuild
  .serve(
    {
      host: 'localhost',
      servedir: 'public',
      port: 4000,
    },
    {
      logLevel: 'info',
      entryPoints: [path.resolve(dirName, 'src/index.tsx')],
      bundle: true,
      sourcemap: true,
      color: true,
      outfile: path.resolve(dirName, 'public/dist/out.js'),
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
    },
  )
  .then(server => {
    const { host, port } = server;
    const app = express();

    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(dirName, 'public/index.html'), function (err) {
        if (err) {
          res.status(500).send(err);
        }
      });
    });

    app.listen(3000);

    const endTime = new Date().getTime();
    const timeDiff = endTime - startTime;
    console.log(
      `😽 Build successfully in ${timeDiff} ms, development server started at: \n👉 http://${host}:3000`,
    );
  })
  .catch(() => process.exit(1));
