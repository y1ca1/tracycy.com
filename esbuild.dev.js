import http from 'http';
import esbuild from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';

esbuild
  .serve(
    {
      host: 'localhost',
      servedir: 'public',
      port: 4000,
    },
    {
      logLevel: 'debug',
      entryPoints: ['src/index.tsx'],
      bundle: true,
      sourcemap: true,
      color: true,
      outfile: 'public/dist/out.js',
      plugins: [lessLoader()],
    },
  )
  .then(server => {
    const { host, port } = server;
    http
      .createServer((req, res) => {
        const options = {
          hostname: host,
          port: port,
          path: req.url,
          method: req.method,
          headers: req.headers,
        };

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, proxyRes => {
          // If esbuild returns "not found", send a custom 404 page
          if (proxyRes.statusCode === 404) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h2>NOT FOUND! </h2>');
            return;
          }

          // Otherwise, forward the response from esbuild to the client
          res.writeHead(proxyRes.statusCode, proxyRes.headers);
          proxyRes.pipe(res, { end: true });
        });

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true });
      })
      .listen(3000);
    console.log(
      `😽 Build success, development server started at: \n👉 http://${host}:3000`,
    );
    // Call "stop" on the web server to stop serving
    // server.stop()
  })
  .catch(() => process.exit(1));
