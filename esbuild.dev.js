import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import esbuild from 'esbuild';

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
      logLevel: 'debug',
      entryPoints: [path.resolve(dirName, 'src/index.tsx')],
      bundle: true,
      sourcemap: true,
      color: true,
      outfile: path.resolve(dirName, 'public/dist/out.js'),
      plugins: [
        stylePlugin({
          postcssConfigFile: path.resolve(dirName, 'postcss.config.js'),
        }),
        svgrPlugin(),
      ],
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
