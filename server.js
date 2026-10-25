const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env if present
(function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    try {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const k = trimmed.slice(0, eqIdx).trim();
          const v = trimmed.slice(eqIdx + 1).trim();
          if (!process.env[k]) process.env[k] = v;
        }
      });
    } catch (e) {
      console.warn('Could not load .env file:', e.message);
    }
  }
})();

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || 'localhost';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Safe client configuration API (Only public/publishable credentials exposed)
  if (reqPath === '/api/config') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store'
    });
    res.end(JSON.stringify({
      supabaseUrl: process.env.SUPABASE_URL || 'https://urgoewkatpxpccbixbwn.supabase.co',
      supabaseAnonKey: process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_SuGOU4wfA4vTygM_ROditw_Xo6gIykK'
    }));
    return;
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/Tide.html';
  }

  const normalizedPath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(__dirname, normalizedPath);

  // Security check: ensure path is within __dirname
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // Fallback to Tide.html
      const defaultFile = path.join(__dirname, 'Tide.html');
      fs.readFile(defaultFile, (fallbackErr, data) => {
        if (fallbackErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data);
        }
      });
      return;
    }

    let targetFile = filePath;
    if (stats.isDirectory()) {
      targetFile = path.join(filePath, 'Tide.html');
    }

    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    fs.createReadStream(targetFile).pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`\n========================================`);
  console.log(`🚀 Server listening on host ${HOST}`);
  console.log(`👉 Local:   http://${HOST}:${PORT}`);
  console.log(`👉 Tide:    http://${HOST}:${PORT}/Tide.html`);
  console.log(`========================================\n`);
});
