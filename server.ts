import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as compression from 'compression';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/frontend/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Habilitar compresión gzip/deflate
  server.use(compression({
    // Solo comprimir respuestas mayores a 1KB
    threshold: 1024,
    // Nivel de compresión (1-9, siendo 6 el balance óptimo)
    level: 6,
    // Filtrar qué tipos de contenido comprimir
    filter: (req, res) => {
      // No comprimir respuestas con Cache-Control: no-transform
      const cacheControl = res.getHeader('Cache-Control');
      if (cacheControl && cacheControl.toString().includes('no-transform')) {
        return false;
      }
      // Usar el filtro por defecto de compression
      return compression.filter(req, res);
    }
  }));

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser con cache estratificado
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y', // Por defecto 1 año
      setHeaders: (res, path) => {
        // Cache estratificado por tipo de archivo
        if (path.includes('.html')) {
          // HTML files: cache corto para permitir actualizaciones
          res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutos
          res.setHeader('ETag', 'weak');
        } else if (path.includes('.js') || path.includes('.css')) {
          // JS/CSS: cache largo con versionado
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 año
        } else if (path.includes('.webp') || path.includes('.jpg') || path.includes('.png') || path.includes('.gif')) {
          // Imágenes: cache medio-largo
          res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 días
        } else if (path.includes('.ico') || path.includes('.woff') || path.includes('.woff2')) {
          // Icons y fonts: cache muy largo
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 año
        }
        
        // Headers de seguridad y performance
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
      }
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
