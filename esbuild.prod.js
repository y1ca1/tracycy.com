import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

import stylePlugin from 'esbuild-style-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';

const dirName = dirname(fileURLToPath(import.meta.url));

esbuild
  .build({
    entryPoints: [path.resolve(dirName, 'src/index.tsx')],
    bundle: true,
    sourcemap: true,
    outfile: path.resolve(dirName, 'public/dist/out.js'),
    plugins: [
      stylePlugin({
        postcssConfigFile: path.resolve(dirName, 'postcss.config.js'),
      }),
      svgrPlugin(),
    ],
  })
  .then(() => {
    console.log(`😽 Build success! The dist folder is production ready!`);
  })
  .catch(() => process.exit(1));
