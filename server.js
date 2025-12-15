const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.tsx': 'text/plain', // Serve TSX as text for Babel to transpile
  '.ts': 'text/plain'
};

const server = http.createServer((req, res) => {
  // Handle requests
  let filePath = req.url === '/' ? './index.html' : '.' + req.url;
  
  // Resolve extensionless imports (e.g., import App from './App')
  // This is crucial because React imports often omit extensions
  if (!path.extname(filePath) && filePath !== './index.html') {
    if (fs.existsSync(filePath + '.tsx')) filePath += '.tsx';
    else if (fs.existsSync(filePath + '.ts')) filePath += '.ts';
    else if (fs.existsSync(filePath + '.js')) filePath += '.js';
  }

  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT') {
        // SPA Fallback: Serve index.html for non-asset routes
        // This ensures reloading pages like /about works
        if (!extname || extname === '.html') {
             fs.readFile('./index.html', (err, htmlContent) => {
                 if (err) {
                     res.writeHead(500);
                     res.end('Error loading index.html');
                 } else {
                     res.writeHead(200, { 'Content-Type': 'text/html' });
                     res.end(htmlContent, 'utf-8');
                 }
             });
        } else {
            res.writeHead(404);
            res.end('Not found');
        }
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});